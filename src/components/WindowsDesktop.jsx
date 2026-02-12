import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Power } from 'lucide-react';
import ChromeBrowser from './ChromeBrowser';

const WindowsDesktop = ({ onShutdown }) => {
  const [isChromeOpen, setIsChromeOpen] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const mouseControls = useAnimation();

  const backgroundUrl = "/wallpaper.jpg"; 

  useEffect(() => {
    const runSequence = async () => {
      // 1. Attente initiale
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 2. Déplacement vers l'icône Chrome (coordonnées ajustées pour l'icône)
      await mouseControls.start({
        x: 60,
        y: 80,
        transition: { duration: 1.8, ease: "easeInOut" }
      });

      // 3. Simulation du clic
      await mouseControls.start({
        scale: 0.85,
        transition: { duration: 0.1 }
      });
      
      // 4. Ouverture de Chrome et disparition du curseur automatique
      setIsChromeOpen(true);
      setShowCursor(false);
    };

    runSequence();
  }, [mouseControls]);

  return (
    <div 
      className={`h-full w-full bg-cover bg-center overflow-hidden relative font-sans select-none ${showCursor ? 'cursor-none' : 'cursor-default'}`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* --- CURSEUR WINDOWS NORMAL --- */}
      {showCursor && (
        <motion.div
          animate={mouseControls}
          initial={{ x: "50vw", y: "50vh" }}
          className="fixed z-[300] pointer-events-none"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))" }}
          >
            <path 
              d="M7 2V25.5L12.5 20.5L16 29L20.5 27L17 19L24.5 19L7 2Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1.5" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}

      {/* --- ICÔNE CHROME (Utilise ton image locale chrome.png) --- */}
      <div className="relative z-10 p-8">
        <div className="flex flex-col items-center gap-2 p-4 w-28">
          <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center shadow-xl border border-white/20">
            {/* Remplacement du SVG par ton image PNG */}
            <img 
              src="/chrome.png" 
              alt="Google Chrome" 
              className="w-11 h-11 object-contain" 
            />
          </div>
          <span className="text-white text-[11px] font-medium text-shadow-lg bg-black/30 px-2 py-0.5 rounded mt-1">
            Google Chrome
          </span>
        </div>
      </div>

      {/* --- BARRE DES TÂCHES --- */}
      <div className="absolute bottom-0 w-full h-14 bg-[#1c1c1c]/90 backdrop-blur-xl border-t border-white/5 flex items-center px-6 justify-between z-[100]">
         <div className="flex items-center gap-4">
            <div className="p-2 text-blue-500">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M11 11V1H1V11H11ZM11 23V13H1V23H11ZM23 11V1H13V11H23ZM23 23V13H13V23H23Z" />
               </svg>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            
            {/* Icône Chrome dans la barre des tâches */}
            <div className={`p-2 rounded relative ${isChromeOpen ? 'bg-white/5' : ''}`}>
               <img 
                 src="/chrome.png" 
                 alt="Chrome Taskbar" 
                 className="w-6 h-6 object-contain" 
               />
               {isChromeOpen && (
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
               )}
            </div>
         </div>
         
         <div className="flex items-center gap-6 text-sm text-gray-200">
            <div className="text-right leading-tight">
              <p className="font-semibold">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p className="text-[10px] opacity-60">{new Date().toLocaleDateString()}</p>
            </div>
            <Power 
              size={20} 
              className="text-white/60 hover:text-red-500 cursor-pointer transition-colors" 
              onClick={onShutdown} 
            />
         </div>
      </div>

      {isChromeOpen && (
        <ChromeBrowser onClose={() => { setIsChromeOpen(false); setShowCursor(true); }} />
      )}
    </div>
  );
};

export default WindowsDesktop;