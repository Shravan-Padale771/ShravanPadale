import React from "react";

function NavLink({ onClick, darkMode, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-base font-medium transition-colors duration-300 ${
        darkMode 
          ? 'text-gray-300 hover:text-purple-400 hover:scale-105 transition-all duration-300' 
          : 'text-gray-700 hover:text-purple-700 hover:scale-105 transition-all duration-300'
      } rounded-md`}
    >
      {children}
    </button>
  );
}

export default NavLink;