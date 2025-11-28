import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, keywords = [] }) => {
    const { lang, dir } = useLanguage();
    const siteName = lang === 'ar' ? 'محلات صعده' : 'Saada Store';
    const fullTitle = `${title} | ${siteName}`;
    const keywordContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

    return (
        <Helmet>
            <html lang={lang} dir={dir} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywordContent && <meta name="keywords" content={keywordContent} />}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
