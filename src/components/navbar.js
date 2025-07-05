import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // Pastikan path ini benar
// import searchIcon from '../assets/image/search_icon.svg'; // Tidak lagi diperlukan

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Yayasan Rapel Logo" /> {/* Pastikan logo berbentuk persegi panjang */}
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/drugs" className={({ isActive }) => (isActive ? 'active' : '')}>
              Drugs
            </NavLink>
          </li>
          <li>
            <NavLink to="/treatment" className={({ isActive }) => (isActive ? 'active' : '')}>
              Treatment
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      {/* BAGIAN INI DIHAPUS: Search icon dan Contact Us button */}
      {/* <div className="navbar-search-contact">
        <button className="navbar-search-button">
          <img src={searchIcon} alt="Search" />
        </button>
        <button className="navbar-contact-button">Contact Us</button>
      </div> */}
    </nav>
  );
};

export default Navbar;