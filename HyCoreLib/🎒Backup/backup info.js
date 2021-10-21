const backup = require("discord-backup");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "info-backup",
  aliases: [],
  category: "🎒Backup",
  usage: "Use it like 'pls info-backup'",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(
        ":x: You need to have the administrator permissions to create a backup in this server."
      );
    }
    const backupID = args.join(" ");
    if (!backupID)
      return message.channel.send(":x: Please specify a valid backup ID!");
    backup
      .fetch(backupID)
      .then((backup) => {
        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(),
          mm = (date.getMonth() + 1).toString(),
          dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${mm[1] ? mm : "0" + mm[0]}/${
          dd[1] ? dd : "0" + dd[0]
        }`;
        const embed = new MessageEmbed()
          .setColor("#FF5733")
          .setAuthor(":information_source: Backup", backup.data.iconURL)
          .addField("Server name", backup.data.name)
          .addField("Size", backup.size + " kb")
          .addField("Created at", formattedDate)
          .setFooter("Backup ID: " + backup.id);
        return message.channel.send(embed);
      })
      .catch((err) => {
        if (err === "No backup found")
          return message.channel.send(
            ":x: No backup found for ID " + backupID + "!"
          );
        else
          return message.channel.send(
            ":x: An error occurred: " + (typeof err === "string")
              ? err
              : JSON.stringify(err)
          );
      });
  },
};
