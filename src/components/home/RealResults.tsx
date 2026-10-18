import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  SlidersHorizontal,
  Columns,
  Play,
  ExternalLink
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ServiceCase {
  id: string;
  labelEn: string;
  labelAr: string;
  categoryEn?: string;
  categoryAr?: string;
  link: string;
  beforeImages: string[];
  afterImages: string[];
}

interface Specialty {
  id: string;
  labelEn: string;
  labelAr: string;
  casesCountEn: string;
  casesCountAr: string;
  icon: React.ReactNode;
  mainLink: string;
  services: ServiceCase[];
}

// Aesthetic Syringe / Injections Icon
const SyringeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L13.9 3.9" />
    <path d="m5 19 4-4" />
    <path d="m14 4 6 6" />
  </svg>
);

// Accurate Hair Follicle & Root Bulb Icon (بصيلة شعر وشعرة واضحة)
const HairFollicleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 21c-2 0-3.5-1.5-3.5-3.5 0-2 1.5-4 3.5-7 2.5-3.8 3-6.5 1-9.5" />
    <path d="M16 21a2.5 2.5 0 0 0 2.5-2.5c0-1.8-1.2-3.2-2.5-5" />
    <path d="M5 14h5" />
    <path d="M4 18h6" />
    <circle cx="16" cy="18.5" r="1.5" fill="currentColor" />
  </svg>
);

// Medical Surgical Scalpel Icon for Surgical Aesthetics (رمز التجميل الجراحي)
const SurgicalScalpelIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    <path d="M3 21h7" />
    <path d="m14.5 6.5 3 3" />
  </svg>
);

// Complete verified clinical cases mapped to their medically accurate specialties
const specialties: Specialty[] = [
  {
    id: "fillers",
    labelEn: "Aesthetic Fillers & Contouring",
    labelAr: "الفيلر وتنسيق ملامح الوجه",
    casesCountEn: "7 Cases",
    casesCountAr: "7 حالات",
    icon: <SyringeIcon className="w-5 h-5 md:w-6 md:h-6" />, 
    mainLink: "/services/dermatology-laser",
    services: [
      { 
        id: "filler-lip-1", 
        labelEn: "Case 1", 
        labelAr: "حالة 1", 
        link: "/services/dermatology-laser", 
        beforeImages: [
          "/images/cases/lip_case1_before_main.jpg"
        ],
        afterImages: [
          "/images/cases/lip_case1_after_main.jpg",
          "/images/cases/lip_case1_after_2.jpg"
        ]
      },
      { 
        id: "filler-lip-2", 
        labelEn: "Case 2", 
        labelAr: "حالة 2", 
        link: "/services/dermatology-laser", 
        beforeImages: [
          "/images/cases/lip_case2_b_framed.jpg",
          "/images/cases/lip_case2_b2_framed.jpg"
        ],
        afterImages: [
          "/images/cases/lip_case2_a_framed.jpg",
          "/images/cases/lip_case2_a2_framed.jpg"
        ]
      },
      { 
        id: "filler-lip-3", 
        labelEn: "Case 3", 
        labelAr: "حالة 3", 
        link: "/services/dermatology-laser", 
        beforeImages: [
          "/images/cases/lip_case3_b_framed.jpg",
          "/images/cases/lip_case3_b2_framed.jpg"
        ],
        afterImages: [
          "/images/cases/lip_case3_a_framed.jpg",
          "/images/cases/lip_case3_a2_framed.jpg",
          "/images/cases/lip_case3_a3_framed.jpg",
          "/images/cases/lip_case3_a4_framed.jpg"
        ]
      },
      { 
        id: "filler-sides", 
        labelEn: "Case 4", 
        labelAr: "حالة 4", 
        link: "/services/dermatology-laser", 
        beforeImages: ["/images/imagecb10.png"],
        afterImages: ["/images/imageca10.png"]
      },
      { 
        id: "fat-liquid-lift", 
        labelEn: "Case 5", 
        labelAr: "حالة 5", 
        link: "/services/dermatology-laser", 
        beforeImages: [
          "/images/cases/fat_lift_b1_framed.jpg",
          "/images/cases/fat_lift_b2_framed.jpg",
          "/images/cases/fat_lift_b3_framed.jpg",
          "/images/cases/fat_lift_b4_framed.jpg"
        ],
        afterImages: [
          "/images/cases/fat_lift_a1_framed.jpg",
          "/images/cases/fat_lift_a2_framed.jpg",
          "/images/cases/fat_lift_a3_framed.jpg",
          "/images/cases/fat_lift_a4_framed.jpg"
        ]
      },
      { 
        id: "filler-nose", 
        labelEn: "Case 6", 
        labelAr: "حالة 6", 
        link: "/services/dermatology-laser", 
        beforeImages: ["/images/imagecb8.png"],
        afterImages: ["/images/imageca8.png"]
      },
      { 
        id: "filler-texas", 
        labelEn: "Case 7", 
        labelAr: "حالة 7", 
        link: "/services/dermatology-laser", 
        beforeImages: ["/images/imagecb6.png"],
        afterImages: ["/images/imageca6.png"]
      },
    ]
  },
  {
    id: "dermatology",
    labelEn: "Dermatology & Skin Health",
    labelAr: "الجلدية وتجديد البشرة والليزر",
    casesCountEn: "4 Cases",
    casesCountAr: "4 حالات",
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />, 
    mainLink: "/services/dermatology-laser",
    services: [
      { 
        id: "acne-1", 
        labelEn: "Case 1", 
        labelAr: "حالة 1", 
        link: "/services/dermatology-laser", 
        beforeImages: [
          "/images/cases/acne_b1.jpg",
          "/images/cases/acne_b2.jpg"
        ],
        afterImages: [
          "/images/cases/acne_a1.jpg",
          "/images/cases/acne_a2.jpg"
        ]
      },
      { 
        id: "plla-collagen", 
        labelEn: "Case 2", 
        labelAr: "حالة 2", 
        link: "/services/dermatology-laser", 
        beforeImages: [
          "/images/cases/plla_case1_b_framed.jpg",
          "/images/cases/plla_case1_b2_framed.jpg",
          "/images/cases/plla_case1_b3_framed.jpg"
        ],
        afterImages: [
          "/images/cases/plla_case1_a_framed.jpg",
          "/images/cases/plla_case1_a2_framed.jpg",
          "/images/cases/plla_case1_a3_framed.jpg"
        ]
      },
      { 
        id: "derm-laser-tag", 
        labelEn: "Case 3", 
        labelAr: "حالة 3", 
        link: "/services/dermatology-laser", 
        beforeImages: ["/images/imagecb7.png"],
        afterImages: ["/images/imageca7.png"]
      },
      { 
        id: "derm-lift", 
        labelEn: "Case 4", 
        labelAr: "حالة 4", 
        link: "/services/dermatology-laser", 
        beforeImages: ["/images/imagecb9.png"],
        afterImages: ["/images/imageca9.png"]
      },
    ]
  },
  {
    id: "hair",
    labelEn: "Hair Restoration & Treatment",
    labelAr: "زراعة وعلاج الشعر",
    casesCountEn: "2 Cases",
    casesCountAr: "حالتين",
    icon: <HairFollicleIcon className="w-5 h-5 md:w-6 md:h-6" />, 
    mainLink: "/services/hair-restoration",
    services: [
      { 
        id: "hair-1", 
        labelEn: "Case 1", 
        labelAr: "حالة 1", 
        link: "/services/hair-restoration", 
        beforeImages: [
          "/images/hair_case1_before_framed.png",
          "/images/hair_case1_b2_framed.png"
        ],
        afterImages: [
          "/images/hair_case1_after_framed.png",
          "/images/hair_case1_a2_framed.png"
        ]
      },
      { 
        id: "hair-2", 
        labelEn: "Case 2", 
        labelAr: "حالة 2", 
        link: "/services/hair-restoration", 
        beforeImages: ["/images/hair_case2_before_framed.png"],
        afterImages: ["/images/hair_case2_after_framed.png"]
      }
    ]
  },

];

export interface SpecialtyVideo {
  videoId: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  tagAr: string;
  tagEn: string;
  thumb: string;
}

const specialtyVideos: Record<string, SpecialtyVideo> = {
  fillers: {
    videoId: "wQJKUBrZrB4",
    titleAr: "ليه تحقني فيلر؟ كل ما تحتاجين معرفته عن الفيلر مع د. فريهان",
    titleEn: "Why Get Fillers? Everything You Need to Know with Dr. Freehan",
    subtitleAr: "شرح تفصيلي لتوزيع الفيلر والنتائج الطبيعية بدون مبالغة",
    subtitleEn: "Detailed explanation of filler distribution for natural results",
    tagAr: "شرح الفيلر • د. فريهان",
    tagEn: "Filler Guide • Dr. Freehan",
    thumb: "https://img.youtube.com/vi/wQJKUBrZrB4/hqdefault.jpg",
  },
  dermatology: {
    videoId: "vjrKXLBX_zo",
    titleAr: "علاج آثار حب الشباب وتجديد نضارة البشرة بتقنية Vivace",
    titleEn: "Acne Scars Treatment & Skin Rejuvenation with Vivace RF",
    subtitleAr: "كيف نحدد خطة علاج البشرة والندبات المناسبة لكل حالة",
    subtitleEn: "How customized treatment plans tackle acne scars and skin texture",
    tagAr: "تجديد البشرة • د. فريهان",
    tagEn: "Skin Rejuvenation • Dr. Freehan",
    thumb: "https://img.youtube.com/vi/vjrKXLBX_zo/hqdefault.jpg",
  },
  hair: {
    videoId: "Open3z6dXzc",
    titleAr: "زراعة الشعر والوقت المناسب للإجراء وخطوات العلاج",
    titleEn: "Best Timing & Medical Steps for Hair Transplantation",
    subtitleAr: "نصائح د. فريهان لضمان أفضل ثبات وكثافة للبصيلات المزروعة",
    subtitleEn: "Dr. Freehan's clinical advice for graft survival and natural density",
    tagAr: "زراعة الشعر • د. فريهان",
    tagEn: "Hair Restoration • Dr. Freehan",
    thumb: "https://img.youtube.com/vi/Open3z6dXzc/hqdefault.jpg",
  },
};

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeTotal: number;
  beforeCurrent: number;
  onPrevBefore: () => void;
  onNextBefore: () => void;
  afterTotal: number;
  afterCurrent: number;
  onPrevAfter: () => void;
  onNextAfter: () => void;
  isRTL: boolean;
  beforeText: string;
  afterText: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage,
  beforeTotal,
  beforeCurrent,
  onPrevBefore,
  onNextBefore,
  afterTotal,
  afterCurrent,
  onPrevAfter,
  onNextAfter,
  isRTL, 
  beforeText, 
  afterText 
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Right side of screen = BEFORE ('قبل')
  // Left side of screen = AFTER ('بعد ✨')
  const rightImage = beforeImage;
  const leftImage = afterImage;

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".badge-control")) {
      return;
    }
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div 
      ref={containerRef} 
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] sm:rounded-[3rem] overflow-hidden cursor-ew-resize shadow-2xl border-4 sm:border-8 border-white group bg-slate-900 select-none touch-none"
    >
      {/* Right Image: BEFORE (اليمين = قبل) */}
      <div className="absolute inset-0">
        <img src={rightImage} alt="Comparison Right (Before)" className="w-full h-full object-cover object-center" />
        
        {/* Right Badge: BEFORE Controls (دائماً على اليمين) */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-md flex items-center gap-2 z-20">
          {beforeTotal > 1 && (
            <button 
              type="button" 
              onClick={(e) => { e.stopPropagation(); onPrevBefore(); }} 
              className="badge-control p-1 rounded-full hover:bg-white/20 text-white transition-colors"
              title="الصورة السابقة"
            >
              {isRTL ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
            </button>
          )}
          <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-200">
            {beforeText} {beforeTotal > 1 && `(${beforeCurrent + 1}/${beforeTotal})`}
          </span>
          {beforeTotal > 1 && (
            <button 
              type="button" 
              onClick={(e) => { e.stopPropagation(); onNextBefore(); }} 
              className="badge-control p-1 rounded-full hover:bg-white/20 text-white transition-colors"
              title="الصورة التالية"
            >
              {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Left Image: AFTER (الشمال = بعد ✨) */}
      <div 
        className="absolute inset-0 overflow-hidden bg-slate-900" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={leftImage} alt="Comparison Left (After)" className="w-full h-full object-cover object-center" />
        
        {/* Left Badge: AFTER Controls (دائماً على الشمال) */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-md flex items-center gap-2 z-20">
          {afterTotal > 1 && (
            <button 
              type="button" 
              onClick={(e) => { e.stopPropagation(); onPrevAfter(); }} 
              className="badge-control p-1 rounded-full hover:bg-white/20 text-amber-400 transition-colors"
              title="الصورة السابقة"
            >
              {isRTL ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
            </button>
          )}
          <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-amber-400">
            ✨ {afterText} {afterTotal > 1 && `(${afterCurrent + 1}/${afterTotal})`}
          </span>
          {afterTotal > 1 && (
            <button 
              type="button" 
              onClick={(e) => { e.stopPropagation(); onNextAfter(); }} 
              className="badge-control p-1 rounded-full hover:bg-white/20 text-amber-400 transition-colors"
              title="الصورة التالية"
            >
              {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Split Handle */}
      <div 
        style={{ left: `${sliderPos}%` }} 
        className="absolute inset-y-0 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[3px] h-full bg-white backdrop-blur-md relative shadow-[0_0_15px_rgba(0,0,0,0.6)]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-amber-300">
              <div className="flex gap-0.5 text-amber-600">
                <ChevronLeft className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const RealResults = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]); // Default to Aesthetic Fillers
  const [activeService, setActiveService] = useState(specialties[0].services[0]);
  const [beforePhotoIndex, setBeforePhotoIndex] = useState(0);
  const [afterPhotoIndex, setAfterPhotoIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "sideBySide">("slider");
  const [activeVideo, setActiveVideo] = useState<SpecialtyVideo | null>(null);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleSelectService = (service: ServiceCase) => {
    setActiveService(service);
    setBeforePhotoIndex(0);
    setAfterPhotoIndex(0);
  };

  const handleSelectSpecialty = (spec: Specialty) => {
    setActiveSpecialty(spec);
    setActiveService(spec.services[0]);
    setBeforePhotoIndex(0);
    setAfterPhotoIndex(0);
  };

  // Safe current photo resolution
  const curBeforeImg = activeService.beforeImages[beforePhotoIndex] || activeService.beforeImages[0];
  const curAfterImg = activeService.afterImages[afterPhotoIndex] || activeService.afterImages[0];

  const handleNextBefore = () => {
    setBeforePhotoIndex((prev) => (prev + 1) % activeService.beforeImages.length);
  };

  const handlePrevBefore = () => {
    setBeforePhotoIndex((prev) => (prev - 1 + activeService.beforeImages.length) % activeService.beforeImages.length);
  };

  const handleNextAfter = () => {
    setAfterPhotoIndex((prev) => (prev + 1) % activeService.afterImages.length);
  };

  const handlePrevAfter = () => {
    setAfterPhotoIndex((prev) => (prev - 1 + activeService.afterImages.length) % activeService.afterImages.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" id="real-results">
      
      {/* Decorative Grid & Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 end-0 w-[45vw] h-[45vw] bg-amber-100/50 rounded-full blur-[130px] -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-[35vw] h-[35vw] bg-slate-200/50 rounded-full blur-[110px] translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-amber-600 flex items-center gap-2 text-xs md:text-sm mb-3 font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              {t.results.tag}
            </span>
            <p className="text-slate-500 text-sm md:text-base font-semibold mb-2">
              {t.results.subtitle}
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 font-cairo">
              {t.results.title1} {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
                {t.results.title2}
              </span>
            </h2>
          </motion.div>
          
          <p className="text-slate-600 text-sm md:text-base max-w-md font-medium leading-relaxed">
            {t.results.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Categories Selection */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {specialties.map((specialty) => {
              const isActive = activeSpecialty.id === specialty.id;
              return (
                <div key={specialty.id} className="relative flex flex-col gap-2">
                  <motion.button
                    onClick={() => handleSelectSpecialty(specialty)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full p-5 sm:p-6 rounded-[2rem] flex items-center gap-4 transition-all duration-300 border text-start backdrop-blur-md",
                      isActive 
                        ? "bg-white border-amber-400 shadow-xl shadow-amber-500/5 ring-1 ring-amber-400/30" 
                        : "bg-white/70 border-slate-200/80 hover:bg-white text-slate-600 hover:border-slate-300"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shrink-0",
                      isActive ? "bg-amber-500 text-slate-950 shadow-md" : "bg-slate-100 text-slate-500"
                    )}>
                      {specialty.icon}
                    </div>
                    <div className="flex-1">
                      <span className={cn("text-base sm:text-lg font-bold block", isActive ? "text-slate-950" : "text-slate-700")}>
                        {language === "en" ? specialty.labelEn : specialty.labelAr}
                      </span>
                      <span className="text-xs text-amber-600 font-semibold mt-0.5 block">
                        {language === "en" ? specialty.casesCountEn : specialty.casesCountAr}
                      </span>
                    </div>
                  </motion.button>
                </div>
              );
            })}

            {/* Quick Consultation Reminder */}
            <div className="p-6 rounded-[2rem] bg-amber-50/70 border border-amber-200/70 mt-2">
               <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'استشارة متخصصة' : 'Specialized Care'}</span>
               </div>
               <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {language === 'ar' 
                    ? 'كل حالة يتم تقييمها بدقة واختيار بروتوكول العلاج الأنسب لطبيعة بشرتك وملامحك.' 
                    : 'Every case is evaluated with scientific precision to choose the most natural treatment protocol.'}
               </p>
               <Link 
                 to="/booking"
                 className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-white hover:bg-amber-500 px-4 py-2.5 rounded-full border border-amber-300 shadow-sm transition-all"
               >
                 <span>{t.results.bookSimilar}</span>
                 <ArrowIcon className="w-3 h-3" />
               </Link>
            </div>
          </div>

          {/* Right Column: Case Showcase with Interactive Slider */}
          <div className="lg:col-span-8">
            {/* Filter Pills for Active Specialty Cases */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSpecialty.id}
                  className="flex gap-2 flex-wrap"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {activeSpecialty.services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleSelectService(service)}
                      className={cn(
                        "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all whitespace-nowrap border",
                        activeService.id === service.id 
                          ? "bg-slate-950 text-white border-slate-950 shadow-md scale-105" 
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                      )}
                    >
                      {language === "en" ? service.labelEn : service.labelAr}
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* View Mode Toggle Bar (طريقتين لعرض الحالة: سحب المؤشر أو عرض جنب لجنب) */}
            <div className="flex items-center justify-between mb-4 px-1 flex-wrap gap-3">
              <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-sm">
                <button
                  type="button"
                  onClick={() => setViewMode("slider")}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all",
                    viewMode === "slider"
                      ? "bg-white text-slate-950 shadow-md font-extrabold"
                      : "text-slate-600 hover:text-slate-950"
                  )}
                >
                  <SlidersHorizontal className="w-4 h-4 text-amber-600" />
                  <span>{language === 'ar' ? 'اسحب المؤشر (قبل / بعد)' : 'Interactive Slider'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("sideBySide")}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all",
                    viewMode === "sideBySide"
                      ? "bg-white text-slate-950 shadow-md font-extrabold"
                      : "text-slate-600 hover:text-slate-950"
                  )}
                >
                  <Columns className="w-4 h-4 text-amber-600" />
                  <span>{language === 'ar' ? 'عرض جنب لجنب' : 'Side by Side View'}</span>
                </button>
              </div>

              {/* Photos Counter */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                {activeService.beforeImages.length > 1 && (
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold">
                    {language === 'ar' ? `قبل: ${beforePhotoIndex + 1}/${activeService.beforeImages.length}` : `Before: ${beforePhotoIndex + 1}/${activeService.beforeImages.length}`}
                  </span>
                )}
                {activeService.afterImages.length > 1 && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 text-[11px] font-extrabold">
                    {language === 'ar' ? `بعد: ${afterPhotoIndex + 1}/${activeService.afterImages.length}` : `After: ${afterPhotoIndex + 1}/${activeService.afterImages.length}`}
                  </span>
                )}
              </div>
            </div>

            {/* Main Comparison Showcase (السلايدر التفاعلي أو العرض جنب لجنب) */}
            <div className="relative">
              {viewMode === "slider" ? (
                <BeforeAfterSlider 
                  beforeImage={curBeforeImg} 
                  afterImage={curAfterImg} 
                  beforeTotal={activeService.beforeImages.length}
                  beforeCurrent={beforePhotoIndex}
                  onPrevBefore={handlePrevBefore}
                  onNextBefore={handleNextBefore}
                  afterTotal={activeService.afterImages.length}
                  afterCurrent={afterPhotoIndex}
                  onPrevAfter={handlePrevAfter}
                  onNextAfter={handleNextAfter}
                  isRTL={isRTL}
                  beforeText={t.results.before}
                  afterText={t.results.after}
                />
              ) : (
                /* عرض جنباً إلى جنب: كارت اليمين (قبل) وكارت الشمال (بعد ✨) */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Before Card (على اليمين في العربي) */}
                  <div className={cn(
                    "relative aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-xl border-4 sm:border-6 border-white bg-slate-900 group",
                    isRTL ? "order-1" : "order-1"
                  )}>
                    <img src={curBeforeImg} alt="Before" className="w-full h-full object-cover object-center" />
                    
                    {/* Before Badge with Flippers */}
                    <div className="absolute top-4 start-4 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md flex items-center gap-2">
                      {activeService.beforeImages.length > 1 && (
                        <button 
                          type="button" 
                          onClick={handlePrevBefore}
                          className="p-0.5 rounded-full hover:bg-white/20 transition-colors"
                          title="الصورة السابقة"
                        >
                          {isRTL ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                        </button>
                      )}
                      <span>
                        {t.results.before} {activeService.beforeImages.length > 1 && `(${beforePhotoIndex + 1}/${activeService.beforeImages.length})`}
                      </span>
                      {activeService.beforeImages.length > 1 && (
                        <button 
                          type="button" 
                          onClick={handleNextBefore}
                          className="p-0.5 rounded-full hover:bg-white/20 transition-colors"
                          title="الصورة التالية"
                        >
                          {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* After Card (على الشمال في العربي) */}
                  <div className={cn(
                    "relative aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-xl border-4 sm:border-6 border-white bg-slate-900 group",
                    isRTL ? "order-2" : "order-2"
                  )}>
                    <img src={curAfterImg} alt="After" className="w-full h-full object-cover object-center" />
                    
                    {/* After Badge with Flippers */}
                    <div className="absolute top-4 start-4 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-extrabold shadow-md flex items-center gap-2">
                      {activeService.afterImages.length > 1 && (
                        <button 
                          type="button" 
                          onClick={handlePrevAfter}
                          className="p-0.5 rounded-full hover:bg-black/15 transition-colors"
                          title="الصورة السابقة"
                        >
                          {isRTL ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                        </button>
                      )}
                      <span>
                        ✨ {t.results.after} {activeService.afterImages.length > 1 && `(${afterPhotoIndex + 1}/${activeService.afterImages.length})`}
                      </span>
                      {activeService.afterImages.length > 1 && (
                        <button 
                          type="button" 
                          onClick={handleNextAfter}
                          className="p-0.5 rounded-full hover:bg-black/15 transition-colors"
                          title="الصورة التالية"
                        >
                          {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Card Meta: Row 1 (Case Title & Dr. Freehan Video), Row 2 (Booking CTA) */}
              <div className="mt-8 border-t border-slate-200/80 pt-6 space-y-4">
                {/* Row 1: Case Title Info and Video Capsule */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Case Title Info */}
                  <div className="shrink-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-cairo">
                      {language === "en" ? activeService.labelEn : activeService.labelAr}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {language === "en" ? "Result under medical supervision of Dr. Freehan Zakaria" : "النتيجة تحت إشراف طبي د. فريهان زكريا"}
                    </p>
                  </div>

                  {/* Specialty Video Capsule & See More Button */}
                  {specialtyVideos[activeSpecialty.id] && (
                    <div className="flex items-center gap-2 shrink-0">
                      {/* Video Capsule */}
                      <motion.div
                        key={`video-${activeSpecialty.id}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveVideo(specialtyVideos[activeSpecialty.id])}
                        className="group flex items-center gap-2.5 p-2 pe-3 rounded-2xl bg-gradient-to-r from-amber-50/90 via-amber-100/40 to-white border border-amber-200/90 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer select-none max-w-[260px] sm:max-w-[280px]"
                        title={language === 'ar' ? 'اضغط لمشاهدة فيديو شرح د. فريهان' : "Click to watch Dr. Freehan's video guide"}
                      >
                        {/* Thumbnail with Glowing Play Icon */}
                        <div className="relative w-14 h-12 rounded-xl overflow-hidden bg-slate-950 shrink-0 shadow-sm border border-amber-300/70">
                          <img
                            src={specialtyVideos[activeSpecialty.id].thumb}
                            alt={language === 'ar' ? specialtyVideos[activeSpecialty.id].titleAr : specialtyVideos[activeSpecialty.id].titleEn}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                              <Play className="w-3 h-3 fill-slate-950 ms-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-0.5 end-0.5 px-1 py-0.2 text-[8px] font-bold rounded bg-black/80 text-white font-mono leading-tight">
                            HD
                          </span>
                        </div>

                        {/* Text Details */}
                        <div className="text-start flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-[9px] font-extrabold uppercase tracking-wider">
                              <Sparkles className="w-2 h-2 text-amber-700" />
                              <span>{language === 'ar' ? specialtyVideos[activeSpecialty.id].tagAr : specialtyVideos[activeSpecialty.id].tagEn}</span>
                            </span>
                          </div>
                          <p className="text-[11px] font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1 font-cairo">
                            {language === 'ar' ? specialtyVideos[activeSpecialty.id].titleAr : specialtyVideos[activeSpecialty.id].titleEn}
                          </p>
                          <p className="text-[10px] text-slate-500 line-clamp-1 font-normal">
                            {language === 'ar' ? 'شرح د. فريهان للإجراء' : 'Video Guide by Dr. Freehan'}
                          </p>
                        </div>
                      </motion.div>

                      {/* YouTube See More Button */}
                      <a
                        href="https://www.youtube.com/@freehanzakria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200 hover:border-red-300 shadow-sm transition-all group shrink-0 whitespace-nowrap text-xs font-bold"
                        title={language === 'ar' ? 'مشاهدة جميع الفيديوهات على قناة يوتيوب' : 'See all videos on YouTube channel'}
                      >
                        <svg className="w-3.5 h-3.5 text-red-600 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="font-bold text-[11px] sm:text-xs">{language === 'ar' ? 'المزيد' : 'See More'}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-red-500 transition-colors shrink-0" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Row 2: Booking CTA Button on its own line below them */}
                <div className="pt-1">
                  <Link to="/booking" className="inline-block">
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-950/20 border border-slate-800 transition-all whitespace-nowrap"
                    >
                       <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                       <span>{t.results.bookSimilar}</span>
                       <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Player Dialog */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-slate-950 text-white border border-slate-800 rounded-3xl shadow-2xl">
          <DialogTitle className="sr-only">
            {activeVideo ? (language === 'ar' ? activeVideo.titleAr : activeVideo.titleEn) : 'Video Player'}
          </DialogTitle>
          {activeVideo && (
            <div>
              {/* Modal Video Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Play className="w-4 h-4 fill-amber-400 ms-0.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      {language === 'ar' ? activeVideo.tagAr : activeVideo.tagEn}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white font-cairo line-clamp-1">
                      {language === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
                    </h4>
                  </div>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors pe-8"
                >
                  <span>{language === 'ar' ? 'يوتيوب' : 'YouTube'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Video Player Frame */}
              <div className="relative aspect-video sm:aspect-[16/9] w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={language === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Video Footer */}
              <div className="p-4 sm:p-5 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 text-center sm:text-start leading-relaxed">
                  {language === 'ar' ? activeVideo.subtitleAr : activeVideo.subtitleEn}
                </p>
                <Link
                  to="/booking"
                  onClick={() => setActiveVideo(null)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.results.bookSimilar}</span>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RealResults;