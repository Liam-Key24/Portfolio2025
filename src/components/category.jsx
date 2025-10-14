import { useState } from "react";
import projectData from "../data/projectData";
import ProjectGrid from "./projectGrid";

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projectData.filter(
        (project) =>
          project.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : projectData;

  return (
    <div className="flex flex-col items-center">
      {/* Category Buttons */}
      <div className="flex justify-center items-center gap-4 mb-6 w-full h-24 text-sm md:text-md lg:text-lg">
        <button onClick={() => setSelectedCategory("Graphic Design")} className="text-blue-300 hover:text-blue-500 transition-transform ease-in-out duration-300 hover:-translate-y-1">
          Graphic Design
        </button>
        <button onClick={() => setSelectedCategory("Web Development")} className="text-blue-300 hover:text-blue-500 transition-transform ease-in-out duration-300 hover:-translate-y-1">
          Web Development
        </button>
        <button onClick={() => setSelectedCategory("Photography")} className="text-blue-300 hover:text-blue-500 transition-transform ease-in-out duration-300 hover:-translate-y-1">
          Photography
        </button>
      </div>

      {/* Grid Component */}
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
