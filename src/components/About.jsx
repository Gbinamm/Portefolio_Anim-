import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto p-8"
    >
      {/* Avatar Placeholder */}
      <div className="w-64 h-64 rounded-full border-4 border-blue-500 shadow-[0_0_20px_rgba(0,168,255,0.5)] overflow-hidden bg-gray-800 flex items-center justify-center">
         <span className="text-gray-500 italic">Photo ici</span>
      </div>

      <div className="flex-1 text-white">
        <h1 className="text-5xl font-bold mb-2">Gabin Ammour</h1>
        <h2 className="text-2xl text-blue-400 italic mb-6">Étudiant en BUT Sciences des Données</h2>
        
        <h3 className="text-xl font-bold mb-2 underline decoration-blue-500">Parcours</h3>
        <p className="text-gray-300 mb-6">
          Actuellement en deuxième année de BUT Sciences des Données à l'IUT de Vannes. 
          Passionné par l'analyse de données et la visualisation, je développe mes compétences en statistiques, programmation et intelligence artificielle.
        </p>

        <div className="flex gap-4 mb-6">
          {["Traiter", "Analyser", "Valoriser", "Développer"].map((tag) => (
            <span key={tag} className="px-4 py-1 border border-blue-500 rounded-full text-sm bg-blue-500/10">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Langages informatiques</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {["Python", "SQL", "DAX", "R", "Javascript", "VBA", "HTML", "CSS"].map((l) => (
            <span key={l} className="px-3 py-1 bg-gray-700 rounded text-sm">{l}</span>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-bold transition">Voir mes projets →</button>
          <button className="border border-blue-600 px-6 py-2 rounded font-bold hover:bg-blue-600/20 transition">Me contacter</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;