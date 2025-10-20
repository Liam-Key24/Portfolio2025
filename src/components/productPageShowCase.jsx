import ColorDisplay from "../components/colorDisplay";

export default function ProductPageShowCase({ project }) {
    if (!project) return null;

    const mainImage = project.mainImage;

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center space-y-6">

                {/* Project text and colors */}
                <div className="w-full h-full md:h-52 md:my-10 xl:my-20 flex flex-col md:flex-row justify-between items-center mb-10">

                    {/* Text column */}
                    <div
                        className={`w-screen h-fit space-y-5 md:mb-5 xl:w-1/2 ${!project.colors ? "md:mx-auto xl:mx-auto text-center" : ""
                            }`}
                    >
                        <h1 className="w-full h-full flex items-center justify-center text-xl md:text-2xl xl:text-4xl">
                            {project.title}
                        </h1>
                        <p className="text-center w-full h-fit p-5 text-xs md:text-sm lg:text-md">
                            {project.description}
                        </p>
                        <p className="text-center h-fit pb-5 text-xs xl:text-sm italic opacity-80">
                            {project.techs}
                        </p>
                    </div>

                    {/* Color display column */}
                    {project.colors && (
                        <div className="flex space-x-1 justify-evenly md:m-5 xl:w-1/2">
                            <ColorDisplay colors={project.colors} />
                        </div>
                    )}
                </div>

                {/* Main image */}
                <div className="flex justify-center items-center w-full h-full mt-5 md:mt-6">
                    {mainImage &&
                        project.category !== "Photography" &&
                        !(
                            project.category === "Graphic Design" &&
                            (
                                project.title === "Wall Art" ||
                                project.title === "Mouth Wide Open" ||
                                project.title === "Creative Brand Marketing"
                            )
                        ) && (
                            <img
                                src={mainImage}
                                alt={project.title}
                                className="w-full max-w-3xl object-cover"
                            />
                        )}
                </div>

            </div>
        </>
    );
}
