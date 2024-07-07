import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <section className="container">
      <section className="nav-wrapper">
        <div className="logo">
          <p>Kuya Joe's Kitchen</p>
          {menuOpen ? (
            <div className="close-icons" onClick={handleClick}>
              <FiX />
            </div>
          ) : (
            ""
          )}
        </div>
        {menuOpen ? (
          <div className="nav-container">
            <div className="nav">
              <ul className="nav-items">
                {/* <li>Menu</li>
                <li>About</li>
                <li>Contact Us</li> */}
                <Link to="/menu" className="link">
                  Menu
                </Link>
                <Link to="/about" className="link">
                  About
                </Link>
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="menu-icon" onClick={handleClick}>
            <FiMenu />
          </div>
        )}
      </section>
    </section>
  );
};

export default Navbar;
