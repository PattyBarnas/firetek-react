import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div className="nav-container">
      <img src={require("../../images/firetek-logo.jpg")} alt="firetek-logo" />
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#f03e3e" : "#f1f3f5",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            style={({ isActive }) => ({
              color: isActive ? "#f03e3e" : "#f1f3f5",
            })}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              color: isActive ? "#f03e3e" : "#f1f3f5",
            })}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            style={({ isActive }) => ({
              color: isActive ? "#f03e3e" : "#f1f3f5",
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
