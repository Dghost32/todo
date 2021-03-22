import { useContext } from "react";
/* context */
import AppContext from "../../context/AppContext";
/* types */

let NewTodoForm = () => {
  let { addTodo } = useContext(AppContext);
  const handleSubmit = (e: any) => {
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
        id="newTodoInput"
        type="text"
        autoFocus
        className="col-10 todo-input"
        placeholder="Enter a new todo"
      />
    </form>
  );
};

export default NewTodoForm;
