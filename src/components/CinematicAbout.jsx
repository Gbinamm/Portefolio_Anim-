import React from 'react';
import { motion } from 'framer-motion';

const CinematicAbout = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl my-8 border border-gray-800/50 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 p-8 md:p-16 max-w-4xl backdrop-blur-md bg-black/20 rounded-2xl border border-white/5"
      >
        <h1 className="text-5xl font-bold mb-4">Gabin <span className="text-blue-400">Ammour</span></h1>
        <p className="text-gray-300 text-lg">Étudiant en BUT Sciences des Données - Passionné par l'IA et l'analyse de données.</p>
      </motion.div>
    </div>
  );
};

export default CinematicAbout;