import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TaskContext } from "../App";

function TaskItem({ task }) {
  const { deleteTask, toggleTask, darkMode } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleChecked = () => {
    toggleTask(task.id);
  };

  return (
    <div className={`tasks-container ${darkMode ? "dark" : ""}`}>
      <div className={`tasks ${task.completed ? "todo-paras" : ""}`}>
        <input
          type="checkbox"
          className="checkbox"
          checked={task.completed}
          onChange={handleChecked}
        />
        <p>{task.text}</p>
        <span className="lists-button">
          <MdDelete size={20} onClick={handleDelete} />
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
