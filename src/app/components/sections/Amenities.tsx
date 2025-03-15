'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';

const AmenitiesSection = () => {
  const { t } = useTranslation('common');

  const amenityCategories = [
    {
      title: t('amenities_section.categories.stay.title'),
      icon: "🏠",
      items: t('amenities_section.categories.stay.items', { returnObjects: true })
    },
    {
      title: t('amenities_section.categories.outdoor.title'),
      icon: "🌳",
      items: t('amenities_section.categories.outdoor.items', { returnObjects: true })
    },
    {
      title: t('amenities_section.categories.kitchen.title'),
      icon: "🍳",
      items: t('amenities_section.categories.kitchen.items', { returnObjects: true })
    },
    {
      title: t('amenities_section.categories.bathroom.title'),
      icon: "🚿",
      items: t('amenities_section.categories.bathroom.items', { returnObjects: true })
    },
    {
      title: t('amenities_section.categories.bedroom.title'),
      icon: "🛏️",
      items: t('amenities_section.categories.bedroom.items', { returnObjects: true })
    },
    {
      title: t('amenities_section.categories.view.title'),
      icon: "👀",
      items: t('amenities_section.categories.view.items', { returnObjects: true })
    },
    {
      title: t('amenities_section.categories.languages.title'),
      icon: "🗣️",
      items: t('amenities_section.categories.languages.items', { returnObjects: true })
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">{t('amenities_section.title')}</h2>
        <p className="text-xl text-gray-600 text-center mb-16">{t('amenities_section.subtitle')}</p>

        {/* Top amenities highlight */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
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
                         px-6 py-3 rounded-xl border border-gray-100"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-900 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Detailed amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityCategories.map((category, index) => (
            <div key={index} 
                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow
                          border border-gray-100">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {(category.items as string[]).map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-center gap-3">
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
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow
                          border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              <p className="text-gray-800">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;