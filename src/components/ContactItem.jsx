import React from "react";

function ContactItem({ icon, title, value, darkMode }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
        {icon}
      </div>
      <div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

export default ContactItem;