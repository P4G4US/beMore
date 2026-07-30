import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import logoImage from "../../asset/finallogo.png";
import heroImage1 from "../../asset/starting block/bemore-08.jpg";
import heroImage2 from "../../asset/starting block/bemore-16.jpg";
import heroImage3 from "../../asset/starting block/bemore-42.jpg";

const heroImages = [
  { image: heroImage1, title: "Interior Design" },
  { image: heroImage2, title: "Interior Design" },
  { image: heroImage3, title: "Interior Design" },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-image" aria-label="Featured interior projects">
          {heroImages.map((item, index) => (
            <img
              className={`hero-slide${index === activeImage ? " active" : ""}`}
              src={item.image}
              alt={`${item.title} interior`}
              key={index}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
          <span className="vertical-note">beMore · 2026</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">INTERIOR DESIGN STUDIO · BENGALURU</p>
          <h1>
            Crafting timeless spaces with
            <br />
            <em>intentional design.</em>
          </h1>
          <p className="hero-text">
            We create soulful interiors shaped by how people live, gather, pause
            and belong.
          </p>
        </div>
      </section>
      <section className="projects-home">
        <div className="section-head">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Our Projects</h2>
          </div>
          <Link to="/projects">See all ↗</Link>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="quote-band">
        <p>
          “Design that grows with you.”
        </p>
      </section>
    </>
  );
}
