'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface AmenityCategory {
  title: string;
  icon: string;
  items: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: AmenityCategory | null;
}

const Modal = ({ isOpen, onClose, category }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-[95%] max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 md:p-6 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-50 rounded-xl flex-shrink-0">
                    <span className="text-2xl md:text-3xl">{category?.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex-grow pr-8">{category?.title}</h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors -mt-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(category?.items as string[]).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <svg 
                          className="w-5 h-5 text-primary flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm md:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const AmenitiesSection = () => {
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState<AmenityCategory | null>(null);

  const amenityCategories = [
    {
      title: t('amenities_section.categories.stay.title'),
      icon: "🏠",
      items: t('amenities_section.categories.stay.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.outdoor.title'),
      icon: "🌳",
      items: t('amenities_section.categories.outdoor.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.kitchen.title'),
      icon: "🍳",
      items: t('amenities_section.categories.kitchen.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.bathroom.title'),
      icon: "🚿",
      items: t('amenities_section.categories.bathroom.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.bedroom.title'),
      icon: "🛏️",
      items: t('amenities_section.categories.bedroom.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.view.title'),
      icon: "👀",
      items: t('amenities_section.categories.view.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.languages.title'),
      icon: "🗣️",
      items: t('amenities_section.categories.languages.items', { returnObjects: true }) as string[]
    }
  ] as const;

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 md:mb-4">
          {t('amenities_section.title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16">
          {t('amenities_section.subtitle')}
        </p>

        {/* Top amenities highlight */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {[
            { icon: "🅿️", text: t('amenities_section.top_amenities.free_parking') },
            { icon: "📶", text: t('amenities_section.top_amenities.free_wifi') },
            { icon: "👨‍👩‍👧‍👦", text: t('amenities_section.top_amenities.family_rooms') },
            { icon: "🚭", text: t('amenities_section.top_amenities.non_smoking') },
            { icon: "🍷", text: t('amenities_section.top_amenities.bar') },
            { icon: "🏖️", text: t('amenities_section.top_amenities.private_beach') },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-white shadow-sm hover:shadow-md transition-shadow 
                         px-4 md:px-6 py-2 md:py-3 rounded-xl border border-gray-100"
            >
              <span className="text-xl md:text-2xl">{item.icon}</span>
              <span className="text-sm md:text-base text-gray-900 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Amenity categories as mosaic */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            {amenityCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(category)}
                className="aspect-square bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md 
                           transition-all p-2 md:p-4 flex flex-col items-center justify-center gap-2
                           cursor-pointer group border border-gray-100"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center 
                              bg-gray-50 rounded-md md:rounded-lg group-hover:bg-gray-100 transition-colors">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 text-center line-clamp-2">
                  {category.title}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional info boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-12 md:mt-16 max-w-4xl mx-auto">
          {[
            {
              title: t('amenities_section.internet_title'),
              description: t('amenities_section.internet_description')
            },
            {
              title: t('amenities_section.parking_title'),
              description: t('amenities_section.parking_description')
            }
          ].map((info, index) => (
            <div key={index} 
                 className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow
                          border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{info.title}</h3>
              <p className="text-sm md:text-base text-gray-700">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={selectedCategory !== null}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory}
        />
      </div>
    </section>
  );
};

export default AmenitiesSection;