const ms = require("pretty-ms");
const { MessageEmbed } = require("discord.js");
const { HyCoredGin } = require("../../package.json");
const { version: discordjsVersion } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "hycore",
  category: "hycore",
  description: "Check Hycore Stats",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message) => {
    await message.react("🤩");
    const HyCore = await message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#FF5733")
        .setTitle(`👑HyCore Information Table`)
        .setAuthor("HyCore- multi☣️purpose bot")
        .setURL("https://github.com/krakinz")
        .setImage("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
        .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
        .addField(`\`⚙️Engine Version\``, `${HyCoredGin}`, true)
        .addField(`\`🛸Uptime\``, `${ms(client.uptime)}`, true)
        .addField(`\`📡Ping\``, `${client.ws.ping}ms`, true)
        .addField(
          `\`Memory\``,
          `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(
            process.memoryUsage().heapUsed /
            1024 /
            1024
          ).toFixed(2)} MB Heap`,
          true
        )
        .addField(
          `\`📚Guild Count\``,
          `${client.guilds.cache.size} guilds`,
          true
        )
        .addField(`\`💡HyCore Commands\``, `${client.commands.size} cmds`, true)
        .addField(
          `\`🤖Nodejs\``,
          `${process.version} on ${process.platform} ${process.arch}`,
          true
        )
        .addField(`\`Discord.js\``, `${discordjsVersion}`, true)
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
    );
    await HyCore.react("🍯");
    await HyCore.react("⚡");
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
