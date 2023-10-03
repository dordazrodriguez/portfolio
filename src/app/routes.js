import React from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Socialicons } from "../components/socialicons";
import withRouter from "../hooks/withRouter";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { ContactUs } from "../pages/contact";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="portfolio/" element={<Home />} />
        <Route path="portfolio/about" element={<About />} />
        <Route path="portfolio/blog" element={<Blog />} />
        <Route path="portfolio/portfolio" element={<Portfolio />} />
        <Route path="portfolio/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
