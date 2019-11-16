const { Types } = require("mongoose");
const { TaskModel } = require("../models");

const getTasks = (req, res) => {
  const query = req.query.isCompleted
    ? { isCompleted: req.query.isCompleted }
    : {};

  TaskModel.find(query, (err, todo) => {
    if (err) throw err;
    else res.send(todo);
  });
};

const setTask = (req, res) => {
  const { name, text, isCompleted, created } = req.body;
  const model = TaskModel({
    name,
    text,
    isCompleted: isCompleted || false,
    created: created || new Date()
  });

  model.save((err, todo) => {
    if (err) throw err;
    res.send(todo);
  });
};

const editTask = (req, res) => {
  TaskModel.findByIdAndUpdate(
    Types.ObjectId(req.params.id),
    req.body,
    (err, todo) => {
      if (err) throw err;
      res.send({ ...todo, ...req.body });
    }
  );
};

const delTask = (req, res) => {
  TaskModel.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) throw err;
    res.send(todo);
  });
};

module.exports = {
  getTasks,
  setTask,
  editTask,
  delTask
};
