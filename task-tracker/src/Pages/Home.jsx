import React from "react";
import Header from "../Components/Header";
import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList";

function Home() {
  return (
    <>
      <div className="outer-cont">
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
