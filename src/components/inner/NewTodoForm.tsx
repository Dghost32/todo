import React from "react";

type Todo = {
  checked: boolean;
  value: string;
};

type Props = {
  setTodos: Function;
  todos: Array<Todo>;
};

let NewTodoForm = ({ setTodos, todos }: Props) => {
  let handleSubmit = (e: any) => {
    e.preventDefault();
    setTodos([...todos, { checked: false, value: e.target.elements[1].value }]);
    console.log("new: ", e.target.elements[1].value);
    e.target.elements[1].value = "";
  };

  return (
    <form
      className="row mt-4 newTodo align-items-center justify-content-left"
      onSubmit={handleSubmit}
    >
      <input type="checkbox" className="col-auto checkbox" />
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
