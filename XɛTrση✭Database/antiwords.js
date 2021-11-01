const mongoose = require("mongoose");

const antiwordsSchema = new mongoose.Schema({
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
});

const model = mongoose.model("antiwords", antiwordsSchema);

module.exports = model;
