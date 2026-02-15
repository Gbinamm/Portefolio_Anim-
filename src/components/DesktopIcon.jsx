import React from 'react';

const DesktopIcon = ({ imgSrc, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 transition-colors group w-24 cursor-default focus:bg-white/20 focus:outline-none"
    >
      <img src={imgSrc} alt={label} className="w-12 h-12 object-contain drop-shadow-md" />
      <span className="text-white text-xs font-sans text-center text-shadow-sm px-1 py-0.5 rounded group-hover:bg-blue-600/80 group-focus:bg-blue-600/80 line-clamp-2">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;