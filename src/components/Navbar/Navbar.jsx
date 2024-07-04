import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";

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
        </div>
        {menuOpen ? (
          <div className="nav-container">
            <div className="nav">
              <ul className="nav-items">
                <li>Menu</li>
                <li>About</li>
                <li>Contact Us</li>
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
