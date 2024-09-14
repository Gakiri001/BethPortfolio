import React from "react";
import "./Blog.css";
import Career from "./Career";
import Beauty from "./Beauty";
import Personal from "./Personal";
import Fashion from "./Fashion";
import Bts from "./Bts";

function Blog() {
  return (
    <div className="Blog">
      <div className="blogHeader">
        <h1>Know More About Beth:</h1>
      </div>
      <div className="statDetails">
        <h3>My parameters</h3>
        <br />
        <ul>
          <li>
            <span className="stat">
              <b>HEIGHT</b> &#8594; 178 = 5'10'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "80%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>BUST</b> &#8594; 32.2'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "70%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>SHOULDER</b> &#8594; 18'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "50%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>ARM WIDTH</b> &#8594; 11.2'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "40%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>ARM LENGTH</b> &#8594; 22'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "50%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>WAIST</b> &#8594; 25.5'
            </span>
            <span className="percent">
              <div style={{ width: "40%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>HIPS</b> &#8594; 38'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "90%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>SHOE SIZE</b> &#8594; 39 - 6'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "70%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>HAIR COLOR</b> &#8594; red{" "}
            </span>
            <span className="percent">
              <div className="hair" style={{ width: "100%" }}></div>
            </span>
          </li>
        </ul>
      </div>

      <div className="accordionwrapper">
        <h2> Q&A section</h2>
        <Career />
        <Beauty />
        <Personal />
        <Fashion />
        <Bts />
      </div>
    </div>
  );
}

export default Blog;
