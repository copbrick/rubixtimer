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

async function main() {
  // await database.createUser({
  //   email: "anthonyjbenjamin@gmail.com",
  //   username: "copbrick",
  //   password: "ballz",
  // });

  await database.findUser("anthonyjbenjamin@gmail.com")

  // await database.removeUser("anthonyjbenjamin@gmail.com");

  // await database.updateUser("anthonyjbenjamin@gmail.com", {username: "Anthony12312"})
}

main().then(() => signale.success("Finished Main Function!"));

import home from "./routes/home.js";
app.use("/", home);

app.listen(port, () => {
  signale.success(`Server is running on http://localhost:${port}`);
});
