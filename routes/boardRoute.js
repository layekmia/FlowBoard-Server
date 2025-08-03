const express = require("express");
const {
  createBoard,
  deleteBoard,
  addBoardTask,
  updateTaskStatus,
} = require("../controller/board.controller");

const router = express.Router();

router.post("/board", createBoard); // Create a new board
router.delete("/boards/:id", deleteBoard); // Delete a board


module.exports = router;
