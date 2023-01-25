import React from "react";
import "./MoreBtn.css";

const MoreBtn = ({ showMoreItems }) => {
  return (
    <div className="moreBtn">
      <button className="moreBtn__btn" onClick={showMoreItems}>
        Ещё
      </button>
    </div>
  );
};

export default MoreBtn;
