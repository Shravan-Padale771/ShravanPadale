import React from "react";

function AboutCard({ icon, title, value, darkMode }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
      darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
    }`}>
      <div className={`p-3 rounded-full ${darkMode ? 'bg-indigo-600/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
        {icon}
      </div>
      <div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

export default AboutCard;