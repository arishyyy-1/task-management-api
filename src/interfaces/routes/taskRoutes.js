import { Router } from "express";

export function createTaskRoutes(taskController) {
  const router = Router();

  router.post("/tasks", taskController.create);
  router.get("/tasks", taskController.getAll);
  router.put("/tasks/:id/status", taskController.updateStatus);

  return router;
}