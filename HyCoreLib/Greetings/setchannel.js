const db = require("quick.db");
const Goodbye = ["goodbye", "leave", "left"];
const Welcome = ["welcome", "wel", "join"];
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "setchannel",
  category: "Greetings",
  aliases: [],
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) {
      message.channel.send(
        "You Don't Have Enough Permission To Execute This Command - Manage Channels"
      );
      return;
    }
    const mentionedChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!mentionedChannel || mentionedChannel.type === "voice") {
      message.channel.send(`Please Give A Valid Text Channel!`);
      return;
    }
    if (
      !args[1] ||
      ![...Welcome, ...Goodbye].find((T) => T === args[1].toLowerCase())
    ) {
      message.channel.send(
        `Please Give A Valid Type - ${[...Welcome, Goodbye].join(", ")}`
      );
      return;
    }
    const Current = Welcome.some((wel) => wel === args[1].toLowerCase())
      ? "Welcome"
      : "Goodbye";
    db.set(
      `${Current === "Welcome" ? `HyWel_` : `GoodBye_Channel`}_${
        message.guild.id
      }`,
      mentionedChannel.id
    );
    message.channel.send(
      `${Current} Channel Has Been Set - <#${mentionedChannel.id}>`
    );
    client.channels.cache
      .get(mentionedChannel.id)
      .send(`${Current} Channel Has Been Set - <#${mentionedChannel.id}>`);
    return;
  },
};
