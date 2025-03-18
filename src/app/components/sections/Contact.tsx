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
    <section id="contact-section" className="relative py-10 md:py-20 min-h-screen">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.744132928535!2d14.762799776121391!3d44.75387098543244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4763c0575c523db7%3A0x91c8f09b7ee2b72f!2sBanjol%20617A%2C%2051280%2C%20Rab%2C%20Croatia!5e0!3m2!1sen!2shu!4v1709641285407!5m2!1sen!2shu"
          className="w-full h-full"
          style={{
            border: 0,
            filter: 'contrast(1.2) opacity(0.85)'
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-0">
        <div className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-1000 max-w-4xl mx-auto ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t('contact_section.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {t('contact_section.info.address.title')}
                    </h3>
                    <p className="text-gray-600">{t('contact_section.info.address.value')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {t('contact_section.info.phone.title')}
                    </h3>
                    <a href="tel:+385123456789" className="text-primary hover:text-primary/80 transition-colors">
                      {t('contact_section.info.phone.value')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {t('contact_section.info.email.title')}
                    </h3>
                    <a href="mailto:info@villalaki.com" className="text-primary hover:text-primary/80 transition-colors">
                      {t('contact_section.info.email.value')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {t('contact_section.info.hours.title')}
                    </h3>
                    <p className="text-gray-600">{t('contact_section.info.hours.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('contact_section.form.title')}</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('contact_section.form.name_placeholder')}
                    className="w-full px-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('contact_section.form.email_placeholder')}
                    className="w-full px-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t('contact_section.form.message_placeholder')}
                    rows={4}
                    className="w-full px-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-xl text-base hover:bg-primary/90 transition-colors duration-300 font-medium"
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