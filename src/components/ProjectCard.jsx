import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";

// Simple SVG Icons to avoid external dependencies
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard = ({ project, darkMode, visible, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (visible && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 }, // Reduced y distance for a smoother feel
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: delay * 0.1, // Stagger effect
          ease: "power3.out",
        }
      );
    }
  }, [visible, delay]);

  // Dynamic Theme Classes
  const themeClasses = darkMode
    ? "bg-zinc-900 border-zinc-800 shadow-black/40 hover:border-zinc-700"
    : "bg-white border-gray-200 shadow-gray-200/50 hover:border-purple-200";

  const textPrimary = darkMode ? "text-zinc-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-zinc-400" : "text-gray-600";
  
  // Tag Styles - Uniformity looks more elegant than random colors
  const tagBase = "px-2.5 py-1 text-xs font-medium rounded-full transition-colors";
  const tagTheme = darkMode
    ? "bg-zinc-800 text-zinc-300 border border-zinc-700 group-hover:border-zinc-600"
    : "bg-gray-100 text-gray-700 border border-gray-200 group-hover:border-purple-100";

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col rounded-2xl border ${themeClasses} overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full`}
    >
      {/* --- Image Section --- */}
      <div className="relative h-48 overflow-hidden">
        {/* Overlay gradient for better text visibility if needed, or just polish */}
        <div className={`absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${darkMode ? 'bg-black' : 'bg-white'}`}></div>
        
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Top Gradient to separate image from card edge slightly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between">
            <h3 className={`text-xl font-bold tracking-tight ${textPrimary}`}>
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className={`text-sm leading-relaxed line-clamp-3 ${textSecondary}`}>
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className={`${tagBase} ${tagTheme}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* --- Footer / Actions --- */}
        <div className={`mt-6 flex items-center gap-3 pt-4 border-t ${darkMode ? 'border-zinc-800' : 'border-gray-100'}`}>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all active:scale-95 border ${
                darkMode 
                  ? "border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-white" 
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
              title="View Source Code"
            >
              <GithubIcon className="h-4 w-4" />
              <span className={project.demoLink ? "hidden sm:inline" : "inline"}>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);