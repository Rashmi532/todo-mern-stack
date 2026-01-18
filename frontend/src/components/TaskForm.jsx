import React, { useState } from "react";
import { addTask } from "../api/taskApi";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title) return;
    await addTask({ title });
    setTitle("");
    refresh();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskForm;
