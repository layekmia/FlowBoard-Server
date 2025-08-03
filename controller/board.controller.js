const Board = require("../model/board");

const createBoard = async (req, res) => {
  const { boardName, color, userEmail } = req.body;

  try {
    const newBoard = new Board({ boardName, color, userEmail });
    await newBoard.save();

    res
      .status(201)
      .json({ message: "board successfully  created", board: newBoard });
  } catch (err) {
    res
      .status(400)
      .json({ message: "internal server error", error: err.message });
    console.log(err);
  }
};

const getBoard = async (req, res) => {
  const email = req.query.email;
  try {
    const boards = await Board.find({ userEmail: email });
    res.status(200).json(boards);
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
    console.log(error);
  }
};
const getBoardById = async (req, res) => {
  const { id } = req.params;
  try {
    const board = await Board.findById(id);
    res.status(200).json(board);
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
    console.log(error);
  }
};

const deleteBoard = async (req, res) => {
  const { id } = req.params;

  try {
    const board = await Board.findByIdAndDelete(id);
    if (!board)
      return res
        .status(400)
        .json({ message: "board not found or already deleted" });
    res.status(200).json({ message: "board successfully deleted", board });
  } catch (err) {
    res
      .status(500)
      .json({ message: "internal server error", error: err.message });
    console.log(err);
  }
};

const addBoardTask = async (req, res) => {
  const { boardId } = req.params;
  const { title, status } = req.body;

  try {
    const updatedBoard = await Board.findByIdAndUpdate(
      boardId,
      {
        $push: {
          tasks: {
            title,
            status,
            createdAt: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!updatedBoard) {
      return res.status(404).json({ message: "Board not found" });
    }

    res.status(200).json({
      message: "Task added to board successfully",
      board: updatedBoard,
    });
  } catch (error) {
    console.error("Error adding task:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updateTaskStatus = async (req, res) => {
  const { boardId, taskId } = req.params;
  const { status } = req.body;

  try {
    const updatedBoard = await Board.findOneAndUpdate(
      { _id: boardId, "tasks._id": taskId },
      { $set: { "tasks.$.status": status } },
      { new: true }
    );

    if (!updatedBoard) {
      return res.status(404).json({ message: "Board or Task not found" });
    }

    res.status(200).json({
      message: "Task status updated successfully",
      board: updatedBoard,
    });
  } catch (error) {
    console.error("Error updating task status:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteBoardTask = async (req, res) => {
  const { boardId, taskId } = req.params;

  try {
    const updatedBoard = await Board.findByIdAndUpdate(
      boardId,
      { $pull: { tasks: { _id: taskId } } }, // remove task by its _id
      { new: true }
    );

    if (!updatedBoard) {
      return res.status(404).json({ message: "Board or Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      board: updatedBoard,
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  createBoard,
  deleteBoard,
  addBoardTask,
  updateTaskStatus,
  deleteBoardTask,
  getBoard,
  getBoardById,
};
