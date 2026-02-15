import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ShieldCheck, Database, Terminal, FileSpreadsheet, Share2, Zap } from 'lucide-react';

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

  // --- VUE DÉTAILLÉE : MAINTENANCE SUPABASE (KEEP-ALIVE) ---
  const KeepAliveDetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">Maintenance Automatisée Supabase</h1>
      <div className="space-y-16">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed font-medium">Développement d'un utilitaire "Keep-Alive" conçu pour contourner la mise en veille automatique des instances gratuites Supabase après une période d'inactivité.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 italic border-l-4 border-black pl-6 font-bold">
            <p>Objectif : Maintenir la disponibilité des bases de données 24h/24 sans intervention manuelle.</p>
            <p>Solution : Requêtes ultra-légères (Pings) automatisées vers les tables de contact.</p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 flex items-center gap-2"><Terminal size={24} /> Architecture du Script</h2>
            <div className="p-8 bg-gray-50 border-[1px] border-black rounded-2xl shadow-xl">
               <pre className="text-xs font-mono overflow-x-auto">
                 {`# Simulation d'activité légère\nsupabase.table("contact_messages")\n  .select("id")\n  .limit(1)\n  .execute()`}
               </pre>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 pt-10">
            <h3 className="text-xl font-bold uppercase flex items-center gap-2"><Zap size={20}/> Performance</h3>
            <p className="text-sm leading-relaxed">Le script est compilé en un exécutable **.exe** via **PyInstaller**, permettant un lancement rapide en arrière-plan sans nécessiter d'installation Python sur la machine hôte.</p>
            <h3 className="text-xl font-bold uppercase flex items-center gap-2"><ShieldCheck size={20}/> Sécurité</h3>
            <p className="text-sm leading-relaxed">Utilisation des clés publiques (Anon Key) et respect des politiques RLS pour garantir qu'aucune donnée sensible ne soit exposée lors du ping.</p>
          </div>
        </section>

        <section className="bg-gray-50 border-2 border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-8 uppercase">Apports et Évolution</h2>
          <p className="text-sm font-medium">Ce projet m'a permis de maîtriser la compilation d'outils Python pour Windows et de mettre en place des stratégies de maintenance préventive pour mes infrastructures Cloud gratuites.</p>
        </section>
      </div>
    </motion.div>
  );

  // VUE DÉTAILLÉE : SAE 2.06 
  const SAE206DetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">SAE 2.06 — Analyse de données, reporting et datavisualisation</h1>
      <div className="space-y-16">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed font-medium">Cette SAE s'inscrit pleinement dans le développement des compétences attendues au deuxième semestre du BUT Science des Données, notamment :</p>
          <ul className="space-y-3 border-l-4 border-black pl-6 font-bold">
            <li>• Compétence 1 : Collecter et traiter les données (traiter)</li>
            <li>• Compétence 2 : Analyser statistiquement un jeu de données (analyser)</li>
            <li>• Compétence 3 : Interagir avec un client ou un utilisateur (Valoriser)</li>
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
            <p className="text-sm leading-relaxed">L'expression du besoin du client se trouvait dans la réalisation d'un tableau de Bord Power BI, pour facilité les déplacement dans un entrepôt de <span className="font-bold">NewCold à Rennes</span>. À gauche, des filtres dynamiques permettent de sélectionner les clients. Au centre et à droite, des graphiques synthétisent les analyses.</p>
          </div>
        </section>

        <section className="bg-gray-50 border-2 border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <h2 className="text-2xl font-bold uppercase">Liens entre compétences et réalisation</h2>
          <p className="text-sm">Apprentissage de l'importance d'utiliser un modèle statistique pour la réalisation d'un outil pertinent.</p>
          <ul className="space-y-2 text-sm italic">
            <li>• <span className="font-bold">Power BI</span>, pour la visualisation</li>
            <li>• <span className="font-bold">VBA</span>, pour le nettoyage</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">Apports personnels</h2>
            <p className="text-sm leading-relaxed">Ce projet m'a offert une vision globale du cycle de la donnée, de la capture brute à la prise de décision. J'ai appris à traduire des besoins métiers logistiques complexes en indicateurs de performance (KPI) visuels et exploitables immédiatement par les équipes de terrain.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">Impact sur mon parcours</h2>
            <p className="text-sm leading-relaxed">C'est cette expérience concrète qui a scellé mon choix pour le parcours <span className="font-bold">VCOD</span>. La capacité à rendre la donnée "parlante" via des outils décisionnels automatisés est devenue le pilier central de mon projet professionnel.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );

  // VUE DÉTAILLÉE : SAE 5.VCOD.01-FA 
  const SAE5VCODDetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">SAE 5.VCOD.01-FA — Analyse et conception d'un outil décisionnel</h1>
      <div className="space-y-16">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed font-medium">Ce projet visait à remplacer un système Excel par une architecture Cloud PostgreSQL sécurisée.</p>
          <ul className="space-y-3 border-l-4 border-black pl-6 font-bold">
            <li>• Compétence : Développement d'interface (Streamlit)</li>
            <li>• Compétence : Administration BDD (Supabase)</li>
            <li>• Compétence : Cybersécurité (RLS)</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 text-black flex items-center gap-2"><Terminal size={24} /> Démonstration de l'outil Streamlit</h2>
            <div className="rounded-2xl border-[1px] border-black shadow-xl overflow-hidden bg-black">
              <video src="/icons/pj.mp4" autoPlay loop muted playsInline className="w-full h-auto block rounded-2xl"><source src="/icons/pj.mp4" type="video/mp4" />Votre navigateur ne supporte pas la vidéo.</video>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 pt-10 text-black">
            <h3 className="text-xl font-bold uppercase flex items-center gap-2"><Database size={20}/> Architecture Cloud</h3>
            <p className="text-sm leading-relaxed">Migration vers <span className="font-bold">PostgreSQL</span> pour permettre un accès concurrentiel sécurisé et une centralisation des flux de données.</p>
            <h3 className="text-xl font-bold uppercase flex items-center gap-2"><ShieldCheck size={20}/> Sécurisation</h3>
            <p className="text-sm leading-relaxed">Mise en place rigoureuse de politiques de <span className="font-bold">Row Level Security</span> pour compartimenter l'accès aux données sensibles par utilisateur.</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">Apports personnels</h2>
            <p className="text-sm leading-relaxed">Ce projet a renforcé ma maîtrise du développement "Full-Stack" orienté data. J'ai dû jongler entre la rigueur de l'administration système/BDD et la créativité nécessaire pour concevoir une interface utilisateur intuitive sous Streamlit.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">Impact sur mon parcours</h2>
            <p className="text-sm leading-relaxed">Cette immersion m'a confirmé l'importance cruciale de la cybersécurité dans l'ingénierie des données. Cela m'a poussé à approfondir mes connaissances sur la gestion des droits et l'intégrité des données en environnement Cloud.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );

  // VUE DÉTAILLÉE : SAE 5.02 
  const SAE502DetailView = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto p-8 md:p-16 text-black bg-white">
      <button onClick={() => setView('list')} className="flex items-center gap-2 mb-12 group text-sm font-black uppercase tracking-widest text-black hover:gap-4 transition-all"><ArrowLeft size={20} strokeWidth={3} /> Retour aux projets</button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-8 border-black pb-6 uppercase text-black">SAE 5.02 — Migration de données vers un environnement NoSQL</h1>
      <div className="space-y-16">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed font-medium">Migration d'une base relationnelle vers MongoDB pour optimiser les performances analytiques et la flexibilité du schéma.</p>
          <ul className="space-y-3 border-l-4 border-black pl-6 font-bold">
            <li>• Compétence : Processus ETL complexe (Python/Pandas)</li>
            <li>• Compétence : Modélisation documentaire (NoSQL)</li>
            <li>• Compétence : Agrégation et pipelines MongoDB</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 text-black flex items-center gap-2"><Terminal size={24} /> Démonstration NoSQL</h2>
            <div className="rounded-2xl border-[1px] border-black shadow-xl overflow-hidden bg-black">
              <video src="/icons/pj2.mp4" autoPlay loop muted playsInline className="w-full h-auto block rounded-2xl"><source src="/icons/pj2.mp4" type="video/mp4" />Votre navigateur ne supporte pas la vidéo.</video>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 pt-10 text-black">
            <h3 className="text-xl font-bold uppercase flex items-center gap-2"><Share2 size={20}/> Dénormalisation</h3>
            <p className="text-sm leading-relaxed">Transition stratégique d'un modèle en tables vers un modèle documentaire. Utilisation de structures imbriquées pour réduire les jointures coûteuses et améliorer les temps de réponse.</p>
          </div>
        </section>

        {/* AJOUT DES SECTIONS APPORTS/IMPACT POUR LA COHÉRENCE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">Apports personnels</h2>
            <p className="text-sm leading-relaxed">J'ai acquis une compréhension profonde des différences fondamentales entre le SQL et le NoSQL. La manipulation de données massives avec Pandas pour alimenter un environnement documentaire m'a permis de perfectionner mes compétences en ingénierie ETL.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">Impact sur mon parcours</h2>
            <p className="text-sm leading-relaxed">Ce projet a ouvert ma réflexion sur l'évolutivité des systèmes. Savoir choisir la technologie de stockage appropriée selon le besoin (vitesse de lecture vs intégrité stricte) est désormais un atout majeur dans ma boîte à outils de Data Scientist.</p>
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
        {view === 'list' && <ListView key="list" />}
        {view === 'sae-206' && <SAE206DetailView key="details-206" />}
        {view === 'sae-5-vcod' && <SAE5VCODDetailView key="details-vcod" />}
        {view === 'sae-502' && <SAE502DetailView key="details-502" />}
        {view === 'keep-alive-supabase' && <KeepAliveDetailView key="details-keep-alive" />}
      </AnimatePresence>
    </div>
  );
};

export default Projets;