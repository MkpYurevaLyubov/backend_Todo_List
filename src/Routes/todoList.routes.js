const express = require("express");
const router = express.Router();

const todoListControllers = require("../Controllers/todoList.controller");

router.get("/", todoListControllers.findTasks);
router.post("/createTask", todoListControllers.createTask);
router.put("/updateTask", todoListControllers.updateTask);
router.delete("/deleteTask", todoListControllers.deleteTask);

module.exports = router;
