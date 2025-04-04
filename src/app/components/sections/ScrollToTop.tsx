'use client';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isModalOpen = () => {
    // Ellenőrizzük mindkét típusú modal meglétét
    const amenitiesModal = document.querySelector('.fixed.inset-0.bg-black\\/40');
    const roomModal = document.querySelector('.fixed.inset-0.bg-black\\/50');
    return !!(amenitiesModal || roomModal);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      // Ha bármelyik modal nyitva van, ne jelenjen meg a gomb
      if (isModalOpen()) {
        setIsVisible(false);
        return;
      }
      
      // Egyébként a szokásos görgetési logika
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Hozzáadunk egy MutationObserver-t, hogy figyelje a DOM változásait (modal megjelenését/eltűnését)
    const observer = new MutationObserver(toggleVisibility);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    // Ellenőrizzük, hogy van-e nyitott modal
    if (isModalOpen()) {
      return; // Ha van modal, nem görgetünk
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/80 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
