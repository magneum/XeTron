const { Anime } = require("djs-anime");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "lick",
  run: async (client, message, args) => {
    const target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!target) {
      message.react("❗");
      const noargembed = new MessageEmbed()
        .setTimestamp()
        .setTitle("lick")
        .setColor("#FF5733")
        .setURL("https://github.com/krakinz")
        .setAuthor(
          "HyCore👑Multi☣️Purpose🤖Bot",
          client.user.displayAvatarURL()
        )
        .setFooter(
          `👈🏽‍Reqstd by ${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .addFields(
          {
            name: `**\`⚠️Error\`**`,
            value: "Please Mention Or Give ID Of A Member!",
            inline: true,
          },
          {
            name: `**\`🔸Example\`**`,
            value: `${client.prefix} lick (mention or ID)`,
            inline: true,
          }
        );
      return message.channel.send({ embeds: [noargembed] });
    }
    const HyCoreAnime = new Anime({
      message: message,
      embedTitle: `**\`\`\`${message.author.username} licked the heck outtta ${target.displayName}\`\`\`**`,
      embedFooter: `Reqstd by ${message.author.username}`,
      embedColor: "#FF5733",
    });
    HyCoreAnime.lick();
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
