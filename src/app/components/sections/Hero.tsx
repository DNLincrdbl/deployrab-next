'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import Weather from './Weather';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-[5]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/backgroundimage.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="transition-all duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[6] opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-[7] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 mt-16 lg:mt-0">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                  {t('hero.title.part1')}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500 mt-2">
                  {t('hero.title.part2')}
                </span>
                <span className="block text-white mt-2">{t('hero.title.part3')}</span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              className="flex flex-col items-center lg:items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a 
                href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html"
                className="hidden sm:block relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative px-8 py-4 bg-black rounded-xl leading-none flex items-center">
                  <span className="text-gray-100 group-hover:text-white transition duration-300 text-lg">
                    {t('hero.book_now')}
                  </span>
                </button>
              </a>
              <div className="lg:hidden backdrop-blur-xl bg-white/10 p-4 rounded-2xl shadow-elegant w-full max-w-[300px] mx-auto border border-white/10">
                <Weather />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:block flex-1 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-3xl shadow-elegant border border-white/10">
                  <div className="overflow-hidden rounded-2xl">
                    <Image 
                      src="/rab-bg.jpg" 
                      alt="Luxury Villa" 
                      layout="responsive" 
                      width={800} 
                      height={600} 
                      className="w-full aspect-[4/3] object-cover object-[65%_center] hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/10 p-4 rounded-2xl shadow-elegant border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
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
            
            <motion.div 
              className="hidden lg:block absolute -bottom-20 -left-20 backdrop-blur-xl bg-white/10 p-4 rounded-2xl shadow-elegant border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <Weather />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-[45%] -translate-x-1/2 z-[7] w-full flex justify-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">{t('hero.scroll_down')}</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}