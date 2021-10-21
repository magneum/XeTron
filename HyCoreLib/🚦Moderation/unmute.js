const db = require("quick.db");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
module.exports = {
  name: "unmute",
  aliases: [],
  category: "🚦Moderation",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }

    let muterole = message.guild.roles.cache.find((x) => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send(
        "Given User do not have mute role so what i am suppose to take"
      );
    }

    user.roles.remove(muterole);

    await message.channel.send(
      `**${message.mentions.users.first().username}** is now unmuted`
    );

    user.send(`You are now unmuted from **${message.guild.name}**`);

    message.delete();
  },
};
