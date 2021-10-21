const axios = require("axios");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "insta",
  aliases: ["s.ins", "instagram"],
  category: "🔎Search",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (!args[0]) {
      message.react("❗");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#FF5733")
          .setURL("https://github.com/krakinz")
          .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
          .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
          .setTitle("Instagram")
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addFields(
            {
              name: `**\`⚠️Error\`**`,
              value: "Please provide a valid instagram account Name!",
              inline: true,
            },
            {
              name: `**\`🔸Example\`**`,
              value: "pls insta Saanvi",
              inline: true,
            }
          )
      );
      return;
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    let url, response, account, details;
    try {
      url = `https://instagram.com/${args[0]}/?__a=1`;
      response = await axios.get(url);
      account = response.data;
      details = account.graphql.user;
    } catch (error) {
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#FF5733")
          .setURL("https://github.com/krakinz")
          .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
          .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
          .setTitle("Instagram")
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addFields(
            {
              name: `**\`⚠️Error\`**`,
              value: "Not A Valid Account!",
              inline: true,
            },
            {
              name: `**\`🔸Example\`**`,
              value: "pls insta Saanvi",
              inline: true,
            }
          )
      );
      return;
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    await message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#FF5733")
        .setURL("https://github.com/krakinz")
        .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
        .setImage("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
        .setTitle(
          `${
            details.is_verified
              ? `${details.username} <a:verified:727820439497211994>`
              : ` ${details.username}`
          } ${details.is_private ? "🔒" : ""} `
        )
        .setDescription(details.biography)
        .setImage(details.profile_pic_url)
        .addFields(
          {
            name: "Total Posts:",
            value: details.edge_owner_to_timeline_media.count.toLocaleString(),
            inline: true,
          },
          {
            name: "Followers:",
            value: details.edge_followed_by.count.toLocaleString(),
            inline: true,
          },
          {
            name: "Following:",
            value: details.edge_follow.count.toLocaleString(),
            inline: true,
          }
        )
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
    );
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================F
