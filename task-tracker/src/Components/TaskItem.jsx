import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TaskContext } from "../App";

function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleChecked = () => {
    toggleTask(task.id);
  };
  return (
    <div class="tasks-container">
      <div className={`tasks ${task.completed && "todo-paras"}`}>
        <input
          type="checkbox"
          name=""
          className="checkbox"
          checked={task.completed}
          onChange={handleChecked}
        />
        <p>{task.text} </p>
        <span class="lists-button">
          <MdDelete size={20} onClick={handleDelete} />
        </span>
      </div>
      {console.log(task)}
    </div>
  );
}

export default TaskItem;
