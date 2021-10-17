const { Random } = require("something-random-on-discord");
const { MessageEmbed } = require("discord.js");
const random = new Random();
const PreHyCore = "pls";
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "punch",
  category: "Fun",
  aliases: [],
  description: "Punch someone",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    const target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!target) {
      message.react("❗");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#FF5733")
          .setAuthor("HyCore- multi☣️purpose bot")
          .setURL("https://github.com/krakinz")
          .setTitle("AsciiArt")
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
          )
      );
      return;
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    let data = await random.getAnimeImgURL("punch");
    message.react("🤩");
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#FF5733")
        .setAuthor("HyCore- multi☣️purpose bot")
        .setURL("https://github.com/krakinz")
        .setThumbnail("https://i.postimg.cc/50L5rXL6/Hycore-1.png")
        .setImage(data)
        .setTitle("Dirty👊🏽‍Punch")
        .setTitle("Ouu SHIT! That was HARDDDD!!!")
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .addFields({
          name: `**\`So Hard Right!\`**`,
          value: `${message.author.username} punched ${target.user.username} so hard that ${target.user.username} need to take revenge! (Maybe use *${PreHyCore} punch* or *${PreHyCore} slap*)`,
          inline: true,
        })
    );
    return;
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
