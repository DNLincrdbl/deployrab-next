'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import Weather from './Weather';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-white pt-28 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              {t('hero.title.part1')}
              <span className="block text-[#007AFF] mt-2">{t('hero.title.part2')} </span>
              {t('hero.title.part3')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-col items-center lg:items-start gap-8">
              <button className="bg-[#007AFF] text-white px-8 py-4 rounded-xl hover:bg-[#007AFF]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#007AFF]/20">
                {t('hero.book_now')}
              </button>
              <div className="lg:hidden">
                <Weather />
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/20 to-purple-500/20 rounded-[2rem] blur-2xl" />
              <div className="relative">
                <div className="bg-white p-4 rounded-[2rem] shadow-xl">
                  <div className="overflow-hidden rounded-[1.5rem]">
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
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
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
                      <p className="text-gray-900 font-semibold">{t('hero.excellence_badge')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -bottom-20 -left-20">
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}