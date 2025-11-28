import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
    const { t, lang } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: lang === 'ar' ? "هل قطع الغيار أصلية؟" : "Are the spare parts genuine?",
            a: lang === 'ar'
                ? "نعم، نحن الوكيل الحصري لشركة بيكمير التركية في اليمن، وجميع منتجاتنا أصلية ومضمونة 100%."
                : "Yes, we are the exclusive agent for Beklemer Turkish Company in Yemen, and all our products are 100% genuine and guaranteed."
        },
        {
            q: lang === 'ar' ? "هل يوجد ضمان على المنتجات؟" : "Is there a warranty on products?",
            a: lang === 'ar'
                ? "نعم، نوفر ضماناً شاملاً على معظم منتجاتنا، خاصة البطاريات وقطع الغيار الأساسية."
                : "Yes, we provide a comprehensive warranty on most of our products, especially batteries and essential spare parts."
        },
        {
            q: lang === 'ar' ? "أين يقع مقركم؟" : "Where is your location?",
            a: lang === 'ar'
                ? "يقع مقرنا الرئيسي في صنعاء، شارع برلين ،بين جودله تعز وجسر العمري جنب محلات جبال مران    . يمكنكم زيارتنا أو التواصل معنا لتوصيل الطلبات."
                : "Our main headquarters is located in Sana'a, Khawlan Street, Al-Huthaili Roundabout. You can visit us or contact us for delivery."
        },
        {
            q: lang === 'ar' ? "كيف يمكنني الطلب؟" : "How can I order?",
            a: lang === 'ar'
                ? "يمكنك الطلب عبر زيارة المعرض أو التواصل معنا مباشرة عبر واتساب أو الاتصال الهاتفي."
                : "You can order by visiting our showroom or contacting us directly via WhatsApp or phone call."
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm mb-4"
                    >
                        <HelpCircle size={18} />
                        <span>{lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-secondary mb-4"
                    >
                        {lang === 'ar' ? 'لدينا الإجابات' : 'We Have Answers'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        {lang === 'ar'
                            ? 'أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا'
                            : 'Most frequently asked questions about our products and services'}
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                            >
                                <h3 className={`font-bold text-lg text-secondary ${lang === 'ar' ? 'text-right' : 'text-left'} flex-1`}>
                                    {faq.q}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 text-primary bg-primary/10 p-2 rounded-full"
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className={`px-6 pb-6 text-gray-600 leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                            <div className="pt-2 border-t border-gray-50">
                                                {faq.a}
                                            </div>
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
