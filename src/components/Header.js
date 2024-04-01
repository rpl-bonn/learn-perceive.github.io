import React from "react";
import { Link } from "gatsby";
import MainMenu from "./MainMenu";
import Logo from "./Logo";

export default function Header({ children }) {
  return (
    <div className="container">
      <Logo />
      <MainMenu />
      <div id="toggle-menu-main-mobile" className="hamburger-trigger">
        <button className="hamburger">Menu</button>
      </div>
    </div>
  );
}
