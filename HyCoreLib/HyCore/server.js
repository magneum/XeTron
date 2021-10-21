const { MessageEmbed } = require("discord.js");

module.exports = {
    emoji: "📊",
    name: "server",
    description: "Show server related infos!",
    run: async (client, message, args) => {
        var members = await message.guild.members.fetch();
        var botSize = members.filter((member) => member.user.bot).size;
        var userSize = message.guild.memberCount - botSize;
        var DAY = message.guild.createdAt.getDate();
        var MONTH = message.guild.createdAt.getMonth() + 1;
        var YEAR = message.guild.createdAt.getFullYear();
        if (DAY < 10) DAY = "0" + DAY;
        if (MONTH < 10) MONTH = "0" + MONTH;
        var made_on = DAY + "/" + MONTH + "/" + YEAR;
        const server = new MessageEmbed()
            .setTimestamp()
            .setColor("#FF5733")
            .setURL("https://github.com/krakinz")
            .setTitle(`**\`\`\`\`${message.guild.name}\`\`\`\`**`)
            .setThumbnail(message.guild.iconURL())
            .addField(`**👤\`Owner\`**`, `<@${message.guild.ownerId}>`, true)
            .addField(`**🙂\`Members\`**`, `\`${message.guild.memberCount}\``, true)
            .addField(`**🤖\`Bots\`**`, `\`${botSize}\``, true)
            .addField(`**👋\`Users\`**`, `\`${userSize}\``, true)
            .addField(`**🎉\`Roles\`**`, `\`${message.guild.roles.cache.size}\``, true)
            .addField(`**📆\`Created\`**`, `\`${made_on}\``, true)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }));
        return message.channel.send(server);
    },
};
