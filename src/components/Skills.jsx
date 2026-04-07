import React from "react";
import "./Skills.css";
import cal from "../assets/icon-calculator.svg";
import kar from "../assets/icon-karma.svg";
import sup from "../assets/icon-supervisor.svg";
import bul from "../assets/icon-team-builder.svg";

const skillCards = [
  {
    id: 1,
    title: "Full Stack Delivery",
    text: "I like to build products from scratch and turn ideas into practical, polished web experiences.",
    image: bul,
    tone: "card-team-builder",
  },
  {
    id: 2,
    title: "Languages",
    text: "JavaScript and Python with a strong emphasis on clean architecture and maintainable code.",
    image: sup,
    tone: "card-supervisor",
  },
  {
    id: 3,
    title: "Frontend Craft",
    text: "React, HTML, and CSS focused on accessible interaction, animation, and thoughtful visual design.",
    image: kar,
    tone: "card-karma",
  },
  {
    id: 4,
    title: "Backend Systems",
    text: "Node.js, Express, and API development with scalable data-driven patterns and robust integrations.",
    image: cal,
    tone: "card-calculator",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <p className="skills-label">Capabilities</p>
        <h2 className="skills-title">
          Built to handle product design and engineering end-to-end.
        </h2>
      </div>

      <div className="cards">
        {skillCards.map((card) => (
          <article className={`skill-card ${card.tone}`} key={card.id}>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-paragraph">{card.text}</p>
            <div className="card-image">
              <img src={card.image} alt={`${card.title} icon`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
