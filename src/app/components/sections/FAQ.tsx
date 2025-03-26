'use client';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation('common');

    const faqs = t('faq_section.questions', { returnObjects: true });

    return (
        <section id="faq" className="relative py-24 overflow-hidden">
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
                            {t('faq_section.title')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('faq_section.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {(faqs as FAQItem[]).map((faq: FAQItem, index: number) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel hover:shadow-hover transition-all duration-300"
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary-500' : 'group-hover:bg-gray-200'}`}>
                                    <svg
                                        className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-white' : 'text-gray-500'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6">
                                            <motion.p 
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -10, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-gray-600"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;