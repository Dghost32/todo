import React from "react";
import "../../styles/task-list.css";

type Todo = {
  checked: boolean;
  value: string;
};

type Props = {
  toggleCheck: Function;
  todo: Todo;
};

let TaskElement = ({ todo, toggleCheck }: Props) => {
  return (
    <div className="row task justify-content-center align-items-center">
      <input
        onClick={() => toggleCheck(todo)}
        type="checkbox"
        className="checkbox col-auto mx-2"
      />
      <span className={`col ${todo.checked ? "checked" : ""}`} id="value">
        {todo.value}
      </span>
    </div>
  );
};

export default TaskElement;
