import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ArrowRight, Sparkles, MessageCircle, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  isLink?: boolean;
  href?: string;
  isRTL?: boolean;
}

const Footer = () => {
  const { t, isRTL, language } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/dr-freehan', label: t.nav.doctor },
    { href: '/dr-freehan#vision-mission', label: language === 'ar' ? 'رؤيتنا ورسالتنا' : 'Vision & Mission' },
    { href: '/results', label: t.nav.results },
    { href: '/offers', label: t.nav.offers },
    { href: '/booking', label: t.nav.bookAppointment },
    { href: '/contact-us', label: t.nav.contact },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      name: "Facebook",
      href: "https://www.facebook.com/Dr.Freehan", 
      hover: "hover:bg-blue-600 hover:border-blue-600 text-white" 
    },
    { 
      icon: Instagram, 
      name: "Instagram",
      href: "https://www.instagram.com/dr_freehan/", 
      hover: "hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 hover:border-transparent text-white" 
    },
    { 
      icon: TikTokIcon, 
      name: "TikTok",
      href: "https://www.tiktok.com/@freehanzakria", 
      hover: "hover:bg-black hover:border-slate-500 text-white" 
    },
    { 
      icon: Youtube, 
      name: "YouTube",
      href: "https://www.youtube.com/@freehanzakria", 
      hover: "hover:bg-red-600 hover:border-red-600 text-white" 
    },
  ];

  return (
    <footer className="relative bg-[#050811] text-slate-300 overflow-hidden pt-20 pb-10 border-t border-amber-500/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Doctor Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block relative group">
              <div className="w-44 py-1">
                <img 
                  src="/logo.png" 
                  alt="Dr. Freehan Zakaria" 
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="space-y-2">
              {t.doctor.title ? (
                <p className="text-amber-400 font-bold text-sm tracking-wide">
                  {t.doctor.title}
                </p>
              ) : null}
              <p className="text-xs font-medium text-amber-400/90 leading-relaxed max-w-sm">
                {t.doctor.specialization}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
                {t.footer.aboutText}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={cn(
                    "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-slate-300",
                    social.hover
                  )}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:ps-6">
            <h4 className="text-base font-bold text-white mb-6 relative inline-block">
              {t.footer.quickLinks}
              <span className="absolute -bottom-2.5 start-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2.5 text-xs text-slate-400 hover:text-amber-400 transition-colors py-1"
                  >
                    <ArrowRight className={cn(
                      "w-3 h-3 text-amber-500/60 group-hover:text-amber-400 transition-transform duration-300 group-hover:translate-x-1",
                      isRTL ? "rotate-180 group-hover:-translate-x-1" : ""
                    )} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Clinic Branches */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative inline-block">
              {t.footer.branches}
              <span className="absolute -bottom-2.5 start-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
            </h4>
            <div className="space-y-5">
               <div>
                 <ContactItem 
                   icon={MapPin} 
                   title={language === 'ar' ? 'فرع دمياط القديمة' : 'Damietta Branch'} 
                   desc={t.footer.damietta} 
                   isRTL={isRTL}
                 />
                 <div className="ps-8 pt-1 text-xs font-mono text-slate-300">
                   <a href="tel:+201558008278" dir="ltr" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                     <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                     <span dir="ltr">015 5800 8278</span>
                   </a>
                 </div>
               </div>

               <div>
                 <ContactItem 
                   icon={MapPin} 
                   title={language === 'ar' ? 'فرع دمياط الجديدة' : 'New Damietta Branch'} 
                   desc={t.footer.newDamietta} 
                   isRTL={isRTL}
                 />
                 <div className="ps-8 pt-1 text-xs font-mono text-slate-300">
                   <a href="tel:+201503656589" dir="ltr" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                     <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                     <span dir="ltr">015 0365 6589</span>
                   </a>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Consultation Booking Card */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative inline-block">
              {language === 'ar' ? 'حجز المواعيد والاستفسارات' : 'Consultations & Booking'}
              <span className="absolute -bottom-2.5 start-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
            </h4>
            
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-md space-y-4">
               <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                     <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                     <p className="text-white font-bold text-xs mb-0.5">{t.footer.workingHours}</p>
                     <p className="text-[11px] text-slate-400 leading-relaxed font-mono">{t.footer.hours}</p>
                  </div>
               </div>
               
               {/* Mobile numbers from TikTok & Facebook with Smartphone icon */}
               <div className="border-t border-white/10 pt-3.5 space-y-2.5">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <Smartphone className="w-4 h-4 text-amber-400" />
                     </div>
                     <div>
                        <span className="text-[10px] text-slate-400 block">{language === 'ar' ? 'موبايل الحجز' : 'Booking Mobile'}</span>
                        <a href="tel:01126660905" dir="ltr" className="text-xs text-white hover:text-amber-400 font-mono font-bold transition-colors">
                          <span dir="ltr">011 2666 0905</span>
                        </a>
                     </div>
                  </div>

                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <Smartphone className="w-4 h-4 text-amber-400" />
                     </div>
                     <div>
                        <span className="text-[10px] text-slate-400 block">{language === 'ar' ? 'موبايل الحجز' : 'Booking Mobile'}</span>
                        <a href="tel:01026204093" dir="ltr" className="text-xs text-white hover:text-amber-400 font-mono font-bold transition-colors">
                          <span dir="ltr">010 2620 4093</span>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="pt-2">
                 <Link 
                   to="/booking" 
                   className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-md hover:shadow-amber-500/30 transition-all hover:scale-[1.02]"
                 >
                   <Sparkles className="w-3.5 h-3.5" />
                   <span>{t.nav.bookAppointment}</span>
                 </Link>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-start">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
             <Link to="/dr-freehan#vision-mission" className="hover:text-amber-400 transition-colors">
               {t.footer.privacy}
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon: Icon, title, desc, isLink, href }: ContactItemProps) => {
  const Content = () => (
    <div className="flex gap-3 group cursor-default items-center">
       <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300 shrink-0">
          <Icon className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
       </div>
       <div>
          <p className="text-white font-bold text-xs mb-0.5 group-hover:text-amber-400 transition-colors">{title}</p>
          <p className="text-[11px] text-slate-400 leading-snug">{desc}</p>
       </div>
    </div>
  );

  return isLink ? <a href={href} className="block">{Content()}</a> : Content();
};

export default Footer;