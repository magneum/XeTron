"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const prefixModel = require("../../XɛTrση✭Database/setprefix");
const Discord = require("discord.js");
const XeFixer = process.env.XeFixer;
require("dotenv").config();
module.exports = async (interaction) => {
  if (!interaction.isSelectMenu()) return;
  if (interaction.customId === "XɛTrση_Help_Menu") {
    let msg = await interaction.channel.messages.fetch(interaction.message.id);
    const prefixData = await prefixModel.findOne({
      Ӽɛȶʀօռֆɨɖ: msg.guild.id,
    }).catch((err) => console.log(err));
    if (prefixData) {
      var PREFIX = prefixData.Prefix;
    } else if (!prefixData) {
      PREFIX = XeFixer;
    }
    if (interaction.values[0] === "XɛTrση_Settings") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Settings⚙️ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`SETPREFIX\`⮐**`, `**⧪ Setup The Prefix Server!⪢ \`${PREFIX}\`prefix**`, true)
          .addField(`📜**\`ANTIWORDS\`⮐**`, `**⧪ Setup Antiwords For Server!⪢ \`${PREFIX}\`antiwords**`, true)
          .addField(`📜**\`ANTILINK\`⮐**`, `**⧪ Setup antilink For Server!⪢ \`${PREFIX}\`antilink**`, true)
          .addField(`📜**\`CHANNELUPDATE\`⮐**`, `**⧪ Setup The Channel Updates for Server!⪢ \`${PREFIX}\`channelupdate**`, true)
          .addField(`📜**\`MEMBERUPDATE\`⮐**`, `**⧪ Setup The Member Updates for Server!⪢ \`${PREFIX}\`memberupdate**`, true)
          .addField(`📜**\`LEAVEMESSAGE\`⮐**`, `**⧪ Setup The Leave Message Server!⪢ \`${PREFIX}\`leavemessage**`, true)
          .addField(`📜**\`WELCOMECHANNEL\`⮐**`, `**⧪ Setup The Welcome Channel Server!⪢ \`${PREFIX}\`welcomechannel**`, true)
          .addField(`📜**\`JOINMESSAGE\`⮐**`, `**⧪ Setup The Welcome Message Server!⪢ \`${PREFIX}\`JoinMessage**`, true)
          .addField(`📜**\`GOODBYECHANNEL\`⮐**`, `**⧪ Setup The Goodbye Channel Server!⪢ \`${PREFIX}\`goodbyechannel**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_XeTron") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**XeTron⚡ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`REPORT\`⮐**`, `**⧪ Report a bug!⪢ \`${PREFIX}\`report**`, true)
          .addField(`📜**\`PING\`⮐**`, `**⧪ Get XeTron's ping!⪢ \`${PREFIX}\`ping**`, true)
          .addField(`📜**\`INVITE\`⮐**`, `**⧪ Invite XeTron!⪢ \`${PREFIX}\`invite**`, true)
          .addField(`📜**\`EMOJIID\`⮐**`, `**⧪ Get ID of emojis!⪢ \`${PREFIX}\`emojiid**`, true)
          .addField(`📜**\`HELP\`⮐**`, `**⧪ Show this Command List!⪢ \`${PREFIX}\`help**`, true)
          .addField(`📜**\`SUGGEST\`⮐**`, `**⧪ Suggest Features for XeTron!⪢ \`${PREFIX}\`suggest**`, true)
          .addField(`📜**\`XETRON\`⮐**`, `**⧪ Shows the XeTron informations!⪢ \`${PREFIX}\`xetron**`, true)
          .addField(`📜**\`SERVERINFO\`⮐**`, `**⧪ Shows info about a server!⪢ \`${PREFIX}\`serverinfo**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Anime") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Äñïmê ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`ANIME\`⮐**`, `**⧪ Search Any Anime!⪢ \`${PREFIX}\`anime (anime name)**`, true)
          .addField(`📜**\`SMUG\`⮐**`, `**⧪ Smug Anime Style!⪢ \`${PREFIX}\`smug**`, true)
          .addField(`📜**\`SMILE\`⮐**`, `**⧪ Smile Anime Style!⪢ \`${PREFIX}\`smile**`, true)
          .addField(`📜**\`HAPPY\`⮐**`, `**⧪ Happy Anime Style!⪢ \`${PREFIX}\`happy**`, true)
          .addField(`📜**\`BLUSH\`⮐**`, `**⧪ Blush Anime Style!⪢ \`${PREFIX}\`blush**`, true)
          .addField(`📜**\`CRINGE\`⮐**`, `**⧪ Cringe Anime Style!⪢ \`${PREFIX}\`cringe**`, true)
          .addField(`📜**\`CRY\`⮐**`, `**⧪ Cry Someone Anime Style!⪢ \`${PREFIX}\`cry (mention or ID)**`, true)
          .addField(`📜**\`HUG\`⮐**`, `**⧪ Hug Someone Anime Style!⪢ \`${PREFIX}\`hug (mention or ID)**`, true)
          .addField(`📜**\`PAT\`⮐**`, `**⧪ Pat Someone Anime Style!⪢ \`${PREFIX}\`pat (mention or ID)**`, true)
          .addField(`📜**\`SLAP\`⮐**`, `**⧪ Slap Someone Anime Style!⪢ \`${PREFIX}\`slap (mention or ID)**`, true)
          .addField(`📜**\`POKE\`⮐**`, `**⧪ Poke Someone Anime Style!⪢ \`${PREFIX}\`poke (mention or ID)**`, true)
          .addField(`📜**\`BITE\`⮐**`, `**⧪ Bite Someone Anime Style!⪢ \`${PREFIX}\`bite (mention or ID)**`, true)
          .addField(`📜**\`BONK\`⮐**`, `**⧪ Bonk Someone Anime Style!⪢ \`${PREFIX}\`bonk (mention or ID)**`, true)
          .addField(`📜**\`WAVE\`⮐**`, `**⧪ Wave Someone Anime Style!⪢ \`${PREFIX}\`wave (mention or ID)**`, true)
          .addField(`📜**\`WINK\`⮐**`, `**⧪ Wink Someone Anime Style!⪢ \`${PREFIX}\`wink (mention or ID)**`, true)
          .addField(`📜**\`YEET\`⮐**`, `**⧪ Yeet Someone Anime Style!⪢ \`${PREFIX}\`yeet (mention or ID)**`, true)
          .addField(`📜**\`KICK\`⮐**`, `**⧪ Kick Someone Anime Style!⪢ \`${PREFIX}\`kick (mention or ID)**`, true)
          .addField(`📜**\`KILL\`⮐**`, `**⧪ Kill Someone Anime Style!⪢ \`${PREFIX}\`kill (mention or ID)**`, true)
          .addField(`📜**\`KISS\`⮐**`, `**⧪ Kiss Someone Anime Style!⪢ \`${PREFIX}\`kiss (mention or ID)**`, true)
          .addField(`📜**\`LICK\`⮐**`, `**⧪ Lick Someone Anime Style!⪢ \`${PREFIX}\`lick (mention or ID)**`, true)
          .addField(`📜**\`PUNCH\`⮐**`, `**⧪ Punch Someone Anime Style!⪢ \`${PREFIX}\`punch (mention or ID)**`, true)
          .addField(`📜**\`DANCE\`⮐**`, `**⧪ Dance Someone Anime Style!⪢ \`${PREFIX}\`dance (mention or ID)**`, true)
          .addField(`📜**\`BULLY\`⮐**`, `**⧪ Bully Someone Anime Style!⪢ \`${PREFIX}\`bully (mention or ID)**`, true)
          .addField(`📜**\`SMOOCH\`⮐**`, `**⧪ Smooch Someone Anime Style!⪢ \`${PREFIX}\`smooch (mention or ID)**`, true)
          .addField(`📜**\`CUDDLE\`⮐**`, `**⧪ Cuddle Someone Anime Style!⪢ \`${PREFIX}\`cuddle (mention or ID)**`, true)
          .addField(`📜**\`HANDHOLD\`⮐**`, `**⧪ Handhold Someone Anime Style!⪢ \`${PREFIX}\`handhold (mention or ID)**`, true)
          .addField(`📜**\`HIGHFIVE\`⮐**`, `**⧪ Highfive Someone Anime Style!⪢ \`${PREFIX}\`highfive (mention or ID)**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Adventure") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Adventure🎲ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`8BALL\`⮐**`, `**⧪ Tells you a fortune!⪢ \`${PREFIX}\`8ball**`, true)
          .addField(`📜**\`ALERT\`⮐**`, `**⧪ Get an Alert message!⪢ \`${PREFIX}\`alert**`, true)
          .addField(`📜**\`AMAZEME\`⮐**`, `**⧪ Returns random amazing fact/image!⪢ \`${PREFIX}\`amazeme**`, true)
          .addField(`📜**\`BIDEN\`⮐**`, `**⧪ Get a custom Tweet from Biden!⪢ \`${PREFIX}\`biden**`, true)
          .addField(`📜**\`CHANGEMYMIND\`⮐**`, `**⧪ Image Manipulation Command!⪢ \`${PREFIX}\`changemymind**`, true)
          .addField(`📜**\`CLYDE\`⮐**`, `**⧪ Get a custom clyde message!⪢ \`${PREFIX}\`clyde**`, true)
          .addField(`📜**\`ILLEGAL\`⮐**`, `**⧪ Provide a text to Trump for making it illegal!⪢ \`${PREFIX}\`illegal**`, true)
          .addField(`📜**\`SCROLL\`⮐**`, `**⧪ Another Fun Command!⪢ \`${PREFIX}\`scroll**`, true)
          .addField(`📜**\`TEXTIMAGE\`⮐**`, `**⧪ Text To Image!⪢ \`${PREFIX}\`textimage**`, true)
          .addField(`📜**\`TRASH\`⮐**`, `**⧪ Another Image Manipulation Command!⪢ \`${PREFIX}\`trash**`, true)
          .addField(`📜**\`TRIGGER\`⮐**`, `**⧪Put the Triggered Overlay pic over avatars!⪢ \`${PREFIX}\`trigger**`, true)
          .addField(`📜**\`WASTED\`⮐**`, `**⧪ Put the GTA Wasted pic over avatars!⪢ \`${PREFIX}\`wasted**`, true)
          .addField(`📜**\`AVATAR\`⮐**`, `**⧪ Get a  widened avatar of a user!⪢ \`${PREFIX}\`avatar**`, true)
          .addField(`📜**\`ASCII\`⮐**`, `**⧪ Returns provided text in ascii format!⪢ \`${PREFIX}\`ascii**`, true)
          .addField(`📜**\`CATSAY\`⮐**`, `**⧪ Make the cat say your message!⪢ \`${PREFIX}\`catsay**`, true)
          .addField(`📜**\`COWSAY\`⮐**`, `**⧪ Make a cow say your message!⪢ \`${PREFIX}\`cowsay**`, true)
          .addField(`📜**\`CLAP\`⮐**`, `**⧪ Add clap emoji between each word!⪢ \`${PREFIX}\`clap**`, true)
          .addField(`📜**\`DAB\`⮐**`, `**⧪ Adds dab emoji after each word!⪢ \`${PREFIX}\`dab**`, true)
          .addField(`📜**\`EMOJIFY\`⮐**`, `**⧪ Returns provided text in emojify (emotes) form!⪢ \`${PREFIX}\`emojify**`, true)
          .addField(`📜**\`FLIPTEXT\`⮐**`, `**⧪ Flip some text!⪢ \`${PREFIX}\`fliptext**`, true)
          .addField(`📜**\`GIF\`⮐**`, `**⧪ Get gifs based on your search!⪢ \`${PREFIX}\`gif**`, true)
          .addField(`📜**\`HACK\`⮐**`, `**⧪ Hack Someone lol!⪢ \`${PREFIX}\`hack**`, true)
          .addField(`📜**\`HOWGAY\`⮐**`, `**⧪ Check How much gay lmao!⪢ \`${PREFIX}\`howgay**`, true)
          .addField(`📜**\`MEME\`⮐**`, `**⧪ Sends a random meme!⪢ \`${PREFIX}\`meme**`, true)
          .addField(`📜**\`NITRO\`⮐**`, `**⧪ Fake a nitro gift!⪢ \`${PREFIX}\`nitro**`, true)
          .addField(`📜**\`ORANGETEXT\`⮐**`, `**⧪ Colors the Text with Orange Color!⪢ \`${PREFIX}\`orangetext**`, true)
          .addField(`📜**\`POKEIMG\`⮐**`, `**⧪ Get Image of the Mentioned Pokemon!⪢ \`${PREFIX}\`pokeimg**`, true)
          .addField(`📜**\`PP\`⮐**`, `**⧪ Dick/Penis Machine Calculator!⪢ \`${PREFIX}\`pp**`, true)
          .addField(`📜**\`RESPECT\`⮐**`, `**⧪ Returns Random Respect GIF!⪢ \`${PREFIX}\`respect**`, true)
          .addField(`📜**\`REVERSE\`⮐**`, `**⧪ Reverse the text entered!⪢ \`${PREFIX}\`reverse**`, true)
          .addField(`📜**\`ROAST\`⮐**`, `**⧪ Roasts a user!⪢ \`${PREFIX}\`roast**`, true)
          .addField(`📜**\`TRIVIA\`⮐**`, `**⧪ Test your knowledge!⪢ \`${PREFIX}\`trivia**`, true)
          .addField(`📜**\`VAPORTEXT\`⮐**`, `**⧪ Fun Command!⪢ \`${PREFIX}\`vaportext**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Moderation") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Moderation🔒ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`CREATEROLE\`⮐**`, `**⧪ Creates A new role in the guild!⪢ \`${PREFIX}\`createrole**`, true)
          .addField(`📜**\`DELCHANNEL\`⮐**`, `**⧪ Delete Channels From your Server!⪢ \`${PREFIX}\`delchannel**`, true)
          .addField(`📜**\`ANNOUNCE\`⮐**`, `**⧪ Make an Announcemnet in your Serverl!⪢ \`${PREFIX}\`announce**`, true)
          .addField(`📜**\`LOCK\`⮐**`, `**⧪ Locks a Channel!⪢ \`${PREFIX}\`lock**`, true)
          .addField(`📜**\`SOFTBAN\`⮐**`, `**⧪ Soft Ban a User!⪢ \`${PREFIX}\`softban**`, true)
          .addField(`📜**\`UNLOCK\`⮐**`, `**⧪ Unlocks a Channel!⪢ \`${PREFIX}\`unlock**`, true)
          .addField(`📜**\`GIVEROLE\`⮐**`, `**⧪ Give roles to users!⪢ \`${PREFIX}\`giverole**`, true)
          .addField(`📜**\`REMOVEROLE\`⮐**`, `**⧪ Take roles from users!⪢ \`${PREFIX}\`removerole**`, true)
          .addField(`📜**\`KICKOUT\`⮐**`, `**⧪ Kick anyone with one shot xD!⪢ \`${PREFIX}\`kickout**`, true)
          .addField(`📜**\`SERVERICON\`⮐**`, `**⧪ Displays the Server Icon!⪢ \`${PREFIX}\`servericon**`, true)
          .addField(`📜**\`CLEAR\`⮐**`, `**⧪ delete the given number of messages!⪢ \`${PREFIX}\`clear**`, true)
          .addField(`📜**\`NICKNAME\`⮐**`, `**⧪ Change the Nickname of other Users!⪢ \`${PREFIX}\`nickname**`, true)
          .addField(`📜**\`MUTE\`⮐**`, `**⧪ Mutes the specified user.⪢ \`${PREFIX}\`mute**`, true)
          .addField(`📜**\`UNMUTE\`⮐**`, `**⧪ Un-Mutes the specified user.⪢ \`${PREFIX}\`unmute**`, true)
          .addField(`📜**\`TEMPMUTE\`⮐**`, `**⧪ temporarily mute a user for a given time!⪢ \`${PREFIX}\`tempmute**`, true)
          .addField(`📜**\`BAN\`⮐**`, `**⧪ Ban anyone with one shot whithout knowing anyone xD!⪢ \`${PREFIX}\`ban**`, true)
          .addField(`📜**\`USERINFO\`⮐**`, `**⧪ Get info about your account or mentiobned user's account!⪢ \`${PREFIX}\`userinfo**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_NSFW") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**NSFW🔞ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`4K\`⮐**`, `**⧪ \`${PREFIX}\`4k**`, true)
          .addField(`📜**\`ANAL\`⮐**`, `**⧪ \`${PREFIX}\`anal**`, true)
          .addField(`📜**\`ASS\`⮐**`, `**⧪ \`${PREFIX}\`ass**`, true)
          .addField(`📜**\`BDSM\`⮐**`, `**⧪ \`${PREFIX}\`bdsm**`, true)
          .addField(`📜**\`BLOWJOB\`⮐**`, `**⧪ \`${PREFIX}\`blowjob**`, true)
          .addField(`📜**\`BOOB\`⮐**`, `**⧪ \`${PREFIX}\`boobs**`, true)
          .addField(`📜**\`CREAMPIE\`⮐**`, `**⧪ \`${PREFIX}\`creampie**`, true)
          .addField(`📜**\`CUM\`⮐**`, `**⧪ \`${PREFIX}\`cum**`, true)
          .addField(`📜**\`CUMSLUTS\`⮐**`, `**⧪ \`${PREFIX}\`cumsluts**`, true)
          .addField(`📜**\`DANBOORU\`⮐**`, `**⧪ \`${PREFIX}\`danbooru**`, true)
          .addField(`📜**\`DOUJIN\`⮐**`, `**⧪ \`${PREFIX}\`doujin**`, true)
          .addField(`📜**\`EROKEMO\`⮐**`, `**⧪ \`${PREFIX}\`erokemo**`, true)
          .addField(`📜**\`FEETGIF\`⮐**`, `**⧪ \`${PREFIX}\`feetgif**`, true)
          .addField(`📜**\`FEMDOM\`⮐**`, `**⧪ \`${PREFIX}\`femdom**`, true)
          .addField(`📜**\`GANGBANG\`⮐**`, `**⧪ \`${PREFIX}\`gangbang**`, true)
          .addField(`📜**\`GONEWILD\`⮐**`, `**⧪ \`${PREFIX}\`gonewild**`, true)
          .addField(`📜**\`HENTAI\`⮐**`, `**⧪ \`${PREFIX}\`hentai**`, true)
          .addField(`📜**\`HENTAIASS\`⮐**`, `**⧪ \`${PREFIX}\`hentaiass**`, true)
          .addField(`📜**\`HENTAITHIGH\`⮐**`, `**⧪ \`${PREFIX}\`hentaithigh**`, true)
          .addField(`📜**\`KITSUNE\`⮐**`, `**⧪ \`${PREFIX}\`kitsune**`, true)
          .addField(`📜**\`LEWD\`⮐**`, `**⧪ \`${PREFIX}\`lewd**`, true)
          .addField(`📜**\`MAID\`⮐**`, `**⧪ \`${PREFIX}\`maid**`, true)
          .addField(`📜**\`MILF\`⮐**`, `**⧪ \`${PREFIX}\`milf**`, true)
          .addField(`📜**\`NGIF\`⮐**`, `**⧪ \`${PREFIX}\`ngif**`, true)
          .addField(`📜**\`NMW\`⮐**`, `**⧪ \`${PREFIX}\`nmw**`, true)
          .addField(`📜**\`NSFW\`⮐**`, `**⧪ \`${PREFIX}\`nsfw**`, true)
          .addField(`📜**\`ORGY\`⮐**`, `**⧪ \`${PREFIX}\`orgy**`, true)
          .addField(`📜**\`PANTY\`⮐**`, `**⧪ \`${PREFIX}\`panty**`, true)
          .addField(`📜**\`PORNGIF\`⮐**`, `**⧪ \`${PREFIX}\`porngif**`, true)
          .addField(`📜**\`PUBLIC\`⮐**`, `**⧪ \`${PREFIX}\`public**`, true)
          .addField(`📜**\`PUSSY\`⮐**`, `**⧪ \`${PREFIX}\`pussy**`, true)
          .addField(`📜**\`RANDOM\`⮐**`, `**⧪ Human(yes)\nHentai!(yes)⪢ \`${PREFIX}\`random**`, true)
          .addField(`📜**\`THIGH\`⮐**`, `**⧪ \`${PREFIX}\`thigh**`, true)
          .addField(`📜**\`VAGINA\`⮐**`, `**⧪ \`${PREFIX}\`vagina**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Utility") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Utility🔧ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`SAY\`⮐**`, `**⧪ Make the bot say your message!⪢ \`${PREFIX}\`say**`, true)
          .addField(`📜**\`EMBED\`⮐**`, `**⧪ Send Messages in embed form!⪢ \`${PREFIX}\`embed**`, true)
          .addField(`📜**\`GOOGLE\`⮐**`, `**⧪ Search anything on google!⪢ \`${PREFIX}\`google**`, true)
          .addField(`📜**\`CALCULATOR\`⮐**`, `**⧪ Calculate any math!⪢ \`${PREFIX}\`calculator**`, true)
          .addField(`📜**\`WIKI\`⮐**`, `**⧪ Get Search Results from Wikipedia!⪢ \`${PREFIX}\`wiki**`, true)
          .addField(`📜**\`TRANSLATE\`⮐**`, `**⧪ Translates the given message.!⪢ \`${PREFIX}\`lock**`, true)
          .addField(`📜**\`WEATHER\`⮐**`, `**⧪ Shows Weather for the provided place!⪢ \`${PREFIX}\`weather**`, true)
          .addField(`📜**\`IMDB\`⮐**`, `**⧪ Get the information about series and movies!⪢ \`${PREFIX}\`imdb**`, true)
          .addField(`📜**\`ENLARGEMOJI\`⮐**`, `**⧪ Converting Server emoji to PNG/GIF!⪢ \`${PREFIX}\`enlargemoji**`, true)
          .addField(`📜**\`AVATAR\`⮐**`, `**⧪ Gives avatar for message author or mentioned user.!⪢ \`${PREFIX}\`avatar**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Games") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons)
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Games🎮ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`CONNECT4\`⮐**`, `**⧪ connect4 in discord!!⪢ \`${PREFIX}\`connect4**`, true)
          .addField(`📜**\`CATCHFISH\`⮐**`, `**⧪ Deletes a role!⪢ \`${PREFIX}\`catchfish**`, true)
          .addField(`📜**\`FASTTYPE\`⮐**`, `**⧪ Type as fast as you can!⪢ \`${PREFIX}\`fasttype**`, true)
          .addField(`📜**\`FOOTBALL\`⮐**`, `**⧪ Football in discord!⪢ \`${PREFIX}\`football**`, true)
          .addField(`📜**\`GUNFIGHT\`⮐**`, `**⧪ Gunfight in discord!⪢ \`${PREFIX}\`gunfight**`, true)
          .addField(`📜**\`GUESSTHENUMBER\`⮐**`, `**⧪ Guess The Number!⪢ \`${PREFIX}\`guessthenumber**`, true)
          .addField(`📜**\`RPS\`⮐**`, `**⧪ Rock paper scissors in discord!⪢ \`${PREFIX}\`rps**`, true)
          .addField(`📜**\`SNAKE\`⮐**`, `**⧪ Classic snake in discord!⪢ \`${PREFIX}\`snake**`, true)
          .addField(`📜**\`TTT\`⮐**`, `**⧪ Tic Tac Toe in discord!⪢ \`${PREFIX}\`ttt**`, true),
        ],
      });
    }
  }
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");