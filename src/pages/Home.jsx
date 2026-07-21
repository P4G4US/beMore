import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const heroImages = projects.slice(0, 5);

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
          {heroImages.map((project, index) => (
            <img
              className={`hero-slide${index === activeImage ? " active" : ""}`}
              src={project.image}
              alt={`${project.title} interior`}
              key={project.slug}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
          <span className="vertical-note">beMore · 2026</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">INTERIOR DESIGN STUDIO · BENGALURU</p>
          <h1>
            Spaces that feel
            <br />
            <em>like you.</em>
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
          “A home should not perform for the world. It should hold space for the
          people within it.”
        </p>
      </section>
    </>
  );
}
