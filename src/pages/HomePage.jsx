import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Award, Zap, ShieldCheck, MessageCircle, Languages, X, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const heroLogo = "https://i.imghippo.com/files/FAa9824dE.png";

const galleryImages = [
  {
    src: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Technician inspecting a modern car engine'
  },
  {
    src: 'https://i.imghippo.com/files/FAa9824dE.png', alt: 'High quality car battery installed under the hood'
  },
  {
    src: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Detail shot of premium brake system components'
  },
  {
    src: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Auto parts neatly arranged on a service table'
  },
  {
    src: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'LED headlights illuminating a dark road'
  },
  {
    src: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Customer reviewing catalog of car parts'
  }
];

const productDetails = [
  {
    id: 'battery',
    category: 'batteries',
    badge: 'new',
    image: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Long-life automotive battery with protective casing',
    languages: {
      en: {
        name: 'UltraSafe 70Ah Battery',
        summary: 'Maintenance-free power built for Gulf weather with Beklemer-level quality.',
        features: ['Extended cold-crank power for reliable starts', 'Sealed design prevents leakage and vibration damage', 'Backed by a verified Beklemer warranty'],
        specs: ['70Ah capacity', '12V / 650 CCA', 'Low self-discharge profile'],
        benefits: ['Protects onboard electronics', 'Reduces maintenance visits', 'Stable output for daily commuting']
      },
      ar: {
        name: 'بطارية UltraSafe سعة 70 أمبير',
        summary: 'طاقة خالية من الصيانة مصممة لطقس الخليج مع جودة بيكمير الموثوقة.',
        features: ['قدرة تشغيل عالية لضمان تشغيل السيارة سريعاً', 'تصميم محكم يمنع التسرب ويقاوم الاهتزاز', 'مدعومة بضمان بيكمير المعتمد'],
        specs: ['سعة 70 أمبير', '12 فولت / 650 CCA', 'نسبة تفريغ ذاتي منخفضة'],
        benefits: ['حماية أفضل للإلكترونيات', 'تقليل زيارات الصيانة', 'خرج ثابت للاستخدام اليومي']
      }
    },
    whatsappMessage: 'I want to know more about the UltraSafe 70Ah Battery'
  },
  {
    id: 'brake-pads',
    category: 'brakes',
    badge: 'top',
    image: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Front brake pads ready for installation',
    languages: {
      en: {
        name: 'Beklemer Ceramic Brake Pads',
        summary: 'Low-dust pads engineered for quiet stopping power and longer rotor life.',
        features: ['Ceramic friction material for smooth braking', 'Thermal scorch coating for consistent bedding', 'Shimmed backing to cut vibration noise'],
        specs: ['Front axle set', 'OEM fitment for popular sedans', 'Heat tolerance up to 600°C'],
        benefits: ['Cleaner wheels with less dust', 'Confident braking on city and highway routes', 'Extended rotor lifespan']
      },
      ar: {
        name: 'فحمات فرامل سيراميك بيكمير',
        summary: 'فرامل منخفضة الغبار مصممة لفرملة هادئة وعمر أطول للأقراص.',
        features: ['مادة سيراميك لفرملة ناعمة', 'طبقة حرارية لتثبيت الأداء بسرعة', 'صفائح عازلة لتقليل الاهتزاز والضجيج'],
        specs: ['مجموعة المحور الأمامي', 'مطابقة لموديلات السيدان الشائعة', 'تحمل حرارة حتى 600 درجة مئوية'],
        benefits: ['عجلات أنظف', 'ثقة في الفرملة داخل المدينة وعلى الطرق السريعة', 'إطالة عمر أقراص الفرامل']
      }
    },
    whatsappMessage: 'I would like brake pad recommendations from Saada Store'
  },
  {
    id: 'oil-filter',
    category: 'parts',
    badge: 'eco',
    image: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Premium oil filter with metal housing',
    languages: {
      en: {
        name: 'PrecisionFlow Oil Filter',
        summary: 'High micron filtration that protects turbo engines and keeps oil cleaner for longer.',
        features: ['Multi-layer filter media for fine particle capture', 'Anti-drainback valve prevents dry starts', 'Durable housing resists corrosion'],
        specs: ['10,000 km protection window', 'Fits popular Japanese engines', 'Tested to OEM pressure ratings'],
        benefits: ['Quieter engine idle', 'Longer oil life cycles', 'Confidence for highway trips']
      },
      ar: {
        name: 'فلتر زيت PrecisionFlow',
        summary: 'ترشيح عالي الدقة يحمي المحركات التوربينية ويحافظ على نظافة الزيت لفترة أطول.',
        features: ['وسائط متعددة الطبقات لالتقاط الشوائب الدقيقة', 'صمام مانع لرجوع الزيت يمنع التشغيل الجاف', 'هيكل قوي مقاوم للتآكل'],
        specs: ['حماية حتى 10,000 كم', 'متوافق مع أشهر المحركات اليابانية', 'مجرب على ضغط المصنع الأصلي'],
        benefits: ['هدوء أكبر في صوت المحرك', 'عمر أطول للزيت', 'ثقة أعلى في السفر الطويل']
      }
    },
    whatsappMessage: 'Need details about the PrecisionFlow oil filter'
  },
  {
    id: 'headlights',
    category: 'accessories',
    badge: 'best',
    image: 'https://i.imghippo.com/files/FAa9824dE.png',
    alt: 'Bright LED headlight kit installed in a car',
    languages: {
      en: {
        name: 'AeroBeam LED Headlights',
        summary: 'Crystal clear LED beams with smart cooling for safer night driving.',
        features: ['6000K daylight color temperature', 'Active cooling fan for longer lifespan', 'Plug-and-play harness for quick installs'],
        specs: ['Pair set (left/right)', 'Up to 12,000 lumens combined', 'Weather-sealed to IP65'],
        benefits: ['Sharper road visibility', 'Lower power draw than halogen', 'Modern look for any vehicle']
      },
      ar: {
        name: 'كشافات LED AeroBeam',
        summary: 'إضاءة LED صافية مع تبريد ذكي لقيادة ليلية أكثر أماناً.',
        features: ['لون 6000 كلفن شبيه بضوء النهار', 'مروحة تبريد نشطة لعمر أطول', 'توصيل مباشر وسريع بدون تعديل'],
        specs: ['زوج (يمين/يسار)', 'إضاءة تصل إلى 12,000 لومن', 'مقاومة للعوامل الجوية بمعيار IP65'],
        benefits: ['رؤية أوضح للطريق', 'استهلاك طاقة أقل من الهالوجين', 'مظهر عصري للسيارة']
      }
    },
    whatsappMessage: 'Tell me more about the AeroBeam LED headlights'
  }
];

const languageOptions = [
  { code: 'ar', label: 'العربية' },
  { code: 'en', label: 'English' }
];

const AutoPlayGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsPlaying(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setIsPlaying(false);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.9
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -800 : 800,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="relative">
      <div
        className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={galleryImages[currentIndex].src}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 240, damping: 28 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={galleryImages[currentIndex].alt}
            loading="lazy"
          />
        </AnimatePresence>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <ArrowLeft className="w-6 h-6 text-secondary" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Next image"
        >
          <ArrowRight className="w-6 h-6 text-secondary" />
        </button>

        <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full shadow-lg z-10">
          <span className="text-sm font-semibold text-secondary flex items-center gap-2">
            {isPlaying ? (
              <>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                Auto
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                Paused
              </>
            )}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {galleryImages.length}
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 md:gap-4 mt-6 overflow-x-auto pb-2 justify-center">
        {galleryImages.map((image, index) => (
          <motion.button
            key={image.src}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all ${currentIndex === index
              ? 'ring-4 ring-primary shadow-xl'
              : 'ring-2 ring-gray-200 opacity-70 hover:opacity-100'
              }`}
            aria-label={`Show image ${index + 1}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {currentIndex === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 border-4 border-primary rounded-xl"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}`}
            aria-label={`Select slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';
  const [activeLanguage, setActiveLanguage] = useState(lang);
  const [quickViewId, setQuickViewId] = useState(null);

  useEffect(() => {
    setActiveLanguage(lang);
  }, [lang]);

  const keywords = useMemo(() => (
    lang === 'ar'
      ? ['قطع غيار سيارات', 'بيكمير اليمن', 'بطاريات سيارات', 'فحمات فرامل', 'اضواء LED', 'قطع غيار أصلية']
      : ['auto parts Yemen', 'Beklemer agent', 'car batteries', 'brake pads', 'LED headlights', 'genuine spare parts']
  ), [lang]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const buildWhatsappLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/967775783633?text=${encoded}`;
  };

  const selectedProduct = productDetails.find((product) => product.id === quickViewId);

  return (
    <div className="overflow-hidden bg-light/30 pt-20">
      <SEO
        title={t('home')}
        description={lang === 'ar' ? 'الوكيل الحصري لشركة بيكمير التركية في اليمن. أفضل قطع غيار السيارات.' : 'Exclusive agent for Beklemer Turkish Company in Yemen. Best auto parts.'}
        keywords={keywords}
      />

      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-light via-white to-sky-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl"
          />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-2 h-2 bg-primary/40 rounded-full"
              style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
              className="relative flex justify-center lg:justify-end order-2 lg:order-1"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-primary/30 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                />

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl border border-white/50"
                >
                  <img
                    src={heroLogo}
                    alt="Saada Store logo"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
                </motion.div>
              </div>
            </motion.div>

            <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <motion.span
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] text-white rounded-full font-bold text-xs sm:text-sm mb-4 shadow-lg"
                >
                  ✨ {t('heroSubtitle')}
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight"
              >
                {t('heroTitle').split(' ').map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.08, color: '#0ea5e9', transition: { duration: 0.2 } }}
                    className="inline-block mx-1 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent bg-[length:200%_100%] cursor-default"
                    style={{ animation: 'gradient-flow 8s ease infinite' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                {t('missionText')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/products"
                    className="group relative bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all overflow-hidden flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <motion.span className="absolute inset-0 bg-white/20" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.5 }} />
                    <span className="relative z-10">{t('shopNow')}</span>
                    {isRtl ? (
                      <ArrowLeft className="relative z-10 group-hover:-translate-x-2 transition-transform w-5 h-5" />
                    ) : (
                      <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform w-5 h-5" />
                    )}
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-white text-secondary border-2 border-gray-200 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-50 hover:border-primary transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 text-primary" />
                    {t('contact')}
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start pt-4 sm:pt-6 lg:pt-8"
              >
                {[{ icon: '🏆', label: 'خدمات مميزه' }, { icon: '⚡', label: 'ضمان لمده عام' }, { icon: '💯', label: ' لسنا الوحيدون ولكننا الافضل' }].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5 }} className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-600">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: t('about'), desc: t('aboutSubtitle'), href: '/about' }, { title: t('products'), desc: t('productsSubtitle'), href: '/products' }, { title: t('contact'), desc: t('contactSubtitle'), href: '/contact' }].map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="text-primary w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{link.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{link.desc}</p>
                <Link to={link.href} className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  {t('learnMore')}
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: <Award className="w-10 h-10 text-primary" />, title: t('quality'), desc: 'Certified European Standards' }, { icon: <Zap className="w-10 h-10 text-accent" />, title: t('price'), desc: 'حياك' }, { icon: <ShieldCheck className="w-10 h-10 text-secondary" />, title: t('service'), desc: '24/7 Customer Support' }].map((item, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="p-8 bg-light/50 border border-white rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="products" className="py-24 bg-gradient-to-b from-white to-light/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-3">{t('productDetailsTitle')}</h2>
              <p className="text-gray-600 max-w-2xl">{t('productDetailsSubtitle')}</p>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-2 shadow-sm w-fit">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                <Languages className="w-4 h-4" />
                <span className="text-sm">{t('languageToggleLabel')}</span>
              </div>
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setActiveLanguage(option.code)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeLanguage === option.code ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md' : 'bg-white text-secondary hover:bg-gray-50 border border-gray-200'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {productDetails.map((product, idx) => {
              const content = product.languages[activeLanguage] || product.languages.en;
              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-4 left-4 bg-white/90 text-primary font-bold text-xs px-3 py-1 rounded-full shadow">{product.badge.toUpperCase()}</span>
                    <motion.button
                      onClick={() => setQuickViewId(product.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute bottom-4 right-4 bg-white/90 text-secondary font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2"
                    >
                      {t('quickView')}
                      {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </motion.button>
                  </div>

                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-primary font-semibold">{product.category}</p>
                        <h3 className="text-xl font-bold text-secondary mt-1">{content.name}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {idx + 1}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{content.summary}</p>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-light/60 rounded-2xl p-3">
                        <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" /> {t('featureLabel')}
                        </div>
                        <ul className="grid grid-cols-1 gap-1 text-sm text-gray-700">
                          {content.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-100 p-3">
                        <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                          <ShieldCheck className="w-4 h-4 text-secondary" /> {t('specsLabel')}
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-700">
                          {content.specs.map((spec) => (
                            <span key={spec} className="px-3 py-1 rounded-full bg-light/80">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={buildWhatsappLink(content.name + ' - ' + product.whatsappMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {t('contactOnWhatsApp')}
                      </a>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold border border-gray-200 text-secondary bg-white hover:bg-gray-50"
                      >
                        {t('contact')}
                        {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-light/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              {t('imageGalleryTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('imageGallerySubtitle')}
            </p>
          </motion.div>

          <AutoPlayGallery />
        </div>
      </section>

      <FAQ />

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            key={selectedProduct.id}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden"
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setQuickViewId(null)}
                  className="absolute top-4 right-4 bg-white text-secondary rounded-full p-2 shadow-md"
                  aria-label="Close quick view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold">{selectedProduct.category}</p>
                    <h3 className="text-2xl font-bold text-secondary">{(selectedProduct.languages[activeLanguage] || selectedProduct.languages.en).name}</h3>
                  </div>
                  <a
                    href={buildWhatsappLink((selectedProduct.languages[activeLanguage] || selectedProduct.languages.en).name + ' - quick view request')}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full font-semibold shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('contactOnWhatsApp')}
                  </a>
                </div>
                <p className="text-gray-600">{(selectedProduct.languages[activeLanguage] || selectedProduct.languages.en).summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[{ label: t('featureLabel'), items: (selectedProduct.languages[activeLanguage] || selectedProduct.languages.en).features }, { label: t('specsLabel'), items: (selectedProduct.languages[activeLanguage] || selectedProduct.languages.en).specs }, { label: t('benefitsLabel'), items: (selectedProduct.languages[activeLanguage] || selectedProduct.languages.en).benefits }].map((section) => (
                    <div key={section.label} className="bg-light/60 rounded-2xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {section.label}
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
