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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation('common');

  // Handle scrollbar width
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center pt-16 pb-4 px-4 sm:p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl overflow-hidden w-full max-w-[95%] md:max-w-3xl max-h-[95vh] relative"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative h-[60vh] md:h-[50vh]">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={room.images[currentImageIndex]}
                alt={t(`rooms_section.room_types.${room.type}.title`)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              />
            </AnimatePresence>

            {/* Room Size Badge */}
            {room.type !== 'outdoor' && room.size && (
              <div className="absolute top-4 left-4 z-10 bg-black/50 text-white rounded-full px-3 py-1.5 backdrop-blur-sm flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span className="text-sm font-medium">{room.size} m²</span>
              </div>
            )}

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

          <div className="p-4 md:p-6 overflow-y-auto max-h-[35vh]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t(`rooms_section.room_types.${room.type}.title`)}
            </h3>

            <div className="flex justify-center">
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

        {/* Image Gallery Modal */}
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center pt-16 pb-4 px-4 sm:p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full max-w-5xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={room.images[currentImageIndex]}
                alt={t(`rooms_section.room_types.${room.type}.title`)}
                className="w-full h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === 0 ? room.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === room.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default RoomModal;