'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface AmenityCategory {
  title: string;
  modalTitle: string;
  items: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: AmenityCategory | null;
}

const Modal = ({ isOpen, onClose, category }: ModalProps) => {
  const { t } = useTranslation('common');

  if (!category) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <span className="text-2xl">{category.modalTitle.split(' ')[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.modalTitle.split(' ')[1]}</h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
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
      modalTitle: "🏠 " + t('amenities_section.categories.stay.title'),
      items: t('amenities_section.categories.stay.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.outdoor.title'),
      modalTitle: "🌳 " + t('amenities_section.categories.outdoor.title'),
      items: t('amenities_section.categories.outdoor.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.kitchen.title'),
      modalTitle: "🍳 " + t('amenities_section.categories.kitchen.title'),
      items: t('amenities_section.categories.kitchen.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.bathroom.title'),
      modalTitle: "🚿 " + t('amenities_section.categories.bathroom.title'),
      items: t('amenities_section.categories.bathroom.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.bedroom.title'),
      modalTitle: "🛏️ " + t('amenities_section.categories.bedroom.title'),
      items: t('amenities_section.categories.bedroom.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.view.title'),
      modalTitle: "👀 " + t('amenities_section.categories.view.title'),
      items: t('amenities_section.categories.view.items', { returnObjects: true }) as string[]
    },
    {
      title: t('amenities_section.categories.languages.title'),
      modalTitle: "🗣️ " + t('amenities_section.categories.languages.title'),
      items: t('amenities_section.categories.languages.items', { returnObjects: true }) as string[]
    }
  ] as const;

  return (
    <section id="amenities" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              {t('amenities_section.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('amenities_section.subtitle')}
          </p>
        </motion.div>

        {/* Top amenities highlight */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { icon: "🅿️", text: t('amenities_section.top_amenities.free_parking') },
            { icon: "📶", text: t('amenities_section.top_amenities.free_wifi') },
            { icon: "👨‍👩‍👧‍👦", text: t('amenities_section.top_amenities.family_rooms') },
            { icon: "🚭", text: t('amenities_section.top_amenities.non_smoking') },
            { icon: "🍷", text: t('amenities_section.top_amenities.bar') },
            { icon: "🏖️", text: t('amenities_section.top_amenities.private_beach') },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel flex items-center gap-3 px-6 py-4 hover:shadow-hover transition-all duration-300"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-900 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Amenity categories as mosaic */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenityCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category)}
                className="glass-panel aspect-square p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 
                              flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{category.modalTitle.split(' ')[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-primary-500 transition-colors">
                  {category.title}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional info boxes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {[
            {
              title: t('amenities_section.internet_title'),
              description: t('amenities_section.internet_description'),
              icon: "📶"
            },
            {
              title: t('amenities_section.parking_title'),
              description: t('amenities_section.parking_description'),
              icon: "🅿️"
            }
          ].map((info, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 hover:shadow-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 
                              flex items-center justify-center">
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory}
      />
    </section>
  );
};

export default AmenitiesSection;