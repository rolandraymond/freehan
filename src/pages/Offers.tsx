import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Percent, Gift, Sparkles, Clock, Copy, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfferItem {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  code: string;
  icon: React.ElementType;
  gradient: string;
}

const Offers = () => {
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const offers: OfferItem[] = [
    {
      id: 'laser',
      badge: t.offers.items.laser.badge,
      title: t.offers.items.laser.title,
      description: t.offers.items.laser.description,
      code: t.offers.items.laser.code,
      icon: Percent,
      gradient: 'from-amber-500/20 to-yellow-500/10',
    },
    {
      id: 'hydra',
      badge: t.offers.items.hydra.badge,
      title: t.offers.items.hydra.title,
      description: t.offers.items.hydra.description,
      code: t.offers.items.hydra.code,
      icon: Gift,
      gradient: 'from-blue-500/20 to-cyan-500/10',
    },
    {
      id: 'bride',
      badge: t.offers.items.bride.badge,
      title: t.offers.items.bride.title,
      subtitle: t.offers.items.bride.subtitle,
      description: t.offers.items.bride.description,
      code: t.offers.items.bride.code,
      icon: Sparkles,
      gradient: 'from-rose-500/20 to-pink-500/10',
    },
    {
      id: 'consultation',
      badge: t.offers.items.consultation.badge,
      title: t.offers.items.consultation.title,
      description: t.offers.items.consultation.description,
      code: t.offers.items.consultation.code,
      icon: Clock,
      gradient: 'from-emerald-500/20 to-teal-500/10',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FFF9FA] to-[#FDF4F6] pt-36 pb-24 lg:pt-44 overflow-hidden">
      
      {/* Feminine Ambient Glows & Sparkles in Background */}
      <div className="absolute top-20 start-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-pink-300/20 via-rose-200/25 to-amber-200/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[45%] end-[-10%] w-[450px] h-[450px] bg-rose-200/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] start-[-5%] w-[400px] h-[400px] bg-pink-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Background Decor & Header */}
      <div className="container px-4 mx-auto mb-16 text-center max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100/90 via-pink-50 to-amber-50 border border-rose-200/90 shadow-sm mb-5 text-rose-700"
        >
           <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
           <span className="text-xs font-bold tracking-widest uppercase">
             {t.offers.title}
           </span>
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-4 font-cairo">
           {t.offers.subtitle}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
           {t.offers.description}
        </p>
      </div>

      {/* Offers Cards Grid */}
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {offers.map((offer, index) => (
              <CouponCard key={offer.id} offer={offer} isRTL={isRTL} index={index} t={t} />
           ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container px-4 mx-auto mt-20 text-center max-w-2xl relative z-10">
         <Link to="/booking">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 text-sm sm:text-base font-bold bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-600 hover:via-pink-500 hover:to-amber-300 text-slate-950 shadow-2xl shadow-rose-500/30 transition-all group overflow-hidden relative"
            >
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
               <Sparkles className="w-4 h-4 text-slate-950 animate-pulse relative z-10" />
               <span className="relative z-10">{t.offers.bookNow}</span>
               <ArrowIcon className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 relative z-10" />
            </motion.button>
         </Link>
      </div>

    </div>
  );
};

interface CouponCardProps {
  offer: OfferItem;
  isRTL: boolean;
  index: number;
  t: any;
}

const CouponCard = ({ offer, isRTL, index, t }: CouponCardProps) => {
  const [copied, setCopied] = useState(false);
  const Icon = offer.icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white/95 backdrop-blur-xl rounded-3xl border border-rose-100/90 shadow-[0_15px_40px_rgba(244,63,94,0.06)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.14)] hover:border-rose-300/80 transition-all duration-500 overflow-hidden flex flex-col justify-between relative"
    >
       <div className="p-7">
         {/* Top Meta */}
         <div className="flex items-center justify-between gap-4 mb-4">
           <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 text-slate-950 shadow-md shadow-rose-500/20 uppercase tracking-wider">
             {offer.badge}
           </span>
           <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 text-rose-500 group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-amber-400 group-hover:text-slate-950 transition-all duration-300 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
           </div>
         </div>

         {/* Title & Subtitle */}
         <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1 font-cairo">
           {offer.title}
         </h3>
         {offer.subtitle && (
           <p className="text-xs font-bold text-rose-600 mb-2">
             {offer.subtitle}
           </p>
         )}

         {/* Description */}
         <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
           {offer.description}
         </p>
       </div>

       {/* Coupon Code Strip */}
       <div className="bg-gradient-to-r from-rose-50/60 via-pink-50/40 to-amber-50/50 p-5 border-t border-rose-100/80 flex items-center justify-between gap-3">
          <div className="text-start">
             <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider block">
               {t.offers.discountCode}
             </span>
             <span className="text-base font-mono font-bold text-slate-900 tracking-wider bg-white/80 px-2 py-0.5 rounded-lg border border-rose-100/80 inline-block mt-0.5">
               {offer.code}
             </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                copied 
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300" 
                  : "bg-white text-rose-700 border-rose-200/80 hover:bg-rose-50 hover:border-rose-300"
              )}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.offers.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.offers.copyCode}</span>
                </>
              )}
            </button>

            <Link 
              to={`/booking?offer=${offer.code}`}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-600 hover:via-pink-500 hover:to-amber-300 text-slate-950 text-xs font-bold transition-all shadow-sm hover:shadow-md shadow-rose-500/20"
            >
              {t.common.bookNow}
            </Link>
          </div>
       </div>

    </motion.div>
  );
};

export default Offers;