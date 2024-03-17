import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-center">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new task" className="py-2 px-4 border border-gray-200 rounded-lg" />
      <button type="submit" className="ml-2 py-2 px-4 bg-green-700 text-white rounded-lg">Add</button>
    </form>
  );
};

export default AddTaskForm;
