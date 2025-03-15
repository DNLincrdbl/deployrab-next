'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { GB, HU, HR } from 'country-flag-icons/react/3x2'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Set Hungarian as default language
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage('hu');
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Improved section detection
      const sections = ['home', 'about', 'rooms', 'contact'];
      let currentSection = 'home';
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { href: 'home', label: t('home') },
    { href: 'about', label: t('about') },
    { href: 'rooms', label: t('rooms') },
    { href: 'contact', label: t('contact') }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
      isScrolled || isOpen
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          <div 
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${
              isScrolled 
                ? 'text-primary' 
                : isOpen
                  ? 'text-primary'
                  : 'text-white'
            }`}
          >
            Villa Laki
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative flex items-center">
              <div 
                className={`absolute transition-all duration-500 ease-in-out ${
                  isScrolled ? 'bg-primary/10' : 'bg-white/10'
                } rounded-full -z-10`}
                style={{
                  left: `${navLinks.findIndex(l => l.href === activeSection) * 100}%`,
                  width: '100%',
                  height: '100%',
                  transform: 'translateX(0)',
                }}
              />
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.getElementById(link.href);
                    if (element) {
                      const navbarHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                      setActiveSection(link.href);
                    }
                  }}
                  className={`relative px-6 py-2 transition-colors duration-300 font-medium cursor-pointer group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary' 
                      : 'text-white'
                  } ${activeSection === link.href ? (isScrolled ? 'text-primary' : 'text-white') : ''}`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div 
                    className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10 ${
                      isScrolled ? 'bg-primary/5' : 'bg-white/5'
                    }`} 
                  />
                </button>
              ))}
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
              <a href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html">{t('booking')}</a>
            </button>

            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all duration-200 text-sm ${
                  isScrolled 
                    ? 'border border-gray-200 hover:border-gray-300 bg-white' 
                    : 'border border-white/20 bg-transparent'
                }`}
              >
                {i18n.language === 'hu' && <HU className="w-5 h-5" />}
                {i18n.language === 'en' && <GB className="w-5 h-5" />}
                {i18n.language === 'hr' && <HR className="w-5 h-5" />}
                <MdKeyboardArrowDown className={`w-4 h-4 transition-transform duration-200 ${
                  isScrolled ? 'text-gray-400' : 'text-white'
                } ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-1 w-32 rounded-md shadow-lg bg-white border border-gray-100 py-1 z-50">
                  <button
                    onClick={() => {
                      changeLanguage("hu");
                      setIsLanguageOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                      i18n.language === 'hu' ? 'bg-gray-50' : ''
                    }`}
                  >
                    <HU className="w-5 h-5" />
                    <span className="text-gray-700">Magyar</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("en");
                      setIsLanguageOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                      i18n.language === 'en' ? 'bg-gray-50' : ''
                    }`}
                  >
                    <GB className="w-5 h-5" />
                    <span className="text-gray-700">English</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("hr");
                      setIsLanguageOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                      i18n.language === 'hr' ? 'bg-gray-50' : ''
                    }`}
                  >
                    <HR className="w-5 h-5" />
                    <span className="text-gray-700">Hrvatski</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Language selector for mobile */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md transition-all duration-200 ${
                  isScrolled 
                    ? 'border border-gray-200 hover:border-gray-300' 
                    : 'border border-white/20 hover:border-white/40'
                }`}
              >
                {i18n.language === 'hu' && <HU className="w-5 h-5" />}
                {i18n.language === 'en' && <GB className="w-5 h-5" />}
                {i18n.language === 'hr' && <HR className="w-5 h-5" />}
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-1 w-32 rounded-md shadow-lg bg-white border border-gray-100 py-1 z-50">
                  <button
                    onClick={() => {
                      changeLanguage("hu");
                      setIsLanguageOpen(false);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                      i18n.language === 'hu' ? 'bg-gray-50' : ''
                    }`}
                  >
                    <HU className="w-5 h-5" />
                    <span className="text-gray-700">Magyar</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("en");
                      setIsLanguageOpen(false);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                      i18n.language === 'en' ? 'bg-gray-50' : ''
                    }`}
                  >
                    <GB className="w-5 h-5" />
                    <span className="text-gray-700">English</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("hr");
                      setIsLanguageOpen(false);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                      i18n.language === 'hr' ? 'bg-gray-50' : ''
                    }`}
                  >
                    <HR className="w-5 h-5" />
                    <span className="text-gray-700">Hrvatski</span>
                  </button>
                </div>
              )}
            </div>

            <button
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-white/80'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed top-[80px] left-0 right-0 transition-all duration-500 ease-in-out transform ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md">
            <div className="container mx-auto">
              <div className="flex flex-col py-8 px-6 space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center text-gray-600 transition-all duration-300 text-lg font-medium relative ${
                      activeSection === link.href ? 'text-primary translate-x-2' : 'hover:translate-x-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {activeSection === link.href && (
                        <div className="w-6 h-[2px] bg-primary rounded-full" />
                      )}
                      <span>{link.label}</span>
                    </div>
                  </button>
                ))}
                <div className="pt-4">
                  <a 
                    href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html" 
                    className="block w-full bg-primary text-white text-center py-4 rounded-xl text-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/10"
                  >
                    {t('booking')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;