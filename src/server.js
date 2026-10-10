import express from "express";
import { config } from "./config/config.js";
import { AppDataSource } from "./infrastructure/database/data-source.js";
import { TaskRepository } from "./infrastructure/repositories/TaskRepository.js";
import { CreateTask } from "./application/usecases/CreateTask.js";
import { GetTasks } from "./application/usecases/GetTasks.js";
import { UpdateTaskStatus } from "./application/usecases/UpdateTaskStatus.js";
import { TaskController } from "./interfaces/controllers/TaskController.js";
import { createTaskRoutes } from "./interfaces/routes/taskRoutes.js";

const app = express();
app.use(express.json());

const taskRepository = new TaskRepository();
const taskController = new TaskController(
  new CreateTask(taskRepository),
  new GetTasks(taskRepository),
  new UpdateTaskStatus(taskRepository)
);
app.use("/", createTaskRoutes(taskController));

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(config.port, () => {
      console.log(`Server running on http://localhost:${config.port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });