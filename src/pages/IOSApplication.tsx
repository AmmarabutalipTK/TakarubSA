import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Code2, Layers, Globe, Database, Cloud, Blocks, Sparkles, HeartPulse, Landmark, GraduationCap, ShoppingCart, Truck, Plane, Smartphone, Palette, TestTube, Upload, Brain, Wifi, Glasses, Server, MessageSquareQuote, Star } from "lucide-react";
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} className="relative bg-black text-white pt-32 pb-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover opacity-30 scale-110">
          <source src={`${import.meta.env.BASE_URL}videos/ios-hero.mp4`} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.15),_transparent_60%)]" />
      <motion.div style={{ y: textY, opacity: heroOpacity }} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
          {isAr ? <>ابنِ تطبيقات iPhone<br className="hidden md:block" /><span className="text-primary">يُحبّ الناس استخدامها</span></> : <>Build iPhone Apps That<br className="hidden md:block" /><span className="text-primary">People Love to Use</span></>}
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          {isAr ? "نصمّم وننمّي تطبيقات iOS عالية الأداء تجمع بين التصميم الأنيق والوظائف القوية — مبنية للتوسع من الشركات الناشئة إلى المؤسسات الكبرى." : "We design and develop high-performance iOS applications that combine elegant design with powerful functionality — built to scale from startup to enterprise."}
        </motion.p>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-sm font-semibold text-primary uppercase tracking-wider mb-10">
          {isAr ? "من الفكرة إلى إطلاق متجر التطبيقات، مصمّم لنظام Apple." : "From concept to App Store launch, tailored for the Apple ecosystem."}
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

function ServicesOverview() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {isAr ? <>خدمات تطوير iOS<span className="text-primary"> الشاملة</span></> : <>End-to-End iOS{" "}<span className="text-primary">Development Services</span></>}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isAr ? "نقدم طيفاً كاملاً من خدمات تطوير تطبيقات iOS مصمّمة لأهدافك — من الاستراتيجية المبكرة إلى تطور المنتج على المدى الطويل." : "We offer a full spectrum of iOS app development services tailored to your business goals — from early-stage strategy to long-term product evolution."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceBlocks() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const services = isAr ? [
    { icon: Sparkles, title: "استراتيجية المنتج والاستشارة", desc: "نساعدك في التحقق من الأفكار وتحديد الميزات واختيار النهج التقني الصحيح لضمان نجاح تطبيقك منذ اليوم الأول." },
    { icon: Palette, title: "تصميم UI/UX لـ iOS", desc: "يصمّم فريقنا واجهات بديهية ومصقولة بصرياً متوافقة مع معايير تصميم Apple لتجارب مستخدم سلسة." },
    { icon: Code2, title: "تطوير تطبيقات iOS مخصصة", desc: "نبني تطبيقات قوية وقابلة للتوسع باستخدام أحدث الأطر، مع ضمان الأداء والأمان وإمكانية الصيانة طويلة الأمد." },
    { icon: TestTube, title: "اختبار التطبيق وتحسينه", desc: "نختبر تطبيقك بصرامة عبر الأجهزة لضمان أداء مثالي وأوقات تحميل سريعة وصفر أخطاء حرجة." },
    { icon: Upload, title: "إطلاق متجر التطبيقات والدعم", desc: "من الرفع إلى التحديثات بعد الإطلاق، ندير الدورة الكاملة حتى يظل تطبيقك تنافسياً وذا صلة." },
  ] : [
    { icon: Sparkles, title: "Product Strategy & Consulting", desc: "We help you validate ideas, define features, and choose the right technical approach to ensure your app succeeds from day one." },
    { icon: Palette, title: "UI/UX Design for iOS", desc: "Our designers craft intuitive, visually refined interfaces aligned with Apple's design standards for seamless user experiences." },
    { icon: Code2, title: "Custom iOS App Development", desc: "We build robust, scalable apps using modern frameworks, ensuring performance, security, and long-term maintainability." },
    { icon: TestTube, title: "App Testing & Optimization", desc: "We rigorously test your app across devices to ensure flawless performance, fast load times, and zero critical bugs." },
    { icon: Upload, title: "App Store Launch & Support", desc: "From submission to post-launch updates, we manage the entire lifecycle so your app stays competitive and relevant." },
  ];
  const { ref: imgRef, y: imgY } = useParallax(0.2);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imgRef}>
            <motion.div style={{ y: imgY }} {...fadeUp} transition={{ duration: 0.6 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/ios-services.webp`} alt="iOS Development Services" className="relative w-full h-auto rounded-2xl" />
              </div>
            </motion.div>
          </div>
          <div>
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm">{service.desc}</p>
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

function IndustriesSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const industries = isAr ? [
    { icon: HeartPulse, name: "الرعاية الصحية والعافية" },
    { icon: Landmark, name: "التقنية المالية والبنوك" },
    { icon: ShoppingCart, name: "التجارة الإلكترونية والتجزئة" },
    { icon: Truck, name: "اللوجستيات والنقل" },
    { icon: GraduationCap, name: "التعليم والتعلم الإلكتروني" },
    { icon: Plane, name: "السفر والضيافة" },
  ] : [
    { icon: HeartPulse, name: "Healthcare & Wellness" },
    { icon: Landmark, name: "Fintech & Banking" },
    { icon: ShoppingCart, name: "E-commerce & Retail" },
    { icon: Truck, name: "Logistics & Transportation" },
    { icon: GraduationCap, name: "Education & E-learning" },
    { icon: Plane, name: "Travel & Hospitality" },
  ];
  const useCases = isAr ? [
    "تتبع ومراقبة في الوقت الفعلي", "تكاملات دفع آمنة", "تطبيقات بث الفيديو والإعلام",
    "توصيات مدعومة بالذكاء الاصطناعي", "خدمات قائمة على الموقع",
  ] : [
    "Real-time tracking and analytics", "Secure payment integrations", "Video streaming & media apps",
    "AI-powered recommendations", "Location-based services",
  ];
  const { ref: imgRef, y: imgY } = useParallax(0.25);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                {isAr ? <>حلول مبنية<span className="text-primary"> لقطاعات متنوعة</span></> : <>Solutions Built for{" "}<span className="text-primary">Diverse Industries</span></>}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isAr ? "نبني تطبيقات iOS مصمّمة لمتطلبات القطاعات المختلفة، نجمع فيها بين المعرفة المتخصصة وأحدث التقنيات." : "We create iOS applications tailored to the unique demands of different industries, combining domain knowledge with cutting-edge technology."}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="group flex items-center gap-4 p-4 rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <ind.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">{ind.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div ref={imgRef}>
            <motion.div style={{ y: imgY }} {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/ios-industries.webp`} alt="Industry Solutions" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div {...fadeUp} className="bg-black/5 rounded-2xl p-8">
          <h3 className="font-bold text-foreground text-lg mb-4 text-center">{isAr ? "حالات الاستخدام التي نقدمها" : "Use Cases We Deliver"}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((uc, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white border border-border/60 text-sm font-medium text-foreground">{uc}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EmergingTechSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const techs = isAr ? [
    { icon: Brain, title: "الذكاء الاصطناعي والتعلم الآلي" },
    { icon: Wifi, title: "إنترنت الأشياء (IoT)" },
    { icon: Glasses, title: "الواقع المعزز والافتراضي" },
    { icon: Cloud, title: "البنية المعتمدة على السحابة" },
    { icon: Blocks, title: "حلول البلوك تشين" },
  ] : [
    { icon: Brain, title: "Artificial Intelligence & Machine Learning" },
    { icon: Wifi, title: "Internet of Things (IoT)" },
    { icon: Glasses, title: "Augmented & Virtual Reality" },
    { icon: Cloud, title: "Cloud-Based Architecture" },
    { icon: Blocks, title: "Blockchain Solutions" },
  ];
  const { ref: imgRef, y: imgY } = useParallax(0.2);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                {isAr ? <>مدعوم بـ<span className="text-primary"> تقنيات الجيل القادم</span></> : <>Powered by{" "}<span className="text-primary">Next-Generation Technologies</span></>}
              </h2>
              <p className="text-lg text-white/50">
                {isAr ? "ندمج التقنيات المتقدمة في تطبيقات iOS لإنشاء تجارب رقمية أكثر ذكاءً وتفاعلاً وجاهزيةً للمستقبل." : "We integrate advanced technologies into iOS apps to create smarter, more engaging, and future-ready digital experiences."}
              </p>
            </motion.div>
            <div className="space-y-4">
              {techs.map((tech, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold">{tech.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div ref={imgRef}>
            <motion.div style={{ y: imgY }} {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-3xl blur-2xl" />
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/ios-emerging-tech.webp`} alt="Emerging Technologies" className="relative w-full h-auto rounded-2xl" />
              </div>
            </motion.div>
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
    { category: isAr ? "تطوير الجوال" : "Mobile Development", techs: ["Swift", "Objective-C"], icon: Smartphone },
    { category: isAr ? "تقنيات الواجهة الأمامية" : "Frontend Technologies", techs: ["React", "JavaScript"], icon: Globe },
    { category: isAr ? "تطوير الواجهة الخلفية" : "Backend Development", techs: ["Node.js", "Python"], icon: Server },
    { category: isAr ? "قواعد البيانات" : "Database", techs: ["PostgreSQL", "MongoDB"], icon: Database },
    { category: isAr ? "السحابة وDevOps" : "Cloud & DevOps", techs: ["AWS", "Google Cloud", "Docker"], icon: Cloud },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {isAr ? <>التقنية التي<span className="text-primary"> تشغّل تطبيقاتنا</span></> : <>Technology That{" "}<span className="text-primary">Powers Our Apps</span></>}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isAr ? "نستخدم تقنيات حديثة وموثوقة لضمان أن يكون تطبيقك سريعاً وآمناً ومبنياً للنمو." : "We use a modern, reliable tech stack to ensure your app is fast, secure, and built for growth."}
          </p>
        </motion.div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.slice(0, 3).map((stack, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-7 rounded-2xl border border-border/60 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black mx-auto flex items-center justify-center mb-5"><stack.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="font-bold text-foreground mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">{stack.techs.map((tech) => <span key={tech} className="px-3 py-1.5 rounded-full bg-black/5 text-sm font-medium text-foreground whitespace-nowrap">{tech}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {stacks.slice(3).map((stack, i) => (
              <motion.div key={i + 3} {...fadeUp} transition={{ duration: 0.5, delay: (i + 3) * 0.1 }} className="p-7 rounded-2xl border border-border/60 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black mx-auto flex items-center justify-center mb-5"><stack.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="font-bold text-foreground mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">{stack.techs.map((tech) => <span key={tech} className="px-3 py-1.5 rounded-full bg-black/5 text-sm font-medium text-foreground whitespace-nowrap">{tech}</span>)}</div>
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
    { quote: "فهموا رؤيتنا فوراً وسلّموا تطبيقاً تجاوز توقعاتنا في الأداء والتصميم معاً.", name: "أحمد المنصور", role: "الرئيس التنفيذي، TechVentures" },
    { quote: "الفريق كان سريع الاستجابة وقوياً تقنياً. أُطلق تطبيقنا بسلاسة وتوسّع دون أي مشاكل.", name: "سارة الخالدي", role: "المدير التقني، FinFlow" },
    { quote: "اهتمامهم بالتفاصيل وتجربة المستخدم أحدث فرقاً كبيراً في طريقة تفاعل عملائنا مع التطبيق.", name: "عمر رشيد", role: "المؤسس، ShopEase" },
  ] : [
    { quote: "They understood our vision immediately and delivered an app that exceeded our expectations in both performance and design.", name: "Ahmed Al-Mansour", role: "CEO, TechVentures" },
    { quote: "The team was highly responsive and technically strong. Our app launched smoothly and scaled without issues.", name: "Sara Al-Khalidi", role: "CTO, FinFlow" },
    { quote: "Their attention to detail and user experience made a huge difference in how our customers engage with the app.", name: "Omar Rasheed", role: "Founder, ShopEase" },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            {isAr ? <>ماذا يقول<span className="text-primary"> عملاؤنا</span></> : <>What Our Clients{" "}<span className="text-primary">Say</span></>}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-300">
              <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div>
              <MessageSquareQuote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-white/70 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div><p className="font-bold text-white">{t.name}</p><p className="text-white/40 text-sm">{t.role}</p></div>
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
            {isAr ? <>هل أنت مستعد لبناء<span className="text-primary"> تطبيق iOS الخاص بك؟</span></> : <>Ready to Build Your{" "}<span className="text-primary">iOS App?</span></>}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {isAr ? "دعنا نحوّل فكرتك إلى واقع في نظام Apple مع فريق يحقق نتائج استثنائية." : "Let's bring your idea to life on the Apple ecosystem with a team that delivers exceptional results."}
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

export default function IOSApplication() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesOverview />
        <ServiceOverviewPanel />
        <ServiceBlocks />
        <IndustriesSection />
        <EmergingTechSection />
        <TechStackSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
