"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙"
"🐙"
require("dotenv").config();
var path = require("path");
const simplydjs = require("simply-djs")
const XeTron_AntiLink_Row = require("../../xᴇᴛʀᴏɴ_ᴅʙ_ᴇɴɢɪɴᴇꜱ/guildData/antilink");
const { MessageAttachment, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "embed",
  description: "Send Messages in embed form",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    let msg = args.join(" ");
    if (!msg) {
      await message.react("❌");
      var scriptName = path.basename(__filename);
      var str = scriptName;
      var newScpt = str.slice(0, -3);
      return await message.reply({
        embeds: [new MessageEmbed().setTimestamp()
          .setColor(process.env.NaNKol)
          .setAuthor("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setDescription("```diff\n-😥Please Check Below To Find What Went Wrong!\n```")
          .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))],
        components: [new MessageActionRow().addComponents(new MessageSelectMenu()
          .setCustomId(`XɛTrση_${newScpt}`)
          .setPlaceholder(`${newScpt.toUpperCase()}⚠️error in usage`)
          .addOptions([{ label: "Error", description: "Know The Error!", value: `error${newScpt}`, emoji: "⭕" },
          { label: "Usage", description: "Learn Proper Usage!", value: `usage${newScpt}`, emoji: "💡" }]))],
      });
    }
    message.reply({
      embeds: [new MessageEmbed()
        .setDescription(`${msg}`)
        .setColor(process.env.XeTrons)]
    });
  },
};
"🐙"
"🐙"
"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";