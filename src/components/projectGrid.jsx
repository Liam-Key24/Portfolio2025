
import { Link } from "react-router-dom";


export default function ProjectGrid({ projects }) {
  return (
    <div className="columns-2 lg:columns-3 gap-1 w-full mx-1 mt-6">
      {projects.map((project) => (
        <div key={project.id} className="break-inside-avoid p-2">
            <Link
          key={project.id}
          to={`/project/${project.id}`}
          className="break-inside-avoid group"
        >

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />

        </Link>
        </div>
      ))}
    </div>
  );
}
