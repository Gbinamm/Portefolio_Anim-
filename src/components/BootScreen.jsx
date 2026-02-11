import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootScreen = ({ onFinish }) => {
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

  // On stocke les intervals dans des variables pour pouvoir les couper
  const titleInterval = setInterval(() => {
    // Utiliser la version "slice" basée sur l'index local est plus sûr
    setCenteredText(fullTitle.slice(0, charIndex));
    charIndex++;
    if (charIndex > fullTitle.length) clearInterval(titleInterval);
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

  // NETTOYAGE : Si on quitte l'écran, on arrête les chronos
  return () => {
    clearInterval(titleInterval);
    clearInterval(logsInterval);
  };
}, []);
  return (
    <div className="h-screen w-screen bg-black text-green-500 p-8 md:p-20 font-mono text-sm md:text-xl overflow-hidden relative crt cursor-none">
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