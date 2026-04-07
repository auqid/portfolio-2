import React from "react";
import "./header.css";
import { trackResumeDownload } from "../analytics";

const Header = ({ openPrivacyModal }) => {
  const downloadResume = () => {
    // Track the download event
    trackResumeDownload();

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
      <a href="/" className="nav-brand" onClick={scrollToTop}>
        <span className="brand-mark" aria-hidden="true">
          AI
        </span>
        <span className="brand-name">Auqid Irfan</span>
      </a>
      <div className="nav-links">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#portfolio" className="nav-link">
          Work
        </a>{" "}
        <a href="#contact" className="nav-link">
          Contact
        </a>{" "}
      </div>
      <div className="nav-actions">
        <button
          className="nav-link privacy-link"
          onClick={(e) => {
            e.preventDefault();
            openPrivacyModal();
          }}
        >
          Privacy
        </button>
        <button className="resume-btn" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Header;
