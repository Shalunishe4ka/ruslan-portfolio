import React from "react";
import { HeaderText } from "./HeaderTextPortfolio";
import { HeaderTextUXUI } from "./HeaderTextUXUI";
import { HeaderTextDesigner } from "./HeaderTextDesigner";
import "./HeaderStyles.css"

export const Header = () => {
  return (
    <header className="header-comp">
      <HeaderText />
      <div className="subText">
        <HeaderTextUXUI />
        <HeaderTextDesigner />
      </div>
    </header>
  );
};
