# Task Management API

A simple Task Management API built with **Clean Architecture** for the Web Engineering course (Assignment 1).

**Stack:** Node.js (ES6), Express, TypeORM, PostgreSQL (hosted on Supabase)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your database details.
3. Start the server:
   ```bash
   npm run dev
   ```
   The server runs on `http://localhost:3000`. The `tasks` table is created automatically.

## API Endpoints

| Method | Endpoint            | Purpose                        |
|--------|---------------------|--------------------------------|
| POST   | `/tasks`            | Create a new task              |
| GET    | `/tasks`            | Retrieve all tasks             |
| PUT    | `/tasks/:id/status` | Change task status to Completed |

Example body for `POST /tasks`:
```json
{ "title": "Finish assignment", "description": "Web Engineering Assignment 1" }
```

## Project Structure

```
src/
├── domain/entities/Task.js
├── application/usecases/ (CreateTask, GetTasks, UpdateTaskStatus)
├── infrastructure/
│   ├── database/data-source.js
│   └── repositories/TaskRepository.js
├── interfaces/
│   ├── controllers/TaskController.js
│   └── routes/taskRoutes.js
├── config/config.js
└── server.js
```

**Request flow:** Route → Controller → Use Case → Repository → TypeORM → PostgreSQL

## Author

Arisha, BSCS, NUML Islamabad
