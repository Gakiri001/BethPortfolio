import React, { useState } from "react";
import logo from "../../assets/pic14.jpg";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="Header">
      <div className="Headerlogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`Headerpages ${menuOpen ? "active" : ""}`}>
        <ul>
          <div id="menu-close" className="close" onClick={handleMenuClose}>
            <IoCloseCircleOutline />
          </div>
          <li>
            <Link className="links" to="/" onClick={handleMenuClose}>
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/Gallery" onClick={handleMenuClose}>
              Gallery
            </Link>
          </li>
          <li>
            <Link className="links" to="/Blog" onClick={handleMenuClose}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="links" to="/contacts" onClick={handleMenuClose}>
              Contacts
            </Link>
          </li>
        </ul>
        <div id="menu-btn" className="hamburger" onClick={handleMenuOpen}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
