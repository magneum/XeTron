const backup = require("discord-backup");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "load-backup",
  aliases: [],
  category: "🎒Backup",
  usage: "Use it like 'pls load-backup'",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        ":x: You need to have the manage messages permissions to create a backup in this server."
      );
    }

    const backupID = args.join(" ");

    backup
      .fetch(backupID)
      .then(() => {
        message.channel.send(
          ":warning: All the server channels, roles, and settings will be cleared. Do you want to continue? Send `-confirm` or `cancel`!"
        );

        const collector = message.channel.createMessageCollector(
          (m) =>
            m.author.id === message.author.id &&
            ["-confirm", "cancel"].includes(m.content),
          {
            time: 60000,
            max: 1,
          }
        );
        collector.on("collect", (m) => {
          const confirm = m.content === "-confirm";
          collector.stop();
          if (confirm) {
            backup
              .load(backupID, message.guild)
              .then(() => {
                return message.author.send("Backup loaded successfully!");
              })
              .catch((err) => {
                if (err === "No backup found")
                  return message.channel.send(
                    ":x: No backup found for ID " + backupID + "!"
                  );
                else
                  return message.author.send(
                    ":x: An error occurred: " + (typeof err === "string")
                      ? err
                      : JSON.stringify(err)
                  );
              });
          } else {
            return message.channel.send(":x: Cancelled.");
          }
        });

        collector.on("end", (collected, reason) => {
          if (reason === "time")
            return message.channel.send(":x: Command timed out! Please retry.");
        });
      })
      .catch(() => {
        return message.channel.send(
          ":x: No backup found for ID " + backupID + "!"
        );
      });
  },
};
