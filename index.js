// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
const { CanvasSenpai } = require("canvas-senpai");
const { MessageEmbed } = require("discord.js");
const Disbut = require("discord-buttons");
const Discord = require("discord.js");
const client = new Discord.Client({});
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const canva = new CanvasSenpai();
const db = require("quick.db");
let Table = new ascii("Commands");
Table.setHeading("Command", "Load status");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();
client.queue = new Map();
client.vote = new Map();
const PreHyCore = "pls";
Disbut(client);
client.login(process.env.TOKEN);
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
client.on("ready", () => {
  readdirSync("./HyCoreLib/").forEach((dir) => {
    const commands = readdirSync(`./HyCoreLib/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (let file of commands) {
      let pull = require(`./HyCoreLib/${dir}/${file}`);
      if (pull.name) {
        client.commands.set(pull.name, pull);
        Table.addRow(file, "✅");
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
  // =============================================================================
  `𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
  // =============================================================================
  console.log(Table.toString());
  client.user.setStatus("online");
  console.log(`${client.user.username} is available now!`);
  var activities = [
      `${PreHyCore} hycore`,
      `${PreHyCore} help`,
      `${PreHyCore} mods`,
      `${PreHyCore} invite`,
      `${PreHyCore} meme`,
      `${PreHyCore} nsfw`,
      `${PreHyCore} slap`,
      `${PreHyCore} kiss`,
    ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`👑${activities[i++ % activities.length]}`, {
        type: "WATCHING",
      }),
    4000
  );
  require("http")
    .createServer((req, res) => res.end("HyCore Ready!"))
    .listen(3000);
});
client.on;
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
client.on("guildCreate", (guild) => {
  let Days = Math.floor(client.uptime / 86400000),
    Hours = Math.floor(client.uptime / 3600000) % 24,
    Minutes = Math.floor(client.uptime / 60000) % 60,
    Seconds = Math.floor(client.uptime / 1000) % 60;
  const RemoveUseless = (Duration) => {
    return Duration.replace("0 Day\n", "")
      .replace("0 Hour\n", "")
      .replace("0 Minute\n", "");
  };
  let Total = RemoveUseless(
    `${Days} ${Days > 1 ? "Days" : "Day"}\n${Hours} ${
      Hours > 1 ? "Hours" : "Hour"
    }\n${Minutes} ${Minutes > 1 ? "Minutes" : "Minute"}\n${Seconds} ${
      Seconds > 1 ? "Seconds" : "Second"
    }`
  );
  // =============================================================================
  `𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
  // =============================================================================
  const channel = client.channels.cache.get("896660877091164180");
  if (!channel) return;
  channel.send(
    new MessageEmbed()
      .setTitle("I Joined A Guild!")
      .setDescription(
        `**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`
      )
      .setTimestamp()
      .setColor("#FF5733")
      .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`)
  );
  const channels = guild.channels.cache.find(
    (channel) =>
      channel.type === `text` &&
      channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
  );
  // =============================================================================
  `𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
  // =============================================================================
  channels.send(`@everyone`);
  channels.send(
    new MessageEmbed()
      .setTimestamp()
      .setColor("#FF5733")
      .setAuthor("HyCore- multi☣️purpose bot")
      .setTitle(`👑HyCore Information Table`)
      .setURL("https://github.com/krakinz")
      .setThumbnail("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
      .setImage("https://i.postimg.cc/4xbGh8D4/HyCore.jpg")
      .setDescription(
        `\`ΉΣY👑ƬΉΣЯΣ \`\n---------------::---------------\n𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..🔥`
      )
      .addField(
        `:candy:\`HyCore Main Commands\``,
        `${PreHyCore}hycore & ${PreHyCore}help to know more...`,
        true
      )
      .addField(`\`Brought To You by\``, "👑Krakinz & KrakinzLab(c)", true)
      .addField(
        `Extra Premium Features For Free`,
        "🎧**[Music](https://discord.com/api/oauth2/authorize?client_id=895346909785489429&permissions=8&scope=bot%20applications.commands)**\n**🤩[Welcome](https://t.me/krakinzbot)**"
      )
      .addField(
        `Helper/Mod/Dev/Support Links`,
        ":link: **[Discord](https://discord.gg/VR9WU8eBxe)** | **[Telegram](https://t.me/krakinzbot)**"
      )
      .addField(
        `\`🛸Uptime\``,
        `🤖HyCore™ is Smoothly Serving since ${Total}`,
        true
      )
      .addField(
        `\`📡Ping\``,
        `🤖HyCore's Server is Smoothly Running with Max Latency being ${client.ws.ping}ms`,
        true
      )
  );
});
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
// client.on("guildMemberAdd", async (member) => {
//   let chx = db.get(`welchannel_${member.guild.id}`);
//   if (chx === null) {
//     return;
//   }
//   let data = await canva.welcome(member, {
//     link: "https://cdn.discordapp.com/attachments/815889737750544405/827575020338675822/welcome_imgae.png",
//     blur: true,
//   });
//   const attachment = new Discord.MessageAttachment(data, "welcome-image.png");
//   client.channels.cache
//     .get(chx)
//     .send(
//       `Welcome to ${member.guild.name}, Server ${member.user}\nYou are our ${member.guild.memberCount}th Member. Enjoy `,
//       attachment
//     );
// });
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
client.snipes = new Map();
client.on("messageDelete", function (message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null,
  });
});
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
client.on("guildDelete", (guild) => {
  const channel = client.channels.cache.get("896660877091164180");
  if (!channel) return;
  const embed = new MessageEmbed()
    .setTitle("I Left A Guild!")
    .setDescription(
      `**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`
    )
    .setTimestamp()
    .setColor("#FF5733")
    .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
client.on("message", async (message) => {
  if (!message.guild) return;
  let prefix = db.get(`PreHyCore${message.guild.id}`);
  if (prefix === null) prefix = PreHyCore;
  if (!message.content.startsWith(PreHyCore)) return;
  if (!message.member) message.member = message.guild.fetchMember(message);
  const args = message.content.slice(PreHyCore.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
