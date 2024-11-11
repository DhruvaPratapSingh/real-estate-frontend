import { useState } from "react";
import "./navbar.scss";
import logo from "/logo.png"
// import { Link } from "react-router-dom";

const Navbar=()=>{
  return (
    <nav>
     <div className="left">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
        <span>Apartment</span>
      </a>
      <a href="/">Home</a>
      <a href="/">about</a>
      <a href="/">Contact</a>
      <a href="/">Agents</a>
     </div>
     <div className="right">
      <a href="/">sigh in</a>
      <a href="/" className="register">sigh up</a>
     </div>
    </nav>
  )
}
export default Navbar;