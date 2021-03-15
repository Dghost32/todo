import React from "react";

let NewTodoForm = () => {
  let handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(e.target.values);
    console.log("please print this");
  };

  return (
    <form className="row mt-4 newTodo" onSubmit={handleSubmit}>
      <input type="checkbox" className="col-auto check round " />
      <input type="text" autoFocus className="col-10 mx-2 todo-input " />
    </form>
  );
};

export default NewTodoForm;
