import React from "react";
import "./header.css";
import logo from "../Images/logo.png";
import group from "../Images/group.jpg";
import heart from "../Images/heart.jpg";
import account from "../Images/account.jpg";
import cart from "../Images/cart.jpg";

function Header() {
  return (
    <div className="header">
      <input className="search e" placeholder="Search" />
      <img src={logo} className="logo e" />
      <div className="right e">
        <img src={group} className="img" />
        <img src={heart} className="img" />
        <img src={account} className="img" />
        <img src={cart} className="img" />
      </div>
    </div>
  );
}

export default Header;
