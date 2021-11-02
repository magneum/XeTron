const mongoose = require("mongoose");
const guildSchema = new mongoose.Schema({
  Ӽɛȶʀօռֆɨɖ: String,
  xᴇᴛʀᴏɴᴄʜɪᴅ: String,
});
const guildModel = (module.exports = mongoose.model(
  "guildupdates",
  guildSchema
));