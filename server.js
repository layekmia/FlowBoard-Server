const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
require("dotenv").config();

const boardRouter = require('./routes/boardRoute');

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api is working");
});


app.use('/web/api/', boardRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}`);
});
