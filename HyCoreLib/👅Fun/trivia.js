const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Best NPM package",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 4,
  },

  {
    title: "Which command is better",
    options: ["8ball", "emoify", "ascii", "flipword"],
    correct: 2,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "👅Fun",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    message.channel.send(
      new MessageEmbed()
        .setTitle(q.title)
        .setColor("#FF5733")
        .setDescription(
          q.options.map((opt) => {
            i++;
            return `${i} - ${opt}\n`;
          })
        )
        .setFooter(
          `Reply to this message with the correct question number! You have 15 seconds.`
        )
    );
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  },
};
