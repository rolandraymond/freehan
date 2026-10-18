import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, MessageSquare, ArrowRight, ArrowLeft, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  const { t, language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const clinicWhatsApp = '201503656589';

    // Format WhatsApp message with inquiry header and all entered details
    const messageLines = language === 'ar' ? [
      '✨ *استفسار جديد - عيادة د. فريهان زكريا*',
      '━━━━━━━━━━━━━━━━━━',
      `👤 *الاسم بالكامل:* ${formData.name.trim()}`,
      `📱 *رقم الهاتف:* ${formData.phone.trim()}`,
      formData.email.trim() ? `📧 *البريد الإلكتروني:* ${formData.email.trim()}` : null,
      '💬 *نص الاستفسار / الرسالة:*',
      formData.message.trim(),
      '━━━━━━━━━━━━━━━━━━',
      'تم الإرسال عبر صفحة تواصل معنا بالموقع'
    ] : [
      '✨ *New Inquiry - Dr. Freehan Zakaria Clinic*',
      '━━━━━━━━━━━━━━━━━━',
      `👤 *Full Name:* ${formData.name.trim()}`,
      `📱 *Phone Number:* ${formData.phone.trim()}`,
      formData.email.trim() ? `📧 *Email Address:* ${formData.email.trim()}` : null,
      '💬 *Inquiry / Message:*',
      formData.message.trim(),
      '━━━━━━━━━━━━━━━━━━',
      'Sent via Contact Us Page'
    ];

    const messageText = messageLines.filter(Boolean).join('\n');
    const whatsappUrl = `https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp conversation
    window.open(whatsappUrl, '_blank');

    setFormSent(true);
  };

  const branches = [
    {
      name: language === 'ar' ? 'فرع دمياط القديمة' : 'Damietta Branch',
      address: t.footer.damietta,
      phone: '015 5800 8278',
      whatsapp: 'https://wa.me/201558008278',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('الصفوة مول دمياط برج 2'),
    },
    {
      name: language === 'ar' ? 'فرع دمياط الجديدة' : 'New Damietta Branch',
      address: t.footer.newDamietta,
      phone: '015 0365 6589',
      whatsapp: 'https://wa.me/201503656589',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('المنطقة المركزية المصرف المتحد دمياط الجديدة'),
    },
  ];

  return (
    <div className="relative pt-40 sm:pt-48 lg:pt-52 pb-24 bg-gradient-to-b from-[#FFF5F7] via-[#FFF9FA] to-[#FDF4F6] min-h-screen overflow-hidden">
      
      {/* Feminine Ambient Glows & Sparkles in Background */}
      <div className="absolute top-20 start-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-pink-300/20 via-rose-200/25 to-amber-200/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] end-[-10%] w-[450px] h-[450px] bg-rose-200/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] start-[-5%] w-[400px] h-[400px] bg-pink-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 text-center max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200/90 bg-gradient-to-r from-rose-100/90 via-pink-50 to-amber-50 text-rose-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>{t.contact.tag}</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-4 font-cairo">
            <span>{t.contact.title}</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            {t.contact.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Grid: Form & Info */}
      <section className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 25 : -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-3xl p-7 sm:p-10 border border-rose-100/90 shadow-[0_20px_50px_rgba(244,63,94,0.06)] hover:border-rose-200 transition-all"
          >
            {formSent ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2 font-cairo">
                  {language === 'ar' ? 'تم تجهيز استفسارك وفتح الواتساب' : 'Inquiry Ready & WhatsApp Opened'}
                </h3>
                <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                  {language === 'ar' 
                    ? 'تم توجيه استفسارك مباشرة لرقم واتساب العيادة (01503656589)، وسيقوم الفريق الطبي بالرد عليك فوراً.' 
                    : 'Your inquiry has been directed to the clinic WhatsApp (01503656589). Our team will reply shortly.'}
                </p>
                <Button 
                  onClick={() => setFormSent(false)} 
                  variant="outline"
                  className="rounded-full px-6 text-xs font-bold border-rose-200 text-rose-700 hover:bg-rose-50"
                >
                  {language === 'ar' ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-5 text-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-cairo">
                      {language === 'ar' ? 'أرسل لنا استفسارك' : 'Send Us a Message'}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mb-6 ps-4">
                    {language === 'ar'
                      ? 'نسعد باستقبال أسئلتك ومساعدتك في اختيار الخدمة المناسبة.'
                      : 'We welcome your questions and are delighted to assist your aesthetic journey.'}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span>{t.contact.name}</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.name}
                    className="rounded-2xl border-rose-100 bg-rose-50/20 py-6 text-sm focus-visible:ring-rose-400 focus-visible:border-rose-400 transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">{t.contact.email}</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.email}
                      className="rounded-2xl border-rose-100 bg-rose-50/20 py-6 text-sm focus-visible:ring-rose-400 focus-visible:border-rose-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span>{t.contact.phone}</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phone}
                      className="rounded-2xl border-rose-100 bg-rose-50/20 py-6 text-sm focus-visible:ring-rose-400 focus-visible:border-rose-400 font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span>{t.contact.message}</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.message}
                    className="rounded-2xl border-rose-100 bg-rose-50/20 text-sm focus-visible:ring-rose-400 focus-visible:border-rose-400 transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-6 rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-600 hover:via-pink-500 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-rose-500/25 transition-all group overflow-hidden relative"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <Send className="w-4 h-4 me-2 text-slate-950 relative z-10" />
                  <span className="relative z-10">{t.contact.send}</span>
                </Button>
              </form>
            )}
          </motion.div>

          {/* Branches & Direct Contact (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -25 : 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-start"
          >
            {/* Quick Booking Callout - Feminine Rose & Gold Elegance */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-rose-100/70 via-pink-50/80 to-amber-50/60 border border-rose-200/90 shadow-[0_15px_35px_rgba(244,63,94,0.08)] relative overflow-hidden">
              <div className="absolute -top-10 -end-10 w-32 h-32 bg-rose-300/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span className="text-rose-700 font-extrabold text-xs uppercase tracking-wider block">
                  {language === 'ar' ? 'حجز موعد كشف أو استشارة' : 'Need an Appointment?'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-950 font-cairo mb-2">
                {t.doctor.bookCta}
              </h3>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {language === 'ar'
                  ? 'يمكنك الانتقال لصفحة الحجز المخصصة لاختيار الموعد والفرع وتأكيد طلبك مباشرة.'
                  : 'You can navigate to the dedicated booking portal to pick your slot and branch directly.'}
              </p>
              <Link to="/booking">
                <Button className="w-full rounded-full py-5 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 hover:from-rose-600 hover:via-pink-500 hover:to-amber-300 text-slate-950 font-bold text-xs shadow-md shadow-rose-500/20 group">
                  <span>{t.nav.bookAppointment}</span>
                  <ArrowIcon className="w-3.5 h-3.5 ms-1.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Branches list */}
            {branches.map((branch, index) => (
              <div key={index} className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-rose-100/90 hover:border-rose-300/80 shadow-sm hover:shadow-[0_10px_25px_rgba(244,63,94,0.06)] transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-slate-950 font-cairo">{branch.name}</h4>
                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>{t.common.directions}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </a>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5 text-rose-500">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed pt-0.5">{branch.address}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 ps-8">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <a href={`tel:${branch.phone}`} dir="ltr" className="hover:text-rose-600 transition-colors font-semibold">
                        <span dir="ltr">{branch.phone}</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors">
                        <span dir="ltr">{branch.phone}</span> ({language === 'ar' ? 'واتساب' : 'WhatsApp'})
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media Channels */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-rose-100/90 shadow-sm space-y-3">
              <p className="text-xs font-bold text-slate-900">{t.footer.followUs}</p>
              <div className="flex items-center gap-3 pt-1">
                <a 
                  href="https://www.facebook.com/Dr.Freehan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-rose-50/70 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300 text-slate-700 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/dr_freehan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-rose-50/70 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-700 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@freehanzakria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-rose-50/70 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 text-slate-700 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                </a>
                <a 
                  href="https://www.youtube.com/@freehanzakria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-rose-50/70 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-700 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Working Hours & Direct Mobiles */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-rose-100/90 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5 text-rose-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-900">{t.footer.workingHours}</p>
                   <p className="text-xs text-slate-500 font-mono mt-0.5">{t.footer.hours}</p>
                </div>
              </div>
              
              <div className="pt-3 border-t border-rose-100/60 space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-100/80 to-pink-50 flex items-center justify-center shrink-0 border border-rose-200/60">
                    <Smartphone className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">{language === 'ar' ? 'موبايل الحجز' : 'Booking Mobile'}</span>
                    <a href="tel:01126660905" dir="ltr" className="text-xs font-bold font-mono text-slate-900 hover:text-rose-600 transition-colors">
                      <span dir="ltr">011 2666 0905</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-100/80 to-pink-50 flex items-center justify-center shrink-0 border border-rose-200/60">
                    <Smartphone className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">{language === 'ar' ? 'موبايل الحجز' : 'Booking Mobile'}</span>
                    <a href="tel:01026204093" dir="ltr" className="text-xs font-bold font-mono text-slate-900 hover:text-rose-600 transition-colors">
                      <span dir="ltr">010 2620 4093</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ContactUs;
