import React from "react";
import "./App.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-center">Sourav Saha</h1>
            <DarkModeToggle />
          </div>
          <p className="text-lg ">Welcome to my website!</p>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
