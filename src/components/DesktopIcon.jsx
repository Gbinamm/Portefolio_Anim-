import React from 'react';

// Accepte maintenant imgSrc au lieu de Icon
const DesktopIcon = ({ imgSrc, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 transition-colors group w-24 cursor-default focus:bg-white/20 focus:outline-none"
    >
      {/* Affiche l'image de l'icône */}
      <img src={imgSrc} alt={label} className="w-12 h-12 object-contain drop-shadow-md" />
      {/* Label avec un fond au survol/focus, style Windows */}
      <span className="text-white text-xs font-sans text-center text-shadow-sm px-1 py-0.5 rounded group-hover:bg-blue-600/80 group-focus:bg-blue-600/80 line-clamp-2">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;