const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
  Ӽɛȶʀօռֆɨɖ: String,
  xᴇᴛʀᴏɴᴄʜɪᴅ: String,
});
const memberModel = (module.exports = mongoose.model(
  "memberupdates",
  memberSchema
));