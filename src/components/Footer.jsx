import React from "react";
import SocialLink from "./SocialLink";
import { Github, Instagram, Linkedin, MailIcon, Twitter } from "lucide-react";
import { ThemeContext } from "../App";

function Footer() {
  const { darkMode } = React.useContext(ThemeContext);
  
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Shravan Padale
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            
              <SocialLink icon={<Github size={20} />} link={"https://github.com/Shravan-Padale771"} darkMode={darkMode} />
              <SocialLink icon={<Linkedin size={20} />} link={"https://www.linkedin.com/in/shravan-padale771/"} darkMode={darkMode} />
              <SocialLink icon={<Instagram size={20} />} link={"https://www.instagram.com/shravan_padale177/"} darkMode={darkMode} />
              <SocialLink icon={<MailIcon size={20} />} link={"mailto:shravanpadale1@gmail.com"} darkMode={darkMode} />
                
          </div>
          
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Shravan Padale. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;