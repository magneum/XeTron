const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
    name: "ping",
    category: "hycore",
    aliases: [],
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        message.channel
            .send("`🏓` **- Getting my ping ...**")
            .then((result_message) => {
                const ping = result_message.createdTimestamp - message.createdTimestamp;
                result_message.delete();
                const latencies = new MessageEmbed()
                    .setTimestamp()
                    .setTitle(`'${client.user.username}' Latency Test`)
                    .addField(`Ping`, `\`${ping} ms\``)
                    .addField(`API Latency`, `\`${Math.round(client.ws.ping)} ms\``);
                message.channel.send(latencies);
            });
    },
};
