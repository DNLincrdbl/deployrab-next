'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById('contact-section');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section id="contact-section" className="relative py-10 md:py-20 h-screen">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.744132928535!2d14.762799776121391!3d44.75387098543244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4763c0575c523db7%3A0x91c8f09b7ee2b72f!2sBanjol%20617A%2C%2051280%2C%20Rab%2C%20Croatia!5e0!3m2!1sen!2shu!4v1709641285407!5m2!1sen!2shu"
          className="w-full h-full"
          style={{
            border: 0,
            filter: 'contrast(1.2) opacity(0.9)'
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4">
        <div className={`bg-gray-50 backdrop-blur-sm rounded-2xl shadow-2xl p-3 md:p-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-12"> 
            
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">{t('contact_section.title')}</h2>
              <div className="space-y-2 md:space-y-6">
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-2">{t('contact_section.info.address.title')}</h3>
                  <p className="text-xs md:text-base text-gray-600">{t('contact_section.info.address.value')}</p>
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-2">{t('contact_section.info.phone.title')}</h3>
                  <a href="tel:+385123456789" className="text-xs md:text-base text-primary hover:text-primary/80 transition-colors">
                    {t('contact_section.info.phone.value')}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-2">{t('contact_section.info.email.title')}</h3>
                  <a href="mailto:info@rabvilla.com" className="text-xs md:text-base text-primary hover:text-primary/80 transition-colors">
                    {t('contact_section.info.email.value')}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-2">{t('contact_section.info.hours.title')}</h3>
                  <p className="text-xs md:text-base text-gray-600">{t('contact_section.info.hours.value')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">{t('contact_section.form.title')}</h3>
              <form className="space-y-2 md:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('contact_section.form.name_placeholder')}
                    className="w-full px-3 py-1.5 md:py-2 text-xs md:text-base text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('contact_section.form.email_placeholder')}
                    className="w-full px-3 py-1.5 md:py-2 text-xs md:text-base text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t('contact_section.form.message_placeholder')}
                    rows={2}
                    className="w-full px-3 py-1.5 md:py-2 text-xs md:text-base text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-1.5 md:py-3 rounded-lg text-xs md:text-base hover:bg-primary/90 transition-colors duration-300"
                >
                  {t('contact_section.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;