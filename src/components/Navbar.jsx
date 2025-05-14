import React, { useState } from "react";
import { FiChevronDown, FiSearch, FiMenu } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">LOGO</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={24} />
        </div>

        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              Qualifications <FiChevronDown className="icon" />
            </li>
            <li>
              Organizations <FiChevronDown className="icon" />
            </li>
            <li>
              Research & Analysis <FiChevronDown className="icon" />
            </li>
            <li>
              Lorem ipsum <FiChevronDown className="icon" />
            </li>
            <li>
              Lorem ipsum <FiChevronDown className="icon" />
            </li>
          </ul>

          <div className="nav-actions">
            <FiSearch className="search-icon" />
            <button className="enrol-btn">Enrolment</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
