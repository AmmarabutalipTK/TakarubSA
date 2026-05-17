import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileCode, Shield, Code2, Globe, Database, Cloud, Sparkles, Lock, Eye, ShieldCheck, Server, Coins, Network, Hexagon, Landmark, HeartPulse, ShoppingCart, Truck, Home, Zap, Building2, MessageSquareQuote, Star, Bug, CheckCircle, Gauge, Blocks, Vote, Gamepad2, Gem, ArrowLeftRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

function HeroSection() {
  const { lang, isRTL } = useLanguage();
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover scale-110">
        <source src={`${import.meta.env.BASE_URL}videos/smart-contract-hero.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#07070e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.1),_transparent_60%)]" />

      <motion.div style={{ y: textY }} className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24">
        <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          {isAr ? <>عقود ذكية آمنة<br className="hidden md:block" /><span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">تُشغّل العالم اللامركزي</span></> : <>Secure Smart Contracts{" "}<br className="hidden md:block" /><span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">That Power the Decentralized World</span></>}
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
          {isAr ? "نصمّم وننمّي ونُدقّق وننشر عقوداً ذكية محكمة الاختبار عبر شبكات البلوك تشين الرائدة لـ DeFi وNFTs وDAOs وحلول المؤسسات." : "We design, develop, audit, and deploy battle-tested smart contracts across leading blockchain networks for DeFi, NFTs, DAOs, and enterprise solutions."}
        </motion.p>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-sm text-white/60 max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
          {isAr ? "من Solidity إلى Rust، يبني مهندسونا عقوداً محسّنة للغاز ومتحقَّقاً منها رسمياً تتعامل مع مليارات القيم دون أي تنازل على الأمان." : "From Solidity to Rust, our engineers build gas-optimized, formally verified contracts that handle billions in value with zero compromise on security."}
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90">
              {isAr ? "ابدأ مشروعك" : "Start Your Project"}
              <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
            </Button>
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070e] to-transparent z-10" />
    </section>
  );
}

function ServicesOverview() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const stats = isAr ? [
    { num: "200+", label: "عقد مُنشر" },
    { num: "$2B+", label: "قيمة مؤمَّنة" },
    { num: "0", label: "اختراقات أمنية" },
    { num: "15+", label: "شبكة مدعومة" },
  ] : [
    { num: "200+", label: "Contracts Deployed" },
    { num: "$2B+", label: "Value Secured" },
    { num: "0", label: "Security Breaches" },
    { num: "15+", label: "Networks Supported" },
  ];

  return (
    <section className="relative py-24 bg-[#07070e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(255,107,53,0.04),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              {isAr ? <>خدمات تطوير العقود الذكية<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> الشاملة</span></> : <>Full-Spectrum Smart Contract{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Development Services</span></>}
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              {isAr ? "نقدم حلول عقود ذكية من أوله لآخره — من البنية المعمارية والتطوير إلى التدقيق والنشر — لضمان أن منطقك على السلسلة آمن وفعّال وجاهز للإنتاج." : "We deliver end-to-end smart contract solutions — from architecture and development to auditing and deployment — ensuring your on-chain logic is secure, efficient, and production-ready."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/5">
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{stat.num}</p>
                  <p className="text-white/30 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-purple-500/15 rounded-3xl blur-2xl" />
              <img loading="lazy" src={`${import.meta.env.BASE_URL}images/smart-contract-overview.webp`} alt="Smart Contract Architecture" className="relative w-full h-auto rounded-2xl border border-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlocks() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const services = isAr ? [
    { icon: Coins, title: "عقود DeFi الذكية", desc: "نبني بروتوكولات التمويل اللامركزي — صانعو السوق الآلي، ومجمعات الإقراض، وزراعة العائد، والرهان، والحوكمة — بكود Solidity مُدقَّق ومحسَّن للغاز.", image: "smart-contract-defi.webp", gradient: "from-primary/15 to-amber-500/10" },
    { icon: Gem, title: "عقود NFT والأصول الرقمية", desc: "نطور عقود ERC-721 وERC-1155 وعقود NFT مخصصة للأسواق والمجموعات التوليدية وأنظمة الإتاوات ومنصات الملكية الرقمية.", image: "smart-contract-nft.webp", gradient: "from-purple-500/15 to-primary/10" },
    { icon: Vote, title: "عقود DAO والحوكمة", desc: "نصمّم أنظمة حوكمة على السلسلة مع إنشاء المقترحات والتصويت المرجَّح بالتوكن وإدارة الخزينة والتنفيذ متعدد التوقيعات.", image: "smart-contract-dao.webp", gradient: "from-cyan-500/10 to-primary/15" },
    { icon: ArrowLeftRight, title: "عقود التوكن والجسر", desc: "ننشئ توكنات ERC-20 وجداول استحقاق وعقود الجسر عبر السلاسل لنقل الأصول السلس متعدد الشبكات.", image: "smart-contract-supply.webp", gradient: "from-primary/10 to-purple-500/10" },
    { icon: ShieldCheck, title: "تدقيق العقود الذكية", desc: "نجري تدقيقاً أمنياً صارماً مع التحقق الرسمي والتحليل الثابت ومراجعة الكود اليدوية لتحديد الثغرات قبل النشر.", image: "smart-contract-audit.webp", gradient: "from-red-500/10 to-primary/10" },
  ] : [
    { icon: Coins, title: "DeFi Smart Contracts", desc: "We build decentralized finance protocols — AMMs, lending pools, yield farming, staking, and governance — with gas-optimized, audited Solidity code.", image: "smart-contract-defi.webp", gradient: "from-primary/15 to-amber-500/10" },
    { icon: Gem, title: "NFT & Digital Asset Contracts", desc: "We develop ERC-721, ERC-1155, and custom NFT contracts for marketplaces, generative collections, royalty systems, and digital ownership platforms.", image: "smart-contract-nft.webp", gradient: "from-purple-500/15 to-primary/10" },
    { icon: Vote, title: "DAO & Governance Contracts", desc: "We architect on-chain governance systems with proposal creation, token-weighted voting, treasury management, and multi-sig execution.", image: "smart-contract-dao.webp", gradient: "from-cyan-500/10 to-primary/15" },
    { icon: ArrowLeftRight, title: "Token & Bridge Contracts", desc: "We create ERC-20 tokens, vesting schedules, and cross-chain bridge contracts for seamless multi-network asset transfers.", image: "smart-contract-supply.webp", gradient: "from-primary/10 to-purple-500/10" },
    { icon: ShieldCheck, title: "Smart Contract Auditing", desc: "We perform rigorous security audits with formal verification, static analysis, and manual code review to identify vulnerabilities before deployment.", image: "smart-contract-audit.webp", gradient: "from-red-500/10 to-primary/10" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#07070e] via-[#0b0b18] to-[#07070e]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>ماذا <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">نبني</span></> : <>What We{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Build</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "من بروتوكولات DeFi إلى أتمتة المؤسسات، نقدم عقوداً ذكية آمنة وقابلة للتوسع وموفِّرة للغاز." : "From DeFi protocols to enterprise automation, we deliver smart contracts that are secure, scalable, and gas-efficient."}
          </p>
        </motion.div>
        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.7 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-extrabold text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg">{service.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  <img loading="lazy" src={`${import.meta.env.BASE_URL}images/${service.image}`} alt={service.title} className="relative w-full h-auto rounded-2xl border border-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxDivider() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img loading="lazy" src={`${import.meta.env.BASE_URL}images/smart-contract-parallax-bg.webp`} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div {...fadeUp} className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            {isAr ? <>الكود هو <span className="text-primary">القانون.</span>{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">نجعله محصّناً.</span></> : <>Code is <span className="text-primary">Law.</span>{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">We Make It Bulletproof.</span></>}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {isAr ? "كل سطر كود على السلسلة نكتبه مُدقَّق ومختبَر ومحسَّن للأمان وكفاءة الغاز." : "Every line of on-chain code we write is audited, tested, and optimized for security and gas efficiency."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SecurityApproach() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const points = isAr ? [
    { icon: Bug, title: "كشف الثغرات", desc: "تحليل ثابت وديناميكي لتحديد ثغرات إعادة الدخول والفيض والتحكم في الوصول." },
    { icon: CheckCircle, title: "التحقق الرسمي", desc: "براهين رياضية للتحقق من أن سلوك العقد يطابق المواصفات المقصودة." },
    { icon: Gauge, title: "تحسين الغاز", desc: "تحسينات على مستوى الكود لتقليل تكاليف المعاملات وتحسين كفاءة العقد." },
    { icon: Eye, title: "مراجعة الكود", desc: "مراجعة يدوية سطراً سطراً بواسطة مهندسي أمان العقود الذكية ذوي الخبرة." },
    { icon: Shield, title: "اختبار الاختراق", desc: "هجمات محاكاة لاختبار مرونة العقد في ظروف العدو." },
    { icon: Lock, title: "تدقيق التحكم في الوصول", desc: "التحقق من الأذونات القائمة على الأدوار والوظائف الإدارية وآليات الترقية." },
  ] : [
    { icon: Bug, title: "Vulnerability Detection", desc: "Static and dynamic analysis to identify reentrancy, overflow, and access control vulnerabilities." },
    { icon: CheckCircle, title: "Formal Verification", desc: "Mathematical proofs to verify contract behavior matches intended specifications." },
    { icon: Gauge, title: "Gas Optimization", desc: "Code-level optimizations to reduce transaction costs and improve contract efficiency." },
    { icon: Eye, title: "Code Review", desc: "Manual line-by-line review by experienced smart contract security engineers." },
    { icon: Shield, title: "Penetration Testing", desc: "Simulated attacks to test contract resilience under adversarial conditions." },
    { icon: Lock, title: "Access Control Audit", desc: "Verification of role-based permissions, admin functions, and upgrade mechanisms." },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07070e] via-[#0a0a16] to-[#0e0812]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>نهجنا في<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> الأمان</span></> : <>Our Security{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Approach</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "الأمان ليس فكرة لاحقة — إنه مُضمَّن في كل مرحلة من مراحل دورة حياة تطوير العقود الذكية لدينا." : "Security isn't an afterthought — it's embedded in every phase of our smart contract development lifecycle."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative p-7 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{point.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const industries = isAr ? [
    { icon: Landmark, name: "DeFi والمالية", desc: "الإقراض والبورصات اللامركزية ومجمعات العائد والعملات المستقرة" },
    { icon: Gem, name: "NFTs والفن الرقمي", desc: "الأسواق والفن التوليدي وأنظمة الإتاوات" },
    { icon: Vote, name: "DAOs والحوكمة", desc: "التصويت على السلسلة والخزائن والمقترحات" },
    { icon: Gamepad2, name: "GameFi والميتافيرس", desc: "اقتصادات اللعب للربح والأصول الافتراضية" },
    { icon: Truck, name: "سلسلة التوريد", desc: "تتبع المصدر والتسويات الآلية" },
    { icon: Building2, name: "المؤسسات", desc: "أتمتة الامتثال والهوية الرقمية" },
  ] : [
    { icon: Landmark, name: "DeFi & Finance", desc: "Lending, DEXs, yield aggregators, and stablecoins" },
    { icon: Gem, name: "NFTs & Digital Art", desc: "Marketplaces, generative art, and royalty systems" },
    { icon: Vote, name: "DAOs & Governance", desc: "On-chain voting, treasuries, and proposals" },
    { icon: Gamepad2, name: "GameFi & Metaverse", desc: "Play-to-earn economies and virtual assets" },
    { icon: Truck, name: "Supply Chain", desc: "Provenance tracking and automated settlements" },
    { icon: Building2, name: "Enterprise", desc: "Compliance automation and digital identity" },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <img loading="lazy" src={`${import.meta.env.BASE_URL}images/smart-contract-parallax-bg.webp`} alt="" className="w-full h-full object-cover opacity-15" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0812] via-[#07070e]/95 to-[#07070e]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>العقود الذكية<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> عبر القطاعات</span></> : <>Smart Contracts{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Across Industries</span></>}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ind.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{ind.name}</h3>
              <p className="text-white/35 text-sm">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const stacks = [
    { category: isAr ? "لغات العقود الذكية" : "Smart Contract Languages", techs: ["Solidity", "Rust", "Vyper", "Move", "Cairo"], icon: FileCode },
    { category: isAr ? "أطر التطوير" : "Development Frameworks", techs: ["Hardhat", "Foundry", "Truffle", "Anchor", "Brownie"], icon: Code2 },
    { category: isAr ? "الاختبار والتدقيق" : "Testing & Auditing", techs: ["Slither", "Mythril", "Echidna", "Certora", "Fuzzing"], icon: Bug },
    { category: isAr ? "شبكات البلوك تشين" : "Blockchain Networks", techs: ["Ethereum", "Solana", "Polygon", "Arbitrum", "BSC"], icon: Network },
    { category: isAr ? "تكامل الواجهة الأمامية" : "Frontend Integration", techs: ["ethers.js", "wagmi", "viem", "Web3.js", "RainbowKit"], icon: Globe },
    { category: isAr ? "البنية التحتية" : "Infrastructure", techs: ["Alchemy", "Infura", "The Graph", "IPFS", "Chainlink"], icon: Server },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[#07070e]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>مجموعة<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> تقنياتنا</span></> : <>Our{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Technology Stack</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "نستخدم أدوات وأطر رائدة في الصناعة لبناء واختبار ونشر عقود ذكية جاهزة للإنتاج." : "We use industry-leading tools and frameworks to build, test, and deploy production-grade smart contracts."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 text-center hover:border-primary/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mx-auto flex items-center justify-center mb-5"><stack.icon className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-white mb-4">{stack.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">{stack.techs.map((tech) => <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/50 border border-white/5">{tech}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const steps = isAr ? [
    { num: "01", title: "المتطلبات والبنية المعمارية", desc: "نحلّل حالة استخدامك ونحدد مواصفات العقد ونصمّم البنية المعمارية على السلسلة." },
    { num: "02", title: "تطوير العقد الذكي", desc: "نكتب كوداً نظيفاً ومعيارياً ومحسَّناً للغاز يتبع أفضل الممارسات." },
    { num: "03", title: "اختبار الوحدة والتكامل", desc: "نبني مجموعات اختبار شاملة تغطي الحالات الحدية وناقلات الهجوم ومعايير الغاز." },
    { num: "04", title: "التدقيق الأمني", desc: "نجري تدقيقات متعددة الطبقات باستخدام الأدوات الآلية ومراجعة الخبراء اليدوية." },
    { num: "05", title: "النشر على شبكة الاختبار", desc: "ننشر على شبكات الاختبار للمحاكاة في العالم الحقيقي واختبار المجتمع." },
    { num: "06", title: "الإطلاق على الشبكة الرئيسية", desc: "نتولى النشر على الشبكة الرئيسية مع المراقبة والتحقق وإعداد الاستجابة للحوادث." },
    { num: "07", title: "دعم ما بعد النشر", desc: "نقدم مراقبة وترقيات ودعم حوكمة مستمرة." },
  ] : [
    { num: "01", title: "Requirements & Architecture", desc: "We analyze your use case, define contract specifications, and design the on-chain architecture." },
    { num: "02", title: "Smart Contract Development", desc: "We write clean, modular, and gas-optimized smart contract code following best practices." },
    { num: "03", title: "Unit & Integration Testing", desc: "We build comprehensive test suites covering edge cases, attack vectors, and gas benchmarks." },
    { num: "04", title: "Security Audit", desc: "We perform multi-layered audits using automated tools and manual expert review." },
    { num: "05", title: "Testnet Deployment", desc: "We deploy to testnets for real-world simulation and community testing." },
    { num: "06", title: "Mainnet Launch", desc: "We handle mainnet deployment with monitoring, verification, and incident response setup." },
    { num: "07", title: "Post-Deployment Support", desc: "We provide ongoing monitoring, upgrades, and governance support." },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] via-[#0a0a14] to-[#07070e]" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>عملية<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> التطوير</span></> : <>Our Development{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Process</span></>}
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5" />
          <motion.div style={{ height: lineHeight }} className="absolute left-8 top-0 w-px bg-gradient-to-b from-primary via-primary to-amber-500 origin-top" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative flex gap-8 items-start group">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-amber-500 group-hover:border-primary/50 transition-all duration-500">
                  <span className="text-white/50 font-extrabold text-sm group-hover:text-white transition-colors">{step.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const testimonials = isAr ? [
    { quote: "اكتشف تدقيق عقودهم الذكية ثغرات حرجة فاتت ثلاث شركات أخرى. لقد أنقذوا بروتوكولنا مما كان يمكن أن يكون استغلالاً مدمراً.", name: "رامي الزهراني", role: "المدير التقني، ShieldDeFi Protocol" },
    { quote: "عقود DeFi التي بنوها تتعامل مع أكثر من 500 مليون دولار TVL بتشغيل كامل. تحسين الغاز وحده وفّر على مستخدمينا ملايين في رسوم المعاملات.", name: "سارة المطيري", role: "الرئيس التنفيذي، LiquidYield" },
    { quote: "من عقود سك NFT إلى الواجهة الخلفية الكاملة لسوقنا، كان عملهم لا تشوبه شائبة. جودة الكود والتوثيق كانتا استثنائيتين.", name: "حسن التميمي", role: "المؤسس، ArtChain MENA" },
  ] : [
    { quote: "Their smart contract audit caught critical vulnerabilities that three other firms missed. They saved our protocol from what could have been a devastating exploit.", name: "Rami Al-Zahrani", role: "CTO, ShieldDeFi Protocol" },
    { quote: "The DeFi contracts they built handle over $500M in TVL with perfect uptime. Their gas optimization alone saved our users millions in transaction fees.", name: "Sara Al-Mutairi", role: "CEO, LiquidYield" },
    { quote: "From NFT minting contracts to our entire marketplace backend, their work was flawless. The code quality and documentation were exceptional.", name: "Hassan Al-Tamimi", role: "Founder, ArtChain MENA" },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070e] to-[#0a0812]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>موثوق من<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> فرق البروتوكول</span></> : <>Trusted by{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Protocol Teams</span></>}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div>
                <MessageSquareQuote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-white/60 leading-relaxed mb-6 italic text-sm">"{t.quote}"</p>
                <div><p className="font-bold text-white">{t.name}</p><p className="text-white/30 text-sm">{t.role}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { lang, isRTL } = useLanguage();
  const isAr = lang === "ar";
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.08),_transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>هل أنت مستعد لنشر<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> عقودك الذكية؟</span></> : <>Ready to Deploy Your{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Smart Contracts?</span></>}
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
            {isAr ? "دعنا نبني عقوداً ذكية آمنة ومحسَّنة تشغّل بروتوكولك بثقة." : "Let's build secure, optimized smart contracts that power your protocol with confidence."}
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90">
                {isAr ? "ابدأ مشروعك" : "Start Your Project"}
                <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SmartContractDevelopment() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#07070e] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesOverview />
        <ServiceOverviewPanel />
        <ServiceBlocks />
        <ParallaxDivider />
        <SecurityApproach />
        <IndustriesSection />
        <TechStackSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
