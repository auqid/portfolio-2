import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-copy">Designed and developed by Auqid Irfan.</p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/auqidirfan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="logo1" />
        </a>
        <a
          href="https://www.github.com/auqid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="logo1" />
        </a>
        <a href="mailto:auqidirfan100@gmail.com" aria-label="Email">
          <FaEnvelope className="logo1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
