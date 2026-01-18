import React, { useEffect, useState } from "react";
import { getTasks } from "./api/taskApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm refresh={loadTasks} />
      <TaskList tasks={tasks} refresh={loadTasks} />
    </div>
  );
}

export default App;
