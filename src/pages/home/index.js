import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import "./style.css";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home" >
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div id="backgroundImage"
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})`, backgroundSize: 'cover', backgroundPosition: 'center center', right: "0", zIndex: "1", width: "100%" }}/>
          {/* <div className="d3-component order-3 order-lg-3 h-100 d-lg-flex justify-content-center">
              <MyD3Component /> 
            </div> */}
          <div style={{padding: "30px"}}></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center" style={{zIndex: "3", marginLeft: "7%"}}>
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x" style={{ flex: "1", paddingRight: "10% !important", fontSize: "24px" }}>
                  <Typewriter
                    options={{
                      strings: Object.values(introdata.animated), 
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                      delay: 35,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  {/* <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
