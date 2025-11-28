import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
const logo = "https://i.imghippo.com/files/FAa9824dE.png";

const Navbar = () => {
    const { t, lang, switchLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = () => {
        switchLanguage(lang === 'ar' ? 'en' : 'ar');
    };

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('products'), path: '/products' },
        { name: t('contact'), path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20'
                : 'bg-white/10 backdrop-blur-md shadow-sm border-b border-white/10'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Desktop only */}
                    <Link to="/" className="hidden lg:flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                            <img
                                src={logo}
                                alt="Saada Store"
                                className="h-14 w-14 object-contain relative z-10 drop-shadow-lg"
                            />
                        </motion.div>
                        <motion.span
                            className="text-xl font-bold bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            {lang === 'ar' ? 'محلات صعده' : 'Saada Store'}
                        </motion.span>
                    </Link>

                    {/* Centered Logo + Store Name - Mobile/Tablet only */}
                    <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
                        <Link to="/" className="flex items-center gap-2">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <img
                                    src={logo}
                                    alt="Saada Store"
                                    className="h-10 w-10 object-contain drop-shadow-lg"
                                />
                            </motion.div>
                            <motion.span
                                className="text-lg font-bold bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                            >
                                {lang === 'ar' ? 'محلات صعده' : 'Saada Store'}
                            </motion.span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative px-5 py-2 group"
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative z-10 font-semibold transition-colors ${location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-gray-700 group-hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                </motion.span>

                                {/* Animated Background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                    whileHover={{ scale: 1.05 }}
                                />

                                {/* Active Indicator */}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}

                        <div className="flex items-center gap-3 ml-2">
                            <motion.a
                                href="tel:+967777777777"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2 group"
                            >
                                <motion.div
                                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <Phone size={16} className="fill-current" />
                                </motion.div>
                                {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                            </motion.a>

                            {/* Language Toggle Button */}
                            <motion.button
                                onClick={toggleLang}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-5 py-2 rounded-full font-bold text-sm bg-white text-secondary border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles size={16} className="text-primary group-hover:rotate-180 transition-transform duration-500" />
                                    {lang === 'ar' ? 'English' : 'العربية'}
                                </span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden relative p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="text-primary" size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="text-primary" size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-2xl"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-3">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-between ${location.pathname === link.path
                                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                                            : 'bg-gray-50 text-gray-700 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100'
                                            }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && <Sparkles size={18} />}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-100"
                            >
                                <a
                                    href="tel:+967777777777"
                                    className="px-4 py-4 bg-green-500 text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
                                >
                                    <Phone size={18} className="fill-current" />
                                    {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                                </a>

                                <button
                                    onClick={() => {
                                        toggleLang();
                                        setIsOpen(false);
                                    }}
                                    className="px-4 py-4 bg-white text-secondary border border-gray-200 rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                                >
                                    <Sparkles size={18} className="text-primary" />
                                    {lang === 'ar' ? 'English' : 'العربية'}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
