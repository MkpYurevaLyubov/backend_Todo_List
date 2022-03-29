const express = require("express");
const router = express.Router();

const todoListControllers = require("../Controllers/todoList.controller");

router.get("/allTasks", todoListControllers.findTasks);
router.post("/createTask", todoListControllers.createTask);
router.patch("/updateTask", todoListControllers.updateTask);
router.delete("/deleteTask", todoListControllers.deleteTask);

module.exports = router;
