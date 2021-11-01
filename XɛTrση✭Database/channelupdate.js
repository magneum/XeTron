const mongoose = require("mongoose");
const channelSchema = new mongoose.Schema({
  xᴇᴛʀᴏɴᴄʜɪᴅ: String,
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
});
const channelModel = (module.exports = mongoose.model(
  "channelupdates",
  channelSchema
));
