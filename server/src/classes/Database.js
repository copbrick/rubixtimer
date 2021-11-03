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
      profileImage: "",
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

  async updateEmail(username, newEmail) {
    const updatedUser = await User.findOneAndUpdate(
      {
        username: username,
      },
      {
        email: newEmail,
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find username. User not updated.");
    }

    return signale.success("Email successfully updated!");
  }

  async updateUsername(email, newUsername) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        email: newUsername,
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Username successfully updated!");
  }

  async updatePassword(email, newPassword) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        email: newPassword,
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Password successfully updated!");
  }

  async updateProfileImage(email, newProfileImage) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        email: newProfileImage,
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Profile Picture successfully updated!");
  }

  async updateStatistics(email, { average, averageof5 }) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        $push: {
          statistics: [
            {
              average: average,
              averageOf5: averageof5,
            },
          ],
        },
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Statistic successfully updated!");
  }

  async updateSettings(email, { newUIMode }) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        $push: {
          settings: [
            {
              UIMode: newUIMode,
            },
          ],
        },
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Setting successfully updated!");
  }
}
