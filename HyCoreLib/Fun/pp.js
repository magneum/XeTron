const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// ==============================================================================
module.exports = {
  name: "pp",
  description: "Dick/Penis Machine Calculator",
  run: async (client, message, args) => {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!target) {
      message.react("❗");
      const noargembed = new MessageEmbed()
        .setTimestamp()
        .setColor("#FF5733")
        .setTitle("Dick/Penis🍌Machine")
        .setURL("https://github.com/krakinz")
        .setAuthor("HyCore👑Multi☣️Purpose🤖Bot", client.user.displayAvatarURL())
        .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
        .addFields({ name: `**\`⚠️Error\`**`, value: "Please Mention Or Give ID Of A Member!", inline: true, }, { name: `**\`🔸Example\`**`, value: `${client.prefix} pp (mention or ID)`, inline: true, })
      return message.channel.send({ embeds: [noargembed] });
    }
    var ppSizeType = [
      "\n**8=> **~~👅\n*skin piercing penis head! with a lil cum*",
      "\n**8==D **~~👅\n*perfect penis head! with a lil cum*",
      "\n**8===E **~~👅\n*alien penis head! with a lil cum*",
      "\n**8=====O **~~👅\n*confused penis head! with a lil cum*",
      "\n**8======>  **~~👅\n*skin piercing penis head! with a lil cum*",
      "\n**8=======D **~~👅\n*perfect penis head! with a lil cum*",
      "\n**8========E **~~👅\n*alien penis head! with a lil cum*",
      "\n**8==========O **~~👅\n*confused penis head! with a lil cum*",
      "\n**8=========> **~~👅\n*skin piercing penis head! with a lil cum*",
      "\n**8=========D **~~👅\n*perfect penis head! with a lil cum*",
      "\n**8==========E **~~👅\n*alien penis head! with a lil cum*",
      "\n**8=============O **~~👅\n*confused penis head! with a lil cum*",
      "\n**8==========> **~~👅\n*skin piercing penis head! with a lil cum*",
      "\n**8===========D **~~👅\n*perfect penis head! with a lil cum*",
      "\n**8============E **~~👅\n*alien penis head! with a lil cum*",
      "\n**8===========O **~~👅\n*confused penis head! with a lil cum*",
      "\n**8=============> **~~👅\n*skin piercing penis head! with a lil cum*",
      "\n**8=============D **~~👅\n*perfect penis head! with a lil cum*",
      "\n**8=============E **~~👅\n*alien penis head! with a lil cum*",
      "\n**8========O **~~👅\n*confused penis head! with a lil cum*",
      "\n**8=============> **~~👅\n*skin piercing penis head! with a lil cum*",
      "\n**8=============D **~~👅\n*perfect penis head! with a lil cum*",
      "\n**8===============E **~~👅\n*alien penis head! with a lil cum*",
      "\n**8=========O **~~👅\n*confused penis head! with a lil cum)"];
    const ppSizeEmbed = new Discord.MessageEmbed()
      .setColor("#FF5733")
      .setTitle(`Dick/Penis🍌Machine`)
      .setURL("https://github.com/krakinz")
      .setAuthor("HyCore👑Multi☣️Purpose🤖Bot", client.user.displayAvatarURL())
      .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
      .setDescription(`${target} 🍌penis:` + ppSizeType[Math.floor(Math.random() * ppSizeType.length)]);
    message.channel.send(ppSizeEmbed);
  },
};

