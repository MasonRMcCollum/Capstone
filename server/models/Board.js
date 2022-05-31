const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  crust: {
    type: String,
    required: true,
    enum: []
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

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
