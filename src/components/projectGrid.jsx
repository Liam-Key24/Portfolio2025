import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectGrid({ projects }) {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  const handleMouseMove = (e, title) => {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY, text: title });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="columns-2 lg:columns-3 gap-1 w-full mx-1 mt-6 relative">
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
              className="w-full h-auto cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, project.title)}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
        </div>
      ))}

      {tooltip.visible && (
        <div
          className="fixed text-blue-500 font-pencerio text-9xl px-2 py-1 rounded pointer-events-none z-50"
          style={{
            top: tooltip.y + 10,
            left: tooltip.x + 10,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
