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
    <div className="px-6 w-full h-full mx-auto">
      <div className="flex overflow-x-auto space-x-4 mb-17 scrollbar-hide items-center">
        {project.images?.map((img, index) => {
          const isVideo = img.endsWith(".mov") || img.endsWith(".mp4")

          return (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-300 ${index === 0
                ? "w-full md:w-1/2 lg:w-1/3"
                : "w-full h-full md:mt-8 md:w-1/2 md:h-[40%] lg:w-1/3 px-5"
                }`}
            >
              {isVideo ? (
                <video
                  src={img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              ) : (
                <img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          );
        })}
      </div>


      <div className="rounded-t-3xl z-20 p-8 md:p-5">
        <ProductPageShowCase project={project} />
      </div>
    </div>
  );
}
