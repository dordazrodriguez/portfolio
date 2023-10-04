import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Themetoggle from "../components/themetoggle";
import { logotext } from "../content_option";
import "./style.css";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <Navbar className="navbar-toggle pull-left" expand="lg" style={{top: "0", right: "0"}}>
              <Navbar.Toggle />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/home" className="main-menu-item">Home</Link>
                  <Link to="/about" className="main-menu-item">About</Link>
                  <Link to="/portfolio" className="main-menu-item">Portfolio</Link>
                  <Link to="/contact" className="main-menu-item">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
