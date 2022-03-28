const express = require("express");
const router = express.Router();

const todoListControllers = require("../Controllers/todoList.controller");

router.get("/", todoListControllers.findTasks);
router.post("/createTask", todoListControllers.createTask);

module.exports = router;
