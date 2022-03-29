const Task = require("../Models/todoList.models");

const findTasks = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) return res.sendStatus(404);
    res.send(tasks);
  });
};

const createTask = (req, res) => {
  if (!req.body.text || !req.body.isCheck) return res.sendStatus(400);

  const task = new Task({
    text: req.body.text,
    isCheck: req.body.isCheck
  });

  task.save(() => {
    res.send(task);
  });
};

const updateTask = (req, res) => {
  const id = req.body._id;
  if (!req.body.text || !req.body.isCheck || !id) return res.sendStatus(400);

  const newTask = {
    text: req.body.text,
    isCheck: req.body.isCheck
  };

  Task.findOneAndUpdate({ _id: id }, newTask, {new: true}, (err, task) => {
    if (err) return res.sendStatus(401);
    res.send(task);
  });
};

const deleteTask = (req, res) => {
  if (!req.query.id) return res.sendStatus(400);
  const id = req.query.id;

  Task.findByIdAndDelete(id, (err, task) => {
    if (err) return res.sendStatus(401);
    res.send(task);
  });
};

module.exports = {
  findTasks,
  createTask,
  updateTask,
  deleteTask
};
