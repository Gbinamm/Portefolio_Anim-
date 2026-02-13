import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCw, ArrowLeft, ArrowRight, Search, Plus } from 'lucide-react';

// --- IMPORTS ---
import About from './About';
import Projets from './Projets'; // Référence au nouveau fichier
import Experiences from './Experiences'; 
import Contact from './Contact';

const ChromeBrowser = ({ onClose }) => {
  // Par défaut sur 'À Propos'
  const [activeSection, setActiveSection] = useState('À Propos');
  
  // Ordre modifié : Projets avant Expériences
  const navItems = [
    { id: 'À Propos', label: 'À Propos' },
    { id: 'Projets', label: 'Projets' },
    { id: 'Expériences', label: 'Expériences' },
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
          <div onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="bg-[#35363a] text-white px-4 py-2 rounded-t-lg text-[11px] min-w-[180px] flex justify-between items-center">
          <span className="truncate italic">Gabin Ammour — Portfolio</span>
          <X size={12} className="ml-2 cursor-pointer" onClick={onClose} />
        </div>
      </div>

      {/* --- BARRE D'ADRESSE --- */}
      <div className="bg-[#35363a] p-2 flex items-center gap-3 border-b border-black/20">
        <div className="flex-1 bg-[#202124] rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-gray-300">
          <Search size={14} className="text-gray-500" />
          <span className="text-green-500">https://</span>
          <span>gabin-ammour.dev/{activeSection.toLowerCase().replace(/\s/g, '-') }</span>
        </div>
      </div>

      {/* --- NAVIGATION (Design Noir sur Blanc) --- */}
      <nav className="bg-white border-b border-gray-200 py-4 px-8 flex gap-8 select-none">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer group px-1"
            onClick={() => setActiveSection(item.id)}
          >
            <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeSection === item.id ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
              {item.label}
            </span>
            {activeSection === item.id && (
              <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-black" />
            )}
          </div>
        ))}
      </nav>

      {/* --- ZONE DE CONTENU --- */}
      <div className="flex-1 bg-white overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="h-full"
          >
            {activeSection === 'À Propos' && <About />}
            {activeSection === 'Projets' && <Projets />}
            {activeSection === 'Expériences' && <Experiences />}
            {activeSection === 'Contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ChromeBrowser;