const mongoose = require("mongoose");

const antilinkSchema = new mongoose.Schema({
  xᴇᴛʀᴏɴꜱᴇʀɪᴅ: String,
});

const antilinkModel = (module.exports = new mongoose.model(
  "antilink",
  antilinkSchema
));
