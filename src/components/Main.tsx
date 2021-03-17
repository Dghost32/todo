import React from "react";
import Title from "./inner/Title";
import NewTodoForm from "./inner/NewTodoForm";
import TaskList from "./inner/TaskList";
import Footer from "./inner/Footer";
import PhoneFooter from "./inner/PhoneFooter";
import "../styles/main.css";
import "../styles/new-todo.css";

type Todo = {
  checked: boolean;
  value: string;
};

type Props = {
  filter: string | undefined;
  setFilter: Function;
  light: boolean;
  toggleBg: any;
  todos: Array<Todo>;
  setTodos: Function;
  toggleCheck: Function;
};

let Main = ({
  light,
  toggleBg,
  todos,
  setTodos,
  filter,
  setFilter,
  toggleCheck,
}: Props) => {
  return (
    <div className="main container-fluid ">
      <Title light={light} toggleBg={toggleBg} />
      <NewTodoForm setTodos={setTodos} todos={todos} />
      <div className="row">
        <TaskList toggleCheck={toggleCheck} todos={todos} filter={filter} />
        <Footer numTodos={todos.length} filter={filter} setFilter={setFilter} />
        <PhoneFooter filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Main;
