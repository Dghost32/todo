import React from "react";

let TaskElement = () => {
  return (
    <div className="row task justify-content-center align-items-center">
      <input type="checkbox" className="checkbox col-auto mx-2"/>
      <span className="col">Task one</span>
    </div>
  );
};

export default TaskElement;
