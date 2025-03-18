'use client';
import { useState, useEffect } from 'react';
import WelcomeAnimation from '../sections/WelcomeAnimation';
import Navbar from '../navigation/Navbar';

export default function AnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Amikor az animáció befejeződik
    const animationTimer = setTimeout(() => {
      setIsAnimationComplete(true);
      // Görgetés a tetejére
      window.scrollTo(0, 0);
      // Rövid késleltetés után jelenítjük meg a tartalmat
      setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
    }, 3500);

    return () => {
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <>
      <WelcomeAnimation />
      <div className={`transition-opacity duration-300 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {isAnimationComplete && (
          <>
            <Navbar />
            {children}
          </>
        )}
      </div>
    </>
  );
}