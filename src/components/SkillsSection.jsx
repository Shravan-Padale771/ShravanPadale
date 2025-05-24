import React, { useEffect, useState, useRef } from "react";
import { Code } from "lucide-react";
import { ThemeContext } from "../App";

function SkillsSection() {
  const { darkMode } = React.useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  const frontendSkills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
   { name: "Tailwind CSS", logo: "img/tailwindcss.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "GSAP", logo: "img/gsap.svg" },
  { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  { name: "React Native", logo: "https://reactnative.dev/img/header_logo.svg" },
  
  

  // Frameworks
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "REST API", logo: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-api-web-development-flaticons-lineal-color-flat-icons.png" },

  // Cloud & DevOps
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  // Tools & Technologies
  
  
  
 
  { name: "Visual Studio Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  
  { name: "Postman", logo: "img/postman.webp" },
  ];
  
  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-indigo-500' : 'bg-indigo-500'}`}></div>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {frontendSkills.map((skill, index) => (
            <div 
              key={index}
              className={`
                flex flex-col items-center p-4 rounded-lg shadow-md 
                transition-all duration-300 transform hover:scale-105 h-full
                ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}
                ${visible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}
              `}
              style={{ 
                
                minHeight: '120px' // Ensures consistent height
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-3">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.parentNode.querySelector('svg')?.classList.remove('hidden');
                  }}
                />
                <Code size={24} className="hidden text-indigo-500" />
              </div>
              <span className="font-medium text-sm sm:text-base text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;