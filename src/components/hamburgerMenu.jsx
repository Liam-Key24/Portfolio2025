import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={toggleMenu}
        className="relative z-[100] flex flex-col justify-between w-8 h-3 focus:outline-none"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }}
          className="block w-7 h-[1px] bg-blue-500 rounded transition-all ease-in-out"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          className="block w-7 h-[1px] bg-blue-500 rounded transition-all ease-in-out"
        />
      </button>

      {/* Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-white/50 backdrop-blur-sm flex flex-col justify-center items-start p-3 gap-6 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <Link to="/" onClick={closeMenu} className="text-2xl font-normal transition">
          Home
        </Link>
        <Link to="/aboutPage" onClick={closeMenu} className="text-2xl font-normal transition">
          About
        </Link>
        <Link to="/projects" onClick={closeMenu} className="text-2xl font-normal transition">
          Projects
        </Link>
        <Link to="/contact" onClick={closeMenu} className="text-2xl font-normal transition">
          Contact
        </Link>
      </motion.div>
    </div>
  );
}