import React, { useContext } from "react";
import { TaskContext } from "../App";
import { Link } from "react-router-dom";

function Header() {
  const { setDarkMode, darkMode } = useContext(TaskContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <h1>Task Tracker</h1>

      <button className="dark-mode-toggle" onClick={handleClick}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/stats" className="nav-link stst">
          Stats
        </Link>
      </nav>
    </header>
  );
}

export default Header;
