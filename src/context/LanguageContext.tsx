import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationContent } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = (localStorage.getItem('dr-freehan-language') || localStorage.getItem('dr-freihan-language')) as Language;
    if (saved === 'en' || saved === 'ar') return saved;
    return 'ar'; // Default to Arabic as requested for clinic audience
  });

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update Document Title dynamically
    if (language === 'ar') {
      document.title = 'د. فريهان زكريا | الجلدية والتجميل والليزر والتغذية العلاجية';
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.title = 'Dr. Freehan Zakaria | Dermatology, Aesthetics, Laser & Clinical Nutrition';
      document.body.style.fontFamily = "'Montserrat', sans-serif";
    }
    
    // Save preference
    localStorage.setItem('dr-freehan-language', language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.ar,
    isRTL: language === 'ar',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
