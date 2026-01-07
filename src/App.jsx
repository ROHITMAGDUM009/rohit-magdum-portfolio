import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Read theme from localStorage on first load
    return localStorage.getItem("theme") === "dark";
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
