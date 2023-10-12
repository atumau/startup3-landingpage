import React from "react";
import "./style/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Startup3
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul
            className="navbar-nav gap-4"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <li className="nav-item">
              <a className="nav-link disabled " aria-disabled="true">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Prices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Feedback
              </a>
            </li>
            <button
              type="button"
              className="btn btn-primary butto button"
              data-aos="zoom-in"
            >
              Purchase
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
