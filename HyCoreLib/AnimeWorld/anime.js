const HyAnime = require("mal-scraper");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "anime",
  category: "AnimeWorld",
  aliases: [],
  description: "Get info about an anime",
  usage: "anime parasyte",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    const search = `${args}`;
    if (!search) {
      message.react("❗");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#FF5733")
          .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
          .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
          .setURL("https://github.com/krakinz")
          .setTitle("Anime")
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addFields(
            {
              name: `**\`⚠️Error\`**`,
              value: "Please add a search query!",
              inline: true,
            },
            {
              name: `**\`🔸Example\`**`,
              value: "pls anime parasyte",
              inline: true,
            }
          )
      );
      return;
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    HyAnime.getInfoFromName(search).then((data) => {
      const malEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#FF5733")
        .setImage(data.picture)
        .setURL("https://github.com/krakinz")
        .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
        .setTitle(`Search result for ${args}`.split(",").join(" "))
        .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
        .addField("Premiered", `\`${data.premiered}\``, true)
        .addField("Broadcast", `\`${data.broadcast}\``, true)
        .addField("Genres", `\`${data.genres}\``, true)
        .addField("English Title", `\`${data.englishTitle}\``, true)
        .addField("Japanese Title", `\`${data.japaneseTitle}\``, true)
        .addField("Type", `\`${data.type}\``, true)
        .addField("Episodes", `\`${data.episodes}\``, true)
        .addField("Rating", `\`${data.rating}\``, true)
        .addField("Aired", `\`${data.aired}\``, true)
        .addField("Score", `\`${data.score}\``, true)
        .addField("Favorite", `\`${data.favorites}\``, true)
        .addField("Ranked", `\`${data.ranked}\``, true)
        .addField("Duration", `\`${data.duration}\``, true)
        .addField("Studios", `\`${data.studios}\``, true)
        .addField("Popularity", `\`${data.popularity}\``, true)
        .addField("Members", `\`${data.members}\``, true)
        .addField("Score Stats", `\`${data.scoreStats}\``, true)
        .addField("Source", `\`${data.source}\``, true)
        .addField("Synonyms", `\`${data.synonyms}\``, true)
        .addField("Status", `\`${data.status}\``, true)
        .addField("Identifier", `\`${data.id}\``, true)
        .addField("Link", data.url, true)
        .setTimestamp()
        .setFooter(
          `Requested ${message.member.displayName}`,
          message.author.displayAvatarURL({ dynamic: true })
        );

      message.channel.send(malEmbed);
    });
  },
};
