import React from "react";
import "./header.css";
const Header = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Auqid_Irfan_Resume.pdf";
    link.click();
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav-1" onClick={scrollToTop}>
        Auqid Irfan
      </a>
      <div className="nav-links">
        <a href="/" className="nav-2" onClick={scrollToTop}>
          Home
        </a>
        <a href="#about" className="nav-2">
          About
        </a>
        <a href="#portfolio" className="nav-2">
          Portfolio
        </a>
        <a href="#contact" className="nav-2">
          Contact
        </a>
        <button className="resume-btn" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Header;
