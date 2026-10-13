import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Stethoscope, Cpu, ClipboardList, CheckCircle2, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyUsSection = () => {
  const { t, isRTL } = useLanguage();

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: Stethoscope,
      title: t.whyUs.item1.title,
      description: t.whyUs.item1.description,
    },
    {
      id: 2,
      icon: Cpu,
      title: t.whyUs.item2.title,
      description: t.whyUs.item2.description,
    },
    {
      id: 3,
      icon: ClipboardList,
      title: t.whyUs.item3.title,
      description: t.whyUs.item3.description,
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: t.whyUs.item4.title,
      description: t.whyUs.item4.description,
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 bg-slate-50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 end-1/4 w-[420px] h-[420px] bg-amber-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 start-1/4 w-[480px] h-[480px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs font-bold tracking-widest uppercase shadow-sm mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.whyUs.title}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-950 font-cairo leading-[1.2]">
            {t.whyUs.subtitle}
          </h2>
        </motion.div>

        {/* Feature Grid with Interactive Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <SpotlightCard key={i} feature={feature} index={i} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ feature, index, isRTL }: { feature: FeatureItem, index: number, isRTL: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = feature.icon;
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className={cn(
        "group relative h-full flex flex-col border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-900/5 rounded-[2.5rem] overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300",
        isOdd ? 'lg:translate-y-8' : ''
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-full p-8 md:p-9 flex flex-col items-start z-10">
        
        {/* Icon */}
        <div className="relative mb-6">
           <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 shadow-sm flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-400 transition-colors duration-400">
              <Icon className="w-6 h-6 text-amber-700 group-hover:text-slate-950 transition-colors duration-400" />
           </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors font-cairo">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          {feature.description}
        </p>

        {/* Index indicator */}
        <div className="w-full flex justify-between items-end mt-auto pt-4 border-t border-slate-100">
           <span className="text-3xl font-mono font-light text-slate-300 group-hover:text-amber-500/60 transition-colors select-none">
             0{feature.id}
           </span>
           <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
             <ArrowIcon className="w-3.5 h-3.5" />
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default WhyUsSection;