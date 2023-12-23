import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { HiMenu } from "react-icons/hi";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <HiMenu size={32} />
      </div>

      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Shop
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="/cart" onClick={toggleMenu}>
          <span className="cart-icon">
            <ShoppingCart size={32} />
          </span>
        </Link>
      </div>
    </div>
  );
};
