import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, CheckCircle2, Wrench, Award } from "lucide-react";

const Experiences = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const expData = [
    {
      id: 1,
      type: "Alternance",
      title: "Data scientist Alternant",
      company: "Orange France",
      location: "Rennes",
      date: "Septembre 2025 – Aout 2026",
      summary: "Assistance à la création de tableaux de bord et d'outils pour soutenir les managers et les équipes opérationnelles.",
      missions: [
        "Conception de tableaux de bord décisionnels sur Power BI et optimisation des performances des rapports avec DAX Studio",
        "Modélisation de données pour le pilotage national",
        "Développement de systèmes d'emailing et d'envoi de SMS automatisés pilotés par scripts SQL",
        "Gestion de l'architecture de données sur GCP et développement de scripts d'automatisation en JavaScript"
      ],
      tools: ["Power BI", "Google Cloud BigQuery", "DAX", "Javascript", "SQL"],
      competencies: [
        { label: "Analyser", desc: "Cadrage des besoins métiers et modélisation de données complexes pour le pilotage national" },
        { label: "Traiter", desc: "Administration de bases de données Cloud (GCP) et implémentation de flux transactionnels SQL." },
      { label: "Développer", desc: "Automatisation de processus et systèmes de notification par scripts JavaScript." }
      ]
    },
    {
      id: 2,
      type: "Stage",
      title: "Stage Data Analyst",
      company: "Orange France (UCI Ouest)",
      location: "Rennes",
      date: "Mars – Juin 2025",
      summary: "Maintenance et conception d'outils pour la prévision et le pilotage d'opérations techniques.",
      missions: [
        "Suivi des kilomètres parcourus par les techniciens (Power BI)",
        "Système d'alertes pour les tickets Océane non clôturés",
        "Historisation des points de mutualisation (Looker Studio)",
        "Requêtes via Google BigQuery sur environnement Google Cloud"
      ],
      tools: ["Power BI", "Looker Studio", "Google Cloud BigQuery", "SQL"],
      competencies: [
        { label: "Traiter", desc: "Manipulation de données avec SQL et nettoyage." },
        { label: "Développer", desc: "Conception de composants décisionnels DAX." }
      ]
    }
  ];

  return (
    <div className="w-full min-h-full bg-white text-black font-sans relative flex flex-col">
      
      <div className="p-8 md:p-16 pb-0">
        <h1 className="text-7xl font-bold tracking-tight mb-4 text-black uppercase">Expériences</h1>
        <p className="text-black text-xl font-light italic border-l-4 border-black pl-4">
          Découvrez mon parcours professionnel au sein d'Orange France
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black mt-12">
        {expData.map((exp) => (
          <div 
            key={exp.id}
            // Le clic déclenche le zoom
            onClick={() => setSelectedExp(exp)}
            // 'group' permet de cibler tout le contenu au survol du cadre
            className="group relative cursor-pointer border-b md:border-b-0 md:even:border-l border-black bg-gray-50 overflow-hidden flex flex-col justify-center p-12 transition-colors duration-300 hover:bg-white"
          >
          
            <div className="transition-all duration-500 blur-md group-hover:blur-none select-none">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40 mb-4 block">
                {exp.type}
              </span>
              
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold leading-none mb-2">{exp.title}</h2>
                  <p className="text-xl font-medium text-black/60">{exp.company}</p>
                </div>
                <img 
                  src="public/icons/orange.png" 
                  alt="Orange Logo" 
                  className="w-12 h-12 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
              </div>

              <div className="space-y-4 mb-12 font-bold text-sm text-black">
                <div className="flex items-center gap-3"><Calendar size={18} /> {exp.date}</div>
                <div className="flex items-center gap-3"><MapPin size={18} /> {exp.location}</div>
              </div>

              <p className="text-lg leading-relaxed font-light line-clamp-3 text-black">
                {exp.summary}
              </p>

              <div className="mt-12">
                <div className="inline-block bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest group-hover:scale-105 transition-transform">
                  Cliquer pour les détails
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[700] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedExp(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:scale-110 transition-transform">
               <X size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white text-black max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-none border-t-8 border-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-12 border-b border-gray-100 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-4 text-black/40">{selectedExp.type}</h3>
                  <h2 className="text-5xl font-bold leading-tight">{selectedExp.title}</h2>
                  <p className="text-2xl font-medium mt-2">{selectedExp.company}</p>
                </div>
                <img src="public/icons/orange.png" alt="Orange" className="w-20 h-20" />
              </div>

              <div className="p-8 md:p-12 space-y-12 text-black">
                <div>
                  <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-3 border-b-2 border-black pb-2">
                    <CheckCircle2 size={24} /> Missions réalisées
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedExp.missions.map((m, i) => (
                      <li key={i} className="flex gap-3 text-base p-4 bg-gray-50 border border-gray-100 italic">
                        <span className="font-bold">—</span> {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-3 border-b-2 border-black pb-2">
                      <Wrench size={24} /> Outils et langages  utilisés
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.tools.map(t => (
                        <span key={t} className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-3 border-b-2 border-black pb-2">
                      <Award size={24} /> Compétences
                    </h4>
                    <div className="space-y-4">
                      {selectedExp.competencies.map(c => (
                        <div key={c.label} className="bg-gray-50 p-4 border border-gray-100">
                          <span className="block font-bold uppercase text-[10px] tracking-widest mb-1">{c.label}</span>
                          <p className="text-sm font-light leading-tight">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gray-50 text-center border-t border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-black/30 italic">
                  Gabin Ammour — Orange France
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Experiences;