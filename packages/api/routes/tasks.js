const TaskController = require("../controllers/tasks");

module.exports = app => {
  app.get("/api/tasks", TaskController.getTasks);
  app.post("/api/tasks", TaskController.setTask);
  app.put("/api/tasks/:id", TaskController.editTask);
  app.delete("/api/tasks/:id", TaskController.delTask);
};
