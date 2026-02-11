import React, { useState } from 'react';
import { Power } from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import OSWindow from './OSWindow';
import CinematicAbout from './CinematicAbout';
import Contact from './Contact';

const WindowsDesktop = ({ onShutdown }) => {
  const [openWindow, setOpenWindow] = useState(null);

  // --- CONFIGURATION DES ASSETS ---
  // On garde ton image locale pour le fond (elle marchera en ligne !)
  const backgroundUrl = "/wallpaper.jpg"; 

  // Liens en ligne stables (Wikimedia) pour les icônes
  const icons = {
    user: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Windows_10_User_Icon.svg/256px-Windows_10_User_Icon.svg.png",
    skills: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Windows_11_Settings_icon.png/256px-Windows_11_Settings_icon.png",
    projects: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Windows_10_File_Explorer_Icon.svg/256px-Windows_10_File_Explorer_Icon.svg.png",
    exp: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Windows_10_Task_Manager_icon.svg/256px-Windows_10_Task_Manager_icon.svg.png",
    future: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Microsoft_Edge_logo_%282019%29.svg/256px-Microsoft_Edge_logo_%282019%29.svg.png",
    contact: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Windows_11_Mail_icon.png/256px-Windows_11_Mail_icon.png",
    trash: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Windows_11_Recycle_Bin_icon.png/256px-Windows_11_Recycle_Bin_icon.png"
  };

  const apps = [
    { id: 'about', label: 'À Propos.exe', imgSrc: icons.user, content: <CinematicAbout /> },
    { id: 'skills', label: 'Compétences.dll', imgSrc: icons.skills },
    { id: 'projects', label: 'Projets_Data.db', imgSrc: icons.projects },
    { id: 'exp', label: 'Expériences.log', imgSrc: icons.exp },
    { id: 'projection', label: 'Futur.plan', imgSrc: icons.future },
    { id: 'contact', label: 'Contact.msg', imgSrc: icons.contact, content: <Contact /> },
  ];

  return (
    <div 
      className="h-full w-full bg-cover bg-center overflow-hidden relative font-sans select-none"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Grille d'icônes sur le bureau */}
      <div className="relative z-10 p-6 grid grid-flow-col grid-rows-[repeat(auto-fill,120px)] gap-4 items-start justify-start w-fit">
        {apps.map((app) => (
          <DesktopIcon 
            key={app.id} 
            imgSrc={app.imgSrc} 
            label={app.label} 
            onClick={() => setOpenWindow(app.id)} 
          />
        ))}
        <DesktopIcon imgSrc={icons.trash} label="Corbeille" onClick={() => {}} />
      </div>

      {/* --- BARRE DES TÂCHES --- */}
      <div className="absolute bottom-0 w-full h-16 bg-[#1c1c1c]/90 backdrop-blur-2xl border-t border-white/10 flex items-center px-6 justify-between z-[100] shadow-2xl">
         <div className="flex items-center gap-4">
            <button className="p-2.5 hover:bg-white/10 rounded transition-all active:scale-90">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11V1H1V11H11ZM11 23V13H1V23H11ZM23 11V1H13V11H23ZM23 23V13H13V23H23Z" className="fill-blue-500 shadow-blue-500/50 shadow-lg"/>
              </svg>
            </button>

            <div className="h-10 w-[1px] bg-white/10 mx-2"></div>

            <div className="flex gap-2">
              {apps.slice(0, 4).map(app => (
                 <button 
                    key={app.id} 
                    onClick={() => setOpenWindow(app.id)} 
                    className="p-2 hover:bg-white/10 rounded-md transition-all relative"
                 >
                    <img src={app.imgSrc} alt="" className="w-8 h-8 drop-shadow-md" />
                    {openWindow === app.id && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-blue-400 rounded-full"></div>
                    )}
                 </button>
              ))}
            </div>
         </div>
         
         <div className="flex items-center gap-6 text-sm text-gray-200 font-medium">
            <div className="text-right leading-tight tracking-tight">
              <p className="font-semibold">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p className="text-[11px] opacity-60 font-light">{new Date().toLocaleDateString()}</p>
            </div>
            <button 
              onClick={onShutdown} 
              className="text-white/60 hover:text-red-500 hover:bg-white/5 p-2 rounded-full transition-all"
            >
                <Power size={22} />
            </button>
         </div>
      </div>

      {openWindow && (
        <OSWindow title={apps.find(a => a.id === openWindow)?.label} onClose={() => setOpenWindow(null)}>
          {apps.find(a => a.id === openWindow)?.content || (
            <div className="p-20 text-center flex flex-col items-center justify-center h-full">
              <img src={apps.find(a => a.id === openWindow)?.imgSrc} className="w-20 h-20 opacity-20 mb-4 animate-pulse" alt="" />
              <p className="text-gray-500 italic text-xl">Fichier en cours de décryptage...</p>
            </div>
          )}
        </OSWindow>
      )}
    </div>
  );
};

export default WindowsDesktop;