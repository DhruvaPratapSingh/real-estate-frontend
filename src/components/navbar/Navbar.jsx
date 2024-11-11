import { useState } from "react";
import "./navbar.scss";
import logo from "/logo.png"
import { Link } from "react-router-dom";

const Navbar=()=>{
  const [menubar,setmenubar]=useState(false);
  const handleclick=()=>{
    setmenubar(!menubar);
  }
  return (
    <nav>
     <div className="left">
      <Link href="/" className="logo">
        <img src={logo} alt="logo" />
        <span>Apartment</span>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/">about</Link>
      <Link href="/">Contact</Link>
      <Link href="/">Agents</Link>
     </div>
     <div className="right">
      <Link href="/">sigh in</Link>
      <Link href="/" className="register">sigh up</Link>
      <div className="menuIcon" >
       <img src="/menu.png" alt="menu" onClick={handleclick} />
      </div>
     <div className={menubar?"menu active":"menu"}>
      <Link href="/">Home</Link>
      <Link href="/">about</Link>
      <Link href="/">Contact</Link>
      <Link href="/">Agents</Link>
      <Link href="/">sign in</Link>
      <Link href="/">sign up</Link>
      </div>
     </div>
    </nav>
  )
}
export default Navbar;