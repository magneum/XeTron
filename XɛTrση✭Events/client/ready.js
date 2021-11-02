"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const chalk = require("chalk");
const mongoose = require("mongoose");
require("dotenv").config();
module.exports = (XɛTrση) => {
  XɛTrση.user.setPresence({
    status: "online"
  });
  var activities = ["❓help", "⚡xetron", "🐙servers", "🥳members", "💖join", "💔leave",
      "🔐moderation", "🐍games", "🔥anime", "⚠️everything", "📜update", "🔞nsfw"
    ],
    i = 0;
  activities = activities.toUpperCase()
  setInterval(() => XɛTrση.user.setActivity(`⮞ ${activities[i++ % activities.length]} ⧪`, {
    type: "WATCHING"
  }), 2000);

  let allMembers = new Set();
  XɛTrση.guilds.cache.forEach((guild) => {
    guild.members.cache.forEach((member) => {
      allMembers.add(member.user.id);
    });
  });

  let allChannels = new Set();
  XɛTrση.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {
      allChannels.add(channel.id);
    });
  });

  console.log(
    chalk.bgMagentaBright.black(
      ` ${XɛTrση.guilds.cache.size}servers ${XɛTrση.channels.cache.size}channels ${allMembers.size}members`
    )
  );

  mongoose
    .connect(process.env.XeTronMdb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(
      console.log(
        chalk.bgGreenBright.black(
          ` ${XɛTrση.user.username} Trying to connect to Database`
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          ` ${XɛTrση.user.username} Database Error\n${err} `
        )
      )
    );
};