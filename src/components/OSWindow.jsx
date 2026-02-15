import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const OSWindow = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-4xl bg-[#1a1b26] border border-gray-700 rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gray-800/80 p-3 flex justify-between items-center border-b border-gray-700">
          <span className="text-white font-sans text-sm font-medium ml-2">GabinOS :// {title}</span>
          <button onClick={onClose} className="p-1 hover:bg-red-500/20 rounded transition-colors text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="p-0 max-h-[80vh] overflow-y-auto bg-[#0a0a0a] font-sans">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default OSWindow;