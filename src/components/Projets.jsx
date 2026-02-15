import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ShieldCheck, Database, Terminal, FileSpreadsheet, Share2 } from 'lucide-react';

const Projets = () => {
  const [view, setView] = useState('list');

  const projetsProfessionnels = [
    {
      id: "sae-206",
      title: "SAE 2.06 - Analyse de données, reporting et datavisualisation",
      duration: "6 mois",
      tools: ["Power BI", "VBA"],
      type: "SAE"
    },
    {
      id: "sae-5-vcod",
      title: "SAE 5.VCOD.01-FA - Analyse et conception d'un outil décisionnel",
      duration: "3 mois",
      tools: ["PostgreSQL", "Supabase", "Streamlit", "Python"],
      type: "SAE"
    },
    {
      id: "sae-502",
      title: "SAE 5.02 - Migration de données vers un environnement NoSQL",
      duration: "1 mois",
      tools: ["MongoDB", "Python", "H2GIS", "Pandas"],
      type: "SAE"
    }
  ];

  const projetsPersonnels = [
    {
      id: "keep-alive-supabase",
      title: "Maintenance Automatisée Supabase",
      desc: "Script Python converti en exécutable (.exe) pour prévenir la mise en veille des projets Supabase via des pings automatisés.",
      tools: ["PYTHON", "SUPABASE", "PYINSTALLER"]
    },
    {
      id: "n8n-auto",
      title: "Automatisation avec n8n",
      desc: "Création de workflows automatisés pour la synchronisation de données et l'optimisation de processus.",
      tools: ["N8N", "JAVASCRIPT", "API"]
    },
    {
      id: "bot-discord",
      title: "Création d'un Bot discord",
      desc: "Robot pour la sécurisation d'un serveur personnel hébergé en local.",
      tools: ["JAVASCRIPT", "PHP"]
    },
    {
      id: "site-perso",
      title: "Création d'un site web",
      desc: "Site web sur des test de personnalités.",
      tools: ["JAVASCRIPT", "TYPESCRIPT", "REACT", "CSS", "NEXTJS"]
    }
  ];

  // --- VUES DÉTAILLÉES : PROJETS PROFESSIONNELS UNIQUEMENT ---
  
  const SAE206DetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">SAE 2.06 — Analyse de données, reporting et datavisualisation</h1>
      <div className="space-y-16">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed font-medium">Cette SAE s'inscrit pleinement dans le développement des compétences attendues au deuxième semestre du BUT Science des Données.</p>
          <ul className="space-y-3 border-l-4 border-black pl-6 font-bold">
            <li>• Compétence 1 : Collecter et traiter les données</li>
            <li>• Compétence 2 : Analyser statistiquement un jeu de données</li>
            <li>• Compétence 3 : Interagir avec un client (Valoriser)</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">FIGURE : EXTRAIT DU TABLEAU DE BORD POWER BI</h2>
            <div className="border-[1px] border-black rounded-2xl shadow-xl overflow-hidden">
              <img src="/icons/image-2.png" alt="Dashboard" className="w-full h-auto block rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 pt-10">
            <p className="text-sm leading-relaxed">Réalisation d'un tableau de Bord Power BI pour l'entrepôt de <span className="font-bold">NewCold à Rennes</span>.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );

  const SAE5VCODDetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">SAE 5.VCOD.01-FA — Analyse et conception d'un outil décisionnel</h1>
      <div className="space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 text-black flex items-center gap-2"><Terminal size={24} /> Démonstration Streamlit</h2>
            <div className="rounded-2xl border-[1px] border-black shadow-xl overflow-hidden bg-black">
              <video src="/icons/pj.mp4" autoPlay loop muted playsInline className="w-full h-auto block rounded-2xl">
                <source src="/icons/pj.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 pt-10">
            <h3 className="text-xl font-bold uppercase flex items-center gap-2"><Database size={20}/> Architecture Cloud</h3>
            <p className="text-sm leading-relaxed">Migration vers <span className="font-bold">PostgreSQL (Supabase)</span>.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );

  const SAE502DetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">SAE 5.02 — Migration NoSQL</h1>
      <div className="space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 text-black flex items-center gap-2"><Terminal size={24} /> Démonstration NoSQL</h2>
            <div className="rounded-2xl border-[1px] border-black shadow-xl overflow-hidden bg-black">
              <video src="/icons/pj2.mp4" autoPlay loop muted playsInline className="w-full h-auto block rounded-2xl">
                <source src="/icons/pj2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );


  const ListView = () => (
    <div className="w-full bg-white">
      <div className="relative w-full overflow-hidden min-h-[420px] flex items-center border-b border-gray-100 mb-12 text-black">
        <div className="absolute inset-0 z-0">
          <img src="/icons/image1.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
        </div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-16">
          <h1 className="text-7xl font-bold tracking-tighter mb-4 uppercase">Projets</h1>
          <p className="text-xl font-medium max-w-2xl italic border-l-4 border-black pl-4">Réalisations académiques et projets personnels d'automatisation.</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto p-8 md:p-16 pt-0 space-y-32 bg-white text-black">
        {/* SECTION PROFESSIONNELLE : CLICABLE */}
        <section className="text-center">
          <h2 className="text-2xl font-black mb-16 border-b-4 border-black inline-block uppercase italic">Projets Professionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {projetsProfessionnels.map((p) => (
              <motion.div key={p.id} onClick={() => setView(p.id)} className="border-2 border-black p-8 bg-white flex flex-col justify-between transition-all group cursor-pointer hover:bg-black">
                <div className="text-black group-hover:text-white transition-colors">
                  <h3 className="text-xl font-bold mb-4 uppercase leading-tight">{p.title}</h3>
                  <p className="text-[10px] font-black opacity-50 mb-6 uppercase tracking-widest">Durée : {p.duration}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map(t => <span key={t} className="px-3 py-1 bg-gray-100 border border-black text-black text-[9px] font-bold uppercase group-hover:bg-white/20 group-hover:text-white">{t}</span>)}
                  </div>
                </div>
                <div className="mt-8 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-black group-hover:text-white">Détails <ExternalLink size={14} /></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION PERSONNELLE : STATIQUE */}
        <section className="text-center pb-20">
          <h2 className="text-2xl font-black mb-16 border-b-4 border-black inline-block uppercase italic">Projets Personnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {projetsPersonnels.map((p) => (
              <div key={p.id} className="border-2 border-black p-10 bg-white flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase text-black">{p.title}</h3>
                  <p className="text-sm mb-8 leading-relaxed font-bold text-black">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map(t => <span key={t} className="px-4 py-1.5 bg-gray-100 border border-black text-black text-[10px] font-black uppercase">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-full bg-white font-sans overflow-y-auto">
      <AnimatePresence mode="wait">
        {view === 'list' ? <ListView key="list" /> : 
         view === 'sae-206' ? <SAE206DetailView key="details-206" /> :
         view === 'sae-5-vcod' ? <SAE5VCODDetailView key="details-vcod" /> :
         view === 'sae-502' ? <SAE502DetailView key="details-502" /> : null}
      </AnimatePresence>
    </div>
  );
};

export default Projets;