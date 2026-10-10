export class UpdateTaskStatus {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(id) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    task.status = "Completed";
    return await this.taskRepository.save(task);
  }
}