import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const activeStyle ={
    fontWeight: "bold",
    color: "red"
  }
    return (
      <nav className="header-menu bg-light p-4">
        <NavLink className="header" activeStyle={activeStyle} to="/home">Home</NavLink>
        <NavLink className="header" activeStyle={activeStyle} to="/about">About Us</NavLink>
        <NavLink className="header" activeStyle={activeStyle} to="/services">Services</NavLink>
        <NavLink className="header" activeStyle={activeStyle} to="/contacts">Contacts</NavLink>
      </nav>
    );
};

export default Header;