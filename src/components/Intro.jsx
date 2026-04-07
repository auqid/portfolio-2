import React from "react";
import hero from "../assets/hero-devices.svg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about" className="container-intro">
      <div className="intro-copy">
        <p className="intro-label">About</p>
        <h2 className="bold-text">Hi, I&apos;m Auqid. Nice to meet you.</h2>
        <p className="intro-text">
          With 2 years of experience as a web developer, I&apos;ve done remote
          work for agencies, consulted for startups, and collaborated with
          talented people to create digital products for both business and
          consumer use. I&apos;m quietly confident, naturally curious, and
          perpetually focused on refining my craft.
        </p>
      </div>
      <div className="intro-media">
        <img
          src={hero}
          className="intro-img"
          alt="Illustration of development workspace"
        />
      </div>
    </section>
  );
};

export default Intro;
