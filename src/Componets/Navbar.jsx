import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="./logo.png" alt="Logo" />
      </div>

      <div className={open ? "nav-right active" : "nav-right"}>
        <Link to="/home" onClick={()=>setOpen(false)}>HOME</Link>
        <Link to="/about" onClick={()=>setOpen(false)}>ABOUT</Link>
        <Link to="/decoration" onClick={()=>setOpen(false)}>DECORATION</Link>
        <Link to="/services" onClick={()=>setOpen(false)}>SERVICES</Link>
        <Link to="/contact" onClick={()=>setOpen(false)}>CONTACT</Link>
      </div>

      <i
        className="fa-solid fa-bars menu-icon"
        onClick={() => setOpen(!open)}
      ></i>
    </nav>
  );
}
