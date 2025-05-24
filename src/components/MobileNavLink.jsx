import React from "react";

function MobileNavLink({ onClick, darkMode, children }) {
  return (
    <button
      onClick={onClick}
      className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 ${
        darkMode 
          ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      } rounded-md`}
    >
      {children}
    </button>
  );
}

export default MobileNavLink;