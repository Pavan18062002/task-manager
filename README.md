# Task Manager API

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file
4. Start the server: `npm start`

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Tasks

- `POST /api/tasks`: Create a new task (authenticated)
- `GET /api/tasks`: Get all tasks (authenticated)
- `GET /api/tasks/:id`: Get a task by ID (authenticated)
- `PUT /api/tasks/:id`: Update a task (authenticated)
- `DELETE /api/tasks/:id`: Delete a task (authenticated)

## Testing

Run tests: `npm test`
