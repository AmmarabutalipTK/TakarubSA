import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Blocks, Shield, Layers, Globe, Cpu, Zap, Lock, Eye, Building2, Server, Coins, FileCode, Binary, Network, HeartPulse, Landmark, ShoppingCart, Truck, Home, MessageSquareQuote, Star } from "lucide-react";
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img loading="lazy" src={`${import.meta.env.BASE_URL}images/blockchain-hero.webp`} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.08),_transparent_70%)]" />

      <motion.div style={{ y: textY }} className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24">
<motion.h1
  {...fadeUp}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.2] md:leading-[1.1] mb-8 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
>
  {isAr ? (
    <>
      ابنِ تطبيقات لامركزية
      <br />
      <span
        className="block mt-[14px] md:mt-[20px] leading-[1.3] pt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400"
        style={{
          WebkitTextStroke: "0.3px transparent",
        }}
      >
        تعيد تعريف الثقة
      </span>
    </>
  ) : (
    <>
      Build Decentralized Apps
      <br />
      <span className="block mt-[20px] bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">
        That Redefine Trust
      </span>
    </>
  )}
</motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
          {isAr ? "نصمّم وننمّي تطبيقات بلوك تشين آمنة وشفافة وعالية الأداء تحوّل طريقة عمل الشركات ومعاملاتها." : "We design and develop secure, transparent, and high-performance blockchain applications that transform how businesses operate and transact."}
        </motion.p>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-sm text-white/60 max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
          {isAr ? "من العقود الذكية إلى التطبيقات اللامركزية الكاملة، نحوّل رؤيتك لـ Web3 إلى واقع بموثوقية على مستوى المؤسسات." : "From smart contracts to full-scale dApps, we bring your Web3 vision to life with enterprise-grade reliability and innovation."}
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              {isAr ? "ابدأ مشروع البلوك تشين" : "Start Your Blockchain Project"}
              <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
            </Button>
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10" />
    </section>
  );
}

function ServicesOverview() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const stats = isAr ? [
    { num: "50+", label: "مشروع مُنجز" },
    { num: "99.9%", label: "ضمان التوافر" },
    { num: "15+", label: "شبكة بلوك تشين" },
    { num: "24/7", label: "تغطية الدعم" },
  ] : [
    { num: "50+", label: "Projects Delivered" },
    { num: "99.9%", label: "Uptime Guarantee" },
    { num: "15+", label: "Blockchain Networks" },
    { num: "24/7", label: "Support Coverage" },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,107,53,0.06),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              {isAr ? <>تطوير بلوك تشين<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> شامل من أوله لآخره</span></> : <>End-to-End{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Blockchain Development</span></>}
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              {isAr ? "نقدم حلول بلوك تشين شاملة — من تصميم البنية وتطوير العقود الذكية إلى النشر والدعم المستمر — مبنية للأمان وقابلية التوسع والتأثير في العالم الحقيقي." : "We deliver comprehensive blockchain solutions — from architecture design and smart contract development to deployment and ongoing support — built for security, scalability, and real-world impact."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                  <p className="text-2xl font-extrabold text-primary">{stat.num}</p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-amber-400/20 rounded-3xl blur-2xl" />
              <img loading="lazy" src={`${import.meta.env.BASE_URL}images/blockchain-dapp.webp`} alt="Blockchain dApp" className="relative w-full h-auto rounded-2xl border border-white/10" />
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
    { icon: FileCode, title: "تطوير العقود الذكية", desc: "نبني ونشر عقوداً ذكية آمنة ومحسّنة للغاز عبر Ethereum وSolana وPolygon وغيرها من الشبكات الرائدة.", image: "blockchain-smart-contract.webp", gradient: "from-purple-500/10 to-primary/10" },
    { icon: Globe, title: "تطوير التطبيقات اللامركزية (dApp)", desc: "نبني تطبيقات لامركزية متكاملة بديهية مع تكامل محافظ Web3 سلس وتدفقات بيانات على السلسلة.", image: "blockchain-dapp.webp", gradient: "from-primary/10 to-amber-500/10" },
    { icon: Coins, title: "التوكنيزيشن وحلول DeFi", desc: "من إنشاء التوكنات ومنصات NFT إلى بروتوكولات DeFi، نبني بنية تحتية مالية على البلوك تشين.", image: "blockchain-tokenization.webp", gradient: "from-amber-500/10 to-orange-500/10" },
    { icon: Shield, title: "أمان البلوك تشين وتدقيقه", desc: "نجري تدقيقاً صارماً للعقود الذكية واختبارات الاختراق ومراجعات أمنية لحماية بروتوكولك ومستخدميك.", image: "blockchain-security.webp", gradient: "from-cyan-500/10 to-primary/10" },
  ] : [
    { icon: FileCode, title: "Smart Contract Development", desc: "We architect and deploy secure, gas-optimized smart contracts across Ethereum, Solana, Polygon, and other leading networks.", image: "blockchain-smart-contract.webp", gradient: "from-purple-500/10 to-primary/10" },
    { icon: Globe, title: "Decentralized Application (dApp) Development", desc: "We build intuitive, full-stack decentralized applications with seamless Web3 wallet integration and on-chain data flows.", image: "blockchain-dapp.webp", gradient: "from-primary/10 to-amber-500/10" },
    { icon: Coins, title: "Tokenization & DeFi Solutions", desc: "From token creation and NFT platforms to DeFi protocols, we build financial infrastructure on the blockchain.", image: "blockchain-tokenization.webp", gradient: "from-amber-500/10 to-orange-500/10" },
    { icon: Shield, title: "Blockchain Security & Auditing", desc: "We perform rigorous smart contract audits, penetration testing, and security reviews to protect your protocol and users.", image: "blockchain-security.webp", gradient: "from-cyan-500/10 to-primary/10" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>ماذا<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> نبني</span></> : <>What We{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Build</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "من العقود الذكية الأساسية إلى المنظومات اللامركزية الكاملة، نقدم حلول بلوك تشين آمنة وقابلة للتوسع وجاهزة للإنتاج." : "From foundational smart contracts to full-scale decentralized ecosystems, we deliver blockchain solutions that are secure, scalable, and production-ready."}
          </p>
        </motion.div>
        <div className="flex flex-col gap-24">
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
        <img loading="lazy" src={`${import.meta.env.BASE_URL}images/blockchain-parallax-bg.webp`} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div {...fadeUp} className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            {isAr ? <>المستقبل هو <span className="text-primary">اللامركزية.</span></> : <>The Future is <span className="text-primary">Decentralized.</span></>}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {isAr ? "نساعد الشركات على تسخير قوة البلوك تشين لبناء أنظمة شفافة وآمنة وخالية من الوسطاء." : "We help businesses harness the power of blockchain to build transparent, secure, and trustless systems."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyBlockchainSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const points = isAr ? [
    { icon: Lock, title: "أمان غير قابل للتغيير", desc: "البيانات المخزّنة على البلوك تشين لا يمكن تعديلها، مما يضمن سجلات محمية من التلاعب وأقصى نزاهة للبيانات." },
    { icon: Eye, title: "شفافية كاملة", desc: "كل معاملة قابلة للتحقق على السلسلة، مما يبني الثقة بين الأطراف دون وسطاء." },
    { icon: Zap, title: "تسويات أسرع", desc: "تخلّص من الوسطاء وقلّص أوقات المعاملات من أيام إلى ثوانٍ بأتمتة العقود الذكية." },
    { icon: Layers, title: "قابلية التشغيل البيني", desc: "تعمل حلولنا عبر شبكات بلوك تشين متعددة، مما يضمن المرونة والجاهزية للمستقبل." },
    { icon: Globe, title: "إمكانية وصول عالمية", desc: "تعمل تطبيقات البلوك تشين على مدار الساعة دون قيود جغرافية، مما يفتح أعمالك للأسواق العالمية." },
    { icon: Cpu, title: "كفاءة التكاليف", desc: "قلّص التكاليف التشغيلية بأتمتة الثقة والامتثال وعمليات التسوية على السلسلة." },
  ] : [
    { icon: Lock, title: "Immutable Security", desc: "Data stored on blockchain cannot be altered, ensuring tamper-proof records and maximum data integrity." },
    { icon: Eye, title: "Full Transparency", desc: "Every transaction is verifiable on-chain, building trust between parties without intermediaries." },
    { icon: Zap, title: "Faster Settlements", desc: "Eliminate middlemen and reduce transaction times from days to seconds with smart contract automation." },
    { icon: Layers, title: "Interoperability", desc: "Our solutions work across multiple blockchain networks, ensuring flexibility and future-proofing." },
    { icon: Globe, title: "Global Accessibility", desc: "Blockchain apps operate 24/7 without geographic restrictions, opening your business to global markets." },
    { icon: Cpu, title: "Cost Efficiency", desc: "Reduce operational overhead by automating trust, compliance, and settlement processes on-chain." },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a1a] via-[#0a0a0f] to-[#0a0f0a]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>لماذا <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">البلوك تشين؟</span></> : <>Why{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Blockchain?</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "تقدم تقنية البلوك تشين مزايا جوهرية لا تستطيع الأنظمة التقليدية مجاراتها." : "Blockchain technology offers fundamental advantages that traditional systems cannot match."}
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
    { icon: Landmark, name: "المالية وDeFi", desc: "البورصات اللامركزية والإقراض وأنظمة الدفع" },
    { icon: HeartPulse, name: "الرعاية الصحية", desc: "مشاركة بيانات المرضى الآمنة وتتبع الأدوية" },
    { icon: ShoppingCart, name: "سلسلة التوريد", desc: "تتبع المصدر والتحقق من الأصالة من أوله لآخره" },
    { icon: Home, name: "العقارات", desc: "ملكية عقارية مُرمَّزة وعقود إيجار ذكية" },
    { icon: Truck, name: "اللوجستيات", desc: "الشحن الشفاف والتتبع وأتمتة الجمارك" },
    { icon: Building2, name: "الحكومة", desc: "الهوية الرقمية وأنظمة التصويت والسجلات العامة" },
  ] : [
    { icon: Landmark, name: "Finance & DeFi", desc: "Decentralized exchanges, lending, and payment systems" },
    { icon: HeartPulse, name: "Healthcare", desc: "Secure patient data sharing and pharmaceutical tracking" },
    { icon: ShoppingCart, name: "Supply Chain", desc: "End-to-end traceability and provenance verification" },
    { icon: Home, name: "Real Estate", desc: "Tokenized property ownership and smart lease agreements" },
    { icon: Truck, name: "Logistics", desc: "Transparent shipping, tracking, and customs automation" },
    { icon: Building2, name: "Government", desc: "Digital identity, voting systems, and public records" },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <img loading="lazy" src={`${import.meta.env.BASE_URL}images/blockchain-industries.webp`} alt="" className="w-full h-full object-cover opacity-20" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>حلول بلوك تشين<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> عبر القطاعات</span></> : <>Blockchain Solutions{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Across Industries</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "نكيّف تقنية البلوك تشين لحل تحديات العالم الحقيقي عبر قطاعات متنوعة." : "We tailor blockchain technology to solve real-world challenges across diverse sectors."}
          </p>
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
    { category: isAr ? "شبكات البلوك تشين" : "Blockchain Networks", techs: ["Ethereum", "Solana", "Polygon", "Binance Smart Chain", "Hyperledger"], icon: Network },
    { category: isAr ? "لغات العقود الذكية" : "Smart Contract Languages", techs: ["Solidity", "Rust", "Vyper", "Move"], icon: FileCode },
    { category: isAr ? "أطر التطوير" : "Development Frameworks", techs: ["Hardhat", "Foundry", "Truffle", "Anchor"], icon: Binary },
    { category: isAr ? "الواجهة الأمامية وWeb3" : "Frontend & Web3", techs: ["React", "Next.js", "ethers.js", "wagmi", "Web3.js"], icon: Globe },
    { category: isAr ? "التخزين والبنية التحتية" : "Storage & Infrastructure", techs: ["IPFS", "Arweave", "The Graph", "Chainlink"], icon: Server },
    { category: isAr ? "DevOps والمراقبة" : "DevOps & Monitoring", techs: ["Docker", "AWS", "Alchemy", "Infura"], icon: Server },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>مجموعة<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> تقنياتنا</span></> : <>Our{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Technology Stack</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {isAr ? "نعمل بأحدث أدوات وأطر البلوك تشين لتقديم حلول لامركزية جاهزة للإنتاج." : "We work with cutting-edge blockchain tools and frameworks to deliver production-grade decentralized solutions."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-500">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-5">
                <stack.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/60 border border-white/5 whitespace-nowrap">{tech}</span>
                ))}
              </div>
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
  const steps = isAr ? [
    { num: "01", title: "الاكتشاف والاستراتيجية", desc: "تحليل متطلباتك وتحديد شبكة البلوك تشين المناسبة وتعريف البنية التقنية." },
    { num: "02", title: "التصميم والنمذجة الأولية", desc: "إنشاء واجهات بديهية ونمذجة أولية لمنطق العقود الذكية قبل بدء التطوير الكامل." },
    { num: "03", title: "التطوير والاختبار", desc: "بناء حلّك مع اختبار صارم عبر شبكات الاختبار لضمان الأمان والأداء." },
    { num: "04", title: "التدقيق والنشر", desc: "إجراء تدقيق أمني شامل والنشر على الشبكة الرئيسية مع بنية تحتية للمراقبة." },
    { num: "05", title: "الصيانة والتطوير", desc: "تقديم دعم مستمر وترقيات وتحسينات في الميزات للحفاظ على تنافسية منصتك." },
  ] : [
    { num: "01", title: "Discovery & Strategy", desc: "We analyze your requirements, identify the right blockchain network, and define the technical architecture." },
    { num: "02", title: "Design & Prototyping", desc: "We create intuitive interfaces and prototype smart contract logic before full development begins." },
    { num: "03", title: "Development & Testing", desc: "We build your solution with rigorous testing across testnets to ensure security and performance." },
    { num: "04", title: "Audit & Deployment", desc: "We perform comprehensive security audits and deploy to mainnet with monitoring infrastructure." },
    { num: "05", title: "Maintenance & Evolution", desc: "We provide ongoing support, upgrades, and feature enhancements to keep your platform competitive." },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[#0f0a1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,107,53,0.08),_transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>نهجنا في<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> العمل</span></> : <>Our{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Process</span></>}
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative flex gap-8 items-start">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <span className="text-white font-extrabold text-lg">{step.num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-white text-xl mb-2">{step.title}</h3>
                  <p className="text-white/35 leading-relaxed">{step.desc}</p>
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
    { quote: "سلّموا نظام عقود ذكية مثالياً يتعامل مع ملايين في حجم المعاملات دون أي حوادث أمنية. خبرتهم في البلوك تشين لا مثيل لها.", name: "عمر الراشد", role: "الرئيس التنفيذي، ChainVault Technologies" },
    { quote: "انتقلت منصة DeFi الخاصة بنا من الفكرة إلى الشبكة الرئيسية في وقت قياسي. فهم الفريق العميق لاقتصاديات التوكن وتصميم البروتوكول كان لا يُقدَّر بثمن.", name: "ليلى القحطاني", role: "المدير التقني، DeFi Nexus" },
    { quote: "حوّلوا سلسلة التوريد لدينا بإمكانية تتبع البلوك تشين التي يثق بها شركاؤنا وعملاؤنا تماماً. تطبيق غيّر قواعد اللعبة.", name: "أحمد السالم", role: "المدير التنفيذي للعمليات، TraceLink MENA" },
  ] : [
    { quote: "They delivered a flawless smart contract system that handles millions in transaction volume with zero security incidents. Their blockchain expertise is unmatched.", name: "Omar Al-Rashid", role: "CEO, ChainVault Technologies" },
    { quote: "Our DeFi platform went from concept to mainnet in record time. The team's deep understanding of tokenomics and protocol design was invaluable.", name: "Layla Al-Qahtani", role: "CTO, DeFi Nexus" },
    { quote: "They transformed our supply chain with blockchain traceability that our partners and customers trust completely. A game-changing implementation.", name: "Ahmad Al-Salem", role: "COO, TraceLink MENA" },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>موثوق من<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> شركات رائدة</span></> : <>Trusted by{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Leading Companies</span></>}
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
      <div className="absolute inset-0 bg-[#0f0a1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.1),_transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>هل أنت مستعد لبناء<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> مستقبلك اللامركزي؟</span></> : <>Ready to Build Your{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Decentralized Future?</span></>}
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
            {isAr ? "دعنا نناقش مشروع البلوك تشين الخاص بك ونحوّل رؤيتك إلى حقيقة لامركزية." : "Let's discuss your blockchain project and turn your vision into a decentralized reality."}
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

export default function BlockchainAppDevelopment() {
  useSEO({
    title: "Blockchain App Development - dApps & Smart Contracts | Takarub",
    description: "Custom blockchain application development including dApps, smart contracts, DeFi solutions, and NFT platforms for Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/services/blockchain",
    keywords: ["blockchain development", "dApp development", "smart contracts", "DeFi", "Web3", "NFT"],
  });

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#0a0a0f] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesOverview />
        <ServiceOverviewPanel />
        <ServiceBlocks />
        <ParallaxDivider />
        <WhyBlockchainSection />
        <IndustriesSection />
        <TechStackSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer whiteText />
    </div>
  );
}
