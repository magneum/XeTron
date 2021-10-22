// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
console.clear();
const fs = require("fs");
const ascii = require("ascii-table");
let Table = new ascii("HyCore📚Library");
Table.setHeading("Command", "Load status");
const { readdirSync } = require("fs");
require("dotenv").config({ path: "src/.env" });
const Disbut = require("discord-buttons");
const Discord = require("discord.js");
const client = new Discord.Client({});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Map();
client.queue = new Map();
client.queue = new Map();
client.vote = new Map();
Disbut(client);
client.login(process.env.TOKEN);
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
async function HyCore() {
  const eventFiles = fs
    .readdirSync("./HyCoreEvents/")
    .filter((file) => file.endsWith(".js"));
  for (const file of eventFiles) {
    const event = require(`./HyCoreEvents/${file}`);
    const eventName = file.split(".")[0];
    console.log(`Loading... ${eventName}`);
    client.on(eventName, event.bind(null, client));
  }
  // =============================================================================
  `𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
  // =============================================================================
  readdirSync(`./HyCoreLib/`).forEach((dir) => {
    const commands = readdirSync(`./HyCoreLib/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (let file of commands) {
      let pull = require(`./HyCoreLib/${dir}/${file}`);
      if (pull.name) {
        client.commands.set(pull.name, pull);
        var str = file;
        var newStr = str.slice(0, -3);
        Table.addRow("🔸> " + newStr.toUpperCase(), "handler🍯ready!");
      } else {
        Table.addRow(
          file,
          `❌  -> missing a help.name, or help.name is not a string.`
        );
        continue;
      }
      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
    }
  });
  console.log(Table.toString());
  // =============================================================================
  `𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
  // =============================================================================
  require("http")
    .createServer((req, res) => res.end("HyCore Ready!"))
    .listen(3000);
  // =============================================================================
  `𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
  // =============================================================================
  client.on;
  await client.login(process.env.TOKEN);
}
HyCore();
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
const db = require("quick.db");
const Canvas = require("canvas");
require("dotenv").config({ path: "src/.env" });
client.on("guildMemberAdd", async (member) => {
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
  client.channels.cache
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
    )
    .then((embedMessage) => {
      embedMessage.react("🤩");
    });
  return;
});
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
