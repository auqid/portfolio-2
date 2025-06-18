import React from "react";
import "./privacy.css";

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="privacy-modal-overlay" onClick={handleOverlayClick}>
      <div className="privacy-modal-content">
        <button className="privacy-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="privacy-policy">
          <h2>Privacy Policy</h2>
          <p>
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h3>Analytics</h3>
          <p>
            This website uses Google Analytics to understand how visitors
            interact with the site. Google Analytics collects information
            anonymously and reports website trends without identifying
            individual visitors.
          </p>

          <h3>Information Collected</h3>
          <ul>
            <li>Pages visited and time spent on site</li>
            <li>Referring websites</li>
            <li>General geographic location (city/country)</li>
            <li>Device and browser information</li>
            <li>Resume download events</li>
            <li>Contact form submissions</li>
          </ul>

          <h3>Contact</h3>
          <p>
            If you have any questions about this privacy policy, please contact
            me at: auqidirfan100@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
