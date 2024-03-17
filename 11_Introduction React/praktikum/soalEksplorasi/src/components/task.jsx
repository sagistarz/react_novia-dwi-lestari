import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`flex items-center justify-between py-2 px-4 border-b border-gray-200 ${task.completed ? 'line-through text-gray-400' : ''}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
