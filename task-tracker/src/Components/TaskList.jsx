import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../App";

function TaskList() {
  const { tasks, darkMode } = useContext(TaskContext);

  return (
    <div className={darkMode ? "tasks-container dark" : "tasks-container"}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
