var fortunes = [
  "Yes.",
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definelty.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now...",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good...",
  "Very doubtful.",
];
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  emoji: "📝",
  name: "8ball",
  description: "Tells you a fortune",
  run: async (client, message, args) => {
    if (args.length == 0) return message.channel.send("`Usage: =8ball <msg>`");
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
