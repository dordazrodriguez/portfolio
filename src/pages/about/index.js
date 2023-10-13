import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";

export const About = () => {
  return (
    <HelmetProvider>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "80vh", 
          flexDirection: "column", 
          textAlign: "center",
          paddingTop: "-40px",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>
          Under Construction{" "}
          <img
            src="https://cdn-0.emojis.wiki/emoji-pics/apple/hammer-and-pick-apple.png"
            style={{ height: "70px" }}
            alt="Construction Emoji"
          />
        </h1>
      </div>
    </HelmetProvider>
  );
};
