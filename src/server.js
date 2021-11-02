import dotenv from "dotenv";
import express from "express";
import signale from "signale";
import signaleConfig from "../config/signaleConfig.js";
import Database from "./classes/Database.js";

dotenv.config({ path: "../config/.env" });
const port = process.env.PORT;
const dbConn = process.env.DB_CONN;

const app = express();

const database = new Database(dbConn);
database.createUser({
  email: "sg@gmail.com",
  username: "admin",
  password: "admin",
});

import home from "./routes/home.js";
app.use("/", home);

app.listen(port, () => {
  signale.success(`Server is running on http://localhost:${port}`);
});
