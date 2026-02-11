import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractivePC = ({ onEnter }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] perspective-1000">
      {/* Conteneur 3D du PC */}
      <motion.div
        initial={{ rotateX: 20, rotateY: -20, scale: 0.8, opacity: 0 }}
        animate={{ 
          rotateX: isHovered ? 10 : 15, 
          rotateY: isHovered ? -10 : -15,
          scale: 1,
          opacity: 1 
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative preserve-3d cursor-pointer"
        onClick={onEnter}
      >
        {/* ÉCRAN (L'ÉLÉMENT PRINCIPAL) */}
        <motion.div 
          className="w-[400px] h-[280px] bg-gray-900 border-8 border-gray-800 rounded-t-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,168,255,0.2)]"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Reflet sur l'écran */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10" />
          
          {/* Contenu de l'écran (Ton code vert) */}
          <div className="p-4 font-mono text-[10px] text-green-500 leading-tight">
            <p className="animate-pulse"> {'>'} SYSTEM BOOTING...</p>
            <p className="mt-2 text-blue-400"> {'>'} GABIN_AMMOUR_OS v1.0.4</p>
            <p className="mt-1"> {'>'} LOADING DATA_SCIENCES_MODULES...</p>
            <div className="mt-4 grid grid-cols-5 gap-1 opacity-50">
                {Array.from({length: 40}).map((_, i) => (
                    <div key={i} className="h-1 bg-green-900 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
            </div>
            <p className="absolute bottom-4 left-4 text-white font-bold blink">CLIQUEZ POUR ENTRER</p>
          </div>
        </motion.div>

        {/* CLAVIER / BASE */}
        <div 
          className="w-[420px] h-[300px] bg-gray-800 rounded-b-xl shadow-2xl"
          style={{ 
            transform: 'rotateX(90deg) translateY(-150px) translateZ(-140px)',
            background: 'linear-gradient(to bottom, #2d3748, #1a202c)'
          }}
        >
            {/* Simulation des touches */}
            <div className="grid grid-cols-10 gap-1 p-8 opacity-20">
                {Array.from({length: 50}).map((_, i) => (
                    <div key={i} className="h-4 bg-white rounded-sm"></div>
                ))}
            </div>
        </div>

        {/* Ombre portée au sol */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-blue-500/10 blur-[60px] rounded-full z-[-1]"></div>
      </motion.div>

      {/* Texte d'instruction */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute bottom-10 text-gray-500 tracking-[0.3em] uppercase text-xs"
      >
        Interagissez avec le terminal pour naviguer
      </motion.div>
    </div>
  );
};

export default InteractivePC;