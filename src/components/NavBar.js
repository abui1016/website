import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <nav className="navbar_navigation">
          <div></div>
          <div className="logo">A | B</div>
          <div className="spacer" />
          <div className="navbar_buttons">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/about">
                <li>About Me</li>
              </Link>

              <Link to="/projects">
                <li>Projects</li>
              </Link>

              <Link to="/resume">
                <li>Resume</li>
              </Link>

              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
