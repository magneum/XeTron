const mongoose = require("mongoose");
const channelSchema = new mongoose.Schema({
  xᴇᴛʀᴏɴᴄʜɪᴅ: String,
  Ӽɛȶʀօռֆɨɖ: String,
});
const channelModel = (module.exports = mongoose.model(
  "channelupdates",
  channelSchema
));