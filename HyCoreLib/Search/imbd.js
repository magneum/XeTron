const imdb = require("imdb-api");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "imdb",
  aliases: [],
  description: "Get the information about series and movie",
  category: "search",
  usage: "imdb <name>",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args, color) => {
    if (!args.length) {
      return message.channel.send("Please give the name of movie or series");
    }
    const imob = new imdb.Client({ apiKey: "5e36f0db" }); //You need to paste you imdb api
    let movie = await imob.get({ name: args.join(" ") });
    let embed = new MessageEmbed()
      .setTitle(movie.title)
      .setColor("#FF5733")
      .setThumbnail(movie.poster)
      .setDescription(movie.plot)
      .setFooter(`Ratings: ${movie.rating}`)
      .addField("Country", movie.country, true)
      .addField("Languages", movie.languages, true)
      .addField("Type", movie.type, true);
    message.channel.send(embed);
  },
};
