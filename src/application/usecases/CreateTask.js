export class CreateTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute({ title, description }) {
    if (!title || !title.trim()) {
      const error = new Error("Title is required");
      error.statusCode = 400;
      throw error;
    }

    return await this.taskRepository.create({
      title: title.trim(),
      description: description || null,
      status: "Pending",
    });
  }
}