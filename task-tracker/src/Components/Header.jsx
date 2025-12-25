import React, { useContext } from "react";
import { TaskContext } from "../App";
import { Link } from "react-router-dom"; // import Link

function Header({ setDarkMode, darkMode }) {
  const handleClick = () => {
    setDarkMode((pre) => !pre);
  };

  return (
    <header className="header">
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
