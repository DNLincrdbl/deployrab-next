'use client';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Footer = () => {
  const { t } = useTranslation();
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToSection = (sectionId: string) => {
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

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-12 md:mb-6">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-2">
            <h3 className="text-2xl md:text-base font-semibold text-gray-900">Villa Laki</h3>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-base md:text-sm">
                Banjol 41, 51280 Rab, Croatia
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@villalaki.com" className="text-base md:text-sm hover:text-primary transition-colors">
                info@villalaki.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-5 h-5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+385123456789" className="text-base md:text-sm hover:text-primary transition-colors">
                +385 12 345 6789
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:space-y-2">
            <h3 className="text-2xl md:text-base font-semibold text-gray-900">{t('footer.quick_links')}</h3>
            <nav className="flex flex-col gap-4 md:gap-2">
              <button 
                onClick={() => scrollToSection('rooms')}
                className="text-left text-base md:text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {t('footer.rooms')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-base md:text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {t('footer.location')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-base md:text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {t('footer.contact')}
              </button>
            </nav>
          </div>

          {/* Social & Booking */}
          <div className="space-y-8 md:space-y-3">
            <div>
              <h3 className="text-2xl md:text-base font-semibold text-gray-900 mb-6 md:mb-2">{t('footer.follow_us')}</h3>
              <div className="flex gap-4 md:gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 md:w-6 md:h-6 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 md:w-6 md:h-6 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                    <path d="M16.5 8.5C16.5 8.22386 16.2761 8 16 8C15.7239 8 15.5 8.22386 15.5 8.5C15.5 8.77614 15.7239 9 16 9C16.2761 9 16.5 8.77614 16.5 8.5Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-base font-semibold text-gray-900 mb-6 md:mb-2">{t('footer.book_now')}</h3>
              <a 
                href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 md:px-4 md:py-1.5 rounded-2xl md:rounded-md hover:bg-primary/90 transition-colors text-base md:text-sm"
              >
                <svg className="w-6 h-6 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Booking.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-4 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2">
            <p className="text-base md:text-[11px] text-gray-500 text-center md:text-left">© {currentYear} Villa Laki. {t('footer.all_rights')}</p>
            <div className="flex gap-8 md:gap-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-base md:text-[11px] text-gray-500 hover:text-primary transition-colors"
              >
                {t('footer.privacy')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-base md:text-[11px] text-gray-500 hover:text-primary transition-colors"
              >
                {t('footer.terms')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 