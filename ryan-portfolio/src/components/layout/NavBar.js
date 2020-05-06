import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light text-white bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#landing">
          Ryan Gleason
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                {" "}
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#professional">
                {" "}
                Professional
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                {" "}
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#extracurricular">
                {" "}
                Extracurricular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">
                {" "}
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
