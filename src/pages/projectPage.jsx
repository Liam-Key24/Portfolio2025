import { useParams } from "react-router-dom";
import projectData from "../data/projectData";
import ProductPageShowCase from "../components/productPageShowCase";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center mt-10">Project not found</p>;
  }

  return (
    <div className="px-6 w-full mx-auto">
      <div className="flex overflow-x-auto space-x-4 mb-17 scrollbar-hide items-center">
        {project.images?.map((img, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all duration-300 ${index === 0
                ? "w-full h-screen"
                : "w-full h-full mt-28 md:mt-8  md:w-[40%] md:h-[40%] px-10 "
              }`}
          >
            <img
              src={img}
              alt={`${project.title} ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="relative -mt-20 md:-mt-16 rounded-t-3xl z-20 p-8 md:p-5">
        <ProductPageShowCase project={project} />
      </div>
      
    </div>
   
  );
}

