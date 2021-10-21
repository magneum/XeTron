const db = require("old-wio.db")
const { MessageEmbed } = require("discord.js")
require("dotenv").config({ path: "src/.env" });
const PreHyCore = process.env.PreHyCore;
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
    name: "prefix",
    category: "🍯HyCore",
    description: "Chnage/Know The server's Prefix or the Global Prefix",
    usage: "m/prefix <new prefix/reset>",
    example: "1) m/prefix = \n2) m/prefix reset",
    aliases: ["prefix"],
    run: async (client, message, args) => {
        let option = args[0];
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send("You are not allowed or do not have permission to change prefix")
        }
        if (!option) {
            prefix = db.fetch(`PreHyCore-${message.guild.id}`)
            if (!prefix) prefix = PreHyCore;
            let prefEmbed = new MessageEmbed()
                .setColor('YELLOW')
                .setThumbnail(message.guild.iconURL())
                .setDescription(`**\nMy prefix for \`${message.guild.name}\`  is  **` + `  \`${client.prefix}\` \n**Type \`${client.prefix}help\` for help**`)
            message.channel.send(prefEmbed);
        }
        if (option === "reset") {
            db.delete(`PreHyCore-${message.guild.id}`)
            return await message.channel.send("Reseted Prefix ✅")
        }
        if (args[1]) {
            return message.channel.send("You can not set prefix a double argument")
        }
        if (args[0].length > 4) {
            return message.channel.send("You can not send prefix more than 4 characters")
        }
        if (args.join("") === PreHyCore) {
            db.delete(`PreHyCore-${message.guild.id}`)
            return await message.channel.send("Reseted Prefix ✅")
        }
        db.set(`PreHyCore-${message.guild.id}`, args[0])
        console.log(`PreHyCore-${message.guild.id}`)
        await message.channel.send(`Done ✅ | Bot Prefix Set to ${args[0]}`)
    }
}