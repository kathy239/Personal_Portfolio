import "./Navbar.css";
import logo from "../../assets/img/logo.svg";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Navbar = () => {
  return (
    <Container fluid className="navbar-container">
      <nav className="d-flex align-items-center justify-content-between">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-bar"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-bar"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-bar"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-bar"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-bar"
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
