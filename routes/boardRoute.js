const express = require("express");
const {
  createBoard,
  deleteBoard,
  addBoardTask,
  updateTaskStatus,
  deleteBoardTask,
  getBoard,
} = require("../controller/board.controller");

const router = express.Router();

router.post("/board", createBoard); // Create a new board
router.get("/boards", getBoard); // getBoard  boards
router.delete("/boards/:id", deleteBoard); // Delete a board
router.patch("/boards/add-task/:boardId", addBoardTask); // Add task to a board
router.patch("/boards/:boardId/tasks/:taskId/status", updateTaskStatus); // Update task status
router.delete("/boards/:boardId/tasks/:taskId", deleteBoardTask); // delete board task

module.exports = router;
