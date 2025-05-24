import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";

const ProjectCard = ({ project, darkMode, visible, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (visible && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
        }
      );
    }
  }, [visible, delay]);

  // Modern color scheme
  const cardStyles = darkMode
    ? "bg-gray-900 border-gray-800"
    : "bg-white border-gray-100";
    
  const accentColor = darkMode ? "from-purple-600 to-violet-800" : "from-purple-600 to-violet-800";
  const buttonGradient = `bg-gradient-to-l ${accentColor}`;

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-3xl border overflow-hidden ${cardStyles} shadow-xl transition-all duration-500 hover:shadow-2xl`}
    >
      {/* Accent Top Border */}
      
      {/* Content Layout */}
      <div className="flex flex-col h-full">
        {/* Image and Category Tag Overlay */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className={`absolute inset-0 opacity-5 ${darkMode ? "bg-[radial-gradient(#ffffff_1px,transparent_1px)]" : "bg-[radial-gradient(#000000_1px,transparent_1px)]"}`} style={{ backgroundSize: "20px 20px" }}></div>
          
          {/* Image */}
          <div className="relative h-48  flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
              loading="lazy"
            />
          </div>
          
          {/* Floating Category Badge */}
          
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-6 space-y-4">
          {/* Title */}
          <h3 className={`text-xl font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          
          {/* Description */}
          <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {project.description}
          </p>
          
          {/* Technology Pills */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => {
              // Color mapping based on technology
              let bgColor, textColor;
              
              if (darkMode) {
                switch(tech) {
                  case "React": bgColor = "bg-cyan-950/50"; textColor = "text-cyan-400"; break;
                  case "TypeScript": bgColor = "bg-blue-950/50"; textColor = "text-blue-400"; break;
                  case "Tailwind CSS": bgColor = "bg-teal-950/50"; textColor = "text-teal-400"; break;
                  case "Recharts": bgColor = "bg-green-950/50"; textColor = "text-green-400"; break;
                  default: bgColor = "bg-gray-800"; textColor = "text-gray-300";
                }
              } else {
                switch(tech) {
                  case "React": bgColor = "bg-cyan-100"; textColor = "text-cyan-800"; break;
                  case "TypeScript": bgColor = "bg-blue-100"; textColor = "text-blue-800"; break;
                  case "Tailwind CSS": bgColor = "bg-teal-100"; textColor = "text-teal-800"; break;
                  case "Recharts": bgColor = "bg-green-100"; textColor = "text-green-800"; break;
                  default: bgColor = "bg-gray-200"; textColor = "text-gray-800";
                }
              }
              
              return (
                <span
                  key={index}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md ${bgColor} ${textColor}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        
        {/* Action Buttons - Full Width at Bottom */}
        <div className={`grid grid-cols-2 gap-px ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-3 text-center text-sm font-medium text-white ${buttonGradient} transition-all hover:opacity-90`}
            >
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-3 text-center text-sm font-medium ${darkMode ? "bg-gray-900 text-gray-300 hover:bg-gray-800" : "bg-white text-gray-700 hover:bg-gray-100"} transition-all`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);