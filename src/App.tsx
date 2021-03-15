import React, { useState } from "react";
import Main from "./components/Main";

/* styles */
import "./App.css";
import "./styles/app-image.css";

function App() {
  const body = document.getElementById("body");
  const [bgType, setBgType] = useState("dark");

  if (body) body.classList.add("dark");

  const toggleBg = () => {
    if (body) {
      if (bgType === "dark") {
        body.classList.remove("dark");
        body.classList.add("light");
        return setBgType("light");
      }
      body.classList.remove("light");
      body.classList.add("dark");
      return setBgType("dark");
    }
  };

  return (
    <div className={`app ${bgType}`}>
      <div className="app-image" />
      <Main light={bgType === "light"} toggleBg={toggleBg}/>
    </div>
  );
}

export default App;
