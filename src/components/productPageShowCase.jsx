// productPageShowCase.jsx
export default function ProductPageShowCase({ project }) {
    if (!project) return null;

    const mainImage = project.images[0]
    return (
        <>
            <div className="flex flex-col items-center justify-center p-5 ">
                <div className="w-full md:h-52 md:my-10 xl:my-20 flex flex-col md:flex-row justify-between items-center ">

                <div className="w-full h-fit md:mb-5 xl:w-1/2">
                    <h1 className="w-full h-10 flex items-center justify-center text-xl md:text-2xl xl:text-4xl">{project.title}</h1>
                    <p className="text-center h-fit p-5 text-sm md:text-md x:text-xl">{project.description}</p>
                    <p className="text-center h-fit pb-5 text-sm xl:text-md italic opacity-80">{project.techs}</p>
                </div>
                <div className="flex space-x-1 justify-evenly md:m-5 xl:w-1/2">
                    <div className="h-30 w-20 md:h-40 md:w-30 xl:h-52 xl:w-40   bg-blue-300"></div>
                    <div className="h-30 w-20 md:h-40 md:w-30 xl:h-52 xl:w-40 bg-blue-400"></div>
                    <div className="h-30 w-20 md:h-40 md:w-30 xl:h-52 xl:w-40 bg-blue-500"></div>
                    <div className="h-30 w-20 md:h-40 md:w-30 xl:h-52 xl:w-40 bg-blue-600"></div>
                </div>
                </div>

                <div className="flex justify-center items-center w-full h-full mt-5 md:mt-6">
                    {mainImage && (
                        <img
                            src={mainImage}
                            alt={project.title}
                            className="w-full max-w-3xl object-cover"
                        />)}

                </div>

            </div>


        </>
    );
}
