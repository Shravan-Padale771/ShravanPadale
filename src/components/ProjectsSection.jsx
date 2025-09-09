import React from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ThemeContext } from "../App";

function ProjectsSection() {
  const { darkMode } = React.useContext(ThemeContext);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    
    {
      title: "Ellora Tea",
      description: "A Ecommerce site for Ellora Tea Company showcasing their product.",
      technologies: ["Reactjs", "Tailwind CSS", "Spring Boot", "AWS"],
      image: "/img/ElloraTea.png",
      demoLink: "https://elloratea.in/",  
      githubLink: "https://github.com/Shravan-Padale771"
    },
    {
      title: "PlanOut",
      description: "A Workout planner which takes your goals and gives you finely crafted workout.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      image: "/img/PlanOut.png",
      demoLink: "https://plan-out-ashy.vercel.app/",  
      githubLink: "https://github.com/Shravan-Padale771/PlanOut"
    },
   
    {
      title: "Memopic",
      description: "A responsive web app to save images full of memories online",
      technologies: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      image: "/img/memopic.png",
      demoLink: "https://memopic.onrender.com",  
      githubLink: "https://github.com/Shravan-Padale771/Memopic"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className={`h-1 w-20 mx-auto rounded bg-indigo-500`}></div>
            <p
              className={`mt-6 max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Here are some of my recent projects showcasing my skills and
              experience. Each project reflects my passion for creating engaging
              user experiences.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  darkMode={darkMode}
                  visible={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;