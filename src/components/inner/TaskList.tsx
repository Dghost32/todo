import React from "react";
import TaskElement from "./TaskElement";
import "../../styles/scrollbar.css";
import "../../styles/task-list.css";

let TaskList = () => {
  return (
    <div className="col-12 tasks-list">
      <h1 className="no-tasks text-center d-none">no tasks to display</h1>
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      <TaskElement />
      {/*<TaskElement /> */}
    </div>
  );
};

export default TaskList;
