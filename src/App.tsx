import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Offers from "./pages/Offers";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";
import ResultsPage from "./pages/ResultsPage";
import VideoGalleryPage from "./pages/VideoGalleryPage";
import DermatologyLaser from "./pages/DermatologyLaser";
import NutritionContouring from "./pages/NutritionContouring";
import HairRestoration from "./pages/HairRestoration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop resets scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<Navigate to="/dr-freehan#vision-mission" replace />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/dermatology-laser" element={<DermatologyLaser />} />
              <Route path="/services/nutrition-contouring" element={<NutritionContouring />} />
              <Route path="/services/hair-restoration" element={<HairRestoration />} />
              <Route path="/dr-freehan" element={<Doctors />} />
              <Route path="/dr-freihan" element={<Navigate to="/dr-freehan" replace />} />
              <Route path="/doctors" element={<Navigate to="/dr-freehan" replace />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/video-gallery" element={<VideoGalleryPage />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;