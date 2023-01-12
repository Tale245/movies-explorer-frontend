import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
};

export default Main;
