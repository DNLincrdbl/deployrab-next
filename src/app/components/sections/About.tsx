'use client';
import { useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { motion } from 'framer-motion';

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation('common');

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
      ],
      autopause: true,
      resetOnEnd: true
    });

    // Load the first frame as preview
    video.addEventListener('loadeddata', () => {
      if (video.readyState >= 2) {
        video.currentTime = 0.1;
      }
    });

    return () => {
      player.destroy();
    };
  }, []);

  const stats = [
    { value: '10+', label: t('about_section.stats.experience') },
    { value: '1000+', label: t('about_section.stats.guests') },
    { value: '4.9', label: t('about_section.stats.rating') },
    { value: '70%', label: t('about_section.stats.returning') },
  ];

  return (
    <section id="about-section" className="relative py-24 overflow-hidden bg-mesh">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-50" />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] decorative-circle decorative-circle-1 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] decorative-circle decorative-circle-2 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] decorative-circle decorative-circle-3 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                {t('about_section.title.first')}
              </span>
              <span className="block mt-2 text-gray-900">
                {t('about_section.title.second')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('about_section.description')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 text-center hover:shadow-hover transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 z-10 pointer-events-none" />
            <video
              id="video-player"
              ref={videoRef}
              controls
              className="w-full aspect-video object-cover"
            >
              <source src="/video/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;