import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">OUR WORK</p>
        <h1>
          Homes with
          <br />
          <em>a point of view.</em>
        </h1>
      </section>
      <section className="project-grid projects-page">
        {projects.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.slug} />
        ))}
      </section>
    </>
  );
}
