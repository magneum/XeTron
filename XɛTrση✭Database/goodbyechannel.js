const mongoose = require("mongoose");

const goodbyeSchema = new mongoose.Schema({
  Bye: {
    type: String,
  },
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
});

const MessageModel = (module.exports = mongoose.model(
  "goodbye",
  goodbyeSchema
));
