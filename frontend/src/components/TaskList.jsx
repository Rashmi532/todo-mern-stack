import React from "react";
import { deleteTask } from "../api/taskApi";

function TaskList({ tasks, refresh }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          <button
            onClick={async () => {
              await deleteTask(task._id);
              refresh();
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
