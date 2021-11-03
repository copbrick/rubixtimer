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
    const user = await User.findOne({ email: email }).exec();

    if (user === null) {
      return signale.error("User couldn't be found.");
    }

    signale.success("User Successfully Found.");

    return user;
  }

  async createUser({ email, username, password }) {
    const user = await User.findOne({ email: email });
    signale.start("Creating User...");
    if (user) {
      return signale.error("User already exists!");
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

  async updateUser({
    email,
    username,
    password,
    profileImage,
    statistics,
    settings,
  }) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        email: email,
        username: username,
        password: password,
        profileImage: profileImage,
        statistics: statistics,
        settings: settings,
      },
      {
        returnDocument: "after",
      }
    );

    // console.log(updatedUser);

    // let user = await this.findUser(email);

    // // user = {
    // //   email: email,
    // //   username: username,
    // //   password: password,
    // //   profileImage: profileImage,
    // //   statistics: statistics,
    // //   settings: settings,
    // // };

    // user.username = username;
    // await user.save();

    // console.log(user);
  }
}
