import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const ContactPage = () => {
    const { t, lang } = useLanguage();
    const isRtl = lang === 'ar';

    const contactInfo = [
        {
            icon: Phone,
            title: t('phone'),
            value: '+967 775 783 633',
            link: 'tel:+967775783633',
            color: 'bg-blue-50 text-blue-600',
            delay: 0
        },
        {
            icon: MessageCircle,
            title: t('whatsapp'),
            value: '+967 775 783 633',
            link: 'https://wa.me/967775783633',
            color: 'bg-green-50 text-green-600',
            delay: 0.1
        },
        {
            icon: Mail,
            title: t('email'),
            value: 'info@saadastore.com',
            link: 'mailto:info@saadastore.com',
            color: 'bg-orange-50 text-orange-600',
            delay: 0.2
        },
        {
            icon: MapPin,
            title: t('address'),
            value: lang === 'ar' ? 'صنعاء، اليمن' : 'Sanaa, Yemen',
            link: 'https://maps.app.goo.gl/fesMrrquXZpLwmif6',
            color: 'bg-purple-50 text-purple-600',
            delay: 0.3
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
        { icon: MessageCircle, href: 'https://wa.me/967775783633', label: 'WhatsApp', color: 'hover:text-green-600' }
    ];

    return (
        <div className="pt-20 min-h-screen bg-light/30">
            <SEO
                title={t('contact')}
                description={lang === 'ar' ? "تواصل مع محلات صعده لقطع غيار السيارات. نحن هنا لخدمتكم." : "Contact Saada Store for auto parts. We are here to serve you."}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {t('contactTitle')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        {t('contactSubtitle')}
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: item.delay }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-500 text-sm font-medium mb-1">{item.title}</h3>
                                    <p className="text-secondary font-bold text-lg group-hover:text-primary transition-colors">{item.value}</p>
                                </div>
                                <div className={`mr-auto ${isRtl ? 'mr-auto ml-0' : 'ml-auto mr-0'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                    {isRtl ? <ArrowLeft className="text-gray-400 w-5 h-5" /> : <ArrowRight className="text-gray-400 w-5 h-5" />}
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-primary to-accent p-8 rounded-3xl text-white shadow-xl text-center"
                        >
                            <h3 className="text-2xl font-bold mb-6">{t('followUs')}</h3>
                            <div className="flex justify-center gap-6">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white/20 p-4 rounded-full hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Map & Form Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 h-[400px] relative overflow-hidden group"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.755333368647!2d44.21531943488731!3d15.355625723906447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16077a0d81b7d1e1%3A0x9e1c2b2b4b1b1b1b!2sSanaa%20Taiz%20Round%20Sana'a%20Yemen!5e0!3m2!1sen!2s!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1.5rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Sanaa Taiz Round Location"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-200 flex items-center gap-4 md:w-fit">
                                <div className="bg-red-100 p-3 rounded-full text-red-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-secondary">{t('visitUs')}</p>
                                    <p className="text-sm text-gray-500">
                                        {lang === 'ar' ? 'جولة تعز، صنعاء' : 'Taiz Round, Sanaa'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Send size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">{t('sendMessage')}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a
                                    href="https://wa.me/967775783633"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-green-200"
                                >
                                    <MessageCircle size={24} />
                                    WhatsApp
                                </a>
                                <a
                                    href="tel:+967775783633"
                                    className="flex items-center justify-center gap-3 bg-secondary text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-gray-200"
                                >
                                    <Phone size={24} />
                                    {t('callUs')}
                                </a>
                            </div>
                            <p className="text-center text-gray-500 mt-6 text-sm">
                                {lang === 'ar'
                                    ? 'متاحون للرد على استفساراتكم طوال أيام الأسبوع'
                                    : 'Available to answer your inquiries 7 days a week'}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
