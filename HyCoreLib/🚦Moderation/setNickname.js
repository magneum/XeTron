const db = require("quick.db");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
module.exports = {
  name: "setnick",
  aliases: [],
  category: "🚦Moderation",
  description: "Sets Or Changes Nickname Of An User",
  usage: "[mention | name | nickname | ID] <nickname>",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**You Dont Have Permissions To Change Nickname! - [MANAGE_GUILD]**"
      );

    if (!message.guild.me.hasPermission("CHANGE_NICKNAME"))
      return message.channel.send(
        "**I Dont Have Permissions To Change Nickname! - [CHANGE_NICKNAME]**"
      );

    if (!args[0]) return message.channel.send("**Please Enter A User!**");

    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (ro) => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.member;
    if (!member) return message.channel.send("**Please Enter A Username!**");

    if (
      member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >=
      0
    )
      return message.channel.send(
        "**Cannot Set or Change Nickname Of This User!**"
      );

    if (!args[1]) return message.channel.send("**Please Enter A Nickname**");

    let nick = args.slice(1).join(" ");

    try {
      member.setNickname(nick);
      const embed = new MessageEmbed()
        .setColor("#7c2f48")
        .setDescription(
          `**Changed Nickname of ${member.displayName} to ${nick}**`
        );
      message.channel.send(embed);
    } catch {
      return message.channel.send("**Missing Permissions - [CHANGE_NICKNAME]");
    }

    let channel = db.fetch(`modlog_${message.guild.id}`);
    if (!channel) return;

    const sembed = new MessageEmbed()
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
      .setColor("#ff0000")
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter(message.guild.name, message.guild.iconURL())
      .addField("**Moderation**", "setnick")
      .addField("**Nick Changed Of**", member.user.username)
      .addField("**Nick Changed By**", message.author.username)
      .addField("**Nick Changed To**", args[1])
      .addField("**Date**", message.createdAt.toLocaleString())
      .setTimestamp();

    var sChannel = message.guild.channels.cache.get(channel);
    if (!sChannel) return;
    sChannel.send(sembed);
  },
};
