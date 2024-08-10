import React from "react";
import juliTechLogo from "../../assets/gjlogo.jpeg";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <div className="FooterLeft">
          <img src={juliTechLogo} alt="" />
          <p>Developed by, <span>GlobalJunction Tech</span></p>
        
        </div>
        <div className="FooterRight">
          <h2>Follow us,</h2>
          <p>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </p>
        </div>
      </div>
      <p className="rights">All Rights Reserved 2024 </p>
    </div>
  );
}

export default Footer;
