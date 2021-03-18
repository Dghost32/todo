import React, { useState, useEffect } from "react";
/* components */
import TaskElement from "./TaskElement";
/* types */
import { Todo, TaskListProps as Props } from "../../types/types";
/* styles */
import "../../styles/scrollbar.css";
import "../../styles/task-list.css";

let TaskList = ({
  updateTodo,
  filterTodos,
  toggleCheck,
  removeTodo,
}: Props) => {
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
      updateTodo={updateTodo}
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
