import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ArrowLeft, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  const container: Variants = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white overflow-hidden pt-36 pb-16 lg:pt-44">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 end-0 w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-[40vw] h-[40vw] bg-slate-200/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-start order-2 lg:order-1"
          >
            {/* Tagline */}
            <motion.div variants={fadeUp} className="mb-6">
               <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-4 h-4 text-amber-600" />
                 {t.hero.tag}
               </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-950 leading-[1.12] mb-6 font-cairo tracking-tight">
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
                {t.hero.titleLine2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-normal">
              {t.hero.description}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Link to="/booking" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white rounded-full hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/20 flex items-center justify-center gap-3 group active:scale-95 border border-slate-800 font-bold text-sm">
                   <span>{t.hero.cta}</span>
                   <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-amber-400" />
                </button>
              </Link>
              
              <Link to="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-slate-700 font-bold hover:text-slate-950 transition-colors flex items-center justify-center gap-2 text-sm border border-slate-200 rounded-full hover:bg-slate-50">
                  {t.hero.secondaryCta}
                </button>
              </Link>
            </motion.div>

            {/* Quality & Safety Assurance */}
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-2.5 text-xs text-amber-900 font-medium bg-amber-50 py-2 px-4 rounded-full border border-amber-200 shadow-sm">
               <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
               <span>{t.hero.qualityBadge}</span>
            </motion.div>
          </motion.div>

          {/* Right: Dr. Freihan Portrait */}
          <motion.div 
             initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
             className="relative h-[550px] lg:h-[680px] w-full flex items-center justify-center order-1 lg:order-2"
          >
             <div className="absolute inset-0 border border-amber-300/60 rounded-t-[15rem] rounded-b-[2.5rem] scale-[1.05] -z-10 transition-transform duration-700 hover:scale-[1.08]" />
             
             <div className="relative w-full h-full max-w-md rounded-t-[15rem] rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-black/5 bg-slate-950">
                <img 
                   src="/images/drfreehan.png" 
                   alt={t.doctor.name} 
                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className={`absolute bottom-8 ${isRTL ? '-right-4' : '-left-4'} z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white`}
                >
                   <div className="flex items-center gap-3.5">
                     <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
                        <ShieldCheck className="w-5 h-5 text-amber-600" />
                     </div>
                     <div>
                        <p className="text-slate-950 font-extrabold text-sm">{t.doctor.name}</p>
                        {t.doctor.title ? <p className="text-amber-600 text-[11px] font-semibold mt-0.5">{t.doctor.title}</p> : null}
                     </div>
                   </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
