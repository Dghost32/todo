import React, { useContext } from "react";
/* styles */
import "../../styles/footer.css";
import AppContext from "../../context/AppContext";

let PhoneFooter = () => {
  let { setFilter, filter } = useContext(AppContext);
  return (
    <div className="phone-footer col-12">
      <div className="row justify-content-center align-items-center h-100">
        <div
          onClick={() => setFilter(undefined)}
          className={`col-auto text ${!filter ? "selected" : ""}`}
        >
          all
        </div>
        <div
          onClick={() => setFilter("active")}
          className={`col-auto text ${filter === "active" ? "selected" : ""}`}
        >
          active
        </div>
        <div
          onClick={() => setFilter("completed")}
          className={`col-auto text ${
            filter === "completed" ? "selected" : ""
          }`}
        >
          completed
        </div>
      </div>
    </div>
  );
};

export default PhoneFooter;
