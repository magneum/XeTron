const { Random } = require("something-random-on-discord");
const { MessageEmbed } = require("discord.js");
const random = new Random();
const PreHyCore = "pls";
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "punch",
  category: "AnimeWorld",
  aliases: [],
  description: "Punch someone",
  run: async (client, message, args) => {
    const target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!target) {
      message.react("❗");
      const noargembed = new MessageEmbed()
        .setTimestamp()
        .setColor("#FF5733")
        .setTitle("Deadly👊🏽‍Punch")
        .setURL("https://github.com/krakinz")
        .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
        .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
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
            value: "pls punch <Name or ID>",
            inline: true,
          }
        );
      return message.channel.send({ embeds: [noargembed] });
    }
    let data = await random.getAnimeImgURL("punch");
    const DeadlyPunch = new MessageEmbed()
      .setTimestamp()
      .setImage(data)
      .setColor("#FF5733")
      .setTitle("Deadly👊🏽‍Punch")
      .setURL("https://github.com/krakinz")
      .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
      .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
      .setFooter(
        `👈🏽‍Reqstd by ${message.author.username}`,
        message.author.avatarURL({ dynamic: true })
      )
      .addFields({
        name: `**\`So Hard Right!\`**`,
        value: `**${message.author.username}** punched **${target.user.username}** so hard that **${target.user.username}** needs to take revenge! (Maybe use *${PreHyCore} punch* or *${PreHyCore} slap*)`,
        inline: true,
      });
    return message.channel.send({ embeds: [DeadlyPunch] });
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
