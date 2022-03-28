const Task = require("../Models/todoList.models");

const findTasks = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) return console.log(err);
    res.send(tasks);
  });
};

const createTask = (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const task = new Task({
    text: req.body.text,
    isCheck: req.body.isCheck
  });

  task.save(() => {
    res.send(task);
  });
};

module.exports = {
  findTasks,
  createTask
};
