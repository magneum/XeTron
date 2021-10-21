const { Random } = require("something-random-on-discord");
const { MessageEmbed } = require("discord.js");
const random = new Random();
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "smooch",
  category: "AnimeWorld",
  aliases: [],
  description: "smooch someone",
  run: async (client, message, args) => {
    const target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!target) {
      message.react("❗");
      const noargembed = new MessageEmbed()
        .setTimestamp()
        .setTitle("Kiss")
        .setColor("#FF5733")
        .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
        .setURL("https://github.com/krakinz")
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .addFields(
          {
            name: `**\`⚠️Error\`**`,
            value: "Please Mention Or Give ID Of A Member!",
            inline: true,
          },
          {
            name: `**\`🔸Example\`**`,
            value: "pls smooch <Name or ID>",
            inline: true,
          }
        );
      return message.channel.send({ embeds: [noargembed] });
    }
    let data = await random.getAnimeImgURL("kiss");
    const smoochhard = new MessageEmbed()
      .setTimestamp()
      .setImage(data)
      .setColor("#FF5733")
      .setTitle("So Wet Smooch wow💋")
      .setURL("https://github.com/krakinz")
      .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
      .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
      .setFooter(
        `👈🏽‍Reqstd by ${message.author.username}`,
        message.author.avatarURL({ dynamic: true })
      )
      .addField(
        `**\`So Romantic!\`**`,
        `${message.author.username} gave a sweet kiss to ${target.user.username}.Now you better kiss ${message.author.username} back`,
        true
      );
    return message.channel.send({ embeds: [smoochhard] });
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
