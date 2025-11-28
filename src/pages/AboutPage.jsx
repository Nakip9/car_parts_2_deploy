import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, User, Award, Users, Globe, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
const aboutHero = "https://i.imghippo.com/files/FAa9824dE.png";

const AboutPage = () => {
    const { t, lang } = useLanguage();

    const stats = [
        { icon: Users, value: '10k+', label: lang === 'ar' ? 'عميل سعيد' : 'Happy Customers' },
        { icon: Award, value: '15+', label: lang === 'ar' ? 'سنة خبرة' : 'Years Experience' },
        { icon: Globe, value: '100%', label: lang === 'ar' ? 'تغطية شاملة' : 'Coverage' },
        { icon: TrendingUp, value: '500+', label: lang === 'ar' ? 'منتج' : 'Products' },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-20 bg-light/30 min-h-screen overflow-hidden">
            <SEO
                title={t('about')}
                description={lang === 'ar' ? "تعرف على محلات صعده، الوكيل الحصري لشركة بيكمير. تاريخنا وفريقنا." : "Learn about Saada Store, exclusive agent for Beklemer. Our history and team."}
            />

            {/* Enhanced Hero Section */}
            <section className="relative py-24 lg:py-32 text-center overflow-hidden bg-secondary text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-semibold tracking-wider uppercase"
                    >
                        {lang === 'ar' ? 'قصتنا' : 'Our Story'}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                    >
                        {t('aboutTitle')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('aboutSubtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 -mt-16 relative z-20 container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-secondary mb-1">{stat.value}</h3>
                            <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Story & Image */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-4xl font-bold text-secondary mb-8 leading-tight">
                            {t('ourStory')}
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p className="border-l-4 border-primary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                                {t('storyText1')}
                            </p>
                            <p>
                                {t('storyText2')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                        <img
                            src={aboutHero}
                            alt="About Saada Store"
                            className="relative rounded-[2rem] shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <CheckCircle className="text-green-600 w-8 h-8" />
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-lg">Official Agent</p>
                                    <p className="text-sm text-gray-500">Since 2010</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partnership */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-light/50 skew-x-12 transform origin-top-right"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-secondary to-gray-900 rounded-[2.5rem] h-96 flex flex-col items-center justify-center shadow-2xl order-2 md:order-1 p-12 text-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <div className="relative z-10">
                                <span className="text-white text-6xl font-bold block mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">Beklemer</span>
                                <p className="text-accent text-2xl tracking-[0.5em] uppercase font-light">Otomotiv</p>
                                <div className="mt-8 inline-block px-6 py-2 border border-white/20 rounded-full text-white/80 text-sm backdrop-blur-sm">
                                    Exclusive Partner in Yemen
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl font-bold text-secondary mb-8">{t('partnershipTitle')}</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {t('partnershipText')}
                            </p>
                            <ul className="space-y-4">
                                {[t('feature1'), t('feature2'), t('feature3')].map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-light rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-primary/10"
                                    >
                                        <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-secondary text-lg">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-secondary mb-4">{t('teamTitle')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {lang === 'ar' ? 'فريق من الخبراء المتخصصين لخدمتكم' : 'A team of dedicated experts at your service'}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Muhammed Saada", role: t('manager'), img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
                        { name: "Abod", role: t('sales'), img: "https://i.imghippo.com/files/FlNb5250weA.jpg" },
                        { name: "Khaled Omar", role: t('support'), img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" }
                    ].map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 group hover:border-primary/20 transition-all"
                        >
                            <div className="w-32 h-32 mx-auto mb-6 relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10"
                                />
                            </div>
                            <h3 className="font-bold text-2xl mb-2 text-secondary">{member.name}</h3>
                            <p className="text-primary font-medium bg-primary/5 inline-block px-4 py-1 rounded-full text-sm">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
