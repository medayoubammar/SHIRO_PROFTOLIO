import React from "react";
import logo from "../assets/welcome2.jpg";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light nav--">
      <div className="container-fluid px-5 py-2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon.List className="text-light" />
        </button>
        <div className="collapse navbar-collapse w-100" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className=" fw-bold fs-2 nav--link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className=" fw-bold fs-2 nav--link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className=" fw-bold fs-2 nav--link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <img
          src={logo}
          alt="welcome"
          className="img-fluid col-8 rounded-circle navbar--brand"
        />
      </div>
    </nav>
  );
}
