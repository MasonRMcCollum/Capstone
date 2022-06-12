const { Router } = require("express");
const Message = require("../models/Message");
const Board = require("../models/Message");
const router = Router();

router.post("/", (request, response) => {
  const newMessage = new Message(request.body);
  newMessage.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Message.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Message.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
