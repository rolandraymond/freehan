import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Play, X, Sparkles, ExternalLink, Award, Youtube } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export interface VideoEntry {
  id: string;
  videoId: string;
  url: string;
  titleAr: string;
  titleEn: string;
  tagAr: string;
  tagEn: string;
  doctorPortrait: string;
  youtubeThumb: string;
}

// 5 Provided YouTube Shorts (With duplicate detection: Video 1 & Video 3 share ID oMZcITF5rzU)
const rawVideoList: VideoEntry[] = [
  {
    id: "video-1",
    videoId: "oMZcITF5rzU",
    url: "https://www.youtube.com/shorts/oMZcITF5rzU",
    titleAr: "التكنولوجيا بتساعدنا جدًا في تحديد المشاكل الموجودة في البشرة في الفيديو ده هنعرف عن 𝐎𝐛𝐬𝐞𝐫𝐯𝐞",
    titleEn: "How Advanced Technology Helps Identify Skin Concerns — Featuring the Observ System",
    tagAr: "فحص البشرة الذكي • Observ",
    tagEn: "Smart Skin Analysis • Observ",
    doctorPortrait: "/images/OES02506.jpg",
    youtubeThumb: "https://img.youtube.com/vi/oMZcITF5rzU/hqdefault.jpg",
  },
  {
    id: "video-2",
    videoId: "vjrKXLBX_zo",
    url: "https://www.youtube.com/shorts/vjrKXLBX_zo",
    titleAr: "آثار حب الشباب مش هتبقي سبب أنك متمارسيش حياتك بشكل طبيعي بعد كده هنعرف أكتر عن الـ، 𝐕𝐢𝐯𝐚𝐜𝐞 وتقنياته",
    titleEn: "Acne Scars Won't Hold You Back Anymore — Discover Vivace Microneedling RF",
    tagAr: "علاج آثار حب الشباب • Vivace",
    tagEn: "Acne Scars • Vivace RF",
    doctorPortrait: "/images/OES02622.jpg",
    youtubeThumb: "https://img.youtube.com/vi/vjrKXLBX_zo/hqdefault.jpg",
  },
  {
    id: "video-3",
    // NOTE: Duplicate URL provided in input (oMZcITF5rzU). Easy to update once new URL is provided.
    videoId: "oMZcITF5rzU",
    url: "https://www.youtube.com/shorts/oMZcITF5rzU",
    titleAr: "التكنولوجيا بتساعدنا جدًا في تحديد المشاكل الموجودة في البشرة في الفيديو ده هنعرف عن 𝐎𝐛𝐬𝐞𝐫𝐯𝐞",
    titleEn: "How Advanced Technology Helps Identify Skin Concerns — Featuring the Observ System",
    tagAr: "فحص البشرة الذكي • Observ",
    tagEn: "Smart Skin Analysis • Observ",
    doctorPortrait: "/images/OES02506.jpg",
    youtubeThumb: "https://img.youtube.com/vi/oMZcITF5rzU/hqdefault.jpg",
  },
  {
    id: "video-4",
    videoId: "rDt_LeaP2HY",
    url: "https://www.youtube.com/shorts/rDt_LeaP2HY",
    titleAr: "لسة بتتلغبطي بين البوتكس والفيلر ؟في الفيديو ده هتعرفي ايه الفرق بين الفيلر والبوتكس مع د. فريهان",
    titleEn: "Still Confused Between Botox & Fillers? Learn the Difference with Dr. Freehan",
    tagAr: "الفرق بين الفيلر والبوتوكس",
    tagEn: "Botox vs Fillers Guide",
    doctorPortrait: "/images/OES02689.jpg",
    youtubeThumb: "https://img.youtube.com/vi/rDt_LeaP2HY/hqdefault.jpg",
  },
  {
    id: "video-5",
    videoId: "biWjdGAovso",
    url: "https://youtube.com/shorts/biWjdGAovso?si=2wmSWSuVk7z1URUa",
    titleAr: "تعبتي من الأماكن اللي مش بتتأثر بالدايت ؟ هنعرف أكتر عن كيفية التعامل مع الدهون و بينتج عنها ترهلات",
    titleEn: "Tired of Stubborn Fat That Resists Dieting? Dealing with Localized Fat & Sagging",
    tagAr: "نحت القوام والدهون العنيدة",
    tagEn: "Body Contouring & Stubborn Fat",
    doctorPortrait: "/images/OES02691.jpg",
    youtubeThumb: "https://img.youtube.com/vi/biWjdGAovso/hqdefault.jpg",
  },
];

const VideoGallery = () => {
  const { language, t, isRTL } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<VideoEntry | null>(null);

  // Automatic deduplication: filter out repeated video IDs so duplicate URLs are not shown twice
  const uniqueVideos = rawVideoList.filter(
    (item, index, self) => index === self.findIndex((t) => t.videoId === item.videoId)
  );

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="video-gallery">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 end-0 w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.videoGallery.title}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-cairo">
              {t.videoGallery.subtitle}
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.videoGallery.description}
            </p>
          </motion.div>

          <a
            href="https://www.youtube.com/@freehanzakria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-red-600 text-white text-xs font-bold transition-all border border-white/15 w-fit"
          >
            <Youtube className="w-4 h-4 text-red-500 group-hover:text-white" />
            <span>{language === 'ar' ? 'قناة يوتيوب الرسمية' : 'Official YouTube Channel'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Studio Portrait & Reels Layout (Inspired by reference aesthetic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Doctor Spotlight Feature Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/30 shadow-2xl flex flex-col justify-end p-8 min-h-[480px] group isolate"
          >
            {/* Background Doctor Portrait */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <img
                src="/images/OES02689.jpg"
                alt={t.doctor.name}
                className="absolute inset-x-0 -top-6 sm:-top-10 w-full h-[calc(100%+4.5rem)] sm:h-[calc(100%+6.5rem)] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'فيديوهات وتوعية طبية' : 'Clinical Video Insights'}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white font-cairo">
                {t.doctor.name}
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {language === 'ar'
                  ? 'رؤية طبية دقيقة وإجابات واضحة ومباشرة عن أهم إجراءات الجلدية والليزر وتنسيق القوام.'
                  : 'Precise clinical expertise and direct insights into modern aesthetic and dermatological procedures.'}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.tiktok.com/@freehanzakria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
                >
                  {language === 'ar' ? 'تابعنا على تيك توك' : 'Watch on TikTok'}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reels Vertical Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {uniqueVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedVideo(video)}
                className="group cursor-pointer relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-amber-400/60 shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-4 isolate"
              >
                {/* Background Image / Thumbnail with Fallback */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={video.youtubeThumb}
                    alt={language === "en" ? video.titleEn : video.titleAr}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to doctor portrait if YouTube thumbnail is unavailable
                      (e.target as HTMLImageElement).src = video.doctorPortrait;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/30" />
                </div>

                {/* Top: Category Tag & Platform Pill */}
                <div className="flex items-center justify-between gap-1 z-10">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-amber-300 truncate max-w-[85%]">
                    {language === "en" ? video.tagEn : video.tagAr}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-red-600/90 flex items-center justify-center shrink-0">
                    <Play className="w-2.5 h-2.5 fill-white text-white ms-0.5" />
                  </div>
                </div>

                {/* Center: Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-950/70 border border-amber-400/80 backdrop-blur-md flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-4 h-4 text-amber-400 fill-amber-400 group-hover:text-slate-950 group-hover:fill-slate-950 ms-0.5 transition-colors" />
                  </div>
                </div>

                {/* Bottom: Real Video Title */}
                <div className="z-10 text-start space-y-1">
                  <h4 className="text-white font-bold text-xs leading-snug line-clamp-3 group-hover:text-amber-300 transition-colors">
                    {language === "en" ? video.titleEn : video.titleAr}
                  </h4>
                  <p className="text-[10px] text-slate-300 font-medium">
                    {language === "ar" ? "اضغط للمشاهدة" : "Tap to watch"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Vertical Shorts Video Modal Player */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-md p-0 bg-slate-950 border-slate-800 overflow-hidden rounded-3xl shadow-2xl">
          <DialogTitle className="sr-only">
            {selectedVideo && (language === "en" ? selectedVideo.titleEn : selectedVideo.titleAr)}
          </DialogTitle>
          
          {selectedVideo && (
            <div className="flex flex-col">
              {/* Header Title inside dialog */}
              <div className="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between text-start pe-12">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                    {language === "en" ? selectedVideo.tagEn : selectedVideo.tagAr}
                  </span>
                  <h3 className="text-white text-xs sm:text-sm font-bold line-clamp-1 mt-0.5">
                    {language === "en" ? selectedVideo.titleEn : selectedVideo.titleAr}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close"
                  className="absolute top-3.5 end-3.5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Vertical Shorts Embed (9:16 Aspect Ratio) */}
              <div className="relative aspect-[9/16] w-full bg-black max-h-[72vh] mx-auto">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&playsinline=1`}
                  title={language === 'en' ? selectedVideo.titleEn : selectedVideo.titleAr}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Footer with External YouTube Link */}
              <div className="p-3 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">
                  {language === 'ar' ? 'د. فريهان زكريا' : 'Dr. Freehan Zakaria'}
                </span>
                <a
                  href={`https://www.youtube.com/shorts/${selectedVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5"
                >
                  <span>{language === 'ar' ? 'مشاهدة على يوتيوب' : 'Open in YouTube'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoGallery;
