import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-32 pb-20 px-4 bg-slate-50">
      <div className="text-center max-w-md mx-auto bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
        <span className="text-amber-500 font-mono font-bold text-6xl block mb-2">404</span>
        <h1 className="text-2xl font-bold text-slate-950 mb-3 font-cairo">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h1>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          {language === 'ar' 
            ? 'عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.' 
            : 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-900 transition-all shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{language === 'ar' ? 'العودة للرئيسية' : 'Return to Home'}</span>
          <ArrowIcon className="w-3.5 h-3.5 text-amber-400" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
