import dotenv from "dotenv";
import express from "express";
import Database from "./classes/Database.js";

dotenv.config({ path: "../config/.env" });
const port = process.env.PORT;
const dbConn = process.env.DB_CONN;

const app = express();

const database = new Database(dbConn);

import home from "./routes/home.js";
app.use("/", home);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
