import React from "react";
import "./Preloader.css";

const Preloader = ({ showMoreItems }) => {
  return (
    <div className="preloader">
      <button className="preloader__btn" onClick={showMoreItems}>
        Ещё
      </button>
    </div>
  );
};

export default Preloader;
