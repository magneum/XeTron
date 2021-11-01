const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
  xᴇᴛʀᴏɴᴄʜɪᴅ: String,
});
const messageModel = (module.exports = mongoose.model(
  "messagelogs",
  messageSchema
));
