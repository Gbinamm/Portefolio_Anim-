import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCircle2 } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const targetUsername = "Gabin Ammour Portfolio";
  const targetPassword = "••••••••••••"; 

  useEffect(() => {
    let uIdx = 0;
    let pIdx = 0;

    // Un seul intervalle gère tout pour éviter les doublons
    const timer = setInterval(() => {
      if (uIdx <= targetUsername.length) {
        setUsername(targetUsername.slice(0, uIdx));
        uIdx++;
      } else if (pIdx <= targetPassword.length) {
        setPassword(targetPassword.slice(0, pIdx));
        pIdx++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(true);
          setTimeout(onLogin, 2000);
        }, 800);
      }
    }, 70);

    return () => clearInterval(timer); // Sécurité pour arrêter le chrono
  }, [onLogin]);

  // ATTENTION : C'est bien "return" et non "retour"
  return (
    <div className="h-screen w-screen bg-[url('https://images.hdqwalls.com/download/windows-10-blue-stock-4k-mm-3840x2160.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white font-sans relative overflow-hidden">
      {/* Overlay pour l'effet de flou Windows */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[5px] z-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        <UserCircle2 size={120} className="text-gray-300 mb-8 opacity-80" strokeWidth={1} />
        
        <h2 className="text-4xl font-light mb-10 h-12">{username}</h2>

        {!isLoading ? (
          <div className="flex flex-col gap-4 w-80">
            <div className="bg-black/40 border border-white/20 p-3 flex items-center rounded-sm">
              <input 
                type="password" 
                value={password}
                readOnly
                placeholder="Mot de passe"
                className="bg-transparent outline-none flex-1 placeholder-gray-400 text-2xl tracking-widest"
              />
              <div className="bg-white/20 p-1 rounded ml-2">
                <ArrowRight size={20} className="text-gray-300" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-8">
             <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-4"></div>
             <p className="text-xl font-light tracking-widest">Bienvenue</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 left-10 z-10 text-left text-shadow-sm">
          <p className="text-7xl font-thin mb-2">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
          <p className="text-2xl font-light">
            {new Date().toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
      </div>
    </div>
  );
};

export default LoginScreen;