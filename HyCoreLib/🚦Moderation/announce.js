const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "announce",
  aliases: [],
  category: "🚦Moderation",
  usage: "embed <text to say>",
  description: "Returns provided text in Embed form.",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATION"))
      return message.channel.send(`YOU DO NOT HAVE PERMISSION `);
    await message.delete();
    let say = message.content.split(" ").slice(1).join(" ");
    if (!say)
      return message.channel.send(`❌ | ` + "I Cannot Repeat Blank Message");
    let embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(`${say}`)
      .setColor("#FF5733")
      .setFooter(` ${message.guild}`)
      .setTimestamp();
    message.channel.send(embed);
  },
};
