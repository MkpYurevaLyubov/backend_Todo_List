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

const updateTask = (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const id = req.body._id;
  const newTask = {
    text: req.body.text,
    isCheck: req.body.isCheck
  };

  Task.findOneAndUpdate({ _id: id }, newTask, {new: true}, (err, task) => {
    if (err) return console.log(err);
    res.send(task);
  });
};

const deleteTask = (req, res) => {
  const id = req.body._id;
  Task.findByIdAndDelete(id, (err, task) => {
    if (err) return console.log(err);
    res.send(task);
  });
};

module.exports = {
  findTasks,
  createTask,
  updateTask,
  deleteTask
};
