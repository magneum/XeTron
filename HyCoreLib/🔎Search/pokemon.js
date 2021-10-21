const { get } = require("request-promise-native");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "pokemon",
  aliases: [],
  description: "Get any pokemon description",
  category: "🔎Search",
  usage: "pokemon <name>",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run(client, message, args) {
    const options = {
      url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(
        " "
      )}`,
      json: true,
    };
    message.channel
      .send(
        `<a:Exe_Nitro3:743845033475702794>Fetching Informtion for the Pokemon`
      )
      .then((msg) => {
        get(options).then((body) => {
          let embed = new MessageEmbed()
            .setAuthor(
              body.name,
              `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`
            )
            .setDescription(
              `Type of this pokemon is **${body.info.type}**. ${body.info.description}`
            )
            .setThumbnail(
              `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`
            )
            .setColor("#FF5733")
            .setFooter(
              `Weakness of pokemon - ${body.info.weakness}`,
              `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`
            );
          message.channel.send(embed);
          msg.delete();
        });
      });
  },
};
