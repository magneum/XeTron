const fetch = require("node-fetch");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "discord",
  category: "search",
  aliases: ["discorddocs", "djs", "docs", "s.djs"],
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    const search = args[0];
    if (!search)
      return message.channel.send({
        embed: {
          color: 0x4d5e94,
          description: "❌ **What are you searching?**",
        },
      });
    let version = args[1];
    if (!version) version = `stable`;

    fetch(
      `https://djsdocs.sorta.moe/v2/embed?src=${encodeURIComponent(
        version
      )}&q=${encodeURIComponent(search)}`
    )
      .then((res) => res.json())
      .then((body) => {
        if (body === null)
          return message.channel.send({
            embed: {
              color: 0x4d5e94,
              author: {
                name: "Discord.js Docs (master)",
                url: "https://discord.js.org/#/docs/main/master",
                icon_url: "https://discord.js.org/favicon.ico",
              },
              title: "Search results:",
              description: "❌ **No results please try again.**",
            },
          });
        body.color = 0x4d5e94;
        message.channel.send({ embed: body });
      })
      .catch((e) => {
        message.channel.send({
          embed: {
            color: 0x4d5e94,
            author: {
              name: "Discord.js Docs (master)",
              url: "https://discord.js.org/#/docs/main/master",
              icon_url: "https://discord.js.org/favicon.ico",
            },
            title: "Search results:",
            description: "No results.",
          },
        });
      });
  },
};
