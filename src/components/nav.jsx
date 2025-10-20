import { Link } from 'react-router-dom';
import HamburgerMenu from "./hamburgerMenu";


export default function Nav() {
    return (
        <nav className="w-full p-2 my-2 md:p-4 md:my-10 md:px-2 inline-flex items-center justify-evenly">
                <HamburgerMenu className="md:hidden"/>

                <div className="w-1/3 hidden md:flex justify-center items-center gap-5 md:text-lg lg:text-2xl cursor-pointer ">
                    <Link to='/aboutPage' className='transition-transform ease-in-out duration-300 hover:-translate-y-1 text-blue-300 hover:text-blue-500 md:text-sm'>
                        About
                    </Link>
                    <Link to='/contactPage' className='transition-transform ease-in-out duration-300 hover:-translate-y-1 text-blue-300 hover:text-blue-500 md:text-sm'>
                        Contact
                    </Link>
                </div>

                <Link to='/' className='w-full flex justify-center items-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-blue-400'>
            
                <h1> Gabriel L. Khidyer </h1>
                
                </Link>

                <div className="md:w-48 lg:w-1/3" /> {/* Spacer to balance layout */}
            
        </nav>
    );
};



