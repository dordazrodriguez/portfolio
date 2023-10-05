import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";


// // Sample data and meta information (replace with your actual data)
// const meta = {
//     title: "Your Portfolio",
//     description: "Portfolio description goes here",
//   };
  
// const dataportfolio = [
//     {
//       categories: ["programming"],
//       img: "image1.jpg",
//       name: "Project 1",
//       description: "Description of Project 1",
//       link: "https://example.com/project1",
//     },
//     {
//       categories: ["financial", "programming"],
//       img: "image2.jpg",
//       name: "Project 2",
//       description: "Description of Project 2",
//       link: "https://example.com/project2",
//     },
//     // Add more projects here
//   ];
  

  export const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
  
    const filteredProjects = dataportfolio.filter((project) => {
        if (selectedCategory === "all") return true; // Show all projects
        return project.categories.includes(selectedCategory);
      });
  
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>
            <meta name="description" content={meta.description} />
          </Helmet>
  
          <Row className="mb-5 mt-3 pt-md-3">
            <Navbar id="navbar" expand="lg" style={{ padding: "15px", marginBottom: "30px", fontWeight: "500" }}>
              <Navbar.Brand id="navbar" style={{ fontWeight: "bold", fontSize: "2em" }}>Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ paddingLeft: "2em" }}>
                  <Nav.Link href="#" onClick={() => setSelectedCategory("all")} className="bordered-link">All Projects</Nav.Link>
                  <Nav.Link href="#" onClick={() => setSelectedCategory("programming")} className="bordered-link">General Programming Projects</Nav.Link>
                  <Nav.Link href="#" onClick={() => setSelectedCategory("financial")} className="bordered-link">Financial Projects</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Col style={{ marginRight: "1em", marginLeft: "1em" }}>
              {/* <h1>Projects - {selectedCategory}</h1> */}
              <h1>Projects {filteredProjects.length}</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <div className="mb-5 po_items_ho">
                {filteredProjects.map((data, i) => (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" style={{verticalAlign: 'middle'}}/>
                    <div className="content">
                      <h3 style={{ fontWeight: "bold" }}>{data.name}</h3>
                      <p>{data.description}</p>
                      {data.tags.length > 0 && (
                          <div className="tags">
                            {data.tags.map((tag, j) => (
                              <span key={j} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      <a href={data.link} target="_blank" rel="noopener noreferrer" style={{marginTop: "15px", marginBottom: "15px"}}>View Project</a>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
    );
  };