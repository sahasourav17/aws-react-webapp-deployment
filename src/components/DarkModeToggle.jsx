import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
