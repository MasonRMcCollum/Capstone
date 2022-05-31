const { Router } = require("express");
const Board = require("../models/Board");
const router = Router();

router.post("/", (request, response) => {
  const newPizza = new Board(request.body);
  newPizza.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
