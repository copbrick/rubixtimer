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
const secret = process.env.SECRET;
const clientID = process.env.CLIENT_ID;

const app = express();

const database = new Database(dbConn);

//auth stuff
import { auth } from "express-openid-connect" 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: `${secret}`,
  baseURL: 'http://localhost:4000',
  clientID: `${clientID}`,
  issuerBaseURL: 'https://dev--qv8kyr1.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL

app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(auth(config));

// // All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  console.log(path.resolve(__dirname, '../../client/build', 'index.html'))
  console.log(req.oidc.isAuthenticated());
});

// app.get('/:error', (req, res) => {
//   res.send(404, 'Not found')
// });


//test index html route in server dir

// app.get('/', (req, res) => {
//   res.sendFile('index.html', { root: '../' })
//   console.log(req.oidc.user);
// });


// import home from "./routes/home.js";
// app.use("/", home);

app.listen(port, () => {
  signale.success(`Server is running on http://localhost:${port}`);
});
