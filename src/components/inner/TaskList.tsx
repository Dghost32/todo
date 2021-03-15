import React from "react";
import TaskElement from "./TaskElement";

let TaskList = () => {
  return (
    <div className="col-12 tasks-list">
      <TaskElement />
      <TaskElement />
    </div>
  );
};

export default TaskList;
