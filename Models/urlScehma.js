const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  userVisit: {
    type: Number,
    required: true,
  },
});

const modelURL = mongoose.model("url", urlSchema);

module.exports = modelURL;
