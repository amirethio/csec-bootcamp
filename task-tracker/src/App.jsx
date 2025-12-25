import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Stats from "./Pages/Stats";

export const TaskContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: nextId, text, completed: false }]);
    setNextId(nextId + 1);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  
  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          addTask,
          deleteTask,
          toggleTask,
          setDarkMode,
          darkMode,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </TaskContext.Provider>
    </>
  );
}

export default App;
