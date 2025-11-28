import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-secondary text-white py-8 text-center mt-auto">
            <div className="container mx-auto px-4">
                <p>{t('footerText')}</p>
            </div>
        </footer>
    );
};

export default Footer;
