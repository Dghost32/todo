/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useLayoutEffect } from "react";
/* components */
import Main from "./components/Main";
/* types */
import { Todo } from "./types/types";
/* styles */
import "./App.css";
import "./styles/app-image.css";
import "./styles/alerts.css";

function App() {
  const body = document.getElementById("body");
  const [bgType, setBgType] = useState("dark");
  let [todos, setTodos]: [Array<Todo>, Function] = useState([]);
  let [filter, setFilter]: [string | undefined, Function] = useState("active");
  let [alertType, setAlertType] = useState("none");
  let localStorage = window.localStorage;
  let db = window.localStorage.getItem("todos");

  useLayoutEffect(() => {
    if (db) setTodos(JSON.parse(db));
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleCheckTodo = (todo: Todo) => {
    let ts = todos.map((t) => {
      if (t !== todo) return t;
      return { ...t, checked: !t.checked };
    });
    setTodos(ts);
  };

  const addTodo = (todo: Todo) => {
    let verify = todos.filter((t) => t.value === todo.value).length === 0;
    if (verify) {
      setTodos([...todos, todo]);
      setAlertType("add");
      setTimeout(() => setAlertType("none"), 600);
    }
  };

  let updateTodo = (oldTodo: Todo, newTodo: Todo) => {
    setAlertType("edit");
    setTimeout(() => setAlertType("none"), 500);
    setTodos(
      todos.map((t) => {
        if (t !== oldTodo) return t;
        return newTodo;
      })
    );
  };

  const removeTodo = (todo: Todo) => {
    setAlertType("remove");
    setTimeout(() => setAlertType("none"), 500);
    let ts = todos.filter((t) => t !== todo);
    setTodos(ts);
  };

  let clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.checked));
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
    <div id="app" className={`app ${bgType}`}>
      <div className="app-image" />
      <div className={`s-alert alert-${alertType}`}>
        <h5 className="alert-text">
          {alertType === "add"
            ? "task has been added"
            : alertType === "edit"
            ? "task has been edited"
            : alertType === "remove"
            ? "task has been removed"
            : ""}
        </h5>
      </div>
      <Main
        clearCompletedTodos={clearCompletedTodos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        toggleCheck={toggleCheckTodo}
        filterTodos={filterTodos}
        filter={filter}
        setFilter={setFilter}
        todos={todos}
        setTodos={setTodos}
        light={bgType === "light"}
        toggleBg={toggleBg}
      />
    </div>
  );
}

export default App;
