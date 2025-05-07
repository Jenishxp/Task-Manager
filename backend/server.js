// Backend: server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Task Schema and Model
const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model('Task', taskSchema);

// API Routes

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task({
      text: req.body.text,
      priority: req.body.priority || 'medium'
    });
    
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text,
        priority: req.body.priority,
        completed: req.body.completed
      },
      { new: true }
    );
    
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search tasks
app.get('/api/tasks/search', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    const tasks = await Task.find({
      text: { $regex: searchQuery, $options: 'i' }
    });
    
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Clear completed tasks
app.delete('/api/tasks/completed', async (req, res) => {
  try {
    const result = await Task.deleteMany({ completed: true });
    res.json({ message: `${result.deletedCount} completed tasks deleted` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});