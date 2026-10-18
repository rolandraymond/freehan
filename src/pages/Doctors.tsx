import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { CalendarCheck, Sparkles, Award, GraduationCap, Star, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Eye, Target, Heart, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const DoctorProfile = () => {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  const container: Variants = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const qualifications = [
    {
      title: t.doctor.q1Title,
      place: t.doctor.q1Place,
      icon: GraduationCap,
    },
    {
      title: t.doctor.q2Title,
      place: t.doctor.q2Place,
      icon: Award,
    },
    {
      title: t.doctor.q3Title,
      place: t.doctor.q3Place,
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden pt-36 pb-24 lg:pt-44">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 end-0 w-[50vw] h-[50vw] bg-amber-200/35 rounded-full blur-[140px] -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-[40vw] h-[40vw] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid: Portrait & Doctor Info */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Portrait Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center order-1"
          >
            {/* Elegant Outer Border */}
            <div className="absolute inset-0 border-2 border-amber-300/60 rounded-t-[20rem] rounded-b-[4rem] scale-[1.04] -z-10 transition-transform duration-700 hover:scale-[1.06]" />

            <div className="relative w-full max-w-[380px] sm:max-w-md h-[550px] sm:h-[680px] rounded-t-[20rem] rounded-b-[4rem] overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-slate-950 group">
               <img 
                 src="/images/OES02622.jpg" 
                 alt={t.doctor.name} 
                 className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "/images/drfreehan.png";
                 }}
               />
               
               {/* Vignette */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

               {/* Experience floating badge */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className={cn(
                    "absolute bottom-8 z-20 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl border border-white flex items-center gap-3.5",
                    isRTL ? "right-5" : "left-5"
                  )}
               >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0 border border-amber-500/30">
                     <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                     <p className="text-slate-950 font-extrabold text-base leading-tight">
                       {language === 'ar' ? 'خبرة طبية متخصصة' : 'Specialized Medical Care'}
                     </p>
                     <p className="text-amber-600 text-xs font-semibold mt-0.5">
                       {t.doctor.title || (language === 'ar' ? 'عيادة د. فريهان زكريا' : 'Dr. Freehan Zakaria Clinic')}
                     </p>
                  </div>
               </motion.div>
            </div>
          </motion.div>

          {/* Bio & Information Column */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-start order-2"
          >
            {/* Founder Badge */}
            <motion.div variants={fadeUp} className="mb-4">
               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                 {t.doctor.title || (language === 'ar' ? 'رعاية طبية متكاملة' : 'Integrated Medical Care')}
               </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold text-slate-950 leading-[1.15] mb-3 font-cairo">
              {t.doctor.name}
            </motion.h1>
            
            {/* Specialization */}
            <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 mb-6 font-cairo">
               {t.doctor.specialization}
            </motion.h2>

            {/* Official Bio Paragraph 1 */}
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-normal">
               {t.doctor.bio}
            </motion.p>

            {/* Official Bio Paragraph 2 */}
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
               {t.doctor.bioDetail}
            </motion.p>

            {/* Quote Box */}
            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-md mb-8 w-full border-s-4 border-s-amber-500">
               <p className="text-base sm:text-lg text-slate-800 font-semibold italic font-cairo leading-relaxed">
                  "{t.doctor.quote}"
               </p>
            </motion.div>

            {/* Primary Action Button -> /booking */}
            <motion.div variants={fadeUp} className="w-full sm:w-auto">
               <Link to="/booking">
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white rounded-full hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/20 flex items-center justify-center gap-3 group active:scale-95 border border-slate-800 text-sm font-bold tracking-wide">
                     <CalendarCheck className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                     <span>{t.doctor.bookCta}</span>
                     <ArrowIcon className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
               </Link>
            </motion.div>

          </motion.div>

        </div>

        {/* Qualifications & Experience Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto pt-10 border-t border-slate-200">
           
           {/* Qualifications Column */}
           <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-cairo">{t.doctor.qualificationsTitle}</h3>
              </div>

              <div className="space-y-4">
                 {qualifications.map((q, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                       <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                       <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 font-cairo">{q.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">{q.place}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Experience Column */}
           <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 font-cairo">{t.doctor.experienceTitle}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                   {t.doctor.experienceDesc}
                </p>

                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                   <p className="text-xs text-amber-900 leading-relaxed">
                     {language === 'ar'
                       ? 'نهج متكامل يربط بين نضارة وصحة البشرة الخارجية مع التغذية السليمة ونحت القوام للحصول على نتيجة طبيعية تدوم طويلاً.'
                       : 'An integrated clinical approach connecting external skin radiance with balanced nutrition and body sculpting for long-lasting natural results.'}
                   </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/booking" className="flex items-center justify-between text-xs font-bold text-amber-700 hover:text-amber-800">
                  <span>{t.doctor.bookCta}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
           </div>

        </div>

        {/* ================= VISION & MISSION SECTION ================= */}
        <section id="vision-mission" className="pt-20 sm:pt-28 mt-20 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'ar' ? 'فلسفتنا ورعايتنا الطبية' : 'Our Philosophy & Care'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 font-cairo mb-5 leading-tight">
                {language === 'ar' ? 'رؤيتنا ورسالتنا' : 'Our Vision & Mission'}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {t.about.intro}
              </p>
            </div>

            {/* Vision & Mission Dual Cards */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-14">
              {/* Vision Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-amber-300 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                    <Eye className="w-7 h-7 text-amber-700 group-hover:text-slate-950 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 font-cairo">
                    {t.about.vision}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                    {t.about.visionText}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>{language === 'ar' ? 'رؤية طبية متكاملة ومستدامة' : 'Holistic & sustainable clinical vision'}</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-amber-300 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-950 transition-colors duration-300">
                    <Target className="w-7 h-7 text-slate-800 group-hover:text-amber-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 font-cairo">
                    {t.about.mission}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                    {t.about.missionText}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>{language === 'ar' ? 'حلول مخصصة لكل حالة ومتابعة دقيقة' : 'Tailored solutions and careful follow-up'}</span>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="rounded-3xl bg-[#080d19] text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.about.valuesTitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold font-cairo text-white">
                    {language === 'ar' ? 'المعايير التي نبني عليها كل قرار' : 'The Clinical Standards We Uphold'}
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Value 1 */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5 border border-amber-500/30">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2.5 font-cairo text-white">{t.about.val1.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{t.about.val1.description}</p>
                  </div>

                  {/* Value 2 */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5 border border-amber-500/30">
                      <Heart className="w-6 h-6 text-amber-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2.5 font-cairo text-white">{t.about.val2.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{t.about.val2.description}</p>
                  </div>

                  {/* Value 3 */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5 border border-amber-500/30">
                      <Shield className="w-6 h-6 text-amber-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2.5 font-cairo text-white">{t.about.val3.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{t.about.val3.description}</p>
                  </div>
                </div>

                {/* Final Callout inside Vision & Mission */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-cairo">
                      {language === 'ar' ? 'جاهز لخطتك العلاجية المخصصة مع د. فريهان؟' : 'Ready for your personalized clinical plan?'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {language === 'ar' ? 'احجز استشارتك الآن وسيتم التواصل معك لتأكيد الموعد.' : 'Book your consultation now and our medical team will confirm.'}
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="shrink-0 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{t.doctor.bookCta}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default DoctorProfile;
