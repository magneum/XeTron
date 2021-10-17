const request = require("node-superfetch");
const { stripIndents } = require("common-tags");
const twitter = require("twitter-api.js");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "twitter",
  aliases: [],
  category: "search",
  premiumOnly: "true",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, msg, args) => {
    let user = args[0];
    if (!user) {
      message.react("❗");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#FF5733")
          .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
          .setAuthor("HyCore- multi☣️purpose bot")
          .setURL("https://github.com/krakinz")
          .setTitle("Twitter")
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addFields(
            {
              name: `**\`⚠️Error\`**`,
              value: "Please Provide twitter name!",
              inline: true,
            },
            {
              name: `**\`🔸Example\`**`,
              value: "pls twitter Krakinz",
              inline: true,
            }
          )
      );
      return;
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    try {
      const body = await twitter.users(user);
      msg.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor("#FF5733")
            .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
            .setAuthor("HyCore- multi☣️purpose bot")
            .setURL("https://github.com/krakinz")
            .setTitle(
              `@${body.screen_name.toLowerCase()}`,
              body.verified
                ? "https://emoji.gg/assets/emoji/6817_Discord_Verified.png"
                : null
            )
            .setDescription(
              stripIndents` ${body.description}
\`•\` Followers: **${body.followers_count.toLocaleString()}**
\`•\` Following: **${body.friends_count.toLocaleString()}**
\`•\` Tweets: **${body.statuses_count.toLocaleString()}**
\`•\` Account Created At: ${body.created_at}`
            )
            .setFooter(
              `Twitter ID: ${body.id}`,
              "https://abs.twimg.com/favicons/twitter.ico"
            )
            .setImage(body.profile_banner_url)
        )
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        );
    } catch (e) {
      if (e.status === 403)
        return msg.channel.send("This user private mode, or deleted account");
      else if (e.status === 404) return msg.channel.send("Not Found");
      else return msg.channel.send(`Unknown error: \`${e.message}\``);
    }
  },
};
