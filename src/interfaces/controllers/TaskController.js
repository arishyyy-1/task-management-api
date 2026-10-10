export class TaskController {
  constructor(createTask, getTasks, updateTaskStatus) {
    this.createTask = createTask;
    this.getTasks = getTasks;
    this.updateTaskStatus = updateTaskStatus;
  }

  create = async (req, res) => {
    try {
      const task = await this.createTask.execute(req.body);
      res.status(201).json({ message: "Task created successfully", data: task });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  getAll = async (req, res) => {
    try {
      const tasks = await this.getTasks.execute();
      res.status(200).json({ message: "Tasks retrieved successfully", data: tasks });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  updateStatus = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (!Number.isInteger(id)) {
        return res.status(400).json({ message: "Task id must be a number" });
      }
      const task = await this.updateTaskStatus.execute(id);
      res.status(200).json({ message: "Task marked as Completed", data: task });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  handleError(res, error) {
    const status = error.statusCode || 500;
    res.status(status).json({ message: error.message || "Internal server error" });
  }
}