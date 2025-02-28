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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WelcomeAnimation />
      {isAnimationComplete && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}