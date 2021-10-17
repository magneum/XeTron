const fetch = require("node-fetch");
const moment = require("moment");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "npm",
  aliases: [],
  description: "Check for packages on npm!",
  category: "search",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    let query = args.join(" ");
    if (!query) query = await awaitMessages(message);
    if (!query) return;
    const res = await fetch(
      `https://registry.npmjs.com/${encodeURIComponent(query)}`
    ).catch((err) => console.log(err));
    if (res.status === 404)
      return message.channel.send(
        "No search results found, maybe try searching for something that exists."
      );
    const body = await res.json();
    const embed = new MessageEmbed()
      .setColor("#FF5733")
      .setTitle(body.name)
      .setURL(`https://www.npmjs.com/package/${body.name}`)
      .setDescription(body.description || "No description.")
      .addField("❯ Version", body["dist-tags"].latest, true)
      .addField("❯ License", body.license || "None", true)
      .addField("❯ Author", body.author ? body.author.name : "???", true)
      .addField(
        "❯ Creation Date",
        moment.utc(body.time.created).format("YYYY/MM/DD hh:mm:ss"),
        true
      )
      .addField(
        "❯ Modification Date",
        body.time.modified
          ? moment.utc(body.time.modified).format("YYYY/MM/DD hh:mm:ss")
          : "None",
        true
      )
      .addField(
        "❯ Repository",
        body.repository
          ? `[View Here](${body.repository.url.split("+")[1]})`
          : "None",
        true
      )
      .addField(
        "❯ Maintainers",
        body.maintainers.map((user) => user.name).join(", ")
      );
    message.channel.send(embed);
    async function awaitMessages(message) {
      let responce;
      const filter = (user) => {
        return user.author.id === message.author.id;
      };
      message.channel.send(
        "**What do you want to search for?** \nType `cancel` to cancel the command."
      );
      await message.channel
        .awaitMessages(filter, { max: 1, time: 120000, errors: ["time"] })
        .then((msg) => {
          const firstMsg = msg.first();
          if (firstMsg.content.toLowerCase() === "cancel")
            return firstMsg.react("👍");
          responce = firstMsg.content;
        })
        .catch(() => {
          message.channel.send(
            "Welp.. you took too long, cancelling the command."
          );
        });
      return responce;
    }
  },
};
