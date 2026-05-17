import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import logo1 from "@assets/elchai_home_logo_1_1774943406881.png";
import logo3 from "@assets/elchai_home_logo_3_1774943406881.png";
import logo6 from "@assets/elchai_home_logo_6_1774943406882.png";
import logo7 from "@assets/elchai_home_logo_7_1774943406882.png";
import logo12 from "@assets/elchai_home_logo_12_1774943406883.png";
import logo15 from "@assets/elchai_home_logo_15_1774943406883.png";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const LOGOS = [
  { src: logo1, alt: "Grintafy" },
  { src: `${BASE}/logos/logo-ostamani.webp`, alt: "AWR Ostamani" },
  { src: logo3, alt: "Zajel" },
  { src: `${BASE}/logos/logo-naffco.webp`, alt: "Naffco" },
  { src: logo6, alt: "Emirates Facilities" },
  { src: logo7, alt: "Homie" },
  { src: `${BASE}/logos/logo-family-care.webp`, alt: "Family Care Authority" },
  { src: logo12, alt: "Logisty" },
  { src: logo15, alt: "U-Vault" },
];

const SLIDER_IMAGES = [
  { src: "agency-platform-v2.webp", alt: "Agency Platform" },
  { src: "delivery-management.png", alt: "Delivery Management" },
  { src: "taxi-mobility.png", alt: "Taxi & Mobility" },
  { src: "ordering-service.png", alt: "Ordering & Service" },
  { src: "marketplace.png", alt: "Marketplace" },
];

export function Hero() {
  const { tr, isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden bg-mesh-light">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-[0.06]"
          >
            <source src={`${import.meta.env.BASE_URL}videos/hero-bg.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 leading-[1.1]"
            >
              {tr.hero.title}{" "}
              {!isRTL && <br className="hidden md:block" />}
              <span className="text-gradient-orange">{tr.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {tr.hero.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href={`${BASE}/contact`}>
                <Button size="lg" className="w-full sm:w-auto text-lg gap-2 group">
                  {tr.hero.cta}
                  <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 border-t border-border/60 pt-8 w-full"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider text-center">
            {tr.hero.trustedBy}
          </p>
          <div
            className="relative overflow-hidden w-full py-4"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="animate-marquee">
              {LOGOS.map((logo, i) => (
                <img
                  key={`a-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain mx-10 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "invert(1) contrast(8)", mixBlendMode: "multiply" }}
                />
              ))}
              {LOGOS.map((logo, i) => (
                <img
                  key={`b-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  aria-hidden="true"
                  className="h-16 w-auto object-contain mx-10 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "invert(1) contrast(8)", mixBlendMode: "multiply" }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-mesh-light py-16 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl shadow-black/10 w-full">
            <div className="relative w-full">
              {SLIDER_IMAGES.map((image, idx) => (
                <motion.img 
                  key={idx}
                  loading="lazy" 
                  src={`${import.meta.env.BASE_URL}images/${image.src}`} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover absolute top-0 left-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              ))}
              <img 
                src={`${import.meta.env.BASE_URL}images/${SLIDER_IMAGES[0].src}`} 
                alt="spacer" 
                className="w-full h-auto object-cover invisible"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {SLIDER_IMAGES.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "w-6 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
