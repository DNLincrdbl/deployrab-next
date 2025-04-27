'use client';
import React, { useState } from 'react';
import RoomModal from './RoomModal';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

interface Room {
  id: number;
  type: string;
  price: string;
  size: string;
  capacity: string;
  images: string[];
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    type: "room1",
    price: "45000",
    size: "50",
    capacity: "4",
    images: [
      '/Room1/Lakatos_Banjol-031.jpg',
      '/terasz1.jpg',
      '/Room1/Lakatos_Banjol-032.jpg',
      '/Room1/Lakatos_Banjol-033.jpg',
      '/Room1/Lakatos_Banjol-034.jpg',
      '/Room1/Lakatos_Banjol-035.jpg',
      '/Room1/Lakatos_Banjol-036.jpg',
      '/Room1/Lakatos_Banjol-037.jpg',
      '/Room1/Lakatos_Banjol-038.jpg',
      '/Room1/Lakatos_Banjol-039.jpg',
      '/Room1/Lakatos_Banjol-040.jpg',
      '/Room1/Lakatos_Banjol-041.jpg',
      '/Room1/Lakatos_Banjol-042.jpg',
      '/Room1/Lakatos_Banjol-043.jpg',
      '/Room1/Lakatos_Banjol-044.jpg',
      '/Room1/Lakatos_Banjol-045.jpg',
      '/Room1/Lakatos_Banjol-046.jpg',
      '/Room1/Lakatos_Banjol-047.jpg',
      '/Room1/Lakatos_Banjol-048.jpg',
      '/Room1/Lakatos_Banjol-049.jpg',
      '/Room1/Lakatos_Banjol-050.jpg',
      '/Room1/Lakatos_Banjol-051.jpg',
      '/Room1/Lakatos_Banjol-052.jpg',
      '/Room1/Lakatos_Banjol-053.jpg',
      '/Room1/Lakatos_Banjol-054.jpg',
      '/Room1/Lakatos_Banjol-055.jpg',
      '/Room1/Lakatos_Banjol-056.jpg',
    ],
    amenities: ['king_size', 'ac', 'wifi', 'tv', 'minibar', 'safe', 'terrace']
  },
  {
    id: 2,
    type: "room2",
    price: "65000",
    size: "55",
    capacity: "4",
    images: [
      '/Room2/Lakatos_Banjol-070.jpg',
      '/terasz1.jpg',
      '/Room2/Lakatos_Banjol-071.jpg',
      '/Room2/Lakatos_Banjol-072.jpg',
      '/Room2/Lakatos_Banjol-073.jpg',
      '/Room2/Lakatos_Banjol-074.jpg',
      '/Room2/Lakatos_Banjol-075.jpg',
      '/Room2/Lakatos_Banjol-076.jpg',
      '/Room2/Lakatos_Banjol-077.jpg',
      '/Room2/Lakatos_Banjol-078.jpg',
      '/Room2/Lakatos_Banjol-079.jpg',
    ],
    amenities: ['bedrooms_2', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine', 'terrace']
  },
  {
    id: 3,
    type: "room3",
    price: "42000",
    size: "17",
    capacity: "2",
    images: [
      '/Room3/Lakatos_Banjol-127.jpg',
      '/Room3/Lakatos_Banjol-116.jpg',
      '/Room3/Lakatos_Banjol-117.jpg',
      '/Room3/Lakatos_Banjol-118.jpg',
      '/Room3/Lakatos_Banjol-119.jpg',
      '/Room3/Lakatos_Banjol-120.jpg',
      '/Room3/Lakatos_Banjol-121.jpg',
      '/Room3/Lakatos_Banjol-122.jpg',
      '/Room3/Lakatos_Banjol-123.jpg',
      '/Room3/Lakatos_Banjol-124.jpg',
      '/Room3/Lakatos_Banjol-125.jpg',
      '/Room3/Lakatos_Banjol-126.jpg',
    ],
    amenities: ['queen_size', 'ac', 'wifi', 'mini_kitchen', 'tv']
  },
  {
    id: 4,
    type: "room4",
    price: "85000",
    size: "23",
    capacity: "4",
    images: [
      '/Room4/Lakatos_Banjol-101.jpg',
      '/Room4/Lakatos_Banjol-102.jpg',
      '/Room4/Lakatos_Banjol-103.jpg',
      '/Room4/Lakatos_Banjol-104.jpg',
      '/Room4/Lakatos_Banjol-105.jpg',
      '/Room4/Lakatos_Banjol-106.jpg',
      '/Room4/Lakatos_Banjol-107.jpg',
      '/Room4/Lakatos_Banjol-108.jpg',
      '/Room4/Lakatos_Banjol-109.jpg',
      '/Room4/Lakatos_Banjol-110.jpg',
      '/Room4/Lakatos_Banjol-111.jpg',
      '/Room4/Lakatos_Banjol-112.jpg',
      '/Room4/Lakatos_Banjol-113.jpg',
      '/Room4/Lakatos_Banjol-114.jpg'
    ],
    amenities: ['bedrooms_3', 'bathrooms_2', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine', 'balcony', 'sea_view']
  },
  {
    id: 5,
    type: "room5",
    price: "55000",
    size: "23",
    capacity: "4",
    images: [
      '/Room5/villalaki5.jpg',
      '/Room5/villalaki5.1.jpg',
      '/Room5/villalaki5.3.jpg'
    ],
    amenities: ['garden', 'balcony', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine', 'sea_view']
  },
  {
    id: 6,
    type: "room6",
    price: "95000",
    size: "23",
    capacity: "3",
    images: [
      '/Room6/Lakatos_Banjol-100.jpg',
      '/Room6/Lakatos_Banjol-088.jpg',
      '/Room6/Lakatos_Banjol-089.jpg',
      '/Room6/Lakatos_Banjol-090.jpg',
      '/Room6/Lakatos_Banjol-091.jpg',
      '/Room6/Lakatos_Banjol-092.jpg',
      '/Room6/Lakatos_Banjol-093.jpg',
      '/Room6/Lakatos_Banjol-094.jpg',
      '/Room6/Lakatos_Banjol-095.jpg',
      '/Room6/Lakatos_Banjol-096.jpg',
      '/Room6/Lakatos_Banjol-097.jpg',
      '/Room6/Lakatos_Banjol-098.jpg',
      '/Room6/Lakatos_Banjol-099.jpg'
    ],
    amenities: ['jacuzzi', 'bedrooms_2', 'luxury_bath', 'kitchen', 'ac', 'wifi', 'tv']
  },
  {
    id: 7,
    type: "room7",
    price: "35000",
    size: "17",
    capacity: "2",
    images: [
      '/Room7/szoba7.jpg',
      '/Room7/villalaki3.jpg',
      '/Room7/villalaki4.jpg',
      '/Room7/villalaki5.jpg',
      '/Room7/villalaki6.jpg',
      '/Room7/villalaki7.jpg',
      '/Room7/villalaki8.jpg'
    ],
    amenities: ['twin_beds', 'ac', 'wifi', 'tv', 'mini_fridge']
  },
  {
    id: 8,
    type: "room8",
    price: "75000",
    size: "23",
    capacity: "3",
    images: [
      '/Room8/Lakatos_Banjol-132.jpg',
      '/Room8/Lakatos_Banjol-133.jpg',
      '/Room8/Lakatos_Banjol-134.jpg',
      '/Room8/Lakatos_Banjol-135.jpg',
      '/Room8/Lakatos_Banjol-136.jpg',
      '/Room8/Lakatos_Banjol-137.jpg',
      '/Room8/Lakatos_Banjol-138.jpg',
      '/Room8/Lakatos_Banjol-139.jpg',
      '/Room8/Lakatos_Banjol-140.jpg',
      '/Room8/Lakatos_Banjol-141.jpg',
      '/Room8/Lakatos_Banjol-142.jpg',
      '/Room8/Lakatos_Banjol-143.jpg',
      '/Room8/Lakatos_Banjol-144.jpg',
      '/Room8/Lakatos_Banjol-145.jpg',
      '/Room8/Lakatos_Banjol-146.jpg',
      '/Room8/Lakatos_Banjol-147.jpg',
      '/Room8/Lakatos_Banjol-148.jpg',
      '/Room8/Lakatos_Banjol-149.jpg'
    ],
    amenities: ['king_size', 'luxury_bath', 'balcony', 'ac', 'wifi', 'tv', 'minibar', 'sea_view']
  },
  {
    id: 9,
    type: "room9",
    price: "48000",
    size: "23",
    capacity: "3",
    images: [
      '/Room9/Lakatos_Banjol-163.jpg',
      '/Room9/Lakatos_Banjol-150.jpg',
      '/Room9/Lakatos_Banjol-151.jpg',
      '/Room9/Lakatos_Banjol-152.jpg',
      '/Room9/Lakatos_Banjol-153.jpg',
      '/Room9/Lakatos_Banjol-154.jpg',
      '/Room9/Lakatos_Banjol-155.jpg',
      '/Room9/Lakatos_Banjol-156.jpg',
      '/Room9/Lakatos_Banjol-157.jpg',
      '/Room9/Lakatos_Banjol-158.jpg',
      '/Room9/Lakatos_Banjol-159.jpg',
      '/Room9/Lakatos_Banjol-160.jpg',
      '/Room9/Lakatos_Banjol-161.jpg',
      '/Room9/Lakatos_Banjol-162.jpg'
    ],
    amenities: ['queen_size', 'workspace', 'lounge', 'ac', 'wifi', 'tv', 'coffee_maker', 'balcony', 'sea_view']
  },
  {
    id: 10,
    type: "room10",
    price: "78000",
    size: "23",
    capacity: "2",
    images: [
      '/Room10/Lakatos_Banjol-180.jpg',
      '/Room10/Lakatos_Banjol-164.jpg',
      '/Room10/Lakatos_Banjol-165.jpg',
      '/Room10/Lakatos_Banjol-166.jpg',
      '/Room10/Lakatos_Banjol-167.jpg',
      '/Room10/Lakatos_Banjol-168.jpg',
      '/Room10/Lakatos_Banjol-169.jpg',
      '/Room10/Lakatos_Banjol-170.jpg',
      '/Room10/Lakatos_Banjol-171.jpg',
      '/Room10/Lakatos_Banjol-172.jpg',
      '/Room10/Lakatos_Banjol-173.jpg',
      '/Room10/Lakatos_Banjol-174.jpg',
      '/Room10/Lakatos_Banjol-175.jpg',
      '/Room10/Lakatos_Banjol-176.jpg',
      '/Room10/Lakatos_Banjol-177.jpg',
      '/Room10/Lakatos_Banjol-178.jpg',
      '/Room10/Lakatos_Banjol-179.jpg'
    ],
    amenities: ['duplex', 'bathrooms_2', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine']
  },
  {
    id: 11,
    type: "outdoor",
    price: "",
    size: "",
    capacity: "",
    images: [
      '/outside/dron RL -01.jpg',
      '/outside/dron RL -03.jpg',
      '/outside/dron RL -09.jpg',
      '/outside/dron RL -10.jpg',
      '/outside/dron RL -13.jpg',
      '/outside/dron RL -18.jpg',
      '/outside/IMG_2607.jpg',
      '/outside/IMG_2922.jpg',
      '/outside/Lakatos_Banjol-001.jpg',
      '/outside/Lakatos_Banjol-003.jpg',
      '/outside/Lakatos_Banjol-005.jpg',
      '/outside/Lakatos_Banjol-006.jpg',
      '/outside/Lakatos_Banjol-008.jpg',
      '/outside/Lakatos_Banjol-009.jpg',
      '/outside/Lakatos_Banjol-010.jpg',
      '/outside/Lakatos_Banjol-011.jpg',
      '/outside/Lakatos_Banjol-012.jpg',
      '/outside/Lakatos_Banjol-013.jpg',
      '/outside/Lakatos_Banjol-015.jpg',
      '/outside/Lakatos_Banjol-016.jpg',
      '/outside/Lakatos_Banjol-017.jpg',
      '/outside/Lakatos_Banjol-018.jpg',
      '/outside/Lakatos_Banjol-019.jpg',
      '/outside/Lakatos_Banjol-020.jpg'
    ],
    amenities: []
  }
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const { t } = useTranslation('common');

  return (
    <section id="rooms" className="relative py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 rounded-full filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent-500/5 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                {t('rooms_section.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('rooms_section.description')}
            </p>
          </motion.div>
        </div>

        {/* First Three Rows - 3 rooms each */}
        {[0, 3, 6].map((startIndex) => (
          <motion.div 
            key={startIndex} 
            className="flex justify-center w-full mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: startIndex * 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1248px]">
              {rooms.slice(startIndex, startIndex + 3).map((room) => (
                <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Last Row - 2 rooms, centered */}
        <motion.div 
          className="flex justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[832px]">
            {rooms.slice(9, 11).map((room) => (
              <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Room Modal */}
      {selectedRoom && <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
    </section>
  );
}

// Separate RoomCard component for better organization
const RoomCard = ({ room, onClick }: { room: Room; onClick: () => void }) => {
  const { t } = useTranslation('common');
  
  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer w-full flex flex-col"
      onClick={onClick}
    >
      {/* Decorative gradient border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Content container */}
      <div className="relative flex flex-col h-[520px] bg-white rounded-3xl overflow-hidden">
        {/* Image Container with Enhanced Gradient Overlay */}
        <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image 
              src={room.images[0]} 
              alt={t(`rooms_section.room_types.${room.type}.title`)} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col relative">
          {/* Room Info */}
          <div className="h-[88px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
              {t(`rooms_section.room_types.${room.type}.title`)}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {t(`rooms_section.room_types.${room.type}.description`)}
            </p>
          </div>

          {/* Room Details */}
          <div className="flex items-center gap-4 mb-6">
            {room.type !== 'outdoor' && room.size && (
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <span>{t('rooms_section.size', { size: room.size })}</span>
              </div>
            )}
            {room.type !== 'outdoor' && (
              <>
                <div className="w-8 h-8 rounded-lg bg-secondary-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span>{t('rooms_section.capacity', { capacity: room.capacity })}</span>
              </>
            )}
          </div>

          {/* Modern Details Button */}
          <div className="mt-auto">
            <button className="group/btn relative w-full overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium">
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                {t('rooms_section.details')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
