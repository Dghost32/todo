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

  const toggleCheckTodo = (todo: Todo) => {
    let ts = todos.map((t) => {
      if (t !== todo) return t;
      return { ...t, checked: !t.checked };
    });
    setTodos(ts);
  };

  const removeTodo = (todo: Todo) => {
    let ts = todos.filter((t) => t !== todo);
    setTodos(ts);
  };

  let clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const filterTodos = () => {
    if (!filter) return todos.map((todo) => todo);
    if (filter === "active")
      return todos.filter((todo) => todo.checked === false);
    return todos.filter((todo) => todo.checked === true);
  };

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
        clearCompletedTodos={clearCompletedTodos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        toggleCheck={toggleCheckTodo}
        filterTodos={filterTodos}
        filter={filter}
        setFilter={setFilter}
        todos={todos}
        light={bgType === "light"}
        toggleBg={toggleBg}
      />
    </div>
  );
}

export default App;
