import { AppDataSource } from "../database/data-source.js";
import { TaskSchema } from "../../domain/entities/Task.js";

export class TaskRepository {
  get repo() {
    return AppDataSource.getRepository(TaskSchema);
  }

  async create(data) {
    const task = this.repo.create(data);
    return await this.repo.save(task);
  }

  async findAll() {
    return await this.repo.find({ order: { createdAt: "DESC" } });
  }

  async findById(id) {
    return await this.repo.findOneBy({ id });
  }

  async save(task) {
    return await this.repo.save(task);
  }
}