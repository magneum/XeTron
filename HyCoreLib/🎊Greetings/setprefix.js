const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const Hyde = process.versions.node.split(".")[0];
if (Hyde < 12) {
  throw new Error("Requires Node 12 (or higher)");
}
if (Hyde < 13) {
  require("dotenv").config();
} else if (Hyde > 13) {
  require("dotenv").config({ path: "src/.env" });
}
const prefix = process.env.prefix;
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "setprefix",
  category: "🎊Greetings",
  description: "Chnage/Know The server's Prefix or the Global Prefix",
  usage: "m/prefix <new prefix/reset>",
  example: "1) m/prefix = \n2) m/prefix reset",
  aliases: ["prefix"],
  run: async (client, message, args) => {
    let option = args[0];
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send(
        "You are not allowed or do not have permission to change prefix"
      );
    }
    if (!option) {
      prefix = db.get(`prefix_${message.guild.id}`);
      if (!prefix) prefix = prefix;
      let prefEmbed = new MessageEmbed()
        .setColor("YELLOW")
        .setThumbnail(message.guild.iconURL())
        .setDescription(
          `**\nMy prefix for \`${message.guild.name}\`  is  **` +
            `  \`${client.prefix}\` \n**Type \`${client.prefix}help\` for help**`
        );
      message.channel.send(prefEmbed);
    }
    if (option === "reset") {
      db.delete(`prefix_${message.guild.id}`);
      return await message.channel.send("Reseted Prefix ✅");
    }
    if (args[1]) {
      return message.channel.send("You can not set prefix a double argument");
    }
    if (args[0].length > 4) {
      return message.channel.send(
        "You can not send prefix more than 4 characters"
      );
    }
    if (args.join("") === prefix) {
      db.delete(`prefix_${message.guild.id}`);
      return await message.channel.send("Reseted Prefix ✅");
    }
    db.set(`prefix_${message.guild.id}`, args[0]);
    console.log(`prefix_${message.guild.id}`);
    await message.channel.send(`Done ✅ | Bot Prefix Set to ${args[0]}`);
  },
};
