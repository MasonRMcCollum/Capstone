const { Router } = require("express");
const Forumpost = require("../models/Forumpost");
const Board = require("../models/Forumpost");
const router = Router();

router.post("/", (request, response) => {
  const newForumpost = new Forumpost(request.body);
  newForumpost.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Forumpost.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Forumpost.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
