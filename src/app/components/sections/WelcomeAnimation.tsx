'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Várjuk meg, amíg az oldal betöltődik
    window.addEventListener('load', () => {
      setIsPageLoaded(true);
    });

    // Ha már betöltött, akkor állítsuk be azonnal
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setIsPageLoaded(true));
    };
  }, []);

  // Ne jelenítse meg az animációt, ha az oldal még nem töltődött be
  if (!isPageLoaded) return (
    <div className="fixed inset-0 z-50 bg-white" />
  );

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
      onAnimationComplete={() => setIsVisible(false)}
    >
      <div className="relative">
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            style={{
              left: `${i === 0 ? -20 : i === 1 ? 40 : 100}%`,
              top: `${i === 0 ? -20 : i === 1 ? 50 : 20}%`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}

        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold text-gray-900 mb-2"
          >
            Villa Laki
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl text-gray-600 text-center"
          >
            Rab
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"
          />
        </div>
      </div>
    </motion.div>
  );
}