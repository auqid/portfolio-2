import React from "react";
import "./main.css";
import { ReactTyped } from "react-typed";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Main = () => {
  return (
    <section className="container-main" id="home">
      <div className="hero-copy">
        <p className="hero-kicker">Web Developer and Product Builder</p>
        <h1 className="container-text1">
          I design and ship thoughtful digital experiences.
        </h1>
        <p className="container-text">
          <span>I am a</span>
          <ReactTyped
            strings={[
              " Full Stack Developer.",
              " Front-End Developer.",
              " Back-End Developer.",
            ]}
            typeSpeed={50}
            backSpeed={70}
            loop
          />
        </p>
        <p className="container-text2">
          Transforming ideas into scalable web solutions with 2 years of
          hands-on experience in modern technologies.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="hero-btn hero-btn-primary">
            Explore Projects
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary">
            Let&apos;s Collaborate
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <Canvas>
          <ambientLight intensity={1.5} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Cube />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>

      <p className="hero-note">
        Let&apos;s connect and build something meaningful together.
      </p>
    </section>
  );
};

export default Main;
