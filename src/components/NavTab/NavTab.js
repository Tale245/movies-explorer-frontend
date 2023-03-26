import React from "react";
import "./NavTab.css";

const NavTab = ({ title }) => {
  return (
    <div className="navTab__container-title">
      <h2 className="navTab__title">{title}</h2>
    </div>
  );
};

export default NavTab;
