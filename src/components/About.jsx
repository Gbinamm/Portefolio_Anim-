import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Award, X } from "lucide-react";

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const languages = ["Python", "SQL", "DAX", "Langage R", "Javascript", "VBA", "HTML", "CSS","SAS"];
  const tools = ["Power BI", "Excel", "Postgres","BigQuery","Github/gitlab", "Oracle", "MySQL", "Talend", "RStudio", "n8n","Microsoft Defender","Qlik Sense"];
  
  const timeline = [
    {
      date: "2023 - 2026",
      title: "BUT Sciences des Données",
      location: "IUT de Vannes",
      desc: "Spécialisation en analyse statistique et visualisation de données - Parcours Visualisation et Conception d'Outils Décisionnels (VCOD)"
    },
    {
      date: "2021 - 2023",
      title: "Baccalauréat Scientifique",
      location: "Lycée général Saint-Paul à Vannes",
      desc: "Spécialité Mathématiques et Physique Chimie avec l'option euro anglais."
    }
  ];

  const certifications = [
    {
      id: 1,
      title: (
        <span>
          Data Science Methodology - <strong className="font-black text-black">IBM</strong>
        </span>
      ),
      issuer: "Coursera",
      img: "/certif/dbm.jpeg", 
      code: "T1KEOKKA1GC8"
    },
    {
      id: 2,
      title: (
        <span>
          Introduction to Cybersécurity Essantials - <strong className="font-black text-black">IBM</strong>
        </span>
      ),
      issuer: "Coursera",
      img: "/certif/Itce.jpeg",
      code: "81WXAPCITGTT"
    }, 
     {
      id: 3,
      title: (
        <span>
          Project Planning and Machine Learning - <strong className="font-black text-black">University of Colorado Boulder</strong>
        </span>
      ),
      issuer: "Coursera",
      img: "/certif/ppml.png", 
      code: "LEN5E60WJT4P"
    },
  ];

  return (
    <div className="w-full min-h-full bg-white text-black font-sans relative">
      
      {/* --- BANDEAU D'EN-TÊTE ULTRA NET (STYLE WADOUX) --- */}
      <div className="relative w-full overflow-hidden min-h-[420px] flex items-center border-b border-gray-100">
        {/* Image de fond : Flou supprimé pour une netteté totale */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/icons/image1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover blur-none opacity-30 scale-100"
          />
          {/* Dégradé pour fondre l'image dans le blanc pur avant les compétences */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="text-center md:text-left flex-1">
            <h1 className="text-7xl font-bold tracking-tighter mb-2 text-black">
              Gabin Ammour
            </h1>
            <h2 className="text-xl text-black font-bold tracking-wide uppercase mb-8 px-4 py-1 bg-white/50 backdrop-blur-sm border border-black/5 rounded-full inline-block">
              Étudiant en BUT Sciences des Données
            </h2>
            
            <p className="text-black text-lg leading-relaxed font-medium max-w-2xl">
              Actuellement en troisième année de <span className="font-black border-b-2 border-black">BUT Sciences des Données</span> à l'IUT de Vannes.
              Je concentre mes travaux sur l'analyse et la visualisation de données, en approfondissant quotidiennement mes compétences en statistiques, programmation, cybersécurité et intelligence artificielle.
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-20">
        
        {/* SECTION COMPÉTENCES */}
        <div className="mb-24 space-y-6">
          <h3 className="text-xs font-black tracking-[0.3em] uppercase text-black">Compétences</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["Traiter", "Analyser", "Valoriser", "Développer"].map((tag) => (
              <span key={tag} className="px-6 py-2 text-xs font-bold border-2 border-black bg-white text-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GRILLE TECHNIQUE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight uppercase text-black flex items-center gap-3 border-b-2 border-black pb-3">
              <Code2 size={24} /> Langages informatiques
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((l) => (
                <span key={l} className="px-4 py-2 bg-gray-50 text-black text-sm font-bold border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default">
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight uppercase text-black flex items-center gap-3 border-b-2 border-black pb-3">
              <Database size={24} /> Logiciels et Outils
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 bg-gray-50 text-black text-sm font-bold border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PARCOURS ACADÉMIQUE AVEC CADRES GRIS */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold tracking-tight uppercase mb-16 text-black border-l-4 border-black pl-4">
            Parcours Académique
          </h3>
          <div className="relative border-l-2 border-black ml-4 space-y-12">
            {timeline.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="relative pl-10">
                <div className="absolute -left-[11px] top-8 w-5 h-5 bg-black rounded-full z-10 border-4 border-white" />
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-md hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-black/40 tracking-widest mb-2 block uppercase">{item.date}</span>
                  <h4 className="text-2xl font-bold text-black mb-1">{item.title}</h4>
                  <p className="text-black font-semibold text-sm mb-4 italic">{item.location}</p>
                  <p className="text-black text-base leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION CERTIFICATIONS */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold tracking-tight uppercase mb-16 text-black flex items-center gap-3">
            <Award size={28} /> Certifications Professionnelles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certifications.map((cert) => (
              <div key={cert.id} className="group relative cursor-pointer overflow-hidden border-2 border-black bg-white transition-all shadow-sm hover:shadow-xl" onClick={() => setSelectedCert(cert)}>
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img src={cert.img} alt="Aperçu" className="w-full h-full object-cover transition-all duration-700 blur-[2px] group-hover:blur-0 scale-100 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                     <div className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">Zoom</div>
                  </div>
                </div>
                <div className="p-6 border-t-2 border-black bg-white">
                   <p className="text-xs text-black/40 font-bold uppercase tracking-widest mb-2">{cert.issuer}</p>
                   <h4 className="text-lg font-bold text-black leading-tight">{cert.title}</h4>
                   <p className="text-[10px] text-black/60 mt-4 font-mono font-bold uppercase tracking-widest">ID: {cert.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL ZOOM */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] bg-black/95 backdrop-blur-md flex items-center justify-center p-8 md:p-24" onClick={() => setSelectedCert(null)}>
            <button className="absolute top-10 right-10 text-white/70 hover:text-white hover:scale-110 transition-all z-[610]"><X size={40} /></button>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative max-w-3xl w-full border border-white/20 bg-zinc-900 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img src={selectedCert.img} alt="Détail" className="w-full h-auto" />
              <div className="p-8 flex justify-between items-center bg-black border-t border-white/10 text-white">
                 <div>
                    <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                    <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Délivré par {selectedCert.issuer}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] text-white/30 font-bold uppercase font-mono">ID Vérifié</p>
                    <p className="text-lg font-black tracking-tighter">{selectedCert.code}</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default About;