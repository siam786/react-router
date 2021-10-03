import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { fontWeight: "bold", color: "red" };
  return (
    <div className="App">
      <NavLink activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/friends">
        Friends
      </NavLink>
    </div>
  );
}

export default Header;

