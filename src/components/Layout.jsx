import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { useLanguage } from '../context/LanguageContext';

const Layout = ({ children }) => {
    const { dir } = useLanguage();
    return (
        <div dir={dir} className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
