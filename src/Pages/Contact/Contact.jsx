import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./Contact.css";
import simu from "../../assets/social1.jpg";

function Contact() {
  return (
    <div className="Contact">
      <div className="Hedaer">
        <h1>Contact Us</h1>
      </div>
      <div className="ContactWrapper">
        <div className="Contactleft">
          <div className="leftHead">
            <h1>Get in touch</h1>
            <p>Lets connect and share ideas</p>
          </div>
          <hr />
          <div className="contactinfoWrapper">
            <div className="contactinfo">
              <h2>HeadQuaters</h2>
              <div className="contactinfosvgDial">
                <div>
                  <a href="">
                    {" "}
                    <IoMdHome />
                  </a>
                </div>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <hr />
            <div className="contactinfo">
              <h2>WhatsApp</h2>
              <div className="contactinfosvgDial">
                <div>
                  <a
                    href="https://wa.me/254745435953"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
                <p>+254745435953</p>
              </div>
            </div>
            <hr />
            <div className="contactinfo">
              <h2>Email</h2>
              <div className="contactinfosvgDial">
                <div>
                  <a href="mailto:njokibmacharia@gmail.com" target="_blank">
                    {" "}
                    <FaEnvelope />
                  </a>
                </div>
                <p>njokibmacharia@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="contactinfo">
              <h2>Social</h2>
              <div className="contactinfosvgDial">
                <div>
                  <a href="https://x.com/" target="_blank">
                    <BsTwitterX />
                  </a>
                </div>
                <div>
                  <a href="https://facebook.com/" target="_blank">
                    <FaFacebookF />
                  </a>
                </div>
                <div>
                  <a href="https://linkedin.com/" target="_blank">
                    <FaLinkedin />
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com/" target="_blank">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactRight">
          <h1>Let's Connect</h1>
          <p>
            Lets grow together, it's what we are made to do. we gain and learn
            together as one world
          </p>
          <div className="divimage">
            <img src={simu} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
