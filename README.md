# Task Manager with MongoDB

A full-stack task management application built with Node.js, Express, MongoDB, and vanilla JavaScript.

![Task Manager Screenshot](https://example.com/screenshot.png)

## Features

- 📝 Create, read, update, and delete tasks
- 🔍 Search functionality to find specific tasks
- 🚩 Priority levels (low, medium, high) with visual indicators
- ✅ Mark tasks as complete/incomplete
- 🗑️ Delete individual tasks or clear all completed tasks
- 📱 Responsive design for desktop and mobile devices
- 🔄 Real-time synchronization with the database

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - RESTful API design

- **Frontend:**
  - HTML5
  - CSS3
  - Vanilla JavaScript
  - Fetch API for AJAX requests

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/taskManager
   PORT=5000
   ```
   
   Note: If using MongoDB Atlas, replace with your connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskManager
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```
   You should see: `Server running on port 5000` and `Connected to MongoDB`

2. Open the frontend:
   - Simply open `frontend/index.html` in your browser
   - Or use a simple HTTP server:
     ```bash
     cd frontend
     npx http-server
     ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/tasks | Retrieve all tasks |
| GET    | /api/tasks/search?q=query | Search tasks by text |
| POST   | /api/tasks | Create a new task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |
| DELETE | /api/tasks/completed | Delete all completed tasks |

## Project Structure

```
task-manager/
│
├── backend/
│   ├── server.js         # Main Express server file
│   ├── .env              # Environment variables (create this)
│   └── package.json      # Backend dependencies
│
└── frontend/
    └── index.html        # Frontend HTML/CSS/JS
```

## Extending the Application

Here are some ideas to extend the functionality:

- User authentication and accounts
- Task categories or tags
- Due dates and reminders
- File attachments
- Collaboration features
- Mobile app with React Native
- Task statistics and analytics

## Troubleshooting

- **Server shows "Offline"**: Check your MongoDB connection
- **Cannot connect to MongoDB**: Verify your connection string and network settings
- **CORS issues**: Ensure your frontend and backend are communicating on allowed origins
- **Tasks not loading**: Check browser console for error messages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)