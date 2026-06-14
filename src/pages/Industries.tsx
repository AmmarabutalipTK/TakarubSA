import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  Wallet,
  ShieldAlert,
  TrendingUp,
  Link2,
  Brain,
  Video,
  FileText,
  Watch,
  ShoppingBag,
  BarChart3,
  Layers,
  ScanEye,
  Truck,
  MapPin,
  Boxes,
  Warehouse,
  BookOpen,
  Users,
  ClipboardCheck,
  Building2,
  Gamepad2,
  Zap,
  Plane,
  Factory,
  Landmark,
  Globe,
  Cloud,
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

const FINANCE_ICONS = [Wallet, ShieldAlert, TrendingUp, Link2];
const HEALTHCARE_ICONS = [Brain, Video, FileText, Watch];
const ECOMMERCE_ICONS = [ShoppingBag, BarChart3, Layers, ScanEye];
const LOGISTICS_ICONS = [MapPin, Truck, Boxes, Warehouse];
const EDUCATION_ICONS = [Brain, BookOpen, Users, ClipboardCheck];
const OTHER_ICONS = [Building2, Gamepad2, Zap, Plane, Factory, Landmark];
const CROSS_ICONS = [Brain, Link2, Globe, Cloud];

function IndustrySectionBlock({
  label, title, titleHighlight, content, useCases, useCaseIcons, image, imageAlt, imageOnLeft = false, glowColor = "from-primary/15 to-amber-500/10"
}: {
  label: string; title: string; titleHighlight: string; content: string;
  useCases: { title: string; desc: string }[];
  useCaseIcons: React.ElementType[];
  image: string; imageAlt: string; imageOnLeft?: boolean; glowColor?: string;
}) {
  const { ref, y } = useParallax(0.15);

  const imageBlock = (
    <div ref={ref} className="overflow-hidden lg:sticky lg:top-24">
      <motion.div style={{ y }} {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="relative group">
          <div className={`absolute -inset-4 bg-gradient-to-r ${glowColor} rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
          <img src={image} alt={imageAlt} className="relative w-full h-auto rounded-2xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );

  const contentBlock = (
    <div>
      <motion.div {...fadeUp} className="mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{label}</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          {title}{" "}
          <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h2>
        <p className="text-lg text-white/40 leading-relaxed">{content}</p>
      </motion.div>
      <div className="space-y-4">
        {useCases.map((uc, i) => {
          const Icon = useCaseIcons[i];
          return (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{uc.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="relative py-24 bg-[#07070e]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {imageOnLeft ? <>{imageBlock}{contentBlock}</> : <>{contentBlock}{imageBlock}</>}
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  const { tr, isRTL } = useLanguage();
  const ind = tr.industries;

  useSEO({
    title: "Industries We Serve - Takarub Digital Solutions",
    description: "Explore industries we serve: finance, healthcare, e-commerce, logistics, education, retail, and more across Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/industries",
    keywords: ["industries", "financial services", "healthcare", "e-commerce", "logistics", "education", "digital transformation"],
  });

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#07070e] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">

        {/* Hero */}
        <HeroSection ind={ind} />

        {/* Finance */}
        <IndustrySectionBlock
          label={ind.finance.label}
          title={ind.finance.title}
          titleHighlight={ind.finance.titleHighlight}
          content={ind.finance.content}
          useCases={ind.finance.useCases}
          useCaseIcons={FINANCE_ICONS}
          image={`${BASE}images/industries-finance.webp`}
          imageAlt="Fintech dashboard"
          glowColor="from-cyan-500/15 to-primary/10"
        />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Healthcare */}
        <IndustrySectionBlock
          label={ind.healthcare.label}
          title={ind.healthcare.title}
          titleHighlight={ind.healthcare.titleHighlight}
          content={ind.healthcare.content}
          useCases={ind.healthcare.useCases}
          useCaseIcons={HEALTHCARE_ICONS}
          image={`${BASE}images/industries-healthcare.webp`}
          imageAlt="Healthcare technology"
          imageOnLeft
          glowColor="from-emerald-500/15 to-primary/10"
        />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* E-commerce */}
        <IndustrySectionBlock
          label={ind.ecommerce.label}
          title={ind.ecommerce.title}
          titleHighlight={ind.ecommerce.titleHighlight}
          content={ind.ecommerce.content}
          useCases={ind.ecommerce.useCases}
          useCaseIcons={ECOMMERCE_ICONS}
          image={`${BASE}images/industries-ecommerce.webp`}
          imageAlt="E-commerce platform"
          glowColor="from-purple-500/15 to-primary/10"
        />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Logistics */}
        <IndustrySectionBlock
          label={ind.logistics.label}
          title={ind.logistics.title}
          titleHighlight={ind.logistics.titleHighlight}
          content={ind.logistics.content}
          useCases={ind.logistics.useCases}
          useCaseIcons={LOGISTICS_ICONS}
          image={`${BASE}images/industries-logistics.webp`}
          imageAlt="Logistics tracking"
          imageOnLeft
          glowColor="from-amber-500/15 to-primary/10"
        />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Education */}
        <IndustrySectionBlock
          label={ind.education.label}
          title={ind.education.title}
          titleHighlight={ind.education.titleHighlight}
          content={ind.education.content}
          useCases={ind.education.useCases}
          useCaseIcons={EDUCATION_ICONS}
          image={`${BASE}images/industries-education.webp`}
          imageAlt="Education technology"
          glowColor="from-blue-500/15 to-primary/10"
        />

        {/* Other Industries */}
        <OtherIndustriesSection ind={ind} />

        {/* Cross-Industry */}
        <CrossIndustrySection ind={ind} />

        {/* CTA */}
        <CTASection ind={ind} isRTL={isRTL} />
      </main>
      <Footer  whiteText/>
    </div>
  );
}

function HeroSection({ ind }: { ind: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img loading="lazy" src={`${BASE}images/industries-hero-bg.webp`} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e]/70 via-[#07070e]/60 to-[#07070e]" />
      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-6">{ind.heroBadge}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            {ind.heroTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{ind.heroTitleHighlight}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4">{ind.heroSubtitle}</p>
          <p className="text-base text-white/50 max-w-2xl mx-auto">{ind.heroSub2}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function OtherIndustriesSection({ ind }: { ind: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img loading="lazy" src={`${BASE}images/industries-other-bg.webp`} alt="" className="w-full h-full object-cover opacity-15" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] via-[#07070e]/85 to-[#07070e]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{ind.otherBadge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {ind.otherTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{ind.otherTitleHighlight}</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">{ind.otherDesc}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ind.otherIndustries.map((item: any, i: number) => {
            const Icon = OTHER_ICONS[i];
            return (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.name}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CrossIndustrySection({ ind }: { ind: any }) {
  const { ref, y } = useParallax(0.15);
  return (
    <section className="relative py-24 bg-[#07070e]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{ind.crossBadge}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                {ind.crossTitle}{" "}
                <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{ind.crossTitleHighlight}</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed">{ind.crossDesc}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ind.crossCapabilities.map((cap: any, i: number) => {
                const Icon = CROSS_ICONS[i];
                return (
                  <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-400">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{cap.title}</h3>
                      <p className="text-white/35 text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div ref={ref} className="overflow-hidden">
            <motion.div style={{ y }} {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-primary/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <img loading="lazy" src={`${BASE}images/industries-tech-capabilities.webp`} alt="Technology capabilities" className="relative w-full h-auto rounded-2xl border border-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ ind, isRTL }: { ind: any; isRTL: boolean }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07070e] via-[#0e0812] to-[#07070e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.08),_transparent_60%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {ind.ctaTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{ind.ctaTitleHighlight}</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed mb-10">{ind.ctaDesc}</p>
          <div className="flex items-center justify-center">
            <a href={`${BASE.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 text-lg gap-2 px-8">
                {ind.ctaButton}
                <ArrowRight className={isRTL ? "w-5 h-5 rotate-180" : "w-5 h-5"} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
