import mongoose from "mongoose";
import User from "../models/User.js";
import signale from "signale";
const { Signale } = signale;
const interactive = new Signale({ interactive: true, scope: "interactive" });

export default class Database {
  constructor(mongoURL) {
    mongoose
      .connect(mongoURL, {
        useNewURLParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        signale.success("Database Connected!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async findUser(email) {
    return User.findOne({ email: email });
  }

  async createUser({ email, username, password }) {
    const user = await User.findOne({ email: email });
    signale.start("Creating User...");
    if (user) {
      signale.error("User already exists!");
      return;
    }
    await User.create({
      email: email,
      username: username,
      password: password,
    });
    signale.success("User created successfully!");
  }

  async removeUser(email) {
    const removeFlag = await User.deleteOne({ email: email });
    
    if (removeFlag.deletedCount === 0) {
      signale.error("Could not find user.");
      return;
    }

    return signale.success("Successfully Deleted User.");
  }
}
