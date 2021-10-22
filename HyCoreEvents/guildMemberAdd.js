const db = require("quick.db");
const Canvas = require("canvas");
require("dotenv").config({ path: "src/.env" });
module.exports = async (client, message) => {
  const welcomeChannel = await db.get(`HyWel__${member.guild.id}`);
  if (!welcomeChannel) return;
  if (member.user.username.length > 25)
    member.user.username = member.user.username.slice(0, 25) + "...";
  if (member.guild.name.length > 15)
    member.guild.name = member.guild.name.slice(0, 15) + "...";
  const canvas = Canvas.createCanvas(1772, 633);
  const ctx = canvas.getContext("2d");
  const background = await Canvas.loadImage("./Hi.png");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#FFFFFF";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  var Joined__User = `${member.user.username}`;
  if (Joined__User.length >= 10) {
    ctx.font = "bold 110px Segoe Script";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(
      `💠 ${Joined__User} `,
      720,
      canvas.height / 2 + 20,
      720,
      canvas.width / 2 - 200,
      500,
      500
    );
  } else {
    ctx.font = "bold 140px Segoe Script";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(
      `💠 ${Joined__User} `,
      720,
      canvas.height / 2 + 20,
      720,
      canvas.width / 2 - 200,
      500,
      500
    );
  }
  ctx.beginPath();
  ctx.arc(315, canvas.height / 2, 200, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "png" })
  );
  ctx.drawImage(avatar, 90, canvas.height / 2 - 200, 500, 500);
  const welcomeMessage = (
    (await db.get(`Welcome_User_Msg - ${member.guild.id}`)) ||
    `${member.user.username} Welcome!`
  )
    .replace(/<servername>/g, member.guild.name)
    .replace(/<membername>/g, member.user.username)
    .replace(/<membermention>/g, `<@${member.user.id}> `);
  return client.channels.cache
    .get(welcomeChannel)
    .send(
      new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#75faff")
        .setDescription(welcomeMessage)
        .setThumbnail(member.guild.iconURL())
        .addField(
          `** Member Count **⚡`,
          `ɴᴜᴍ: #${member.guild.memberCount} `,
          true
        )
        .addField(
          `** Discriminator **💳`,
          `ɪᴅ: #${member.user.discriminator} `,
          true
        )
        .addField(`** Server Name **💡`, `${member.guild.name} `, true)
        .setFooter(
          `𝘥𝘰 𝘯𝘰𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘵𝘰 𝘳𝘦𝘢𝘥 𝘢𝘯𝘥 𝘢𝘤𝘤𝘦𝘱𝘵 𝘵𝘩𝘦 𝘳𝘶𝘭𝘦𝘴 𝘰𝘧 𝘴𝘦𝘳𝘷𝘦𝘳.`,
          `${member.user.displayAvatarURL()} `
        )
        .setImage("attachment://welcome-image.png")
        .attachFiles(
          new Discord.MessageAttachment(canvas.toBuffer(), "welcome-image.png")
        )
    );
};
