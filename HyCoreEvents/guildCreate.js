const { MessageEmbed } = require("discord.js");
require("dotenv").config({ path: "src/.env" });
const PreHyCore = process.env.PreHyCore;
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
module.exports = (client, guild) => {
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
    `${Days} ${Days > 1 ? "Days" : "Day"}\n${Hours} ${Hours > 1 ? "Hours" : "Hour"
    }\n${Minutes} ${Minutes > 1 ? "Minutes" : "Minute"}\n${Seconds} ${Seconds > 1 ? "Seconds" : "Second"
    }`
  );
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
  channels.send(`@everyone`);
  channels.send(
    new MessageEmbed()
      .setTimestamp()
      .setColor("#FF5733")
      .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
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
};
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
