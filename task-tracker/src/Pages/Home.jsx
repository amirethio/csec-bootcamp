import React, { useContext } from "react";
import Header from "../Components/Header";
import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList";
import { TaskContext } from "../App";

function Home() {
  const { darkMode } = useContext(TaskContext);

  return (
    <>
      <div className={`outer-cont ${darkMode ? "dark" : ""}`}>
        <section className="todo-container">
          <section className="todo-inside">
            <TaskInput />
            <TaskList />
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
