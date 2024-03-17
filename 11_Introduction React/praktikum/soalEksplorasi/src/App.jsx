// src/App.js
import React, { useState } from 'react';
import TaskList from './components/taskList';
import AddTaskForm from './components/addTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To Do List', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = { id: Math.random(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">To Do List</h1>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <AddTaskForm onAdd={addTask} />
    </div>
  );
}

export default App;
