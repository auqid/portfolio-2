import React from "react";
import IMG1 from "../assets/portfolio1.jpg";
import IMG4 from "../assets/miles.png";
import IMG5 from "../assets/viva.png";
import IMG6 from "../assets/pop.png";
import IMG7 from "../assets/like.png";
import IMG9 from "../assets/uk.png";
import IMG10 from "../assets/task.png";

import "./projects.css";
import { trackExternalLink } from "../analytics";

const data = [
  {
    id: 2,
    image: IMG5,
    title: "Vivacity",
    github: " ",
    demo: "https://vivacity.studio",
  },
  {
    id: 4,
    image: IMG6,
    title: "Pop Nouvelle",
    github: "",
    demo: "https://popnouvelle.com/",
  },
  {
    id: 7,
    image: IMG9,
    title: "Ukreate",
    github: "",
    demo: "https://ukreate.com/",
  },
  {
    id: 3,
    image: IMG4,
    title: "Milespacios",
    github: " ",
    demo: "https://milespacios-dev-e1738a9ef2f2.herokuapp.com/mexico",
  },

  {
    id: 1,
    image: IMG1,
    title: "A-Z Shop Using MERN Stack.",
    github: "https://github.com/auqid/azshop",
    demo: "https://azshop.onrender.com/",
  },
  {
    id: 5,
    image: IMG7,
    title: "LikeNewOnly",
    github: "",
    demo: "https://likenewonly-dev-788d4e524eac.herokuapp.com/",
  },
  // {
  //   id: 6,
  //   image: IMG8,
  //   title: "Hapiklan",
  //   github: "",
  //   demo: "https://hapiklan.com/",
  // },

  // {
  //   id: 8,
  //   image: IMG10,
  //   title: "femx",
  //   github: "",
  //   demo: "https://femx-dev-cdcadf58f7bb.herokuapp.com/",
  // },
  {
    id: 8,
    image: IMG10,
    title: "Task Timer Productivity",
    github: "https://github.com/auqid/timer-fullstack",
    demo: "https://frontend-production-85ff.up.railway.app/",
  },
];

const Portfolio = () => {
  const handleProjectClick = (url, title) => {
    trackExternalLink(`${title} - ${url}`);
  };

  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">My Portfolio</h2>
        <p className="portfolio-subtitle">
          Here are some of the projects I've worked on
        </p>
      </div>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio">
                <img className="portfolio-img" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn" target="blank">
                  Github
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleProjectClick(demo, title)}
                >
                  Check it out!
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
