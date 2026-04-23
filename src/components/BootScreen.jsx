import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootScreen = ({ onFinish, onSkip }) => {
  const [lines, setLines] = useState([]);

  const bootSequence = [
    "> POWER ON SELF TEST (POST)... OK",
    "> INITIALIZING GABIN PORTFOLIO OS KERNEL v1",
    "> LOADING SYSTEM HIVE...",
    "> MOUNTING ROOT FILESYSTEM (C:) - NVMe SSD 1TB",
    "> STARTING SYSTEM SERVICES...",
    "> CONNECTING TO DATA_SCIENCE_DOMAIN...",
    "> APPLYING USER POLICIES...",
    "> START GABIN AMMOUR PORTEFOLIO..."
  ];

  useEffect(() => {
    let charIndex = 0;
    let lineIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        onSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const titleInterval = setInterval(() => {
      if (typeof setCenteredText === 'function') {
        setCenteredText(fullTitle.slice(0, charIndex));
      }
      charIndex++;
      if (typeof fullTitle !== 'undefined' && charIndex > fullTitle.length) clearInterval(titleInterval);
    }, 80);

    const logsInterval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(logsInterval);
        setTimeout(onFinish, 1000);
      }
    }, 400);

    return () => {
      clearInterval(titleInterval);
      clearInterval(logsInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onFinish, onSkip]);

  return (
    /* J'ai changé cursor-none en cursor-default ici */
    <div className="h-screen w-screen bg-black text-green-500 p-8 md:p-20 font-mono text-sm md:text-xl overflow-hidden relative crt cursor-default">
      
      <button 
        onClick={onSkip}
        className="absolute bottom-10 right-10 z-50 px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 text-xs md:text-sm uppercase tracking-widest opacity-60 hover:opacity-100"
        style={{ 
          pointerEvents: 'auto', 
          cursor: 'pointer' 
        }}
      >
        [ Passer (Espace) ]
      </button>

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div>
          {lines.map((line, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-2 text-shadow-glow"
            >
              {line}
            </motion.p>
          ))}
          <span className="blink inline-block w-3 h-5 bg-green-500 ml-1"></span>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_90%)]"></div>
    </div>
  );
};

export default BootScreen;