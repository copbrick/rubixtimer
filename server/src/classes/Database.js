import mongoose from "mongoose";
import User from "../models/User.js";
import signale from "signale";
import axios from "axios";
import discordConfig from "../../config/discordConfig.js";
const token = discordConfig.token;
const webhook = discordConfig.webhook;
const image = discordConfig.image;

const { Signale } = signale;
const interactive = new Signale({ interactive: true, scope: "interactive" });

import { Client, Intents, Channel, MessageEmbed } from "discord.js";
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

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

  async startBot() {
    client.on("ready", async () => {
      console.log(
        `${client.user.username} is online on ${client.guilds.cache.size} servers!`
      );
      client.user.setStatus("online");
      client.user.setActivity(`RubixTimer users!`, { type: "WATCHING" });
    });
    client.on("message", async (message) => {
      if (message.author.bot) return;
      if (message.content.startsWith("!")) {
        const args = message.content.slice(1).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === "ping") {
          const m = await message.channel.send("Ping?");
          m.edit(
            `Pong! Latency is ${
              m.createdTimestamp - message.createdTimestamp
            }ms. API Latency is ${Math.round(client.ws.ping)}ms`
          );
        } else if (command == "usercount") {
          //count users in database
          const userCount = await User.countDocuments({});
          const embed = new MessageEmbed()
            .setAuthor("RubixTimer DB Statistics")
            .setTitle("User Count")
            .setURL("https://rubixtimer.xyz")
            .setThumbnail(image)
            .setDescription(`There are ${userCount} users in the database!`)
            .setColor(0x00ff00)
            .setTimestamp()
            .setFooter("RubixTimer", image);
          console.log(embed);
          message.channel.send({ embed }).catch(signale.error);
        } else if (command == "listusers") {
          //list users in database
          const users = await User.find({});
          const userCount = await User.countDocuments({});
          const embed = new MessageEmbed()
            .setAuthor("RubixTimer DB Statistics")
            .setTitle("User List")
            .setURL("https://rubixtimer.xyz")
            .setThumbnail(image)
            .setDescription(`List of users in the database!`)
            .setColor(0x00ff00)
            .setTimestamp()
            .setFooter("RubixTimer", image)
            .addFields({ name: "User Count", value: userCount });
          users.forEach((user) => {
            embed.addFields({
              name: "Email",
              value: user.email,
            });
          });
          message.channel.send({ embed }).catch(signale.error);
        }
      }
    });
    try {
      client.login(token);
    } catch (err) {
      signale.error(err);
    }
  }

  async watchEvents() {
    const changeStream = User.watch({ fullDocument: "updateLookup" });
    changeStream.on("change", (next) => {
      //when new user created send discord webhook contained rich embed
      const embed = new MessageEmbed()
        .setAuthor("RubixTimer Events")
        .setTitle("New User Created")
        .setURL("https://rubixtimer.xyz")
        .setThumbnail(image)
        .setDescription(`${next.fullDocument.email} has been created!`)
        .setColor(0x00ff00)
        .addFields({ name: "email", value: next.fullDocument.email })
        .setTimestamp()
        .setFooter("RubixTimer", image);
      const options = {
        method: "post",
        url: `${webhook}`,
        data: {
          username: "RubixTimer Events",
          image: image,
          embeds: [embed],
        },
      };
      axios(options);
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

  async clearStatistics(email) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        statistics: [],
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Statistics successfully cleared!");
  }

  async clearSettings(email) {
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        settings: [],
      },
      {
        returnDocument: "after",
      }
    );

    if (updatedUser === null) {
      return signale.error("Couldn't find email. User not updated.");
    }

    return signale.success("Setting successfully cleared!");
  }
}
