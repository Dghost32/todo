import React from "react";
import "../../styles/footer.css";

let Footer = () => {
  return (
    <div className="col-12 footer">
      <div className="row align-items-center justify-content-between footer-row">
        <div className="col-auto text text-left">x items <span className="d-none d-sm-inline">left</span></div>
        <div className="col-auto text-center">
          <div className="row justify-content-center filter">
            <div className="col-auto selected text">all</div>
            <div className="col-auto text">active</div>
            <div className="col-auto text">completed</div>
          </div>
        </div>
        <div className="col-auto text-right text">clear <span className="d-none d-sm-inline">completed</span></div>
      </div>
    </div>
  );
};

export default Footer;
