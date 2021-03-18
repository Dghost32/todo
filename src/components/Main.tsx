import React from "react";
/* components */
import Title from "./inner/Title";
import NewTodoForm from "./inner/NewTodoForm";
import TaskList from "./inner/TaskList";
import Footer from "./inner/Footer";
import PhoneFooter from "./inner/PhoneFooter";
/* types */
import { MainProps as Props } from "../types/types";
/* styles */
import "../styles/main.css";
import "../styles/new-todo.css";

let Main = ({
  clearCompletedTodos,
  filterTodos,
  addTodo,
  updateTodo,
  light,
  toggleBg,
  todos,
  filter,
  setFilter,
  toggleCheck,
  removeTodo,
}: Props) => {
  return (
    <div className="main container-fluid ">
      <Title light={light} toggleBg={toggleBg} />
      <NewTodoForm addTodo={addTodo} />
      <div className="row">
        <TaskList
          updateTodo={updateTodo}
          filterTodos={filterTodos}
          removeTodo={removeTodo}
          toggleCheck={toggleCheck}
        />
        <Footer
          numTodos={todos.filter((todo) => !todo.checked).length}
          filter={filter}
          setFilter={setFilter}
          clearCompletedTodos={clearCompletedTodos}
        />
        <PhoneFooter filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Main;
