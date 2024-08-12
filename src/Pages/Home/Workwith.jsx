import React from "react";
import "./Home.css";
import pic1 from "../../assets/mmaid.jpeg";
import pic2 from "../../assets/inspo.png";
import pic3 from "../../assets/nairobian.jpeg";

function Workwith() {
  return (
    <div className="banner">
      <h1>Brands Worked with,</h1>
      <div className="slider" style={{ "--quantity": 6 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={pic1} alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={pic2} alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={pic3} alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={pic1} alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={pic2} alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Workwith;
