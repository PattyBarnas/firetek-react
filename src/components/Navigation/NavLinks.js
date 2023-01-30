import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div className="nav-container">
      <img
        className="nav-img"
        src={require("../../images/firetek-logo.jpg")}
        alt="firetek-logo"
      />

      <ul className="nav-links">
        <li>
          <NavLink
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
            to="contact"
            style={({ isActive }) => ({
              color: isActive ? "#f03e3e" : "#f1f3f5",
            })}
          >
            Contact
          </NavLink>
        </li>

        <li className="call-us">
          <a
            className="call-us"
            href="tel:773-475-1290"
            aria-label="Phone call to Firetek"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="phone-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>{" "}
            773-475-1290
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
