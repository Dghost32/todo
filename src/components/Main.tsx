import React from "react";
import Title from "./inner/Title";
import NewTodoForm from "./inner/NewTodoForm";
import TaskList from "./inner/TaskList";
import Footer from "./inner/Footer";
import PhoneFooter from './inner/PhoneFooter';
import "../styles/main.css";
import "../styles/new-todo.css";

interface IProps {
  light: boolean;
  toggleBg: any;
}

let Main = ({ light, toggleBg }: IProps) => {
  return (
    <div className="main container-fluid ">
      <Title light={light} toggleBg={toggleBg} />
      <NewTodoForm />
      <div className="row">
        <TaskList />
        <Footer />
        <PhoneFooter/>
      </div>
    </div>
  );
};

export default Main;
