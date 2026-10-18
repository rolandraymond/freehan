import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

// Curvy body silhouette icon for Nutrition & Body Contouring
const BodyContourIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7.5 3c3 1.5 2 6 4.5 9-2.5 3-1.5 7.5-4.5 9" />
    <path d="M16.5 3c-3 1.5-2 6-4.5 9 2.5 3 1.5 7.5 4.5 9" />
    <path d="M9 7.5h6" />
    <path d="M10.5 12h3" />
    <path d="M8.5 16.5h7" />
  </svg>
);

// Hair follicle & strand icon for Hair Restoration (matching RealResults)
const HairFollicleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 21c-2 0-3.5-1.5-3.5-3.5 0-2 1.5-4 3.5-7 2.5-3.8 3-6.5 1-9.5" />
    <path d="M16 21a2.5 2.5 0 0 0 2.5-2.5c0-1.8-1.2-3.2-2.5-5" />
  </svg>
);

const Services = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      id: t.services.dermatology.number,
      title: t.services.dermatology.title,
      description: t.services.dermatology.description,
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
      href: '/services/dermatology-laser',
    },
    {
      id: t.services.nutrition.number,
      title: t.services.nutrition.title,
      description: t.services.nutrition.description,
      icon: BodyContourIcon,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop',
      href: '/services/nutrition-contouring',
    },
    {
      id: t.services.hair.number,
      title: t.services.hair.title,
      description: t.services.hair.description,
      icon: HairFollicleIcon,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop',
      href: '/services/hair-restoration',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  return (
    <section className="relative pt-36 pb-24 lg:pt-44 bg-slate-50 min-h-screen overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
       
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.services.pageHeader.subtitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-5 font-cairo">
            {t.services.pageHeader.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.services.pageHeader.description}
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Link 
                to={service.href} 
                className="group relative block h-[520px] w-full overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200/80 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 isolate bg-slate-900"
              >
                {/* Background Image */}
                <div className="absolute inset-0 h-full w-full z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/20 opacity-90 group-hover:opacity-95 transition-opacity duration-500 z-[1]" />

                {/* Top Badge & Number */}
                <div className="absolute top-0 left-0 right-0 p-7 flex justify-between items-center z-20">
                   <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-400">
                      <service.icon className="w-6 h-6" />
                   </div>
                   <span className="text-3xl font-mono font-bold text-white/30 group-hover:text-amber-400/60 transition-colors duration-400 select-none">
                      {service.id}
                   </span>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-slate-950/70 backdrop-blur-xl border border-white/15 rounded-3xl p-6 overflow-hidden relative group-hover:border-amber-400/40 transition-all duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 font-cairo group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between text-amber-400 text-xs font-bold uppercase tracking-wider">
                      <span>{t.services.learnMore}</span>
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110">
                         <ArrowIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Booking Banner */}
        <div className="mt-20 max-w-4xl mx-auto rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
           <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">{t.hero.tag}</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-cairo">{t.doctor.bookCta}</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">{t.doctor.specialization}</p>
           </div>
           <Link to="/booking">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105 shrink-0">
                 {t.nav.bookAppointment}
              </button>
           </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
