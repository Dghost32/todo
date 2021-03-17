import React from "react";

type Props = {
  addTodo: Function;
};

let NewTodoForm = ({ addTodo }: Props) => {
  let handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo({ checked: false, value: e.target.elements[1].value });
    e.target.elements[1].value = "";
  };

  return (
    <form
      className="row mt-4 newTodo align-items-center justify-content-left"
      onSubmit={handleSubmit}
    >
      <div className="checkbox-container">
        <input type="checkbox" className="col-auto checkbox" />
      </div>
      <input
        type="text"
        autoFocus
        className="col-10 todo-input"
        placeholder="Enter a new todo"
      />
    </form>
  );
};

export default NewTodoForm;
