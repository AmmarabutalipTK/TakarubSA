import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Code2, Layers, Database, Cloud, Blocks, Sparkles, Rocket, HeartPulse, Landmark, GraduationCap, ShoppingCart, Truck, Home, Dumbbell, Palette, TestTube, Upload, Brain, Wifi, Bot, Server, MessageSquareQuote, Star, MapPin, CreditCard, Glasses, LineChart } from "lucide-react";
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
  return (
    <section className="relative bg-black text-white pt-32 pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.08),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
          {isAr ? <>ابنِ تطبيقات Android قوية<br className="hidden md:block" /><span className="text-primary">لجمهور عالمي</span></> : <>Build Powerful Android Apps{" "}<br className="hidden md:block" /><span className="text-primary">for a Global Audience</span></>}
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          {isAr ? "نبني تطبيقات Android قابلة للتوسع وعالية الأداء مصمّمة للعمل بسلاسة عبر الأجهزة والمستخدمين والبيئات التجارية المعقدة." : "We create scalable, high-performance Android applications designed to run seamlessly across devices, users, and complex business environments."}
        </motion.p>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-sm text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
          {isAr ? "من التحقق من الفكرة إلى النشر على Google Play، نساعدك على بناء تطبيقات Android سريعة وآمنة وجاهزة للنمو مع أعمالك." : "From idea validation to Google Play deployment, we help you build Android apps that are fast, secure, and ready to grow with your business."}
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              {isAr ? "ابنِ تطبيق Android الخاص بك" : "Build Your Android App"}
              <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
            </Button>
          </a>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-5xl mx-auto">
          <img loading="lazy" src={`${import.meta.env.BASE_URL}images/android-hero.webp`} alt="Android App Development" className="w-full h-auto rounded-t-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              {isAr ? <>خدمات تطوير تطبيقات Android<span className="text-primary"> الشاملة</span></> : <>Complete Android App{" "}<span className="text-primary">Development Services</span></>}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isAr ? "نقدم خدمات تطوير تطبيقات Android شاملة تركّز على الأداء والمرونة وقابلية التوسع — مصمّمة للشركات بجميع أحجامها." : "We provide end-to-end Android app development services focused on performance, flexibility, and scalability — tailored for businesses of all sizes."}
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <img loading="lazy" src={`${import.meta.env.BASE_URL}images/android-services-overview.webp`} alt="Android Ecosystem" className="w-full h-auto rounded-2xl border border-border/60 shadow-lg" />
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
    { icon: Sparkles, title: "استراتيجية Android والتخطيط", desc: "نساعدك على تحديد خريطة طريق واضحة للمنتج من خلال مواءمة أهداف الأعمال مع احتياجات المستخدمين والجدوى التقنية.", image: "android-strategy.webp" },
    { icon: Palette, title: "تصميم UI/UX لـ Android", desc: "نصمّم واجهات بديهية وفق مبادئ Material Design لضمان تنقل سلس عبر أجهزة Android المتنوعة.", image: "android-uiux.webp" },
    { icon: Code2, title: "تطوير تطبيقات Android مخصصة", desc: "نبني تطبيقات قوية بأحدث أطر Android تدعم الأداء العالي وقابلية التوسع والنمو طويل الأمد.", image: "android-development.webp" },
    { icon: TestTube, title: "الاختبار وضمان الجودة", desc: "تضمن عملية ضمان الجودة لدينا أن يعمل تطبيقك بصورة مثالية عبر أجهزة وأحجام شاشات وإصدارات نظام تشغيل متعددة.", image: "android-testing.webp" },
    { icon: Upload, title: "النشر ودعم دورة الحياة", desc: "ندير نشر التطبيق والتحديثات والتحسينات المستمرة للحفاظ على تنافسيته في سوق متغير.", image: "android-deployment.webp" },
  ] : [
    { icon: Sparkles, title: "Android Strategy & Planning", desc: "We help you define a clear product roadmap by aligning business goals with user needs and technical feasibility.", image: "android-strategy.webp" },
    { icon: Palette, title: "Android UI/UX Design", desc: "We design intuitive interfaces based on Material Design principles, ensuring smooth navigation across diverse Android devices.", image: "android-uiux.webp" },
    { icon: Code2, title: "Custom Android App Development", desc: "We build robust applications using modern Android frameworks that support high performance, scalability, and long-term growth.", image: "android-development.webp" },
    { icon: TestTube, title: "Testing & Quality Assurance", desc: "Our QA process ensures your app works flawlessly across multiple devices, screen sizes, and OS versions.", image: "android-testing.webp" },
    { icon: Upload, title: "Deployment & Lifecycle Support", desc: "We manage app publishing, updates, and ongoing improvements to keep your app competitive in a fast-changing market.", image: "android-deployment.webp" },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-extrabold text-2xl mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <img loading="lazy" src={`${import.meta.env.BASE_URL}images/${service.image}`} alt={service.title} className="w-full h-auto rounded-2xl border border-white/10" />
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
  const industries = isAr ? [
    { icon: HeartPulse, name: "الرعاية الصحية والطب عن بُعد" },
    { icon: Landmark, name: "التقنية المالية والبنوك الرقمية" },
    { icon: ShoppingCart, name: "التجارة الإلكترونية والأسواق" },
    { icon: Truck, name: "اللوجستيات وإدارة الأسطول" },
    { icon: Home, name: "العقارات والتقنية العقارية" },
    { icon: GraduationCap, name: "التعليم ومنصات التعلم" },
    { icon: Dumbbell, name: "اللياقة البدنية والصحة" },
  ] : [
    { icon: HeartPulse, name: "Healthcare & Telemedicine" },
    { icon: Landmark, name: "Fintech & Digital Banking" },
    { icon: ShoppingCart, name: "E-commerce & Marketplaces" },
    { icon: Truck, name: "Logistics & Fleet Management" },
    { icon: Home, name: "Real Estate & Property Tech" },
    { icon: GraduationCap, name: "Education & Learning Platforms" },
    { icon: Dumbbell, name: "Fitness & Wellness" },
  ];
  const useCases = isAr ? [
    { icon: MapPin, text: "أنظمة التتبع والملاحة في الوقت الفعلي" },
    { icon: Brain, text: "تخصيص مدفوع بالذكاء الاصطناعي" },
    { icon: CreditCard, text: "الدفع الآمن والتحقق من الهوية" },
    { icon: Glasses, text: "تصوّر المنتجات بالواقع المعزز" },
    { icon: Rocket, text: "أدوات أتمتة سير العمل" },
  ] : [
    { icon: MapPin, text: "Real-time tracking and GPS systems" },
    { icon: Brain, text: "AI-driven personalization" },
    { icon: CreditCard, text: "Secure payment and identity verification" },
    { icon: Glasses, text: "AR-based product visualization" },
    { icon: Rocket, text: "Workflow automation tools" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {isAr ? <>حلول Android<span className="text-primary"> لكل قطاع</span></> : <>Android Solutions for{" "}<span className="text-primary">Every Industry</span></>}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isAr ? "نطور تطبيقات Android مصمّمة لتحديات القطاع المحددة، مما يساعد الشركات على تبسيط عملياتها وتحسين تفاعل المستخدمين." : "We develop Android apps tailored to industry-specific challenges, helping businesses streamline operations and improve user engagement."}
          </p>
        </motion.div>
        <div className="flex flex-col gap-6 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 4).map((ind, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <ind.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {industries.slice(4).map((ind, i) => (
              <motion.div key={i + 4} {...fadeUp} transition={{ duration: 0.5, delay: (i + 4) * 0.08 }} className="group p-6 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <ind.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div {...fadeUp} className="bg-black rounded-2xl p-8">
          <h3 className="font-bold text-white text-lg mb-6 text-center">{isAr ? "حالات الاستخدام التي نقدمها" : "Use Cases We Deliver"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {useCases.map((uc, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <uc.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">{uc.text}</span>
              </div>
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
    { icon: Bot, title: "تجارب الذكاء الاصطناعي التوليدي" },
    { icon: Wifi, title: "إنترنت الأشياء (IoT)" },
    { icon: Blocks, title: "البلوك تشين والمعاملات الآمنة" },
    { icon: Cloud, title: "البنية التحتية السحابية" },
    { icon: LineChart, title: "تحليلات البيانات والرؤى" },
  ] : [
    { icon: Brain, title: "Artificial Intelligence & Machine Learning" },
    { icon: Bot, title: "Generative AI Experiences" },
    { icon: Wifi, title: "Internet of Things (IoT)" },
    { icon: Blocks, title: "Blockchain & Secure Transactions" },
    { icon: Cloud, title: "Cloud Infrastructure" },
    { icon: LineChart, title: "Data Analytics & Insights" },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              {isAr ? <>تطبيقات Android أذكى مع<span className="text-primary"> تقنيات متقدمة</span></> : <>Smarter Android Apps with{" "}<span className="text-primary">Advanced Technologies</span></>}
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              {isAr ? "ندمج التقنيات الحديثة في تطبيقات Android لإنشاء حلول ذكية وتكيّفية وجاهزة للمستقبل." : "We integrate modern technologies into Android applications to create intelligent, adaptive, and future-ready solutions."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techs.map((tech, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{tech.title}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-white/30 text-sm mt-6">
              {isAr ? "تتيح هذه التقنيات لتطبيقات Android أتمتة العمليات وتخصيص التجارب والتوسع بكفاءة عبر ملايين المستخدمين." : "These technologies allow Android apps to automate processes, personalize experiences, and scale efficiently across millions of users."}
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <img loading="lazy" src={`${import.meta.env.BASE_URL}images/android-emerging-tech.webp`} alt="Emerging Technologies" className="w-full h-auto rounded-2xl border border-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const stacks = [
    { category: isAr ? "تطوير الجوال" : "Mobile Development", techs: ["Kotlin", "Java"], icon: Smartphone },
    { category: isAr ? "الأطر والأدوات" : "Frameworks & Tools", techs: ["Android SDK", "Jetpack Compose", "Firebase"], icon: Layers },
    { category: isAr ? "تطوير الواجهة الخلفية" : "Backend Development", techs: ["Node.js", "Spring Boot", "Django"], icon: Server },
    { category: isAr ? "قواعد البيانات" : "Database", techs: ["PostgreSQL", "MongoDB", "Firebase Realtime DB"], icon: Database },
    { category: isAr ? "السحابة وDevOps" : "Cloud & DevOps", techs: ["AWS", "Google Cloud Platform", "Azure"], icon: Cloud },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {isAr ? <>مبني بأحدث<span className="text-primary"> تقنيات Android</span></> : <>Built with Modern{" "}<span className="text-primary">Android Technologies</span></>}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isAr ? "نستخدم تقنيات قوية ومرنة لضمان أداء تطبيق Android الخاص بك بموثوقية عبر الأجهزة وتوسّعه بسهولة." : "We use a powerful and flexible tech stack to ensure your Android app performs reliably across devices and scales effortlessly."}
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
    { quote: "منصتنا على Android تتعامل الآن مع آلاف المستخدمين اليوميين دون مشاكل في الأداء. التوسع الذي حققوه كان بالضبط ما كنا نحتاجه.", name: "خالد الفهد", role: "الرئيس التنفيذي، ScaleUp Technologies" },
    { quote: "سلّموا تطبيقاً مستقراً للغاية عبر أجهزة متعددة، وهو أمر بالغ الأهمية في نظام Android. كانت التجربة سلسة من البداية إلى النهاية.", name: "نورة العتيبي", role: "المدير التقني، DevStream" },
    { quote: "ساعدنا فريقهم على تحويل فكرة معقدة إلى تجربة جوال بسيطة وسهلة الاستخدام يُحبّها عملاؤنا.", name: "فيصل الحربي", role: "المؤسس، QuickServe" },
  ] : [
    { quote: "Our Android platform now handles thousands of daily users without performance issues. The scalability they delivered was exactly what we needed.", name: "Khalid Al-Fahad", role: "CEO, ScaleUp Technologies" },
    { quote: "They delivered a highly stable app across multiple devices, which is critical in the Android ecosystem. The experience was smooth from start to finish.", name: "Noura Al-Otaibi", role: "CTO, DevStream" },
    { quote: "Their team helped us turn a complex idea into a simple and user-friendly mobile experience that our customers love.", name: "Faisal Al-Harbi", role: "Founder, QuickServe" },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            {isAr ? <>يثق بنا فرق عمل<span className="text-primary"> حول العالم</span></> : <>Trusted by Teams{" "}<span className="text-primary">Worldwide</span></>}
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
            {isAr ? <>هل أنت مستعد لبناء<span className="text-primary"> تطبيق Android الخاص بك؟</span></> : <>Ready to Build Your{" "}<span className="text-primary">Android App?</span></>}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {isAr ? "دعنا نحوّل فكرتك إلى تطبيق Android قوي يتوسع عبر ملايين الأجهزة حول العالم." : "Let's turn your idea into a powerful Android application that scales across millions of devices worldwide."}
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group">
                {isAr ? "ابنِ تطبيق Android الخاص بك" : "Build Your Android App"}
                <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AndroidApplication() {
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
