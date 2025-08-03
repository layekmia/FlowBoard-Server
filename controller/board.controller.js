const Board = require("../model/board");

const createBoard = async (req, res) => {
  const { boardName, color, userEmail } = req.body;

  try {
    const newBoard = new Board({ boardName, color, userEmail, tasks });
    await newBoard.save();

    res
      .status(201)
      .json({ message: "board successfully  created", board: newBoard });
  } catch (err) {
    res
      .status(400)
      .json({ message: "internal server error", error: err.message });
  }
};
