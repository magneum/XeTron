"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const memberData = require("../../XɛTrση✭Database/memberupdate");
const { MessageEmbed } = require("discord.js");
module.exports = async (oldMember, newMember) => {
  const data = await memberData.findOne({ xᴇᴛʀᴏɴꜱᴇʀɪᴅ: newMember.guild.id });
  if (!data) return;
  if (newMember.nickname !== oldMember.nickname) {
    let oldNickname = oldMember.nickname
      ? oldMember.nickname
      : oldMember.user.username;
    let newNickname = newMember.nickname
      ? newMember.nickname
      : newMember.user.username;
    newMember.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`${newMember.user.tag}`)
          .addField("User Nickname Changed", `${oldNickname} => ${newNickname}`)
          .setImage(`${newMember.user.avatarURL()}`),
      ],
    });
  } else if (newMember.user.username !== oldMember.user.username) {
    let oldusername = oldMember.user.username;
    let newusername = newMember.user.username;
    newMember.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`${newMember.user.tag}`)
          .addField("User Username Changed", `${oldusername} => ${newusername}`)
          .setImage(`${newMember.user.avatarURL()}`),
      ],
    });
  } else if (newMember.user.avatarURL() !== oldMember.user.avatarURL()) {
    let oldavatar = oldMember.user.avatarURL();
    let newavatar = newMember.user.avatarURL();
    newMember.guild.channels.cache.get(data.xᴇᴛʀᴏɴᴄʜɪᴅ).send({
      embeds: [
        new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`${newMember.user.tag}`)
          .addField("User Avatar Changed", `${oldavatar} => ${newavatar}`)
          .setImage(`${newMember.user.avatarURL()}`),
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
