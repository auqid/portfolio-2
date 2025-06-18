import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/auqidirfan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin fa-4x logo1">
            <FaLinkedin />
          </i>
        </a>
        <a
          href="https://www.github.com/auqid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-4x logo1">
            <FaGithub />
          </i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter fa-4x logo1">
            <FaTwitter />
          </i>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube fa-4x logo1">
            <FaYoutube />
          </i>
        </a>
      </div>
    </>
  );
};

export default Footer;
