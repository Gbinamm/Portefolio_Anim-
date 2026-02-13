import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => alert("Message envoyé avec succès !"))
      .catch((error) => alert("Erreur lors de l'envoi..."));
  };

  return (
    <div className="w-full min-h-full bg-white text-black font-sans p-8 md:p-16 relative">
      
      {/* --- EN-TÊTE CENTRÉE --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto mb-20 text-center"
      >
        <h1 className="text-7xl font-bold tracking-tight mb-6 text-black">Contact</h1>
        <p className="text-black text-xl font-light max-w-2xl mx-auto italic">
          N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.
        </p>
      </motion.div>

      {/* --- LE GRAND CADRE GRIS PÂLE --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-md p-10 md:p-16 shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* COLONNE GAUCHE : RÉSEAUX & CV */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 border-b-2 border-black pb-2 text-black text-center md:text-left">Réseaux sociaux</h2>
              <div className="space-y-6">
                <a 
                  href="https://github.com/Gbinamm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group justify-center md:justify-start"
                >
                  <div className="p-3 bg-white border border-gray-200 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Github size={20} className="text-black group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-black underline decoration-transparent group-hover:decoration-black transition-all">GitHub</span>
                </a>

                {/* --- LIEN CORRIGÉ ICI --- */}
                <a 
                  href="https://www.linkedin.com/in/gabin-ammour-351a662a3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group justify-center md:justify-start"
                >
                  <div className="p-3 bg-white border border-gray-200 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Linkedin size={20} className="text-black group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-black underline decoration-transparent group-hover:decoration-black transition-all">LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 border-b-2 border-black pb-2 text-black text-center md:text-left">Documents</h2>
              <a 
                href="/cv_gabin.pdf" 
                download 
                className="flex items-center justify-center gap-3 bg-black text-white w-full py-4 text-xs font-black uppercase tracking-[0.2em] border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
              >
                <FileText size={18} /> Télécharger mon CV (PDF)
              </a>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 border-b-2 border-black pb-2 text-black text-center md:text-left">Message</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black">Nom complet</label>
                <input 
                  name="user_name" 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full bg-white border border-gray-200 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black">Adresse Email</label>
                <input 
                  name="user_email" 
                  type="email" 
                  placeholder="votre.email@exemple.com" 
                  className="w-full bg-white border border-gray-200 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Votre message ici..." 
                  className="w-full bg-white border border-gray-200 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors resize-none" 
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group flex items-center justify-center gap-3 w-full bg-white border-2 border-black py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
              >
                Envoyer <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </motion.div>

      <footer className="mt-24 text-center">
        <p className="text-[10px] text-black font-bold uppercase tracking-[0.3em] opacity-30">
          Gabin Ammour — Portfolio — 2026
        </p>
      </footer>
    </div>
  );
};

export default Contact;