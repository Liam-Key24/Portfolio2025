import { Link } from "react-router-dom"
import aboutMe from "../data/aboutme"

export default function About() {
    return (
        <>
            <div className="bg-blue-400 h-screen w-screen">
                <div className="relative h-80 w-full flex justify-center items-center text-white mb-5">
                    <img
                        src={aboutMe.img}
                        alt={aboutMe.name}
                        className="absolute opacity-50 w-full h-full object-cover"
                    />
                    <h1 className="relative z-10 font-semibold text-4xl">{aboutMe.name}</h1>
                </div>
                <p className="w-full h-fit p-2 flex items-center justify-center text-center text-md">{aboutMe.bio}</p>

                <div className="flex w-full h-fit p-2 justify-center items-center gap-5 mt-10"> 
                    <img src="./public/assets/github.svg" alt="github" className="w-10 h-10 text-white"/>
                    <img src="./public/assets/linkedin.svg" alt="linkedin" className="w-10 h-10 text-white"/>
                    <img src="./public/assets/pinterest.svg" alt="pinterest" className="w-10 h-10 text-white"/>
                </div>
            </div>


        </>
    )
}