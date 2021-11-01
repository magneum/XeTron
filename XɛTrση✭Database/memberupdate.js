const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
  xᴇᴛʀᴏɴᴄʜɪᴅ: String,
});
const memberModel = (module.exports = mongoose.model(
  "memberupdates",
  memberSchema
));
