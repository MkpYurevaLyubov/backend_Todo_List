const Task = require("../Models/todoList.models");

const findTasks = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) return res.status(500).send('Something broke!');
    res.send(tasks);
  });
};

const createTask = (req, res) => {
  const body = req.body;
  if (!body.hasOwnProperty('text')) return res.status(404).send("Error! Text not found");
  if (!body.hasOwnProperty('isCheck')) return res.status(404).send("Error! Checkbox not found");
  if (typeof body.isCheck !== "boolean") return res.status(422).send("Error! Checkbox value not correct");

  const task = new Task(body);

  task.save(() => {
    res.send(task);
  });
};

const updateTask = (req, res) => {
  const body = req.body;
  const id = req.body._id;
  if (!body.hasOwnProperty('text')) return res.status(404).send("Error! Text not found");
  if (!body.hasOwnProperty('isCheck')) return res.status(404).send("Error! Checkbox not found");
  if (!body.hasOwnProperty('_id')) return res.status(404).send("Error! Id not found");
  if (typeof body.isCheck !== "boolean") return res.status(422).send("Error! Checkbox value not correct");
  if (typeof id !== "string") return res.status(422).send("Error! Id value not correct");

  const newTask = body;

  Task.findOneAndUpdate({ _id: id }, newTask, {new: true}, (err, task) => {
    if (err) return res.status(404).send('Task not found');
    res.send(task);
  });
};

const deleteTask = (req, res) => {
  const id = req.query.id;
  if (!id) return res.status(404).send("Error! Id not found");

  Task.findByIdAndDelete(id, (err, task) => {
    if (err) return res.status(404).send('Task not found');
    res.send(task);
  });
};

const findTask = (req, res) => {
  const id = req.query.id;
  if (!id) return res.status(404).send("Error! Id not found");
  Task.find({ _id: id }, (err, task) => {
    if (err) return res.status(404).send('Task not found');
    res.send(task);
  });
};

module.exports = {
  findTasks,
  createTask,
  updateTask,
  deleteTask,
  findTask
};
