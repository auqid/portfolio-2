import React from "react";
import IMG1 from "../assets/portfolio1.jpg";
import IMG5 from "../assets/viva.png";
import IMG6 from "../assets/pop.png";
import IMG7 from "../assets/like.png";
import IMG8 from "../assets/hapi.png";
import IMG9 from "../assets/uk.png";

import "./projects.css";
import { trackExternalLink } from "../analytics";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A-Z Shop",
    stack: "MERN Stack",
    demo: "https://azshop.onrender.com/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Vivacity",
    stack: "Brand Website",
    demo: "https://vivacity.studio",
  },
  {
    id: 3,
    image: IMG6,
    title: "Pop Nouvelle",
    stack: "E-commerce",
    demo: "https://popnouvelle.com/",
  },
  {
    id: 4,
    image: IMG9,
    title: "Ukreate",
    stack: "Product Platform",
    demo: "https://ukreate.com/",
  },
  {
    id: 5,
    image: IMG7,
    title: "LikeNewOnly",
    stack: "Marketplace",
    demo: "https://likenewonly.com/",
  },
  {
    id: 6,
    image: IMG8,
    title: "Hapiklan",
    stack: "Campaign Site",
    demo: "https://hapiklan.com/",
  },
];

const Portfolio = () => {
  const handleProjectClick = (url, title) => {
    trackExternalLink(`${title} - ${url}`);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <p className="portfolio-label">Selected Work</p>
        <h2 className="portfolio-title">
          Projects that blend product thinking with engineering craft.
        </h2>
        <p className="portfolio-subtitle">
          Here are a few products and websites I have designed, built, and
          shipped.
        </p>
      </div>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, stack, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio-media">
                <img className="portfolio-img" src={image} alt={title} />
              </div>
              <div className="portfolio-content">
                <p className="project-index">{`0${id}`}</p>
                <h3>{title}</h3>
                <p className="project-stack">{stack}</p>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleProjectClick(demo, title)}
                >
                  Visit Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
