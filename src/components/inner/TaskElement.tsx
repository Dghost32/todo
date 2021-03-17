import React, { useState } from "react";
import "../../styles/task-list.css";

type Todo = {
  checked: boolean;
  value: string;
};

type Props = {
  toggleCheck: Function;
  todo: Todo;
  removeTodo: Function;
};

let TaskElement = ({ todo, toggleCheck, removeTodo }: Props) => {
  let [hovering, setHovering] = useState("none");
  let [value, setValue] = useState(todo.value);
  let handleChange = (e: any) => {
    todo.value = e.target.value;
    setValue(todo.value);
  };

  return (
    <div
      className="row task align-items-center"
      onMouseEnter={() => setHovering("absolute")}
      onMouseLeave={() => setHovering("none")}
    >
      <input
        onClick={() => toggleCheck(todo)}
        type="checkbox"
        className={`checkbox col-auto mx-2 ${
          todo.checked ? "checkbox-checked" : ""
        }`}
      />
      <input
        className={`col-auto ${todo.checked ? "checked" : ""} todo-input`}
        type="text"
        onChange={handleChange}
        value={value}
      />
      <svg
        onClick={() => removeTodo(todo)}
        className={`del-todo d-absolute d-md-${hovering}`}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
};

export default TaskElement;
