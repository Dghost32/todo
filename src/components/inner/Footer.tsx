import React from "react";
/* types */
import { FooterProps as Props } from "../../types/types";
/* styles */
import "../../styles/footer.css";

let Footer = ({ clearCompletedTodos, setFilter, filter, numTodos }: Props) => {
  return (
    <div className="col-12 footer">
      <div className="row align-items-center justify-content-between footer-row">
        <div className="col-auto text text-left">
          {numTodos} items <span className="d-none d-sm-inline">left</span>
        </div>
        <div className="col-auto text-center">
          <div className="row justify-content-center filter">
            <div
              onClick={() => setFilter(undefined)}
              className={`col-auto text ${!filter ? "selected" : ""}`}
            >
              all
            </div>
            <div
              onClick={() => setFilter("active")}
              className={`col-auto text ${
                filter === "active" ? "selected" : ""
              }`}
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
        <div
          className="col-auto text-right text"
          onClick={() => clearCompletedTodos()}
        >
          clear <span className="d-none d-sm-inline">completed</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
