import React from "react";

let NewTodoForm = () => {
  let handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.values);
    console.log("please print this");
  };

  return (
    <form
      className="row mt-4 newTodo align-items-center justify-content-left"
      onSubmit={handleSubmit}
    >
      <input type="checkbox" className="col-auto checkbox" />
      <input type="text" autoFocus className="col-10 todo-input" placeholder="Enter a new task"/>
    </form>
  );
};

export default NewTodoForm;
