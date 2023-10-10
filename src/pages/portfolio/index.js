import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

class Helpers {
  static contains(orig, filter) {
    let res = filter.map((item) => {
      return orig.includes(item.toLowerCase());
    });
    return !res.includes(false);
  }

  static hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
}

const filterProjects = (category, tags) => {
  return dataportfolio.filter((project) => {
    if (category === "all" || project.categories.includes(category)) {
      if (tags.length === 0) return true;
      // return Helpers.contains(project.tags, tags);
      /*  Uncomment below line and comment out currently active return statement for tags if want to filter projects by exact input string match */
      // return Helpers.contains(project.tags.map((tag) => tag.toLowerCase()), tags.map((tag) => tag.toLowerCase())); 
      return tags.some((selectedTag) => {
        return project.tags.some((projectTag) => {
          return projectTag.toLowerCase().includes(selectedTag.toLowerCase());
        });
      });
    }
    return false;
  });
};

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (tags) => {
    // setSelectedTags(tags);
    setSelectedTags(tags.map((tag) => tag.toLowerCase()));
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToRemove);
    setSelectedTags(updatedTags);
  };

  const filteredProjects = filterProjects(selectedCategory, selectedTags);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="portf-row mb-5 mt-3 pt-md-3" style={{width: "100%"}}>
          <Navbar id="navbar" expand="lg" style={{ padding: "15px", marginBottom: "30px", fontWeight: "500", backgroundColor: "transparent" }}>
            <Navbar.Brand id="navbar" style={{ fontWeight: "bold", fontSize: "2em", marginLeft: "-1em", backgroundColor: "transparent" }}>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" style={{ paddingLeft: "2em" }}>
                <Nav.Link href="#" onClick={() => setSelectedCategory("all")} className="bordered-link">
                  All Projects
                </Nav.Link>
                <Nav.Link href="#" onClick={() => setSelectedCategory("programming")} className="bordered-link">
                  General Programming Projects
                </Nav.Link>
                <Nav.Link href="#" onClick={() => setSelectedCategory("Data_Science")} className="bordered-link">
                  Data Science
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Col style={{ marginRight: "0.5em", marginLeft: "0.5em" }}>
            <Row>
            <h1 style={{ paddingTop: "25px" }}>Projects {filteredProjects.length}</h1>
            <TagInput onTagChange={handleTagChange} onTagRemove={handleTagRemove} selectedTags={selectedTags} style={{paddingTop: "15px"}}/>
            </Row>
            <hr className="t_border my-4 ml-0 text-left" />
            <div className="mb-5 po_items_ho" style={{ paddingTop: "10px" }}>
              {filteredProjects.map((data, i) => (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" style={{ verticalAlign: "middle", filter: "brightness(70%)" }} />
                  <div className="content">
                    <h3 style={{ fontWeight: "800",  paddingTop: "2em"}}>{data.name}</h3>
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
                    <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: "15px", marginBottom: "15px" }}>
                      View Project
                    </a>
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

const TagInput = ({ onTagChange, onTagRemove, selectedTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTag = inputValue.trim().toLowerCase();
      if (!selectedTags.includes(newTag)) {
        const updatedTags = [...selectedTags, newTag];
        onTagChange(updatedTags);
        setInputValue("");
      }
    }
  };

  const handleTagClick = (tag) => {
    onTagRemove(tag);
  };

  return (
    <Container>
    <div className="tag-input">
      <input
        type="text"
        placeholder="Enter tags (Press Enter to add)"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="selected-tags">
        {selectedTags.map((tag, index) => (
          <span key={index} className="tag" onClick={() => handleTagClick(tag)}>
            {tag}
            <span className="remove-tag">x</span>
          </span>
        ))}
      </div>
    </div>
    </Container>
  );
};
