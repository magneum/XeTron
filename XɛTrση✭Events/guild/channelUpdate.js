"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const channelData = require("../../XɛTrση✭Database/channelupdate");
const { MessageEmbed } = require("discord.js");
module.exports = async (oldChannel, newChannel) => {
  const data = await channelData.findOne({ xᴇᴛʀᴏɴꜱᴇʀɪᴅ: newChannel.guild.id });
  if (!data) return;
  if (oldChannel.name !== newChannel.name) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel Name Changed
OLD: ${oldChannel.name}
NEW: ${newChannel.name}
\`\`\``),
      ],
    });
  } else if (oldChannel.topic !== newChannel.topic) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel Topic Changed
OLD: ${oldChannel.topic}
NEW: ${newChannel.topic}
\`\`\``),
      ],
    });
  } else if (oldChannel.position !== newChannel.position) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel Position Changed
OLD: ${oldChannel.position}
NEW: ${newChannel.position}
\`\`\``),
      ],
    });
  } else if (oldChannel.type !== newChannel.type) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel Type Changed
OLD: ${oldChannel.type}
NEW: ${newChannel.type}
\`\`\``),
      ],
    });
  } else if (oldChannel.nsfw !== newChannel.nsfw) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel NSFW Changed
OLD: ${oldChannel.nsfw}
NEW: ${newChannel.nsfw}
\`\`\``),
      ],
    });
  } else if (oldChannel.bitrate !== newChannel.bitrate) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel Bitrate Changed
OLD: ${oldChannel.bitrate}
NEW: ${newChannel.bitrate}
\`\`\``),
      ],
    });
  } else if (oldChannel.userLimit !== newChannel.userLimit) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel UserLimits Changed
OLD: ${oldChannel.userLimit}
NEW: ${newChannel.userLimit}
\`\`\``),
      ],
    });
  } else if (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser) {
    newChannel.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle("Channel Updates").setDescription(`\`\`\`fix
Channel SLowMode Changed
OLD: ${oldChannel.rateLimitPerUser}
NEW: ${newChannel.rateLimitPerUser}
\`\`\``),
      ],
    });
  } else {
    return;
  }
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");
