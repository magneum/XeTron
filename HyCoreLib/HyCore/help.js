const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "hycore",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);
      if (!command) {
        message.react("❌");
        message.channel.send(
          new MessageEmbed()
            .setColor("#FF5733")
            .setTimestamp()
            .addField(`\`ERROR !\``, `Unknown Command *${args[0]}*`)
            .setFooter(
              `👈🏽‍Reqstd by ${message.author.username}`,
              message.author.avatarURL({ dynamic: true })
            )
        );
        return;
      } else {
        message.react("✅");
        message.channel.send(
          new MessageEmbed()
            .setColor("#FF5733")
            .setTimestamp()
            .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
            .setAuthor(command.name, client.user.displayAvatarURL())
            .addField(`\`> Description\``, command.description || "-")
            .addField(`\`> Usage\``, command.usage || "-")
            .setFooter(
              `👈🏽‍Reqstd by ${message.author.username}`,
              message.author.avatarURL({ dynamic: true })
            )
        );
        return;
      }
      // =============================================================================
      // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
      // =============================================================================
    } else {
      const commands = await client.commands;
      const HyCoreMenu = new MessageEmbed()
        .setColor("#FF5733")
        .setTimestamp()
        .setAuthor("HyCore- multi☣️purpose bot")
        .setTitle("HyCore Help Menu")
        .setURL("https://github.com/krakinz")
        .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
        .setDescription(
          `\`\`\`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+ 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..\`\`\``
        )
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .setImage("https://i.postimg.cc/4xbGh8D4/HyCore.jpg");
      // =============================================================================
      // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
      // =============================================================================
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;
        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }
      // =============================================================================
      // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
      // =============================================================================
      for (const [key, value] of Object.entries(com)) {
        let category = key;
        let desc = "" + value.join(", ") + "";
        HyCoreMenu.addField(
          `⚡\`${category}-${value.length} file(s)\`⚡`,
          desc
        );
      }
      HyCoreMenu.addField(
        `Extra Premium Features For Free`,
        "🎧**[Music](https://discord.com/api/oauth2/authorize?client_id=895346909785489429&permissions=8&scope=bot%20applications.commands)**\n**🤩[Welcome](https://t.me/krakinzbot)**"
      );
      HyCoreMenu.addField(
        `Helper/Mod/Dev/Support Links`,
        ":link: **[Discord](https://discord.gg/VR9WU8eBxe)** | **[Telegram](https://t.me/krakinzbot)**"
      );
      await message.channel.send(HyCoreMenu).then((embedMessage) => {
        embedMessage.react("🍯");
        embedMessage.react("⚡");
      });
      return;
    }
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
