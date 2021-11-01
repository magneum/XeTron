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
    const prefixData = await prefixModel
      .findOne({
        xᴇᴛʀᴏɴꜱᴇʀɪᴅ: msg.guild.id,
      })
      .catch((err) => console.log(err));
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
            .addField(`📜**\`SETPREFIX\`⮐**`, `**⧪ Setup The Prefix Server!⪢ *\`${PREFIX}\`*prefix (argument)**`, true)
            .addField(`📜**\`ANTIWORDS\`⮐**`, `**⧪ Setup Antiwords For Server!⪢ *\`${PREFIX}\`*antiwords (argument)**`, true)
            .addField(`📜**\`ANTILINK\`⮐**`, `**⧪ Setup antilink For Server!⪢ *\`${PREFIX}\`*antilink (argument)**`, true)
            .addField(`📜**\`LEAVEMESSAGE\`⮐**`, `**⧪ Setup The Leave Message Server!⪢ *\`${PREFIX}\`*leavemessage (argument)**`, true)
            .addField(`📜**\`WELCOMECHANNEL\`⮐**`, `**⧪ Setup The Welcome Channel Server!⪢ *\`${PREFIX}\`*welcomechannel (argument)**`, true)
            .addField(`📜**\`JOINMESSAGE\`⮐**`, `**⧪ Setup The Welcome Message Server!⪢ *\`${PREFIX}\`*JoinMessage (argument)**`, true)
            .addField(`📜**\`GOODBYECHANNEL\`⮐**`, `**⧪ Setup The Goodbye Channel Server!⪢ *\`${PREFIX}\`*goodbyechannel (argument)**`, true),
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
            .addField(`📜**\`REPORT\`⮐**`, `**⧪ Report a bug!⪢ *\`${PREFIX}\`*report**`, true)
            .addField(`📜**\`PING\`⮐**`, `**⧪ Get XeTron's ping!⪢ *\`${PREFIX}\`*ping**`, true)
            .addField(`📜**\`INVITE\`⮐**`, `**⧪ Invite XeTron!⪢ *\`${PREFIX}\`*invite**`, true)
            .addField(`📜**\`EMOJIID\`⮐**`, `**⧪ Get ID of emojis!⪢ *\`${PREFIX}\`*emojiid**`, true)
            .addField(`📜**\`HELP\`⮐**`, `**⧪ Show this Command List!⪢ *\`${PREFIX}\`*help**`, true)
            .addField(`📜**\`SUGGEST\`⮐**`, `**⧪ Suggest Features for XeTron!⪢ *\`${PREFIX}\`*suggest**`, true)
            .addField(`📜**\`XETRON\`⮐**`, `**⧪ Shows the XeTron informations!⪢ *\`${PREFIX}\`*xetron**`, true)
            .addField(`📜**\`SERVERINFO\`⮐**`, `**⧪ Shows info about a server!⪢ *\`${PREFIX}\`*serverinfo**`, true),
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
            .addField(`📜**\`ANIME\`⮐**`, `**⧪ Search Any Anime!⪢ *\`${PREFIX}\`*anime (anime name)**`, true)
            .addField(`📜**\`SMUG\`⮐**`, `**⧪ Smug Anime Style!⪢ *\`${PREFIX}\`*smug**`, true)
            .addField(`📜**\`SMILE\`⮐**`, `**⧪ Smile Anime Style!⪢ *\`${PREFIX}\`*smile**`, true)
            .addField(`📜**\`HAPPY\`⮐**`, `**⧪ Happy Anime Style!⪢ *\`${PREFIX}\`*happy**`, true)
            .addField(`📜**\`BLUSH\`⮐**`, `**⧪ Blush Anime Style!⪢ *\`${PREFIX}\`*blush**`, true)
            .addField(`📜**\`CRINGE\`⮐**`, `**⧪ Cringe Anime Style!⪢ *\`${PREFIX}\`*cringe**`, true)
            .addField(`📜**\`CRY\`⮐**`, `**⧪ Cry Someone Anime Style!⪢ *\`${PREFIX}\`*cry (mention or ID)**`, true)
            .addField(`📜**\`HUG\`⮐**`, `**⧪ Hug Someone Anime Style!⪢ *\`${PREFIX}\`*hug (mention or ID)**`, true)
            .addField(`📜**\`PAT\`⮐**`, `**⧪ Pat Someone Anime Style!⪢ *\`${PREFIX}\`*pat (mention or ID)**`, true)
            .addField(`📜**\`SLAP\`⮐**`, `**⧪ Slap Someone Anime Style!⪢ *\`${PREFIX}\`*slap (mention or ID)**`, true)
            .addField(`📜**\`POKE\`⮐**`, `**⧪ Poke Someone Anime Style!⪢ *\`${PREFIX}\`*poke (mention or ID)**`, true)
            .addField(`📜**\`BITE\`⮐**`, `**⧪ Bite Someone Anime Style!⪢ *\`${PREFIX}\`*bite (mention or ID)**`, true)
            .addField(`📜**\`BONK\`⮐**`, `**⧪ Bonk Someone Anime Style!⪢ *\`${PREFIX}\`*bonk (mention or ID)**`, true)
            .addField(`📜**\`WAVE\`⮐**`, `**⧪ Wave Someone Anime Style!⪢ *\`${PREFIX}\`*wave (mention or ID)**`, true)
            .addField(`📜**\`WINK\`⮐**`, `**⧪ Wink Someone Anime Style!⪢ *\`${PREFIX}\`*wink (mention or ID)**`, true)
            .addField(`📜**\`YEET\`⮐**`, `**⧪ Yeet Someone Anime Style!⪢ *\`${PREFIX}\`*yeet (mention or ID)**`, true)
            .addField(`📜**\`KICK\`⮐**`, `**⧪ Kick Someone Anime Style!⪢ *\`${PREFIX}\`*kick (mention or ID)**`, true)
            .addField(`📜**\`KILL\`⮐**`, `**⧪ Kill Someone Anime Style!⪢ *\`${PREFIX}\`*kill (mention or ID)**`, true)
            .addField(`📜**\`KISS\`⮐**`, `**⧪ Kiss Someone Anime Style!⪢ *\`${PREFIX}\`*kiss (mention or ID)**`, true)
            .addField(`📜**\`LICK\`⮐**`, `**⧪ Lick Someone Anime Style!⪢ *\`${PREFIX}\`*lick (mention or ID)**`, true)
            .addField(`📜**\`PUNCH\`⮐**`, `**⧪ Punch Someone Anime Style!⪢ *\`${PREFIX}\`*punch (mention or ID)**`, true)
            .addField(`📜**\`DANCE\`⮐**`, `**⧪ Dance Someone Anime Style!⪢ *\`${PREFIX}\`*dance (mention or ID)**`, true)
            .addField(`📜**\`BULLY\`⮐**`, `**⧪ Bully Someone Anime Style!⪢ *\`${PREFIX}\`*bully (mention or ID)**`, true)
            .addField(`📜**\`SMOOCH\`⮐**`, `**⧪ Smooch Someone Anime Style!⪢ *\`${PREFIX}\`*smooch (mention or ID)**`, true)
            .addField(`📜**\`CUDDLE\`⮐**`, `**⧪ Cuddle Someone Anime Style!⪢ *\`${PREFIX}\`*cuddle (mention or ID)**`, true)
            .addField(`📜**\`HANDHOLD\`⮐**`, `**⧪ Handhold Someone Anime Style!⪢ *\`${PREFIX}\`*handhold (mention or ID)**`, true)
            .addField(`📜**\`HIGHFIVE\`⮐**`, `**⧪ Highfive Someone Anime Style!⪢ *\`${PREFIX}\`*highfive (mention or ID)**`, true),
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
            .addField(`📜**\`8BALL\`⮐**`, `**⧪ Tells you a fortune!⪢ *\`${PREFIX}\`*8ball (argument)**`, true)
            .addField(`📜**\`ASCII\`⮐**`, `**⧪ Returns provided text in ascii format!⪢ *\`${PREFIX}\`*ascii (argument)**`, true)
            .addField(`📜**\`CATSAY\`⮐**`, `**⧪ Make the cat say your message!⪢ *\`${PREFIX}\`*catsay (argument)**`, true)
            .addField(`📜**\`COWSAY\`⮐**`, `**⧪ Make a cow say your message!⪢ *\`${PREFIX}\`*cowsay (argument)**`, true)
            .addField(`📜**\`CLAP\`⮐**`, `**⧪ Add clap emoji between each word!⪢ *\`${PREFIX}\`*clap (argument)**`, true)
            .addField(`📜**\`DAB\`⮐**`, `**⧪ Adds dab emoji after each word!⪢ *\`${PREFIX}\`*dab (argument)**`, true)
            .addField(`📜**\`EMOJIFY\`⮐**`, `**⧪ Returns provided text in emojify (emotes) form!⪢ *\`${PREFIX}\`*emojify (argument)**`, true)
            .addField(`📜**\`FLIPTEXT\`⮐**`, `**⧪ Flip some text!⪢ *\`${PREFIX}\`*fliptext (argument)**`, true)
            .addField(`📜**\`GIF\`⮐**`, `**⧪ Get gifs based on your search!⪢ *\`${PREFIX}\`*gif (argument)**`, true)
            .addField(`📜**\`HACK\`⮐**`, `**⧪ Hack Someone lol!⪢ *\`${PREFIX}\`*hack (argument)**`, true)
            .addField(`📜**\`HOWGAY\`⮐**`, `**⧪ Check How much gay lmao!⪢ *\`${PREFIX}\`*howgay (argument)**`, true)
            .addField(`📜**\`MEME\`⮐**`, `**⧪ Sends a random meme!⪢ *\`${PREFIX}\`*meme (argument)**`, true)
            .addField(`📜**\`NITRO\`⮐**`, `**⧪ Fake a nitro gift!⪢ *\`${PREFIX}\`*nitro (argument)**`, true)
            .addField(`📜**\`ORANGETEXT\`⮐**`, `**⧪ Colors the Text with Orange Color!⪢ *\`${PREFIX}\`*orangetext (argument)**`, true)
            .addField(`📜**\`POKEIMG\`⮐**`, `**⧪ Get Image of the Mentioned Pokemon!⪢ *\`${PREFIX}\`*pokeimg (argument)**`, true)
            .addField(`📜**\`PP\`⮐**`, `**⧪ Dick/Penis Machine Calculator!⪢ *\`${PREFIX}\`*pp (argument)**`, true)
            .addField(`📜**\`RESPECT\`⮐**`, `**⧪ Returns Random Respect GIF!⪢ *\`${PREFIX}\`*respect (argument)**`, true)
            .addField(`📜**\`REVERSE\`⮐**`, `**⧪ Reverse the text entered!⪢ *\`${PREFIX}\`*reverse (argument)**`, true)
            .addField(`📜**\`ROAST\`⮐**`, `**⧪ Roasts a user!⪢ *\`${PREFIX}\`*roast (argument)**`, true)
            .addField(`📜**\`TRIVIA\`⮐**`, `**⧪ Test your knowledge!⪢ *\`${PREFIX}\`*trivia (argument)**`, true)
            .addField(`📜**\`VAPORTEXT\`⮐**`, `**⧪ Fun Command!⪢ *\`${PREFIX}\`*vaportext (argument)**`, true),
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
            .addField(`📜**\`DELROLE\`⮐**`, `**⧪ Deletes a role!⪢ *\`${PREFIX}\`*delrole (argument)**`, true)
            .addField(`📜**\`CREATEROLE\`⮐**`, `**⧪ Creates A new role in the guild!⪢ *\`${PREFIX}\`*createrole (argument)**`, true)
            .addField(`📜**\`DELCHANNEL\`⮐**`, `**⧪ Delete Channels From your Server!⪢ *\`${PREFIX}\`*delchannel (argument)**`, true)
            .addField(`📜**\`ANNOUNCE\`⮐**`, `**⧪ Make an Announcemnet in your Serverl!⪢ *\`${PREFIX}\`*announce (argument)**`, true)
            .addField(`📜**\`LOCK\`⮐**`, `**⧪ Locks a Channel!⪢ *\`${PREFIX}\`*lock (argument)**`, true)
            .addField(`📜**\`DM\`⮐**`, `**⧪ Send DM message to a user!⪢ *\`${PREFIX}\`*dm (argument)**`, true)
            .addField(`📜**\`SOFTBAN\`⮐**`, `**⧪ Soft Ban a User!⪢ *\`${PREFIX}\`*softban (argument)**`, true)
            .addField(`📜**\`UNLOCK\`⮐**`, `**⧪ Unlocks a Channel!⪢ *\`${PREFIX}\`*unlock (argument)**`, true)
            .addField(`📜**\`GIVEROLE\`⮐**`, `**⧪ Give roles to users!⪢ *\`${PREFIX}\`*giverole (argument)**`, true)
            .addField(`📜**\`REMOVEROLE\`⮐**`, `**⧪ Take roles from users!⪢ *\`${PREFIX}\`*removerole (argument)**`, true)
            .addField(`📜**\`KICKOUT\`⮐**`, `**⧪ Kick anyone with one shot xD!⪢ *\`${PREFIX}\`*kickout (argument)**`, true)
            .addField(`📜**\`SERVERICON\`⮐**`, `**⧪ Displays the Server Icon!⪢ *\`${PREFIX}\`*servericon (argument)**`, true)
            .addField(`📜**\`CLEAR\`⮐**`, `**⧪ delete the given number of messages!⪢ *\`${PREFIX}\`*clear (argument)**`, true)
            .addField(`📜**\`NICKNAME\`⮐**`, `**⧪ Change the Nickname of other Users!⪢ *\`${PREFIX}\`*nickname (argument)**`, true)
            .addField(`📜**\`TEMPMUTE\`⮐**`, `**⧪ temporarily mute a user for a given time!⪢ *\`${PREFIX}\`*tempmute (argument)**`, true)
            .addField(`📜**\`BAN\`⮐**`, `**⧪ Ban anyone with one shot whithout knowing anyone xD!⪢ *\`${PREFIX}\`*ban (argument)**`, true)
            .addField(`📜**\`NEWTEXTCHANNEL\`⮐**`, `**⧪ Create text Channels in your Server!⪢ *\`${PREFIX}\`*newtextchannel (argument)**`, true)
            .addField(`📜**\`NEWVOICECHANNEL\`⮐**`, `**⧪ Create Voice Channels in your Server!⪢ *\`${PREFIX}\`*newvoicechannel (argument)**`, true)
            .addField(`📜**\`USERINFO\`⮐**`, `**⧪ Get info about your account or mentiobned user's account!⪢ *\`${PREFIX}\`*userinfo (argument)**`, true),
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
            .addField(`📜**\`4K\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*4k**`, true)
            .addField(`📜**\`ANAL\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*anal**`, true)
            .addField(`📜**\`ASS\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*ass**`, true)
            .addField(`📜**\`BDSM\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*bdsm**`, true)
            .addField(`📜**\`BLOWJOB\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*blowjob**`, true)
            .addField(`📜**\`BOOB\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*boobs**`, true)
            .addField(`📜**\`CREAMPIE\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*creampie**`, true)
            .addField(`📜**\`CUM\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*cum**`, true)
            .addField(`📜**\`CUMSLUTS\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*cumsluts**`, true)
            .addField(`📜**\`DANBOORU\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*danbooru**`, true)
            .addField(`📜**\`DOUJIN\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*doujin**`, true)
            .addField(`📜**\`EROKEMO\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*erokemo**`, true)
            .addField(`📜**\`FEETGIF\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*feetgif**`, true)
            .addField(`📜**\`FEMDOM\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*femdom**`, true)
            .addField(`📜**\`GANGBANG\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*gangbang**`, true)
            .addField(`📜**\`GONEWILD\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*gonewild**`, true)
            .addField(`📜**\`HENTAI\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*hentai**`, true)
            .addField(`📜**\`HENTAIASS\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*hentaiass**`, true)
            .addField(`📜**\`HENTAITHIGH\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*hentaithigh**`, true)
            .addField(`📜**\`KITSUNE\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*kitsune**`, true)
            .addField(`📜**\`LEWD\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*lewd**`, true)
            .addField(`📜**\`MAID\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*maid**`, true)
            .addField(`📜**\`MILF\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*milf**`, true)
            .addField(`📜**\`NGIF\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*ngif**`, true)
            .addField(`📜**\`NMW\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*nmw**`, true)
            .addField(`📜**\`NSFW\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*nsfw**`, true)
            .addField(`📜**\`ORGY\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*orgy**`, true)
            .addField(`📜**\`PANTY\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*panty**`, true)
            .addField(`📜**\`PORNGIF\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*porngif**`, true)
            .addField(`📜**\`PUBLIC\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*public**`, true)
            .addField(`📜**\`PUSSY\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*pussy**`, true)
            .addField(`📜**\`RANDOM\`⮐**`, `**⧪ Human(yes)\nHentai!(yes)⪢ *\`${PREFIX}\`*random**`, true)
            .addField(`📜**\`THIGH\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*thigh**`, true)
            .addField(`📜**\`VAGINA\`⮐**`, `**⧪ NSFW⪢ *\`${PREFIX}\`*vagina**`, true),
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
            .addField(`📜**\`SAY\`⮐**`, `**⧪ Make the bot say your message!⪢ *\`${PREFIX}\`*say (argument)**`, true)
            .addField(`📜**\`EMBED\`⮐**`, `**⧪ Send Messages in embed form!⪢ *\`${PREFIX}\`*embed (argument)**`, true)
            .addField(`📜**\`GOOGLE\`⮐**`, `**⧪ Search anything on google!⪢ *\`${PREFIX}\`*google (argument)**`, true)
            .addField(`📜**\`URBAN\`⮐**`, `**⧪ Find meanings from the urban dictionary⪢ *\`${PREFIX}\`*urban**`, true)
            .addField(`📜**\`CALCULATOR\`⮐**`, `**⧪ Calculate any math!⪢ *\`${PREFIX}\`*calculator (argument)**`, true)
            .addField(`📜**\`WIKI\`⮐**`, `**⧪ Get Search Results from Wikipedia!⪢ *\`${PREFIX}\`*wiki (argument)**`, true)
            .addField(`📜**\`TRANSLATE\`⮐**`, `**⧪ Translates the given message.!⪢ *\`${PREFIX}\`*lock (argument)**`, true)
            .addField(`📜**\`WEATHER\`⮐**`, `**⧪ Shows Weather for the provided place!⪢ *\`${PREFIX}\`*weather (argument)**`, true)
            .addField(`📜**\`IMDB\`⮐**`, `**⧪ Get the information about series and movies!⪢ *\`${PREFIX}\`*imdb (argument)**`, true)
            .addField(`📜**\`ENLARGEMOJI\`⮐**`, `**⧪ Converting Server emoji to PNG/GIF!⪢ *\`${PREFIX}\`*enlargemoji (argument)**`, true)
            .addField(`📜**\`AVATAR\`⮐**`, `**⧪ Gives avatar for message author or mentioned user.!⪢ *\`${PREFIX}\`*avatar (argument)**`, true),
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
            .addField(`📜**\`CONNECT4\`⮐**`, `**⧪ connect4 in discord!!⪢ *\`${PREFIX}\`*connect4**`, true)
            .addField(`📜**\`CATCHFISH\`⮐**`, `**⧪ Deletes a role!⪢ *\`${PREFIX}\`*catchfish**`, true)
            .addField(`📜**\`FASTTYPE\`⮐**`, `**⧪ Type as fast as you can!⪢ *\`${PREFIX}\`*fasttype**`, true)
            .addField(`📜**\`FOOTBALL\`⮐**`, `**⧪ Football in discord!⪢ *\`${PREFIX}\`*football**`, true)
            .addField(`📜**\`GUNFIGHT\`⮐**`, `**⧪ Gunfight in discord!⪢ *\`${PREFIX}\`*gunfight**`, true)
            .addField(`📜**\`GUESSTHENUMBER\`⮐**`, `**⧪ Guess The Number!⪢ *\`${PREFIX}\`*guessthenumber**`, true)
            .addField(`📜**\`RPS\`⮐**`, `**⧪ Rock paper scissors in discord!⪢ *\`${PREFIX}\`*rps**`, true)
            .addField(`📜**\`SNAKE\`⮐**`, `**⧪ Classic snake in discord!⪢ *\`${PREFIX}\`*snake**`, true)
            .addField(`📜**\`TTT\`⮐**`, `**⧪ Tic Tac Toe in discord!⪢ *\`${PREFIX}\`*ttt**`, true),
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
