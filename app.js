const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const router = require("./src/Routes/todoList.routes");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

mongoose.connect("mongodb://localhost:27017/todoList", (err) => {
  if (err) return console.log(err);
  app.listen(port, () => {
    console.log(`Сервер ожидает подключения на порту ${port}`);
  });
});
