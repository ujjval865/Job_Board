import React, { useState, useEffect } from "react";
import { siteConfig, navLinks } from "../data/data";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode
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
    <header className="sticky top-0 z-50 w-full bg-emerald-900 shadow-sm backdrop-blur-md dark:bg-black">
      <div className="mx-auto w-full px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="larian text-4xl transition-transform duration-300 group-hover:scale-110 dark:text-emerald-900">
              N
            </span>

            <span className="text-xl font-extrabold tracking-tight text-black sm:text-2xl dark:text-emerald-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 transition-colors duration-200 hover:text-white md:text-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Login */}
            <Link
              to="/login"
              className="rounded-lg border border-emerald-400 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:px-4"
            >
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 sm:px-4"
            >
              Sign Up
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="transition-transform duration-300 hover:scale-110"
            >
              {darkMode ? (
                <i className="fa-solid fa-sun text-xl text-emerald-400 md:text-2xl"></i>
              ) : (
                <i className="fa-solid fa-moon text-xl text-white md:text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
