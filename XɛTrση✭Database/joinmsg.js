const mongoose = require("mongoose");

const JoinMsgSchema = new mongoose.Schema({
  JoinMsg: {
    type: String,
  },
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
});

const MessageModel = (module.exports = mongoose.model(
  "joinmsg",
  JoinMsgSchema
));
