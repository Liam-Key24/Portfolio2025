import aboutMe from "../data/aboutMe"
import SocialLinks from "../components/socials"


export default function About() {
    return (
        <>
            <div className="h-full w-screen mb-10">
                <div className="relative h-70 lg:h-96 w-full flex justify-center items-center text-blue-300 mb-5">
                    <img
                        src={aboutMe.img}
                        alt={aboutMe.name}
                        className="absolute opacity-80 w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col md:h-80 lg:h-100 xl:h-96 w-full items-center justify-evenly">
                <p className="w-3/4 md:w-1/2 h-full p-2 flex items-center justify-center text-center text-md">{aboutMe.bio}</p>
                <SocialLinks/>
                </div>
            </div>


        </>
    )
}