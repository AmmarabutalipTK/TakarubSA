import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Smartphone, Shield, Zap, BarChart3, Code2, Layers, Globe, Cpu, Database, Cloud, CheckCircle2, Blocks, Sparkles, Rocket, HeartPulse, Landmark, GraduationCap, CalendarClock, Film, Building2, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

function useParallax(speed: number = 0.3) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return { ref, y };
}

function HeroSection() {
  const { lang, isRTL } = useLanguage();
  const isAr = lang === "ar";
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroVideoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} className="relative bg-black text-white pt-32 pb-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: heroVideoY }}>
        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover opacity-25 scale-110">
          <source src={`${import.meta.env.BASE_URL}videos/mobile-hero.mp4`} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.15),_transparent_60%)]" />
      <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
          {isAr ? <>ابنِ تطبيقات جوال<br className="hidden md:block" /><span className="text-primary">تواكب نمو أعمالك</span></> : <>Build Mobile Apps That<br className="hidden md:block" /><span className="text-primary">Scale With Your Business</span></>}
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          {isAr ? "نصمّم وننمّي تطبيقات جوال عالية الأداء تجمع بين تجارب مستخدم بديهية وأنظمة خلفية قوية. من الأفكار المبكرة إلى المنصات على مستوى المؤسسات، نحوّل المفاهيم إلى منتجات رقمية موثوقة." : "We design and develop high-performance mobile applications that combine intuitive user experiences with powerful backend systems. From early-stage ideas to enterprise-grade platforms, we turn concepts into reliable digital products."}
        </motion.p>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-sm font-semibold text-primary uppercase tracking-wider mb-10">
          {isAr ? "مهندَس للسرعة والأمان والنمو طويل الأمد." : "Engineered for speed, security, and long-term growth."}
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              {isAr ? "ابدأ مشروعك" : "Start Your Project"}
              <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CoreCapabilities() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const capabilities = isAr ? [
    { icon: Sparkles, text: "صياغة تجارب مستخدم سلسة تركّز على التفاعل والاستبقاء" },
    { icon: Layers, text: "تطوير تطبيقات قابلة للتوسع للشركات الناشئة والمؤسسات على حد سواء" },
    { icon: Cpu, text: "بناء حلول ذكية باستخدام الذكاء الاصطناعي والأنظمة المدفوعة بالبيانات" },
    { icon: Shield, text: "ضمان أمان عالي المستوى والامتثال عبر المنصات" },
    { icon: Globe, text: "تكامل التطبيقات مع أدوات الطرف الثالث وواجهات برمجة التطبيقات والأنظمة الحالية" },
  ] : [
    { icon: Sparkles, text: "Crafting seamless user experiences focused on engagement and retention" },
    { icon: Layers, text: "Developing scalable applications for both startups and enterprises" },
    { icon: Cpu, text: "Building intelligent solutions using AI and data-driven systems" },
    { icon: Shield, text: "Ensuring high-level security and compliance across platforms" },
    { icon: Globe, text: "Integrating apps with third-party tools, APIs, and existing systems" },
  ];
  const { ref: imgRef, y: imgY } = useParallax(0.25);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              {isAr ? <>ما نتقنه <span className="text-primary">بشكل أفضل</span></> : <>What We Do <span className="text-primary">Best</span></>}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {isAr ? "نساعد الشركات على تحويل أفكارها للجوال إلى واقع من خلال مزيج من التفكير التصميمي والهندسة الحديثة والبنية القابلة للتوسع." : "We help businesses bring their mobile ideas to life through a blend of design thinking, modern engineering, and scalable architecture."}
            </p>
            <div className="space-y-4">
              {capabilities.map((cap, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <cap.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed pt-2">{cap.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div ref={imgRef}>
            <motion.div style={{ y: imgY }} {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/mobile-capabilities.webp`} alt="Mobile App Development" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const services = isAr ? [
    { icon: Smartphone, name: "تطوير تطبيقات Android مخصصة" },
    { icon: Smartphone, name: "تطوير تطبيقات iOS مخصصة" },
    { icon: Layers, name: "تطوير التطبيقات متعددة المنصات" },
    { icon: Code2, name: "تطوير تطبيقات Flutter" },
    { icon: Code2, name: "تطوير تطبيقات React Native" },
    { icon: Globe, name: "تطوير تطبيقات الويب التقدمية (PWA)" },
    { icon: Database, name: "تطوير الواجهة الخلفية وتطبيقات الويب" },
    { icon: Blocks, name: "تطوير التطبيقات اللامركزية (مبنية على البلوك تشين)" },
  ] : [
    { icon: Smartphone, name: "Custom Android App Development" },
    { icon: Smartphone, name: "Custom iOS App Development" },
    { icon: Layers, name: "Cross-Platform App Development" },
    { icon: Code2, name: "Flutter App Development" },
    { icon: Code2, name: "React Native App Development" },
    { icon: Globe, name: "Progressive Web App (PWA) Development" },
    { icon: Database, name: "Backend & Web App Development" },
    { icon: Blocks, name: "Decentralized (Blockchain-based) App Development" },
  ];
  const { ref: svcImgRef, y: svcImgY } = useParallax(0.2);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={svcImgRef}>
            <motion.div style={{ y: svcImgY }} {...fadeUp} transition={{ duration: 0.6 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/mobile-services.webp`} alt="Mobile Development Services" className="relative w-full h-auto rounded-2xl" />
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                {isAr ? <>خدمات تطوير<span className="text-primary"> تطبيقات الجوال</span></> : <>Our Mobile App{" "}<span className="text-primary">Development Services</span></>}
              </h2>
              <p className="text-lg text-white/50">
                {isAr ? "نقدم خدمات تطوير جوال شاملة مصمّمة لأهداف أعمالك — من الفكرة إلى التحسين المستمر." : "We provide end-to-end mobile development services tailored to your business goals — from concept to continuous improvement."}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{service.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const industries = isAr ? [
    { icon: HeartPulse, name: "الرعاية الصحية", desc: "منصات الصحة الرقمية وتطبيقات تفاعل المرضى وحلول الرعاية عن بُعد" },
    { icon: Landmark, name: "المالية", desc: "تطبيقات فينتك آمنة ومدفوعات رقمية وأنظمة إدارة مالية" },
    { icon: GraduationCap, name: "التعليم", desc: "منصات التعلم الإلكتروني والفصول الافتراضية وتطبيقات تطوير المهارات" },
    { icon: CalendarClock, name: "الخدمات عند الطلب", desc: "منصات الحجز وتطبيقات التوصيل وحلول الخدمة الفورية" },
    { icon: Film, name: "الترفيه والإعلام", desc: "منصات البث وتطبيقات المحتوى وتجارب المستخدم التفاعلية" },
    { icon: Building2, name: "الحكومة والخدمات العامة", desc: "تطبيقات خدمة المواطنين ومنصات الحوكمة الرقمية" },
    { icon: UtensilsCrossed, name: "الغذاء والمطاعم", desc: "أنظمة الطلب الإلكتروني وتتبع التوصيل وتطبيقات الولاء" },
  ] : [
    { icon: HeartPulse, name: "Healthcare", desc: "Digital health platforms, patient engagement apps, and remote care solutions" },
    { icon: Landmark, name: "Finance", desc: "Secure fintech apps, digital payments, and financial management systems" },
    { icon: GraduationCap, name: "Education", desc: "E-learning platforms, virtual classrooms, and skill development apps" },
    { icon: CalendarClock, name: "On-Demand Services", desc: "Booking platforms, delivery apps, and real-time service solutions" },
    { icon: Film, name: "Entertainment & Media", desc: "Streaming platforms, content apps, and interactive user experiences" },
    { icon: Building2, name: "Government & Public Services", desc: "Citizen service apps and digital governance platforms" },
    { icon: UtensilsCrossed, name: "Food & Restaurant", desc: "Online ordering systems, delivery tracking, and loyalty apps" },
  ];
  const { ref: indImgRef, y: indImgY } = useParallax(0.25);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                {isAr ? <>حلول مبنية<span className="text-primary"> لكل قطاع</span></> : <>Solutions Built for{" "}<span className="text-primary">Every Industry</span></>}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isAr ? "خبرتنا تمتد عبر قطاعات متعددة، مما يمكّننا من إنشاء تطبيقات مخصصة تحل تحديات الأعمال الحقيقية." : "Our experience spans multiple industries, enabling us to create tailored applications that solve real business challenges."}
              </p>
            </motion.div>
            <div className="space-y-3">
              {industries.map((ind, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="group flex items-start gap-4 p-4 rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <ind.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-0.5">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div ref={indImgRef}>
            <motion.div style={{ y: indImgY }} {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/mobile-industries.webp`} alt="Industry Solutions" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function USPSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const usps = isAr ? [
    { icon: Layers, title: "بنية قابلة للتوسع", desc: "نبني تطبيقات تنمو مع أعمالك وتتعامل مع الطلب المتزايد بسهولة." },
    { icon: Rocket, title: "دورات تسليم أسرع", desc: "تضمن سير عملنا الرشيق إصدارات أسرع دون المساس بالجودة." },
    { icon: Shield, title: "نهج يضع الأمان أولاً", desc: "نضع حماية البيانات في مقدمة الأولويات ونتبع أفضل ممارسات الصناعة للتطوير الآمن." },
    { icon: BarChart3, title: "حلول تركّز على الأعمال", desc: "كل تطبيق نبنيه متوافق مع أهداف أعمالك لضمان التأثير القابل للقياس والعائد على الاستثمار." },
  ] : [
    { icon: Layers, title: "Scalable Architecture", desc: "We build applications that grow with your business and handle increasing user demand effortlessly." },
    { icon: Rocket, title: "Faster Delivery Cycles", desc: "Our agile workflows ensure quicker releases without compromising on quality." },
    { icon: Shield, title: "Security-First Approach", desc: "We prioritize data protection and follow industry best practices for secure development." },
    { icon: BarChart3, title: "Business-Focused Solutions", desc: "Every app we build is aligned with your business goals, ensuring measurable impact and ROI." },
  ];
  const { ref: uspImgRef, y: uspImgY } = useParallax(0.2);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={uspImgRef}>
            <motion.div style={{ y: uspImgY }} {...fadeUp} transition={{ duration: 0.6 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/mobile-usp.webp`} alt="Security and Quality" className="relative w-full h-auto rounded-2xl" />
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                {isAr ? <>لماذا تختار الشركات<span className="text-primary"> خدماتنا</span></> : <>Why Businesses{" "}<span className="text-primary">Choose Us</span></>}
              </h2>
            </motion.div>
            <div className="space-y-5">
              {usps.map((usp, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <usp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{usp.title}</h3>
                    <p className="text-white/50 leading-relaxed">{usp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const stacks = [
    { category: isAr ? "تطوير الجوال" : "Mobile Development", techs: ["Swift", "Kotlin", "Flutter", "React Native"], icon: Smartphone },
    { category: isAr ? "تطوير الواجهة الخلفية" : "Backend Development", techs: ["Node.js", "Java", "Python"], icon: Code2 },
    { category: isAr ? "أنظمة قواعد البيانات" : "Database Systems", techs: ["PostgreSQL", "MongoDB", "MySQL"], icon: Database },
    { category: isAr ? "السحابة وDevOps" : "Cloud & DevOps", techs: ["AWS", "Microsoft Azure", "Google Cloud"], icon: Cloud },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {isAr ? <>التقنيات التي<span className="text-primary"> نعمل بها</span></> : <>Technologies We{" "}<span className="text-primary">Work With</span></>}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isAr ? "نستخدم تقنيات حديثة لبناء تطبيقات قوية وآمنة وجاهزة للمستقبل." : "We leverage modern technologies to build robust, secure, and future-ready applications."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-7 rounded-2xl border border-border/60 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-black mx-auto flex items-center justify-center mb-5">
                <stack.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-4">{stack.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {stack.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-black/5 text-sm font-medium text-foreground whitespace-nowrap">{tech}</span>
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
    { num: "01", title: "الاكتشاف والتخطيط", desc: "فهم أهدافك وجمهورك ورؤية منتجك" },
    { num: "02", title: "التصميم والنمذجة الأولية", desc: "إنشاء تصاميم تتمحور حول المستخدم ونماذج أولية تفاعلية" },
    { num: "03", title: "الهندسة والتطوير", desc: "بناء أسس تطبيق قابلة للتوسع وآمنة" },
    { num: "04", title: "الاختبار وضمان الجودة", desc: "ضمان الأداء وسهولة الاستخدام والموثوقية" },
    { num: "05", title: "النشر", desc: "إطلاق تطبيقك بسلاسة عبر المنصات" },
    { num: "06", title: "الدعم والتحسين المستمر", desc: "تحديثات وتحسينات وتوسيع مستمر" },
  ] : [
    { num: "01", title: "Discovery & Planning", desc: "Understanding your goals, audience, and product vision" },
    { num: "02", title: "Design & Prototyping", desc: "Creating user-centric designs and interactive prototypes" },
    { num: "03", title: "Architecture & Development", desc: "Building scalable and secure application foundations" },
    { num: "04", title: "Testing & Quality Assurance", desc: "Ensuring performance, usability, and reliability" },
    { num: "05", title: "Deployment", desc: "Launching your app smoothly across platforms" },
    { num: "06", title: "Ongoing Support & Optimization", desc: "Continuous updates, improvements, and scaling" },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            {isAr ? <>نهجنا في<span className="text-primary"> التطوير</span></> : <>Our Development{" "}<span className="text-primary">Approach</span></>}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            {isAr ? "نتبع عملية منهجية ومرنة لضمان الشفافية والكفاءة ونتائج عالية الجودة." : "We follow a structured yet flexible process to ensure transparency, efficiency, and high-quality outcomes."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300">
              <span className="text-5xl font-extrabold text-primary/20 absolute top-4 right-6">{step.num}</span>
              <div className="relative z-10 pt-8">
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
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
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {isAr ? <>هل أنت مستعد لبناء<span className="text-primary"> تطبيقك التالي؟</span></> : <>Ready to Build Your{" "}<span className="text-primary">Next App?</span></>}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {isAr ? "دعنا نناقش مشروعك ونحوّل فكرتك للجوال إلى واقع مع فريق يحقق نتائج فعلية." : "Let's discuss your project and bring your mobile idea to life with a team that delivers results."}
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group">
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

export default function MobileApplication() {
  useSEO({
    title: "Mobile App Development - iOS & Android | Takarub",
    description: "Custom mobile application development for iOS and Android. Native and cross-platform solutions for Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/services/mobile",
    keywords: ["mobile app development", "iOS development", "Android development", "mobile solutions", "cross-platform apps"],
  });

  return (
    <div className="relative min-h-screen flex flex-col w-full bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <CoreCapabilities />
        <ServiceOverviewPanel />
        <ServicesSection />
        <IndustriesSection />
        <USPSection />
        <TechStackSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
