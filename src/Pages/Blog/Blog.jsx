import React from "react";
import "./Blog.css";

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
              <b>BUST</b> &#8594; 82 32'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "70%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>WAIST</b> &#8594; 62 24'{" "}
            </span>
            <span className="percent">
              <div style={{ width: "40%" }}></div>
            </span>
          </li>
          <br />
          <li>
            <span className="stat">
              <b>HIPS</b> &#8594; 88 35'{" "}
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

      <div className="accordionwrapper"></div>
    </div>
  );
}

export default Blog;
