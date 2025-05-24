import React from "react";

function SocialLink({ icon,link, darkMode }) {
  return (
    <a 
      href={link} 
      target="_blank"
      className={`p-3 rounded-full transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-700 hover:bg-indigo-600 text-white' 
          : 'bg-gray-100 hover:bg-indigo-500 hover:text-white text-gray-800'
      }`}
    >
      {icon}
    </a>
  );
}

export default SocialLink;
