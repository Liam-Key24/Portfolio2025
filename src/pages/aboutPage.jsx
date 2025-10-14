import { Link } from "react-router-dom"
import aboutMe from "../data/aboutme"


export default function About() {
    return (
        <>
            <div className="h-screen w-screen">
                <div className="relative h-80 w-full flex justify-center items-center text-white mb-5">
                    <img
                        src={aboutMe.img}
                        alt={aboutMe.name}
                        className="absolute opacity-50 w-full h-full object-cover"
                    />
                    <h1 className="relative z-10 font-semibold text-4xl">{aboutMe.name}</h1>
                </div>
                <div className="flex flex-col md:h-80 lg:h-100 xl:h-96 w-full items-center justify-evenly">
                <p className="w-full h-fit p-2 flex items-center justify-center text-center text-md">{aboutMe.bio}</p>

                <div className="flex w-full h-fit p-2 justify-center items-center gap-5 mt-10"> 
                     <img src="/assets/icons/github-sign.png " alt="GitHub Icon" />
                     <img src="/assets/icons/linkedin.png" alt="Linkedin Icon" />
                     <img src="/assets/icons/pinterest-logo.png" alt="Pinterest Icon" />
                </div>
                </div>
            </div>


        </>
    )
}