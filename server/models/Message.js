const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  room_id: {
    type: String,
    required: true,
    enum: []
  }
});

const Message = mongoose.model("Board", messageSchema);
module.exports = Message;
