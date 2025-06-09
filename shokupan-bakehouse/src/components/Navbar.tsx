import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const handleToggle = () => setNavOpen(!navOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
  ];

  const mockResults = ["Croissant", "Shokupan Loaf", "Matcha Bun", "Sandwich"];

  const filteredResults = searchQuery
    ? mockResults.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center font-normal relative w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-4 pr-10 bg-offwhite py-2 border rounded-full outline-none bg-white/80 border-black"
          />
          <AiOutlineSearch
            size={18}
            className="absolute right-3 hover:scale-110 duration-150 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          {filteredResults.length > 0 && (
            <ul className="absolute top-full mt-1 left-0 w-full bg-white border shadow-md rounded-lg z-50 overflow-hidden">
              {filteredResults.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
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
            {/* Mobile Search Bar */}
            <div className="px-4 pt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border rounded-full shadow-md outline-none"
                />
                <AiOutlineSearch
                  size={20}
                  className="absolute hover:scale-110 duration-150 right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                {filteredResults.length > 0 && (
                  <ul className="absolute top-full mt-1 left-0 w-full bg-white border shadow-md rounded-lg z-50 overflow-hidden">
                    {filteredResults.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

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
