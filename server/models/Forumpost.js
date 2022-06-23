const mongoose = require("mongoose");

const forumpostSchema = new mongoose.Schema({
  Typeofpost: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  content: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cheese: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  sauce: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  toppings: [String]
});

const Forumpost = mongoose.model("Forumpost", forumpostSchema);
module.exports = Forumpost;
