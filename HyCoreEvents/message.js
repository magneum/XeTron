const db = require("quick.db");
const Hyde = process.versions.node.split(".")[0];
if (Hyde < 12) {
  throw new Error("Requires Node 12 (or higher)");
}
if (Hyde < 13) {
  require("dotenv").config();
} else if (Hyde > 13) {
  require("dotenv").config({ path: "src/.env" });
}
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
module.exports = (client, message) => {
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) {
    prefix = process.env.prefix;
  }
  if (prefix.length > 1) {
    client.user.setStatus("online");
    var activities = [
        `hycore`,
        `help`,
        `mods`,
        `invite`,
        `meme`,
        `nsfw`,
        `slap`,
        `kiss`,
      ],
      i = 0;
    setInterval(
      () =>
        client.user.setActivity(
          `🍯${prefix} ${activities[i++ % activities.length]}  |😚`,
          {
            type: "WATCHING",
          }
        ),
      8000
    );
  } else {
    client.user.setStatus("online");
    var activities = [
        ` hycore`,
        ` help`,
        ` mods`,
        ` invite`,
        ` meme`,
        ` nsfw`,
        ` slap`,
        ` kiss`,
      ],
      i = 0;
    setInterval(
      () =>
        client.user.setActivity(
          `🍯${prefix}${activities[i++ % activities.length]} |😚`,
          {
            type: "WATCHING",
          }
        ),
      8000
    );
  }

  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command)
    return message.channel.send(
      `\`❌\` **${message.author} - Sorry, that command does not exist!**`
    );
  if (command) command.run(client, message, args);
};
// =============================================================================
`𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..`;
// =============================================================================
