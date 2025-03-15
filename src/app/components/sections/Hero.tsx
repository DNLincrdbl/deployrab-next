'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import Weather from './Weather';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const roomsSection = document.getElementById('about');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgroundimage.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 mt-16 lg:mt-0">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white mb-3 sm:mb-6">
              {t('hero.title.part1')}
              <span className="block text-[#007AFF] mt-1 sm:mt-2">{t('hero.title.part2')} </span>
              {t('hero.title.part3')}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6">
              <button className="hidden sm:block bg-[#007AFF] text-white w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl hover:bg-white hover:text-[#007AFF] transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg">
                {t('hero.book_now')}
              </button>
              <div className="lg:hidden backdrop-blur-sm bg-white/5 p-2 rounded-xl shadow-sm w-full max-w-[260px] mx-auto">
                <Weather />
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-1 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/30 to-purple-500/30 rounded-[2rem] blur-2xl" />
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm p-2 rounded-[2rem] shadow-sm">
                  <div className="overflow-hidden rounded-[1.8rem]">
                    <Image 
                      src="/rab-bg.jpg" 
                      alt="Luxury Villa" 
                      layout="responsive" 
                      width={800} 
                      height={600} 
                      className="w-full aspect-[4/3] object-cover object-[65%_center] hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-sm p-2 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#007AFF] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t('hero.excellence_badge')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -bottom-20 -left-20 backdrop-blur-sm bg-white/5 p-2 rounded-xl shadow-sm">
              <Weather />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center lg:mb-20">
        <motion.button
          onClick={scrollToNextSection}
          className="cursor-pointer group text-center backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 1 }
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ 
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity tracking-wide">
              {t('hero.scroll_down')}
            </span>
            <svg className="w-5 h-5 opacity-80 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}