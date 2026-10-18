import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Eye, Sparkles, Award, Heart, CheckCircle2, ArrowRight, ArrowLeft, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutUs = () => {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  const container: Variants = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden pt-28 sm:pt-36 pb-20">
      
      {/* ================= HERO PHILOSOPHY ================= */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-2xl bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Tag Badge */}
            <motion.div variants={fadeUp} className="mb-6">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                 {t.about.tag}
               </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-950 mb-6 font-cairo leading-tight">
              {t.about.title}
            </motion.h1>

            {/* Intro Description */}
            <motion.p variants={fadeUp} className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mb-8">
              {t.about.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="mb-14">
              <Link 
                to="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-sm shadow-xl shadow-slate-950/15 hover:bg-slate-900 transition-all hover:scale-105"
              >
                <span>{t.nav.bookAppointment}</span>
                <ArrowIcon className="w-4 h-4 text-amber-400" />
              </Link>
            </motion.div>

            {/* Doctor Portrait Feature Showcase */}
            <motion.div 
              variants={fadeUp}
              className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl grid md:grid-cols-12 items-stretch text-start"
            >
              <div className="md:col-span-5 relative min-h-[340px] md:min-h-full h-full w-full overflow-hidden bg-slate-900">
                <img 
                  src="/images/OES02506.jpg" 
                  alt={t.doctor.name} 
                  className="w-full h-full object-cover object-[center_56%] hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/drfreehan.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="md:col-span-7 p-6 sm:p-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.doctor.specialization}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-cairo">
                  {t.doctor.name}
                </h3>
                <blockquote className="text-sm sm:text-base text-slate-600 italic border-s-2 border-amber-500 ps-4 leading-relaxed font-light">
                  "{t.doctor.quote}"
                </blockquote>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.doctor.specialization}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="group relative">
               <div className="relative h-full bg-slate-50/80 border border-slate-200/90 p-8 sm:p-12 rounded-[2.5rem] shadow-lg shadow-slate-900/5 transition-all duration-400 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-400">
                    <Eye className="w-7 h-7 text-amber-700 group-hover:text-slate-950 transition-colors duration-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 font-cairo">
                    {t.about.vision}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                    {t.about.visionText}
                  </p>
               </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeUp} className="group relative">
               <div className="relative h-full bg-slate-50/80 border border-slate-200/90 p-8 sm:p-12 rounded-[2.5rem] shadow-lg shadow-slate-900/5 transition-all duration-400 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-950 transition-colors duration-400">
                    <Target className="w-7 h-7 text-slate-800 group-hover:text-amber-400 transition-colors duration-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 font-cairo">
                    {t.about.mission}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                    {t.about.missionText}
                  </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-[#080d19] text-white relative overflow-hidden">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.valuesTitle}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-cairo">
              {t.about.valuesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Value 1: Science & Experience */}
             <div className="flex flex-col items-start p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6 border border-amber-500/30">
                   <Award className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-cairo text-white">{t.about.val1.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{t.about.val1.description}</p>
             </div>

             {/* Value 2: Genuine Care */}
             <div className="flex flex-col items-start p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6 border border-amber-500/30">
                   <Heart className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-cairo text-white">{t.about.val2.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{t.about.val2.description}</p>
             </div>

             {/* Value 3: Balanced Results */}
             <div className="flex flex-col items-start p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6 border border-amber-500/30">
                   <Shield className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-cairo text-white">{t.about.val3.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{t.about.val3.description}</p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= DOCTOR CALLOUT IN ABOUT ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 sm:p-14 border border-slate-200/90 shadow-xl flex flex-col md:flex-row items-center gap-10">
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shrink-0 border-4 border-amber-400 shadow-xl bg-slate-900">
               <img src="/images/drfreehan.png" alt={t.doctor.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1 text-start">
               {t.doctor.title ? (
                 <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{t.doctor.title}</span>
               ) : null}
               <h3 className="text-3xl font-bold text-slate-950 font-cairo mt-1 mb-2">{t.doctor.name}</h3>
               <p className="text-xs text-slate-500 font-semibold mb-4">{t.doctor.specialization}</p>
               <blockquote className="text-slate-700 italic border-s-2 border-amber-500 ps-4 my-4 text-sm sm:text-base">
                 "{t.doctor.quote}"
               </blockquote>
               <div className="flex gap-4 mt-6">
                 <Link 
                   to="/dr-freehan"
                   className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors"
                 >
                   {language === 'ar' ? 'تعرف على د. فريهان' : 'Meet Dr. Freehan'}
                 </Link>
                 <Link 
                   to="/booking"
                   className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                 >
                   {t.nav.bookAppointment}
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;