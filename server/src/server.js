import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });
const port = process.env.PORT;
const dbConn = process.env.DB_CONN;
const secret = process.env.SECRET;
const clientSecret = process.env.CLIENT_SECRET;
const baseURL = process.env.BASE_URL;
const clientID = process.env.CLIENT_ID;
const issuerBaseURL = process.env.ISSUER_BASE_URL;
import Database from "./classes/Database.js";
const database = new Database(dbConn);

import joi from "joi";
import express from "express";
import slowDown from "express-slow-down";
import signale from "signale";
import path from "path";
const __dirname = path.resolve();

const app = express();

//import auth from express open id connect, and configure it
import pkg from "express-openid-connect";
const { auth, requiresAuth } = pkg;
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: `${secret}`,
  clientSecret: `${clientSecret}`,
  baseURL: `${baseURL}`,
  clientID: `${clientID}`,
  issuerBaseURL: `${issuerBaseURL}`,
};

//Express JSON middleware
app.use(express.json());

//Express Rate Limit middleware for API routes
app.use(
  "/api",
  slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 100, // limit each IP to 100 requests per windowMs
    delayMs: 100, // slow down subsequent requests by 100ms
    maxDelayMs: 2000, // start blocking after 2000ms requests
    onLimitReached: (req, res, options) => {
      res.status(429).send("Too many requests, please try again later.");
    },
  })
);

// //Secure API routes with express open id connect
// app.use("/api", requiresAuth());

//auth router attaches /login, /logout, and /callback routes to the baseURL (auth middleware)
//have app use auth along with its configration and built in routes
app.use(auth(config));

//import "/" route (home.js) and use with app which is using auth already
import home from "./routes/home.js";
app.use("/", home);

//get the user info from the database
app.get("/api/user", requiresAuth(), async (req, res) => {
  try {
    await database.findUser(req.oidc.user.email).then((user) => {
      const userInfo = {
        email: user.email,
        settings: user.settings,
        statistics: user.statistics,
      };
      res.json(userInfo);
    });
  } catch (err) {
    // signale.error("User Private Endpoint Error: " + err);
  }
});

app.post("/api/update/settings", requiresAuth(), async (req, res) => {
  try {
    const { backgroundColor } = req.body;

    const validationSchema = joi.object({
      backgroundColor: joi
        .string()
        .pattern(new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")),
    });

    const validationFlag = validationSchema.validate({ backgroundColor });

    if (validationFlag.error) {
      res.status(400).send("what you doing here bruv 凸ಠ益ಠ)凸");
    } else {
      await database.updateBackgroundColor(
        req.oidc.user.email,
        backgroundColor
      );
      res.sendStatus(200);
    }
  } catch (err) {
    signale.error("Update Settings Error: " + err);
  }
});

app.post("/api/update/statistics", requiresAuth(), async (req, res) => {
  try {
    const average = req.body.average || undefined;
    const averageOf5 = req.body.averageOf5 || undefined;

    const statistics = { average, averageOf5 };
    await database.updateStatistics(req.oidc.user.email, statistics);
    res.sendStatus(200);
  } catch (err) {
    signale.error("Update Statistics Error: " + err);
  }
});

//serve static react build after auth and using routes to stop react build overriding auth
app.use(express.static(path.join(__dirname, "../../client", "build")));

//start server
app.listen(port, () => {
  signale.success(`Server is running on http://localhost:${port}`);
});
