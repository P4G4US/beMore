import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug) || projects[0];
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
        <img src={p.image} alt={p.title} />
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
      <section className="detail-image inset">
        <img src={p.image2} alt={`${p.title} interior detail`} />
      </section>
    </>
  );
}
