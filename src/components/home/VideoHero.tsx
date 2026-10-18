import React, { useState } from 'react';
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft, Sparkles, Award, ShieldCheck, CheckCircle2, Zap, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const VideoHeroSection = () => {
  const { t, isRTL, language } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#040711] pt-32 pb-14 lg:pt-40 lg:pb-16">
      
      {/* 1. Dr. Freehan Zakaria Atmosphere Video (Contained, Smaller Size & Natural Proportions) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#040711] flex items-center justify-center">
        {/* Poster Fallback Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 brightness-50 scale-105 pointer-events-none transition-opacity duration-1000"
          style={{ backgroundImage: `url('/images/OES02689.jpg')` }}
        />

        {/* Contained Video Frame: Natural proportions, no giant 300% zoom, subtle luxury feathering */}
        <div className="relative w-[300px] sm:w-[380px] md:w-[440px] h-[480px] sm:h-[580px] overflow-hidden rounded-3xl opacity-35 brightness-95 contrast-105 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_78%)] pointer-events-none">
          <iframe
            className="w-full h-full scale-100 object-cover pointer-events-none select-none"
            src="https://www.tiktok.com/player/v1/7642705332346637576?autoplay=1&mute=1&loop=1&controls=0"
            allow="autoplay; encrypted-media"
            title="Dr. Freehan Zakaria Video"
            loading="lazy"
          />
        </div>
      </div>

      {/* 2. Directional Luxury Vignettes (Keeps video visible while preserving text contrast) */}
      <div 
        className={cn(
          "absolute inset-0 z-[1] transition-all",
          isRTL 
            ? "bg-gradient-to-l from-[#040711]/40 via-[#040711]/70 to-[#040711]/95" 
            : "bg-gradient-to-r from-[#040711]/95 via-[#040711]/70 to-[#040711]/40"
        )} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-[#040711]/70 z-[2]" />
      
      {/* Golden & Rose Aura in background */}
      <div className="absolute top-1/4 end-1/4 w-[500px] h-[500px] bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-amber-500/15 rounded-full blur-[150px] pointer-events-none z-[2]" />

      {/* 3. Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-start order-2 lg:order-1"
          >
            {/* Tagline Badge with Live Clinic Pulse */}
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
               <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-rose-400/40 bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-amber-500/15 backdrop-blur-md text-rose-200 text-xs sm:text-sm font-bold tracking-wider shadow-sm">
                 <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
                 {t.hero.tag}
               </span>
               <button
                 type="button"
                 onClick={() => setIsVideoOpen(true)}
                 className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-md text-slate-300 hover:text-rose-300 text-xs font-medium transition-all cursor-pointer group"
               >
                 <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                 <span>{language === 'ar' ? 'فيديو مباشر من العيادة' : 'Inside The Clinic'}</span>
                 <Play className="w-3 h-3 text-rose-400 fill-rose-400 group-hover:scale-110 transition-transform ms-1" />
               </button>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.12] mb-6 tracking-tight font-display">
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-pink-300">
                {t.hero.titleLine2}
              </span>
            </motion.h1>

            {/* Doctor Sub-title - Enriched size and luxury rose-gold color */}
            <motion.div variants={fadeUp} className="mb-6 space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-amber-400/15 border border-amber-400/30 shrink-0">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
                <span className="font-extrabold text-white text-lg sm:text-xl font-cairo tracking-tight">
                  {t.doctor.name}
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold leading-relaxed max-w-lg ps-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 tracking-wide">
                {t.doctor.specialization}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-normal">
              {t.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              
              {/* Primary Pink & Gold CTA -> /booking */}
              <Link to="/booking" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 rounded-full blur-lg opacity-40 group-hover:opacity-95 transition duration-500" />
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-600 hover:via-pink-500 hover:to-amber-300 rounded-full text-slate-950 font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(244,63,94,0.35)] overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <Sparkles className="w-4 h-4 text-slate-950/80 animate-pulse relative z-10" />
                  <span className="relative z-10">{t.hero.cta}</span>
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 relative z-10" />
                </motion.div>
              </Link>

              {/* Secondary Outline CTA -> /services */}
              <Link to="/services">
                <motion.div 
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(251,113,133,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-4 rounded-full border border-white/25 backdrop-blur-md text-white hover:text-rose-200 font-bold text-sm tracking-wide flex items-center justify-center transition-all hover:border-rose-400/50"
                >
                  <span>{t.hero.secondaryCta}</span>
                </motion.div>
              </Link>

            </motion.div>

            {/* Quality & Safety Assurance */}
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-2.5 text-xs text-rose-200 font-medium bg-white/[0.04] backdrop-blur-md py-2 px-4 rounded-full border border-rose-400/20">
               <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
               <span>{t.hero.qualityBadge}</span>
            </motion.div>

          </motion.div>

          {/* Image Spotlight: Dr. Freehan Zakaria with Creative Floating Badges */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.92, y: 30 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
             className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2"
          >
             {/* Glowing architectural halo in Luxury Rose-Pink & Gold */}
             <div className="absolute inset-0 border-2 border-rose-400/50 rounded-t-[16rem] rounded-b-[3rem] scale-[1.04] -z-10 transition-transform duration-700 hover:scale-[1.06] shadow-[0_0_35px_rgba(244,63,94,0.25)]" />
             <div className="absolute inset-0 bg-gradient-to-t from-rose-500/25 via-pink-500/10 to-amber-400/15 rounded-t-[16rem] rounded-b-[3rem] blur-2xl -z-20" />
             
             {/* Creative Floating Pill 1: Precision Care */}
             <motion.div
               animate={{ y: [-5, 5, -5] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
               className={cn(
                 "absolute top-4 sm:top-5 z-30 bg-slate-950/90 backdrop-blur-xl border border-rose-400/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[0_8px_25px_rgba(244,63,94,0.25)] flex items-center gap-1.5 sm:gap-2",
                 isRTL ? "-right-2 sm:-right-5" : "-left-2 sm:-left-5"
               )}
             >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                  {language === 'ar' ? 'تشخيص دقيق وخطة مخصصة' : 'Precision Clinical Care'}
                </span>
             </motion.div>

             {/* Creative Floating Pill 2: Advanced Tech */}
             <motion.div
               animate={{ y: [6, -6, 6] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className={cn(
                 "absolute top-[44%] sm:top-1/3 z-30 bg-slate-950/90 backdrop-blur-xl border border-pink-400/35 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-2.5",
                 isRTL ? "-left-2 sm:-left-5" : "-right-2 sm:-right-5"
               )}
             >
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-300 shrink-0">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="text-start">
                  <p className="text-[8px] sm:text-[10px] text-rose-300 font-bold uppercase tracking-wider leading-none">
                    {language === 'ar' ? 'تقنيات متقدمة' : 'Advanced Laser'}
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-white font-medium mt-0.5 whitespace-nowrap">
                    {language === 'ar' ? 'أحدث أجهزة التجميل' : 'Modern Aesthetic Tech'}
                  </p>
                </div>
             </motion.div>

             {/* Signature script accent with Dr. Freehan Zakaria */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className={cn(
                 "absolute -bottom-3 z-30 bg-slate-950/90 backdrop-blur-md border border-rose-400/40 px-4 py-1 rounded-full shadow-xl flex items-center gap-1.5",
                 isRTL ? "right-6" : "left-6"
               )}
             >
               <span className="font-script text-rose-300 text-sm tracking-wide">
                 Dr. Freehan Zakaria
               </span>
               <span className="text-rose-400 text-xs">♡</span>
             </motion.div>

             {/* Portrait Box with Translucent Glassmorphism Background & Pink Framing (Original Dimensions) */}
             <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] h-[520px] sm:h-[640px] rounded-t-[16rem] rounded-b-[3rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-2 border-rose-400/60 hover:border-pink-300/80 bg-gradient-to-b from-rose-950/20 via-slate-950/40 to-slate-950/70 backdrop-blur-xl group transition-colors duration-500 flex flex-col justify-end items-center pt-8 sm:pt-10 px-2 sm:px-3 pb-0">
                {/* Luxury Warm Rose-Gold Radial Aura inside the frame */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-rose-500/20 via-pink-400/15 to-amber-400/15 rounded-full blur-3xl pointer-events-none" />
                
                <img 
                   src="/images/drfreehan_complete_cutout.png" 
                   alt={t.doctor.name} 
                   className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
                />
                
                {/* Soft Base Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#040711]/40 to-transparent pointer-events-none z-10" />
             </div>
          </motion.div>

        </div>
      </div>

      {/* 4. Bottom Creative Pillar Ribbon */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-12 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-start">
          <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-rose-400/30 transition-colors">
             <div className="w-8 h-8 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-300 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
             </div>
             <div>
                <p className="text-white text-xs font-bold">{language === 'ar' ? 'تشخيص دقيق' : 'Precision Care'}</p>
                <p className="text-slate-400 text-[10px]">{language === 'ar' ? 'فهم احتياج كل حالة' : 'Tailored Treatment'}</p>
             </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-amber-400/30 transition-colors">
             <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-300 shrink-0">
                <Zap className="w-4 h-4" />
             </div>
             <div>
                <p className="text-white text-xs font-bold">{language === 'ar' ? 'تقنيات معتمدة' : 'Certified Tech'}</p>
                <p className="text-slate-400 text-[10px]">{language === 'ar' ? 'أحدث أجهزة الليزر' : 'Modern Laser Systems'}</p>
             </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-rose-400/30 transition-colors">
             <div className="w-8 h-8 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-300 shrink-0">
                <Award className="w-4 h-4" />
             </div>
             <div>
                <p className="text-white text-xs font-bold">{language === 'ar' ? 'إشراف طبي' : 'Clinical Expertise'}</p>
                <p className="text-slate-400 text-[10px]">{language === 'ar' ? 'رعاية الدكتورة المباشرة' : 'Direct Doctor Oversight'}</p>
             </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-amber-400/30 transition-colors">
             <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-300 shrink-0">
                <ShieldCheck className="w-4 h-4" />
             </div>
             <div>
                <p className="text-white text-xs font-bold">{language === 'ar' ? 'نتائج طبيعية' : 'Natural Results'}</p>
                <p className="text-slate-400 text-[10px]">{language === 'ar' ? 'توازن وأمان كامل' : 'Harmonious Aesthetics'}</p>
             </div>
          </div>
        </div>
      </div>
      {/* 5. Video Modal for crisp full-view clinic video watching */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-md bg-slate-950/95 border border-amber-500/30 text-white p-5 overflow-hidden rounded-3xl shadow-2xl">
          <DialogTitle className="text-base font-bold text-amber-300 flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{language === 'ar' ? 'د. فريهان زكريا • من داخل العيادة' : 'Dr. Freehan Zakaria • Inside The Clinic'}</span>
          </DialogTitle>
          <div className="relative w-full aspect-[9/16] max-h-[70vh] rounded-2xl overflow-hidden bg-black border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.tiktok.com/player/v1/7642705332346637576?autoplay=1&mute=0&controls=1"
              allow="autoplay; encrypted-media; fullscreen"
              title="Dr. Freehan Zakaria Clinic Video"
            />
          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default VideoHeroSection;
