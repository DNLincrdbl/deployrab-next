'use client';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation('common');

    const faqs = t('faq_section.questions', { returnObjects: true });

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('faq_section.title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('faq_section.subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {(faqs as FAQItem[]).map((faq: FAQItem, index: number) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;