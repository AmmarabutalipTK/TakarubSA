import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { MessageSquare, Zap, BarChart2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SERVICE_ICONS = [MessageSquare, Zap, BarChart2];
const SERVICE_IMAGES = ["home-engage.webp", "home-automate.webp", "home-build.webp"];
const SERVICE_GRADIENTS = ["from-primary/20 to-amber-500/10", "from-cyan-500/15 to-primary/10", "from-purple-500/15 to-primary/10"];

export function Features() {
  const { tr } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);

  const services = tr.features.services;

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * services.length), services.length - 1);
    setActiveIndex(idx);
  });

  const active = services[activeIndex];
  const ActiveIcon = SERVICE_ICONS[activeIndex];

  return (
    <section ref={sectionRef} className="relative z-20" id="platform" style={{ height: `${services.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] via-[#0b0b18] to-[#07070e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,107,53,0.04),_transparent_50%)]" />

        <div className="relative z-10 h-full flex flex-col">
          <div className="pt-16 pb-8 text-center px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              {tr.features.heading}{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                {tr.features.headingHighlight}
              </span>
            </h2>
            <p className="text-base text-white/40 max-w-2xl mx-auto">
              {tr.features.subheading}
            </p>
          </div>

          <div className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
              <div className="relative order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${SERVICE_GRADIENTS[activeIndex]} rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
                      <img loading="lazy"
                        src={`${import.meta.env.BASE_URL}images/${SERVICE_IMAGES[activeIndex]}`}
                        alt={active.heading}
                        className="relative w-full h-auto rounded-2xl border border-white/10"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${SERVICE_GRADIENTS[activeIndex]}`}>
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <ActiveIcon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <span className="text-sm font-bold text-white/30 uppercase tracking-widest">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-tight">
                      {active.heading}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-lg mb-8">{active.description}</p>

                    <ul className="space-y-3 mb-8">
                      {active.bullets.map((bullet, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-white/60 font-medium">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="pb-10 px-6">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  {services.map((s, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-400 ${
                        i === activeIndex
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "text-white/25 hover:text-white/40"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
                <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
