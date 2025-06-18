import React from "react";
import "./main.css";
import { ReactTyped } from "react-typed";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Main = () => {
  return (
    <div className="container-main">
      <p className="container-text">
        <div className="container-text1">
          <span>I am a </span>
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
        </div>
        <br />
      </p>{" "}
      <div className="container-text2">
        Transforming ideas into scalable web solutions with 2 years of hands-on
        experience in modern technologies.
      </div>
      {/* <img src={cube} alt='cube' className='container-img'/> */}
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <div className="container-text2">
        <p>Let's connect and build something great together!</p>
      </div>
    </div>
  );
};

export default Main;
