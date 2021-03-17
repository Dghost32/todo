import React from "react";
import TaskElement from "./TaskElement";
import "../../styles/scrollbar.css";
import "../../styles/task-list.css";

type Todo = {
  checked: boolean;
  value: string;
};

type Props = {
  todos: Array<Todo>;
  filter: string | undefined;
  toggleCheck: Function;
};

let TaskList = ({ todos, filter, toggleCheck }: Props) => {
  let renderTodos = !filter
    ? todos.map((todo) => (
        <TaskElement key={todo.value} toggleCheck={toggleCheck} todo={todo} />
      ))
    : filter === "active"
    ? todos
        .filter((todo) => todo.checked === false)
        .map((todo) => (
          <TaskElement key={todo.value} toggleCheck={toggleCheck} todo={todo} />
        ))
    : todos
        .filter((todo) => todo.checked === true)
        .map((todo) => (
          <TaskElement key={todo.value} toggleCheck={toggleCheck} todo={todo} />
        ));

  return (
    <div className="col-12 list-container">
      {todos.length > 0 ? (
        renderTodos
      ) : (
        <h1 className="no-todos">you've no todos, add a few.</h1>
      )}
    </div>
  );
};

export default TaskList;
