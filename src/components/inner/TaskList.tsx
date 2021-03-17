import React, { useState, useEffect } from "react";
import TaskElement from "./TaskElement";
import "../../styles/scrollbar.css";
import "../../styles/task-list.css";

type Todo = {
  checked: boolean;
  value: string;
};

type Props = {
  toggleCheck: Function;
  removeTodo: Function;
  filterTodos: Function;
};

let TaskList = ({ filterTodos, toggleCheck, removeTodo }: Props) => {
  let [todos, setTodos] = useState([]);
  let renderTodos = [];
  useEffect(() => {
    setTodos(filterTodos());
  }, [filterTodos]);

  renderTodos = todos.map((todo: Todo) => (
    <TaskElement
      key={todo.value + `${Math.random() * Math.random()}`}
      toggleCheck={toggleCheck}
      todo={todo}
      removeTodo={removeTodo}
    />
  ));

  return (
    <div className="col-12 list-container">
      {todos.length > 0 ? (
        renderTodos
      ) : (
        <h1 className="no-todos">there are no todos.</h1>
      )}
    </div>
  );
};

export default TaskList;
