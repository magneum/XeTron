const db = require("quick.db");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
module.exports = {
  name: "resetwarns",
  aliases: [],
  category: "moderation",
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "Yopu should have admin perms to use this command"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the person whose warning you want to reset"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your warnings");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(
        `${message.mentions.users.first().username} do not have any warnings`
      );
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Reseted all warnings of ${message.mentions.users.first().username}`
    );
  },
};
