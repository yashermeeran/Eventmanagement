import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="./logo.png" alt="Logo" className="nav-logo" />
      </div>

      <div className="nav-right">
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/decoration">DECORATION</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}
