import { useState } from "react";
import "./navbar.scss";
import logo from "/logo.png"
// import { Link } from "react-router-dom";

const Navbar=()=>{
  const [menubar,setmenubar]=useState(false);
  const handleclick=()=>{
    setmenubar(!menubar);
  }
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
      <div className="menuIcon" >
       <img src="/menu.png" alt="menu" onClick={handleclick} />
      </div>
     <div className={menubar?"menu active":"menu"}>
      <a href="/">Home</a>
      <a href="/">about</a>
      <a href="/">Contact</a>
      <a href="/">Agents</a>
      <a href="/">sign in</a>
      <a href="/">sign up</a>
      </div>
     </div>
    </nav>
  )
}
export default Navbar;