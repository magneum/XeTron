const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
module.exports = {
  name: "lock",
  aliases: [],
  category: "🚦Moderation",
  description: "Locks a Channel",
};
run: async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
    return message.channel.send("You don't have enough Permissions");
  }
  message.channel.overwritePermissions([
    {
      id: message.guild.id,
      deny: ["SEND_MESSAGES"],
    },
  ]);
  const embed = new MessageEmbed()
    .setTitle("Channel Updates")
    .setDescription(`ðŸ”’ ${message.channel} has been Locked`)
    .setColor("#FF5733");
  await message.channel.send(embed);
  message.delete();
};
