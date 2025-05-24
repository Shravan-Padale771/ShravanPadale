import React, { useEffect, useState, useContext, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { ThemeContext } from "../App";

const sections = ["home", "about", "skills", "projects", "contact"];

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized scroll function to prevent unnecessary recreations
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 w-full z-20 transition-all duration-300 md:px-2 px-6 ${
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
            {sections.map((section) => (
              <NavLink 
                key={section} 
                onClick={() => scrollToSection(section)} 
                darkMode={darkMode}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-300"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-300"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth unmounting */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className={`md:hidden overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <MobileNavLink 
                  key={section} 
                  onClick={() => scrollToSection(section)} 
                  darkMode={darkMode}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </MobileNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default React.memo(Navbar);