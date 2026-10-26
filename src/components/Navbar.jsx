import React from "react";
import { siteConfig, navLinks } from "../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Dark class ko <html> pe add/remove 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-emerald-900 dark:bg-black backdrop-blur-md shadow-sm">
      <div className="w-full mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300 larian dark:text-emerald-900">
              N
            </span>
            <span className="text-xl sm:text-2xl font-extrabold  tracking-tight text-black dark:text-emerald-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-500 md:text-xl hover:text-gray-50 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button onClick={toggleDarkMode} >
            {darkMode ? (
              <i className="fa-solid fa-sun text-xl text-emerald-800  md:text-3xl"></i>
            ) : (
              <i className="fa-solid fa-moon text-xl text-gray-950 md:text-3xl"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
