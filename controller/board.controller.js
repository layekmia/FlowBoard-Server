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


module.exports = { createBoard, deleteBoard, addBoardTask };
