import { Link } from "react-router-dom";
export default function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card project-card-${index % 3}`}
    >
      <div className="image-wrap">
        <img src={project.image} alt={project.title} />
        <span>View project</span>
      </div>
      <div className="project-meta">
        <h3>{project.title}</h3>
        <p>
          {project.location} · {project.category}
        </p>
      </div>
    </Link>
  );
}
