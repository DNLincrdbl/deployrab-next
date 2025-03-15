'use client';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
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

    const currentElement = document.getElementById('about-section');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const player = new Plyr(video, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen'
      ]
    });

    // Debug
    video.addEventListener('error', (e) => {
      console.error('Video error:', e);
    });

    return () => {
      player.destroy();
    };
  }, []);

  const stats = [
    { number: '10+', label: t('about_section.stats.experience') },
    { number: '1000+', label: t('about_section.stats.guests') },
    { number: '4.9', label: t('about_section.stats.rating') },
    { number: '95%', label: t('about_section.stats.returning') },
  ];

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              controls
              preload="metadata"
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                const error = e.currentTarget.error;
                console.error('Video error details:', {
                  code: error?.code,
                  message: error?.message
                });
              }}
            >
              <source src="/video/video2.mp4" type="video/mp4" />
              <source src="/video/video2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about_section.title.first')}
              <span className="text-primary block">{t('about_section.title.second')}</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t('about_section.description')}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                document.getElementById('amenities-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 group"
            >
              {t('about_section.cta')}
              <svg 
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;