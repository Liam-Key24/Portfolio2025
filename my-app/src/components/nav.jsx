import HamburgerMenu from "./HamburgerMenu";

export function Nav() { 
    return (
        <nav className="w-full p-4">
            <div className="flex items-center justify-between">
                <HamburgerMenu />
                <h1 className="mx-auto text-blue-400 font-thin text-5xl text-center flex-1">
                    Gabriel L. <br/>Khidyer
                </h1>
                <div style={{ width: 40 }} /> {/* Spacer to balance layout */}
            </div>
        </nav>
    );
};