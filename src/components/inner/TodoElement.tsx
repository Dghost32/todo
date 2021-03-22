import React, { useState } from "react";
/* components */
import { Draggable } from "react-beautiful-dnd";
/* types */
import { Todo, TaskElementProps as Props } from "../../types/types";
/* styles */
import "../../styles/todos-list.css";

let TodoElement = ({
  updateTodo,
  todo,
  toggleCheck,
  removeTodo,
  index,
}: Props) => {
  let [hovering, setHovering] = useState(false);
  let [value, setValue] = useState(todo.value);
  let [editing, setEditing] = useState(false);
  let [oldTodo, setOldTodo]: [Todo | undefined, Function] = useState(undefined);
  let handleChange = (e: any) => {
    todo.value = e.target.value;
    setValue(todo.value);
  };

  let onFocus = () => {
    setOldTodo(todo);
    setEditing(true);
    setHovering(true);
  };

  let onBlur = () => {
    updateTodo(oldTodo, todo);
    setOldTodo(undefined);
    setEditing(false);
    setHovering(true);
  };

  return (
    <Draggable draggableId={todo.value} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="row todo align-items-center"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            if (!editing) setHovering(false);
          }}
        >
          <div className="col-auto text-center checkbox-container">
            <input
              onClick={() => toggleCheck(todo)}
              type="checkbox"
              className={`checkbox ${todo.checked ? "checkbox-checked" : ""}`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
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
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={handleChange}
            value={value}
          />
          <svg
            onClick={() => {
              if (!editing) removeTodo(todo);
              else onBlur();
            }}
            className={`del-todo d-flex ${
              hovering ? "d-md-absolute" : "d-none"
            } ${editing ? "editing" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
          >
            <path
              fill="#908f9c"
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </div>
      )}
    </Draggable>
  );
};

export default TodoElement;
