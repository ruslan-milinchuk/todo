var mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String },
  isCompleted: { type: Boolean, required: true },
  created: { type: Date, required: true }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
