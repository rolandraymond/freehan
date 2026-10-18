import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Apple, Dumbbell, Zap, Activity, Heart, Target, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const NutritionContouring = () => {
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const procedures = [
    {
      icon: Apple,
      title: language === 'ar' ? 'أنظمة غذائية علاجية مخصصة' : 'Personalized Clinical Nutrition',
      description: language === 'ar'
        ? 'خطط تغذية مدروسة طبياً تناسب حالتك الصحية، أسلوب حياتك، ومعدل الحرق لجسمك.'
        : 'Scientifically crafted nutrition plans aligned with your metabolic rate and lifestyle goals.',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'تقنيات نحت القوام الموضعي' : 'Targeted Body Contouring',
      description: language === 'ar'
        ? 'أجهزة حديثة لتفتيت الدهون العنيدة ونحت المناطق الصعبة بدون جراحة أو فترة نقاهة.'
        : 'Non-surgical sculpting technologies designed to melt localized fat deposits safely.',
    },
    {
      icon: Activity,
      title: language === 'ar' ? 'علاج السيلوليت وشد الترهلات' : 'Cellulite Reduction & Skin Tightening',
      description: language === 'ar'
        ? 'موجات كهرومغناطيسية وترددات حرارية متطورة لشد الجلد وتحسين ملمسه ومظهره.'
        : 'Advanced radiofrequency and acoustic wave therapies for firmer skin texture.',
    },
    {
      icon: Dumbbell,
      title: language === 'ar' ? 'تحفيز وبناء العضلات' : 'Electromagnetic Muscle Activation',
      description: language === 'ar'
        ? 'جلسات مكثفة لتقوية عضلات البطن والأرداف والذراعين مع تعزيز حرق الدهون.'
        : 'High-intensity electromagnetic stimulation to tone muscle tone and metabolic efficiency.',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'متابعة دورية وقياسات إنبودي' : 'InBody Assessment & Bio-tracking',
      description: language === 'ar'
        ? 'تحليل دوري لنسبة الدهون والماء والعضلات لضمان التطور المستمر وحماية الكتلة العضلية.'
        : 'Comprehensive bio-impedance monitoring tracking fat loss vs muscle retention.',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'تثبيت الوزن وتغيير نمط الحياة' : 'Lifestyle Sustenance & Maintenance',
      description: language === 'ar'
        ? 'إرشادات عملية لتثبيت النتيجة المثالية وضمان عدم عودة الدهون مع عادات صحية مستدامة.'
        : 'Practical guidance for weight stabilization and lifelong sustainable wellness habits.',
    },
  ];

  return (
    <div className="pt-36 pb-24 lg:pt-44 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-amber-600" />
            <span>02 — {t.services.nutrition.title}</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-5 font-cairo">
            {t.services.nutrition.pageTitle}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.services.nutrition.pageDescription}
          </p>
        </motion.div>
      </section>

      {/* Grid of Procedures */}
      <section className="container mx-auto px-4 sm:px-6 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {procedures.map((proc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-6 text-amber-600">
                  <proc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-cairo">
                  {proc.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {proc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>{language === 'ar' ? 'خطة متوازنة تناسب جسمك' : 'Customized Body Plan'}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Booking CTA */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
           <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                {language === 'ar' ? 'استشارة التغذية ونحت القوام' : 'Nutrition & Sculpting Assessment'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-cairo">
                {t.doctor.bookCta}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
                {language === 'ar'
                  ? 'ابدأ خطتك مع د. فريهان لتحديد احتياجات جسمك بدقة والوصول لنتيجة صحية ومتناسقة.'
                  : 'Start your transformation journey with Dr. Freehan to achieve healthy, harmonious results.'}
              </p>
           </div>
           <Link to="/booking">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105 shrink-0">
                 {t.nav.bookAppointment}
              </button>
           </Link>
        </div>
      </section>

    </div>
  );
};

export default NutritionContouring;
