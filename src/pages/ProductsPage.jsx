
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Filter, ShoppingBag } from 'lucide-react';
import SEO from '../components/SEO';

const ProductsPage = () => {
    const { t, lang } = useLanguage();
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: t('all') },
        { id: 'batteries', label: t('batteries') },
        { id: 'brakes', label: t('brakes') },
        { id: 'solar', label: t('solar') },
        { id: 'parts', label: t('parts') },
    ];

    const products = [
        { id: 1, category: 'batteries', title: t('prod1Title'), desc: t('prod1Desc'), image: "https://i.imghippo.com/files/CzIP9014Rx.png" },
        { id: 2, category: 'brakes', title: t('prod2Title'), desc: t('prod2Desc'), image: "https://i.imghippo.com/files/CzIP9014Rx.png" },
        { id: 3, category: 'solar', title: t('prod3Title'), desc: t('prod3Desc'), image: "https://i.imghippo.com/files/CzIP9014Rx.png" },
        { id: 4, category: 'parts', title: t('prod4Title'), desc: t('prod4Desc'), image: "https://i.imghippo.com/files/CzIP9014Rx.png" },
        { id: 5, category: 'brakes', title: t('prod5Title'), desc: t('prod5Desc'), image: "https://i.imghippo.com/files/CzIP9014Rx.png" },
    ];

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="pt-20 bg-light/30 min-h-screen">
            <SEO
                title={t('products')}
                description={lang === 'ar' ? "منتجات محلات صعده: بطاريات، فرامل، طاقة شمسية." : "Saada Store products: Batteries, Brakes, Solar Energy."}
            />

            {/* Header */}
            <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
                {/* Animated Wave Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `
                            linear-gradient(45deg, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
                            linear-gradient(135deg, transparent 50%, rgba(14, 165, 233, 0.15) 100%)
                        `,
                        backgroundSize: '200% 200%'
                    }}
                />

                {/* Subtle Floating Circles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                        className="absolute rounded-full bg-accent/20"
                        style={{
                            width: `${60 + i * 20}px`,
                            height: `${60 + i * 20}px`,
                            left: `${10 + i * 11}%`,
                            top: `${15 + (i % 3) * 25}%`,
                            filter: 'blur(40px)'
                        }}
                    />
                ))}

                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6 text-secondary"
                    >
                        {t('productsTitle')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-700"
                    >
                        {t('productsSubtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 container mx-auto px-4">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filter === cat.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {filter === cat.id && <Filter size={16} />}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -15 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                            >
                                <div className="h-64 bg-gray-50 flex items-center justify-center relative overflow-hidden p-8">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="text-6xl grayscale opacity-50">📦</span>
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm">
                                        {t(product.category)}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="font-bold text-2xl mb-3 text-secondary">{product.title}</h3>
                                    <p className="text-gray-500 mb-8 leading-relaxed">{product.desc}</p>
                                    <a
                                        href="https://wa.me/967777777777"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 group-hover:translate-y-[-2px]"
                                    >
                                        <MessageCircle size={22} />
                                        {t('askPrice')}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default ProductsPage;

