'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { GB, HU, HR } from 'country-flag-icons/react/3x2'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
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
        // setIsScrolled(true);
      } else {
        // setIsScrolled(false);
      }
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
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Villa Laki
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
              <a href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html">{t('booking')}</a>
            </button>

            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300 transition-all duration-200 text-sm"
              >
                {i18n.language === 'hu' && <HU className="w-5 h-5" />}
                {i18n.language === 'en' && <GB className="w-5 h-5" />}
                {i18n.language === 'hr' && <HR className="w-5 h-5" />}
                <MdKeyboardArrowDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
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
                className="flex items-center space-x-1.5 px-2 py-1.5 rounded-md border border-gray-200 hover:border-gray-300 transition-all duration-200"
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
              className="text-gray-700 hover:text-primary"
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
              <a href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html">{t('booking')}</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;