import dotenv from "dotenv";
import express from "express";
import signale from "signale";
import signaleConfig from "../config/signaleConfig.js";
import Database from "./classes/Database.js";

import path from "path";
const __dirname = path.resolve();

dotenv.config({ path: "../config/.env" });
const port = process.env.PORT;
const dbConn = process.env.DB_CONN;
const authRequired = process.env.AUTH_REQUIRED === "false" ? true : false;
const auth0Logout = process.env.AUTH_LOGOUT === "true" ? true : false;
const secret = process.env.SECRET;
const baseURL = process.env.BASE_URL;
const clientID = process.env.CLIENT_ID;
const issuerBaseURL = process.env.ISSUER_BASE_URL;

const app = express();
const database = new Database(dbConn);
database.watchEvents();
// database.startWebhook();

//import auth from express open id connect, and configure it
import { auth } from "express-openid-connect";
const config = {
  authRequired: `${authRequired}`,
  auth0Logout: `${auth0Logout}`,
  secret: `${secret}`,
  baseURL: `${baseURL}`,
  clientID: `${clientID}`,
  issuerBaseURL: `${issuerBaseURL}`,
};

//auth router attaches /login, /logout, and /callback routes to the baseURL (auth middleware)
//have app use auth along with its configration and built in routes
app.use(auth(config));

//import "/" route (home.js) and use with app which is using auth already
import home from "./routes/home.js";
app.use("/", home);

//serve static react build after auth and using routes to stop react build overriding auth
app.use(express.static(path.join(__dirname, "../../client", "build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client", "build", "index.html"));
});

//start server
app.listen(port, () => {
  signale.success(`Server is running on http://localhost:${port}`);
});
