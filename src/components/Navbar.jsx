import React, { useEffect, useRef, useState, useContext } from "react";
import { Moon, Sun } from "lucide-react";
import gsap from "gsap";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { ThemeContext } from "../App";


function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef(null);

  // Animate on mount (slide down)
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, []);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 w-full z-20 transition-all duration-300 md:px-2 px-0 ${
        scrolled
          ? `${darkMode ? "bg-gray-900/95 shadow-gray-800/20" : "bg-white/95 shadow-gray-200/20"} shadow-lg backdrop-blur-sm`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Shravan Padale
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center lg:space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <NavLink key={section} onClick={() => scrollToSection(section)} darkMode={darkMode}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-300"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-300"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                darkMode ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <MobileNavLink key={section} onClick={() => scrollToSection(section)} darkMode={darkMode}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </MobileNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
