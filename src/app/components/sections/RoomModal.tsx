'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface Room {
  id: number;
  type: string;
  price: string;
  size: string;
  capacity: string;
  images: string[];
  amenities: string[];
}

interface RoomModalProps {
  room: Room;
  onClose: () => void;
}

const RoomModal = ({ room, onClose }: RoomModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation('common');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl overflow-hidden w-full max-w-[95%] md:max-w-3xl max-h-[90vh] relative"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative aspect-video">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={room.images[currentImageIndex]}
                alt={t(`rooms_section.room_types.${room.type}.title`)}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => 
                      prev === 0 ? room.images.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => 
                      prev === room.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dot Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {room.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-4 md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t(`rooms_section.room_types.${room.type}.title`)}
            </h3>
            <p className="text-gray-600 mb-4">
              {t(`rooms_section.room_types.${room.type}.description`)}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {room.amenities.includes('terrace') && (
                <div className="flex items-center gap-2" title={t('rooms_section.amenities.terrace')}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                    />
                  </svg>
                  <span>{t('rooms_section.amenities.terrace')}</span>
                </div>
              )}
              {room.amenities.includes('sea_view') && (
                <div className="flex items-center gap-2" title={t('rooms_section.amenities.sea_view')}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                    />
                  </svg>
                  <span>{t('rooms_section.amenities.sea_view')}</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-end">
              <a 
                href="https://www.booking.com/hotel/hr/villa-laki-rab-rab.hu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-colors"
              >
                {t('rooms_section.modal.book_now')}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RoomModal;