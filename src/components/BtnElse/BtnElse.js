import React from "react";
import "./BtnElse.css";

const BtnElse = ({handleStep}) => {
  return (
    <div className="btnElse">
      <button className="btnElse__btn" onClick={handleStep}>Ещё</button>
    </div>
  );
};

export default BtnElse;
