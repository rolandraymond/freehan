import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, ArrowRight, ChevronDown, Sparkles, Activity, Scissors } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'; 
import { cn } from '@/lib/utils'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

const ShimmerButton = ({ className, children, variant = 'primary', ...props }: ButtonProps) => (
  <button
    className={cn(
      "relative group overflow-hidden rounded-full font-bold transition-all duration-300 active:scale-95 text-xs sm:text-sm tracking-wide",
      variant === 'primary' 
        ? "bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-400 hover:via-pink-300 hover:to-amber-300 text-slate-950 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40" 
        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
    <span className="relative z-20 flex items-center justify-center gap-2">
      {children}
    </span>
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();
  const { scrollY } = useScroll();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const isHomePage = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 20;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);
  });

  useEffect(() => { 
    setIsOpen(false); 
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

// Curvy body silhouette icon
const BodyContourIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7.5 3c3 1.5 2 6 4.5 9-2.5 3-1.5 7.5-4.5 9" />
    <path d="M16.5 3c-3 1.5-2 6-4.5 9 2.5 3 1.5 7.5 4.5 9" />
    <path d="M9 7.5h6" />
    <path d="M10.5 12h3" />
    <path d="M8.5 16.5h7" />
  </svg>
);

// Hair follicle & strand icon (matching RealResults)
const HairFollicleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 21c-2 0-3.5-1.5-3.5-3.5 0-2 1.5-4 3.5-7 2.5-3.8 3-6.5 1-9.5" />
    <path d="M16 21a2.5 2.5 0 0 0 2.5-2.5c0-1.8-1.2-3.2-2.5-5" />
  </svg>
);

  const serviceSubLinks = [
    { 
      id: 'dermatology', 
      label: language === 'en' ? '01 — Dermatology & Laser' : '01 — الجلدية والليزر', 
      desc: language === 'en' ? 'Advanced skin & laser care' : 'علاجات البشرة والليزر المتقدمة',
      icon: Sparkles,
      href: '/services/dermatology-laser'
    },
    { 
      id: 'nutrition', 
      label: language === 'en' ? '02 — Nutrition & Contouring' : '02 — التغذية ونحت الجسم', 
      desc: language === 'en' ? 'Body contouring & clinical diet' : 'نحت القوام والتغذية المتوازنة',
      icon: BodyContourIcon,
      href: '/services/nutrition-contouring' 
    },
    { 
      id: 'hair', 
      label: language === 'en' ? '03 — Hair Transplant & Care' : '03 — زراعة وعلاج الشعر', 
      desc: language === 'en' ? 'Restoration & scalp solutions' : 'حلول تساقط واستعادة الشعر',
      icon: HairFollicleIcon,
      href: '/services/hair-restoration' 
    },
  ];

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services, hasDropdown: true },
    { href: '/dr-freehan', label: t.nav.doctor },
    { href: '/results', label: t.nav.results },
    { href: '/video-gallery', label: t.nav.videoGallery },
    { href: '/offers', label: t.nav.offers },
    { href: '/contact-us', label: t.nav.contact },
  ];

  // Visual style calculation based on page & scroll
  const isDarkNavTheme = isHomePage && !isScrolled;

  return (
    <>
      {/* ======================= TOP BAR ======================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-[#070b13] text-slate-300 text-[11px] sm:text-xs font-medium tracking-wide border-b border-white/5"
        initial={{ height: 'auto', opacity: 1, y: 0 }}
        animate={{ 
          height: isScrolled ? 0 : '38px', 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -38 : 0
        }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:01126660905" className="flex items-center gap-2 hover:text-amber-400 transition-colors group">
              <div className="p-1 rounded-full bg-white/5 group-hover:bg-amber-400/10 transition-colors">
                <Phone className="w-3 h-3 text-amber-400" />
              </div>
              <span className="font-mono" dir="ltr">011 2666 0905</span>
            </a>
            <span className="hidden md:flex items-center gap-2 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-500/80" /> 
              {language === 'en' ? 'Damietta — Safwa Mall & Central Zone' : 'دمياط — الصفوة مول والمنطقة المركزية'}
            </span>
          </div>

          <div className="flex items-center gap-4">
             <span className="hidden sm:flex items-center gap-2 text-slate-400">
                <Clock className="w-3 h-3 text-amber-500/80" /> 
                {language === 'en' ? 'Daily: 10:00 AM – 10:00 PM' : 'يومياً: ١٠:٠٠ ص – ١٠:٠٠ م'}
             </span>
             
             {/* Language Switcher in Topbar */}
             <div dir="ltr" className="sm:hidden flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                <button 
                  onClick={() => setLanguage('ar')}
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded transition-all",
                    language === 'ar' ? 'text-amber-400 font-extrabold' : 'text-slate-400 hover:text-white'
                  )}
                >
                  AR
                </button>
                <span className="text-white/20 text-[10px]">|</span>
                <button 
                  onClick={() => setLanguage('en')}
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded transition-all",
                    language === 'en' ? 'text-amber-400 font-extrabold' : 'text-slate-400 hover:text-white'
                  )}
                >
                  EN
                </button>
             </div>
          </div>
        </div>
      </motion.div>

      {/* ======================= MAIN NAVBAR ======================= */}
      <motion.header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-500",
          isScrolled ? "top-3" : "top-[38px]" 
        )}
      >
        <div className="container mx-auto px-3 sm:px-6">
          <div className={cn(
            "mx-auto transition-all duration-300 flex items-center justify-between px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full border max-w-7xl",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10 border-slate-200/80 text-slate-900"
              : isDarkNavTheme
                ? "bg-black/40 backdrop-blur-md border-white/10 text-white shadow-lg"
                : "bg-white/90 backdrop-blur-md border-slate-200/80 text-slate-900 shadow-sm"
          )}>
            
            {/* BRAND LOGO */}
            <Link to="/" className="relative z-10 flex items-center gap-3 group shrink-0">
               <div className="relative transition-all duration-300 py-1 w-28 sm:w-32 lg:w-36 shrink-0">
                  <img 
                    src={isScrolled ? "/blogo.png" : isDarkNavTheme ? "/logo.png" : "/blogo.png"} 
                    alt="Dr. Freehan Zakaria" 
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
               </div>
            </Link>

            {/* 2. DESKTOP NAV LINKS (PAGES SECTION) */}
            <nav className={cn(
              "hidden xl:flex items-center p-1 rounded-full border tracking-wide shrink-0 gap-0.5 lg:gap-1 px-1",
              isScrolled || !isDarkNavTheme
                ? "bg-slate-100/70 border-slate-200/60 text-slate-600"
                : "bg-white/5 border-white/10 text-slate-300"
            )}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.href}
                      className="relative shrink-0"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          "relative py-1.5 sm:py-2 transition-all duration-300 rounded-full z-10 flex items-center gap-1 whitespace-nowrap shrink-0 px-2.5 lg:px-3 text-xs",
                          isRTL ? "font-bold" : "font-semibold",
                          isActive || isServicesHovered 
                            ? (isScrolled || !isDarkNavTheme ? "text-slate-950 font-bold" : "text-white font-bold")
                            : "hover:text-amber-500"
                        )}
                      >
                        <span className="whitespace-nowrap">{link.label}</span>
                        <ChevronDown className={cn("w-3 h-3 transition-transform duration-300 shrink-0", isServicesHovered ? "rotate-180 text-amber-500" : "")} />
                        {isActive && !isServicesHovered && (
                          <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-slate-200/50" />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50"
                          >
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-2.5 text-slate-800">
                               {serviceSubLinks.map((subItem) => (
                                 <Link
                                   key={subItem.id}
                                   to={subItem.href}
                                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 text-slate-700 hover:text-slate-950 transition-colors group"
                                 >
                                    <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-700 transition-colors shrink-0">
                                       <subItem.icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-start">
                                      <p className="text-xs font-bold text-slate-900 group-hover:text-amber-700">{subItem.label}</p>
                                      <p className="text-[10px] text-slate-500 mt-0.5">{subItem.desc}</p>
                                    </div>
                                 </Link>
                               ))}
                               <div className="border-t border-slate-100 mt-1 pt-1.5 px-1">
                                  <Link
                                    to="/services"
                                    className="flex items-center justify-between text-[11px] font-bold text-amber-600 hover:text-amber-700 p-2 rounded-lg hover:bg-amber-50 transition-colors"
                                  >
                                    <span>{language === 'en' ? 'View All Clinic Services' : 'استعراض جميع الخدمات'}</span>
                                    <ArrowRight className={cn("w-3.5 h-3.5", isRTL ? "rotate-180" : "")} />
                                  </Link>
                               </div>
                            </div>
                          </motion.div> 
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "relative py-1.5 sm:py-2 transition-all duration-300 rounded-full z-10 whitespace-nowrap shrink-0 px-2.5 lg:px-3 text-xs",
                      isRTL ? "font-bold" : "font-semibold",
                      isActive 
                        ? (isScrolled || !isDarkNavTheme ? "text-slate-950 font-bold" : "text-white font-bold")
                        : "hover:text-amber-500"
                    )}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className={cn(
                          "absolute inset-0 shadow-sm rounded-full -z-10",
                          isScrolled || !isDarkNavTheme 
                            ? "bg-white border border-slate-200/60" 
                            : "bg-white/20 border border-white/20"
                        )}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. DESKTOP LANGUAGE SWITCHER (AR | EN) */}
            <div 
              dir="ltr"
              className={cn(
                "hidden xl:flex items-center rounded-full p-1 border text-xs font-bold transition-colors shrink-0 whitespace-nowrap",
                isScrolled || !isDarkNavTheme
                  ? "bg-slate-100 border-slate-200 text-slate-700"
                  : "bg-black/30 border-white/15 text-slate-300"
              )}
            >
              <button
                onClick={() => setLanguage('ar')}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-all text-xs font-bold",
                  language === 'ar'
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "hover:text-amber-500"
                )}
              >
                AR
              </button>
              <span className="px-1 text-slate-400 text-xs">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-all text-xs font-bold",
                  language === 'en'
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "hover:text-amber-500"
                )}
              >
                EN
              </button>
            </div>

            {/* 4. DESKTOP BOOKING CTA BUTTON */}
            <Link to="/booking" className="hidden xl:block shrink-0">
              <ShimmerButton className="px-4 sm:px-5 py-2 text-xs sm:text-sm whitespace-nowrap shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                <span className="whitespace-nowrap">{t.nav.bookAppointment}</span>
              </ShimmerButton>
            </Link>

            {/* 5. MOBILE & TABLET ACTIONS (< xl) */}
            <div className="flex xl:hidden items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Switcher (tablet only) */}
              <div 
                dir="ltr"
                className={cn(
                  "hidden sm:flex items-center rounded-full p-1 border text-xs font-bold transition-colors shrink-0 whitespace-nowrap",
                  isScrolled || !isDarkNavTheme
                    ? "bg-slate-100 border-slate-200 text-slate-700"
                    : "bg-black/30 border-white/15 text-slate-300"
                )}
              >
                <button
                  onClick={() => setLanguage('ar')}
                  className={cn(
                    "px-2.5 py-1 rounded-full transition-all text-xs font-bold",
                    language === 'ar'
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "hover:text-amber-500"
                  )}
                >
                  AR
                </button>
                <span className="px-1 text-slate-400 text-xs">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    "px-2.5 py-1 rounded-full transition-all text-xs font-bold",
                    language === 'en'
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "hover:text-amber-500"
                  )}
                >
                  EN
                </button>
              </div>

              {/* Booking CTA Button */}
              <Link to="/booking" className="shrink-0">
                <ShimmerButton className="px-4 sm:px-5 py-2 text-xs sm:text-sm whitespace-nowrap shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  <span className="whitespace-nowrap">{t.nav.bookAppointment}</span>
                </ShimmerButton>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Navigation Menu"
                className={cn(
                  "p-2.5 rounded-full shadow-sm border active:scale-90 transition-transform",
                  isScrolled || !isDarkNavTheme
                    ? "bg-slate-50 border-slate-200 text-slate-900"
                    : "bg-white/10 border-white/20 text-white"
                )}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ======================= MOBILE DRAWER ======================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 xl:hidden"
            />
            
            <motion.div
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-[85%] max-w-[340px] bg-white z-50 xl:hidden shadow-2xl flex flex-col`}
            >
              {/* Drawer Header */}
              <div className="p-5 flex justify-between items-center border-b border-slate-100">
                <div className="w-32">
                   <img src="/blogo.png" alt="Dr. Freehan Zakaria" className="w-full h-auto" />
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 bg-slate-100 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-5 px-4 space-y-1.5">
                {navLinks.map((link, i) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.href} className="bg-slate-50/80 rounded-2xl overflow-hidden border border-slate-100">
                         <div 
                           className="flex items-center justify-between p-3.5 cursor-pointer" 
                           onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                         >
                            <span className={cn("text-sm font-bold", location.pathname === link.href ? "text-amber-600" : "text-slate-800")}>
                               {link.label}
                            </span>
                            <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform duration-300", isMobileServicesOpen ? "rotate-180" : "")} />
                         </div>

                         <AnimatePresence>
                           {isMobileServicesOpen && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               className="overflow-hidden bg-white/70"
                             >
                                <div className="px-3 pb-3 space-y-1">
                                   {serviceSubLinks.map((subLink) => (
                                      <Link
                                        key={subLink.id}
                                        to={subLink.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 transition-all text-xs font-medium"
                                      >
                                         <subLink.icon className="w-3.5 h-3.5 text-amber-600" />
                                         <span>{subLink.label}</span>
                                      </Link>
                                   ))}
                                   <Link
                                      to="/services"
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-2 p-2.5 mt-1 text-xs font-bold text-amber-600 justify-center bg-amber-50 rounded-xl"
                                   >
                                      <span>{language === 'en' ? 'View All Services' : 'عرض كل الخدمات'}</span>
                                      <ArrowRight className={cn("w-3.5 h-3.5", isRTL ? "rotate-180" : "")} />
                                   </Link>
                                </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-all",
                        location.pathname === link.href 
                          ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" 
                          : "text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      <span>{link.label}</span>
                      {location.pathname === link.href && (
                        <ArrowRight className={cn("w-4 h-4 text-amber-400", isRTL ? "rotate-180" : "")} />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer with Language and Booking */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span>{language === 'en' ? 'Language / اللغة' : 'اللغة / Language'}</span>
                    <div className="flex items-center gap-1 bg-white p-1 rounded-lg border shadow-sm">
                      <button 
                        onClick={() => setLanguage('ar')}
                        className={cn("px-2.5 py-1 rounded text-xs font-bold", language === 'ar' ? 'bg-amber-500 text-slate-950' : 'text-slate-600')}
                      >
                        العربية
                      </button>
                      <button 
                        onClick={() => setLanguage('en')}
                        className={cn("px-2.5 py-1 rounded text-xs font-bold", language === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-600')}
                      >
                        English
                      </button>
                    </div>
                  </div>

                  <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full">
                    <ShimmerButton className="w-full py-3.5 text-sm">
                       <Sparkles className="w-4 h-4 text-slate-950" />
                       <span>{t.nav.bookAppointment}</span>
                    </ShimmerButton>
                  </Link>

                  <a 
                    href="tel:01126660905" 
                    dir="ltr"
                    className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-amber-600 py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span dir="ltr">011 2666 0905</span>
                  </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
