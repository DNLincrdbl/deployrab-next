'use client';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-50" />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] decorative-circle decorative-circle-1 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] decorative-circle decorative-circle-2 translate-x-1/3 translate-y-1/3 opacity-10" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Villa Laki Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              Villa Laki
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about_section.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t('footer.quick_links')}</h3>
            <nav className="space-y-3">
              {[
                { id: 'rooms', label: t('rooms') },
                { id: 'about', label: t('about') },
                { id: 'contact', label: t('contact') }
              ].map((link, index) => (
                <motion.button 
                  key={index}
                  whileHover={{ x: 6 }}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-600 hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Rooms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t('rooms')}</h3>
            <nav className="space-y-3">
              <motion.button 
                whileHover={{ x: 6 }}
                onClick={() => scrollToSection('rooms')}
                className="block text-gray-600 hover:text-primary-500 transition-colors"
              >
                {t('rooms')}
              </motion.button>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t('contact')}</h3>
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: t('contact_section.info.address.value'),
                  href: null
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: t('contact_section.info.email.value'),
                  href: `mailto:${t('contact_section.info.email.value')}`
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: t('contact_section.info.phone.value'),
                  href: `tel:${t('contact_section.info.phone.value')}`
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 text-gray-600 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="hover:text-primary-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-12 mt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">
              © {currentYear} Villa Laki. {t('footer.all_rights')}
            </p>
            <div className="flex gap-8">
              {[
                { id: 'about', label: t('footer.privacy') },
                { id: 'about', label: t('footer.terms') }
              ].map((link, index) => (
                <motion.button 
                  key={index}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 