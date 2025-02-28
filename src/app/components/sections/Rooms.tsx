'use client';
import React, { useState } from 'react';
import RoomModal from './RoomModal';
import Image from 'next/image';
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

const rooms: Room[] = [
  {
    id: 1,
    type: "room1",
    price: "45000",
    size: "32",
    capacity: "2",
    images: [
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
      '/Room1/Lakatos_Banjol-057.jpg',
      '/Room1/Lakatos_Banjol-058.jpg',
      '/Room1/Lakatos_Banjol-059.jpg',
      '/Room1/Lakatos_Banjol-060.jpg',
      '/Room1/Lakatos_Banjol-061.jpg',
      '/Room1/Lakatos_Banjol-062.jpg',
      '/Room1/Lakatos_Banjol-063.jpg',
      '/Room1/Lakatos_Banjol-064.jpg',
      '/Room1/Lakatos_Banjol-065.jpg'
    ],
    amenities: ['king_size', 'ac', 'wifi', 'tv', 'minibar', 'safe']
  },
  {
    id: 2,
    type: "room2",
    price: "65000",
    size: "55",
    capacity: "4",
    images: [
      '/Room2/Lakatos_Banjol-070.jpg',
      '/Room2/Lakatos_Banjol-071.jpg',
      '/Room2/Lakatos_Banjol-072.jpg',
      '/Room2/Lakatos_Banjol-073.jpg',
      '/Room2/Lakatos_Banjol-074.jpg',
      '/Room2/Lakatos_Banjol-075.jpg',
      '/Room2/Lakatos_Banjol-076.jpg',
      '/Room2/Lakatos_Banjol-077.jpg',
      '/Room2/Lakatos_Banjol-078.jpg',
      '/Room2/Lakatos_Banjol-079.jpg',
      '/Room2/Lakatos_Banjol-080.jpg',
      '/Room2/Lakatos_Banjol-081.jpg'
    ],
    amenities: ['bedrooms_2', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine', 'balcony']
  },
  {
    id: 3,
    type: "room3",
    price: "42000",
    size: "28",
    capacity: "2",
    images: [
      '/Room3/Lakatos_Banjol-127.jpg',
      '/Room3/Lakatos_Banjol-128.jpg',
      '/Room3/Lakatos_Banjol-129.jpg',
      '/Room3/Lakatos_Banjol-133.jpg',
      '/Room3/Lakatos_Banjol-134.jpg',
      '/Room3/Lakatos_Banjol-135.jpg',
      '/Room3/Lakatos_Banjol-136.jpg',
      '/Room3/Lakatos_Banjol-137.jpg',
      '/Room3/Lakatos_Banjol-138.jpg',
      '/Room3/Lakatos_Banjol-139.jpg',
      '/Room3/Lakatos_Banjol-140.jpg',
      '/Room3/Lakatos_Banjol-141.jpg',
      '/Room3/Lakatos_Banjol-142.jpg',
      '/Room3/Lakatos_Banjol-143.jpg',
      '/Room3/Lakatos_Banjol-144.jpg',
      '/Room3/Lakatos_Banjol-145.jpg',
      '/Room3/Lakatos_Banjol-146.jpg',
      '/Room3/Lakatos_Banjol-147.jpg',
      '/Room3/Lakatos_Banjol-148.jpg'
    ],
    amenities: ['sea_view', 'queen_size', 'ac', 'wifi', 'mini_kitchen', 'tv']
  },
  {
    id: 4,
    type: "room4",
    price: "85000",
    size: "75",
    capacity: "6",
    images: [
      '/Room4/Lakatos_Banjol-083.jpg',
      '/Room4/Lakatos_Banjol-084.jpg',
      '/Room4/Lakatos_Banjol-085.jpg',
      '/Room4/Lakatos_Banjol-086.jpg',
      '/Room4/Lakatos_Banjol-087.jpg',
      '/Room4/Lakatos_Banjol-088.jpg',
      '/Room4/Lakatos_Banjol-089.jpg',
      '/Room4/Lakatos_Banjol-090.jpg',
      '/Room4/Lakatos_Banjol-091.jpg',
      '/Room4/Lakatos_Banjol-092.jpg',
      '/Room4/Lakatos_Banjol-093.jpg',
      '/Room4/Lakatos_Banjol-094.jpg',
      '/Room4/Lakatos_Banjol-095.jpg',
      '/Room4/Lakatos_Banjol-096.jpg',
      '/Room4/Lakatos_Banjol-097.jpg',
      '/Room4/Lakatos_Banjol-098.jpg',
      '/Room4/Lakatos_Banjol-099.jpg'
    ],
    amenities: ['bedrooms_3', 'bathrooms_2', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine', 'balcony']
  },
  {
    id: 5,
    type: "room5",
    price: "55000",
    size: "45",
    capacity: "4",
    images: [
      '/rablaki7813759.jpg',
      '/595182578.jpg',
      '/rablaki7813737.jpg'
    ],
    amenities: ['garden', 'terrace', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine']
  },
  {
    id: 6,
    type: "room6",
    price: "95000",
    size: "80",
    capacity: "4",
    images: [
      '/Room6/Lakatos_Banjol-100.jpg',
      '/Room6/Lakatos_Banjol-101.jpg',
      '/Room6/Lakatos_Banjol-102.jpg',
      '/Room6/Lakatos_Banjol-103.jpg',
      '/Room6/Lakatos_Banjol-104.jpg',
      '/Room6/Lakatos_Banjol-105.jpg',
      '/Room6/Lakatos_Banjol-106.jpg',
      '/Room6/Lakatos_Banjol-107.jpg',
      '/Room6/Lakatos_Banjol-108.jpg',
      '/Room6/Lakatos_Banjol-109.jpg',
      '/Room6/Lakatos_Banjol-110.jpg',
      '/Room6/Lakatos_Banjol-111.jpg',
      '/Room6/Lakatos_Banjol-112.jpg',
      '/Room6/Lakatos_Banjol-113.jpg',
      '/Room6/Lakatos_Banjol-114.jpg'
    ],
    amenities: ['terrace', 'jacuzzi', 'bedrooms_2', 'luxury_bath', 'kitchen', 'ac', 'wifi', 'tv']
  },
  {
    id: 7,
    type: "room7",
    price: "35000",
    size: "22",
    capacity: "2",
    images: [
      '/rablaki7813755.jpg',
      '/595182562.jpg',
      '/rablaki7813759.jpg'
    ],
    amenities: ['twin_beds', 'ac', 'wifi', 'tv', 'mini_fridge']
  },
  {
    id: 8,
    type: "room8",
    price: "75000",
    size: "40",
    capacity: "2",
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
    amenities: ['king_size', 'luxury_bath', 'balcony', 'ac', 'wifi', 'tv', 'minibar']
  },
  {
    id: 9,
    type: "room9",
    price: "48000",
    size: "35",
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
    amenities: ['queen_size', 'workspace', 'lounge', 'ac', 'wifi', 'tv', 'coffee_maker']
  },
  {
    id: 10,
    type: "room10",
    price: "78000",
    size: "65",
    capacity: "5",
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
    amenities: ['duplex', 'bathrooms_2', 'kitchen', 'ac', 'wifi', 'tv', 'washing_machine', 'balcony']
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('rooms_section.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('rooms_section.description')}
          </p>
        </div>

        {/* First Three Rows - 3 rooms each */}
        {[0, 3, 6].map((startIndex) => (
          <div key={startIndex} className="flex justify-center w-full mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-[1248px]">
              {rooms.slice(startIndex, startIndex + 3).map((room) => (
                <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
              ))}
            </div>
          </div>
        ))}

        {/* Last Row - 2 rooms, centered */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-[832px]">
            {rooms.slice(9, 11).map((room) => (
              <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
            ))}
          </div>
        </div>
      </div>

      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}

// Separate RoomCard component for better organization
const RoomCard = ({ room, onClick }: { room: Room; onClick: () => void }) => {
  const { t } = useTranslation('common');
  
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image 
          src={room.images[0]} 
          alt={t(`rooms_section.room_types.${room.type}.title`)} 
          layout="responsive" 
          width={400} 
          height={300} 
          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t(`rooms_section.room_types.${room.type}.title`)}
        </h3>
        
        <div className="flex items-center gap-4 mb-6 text-gray-500">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
              />
            </svg>
            <span>{room.size}m²</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span>{room.capacity} {t('rooms_section.capacity_unit')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 group-hover:text-primary transition-colors duration-300">
            {t('rooms_section.details')} →
          </span>
        </div>
      </div>
    </div>
  );
};
