import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img
          className="logo"
          alt="Brand"
          src="https://www.ecell.in/esummit/expo/speakers/8.png"
        />
      </a>
    </header>
  );
};

export default Header;
