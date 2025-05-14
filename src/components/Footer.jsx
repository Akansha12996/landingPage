import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { HiOutlineSearch } from "react-icons/hi";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Contact us</h3>
        <p>Address: amet, consectetur sadipscing elit, sed diam</p>
        <p>
          Email:{" "}
          <a href="mailto:info@example.com">
            eirmod tempor invidunt ut labore et dolore
          </a>
        </p>
        <p>
          Phone no: <a href="tel:123456789">123456789</a>
        </p>
      </div>

      <div className="footer-section">
        <h3>Follow us</h3>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Search">
            <HiOutlineSearch />
          </a>
        </div>
      </div>

      {/* Head Office */}
      <div className="footer-section">
        <h3>Head Office</h3>
        <ul className="footer-list">
          <li>
            <FaMapMarkerAlt className="footer-icon" />
            Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam
            nonumy eirmod tempor invidunt ut
          </li>
          <li>
            <LuClock4 className="footer-icon" />
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr
          </li>
          <li>
            <LuClock4 className="footer-icon" />
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr
          </li>
          <li>
            <FaRegEnvelope className="footer-icon" />
            Lorem ipsum asd asdsaweeq Lorem Ipsum
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>
        © 2021 All Rights Reserved. <a href="#">Privacy Policy</a>
      </span>
    </div>
  </footer>
);

export default Footer;
