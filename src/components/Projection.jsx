import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, TrendingUp } from 'lucide-react';

const Projection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-white p-8 bg-[#0a0a0a]">
      {/* Animation de l'icône centrale */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8"
      >
        {/* Halo lumineux animé en arrière-plan */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 p-6 bg-blue-500/10 rounded-full border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <Rocket size={48} className="text-blue-400" />
        </div>
      </motion.div>

      {/* Texte et Titre */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-lg"
      >
        <h2 className="text-3xl font-black tracking-tighter mb-4 uppercase">
          Objectifs & <span className="text-blue-500">Projection</span>
        </h2>
        
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
          Calcul des trajectoires futures et analyse des prochains jalons technologiques. 
          Cette section est en cours de synchronisation avec mes ambitions en <span className="text-white font-medium">Science des Données</span>.
        </p>

        {/* Barre de progression type "Système" */}
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] tracking-[0.2em] text-blue-400 uppercase opacity-70">
            <span>Analyse du futur</span>
            <span>72%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "72%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
          <p className="text-[9px] text-gray-500 italic">
            Initialisation des modules de prédiction... OK
          </p>
        </div>
      </motion.div>

      {/* Petites cartes d'indices en bas */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {[
          { icon: Target, text: "Data Analyst" },
          { icon: TrendingUp, text: "Machine Learning" },
          { icon: Rocket, text: "IA Innovation" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (i * 0.1) }}
            className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3"
          >
            <item.icon size={18} className="text-blue-500" />
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projection;