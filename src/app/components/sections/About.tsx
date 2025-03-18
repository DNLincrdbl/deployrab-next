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

    // Load the first frame as preview
    video.addEventListener('loadeddata', () => {
      if (video.readyState >= 2) {
        video.currentTime = 0.1;
      }
    });

    const player = new Plyr(video, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen'
      ],
      autopause: true,
      resetOnEnd: true
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <section id="about-section" className="py-20 md:pb-20 pb-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about_section.title.first')}
            <span className="text-primary block mt-2">{t('about_section.title.second')}</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {t('about_section.description')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="aspect-video">
              <video
                ref={videoRef}
                controls
                preload="metadata"
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/video2.mp4" type="video/mp4" />
                <source src="/video/video2.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors inline-block"
            >
              {t('about_section.book_now')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;