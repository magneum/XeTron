"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const welcomeData = require("../../XɛTrση✭Database/welcome");
const welcomemsg = require("../../XɛTrση✭Database/joinmsg");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const XeTronCanvas = require("canvas");
const Greeters = [
  "GroundXeno/Greet/h0.png",
  "GroundXeno/Greet/h1.png",
  "GroundXeno/Greet/h2.png",
  "GroundXeno/Greet/h3.png",
  "GroundXeno/Greet/h4.png",
  "GroundXeno/Greet/h5.png",
  "GroundXeno/Greet/h6.png",
  "GroundXeno/Greet/h7.png",
  "GroundXeno/Greet/h8.png",
  "GroundXeno/Greet/h9.png",
];
module.exports = async (member) => {
  const data = await welcomeData.findOne({
    Ӽɛȶʀօռֆɨɖ: member.guild.id,
  });
  if (data) {
    const data2 = await welcomemsg.findOne({
      Ӽɛȶʀօռֆɨɖ: member.guild.id,
    });
    if (data2) {
      var joinmessage = data2.JoinMsg;
      joinmessage = joinmessage.replace("{user.mention}", `${member}`);
      joinmessage = joinmessage.replace("{user.name}", `${member.user.tag}`);
      joinmessage = joinmessage.replace("{server}", `${member.guild.name}`);
      joinmessage = joinmessage.replace(
        "{membercount}",
        `${member.guild.memberCount}`
      );
      let embed = new MessageEmbed()
        .setDescription(joinmessage)
        .setColor("GREEN");
      let channel = data.Welcome;
      member.guild.channels.cache.get(channel).send({ embeds: [embed] });
    } else if (!data2) {
      let channel = data.Welcome;
      const XeCanvas = XeTronCanvas.createCanvas(1772, 633);
      const XeCtx = XeCanvas.getContext("2d");
      let Greeter = Greeters[Math.floor(Math.random() * Greeters.length)];
      const background = await XeTronCanvas.loadImage(Greeter);
      XeCtx.drawImage(background, 0, 0, XeCanvas.width, XeCanvas.height);
      XeCtx.strokeStyle = "#FFFFFF";
      XeCtx.strokeRect(0, 0, XeCanvas.width, XeCanvas.height);
      var Joined__User = `${member.user.username}`;
      if (Joined__User.length >= 10) {
        XeCtx.font = "bold 120px Symbola";
        XeCtx.fillStyle = "#FFFFFF";
        XeCtx.fillText(
          `💠 ${Joined__User} `,
          720,
          XeCanvas.height / 2 + 20,
          720,
          XeCanvas.width / 2 - 200,
          500,
          500
        );
      } else {
        XeCtx.font = "bold 140px Symbola";
        XeCtx.fillStyle = "#FFFFFF";
        XeCtx.fillText(
          `💠 ${Joined__User} `,
          720,
          XeCanvas.height / 2 + 20,
          720,
          XeCanvas.width / 2 - 200,
          500,
          500
        );
      }
      XeCtx.beginPath();
      XeCtx.arc(315, XeCanvas.height / 2, 200, 0, Math.PI * 2, true);
      XeCtx.closePath();
      XeCtx.clip();
      const avatar = await XeTronCanvas.loadImage(
        member.user.displayAvatarURL({ format: "png" })
      );
      XeCtx.drawImage(avatar, 90, XeCanvas.height / 2 - 200, 500, 500);
      member.guild.channels.cache.get(channel).send({
        embeds: [
          new MessageEmbed()
            .setTimestamp()
            .setTitle("Welcome")
            .setColor(process.env.XeTrons || "#FFBF00")
            .setDescription(
              `${member}, Welcome to **${member.guild.name}**! We hope you like our Server! Enjoy Your Stay here!`
            )
            .setThumbnail(`${member.user.displayAvatarURL()}`)
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
              `${member.user.displayAvatarURL()}`
            ),
        ],
        files: [
          new MessageAttachment(XeCanvas.toBuffer(), "welcome-image.png"),
        ],
      });
    }
  }
};
