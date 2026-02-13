import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, BarChart3 } from 'lucide-react';

const Projets = () => {
  const mesProjets = [
    {
      title: "Analyse Statistique SAE",
      type: "Projet Académique",
      desc: "Traitement et visualisation de données complexes sous R et Python.",
      tags: ["R", "Python", "Statistiques"]
    },
    {
      title: "Dashboard Business Intelligence",
      type: "Projet Personnel",
      desc: "Création d'un tableau de bord interactif pour le suivi de KPIs.",
      tags: ["Power BI", "DAX", "SQL"]
    }
  ];

  return (
    <div className="w-full min-h-full bg-white text-black font-sans p-8 md:p-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
        <h1 className="text-7xl font-bold tracking-tight mb-6">Projets</h1>
        <p className="text-black text-xl font-light max-w-2xl mb-16 italic">
          Sélection de mes travaux en <span className="font-bold border-b-2 border-black">Data Science</span> et développement.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {mesProjets.map((p, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-md group hover:border-black transition-all"
            >
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{p.type}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-black">{p.title}</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-bold uppercase">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-gray-200 pt-6">
                <button className="flex items-center gap-2 text-xs font-bold uppercase hover:underline">
                  <Github size={14} /> Code
                </button>
                <button className="flex items-center gap-2 text-xs font-bold uppercase hover:underline">
                  <ExternalLink size={14} /> Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projets;