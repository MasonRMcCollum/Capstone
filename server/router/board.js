const { Router } = require("express");
const Board = require("../models/Board");
const router = Router();

router.post("/", (request, response) => {
  const newBoard = new Board(request.body);
  newBoard.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
