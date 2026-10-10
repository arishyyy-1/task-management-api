import { EntitySchema } from "typeorm";

export class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = "Pending";
  }
}

export const TaskSchema = new EntitySchema({
  name: "Task",
  target: Task,
  tableName: "tasks",
  columns: {
    id: { type: "int", primary: true, generated: true },
    title: { type: "varchar", length: 150, nullable: false },
    description: { type: "text", nullable: true },
    status: { type: "varchar", default: "Pending" },
    createdAt: { type: "timestamp", createDate: true },
  },
});