import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ArrowLeft, Sparkles, CalendarCheck, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const { t, isRTL, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4, 0.85], [0.6, 1, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#030611] py-24"
    >
      {/* Ambient Nebula */}
      <motion.div 
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute top-[-10%] start-[15%] w-[55vw] h-[55vw] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 11, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-10%] end-[10%] w-[45vw] h-[45vw] bg-blue-900/15 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Grid Floor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />

      {/* Background Doctor Portrait Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 brightness-50 pointer-events-none scale-105"
        style={{ backgroundImage: `url('/images/OES02691.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-[#030611]/85 to-[#030611] pointer-events-none" />

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 container px-4 mx-auto flex flex-col items-center text-center max-w-4xl"
      >
        {/* Glowing Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase">
            {t.cta.tag}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 font-cairo leading-tight text-white tracking-tight">
          {t.cta.title}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mb-10 font-normal leading-relaxed">
          {t.cta.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Main Booking Button -> /booking */}
          <Link to="/booking" className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 rounded-full blur-md opacity-45 group-hover:opacity-90 transition-all duration-300" />
            
            <motion.div 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center justify-center gap-3 px-9 py-4 sm:py-5 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-600 hover:via-pink-500 hover:to-amber-300 rounded-full text-slate-950 font-bold text-base shadow-2xl shadow-rose-500/30 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 text-slate-950" />
              <span>{t.cta.button}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5" />
            </motion.div>
          </Link>

          {/* Quick Call Button */}
          <a 
            href="tel:01126660905" 
            className="flex items-center justify-center gap-2.5 px-7 py-4 sm:py-5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-sm backdrop-blur-md transition-all hover:border-amber-400/50 w-full sm:w-auto"
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span className="font-mono" dir="ltr">011 2666 0905</span>
          </a>

          {/* WhatsApp Direct */}
          <a 
            href="https://wa.me/201026204093" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4 sm:py-5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-sm backdrop-blur-md transition-all w-full sm:w-auto"
          >
            <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            <span className="font-mono text-xs" dir="ltr">010 2620 4093</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
};

export default CTASection;