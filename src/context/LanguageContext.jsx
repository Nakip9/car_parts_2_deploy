import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        shopNow: "Shop Now",
        heroTitle: "Premium Auto Parts & Accessories",
        learnMore: "Learn More",
        featuredProducts: "Featured Products",
        viewAll: "View All",
        footerText: "© 2024 Saada Store. All rights reserved.",
        aboutTitle: "About Us",
        aboutSubtitle: "A story of success and excellence in the world of auto parts",
        ourStory: "Our Story",
        storyText1: "Saada Store was founded with a clear vision to provide the best auto parts in the Yemeni market. We believe that quality is the foundation of safety, so we strive to provide original and reliable products to our valued customers.",
        storyText2: "We are proud to be the exclusive agent for Beklemer Turkish Company in Yemen, allowing us to offer high-quality products with European standards and competitive prices.",
        partnershipTitle: "Our Partnership with Beklemer",
        partnershipText: "Beklemer is a leading Turkish company in auto parts manufacturing. As their sole agent in Yemen, we guarantee our customers original and guaranteed parts directly from the factory.",
        feature1: "High European Quality",
        feature2: "Real Warranty",
        feature3: "Competitive Prices",
        teamTitle: "Our Team",
        manager: "General Manager",
        sales: "Sales Manager",
        support: "Customer Service",
        productsTitle: "Our Products",
        productsSubtitle: "Discover our wide range of original spare parts",
        all: "All",
        batteries: "Batteries",
        brakes: "Brakes",
        solar: "Solar Energy",
        parts: "Spare Parts",
        askPrice: "Ask for Price",
        prod1Title: "70 Amp Battery",
        prod1Desc: "High performance and long life",
        prod2Title: "Front Brake Pads",
        prod2Desc: "Compatible with Toyota",
        prod3Title: "150W Solar Panel",
        prod3Desc: "High efficiency",
        prod4Title: "Engine Repair Kit",
        prod4Desc: "Original parts",
        prod5Title: "Rear Brake Pads",
        prod5Desc: "Beklemer Quality",
        contactTitle: "Contact Us",
        contactSubtitle: "We are here to help you find what you need",
        getInTouch: "Get in Touch",
        address: "Sana'a, Yemen - Taiz Street",
        name: "Name",
        email: "Email",
        message: "Message",
        sendMessage: "Send Message",
        missionTitle: "Our Vision & Mission",
        missionText: "At Saada Store, we strive to provide the best auto parts solutions in Yemen, focusing on quality and reliability. Our partnership with Beklemer guarantees you long-lasting products that ensure your vehicle's safety.",
        quality: "High Quality",
        price: "Competitive Price",
        service: "Excellent Service",
        heroSubtitle: "The exclusive agent of Beklemer Turkish Company in Yemen.",
        productDetailsTitle: "Product details & quick view",
        productDetailsSubtitle: "Explore our best-selling parts with bilingual details, smooth hover effects, and instant WhatsApp assistance.",
        languageToggleLabel: "View details in",
        featureLabel: "Features",
        specsLabel: "Specifications",
        benefitsLabel: "Benefits",
        quickView: "Quick view",
        close: "Close",
        contactOnWhatsApp: "Ask on WhatsApp",
        imageGalleryTitle: "Photo Gallery",
        imageGallerySubtitle: "Browse our featured collection",
    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        contact: "اتصل بنا",
        shopNow: "تسوق الآن",
        heroTitle: "قطع غيار وكنويسات  السيارات ",
        heroSubtitle: "الوكيل الحصري لشركة بيكمير التركية في اليمن.",
        learnMore: "اعرف المزيد",
        featuredProducts: "منتجات مميزة",
        viewAll: "عرض الكل",
        footerText: "© 2024 محلات صعده. جميع الحقوق محفوظة.",
        aboutTitle: "من نحن",
        aboutSubtitle: "قصة نجاح وتميز في عالم قطع غيار السيارات",
        ourStory: "قصتنا",
        storyText1: "تأسست محلات صعده برؤية واضحة لتوفير أفضل قطع غيار السيارات في السوق اليمني. نحن نؤمن بأن الجودة هي أساس السلامة، ولذلك نسعى جاهدين لتقديم منتجات أصلية وموثوقة لعملائنا الكرام.",
        storyText2: "نفتخر بكوننا الوكيل الحصري لشركة بيكمير (Beklemer) التركية في اليمن، مما يتيح لنا تقديم منتجات عالية الجودة بمعايير أوروبية وأسعار تنافسية.",
        partnershipTitle: "شراكتنا مع بيكمير",
        partnershipText: "تعتبر شركة بيكمير التركية من الشركات الرائدة في مجال تصنيع قطع غيار السيارات. بصفتنا الوكيل الوحيد في اليمن، نضمن لعملائنا الحصول على قطع غيار أصلية ومضمونة مباشرة من المصنع.",
        feature1: "جودة أوروبية عالية",
        feature2: "ضمان حقيقي",
        feature3: "أسعار تنافسية",
        teamTitle: "فريقنا",
        manager: "المدير العام",
        sales: "مدير المبيعات",
        support: "خدمة العملاء",
        productsTitle: "منتجاتنا",
        productsSubtitle: "اكتشف مجموعتنا الواسعة من قطع الغيار الأصلية",
        all: "الكل",
        batteries: "بطاريات",
        brakes: "فرامل",
        solar: "طاقة شمسية",
        parts: "قطع غيار",
        askPrice: "اسأل عن السعر",
        prod1Title: "بطارية 70 أمبير",
        prod1Desc: "أداء عالي وعمر طويل",
        prod2Title: "فحمات فرامل أمامية",
        prod2Desc: "متوافقة مع تويوتا",
        prod3Title: "لوح شمسي 150 وات",
        prod3Desc: "كفاءة عالية",
        prod4Title: "طقم إصلاح محرك",
        prod4Desc: "قطع أصلية",
        prod5Title: "فحمات فرامل خلفية",
        prod5Desc: "جودة بيكمير",
        contactTitle: "تواصل معنا",
        contactSubtitle: "نحن هنا لمساعدتك في العثور على ما تحتاج",
        getInTouch: "ابقى على تواصل",
        address: "صنعاء شارع بينون بين جولة تعز وجسر العمري",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        missionTitle: "رؤيتنا ومهمتنا",
        missionText: "نسعى في محلات صعده لتقديم أفضل حلول قطع غيار السيارات في اليمن، مع التركيز على الجودة والموثوقية. شراكتنا مع بيكمير التركية تضمن لكم منتجات تدوم طويلاً وتحافظ على سلامة مركباتكم.",
        quality: "جودة عالية",
        price: "سعر منافس",
        service: "خدمة متميزة",
        productDetailsTitle: "تفاصيل المنتجات ونظرة سريعة",
        productDetailsSubtitle: "استكشف أفضل القطع مبيعاً مع تفاصيل ثنائية اللغة، وحركات تفاعلية، واتصال فوري عبر واتساب.",
        languageToggleLabel: "اعرض التفاصيل بـ",
        featureLabel: "المميزات",
        specsLabel: "المواصفات",
        benefitsLabel: "الفوائد",
        quickView: "نظرة سريعة",
        close: "إغلاق",
        contactOnWhatsApp: "استفسر عبر واتساب",
        imageGalleryTitle: "معرض الصور",
        imageGallerySubtitle: "تصفح مجموعتنا المميزة من المنتجات",
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('ar');

    useEffect(() => {
        const savedLang = localStorage.getItem('saada_lang');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    const switchLanguage = (newLang) => {
        setLang(newLang);
        localStorage.setItem('saada_lang', newLang);
    };

    const t = (key) => {
        return translations[lang][key] || key;
    };

    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
    }, [lang, dir]);

    return (
        <LanguageContext.Provider value={{ lang, switchLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
