import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCw, ArrowLeft, ArrowRight, Search, Plus } from 'lucide-react';

// --- IMPORTS DES COMPOSANTS ---
import About from './About'; // <-- CHANGÉ ICI (On utilise le nouveau fichier About)
import Contact from './Contact';
import Experiences from './Experiences'; 
import Projection from './Projection';

const ChromeBrowser = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('À Propos');
  
  const navItems = [
    { id: 'À Propos', label: 'À Propos' },
    { id: 'Expériences', label: 'Expériences' },
    { id: 'Projection', label: 'Projection' },
    { id: 'Contact', label: 'Contact' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed inset-4 md:inset-10 z-[200] bg-[#202124] rounded-lg shadow-2xl border border-white/10 flex flex-col overflow-hidden font-sans"
    >
      {/* --- BARRE D'ONGLET --- */}
      <div className="bg-[#202124] p-2 flex items-center gap-2 select-none">
        <div className="flex gap-2 px-2 mr-4">
          <div onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer hover:brightness-75" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>

        <div className="bg-[#35363a] text-white px-4 py-2 rounded-t-lg text-[11px] min-w-[180px] flex justify-between items-center">
          <span className="truncate">Gabin Ammour portefolio</span>
          <X size={12} className="ml-2 hover:bg-white/10 rounded cursor-pointer" onClick={onClose} />
        </div>
        <Plus size={16} className="text-gray-400 ml-1 hover:text-white cursor-pointer" />
      </div>

      {/* --- BARRE D'ADRESSE --- */}
      <div className="bg-[#35363a] p-2 flex items-center gap-3 border-b border-black/20">
        <div className="flex gap-3 text-gray-400 px-2">
          <ArrowLeft size={16} />
          <ArrowRight size={16} className="opacity-30" />
          <RotateCw size={16} />
        </div>
        <div className="flex-1 bg-[#202124] rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-gray-300 border border-white/5">
          <Search size={14} className="text-gray-500" />
          <span className="text-green-500">https://</span>
          <span>gabin-ammour.dev/{activeSection.toLowerCase().replace(/\s/g, '-') }</span>
        </div>
      </div>

      {/* --- NAVIGATION INTERNE --- */}
      <nav className="bg-[#0a0a0a] border-b border-white/5 py-4 px-8 flex justify-center md:justify-start gap-8 select-none">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer group px-1"
            onClick={() => setActiveSection(item.id)}
          >
            <motion.span 
              className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}
            >
              {item.label}
            </motion.span>
            
            {activeSection === item.id && (
              <motion.div 
                layoutId="underline"
                // CHANGÉ : La barre sous le menu est maintenant Ambre
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]"
              />
            )}
          </div>
        ))}
      </nav>

      {/* --- ZONE DE CONTENU --- */}
      <div className="flex-1 bg-[#0a0a0a] overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {/* CHANGÉ : On appelle le nouveau composant <About /> */}
            {activeSection === 'À Propos' && <About />}
            {activeSection === 'Expériences' && <Experiences />}
            {activeSection === 'Projection' && <Projection />}
            {activeSection === 'Contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ChromeBrowser;