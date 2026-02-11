import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Remplace par tes vrais IDs EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => alert("Message envoyé avec succès !"))
      .catch((error) => alert("Erreur lors de l'envoi..."));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8 text-white">
      {/* Bloc Réseaux Sociaux */}
      <div className="bg-[#111827] p-8 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Réseaux sociaux</h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-gray-400">
            <Github size={20} /> <span>github.com/votre-username</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Linkedin size={20} /> <span>linkedin.com/in/gabin-ammour</span>
          </div>
        </div>
        <a href="/cv_gabin.pdf" download className="flex items-center justify-center gap-2 bg-[#00a8ff] w-full py-3 rounded font-bold hover:brightness-110 transition">
          <FileText size={20} /> Télécharger mon CV (PDF)
        </a>
      </div>

      {/* Bloc Formulaire */}
      <div className="bg-[#111827] p-8 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input name="user_name" type="text" placeholder="Votre nom" className="w-full bg-[#1f2937] border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input name="user_email" type="email" placeholder="votre.email@example.com" className="w-full bg-[#1f2937] border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Sujet</label>
            <input name="subject" type="text" placeholder="Sujet de votre message" className="w-full bg-[#1f2937] border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="4" placeholder="Votre message (max 1000 caractères)" className="w-full bg-[#1f2937] border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-[#00a8ff] py-3 rounded font-bold hover:brightness-110 transition">Envoyer</button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Je vous répondrai dans les plus brefs délais. Vous pouvez également me contacter directement.
        </p>
      </div>
    </div>
  );
};

export default Contact;