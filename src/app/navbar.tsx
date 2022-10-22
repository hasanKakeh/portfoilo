import React from "react";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="navbar-container">
        <a href="/" className="navbar-brand mb-0 h1">Hasan Kakeh</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
        <div
          className="navbar-collapse text-center justify-content-end collapse"
          id="collapse"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
