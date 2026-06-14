import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  Brain,
  Link2,
  Globe,
  Smartphone,
  Coins,
  Lightbulb,
  Layers,
  Users,
  RefreshCw,
  ShieldCheck,
  Briefcase,
  Heart,
  ShoppingCart,
  Truck,
  GraduationCap,
  Building2,
  Gamepad2,
  Target,
  Cpu,
  Handshake,
  Eye,
  Rocket,
  BarChart3,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

function useParallax(speed = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);
  return { ref, y };
}

const CAPABILITY_ICONS = [Brain, Link2, Globe, Smartphone, Coins];
const PRINCIPLE_ICONS = [Lightbulb, Layers, Users, RefreshCw, ShieldCheck];
const INDUSTRY_ICONS = [Briefcase, Heart, ShoppingCart, Truck, GraduationCap, Building2, Gamepad2];
const WHY_ICONS = [Rocket, Cpu, Users, ShieldCheck, Handshake];

export default function About() {
  const { tr, isRTL } = useLanguage();

  useSEO({
    title: "About Takarub - Digital Innovation & Technology Solutions",
    description: "Learn about Takarub, a technology company building AI, blockchain, mobile and web solutions for Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/about",
    keywords: ["about takarub", "technology company", "AI solutions", "blockchain", "Saudi Arabia"],
  });

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#07070e] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">

        {/* Hero */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <HeroParallaxSection />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070e]/70 via-[#07070e]/60 to-[#07070e]" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-6">
                {tr.about.heroBadge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                {tr.about.heroTitle}{" "}
                <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                  {tr.about.heroTitleHighlight}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4">
                {tr.about.heroSubtitle}
              </p>
              <p className="text-base text-white/50 max-w-2xl mx-auto">
                {tr.about.heroSub2}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="relative py-24 bg-[#07070e]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                  {tr.about.whoWeAreBadge}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                  {tr.about.whoWeAreTitle}{" "}
                  <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                    {tr.about.whoWeAreTitleHighlight}
                  </span>
                </h2>
                <div className="space-y-5 text-white/40 text-lg leading-relaxed">
                  <p>{tr.about.whoWeArePara1}</p>
                  <p>{tr.about.whoWeArePara2}</p>
                  <p className="text-white/60 font-medium">{tr.about.whoWeArePara3}</p>
                </div>
              </motion.div>
              <WhoWeAreImage />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <MissionVisionSection tr={tr} />

        {/* What We Do */}
        <section className="relative py-24 bg-[#07070e]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <WhatWeDoImage />
              <div>
                <motion.div {...fadeUp} className="mb-12">
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                    {tr.about.capabilitiesBadge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                    {tr.about.whatWeDoTitle}{" "}
                    <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                      {tr.about.whatWeDoTitleHighlight}
                    </span>
                  </h2>
                  <p className="text-lg text-white/40 leading-relaxed">
                    {tr.about.whatWeDoDesc}
                  </p>
                </motion.div>
                <div className="space-y-5">
                  {tr.about.capabilities.map((cap, i) => {
                    const Icon = CAPABILITY_ICONS[i];
                    return (
                      <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex items-start gap-4">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg mb-1">{cap.title}</h3>
                            <p className="text-white/35 text-sm leading-relaxed">{cap.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="relative py-24 bg-gradient-to-b from-[#07070e] via-[#0b0b18] to-[#07070e]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div {...fadeUp} className="mb-12">
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                    {tr.about.approachBadge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                    {tr.about.howWeWorkTitle}{" "}
                    <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                      {tr.about.howWeWorkTitleHighlight}
                    </span>
                  </h2>
                  <p className="text-lg text-white/40 leading-relaxed">{tr.about.howWeWorkDesc}</p>
                </motion.div>
                <div className="space-y-4">
                  {tr.about.principles.map((p, i) => {
                    const Icon = PRINCIPLE_ICONS[i];
                    return (
                      <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">{p.title}</h3>
                          <p className="text-white/35 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <HowWeWorkImage />
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative py-24 bg-[#07070e]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <IndustriesImage />
              <div className="order-1 lg:order-2">
                <motion.div {...fadeUp} className="mb-10">
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                    {tr.about.reachBadge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                    {tr.about.industriesTitle}{" "}
                    <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                      {tr.about.industriesTitleHighlight}
                    </span>
                  </h2>
                  <p className="text-lg text-white/40 leading-relaxed">{tr.about.industriesDesc}</p>
                </motion.div>
                <div className="grid grid-cols-2 gap-3">
                  {tr.about.industries.map((ind, i) => {
                    const Icon = INDUSTRY_ICONS[i];
                    return (
                      <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.06 }} className="group flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-400">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-white/60 font-medium text-sm group-hover:text-white transition-colors">{ind}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUsSection tr={tr} />

        {/* Our Impact */}
        <section className="relative py-24 bg-[#07070e]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div {...fadeUp}>
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                    {tr.about.impactBadge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                    {tr.about.impactTitle}{" "}
                    <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                      {tr.about.impactTitleHighlight}
                    </span>
                  </h2>
                  <p className="text-lg text-white/40 leading-relaxed mb-10">{tr.about.impactDesc}</p>
                  <div className="space-y-4">
                    {tr.about.impactHighlights.map((h, i) => (
                      <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-white/60 font-medium">{h}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <ImpactImage />
            </div>
          </div>
        </section>

        {/* CTA */}
        <AboutCTASection tr={tr} isRTL={isRTL} />

      </main>
      <Footer whiteText />
    </div>
  );
}

function HeroParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <motion.div ref={ref} style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
      <img loading="lazy" src={`${BASE}images/about-hero-bg.webp`} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

function WhoWeAreImage() {
  const { ref, y } = useParallax(0.15);
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }} {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-amber-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <img loading="lazy" src={`${BASE}images/about-team.webp`} alt="Our team" className="relative w-full h-auto rounded-2xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}

function MissionVisionSection({ tr }: { tr: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img loading="lazy" src={`${BASE}images/about-mission-bg.webp`} alt="" className="w-full h-full object-cover opacity-20" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] via-[#07070e]/85 to-[#07070e]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{tr.about.purposeBadge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {tr.about.missionVisionTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{tr.about.missionVisionTitleHighlight}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative group h-full p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">{tr.about.missionTitle}</h3>
                <p className="text-white/40 text-lg leading-relaxed">{tr.about.missionText}</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative group h-full p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">{tr.about.visionTitle}</h3>
                <p className="text-white/40 text-lg leading-relaxed">{tr.about.visionText}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoImage() {
  const { ref, y } = useParallax(0.15);
  return (
    <div ref={ref} className="overflow-hidden lg:sticky lg:top-24">
      <motion.div style={{ y }} {...fadeUp}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-primary/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <img loading="lazy" src={`${BASE}images/about-capabilities.webp`} alt="Our capabilities" className="relative w-full h-auto rounded-2xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}

function HowWeWorkImage() {
  const { ref, y } = useParallax(0.15);
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }} {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <img loading="lazy" src={`${BASE}images/about-approach.webp`} alt="How we work" className="relative w-full h-auto rounded-2xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}

function IndustriesImage() {
  const { ref, y } = useParallax(0.15);
  return (
    <div ref={ref} className="overflow-hidden order-2 lg:order-1">
      <motion.div style={{ y }} {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-primary/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <img loading="lazy" src={`${BASE}images/about-industries.webp`} alt="Industries we serve" className="relative w-full h-auto rounded-2xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}

function WhyChooseUsSection({ tr }: { tr: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img loading="lazy" src={`${BASE}images/about-why-us-bg.webp`} alt="" className="w-full h-full object-cover opacity-15" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] via-[#07070e]/85 to-[#07070e]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{tr.about.takarubAdvantageBadge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {tr.about.whyChooseTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{tr.about.whyChooseTitleHighlight}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.about.whyChoosePoints.map((p: any, i: number) => {
            const Icon = WHY_ICONS[i];
            return (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className={`group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImpactImage() {
  const { ref, y } = useParallax(0.15);
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }} {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-amber-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <img loading="lazy" src={`${BASE}images/about-impact.webp`} alt="Our impact" className="relative w-full h-auto rounded-2xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}

function AboutCTASection({ tr, isRTL }: { tr: any; isRTL: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img loading="lazy" src={`${BASE}images/about-cta-bg.webp`} alt="" className="w-full h-full object-cover opacity-20" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] via-[#07070e]/80 to-[#07070e]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {tr.about.ctaTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{tr.about.ctaTitleHighlight}</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed mb-10">{tr.about.ctaDesc}</p>
          <div className="flex items-center justify-center">
            <a href={`${BASE.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 text-lg gap-2 px-8">
                {tr.about.ctaButton}
                <ArrowRight className={isRTL ? "w-5 h-5 rotate-180" : "w-5 h-5"} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
