const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "slap",
  aliases: [],
  category: "👅Fun",
  description: "Return A Slap Image!",
  usage: "Slap <Mention Or ID> | <Text>",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    const Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!Member)
      return message.channel.send("Please Mention Or Give ID Of A Member!");

    const Other = args.slice(1).join(" ") || "Don't Be A DickHead!";
    if (Other.length > 50)
      return message.channel.send("Characters Limit Reached - 50!");

    const Embed = new MessageEmbed()
      .setColor("#FF5733")
      .setImage(
        encodeURI(
          `https://vacefron.nl/api/batmanslap?text1=bruh&text2=${Other}&batman=${message.author.avatarURL(
            { format: "png" }
          )}&robin=${Member.user.displayAvatarURL({ format: "png" })}`
        )
      )
      .setTimestamp();

    return message.channel.send(Embed);
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
