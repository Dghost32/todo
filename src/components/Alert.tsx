import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Alert = () => {
  const { alertType } = useContext(AppContext);
  return (
    <div>
      <div className={`s-alert alert-${alertType}`}>
        <h5 className="alert-text">
          {alertType === "add"
            ? "task has been added"
            : alertType === "edit"
            ? "task has been edited"
            : alertType === "remove"
            ? "task has been removed"
            : alertType === "warning"
            ? "task is already added"
            : ""}
        </h5>
      </div>
    </div>
  );
};

export default Alert;
