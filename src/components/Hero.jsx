import React, { useEffect, useRef, useContext } from "react";
import { AppWindow, Bug, Cloud, Code, Code2, CodeSquare, Database, DatabaseIcon, Github, Instagram, Linkedin, MailIcon, Twitter } from "lucide-react";
import { gsap } from "gsap";
import { ThemeContext } from "../App";
import SocialLink from "./SocialLink";
import { RiAndroidLine, RiDatabase2Line, RiJavaLine, RiJavascriptLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from "@remixicon/react";

function HeroSection() {
  const { darkMode } = useContext(ThemeContext);

  // Refs
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const floatingRef1 = useRef(null);
  const floatingRef2 = useRef(null);
  const floatingRef3 = useRef(null);
  const floatingRef4 = useRef(null);
  const floatingRef5 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(leftRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(
        [floatingRef1.current, floatingRef2.current, floatingRef3.current, floatingRef4.current, floatingRef5.current],
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // Continuous floating animations
      const floatingCards = [floatingRef1.current, floatingRef2.current, floatingRef3.current, floatingRef4.current, floatingRef5.current];
      const durations = [3, 3.5, 4,2,3.8]; // Different durations for each card
      const yMovement = 15; // Vertical movement in pixels

      floatingCards.forEach((card, index) => {
        // Set initial position
        gsap.set(card, { y: 0 });

        // Create the floating animation
        gsap.to(card, {
          y: -yMovement,
          duration: durations[index],
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: index * 0.3 // Stagger the start times
        });
      });

      // Optional: Add slight rotation for more dynamic effect
      floatingCards.forEach((card, index) => {
        gsap.to(card, {
          rotation: 2,
          duration: durations[index] + 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 py-28 lg-py-0 lg:px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute right-0 bottom-0 w-full h-full transition-opacity duration-500 ${
            darkMode ? "opacity-10" : "opacity-20"
          }`}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={darkMode ? "#4f46e5" : "#818cf8"} />
                <stop offset="100%" stopColor={darkMode ? "#7e22ce" : "#a855f7"} />
              </linearGradient>
            </defs>
            <path fill="url(#gradient)" d="M0,0 L100,0 L100,100 C80,95 60,85 40,80 C20,75 0,75 0,70 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={leftRef}>
            <span
              className={`inline-block px-4 py-1 rounded-full text-md font-medium mb-6 ${
                darkMode ? "bg-indigo-800/30 text-indigo-100" : "bg-indigo-200 text-indigo-900"
              }`}
            >
              Full-Stack Web & App Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bringing Ideas To Life Through{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Creative Code
              </span>
            </h1>
            <p className={`text-lg mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              I'm a Full-Stack Web and App Developer passionate about building responsive, user-friendly interfaces backed by scalable and efficient backend systems and enhanced UI animations using Framer Motion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-transparent hover:bg-gray-800 text-white border border-gray-700"
                    : "bg-transparent hover:bg-gray-100 text-gray-900 border border-gray-300"
                }`}
              >
                Contact Me
              </button>
            </div>
            <div className="mt-8">
                <div className="flex space-x-4">
                  <SocialLink icon={<Github size={20} />} link={"https://github.com/Shravan-Padale771"} darkMode={darkMode} />
                  <SocialLink icon={<Linkedin size={20} />} link={"https://www.linkedin.com/in/shravan-padale771/"} darkMode={darkMode} />
                  <SocialLink icon={<Instagram size={20} />} link={"https://www.instagram.com/shravan_padale177/"} darkMode={darkMode} />
                  <SocialLink icon={<MailIcon size={20} />} link={"mailto:shravanpadale1@gmail.com"} darkMode={darkMode} />
                </div>
              </div>
          </div>

          {/* Right Content */}
          <div ref={rightRef} className="relative">
            <div
              style={{
                background: darkMode
                  ? 'radial-gradient(ellipse at center, #4c1d95, #6b21a8, #a366cc)'
                  : ' radial-gradient(ellipse at center, #4f46e5, #a5b4fc, #e0e7ff)'
              }}

              className={`aspect-square rounded-full flex items-center justify-center`}
            >
              <div
                className={`w-5/6 h-5/6 rounded-full overflow-hidden border-4 ${
                  darkMode ? "border-indigo-300" : "border-indigo-500"
                }`}
              >
                <img
                  src={darkMode ? "img/mk.png" : "img/mk3.png"}
                  alt="Developer"
                  className="w-full h-full object-contain object-center "
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div
              ref={floatingRef1}
              className={`absolute md:top-14 top-0 left-5 p-4 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <RiJavascriptLine size={24} className="mx-auto mb-1 text-indigo-500" />
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div
              ref={floatingRef2}
              className={`absolute bottom-5 md:right-16 right-0 p-4 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <RiDatabase2Line size={24} className="mx-auto mb-1 text-purple-500" />
              <span className="text-sm font-medium">Database</span>
            </div>

            <div
              ref={floatingRef3}
              className={`absolute md:bottom-64 md:-right-2 -bottom-16  lg:-right-10 right-48 p-4 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <RiNodejsLine size={24} className="mx-auto mb-1 text-purple-500" />
              <span className="text-sm font-medium">Expressjs</span>
            </div>
            
            

            <div
              ref={floatingRef4}
              className={`absolute bottom-20 -left-5 p-4 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <RiReactjsLine size={24} className="mx-auto mb-1 text-purple-500" />
              <span className="text-sm font-medium">Reactjs</span>
            </div>

            <div
              ref={floatingRef5}
              className={`absolute top-1 right-0 md:right-8 p-4 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <RiTailwindCssLine size={24} className="mx-auto mb-1 text-purple-500" />
              <span className="text-sm font-medium">TailwindCss</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;