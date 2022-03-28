const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: String,
  isCheck: Boolean
}, {versionKey: false});

module.exports = mongoose.model("Task", taskSchema);
