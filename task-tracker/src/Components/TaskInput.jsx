import { useState, useContext, React } from "react";
import { TaskContext } from "../App";

function TaskInput() {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState("");

  const handleClick = () => {
    addTask(text);
    setText("");
  };
  return (
    <section>
      <h1>Add Your Tasks </h1>
      <div className="add-task">
        <input
          type="text"
          id="add-task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-todo" onClick={handleClick}>
          {" "}
          Add Task
        </button>
      </div>
    </section>
  );
}

export default TaskInput;
