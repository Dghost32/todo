/* components */
import Title from "./inner/Title";
import NewTodoForm from "./inner/NewTodoForm";
import TodoList from "./inner/TodoList";
import Footer from "./inner/Footer";
import PhoneFooter from "./inner/PhoneFooter";
/* styles */
import "../styles/main.css";
import "../styles/new-todo.css";

let Main = () => {
  return (
    <div className="main container-fluid ">
      <Title />
      <NewTodoForm />
      <div className="row">
        <TodoList />
        <Footer />
        <PhoneFooter />
      </div>
    </div>
  );
};

export default Main;
