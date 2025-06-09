import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation();
  const handleToggle = () => setNavOpen(!navOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu/drinks" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-navwhite text-black font-josefin font-light shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Shokupan Logo" className="h-12 w-auto hover:scale-105 duration-250" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-lg items-center justify-center mx-auto">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative pb-1 transition duration-300
                ${location.pathname === path ? "font-semibold border-b-2 border-lightred" : "border-b-2 border-transparent"}
                hover:border-lightred`}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="max-md:hidden flex justify-center md:justify-start gap-3 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=61575979934289" aria-label="Facebook" className="hover:opacity-80 transition">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/shokupanbakehouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:opacity-80 transition">
              <RiInstagramFill />
            </a>
          </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={handleToggle}
            className="hover:cursor-pointer"
            aria-label="Toggle Menu"
          >
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-navwhite text-black"
          >

            {/* Mobile Links */}
            <ul className="flex flex-col items-center mt-6 space-y-6 pb-4 px-4">
              {navItems.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setNavOpen(false)}
                    className={`relative pb-1 transition duration-300
                      ${location.pathname === path ? "font-semibold border-b-2 border-lightred" : "border-b-2 border-transparent"}
                      hover:border-lightred`}
                  >
                    {name}
                  </Link>
                  
                </li>
              ))}
            </ul>
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
