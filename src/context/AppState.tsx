/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect } from "react";
/* context */
import AppContext from "./AppContext";
/* types */
import { Todo } from "../types/types";
import {
  children,
  todosState,
  alertTypeState,
  bgTypeState,
  filterState,
} from "./stateTypes";

const AppState = ({ children }: children) => {
  const [todos, setTodos]: todosState = useState([]);
  const [alertType, setAlertType]: alertTypeState = useState("none");
  const [bgType, setBgType]: bgTypeState = useState("dark");
  const [filter, setFilter]: filterState = useState(undefined);
  const localStorage = window.localStorage;
  const db = window.localStorage.getItem("todos");

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
      return setTimeout(() => setAlertType("none"), 600);
    }
    setAlertType("warning");
    setTimeout(() => setAlertType("none"), 500);
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

  const checkAllTodos = () => {
    setTodos(todos.map((todo) => ({ ...todo, checked: true })));
  };

  const body = document.getElementById("body");
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
    <AppContext.Provider
      value={{
        clearCompletedTodos,
        addTodo,
        removeTodo,
        updateTodo,
        toggleCheckTodo,
        filterTodos,
        checkAllTodos,
        alertType,
        setFilter,
        filter,
        todos,
        setTodos,
        bgType,
        light: bgType === "light",
        toggleBg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
