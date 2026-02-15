import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootScreen from './components/BootScreen';
import LoginScreen from './components/LoginScreen'; 
import WindowsDesktop from './components/WindowsDesktop';

function App() {
  const [systemState, setSystemState] = useState('booting');

  const handleShutdown = () => {
    setSystemState('booting');
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {systemState === 'booting' && (
          <motion.div
            key="boot"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <BootScreen onFinish={() => setSystemState('login')} />
          </motion.div>
        )}

        {systemState === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {/* Quand la connexion est faite, on passe au DESKTOP */}
            <LoginScreen onLogin={() => setSystemState('desktop')} />
          </motion.div>
        )}

        {systemState === 'desktop' && (
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <WindowsDesktop onShutdown={handleShutdown} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;