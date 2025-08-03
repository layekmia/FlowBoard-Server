const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    boardName: { type: String, required: true },
    color: { type: String, required: true },
    userEmail: { type: String, required: true },
    tasks: {
      type: [
        {
          title: { type: String, required: true },
          status: { type: String, enum: ["todos", "progress", "completed"] },
          createdAt: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", boardSchema);
