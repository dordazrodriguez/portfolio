import React from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import "./style.css";

export const Blog = () => {
  return (
    <Row>
      <Navbar id="navbar" expand="lg" style={{padding: "20px", marginBottom: "30px", fontWeight: "500"}}>
        <Navbar.Brand id="navbar" style={{fontWeight: "bold", fontSize: "2em", }}>Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{paddingLeft: "2em"}}>
            <Nav.Link href="#programming">General Programming Posts</Nav.Link>
            <Nav.Link href="#financial">Financial Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};
