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
      <div className="col-auto text-center checkbox-container">
        <input
          onClick={() => toggleCheck(todo)}
          type="checkbox"
          className={`checkbox ${todo.checked ? "checkbox-checked" : ""}`}
        />
        {todo.checked ? (
          <svg
            onClick={() => toggleCheck(todo)}
            className="checked-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
          >
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
      <input
        className={`col ${todo.checked ? "text-checked" : ""} todo-input`}
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
