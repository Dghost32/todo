import React, { useState } from "react";
import Main from "./components/Main";
/* styles */
import "./App.css";
import "./styles/app-image.css";

type Todo = {
  checked: boolean;
  value: string;
};

function App() {
  const body = document.getElementById("body");
  const [bgType, setBgType] = useState("dark");
  let [todos, setTodos]: [Array<Todo>, Function] = useState([]);
  let [filter, setFilter]: [string | undefined, Function] = useState(undefined);

  let toggleCheckTodo = (todo: Todo) => {
    let ts = todos.map((t) => {
      if (t !== todo) return t;
      return { ...t, checked: !t.checked };
    });
    /* let ts = [...todos, {}] */
    setTodos(ts);
  };

  let filteredTodos = !filter
    ? todos.map((todo) => todo)
    : filter === "active"
    ? todos.filter((todo) => todo.checked === false)
      : todos.filter((todo) => todo.checked === true);
  
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
      <Main
        toggleCheck={toggleCheckTodo}
        filter={filter}
        setFilter={setFilter}
        setTodos={setTodos}
        todos={filteredTodos}
        light={bgType === "light"}
        toggleBg={toggleBg}
      />
    </div>
  );
}

export default App;
