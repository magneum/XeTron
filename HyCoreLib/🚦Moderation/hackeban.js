const db = require("quick.db");
const { measureMemory } = require("vm");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
module.exports = {
  name: "hackban",
  description: "asdf",
  aliases: [],
  category: "🚦Moderation",
  run: async (bot, message, args) => {
    if (
      !message.channel.permissionsFor(message.member).has("BAN_MEMBERS") &&
      !ownerID.includes(message.author.id)
    )
      return;

    const target = args[0];
    if (isNaN(target)) return message.reply(`Please specify an ID`);

    const reason = args.splice(1, args.length).join(" ");

    try {
      message.guild.members.ban(target, {
        reason: reason.length < 1 ? "No reason supplied." : reason,
      });
      const embed2 = new MessageEmbed()
        .setColor("#FF5733")
        .setDescription(
          "**They were successfully banned. User was not notified!**"
        );
      await message.channel.send(embed2);
      const channel = db.fetch(`modlog_${message.guild.id}`);
      if (!channel) return;
      const embed = new MessageEmbed()
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
        .setColor("#ff0000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .addField("**Moderation**", "ban")
        .addField("**ID**", `${target}`)
        .addField("**Banned By**", message.author.username)
        .addField("**Reason**", `${reason || "**No Reason**"}`)
        .addField("**Date**", message.createdAt.toLocaleString())
        .setTimestamp();

      var sChannel = message.guild.channels.cache.get(channel);
      if (!sChannel) return;
      sChannel.send(embed);
    } catch (error) {
      console.log(error);
    }
  },
};
