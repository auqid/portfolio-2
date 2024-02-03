import React from 'react'
import './contact.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <section className="contact">
  <div className="contact-header">
    <h3 id="co-title">Contact Me</h3>
    <h1 id="co-text">Reach out for a new project or to say hello</h1>
  </div>
  
  <div className="contact-content">
    <div className="contact-form">
      <h3 id="form-title">Send me a message</h3>
    <form action="mailto:auqidirfan100@gmail.com" method="post" enctype="text/plain">
      <fieldset>
        <div className="form-field">
          <input name="name" type="text" id="name" placeholder="Your Name"></input>
        </div>
      <div className="form-field">
          <input name="email" type="email" id="email" placeholder="Your Email"></input>
        </div>
      <div className="form-field">
          <input name="Subject" type="text" id="subject" placeholder="Subject"></input>
        </div>
    <div className="form-field">
          <textarea name="message" type="text" id="message" placeholder="Your Message"></textarea>
        </div>
      </fieldset>
  <input id="form-btn" type="submit" value="send"/>
    </form>
</div>
  
    <div className="contact-info">
      <h3>Email Me At </h3>
      <a href="mailto:auqidirfan100@gmail.com"><p>auqidirfan100@gmail.com</p></a>
      <h3>Find Me On </h3>
      <div className="contact-links">
        <a href='/https://www.linkedin.com/in/auqidirfan/'><i className="fab fa-linkedin"><FaLinkedin/></i></a>
        <a href='/https://www.github.com/auqid'><i className="fab fa-github"><FaGithub/></i></a>
        <a href='/'><i className="fab fa-codepen"></i></a>
      </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default Contact
