import React from "react";
/* components */
import Title from "./inner/Title";
import NewTodoForm from "./inner/NewTodoForm";
import TodoList from "./inner/TodoList";
import Footer from "./inner/Footer";
import PhoneFooter from "./inner/PhoneFooter";
/* types */
import { MainProps as Props } from "../types/types";
/* styles */
import "../styles/main.css";
import "../styles/new-todo.css";

let Main = (props: Props) => {
  return (
    <div className="main container-fluid ">
      <Title light={props.light} toggleBg={props.toggleBg} />
      <NewTodoForm addTodo={props.addTodo} />
      <div className="row">
        <div className="check-all" onClick={() => props.checkAllTodos()}>
          check all
        </div>
        <TodoList
          todos={props.todos}
          setTodos={props.setTodos}
          updateTodo={props.updateTodo}
          filterTodos={props.filterTodos}
          removeTodo={props.removeTodo}
          toggleCheck={props.toggleCheck}
        />
        <Footer
          numTodos={props.todos.filter((todo) => !todo.checked).length}
          filter={props.filter}
          setFilter={props.setFilter}
          clearCompletedTodos={props.clearCompletedTodos}
        />
        <PhoneFooter filter={props.filter} setFilter={props.setFilter} />
      </div>
    </div>
  );
};

export default Main;
