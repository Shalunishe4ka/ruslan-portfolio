import React from "react";
import { HeaderText } from "./HeaderTextPortfolio";
import { HeaderTextUXUI } from "./HeaderTextUXUI";
import { HeaderTextDesigner } from "./HeaderTextDesigner";
import "./HeaderStyles.css"

export const Header = () => {
  return (
    <header className="header-comp">
      <HeaderText />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <HeaderTextUXUI />
        <HeaderTextDesigner />
      </div>
    </header>
  );
};
