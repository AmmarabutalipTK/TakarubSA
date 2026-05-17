import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  Smartphone,
  Apple,
  Globe,
  LayoutGrid,
  Brain,
  Cpu,
  MessageSquare,
  Bot,
  FileText,
  Link2,
  Coins,
  FileCode,
  Code2,
  Layers,
  Network,
  ArrowRight,
  Zap,
  Shield,
  Blocks,
  PackageOpen,
  Truck,
  Car,
  Video,
  ShoppingBag,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TAB_FEATURES_ICONS = [
  [Layers, Zap, Network],
  [Zap, Brain, MessageSquare],
  [Shield, FileCode, Blocks],
];

const TAB_TILES_ICONS = [
  [PackageOpen, Truck, Car, Video, ShoppingBag],
  [Brain, Cpu, Bot, FileText, MessageSquare],
  [Link2, Coins, LayoutGrid, FileCode, Network],
];

export function ServiceOverviewPanel() {
  const { tr } = useLanguage();
  const tabs = tr.serviceOverview.tabs;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);
  const manualOverrideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (manualOverride) return;
      const index = Math.min(Math.floor(v * tabs.length), tabs.length - 1);
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress, manualOverride, tabs.length]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setManualOverride(true);
    if (manualOverrideTimeout.current) clearTimeout(manualOverrideTimeout.current);
    manualOverrideTimeout.current = setTimeout(() => setManualOverride(false), 1200);
  };

  const active = tabs[activeIndex];
  const featureIcons = TAB_FEATURES_ICONS[activeIndex];
  const tileIcons = TAB_TILES_ICONS[activeIndex];

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${tabs.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center bg-[#07070e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.05),_transparent_70%)]" />

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary/70 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              {tr.serviceOverview.label}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              {tr.serviceOverview.heading}{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                {tr.serviceOverview.headingHighlight}
              </span>
            </h2>
          </motion.div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[300px] xl:w-[340px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-white/8">
                {tabs.map((tab, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => handleTabClick(i)}
                      aria-pressed={isActive}
                      role="tab"
                      aria-selected={isActive}
                      className={`w-full text-start px-8 py-8 transition-all duration-300 relative ${
                        isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="tab-indicator"
                          className="absolute start-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary to-amber-500 rounded-e-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <p
                        className={`text-xl font-extrabold transition-colors ${
                          isActive ? "text-white" : "text-white/40"
                        }`}
                      >
                        {tab.label}
                      </p>
                      <p
                        className={`text-sm mt-1 transition-colors ${
                          isActive ? "text-white/50" : "text-white/20"
                        }`}
                      >
                        {tab.subtitle}
                      </p>
                    </button>
                  );
                })}

                <div className="px-8 py-5 border-t border-white/5">
                  <div className="flex gap-2 items-center">
                    {tabs.map((_, i) => (
                      <div
                        key={i}
                        className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${
                          i === activeIndex ? "bg-primary" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/20 text-xs mt-2 font-medium">
                    {tr.serviceOverview.scrollToExplore}
                  </p>
                </div>
              </div>

              <div className="flex-1 p-10 lg:p-12 xl:p-16 min-h-[400px] lg:min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col gap-10"
                  >
                    <div>
                      <div className="flex items-start gap-5 mb-5">
                        <div className="flex-1">
                          <h3 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                            {active.heading}
                          </h3>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-amber-500/10 flex items-center justify-center flex-shrink-0 mt-2">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-white/45 text-base leading-relaxed max-w-2xl">
                        {active.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {active.features.map((feat, i) => {
                        const Icon = featureIcons[i];
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/5 flex-1"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                              {Icon && <Icon className="w-5 h-5 text-primary" />}
                            </div>
                            <span className="text-white/70 text-sm font-semibold leading-snug">
                              {feat}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                      {active.tiles.map((tile, i) => {
                        const Icon = tileIcons[i];
                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default group"
                          >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-amber-500/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-amber-500/15 transition-all duration-300">
                              {Icon && <Icon className="w-6 h-6 text-primary" />}
                            </div>
                            <span className="text-white/50 text-xs font-medium text-center leading-snug group-hover:text-white/70 transition-colors">
                              {tile}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
