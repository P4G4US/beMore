import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug) || projects[0];
  const gallery = p.gallery || [p.image, p.image2];
  const carouselImages = gallery.slice(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setActiveImage(0);
    setShowAll(false);
  }, [p.slug]);

  useEffect(() => {
    if (showAll || carouselImages.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % carouselImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [carouselImages.length, showAll]);
  return (
    <>
      <section className="project-detail-head">
        <p className="eyebrow">
          {p.location} · {p.category}
        </p>
        <h1>{p.title}</h1>
        <div>
          <p>
            A calm, tactile home composed through natural materials, layered
            light and moments of colour.
          </p>
          <Link to="/projects">← All projects</Link>
        </div>
      </section>
      <section className="detail-image full">
        <img src={p.heroImage || gallery[0]} alt={p.title} />
      </section>
      <section className="detail-copy">
        <h2>
          Designed for
          <br />
          everyday rituals.
        </h2>
        <p>
          The spatial language balances openness with intimacy. Custom details,
          collected objects and a restrained palette create a home that feels
          settled from the first day.
        </p>
      </section>
      {showAll ? (
        <section className="detail-gallery-grid">
          {carouselImages.map((image, index) => (
            <img
              src={image}
              alt={`${p.title} interior view ${index + 2}`}
              loading="lazy"
              key={image}
            />
          ))}
        </section>
      ) : (
        <section className="detail-carousel" aria-live="polite">
          {carouselImages.map((image, index) => (
            <img
              className={index === activeImage ? "active" : ""}
              src={image}
              alt={`${p.title} interior view ${index + 2}`}
              loading={index === 0 ? "eager" : "lazy"}
              key={image}
            />
          ))}
        </section>
      )}
      {carouselImages.length > 1 && (
        <div className="detail-gallery-action">
          <button type="button" onClick={() => setShowAll((current) => !current)}>
            {showAll ? "Show slideshow" : "View all"}
          </button>
        </div>
      )}
    </>
  );
}
