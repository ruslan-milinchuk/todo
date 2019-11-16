const TaskController = require("../controllers/tasks");

module.exports = app => {
  app.get("/tasks", TaskController.getTasks);
  app.post("/tasks", TaskController.setTask);
  app.put("/tasks/:id", TaskController.editTask);
  app.delete("/tasks/:id", TaskController.delTask);
};
