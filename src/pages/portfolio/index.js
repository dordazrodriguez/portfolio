import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  return (
    <HelmetProvider>
       {/* Header for Portfolio Page */}
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Portfolio page content */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Navbar id="navbar" expand="lg" style={{padding: "15px", marginBottom: "30px", fontWeight: "500"}}>
            <Navbar.Brand id="navbar" style={{fontWeight: "bold", fontSize: "2em", }}>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" style={{paddingLeft: "2em"}}>
                <Nav.Link href="#programming">General Programming Projects</Nav.Link>
                <Nav.Link href="#financial">Financial Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr className="t_border my-4 ml-0 text-left" />
          <Col id="financial" style={{paddingTop: "4em"}}>
            <h1 > Financial Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <div className="divider"/>
          <Col id="programming" style={{paddingTop: "4em"}}>
            <h1> General Programming Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <h3>{data.name}</h3>
                      <p>{data.description}</p>
                      <a href={data.link} target="_blank">view project</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};