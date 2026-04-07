import React from "react";
import "./contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { trackContactForm } from "../analytics";

const Contact = () => {
  const handleFormSubmit = (e) => {
    trackContactForm();
    // Form will continue with default mailto behavior
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="contact-header">
          <p id="co-title">Contact</p>
          <h2 id="co-text">Reach out for a new project or to say hello.</h2>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h3 id="form-title">Send me a message</h3>
            <form
              action="mailto:auqidirfan100@gmail.com"
              method="post"
              encType="text/plain"
              onSubmit={handleFormSubmit}
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    name="Subject"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                  />
                </div>
              </fieldset>
              <button id="form-btn" type="submit">
                Send
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Email Me At</h3>
            <a href="mailto:auqidirfan100@gmail.com">
              <p>auqidirfan100@gmail.com</p>
            </a>{" "}
            <h3>Find Me On</h3>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/auqidirfan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="contact-icon" />
              </a>
              <a
                href="https://www.github.com/auqid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
