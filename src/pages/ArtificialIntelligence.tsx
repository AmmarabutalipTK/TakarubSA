import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Brain, Cpu, MessageSquare, Eye, BarChart3, FileText, Sparkles, Globe, Zap, Database, Cloud, Code2, HeartPulse, Landmark, ShoppingCart, Factory, Truck, GraduationCap, Bot, Layers, Network, Atom, Satellite, FlaskConical, Building2, Star } from "lucide-react";
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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover scale-110">
        <source src={`${import.meta.env.BASE_URL}videos/ai-hero.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#030318]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.06),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center pt-32 pb-24">
<motion.h1
  {...fadeUp}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.2] md:leading-[1.1] mb-8 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
>
  {isAr ? (
    <>
      ابنِ أنظمة ذكية
      <br />
      <span
        className="block mt-[14px] md:mt-[20px] leading-[1.3] pt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400"
        style={{
          WebkitTextStroke: "0.3px transparent",
        }}
      >
        بالذكاء الاصطناعي
      </span>
    </>
  ) : (
    <>
      Build Intelligent Systems
      <br />
      <span className="block mt-[20px] bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">
        with Artificial Intelligence
      </span>
    </>
  )}
</motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
          {isAr ? "نصمّم وننشر حلول مدعومة بالذكاء الاصطناعي تُؤتمت العمليات وتُعزز اتخاذ القرارات وتفتح فرص أعمال جديدة." : "We design and deploy AI-powered solutions that automate processes, enhance decision-making, and unlock new business opportunities."}
        </motion.p>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-sm text-white/60 max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
          {isAr ? "من الذكاء الاصطناعي التحاوري إلى أنظمة تعلم الآلة المتقدمة، نساعد الشركات على تسخير الإمكانات الكاملة للذكاء الاصطناعي." : "From conversational AI to advanced machine learning systems, we help businesses harness the full potential of artificial intelligence."}
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 shadow-[0_0_30px_rgba(255,107,53,0.3)]">
              {isAr ? "استكشف حلول الذكاء الاصطناعي" : "Explore AI Solutions"}
              <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
            </Button>
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030318] to-transparent z-10" />
    </section>
  );
}

function WhatIsAI() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const techs = [
    { icon: Cpu, nameEn: "Machine Learning", nameAr: "تعلم الآلة" },
    { icon: MessageSquare, nameEn: "Natural Language Processing", nameAr: "معالجة اللغة الطبيعية" },
    { icon: Eye, nameEn: "Computer Vision", nameAr: "الرؤية الحاسوبية" },
    { icon: Layers, nameEn: "Deep Learning", nameAr: "التعلم العميق" },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#030318]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,107,53,0.04),_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 tracking-wider uppercase">
              <Brain className="w-3.5 h-3.5" />
              {isAr ? "فهم الذكاء الاصطناعي" : "Understanding AI"}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              {isAr ? <>فهم{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">الذكاء الاصطناعي</span></> : <>Understanding{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Artificial Intelligence</span></>}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {isAr ? "يشير الذكاء الاصطناعي إلى الأنظمة القادرة على تحليل البيانات والتعلم من الأنماط واتخاذ القرارات بحد أدنى من التدخل البشري. تعالج هذه الأنظمة كميات هائلة من المعلومات وتتعرف على الأنماط وتتحسن باستمرار مع مرور الوقت." : "Artificial Intelligence (AI) refers to systems that can analyze data, learn from patterns, and make decisions with minimal human intervention. These systems process vast amounts of information, recognize patterns, and continuously improve over time."}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {techs.map((tech, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: 0.1 * i }} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-amber-500/20 transition-all">
                    <tech.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{isAr ? tech.nameAr : tech.nameEn}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-primary/60 text-sm italic border-l-2 border-primary/30 pl-4">
              {isAr ? "يُمكّن الذكاء الاصطناعي الآلات من محاكاة الذكاء البشري على نطاق واسع." : "AI enables machines to simulate human intelligence at scale."}
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-3xl blur-2xl" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-amber-500/20 rounded-2xl" />
              <video autoPlay muted loop playsInline preload="metadata" className="relative w-full h-auto rounded-2xl">
                <source src={`${import.meta.env.BASE_URL}videos/ai-brain.mp4`} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AIServicesOverview() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const services = isAr ? [
    { icon: Cpu, title: "تطوير نماذج الذكاء الاصطناعي", desc: "نماذج ذكاء اصطناعي مخصصة مصمّمة لمتطلبات أعمالك وبياناتك المحددة." },
    { icon: Brain, title: "حلول تعلم الآلة", desc: "أنظمة تعلم موجّه وغير موجّه وتعزيزي للأتمتة الذكية." },
    { icon: MessageSquare, title: "معالجة اللغة الطبيعية والذكاء الاصطناعي التحاوري", desc: "روبوتات دردشة ومساعدات صوتية وأنظمة تحليل نصي مدعومة بنماذج اللغة الكبيرة." },
    { icon: Eye, title: "أنظمة الرؤية الحاسوبية", desc: "حلول التعرف على الصور وكشف الأجسام والفحص المرئي." },
    { icon: BarChart3, title: "التحليلات التنبؤية", desc: "توقّع الاتجاهات والسلوكيات والنتائج باستخدام البيانات التاريخية ونماذج تعلم الآلة." },
    { icon: Zap, title: "تكامل الذكاء الاصطناعي", desc: "دمج قدرات الذكاء الاصطناعي بسلاسة في أنظمتك وسير عمل قائمة." },
  ] : [
    { icon: Cpu, title: "AI Model Development", desc: "Custom AI models tailored to your specific business requirements and data." },
    { icon: Brain, title: "Machine Learning Solutions", desc: "Supervised, unsupervised, and reinforcement learning systems for intelligent automation." },
    { icon: MessageSquare, title: "NLP & Conversational AI", desc: "Chatbots, voice assistants, and text analysis systems powered by large language models." },
    { icon: Eye, title: "Computer Vision Systems", desc: "Image recognition, object detection, and visual inspection solutions." },
    { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast trends, behavior, and outcomes using historical data and ML models." },
    { icon: Zap, title: "AI Integration", desc: "Seamlessly integrate AI capabilities into your existing systems and workflows." },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030318] via-[#050525] to-[#030318]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,107,53,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.4) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>حلول الذكاء الاصطناعي<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> التي نبنيها</span></> : <>AI Solutions{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">We Build</span></>}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            {isAr ? "نطور أنظمة ذكية مصمّمة لاحتياجات أعمالك، تساعدك على أتمتة سير العمل وتحسين الدقة وتقديم تجارب مستخدم أفضل." : "We develop intelligent systems tailored to your business needs, helping you automate workflows, improve accuracy, and deliver better user experiences."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-amber-500/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.15)] transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const useCases = isAr ? [
    { icon: Bot, title: "روبوتات الدردشة والمساعدون الافتراضيون", desc: "روبوتات دردشة مدعومة بالذكاء الاصطناعي تتولى استفسارات العملاء وتُؤتمت الدعم وتُحسّن أوقات الاستجابة.", gradient: "from-primary/20 to-amber-500/10" },
    { icon: Database, title: "التوليد المعزز بالاسترجاع (RAG)", desc: "تجمع أنظمة RAG بين نماذج اللغة الكبيرة واسترجاع البيانات الفوري لتقديم استجابات دقيقة وسياقية من مصادر بياناتك.", gradient: "from-primary/20 to-amber-500/10" },
    { icon: Sparkles, title: "أنظمة التوصية", desc: "يقترح الذكاء الاصطناعي منتجات أو محتوى أو خدمات بناءً على سلوك المستخدم وتفضيلاته لتعظيم التفاعل والإيرادات.", gradient: "from-amber-500/20 to-primary/10" },
    { icon: FileText, title: "معالجة المستندات وأتمتتها", desc: "استخرج البيانات من الفواتير والعقود والنماذج باستخدام فهم المستندات بالذكاء الاصطناعي والتعرف الضوئي الذكي.", gradient: "from-primary/20 to-amber-400/10" },
    { icon: Eye, title: "تطبيقات الرؤية الحاسوبية", desc: "حلل الصور ومقاطع الفيديو للكشف عن الأجسام والتعرف على الوجوه وضبط الجودة والبحث المرئي.", gradient: "from-primary/20 to-amber-500/10" },
    { icon: BarChart3, title: "التحليلات التنبؤية", desc: "توقّع الاتجاهات وسلوك العملاء ونتائج الأعمال باستخدام البيانات التاريخية ونماذج تعلم الآلة.", gradient: "from-primary/15 to-amber-400/10" },
  ] : [
    { icon: Bot, title: "Chatbots & Virtual Assistants", desc: "AI-powered chatbots handle customer queries, automate support, and improve response times across websites and apps.", gradient: "from-primary/20 to-amber-500/10" },
    { icon: Database, title: "Retrieval-Augmented Generation (RAG)", desc: "RAG systems combine large language models with real-time data retrieval to provide accurate, context-aware responses from your own data sources.", gradient: "from-primary/20 to-amber-500/10" },
    { icon: Sparkles, title: "Recommendation Systems", desc: "AI suggests products, content, or services based on user behavior and preferences to maximize engagement and revenue.", gradient: "from-amber-500/20 to-primary/10" },
    { icon: FileText, title: "Document Processing & Automation", desc: "Extract data from invoices, contracts, and forms using AI-powered document understanding and intelligent OCR.", gradient: "from-primary/20 to-amber-400/10" },
    { icon: Eye, title: "Computer Vision Applications", desc: "Analyze images and videos for object detection, facial recognition, quality control, and visual search.", gradient: "from-primary/20 to-amber-500/10" },
    { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast trends, customer behavior, and business outcomes using historical data and machine learning models.", gradient: "from-primary/15 to-amber-400/10" },
  ];

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover opacity-20">
          <source src={`${import.meta.env.BASE_URL}videos/ai-data.mp4`} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030318] via-[#030318]/90 to-[#030318]" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,107,53,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>تطبيقات الذكاء الاصطناعي<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> التي تُحوّل الأعمال</span></> : <>AI Applications{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Transforming Businesses</span></>}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            {isAr ? "حلول ذكاء اصطناعي واقعية تحقق تأثيراً ملموساً في كل جانب من جوانب أعمالك." : "Real-world AI solutions that drive measurable impact across every aspect of your business."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/15 via-transparent to-amber-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-7 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-500 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uc.gradient} flex items-center justify-center mb-5 group-hover:shadow-[0_0_25px_rgba(255,107,53,0.2)] transition-all duration-500`}>
                  <uc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{uc.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{uc.desc}</p>
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
    { icon: HeartPulse, name: "الرعاية الصحية", tagline: "إحداث ثورة في رعاية المرضى بالذكاء الاصطناعي", points: ["التنبؤ بالأمراض والتشخيص المبكر", "تحليل الصور الطبية بالتعلم العميق", "المساعدون الصحيون الافتراضيون وأنظمة الفرز"], image: "ai-ind-healthcare.webp", gradient: "from-primary to-amber-500", num: "01" },
    { icon: Landmark, name: "المالية", tagline: "تأمين وتحسين الأنظمة المالية", points: ["كشف الاحتيال ومنعه في الوقت الفعلي", "تحليل المخاطر ونمذجتها بالذكاء الاصطناعي", "التداول الخوارزمي والتنبؤ بالسوق"], image: "ai-ind-finance.webp", gradient: "from-amber-500 to-primary", num: "02" },
    { icon: ShoppingCart, name: "التجزئة والتجارة الإلكترونية", tagline: "تجارب تسوق مخصصة على نطاق واسع", points: ["توصيات المنتجات المُفرطة التخصيص", "التنبؤ بالطلب وتحسين المخزون", "تحليل سلوك العملاء وتجزئتهم"], image: "ai-ind-retail.webp", gradient: "from-primary to-orange-400", num: "03" },
    { icon: Factory, name: "التصنيع", tagline: "مصانع ذكية مدعومة بالذكاء", points: ["الصيانة التنبؤية وكشف الشذوذ", "فحص الجودة باستخدام الرؤية الحاسوبية"], image: "ai-ind-manufacturing.webp", gradient: "from-primary to-amber-400", num: "04" },
    { icon: Truck, name: "اللوجستيات", tagline: "عمليات سلسلة توريد ذكية", points: ["تخطيط المسارات والتوصيل المحسَّن بالذكاء الاصطناعي", "التنبؤ بالطلب في سلسلة التوريد"], image: "ai-ind-logistics.webp", gradient: "from-primary to-amber-500", num: "05" },
    { icon: GraduationCap, name: "التعليم", tagline: "تعلم تكيفي لكل طالب", points: ["مسارات تعليمية ومناهج مخصصة", "مدرسون ذكيون بالذكاء الاصطناعي وأنظمة تقييم ذكية"], image: "ai-ind-education.webp", gradient: "from-amber-500 to-primary", num: "06" },
  ] : [
    { icon: HeartPulse, name: "Healthcare", tagline: "Revolutionizing Patient Care with AI", points: ["Disease prediction & early diagnosis", "Medical imaging analysis with deep learning", "Virtual health assistants & triage systems"], image: "ai-ind-healthcare.webp", gradient: "from-primary to-amber-500", num: "01" },
    { icon: Landmark, name: "Finance", tagline: "Securing & Optimizing Financial Systems", points: ["Real-time fraud detection & prevention", "AI-driven risk analysis & modeling", "Algorithmic trading & market prediction"], image: "ai-ind-finance.webp", gradient: "from-amber-500 to-primary", num: "02" },
    { icon: ShoppingCart, name: "Retail & E-commerce", tagline: "Personalized Shopping Experiences at Scale", points: ["Hyper-personalized product recommendations", "Demand forecasting & inventory optimization", "Customer behavior analysis & segmentation"], image: "ai-ind-retail.webp", gradient: "from-primary to-orange-400", num: "03" },
    { icon: Factory, name: "Manufacturing", tagline: "Smart Factories Powered by Intelligence", points: ["Predictive maintenance & anomaly detection", "Quality inspection using computer vision AI"], image: "ai-ind-manufacturing.webp", gradient: "from-primary to-amber-400", num: "04" },
    { icon: Truck, name: "Logistics", tagline: "Intelligent Supply Chain Operations", points: ["AI-optimized route planning & delivery", "Supply chain demand forecasting"], image: "ai-ind-logistics.webp", gradient: "from-primary to-amber-500", num: "05" },
    { icon: GraduationCap, name: "Education", tagline: "Adaptive Learning for Every Student", points: ["Personalized learning paths & curricula", "AI tutors & intelligent assessment systems"], image: "ai-ind-education.webp", gradient: "from-amber-500 to-primary", num: "06" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const index = Math.min(Math.floor(v * industries.length), industries.length - 1);
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress, industries.length]);

  const active = industries[activeIndex];

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${industries.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#030318]" />

        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.6 }} className="absolute inset-0">
            <img loading="lazy" src={`${import.meta.env.BASE_URL}images/${active.image}`} alt={active.name} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#030318] via-[#030318]/85 to-[#030318]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030318] via-transparent to-[#030318]/60" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,107,53,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                  <p className="text-primary/60 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                    {isAr ? "الذكاء الاصطناعي عبر القطاعات" : "AI Across Industries"}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
                    <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{active.name}</span>
                  </h2>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                    <p className="text-lg text-white/70 mb-8 font-medium">{active.tagline}</p>
                    <div className="space-y-4 mb-10">
                      {active.points.map((point, j) => (
                        <motion.div key={j} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: j * 0.1 }} className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-amber-500/10 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(255,107,53,0.2)] transition-all duration-300">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <p className="text-white/60 text-base">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center shadow-[0_0_25px_rgba(255,107,53,0.2)]`}>
                        <active.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-widest">{isAr ? "القطاع" : "Industry"}</p>
                        <p className="text-white font-bold">{active.name}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center gap-3">
                {industries.map((ind, i) => (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-500 cursor-pointer w-full max-w-[260px] ${i === activeIndex ? "bg-white/[0.06] border border-primary/30 shadow-[0_0_20px_rgba(255,107,53,0.1)]" : "bg-white/[0.02] border border-white/5 opacity-40 hover:opacity-70"}`}>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${ind.gradient} flex items-center justify-center flex-shrink-0 ${i === activeIndex ? "shadow-[0_0_12px_rgba(255,107,53,0.3)]" : ""}`}>
                      <ind.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate ${i === activeIndex ? "text-white" : "text-white/50"}`}>{ind.name}</p>
                    </div>
                    <span className={`text-xs font-mono ${i === activeIndex ? "text-primary" : "text-white/20"}`}>{ind.num}</span>
                  </div>
                ))}
                <div className="w-full max-w-[260px] mt-2 px-4">
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full" style={{ width: `${((activeIndex + 1) / industries.length) * 100}%` }} transition={{ duration: 0.4 }} />
                  </div>
                  <p className="text-[10px] text-white/20 mt-2 text-right font-mono">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-20">
          {industries.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-400 ${i === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalTrendsSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const trends = isAr ? [
    { icon: Sparkles, title: "منصات الذكاء الاصطناعي التوليدي", desc: "أدوات تُنشئ نصوصاً وصوراً وأكواداً ومقاطع فيديو باستخدام نماذج اللغة الكبيرة. يُعيد الذكاء الاصطناعي التوليدي تشكيل سير العمل الإبداعية وتطوير البرمجيات وإنتاج المحتوى بنطاق غير مسبوق.", stat: "85%", statLabel: "اعتماد المؤسسات بحلول 2026", highlights: ["توليد النصوص والصور", "مساعدو الكود", "توليف الفيديو", "النماذج متعددة الوسائط"] },
    { icon: Satellite, title: "الأنظمة الذاتية", desc: "المركبات ذاتية القيادة والطائرات المسيّرة والروبوتات المدعومة بالذكاء الاصطناعي. تُمكّن الأنظمة الذاتية نقلاً أكثر أماناً ولوجستيات أكثر كفاءة وتصنيعاً من الجيل القادم مع حد أدنى من الإشراف البشري.", stat: "$500B+", statLabel: "حجم السوق بحلول 2030", highlights: ["المركبات ذاتية القيادة", "الطائرات المسيّرة الذاتية", "أتمتة العمليات الروبوتية", "الملاحة الذكية"] },
    { icon: FlaskConical, title: "الذكاء الاصطناعي في أبحاث الرعاية الصحية", desc: "اكتشاف الأدوية وعلم الجينوم والطب الدقيق بالتعلم الآلي. يُسرّع الذكاء الاصطناعي مخططات الأبحاث من سنوات إلى أشهر، مما يجعل العلاجات أكثر استهدافاً وفعالية من أي وقت مضى.", stat: "10x", statLabel: "اكتشاف الأدوية أسرع", highlights: ["اكتشاف الأدوية", "تحليل الجينوم", "الطب الدقيق", "تحسين التجارب السريرية"] },
    { icon: Building2, title: "اعتماد الذكاء الاصطناعي في المؤسسات", desc: "الشركات تدمج الذكاء الاصطناعي في العمليات للأتمتة وصنع القرار. من سير العمل الذكية إلى الرؤى التنبؤية، تستثمر المؤسسات الذكاء الاصطناعي لاكتساب مزايا تنافسية.", stat: "72%", statLabel: "شركات تستخدم الذكاء الاصطناعي", highlights: ["أتمتة العمليات", "ذكاء القرار", "تجربة العملاء", "الكفاءة التشغيلية"] },
    { icon: Cloud, title: "تكامل الذكاء الاصطناعي مع السحابة", desc: "أنظمة ذكاء اصطناعي قابلة للتوسع مدعومة بالبنية التحتية السحابية. تُمكّن منصات الذكاء الاصطناعي السحابية الأصلية المنظمات من تدريب ونشر وتوسيع نماذج تعلم الآلة دون استثمار ضخم مسبق في الأجهزة.", stat: "3x", statLabel: "نمو الذكاء الاصطناعي السحابي", highlights: ["خطوط MLOps", "الاستدلال بدون خادم", "نشر الذكاء الاصطناعي الطرفي", "نماذج التوسع التلقائي"] },
  ] : [
    { icon: Sparkles, title: "Generative AI Platforms", desc: "Tools that create text, images, code, and videos using large language models. Generative AI is reshaping creative workflows, software development, and content production at an unprecedented scale.", stat: "85%", statLabel: "Enterprise Adoption by 2026", highlights: ["Text & Image Generation", "Code Assistants", "Video Synthesis", "Multimodal Models"] },
    { icon: Satellite, title: "Autonomous Systems", desc: "Self-driving vehicles, drones, and robotics powered by AI. Autonomous systems are enabling safer transportation, efficient logistics, and next-generation manufacturing with minimal human oversight.", stat: "$500B+", statLabel: "Market Size by 2030", highlights: ["Self-Driving Vehicles", "Autonomous Drones", "Robotic Process Automation", "Smart Navigation"] },
    { icon: FlaskConical, title: "AI in Healthcare Research", desc: "Drug discovery, genomics, and precision medicine powered by machine learning. AI is accelerating research timelines from years to months, making treatments more targeted and effective than ever before.", stat: "10x", statLabel: "Faster Drug Discovery", highlights: ["Drug Discovery", "Genomic Analysis", "Precision Medicine", "Clinical Trial Optimization"] },
    { icon: Building2, title: "Enterprise AI Adoption", desc: "Businesses integrating AI into operations for automation and decision-making. From intelligent workflows to predictive insights, enterprises are leveraging AI to gain competitive advantages.", stat: "72%", statLabel: "Companies Using AI", highlights: ["Process Automation", "Decision Intelligence", "Customer Experience", "Operational Efficiency"] },
    { icon: Cloud, title: "AI + Cloud Integration", desc: "Scalable AI systems powered by cloud infrastructure. Cloud-native AI platforms enable organizations to train, deploy, and scale machine learning models without massive upfront hardware investment.", stat: "3x", statLabel: "Cloud AI Growth", highlights: ["MLOps Pipelines", "Serverless Inference", "Edge AI Deployment", "Auto-scaling Models"] },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const index = Math.min(Math.floor(v * trends.length), trends.length - 1);
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress, trends.length]);

  const active = trends[activeIndex];

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${trends.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#030318]" />
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover opacity-15">
            <source src={`${import.meta.env.BASE_URL}videos/ai-global.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030318]/90 via-[#030318]/70 to-[#030318]/90" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,107,53,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
                  <p className="text-primary/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                    {isAr ? "الاتجاهات العالمية للذكاء الاصطناعي" : "Global AI Trends"}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
                    {isAr ? <>ابتكارات الذكاء الاصطناعي{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">التي تشكّل العالم</span></> : <>AI Innovations{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Shaping the World</span></>}
                  </h2>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,53,0.25)]">
                        <active.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-white">{active.title}</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl font-black bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{active.stat}</span>
                          <span className="text-xs text-white/30 uppercase tracking-wider">{active.statLabel}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/55 leading-relaxed text-base mb-10 max-w-xl">{active.desc}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {active.highlights.map((h, j) => (
                        <motion.div key={j} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: j * 0.08 }} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-white/60 text-sm">{h}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center">
                <div className="w-full max-w-[280px] space-y-3">
                  {trends.map((trend, i) => (
                    <div key={i} className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-500 ${i === activeIndex ? "bg-white/[0.06] border border-primary/30 shadow-[0_0_25px_rgba(255,107,53,0.1)]" : "bg-white/[0.02] border border-white/5 opacity-35 hover:opacity-60"}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center flex-shrink-0 transition-all ${i === activeIndex ? "shadow-[0_0_15px_rgba(255,107,53,0.3)]" : "opacity-50"}`}>
                        <trend.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold truncate ${i === activeIndex ? "text-white" : "text-white/50"}`}>{trend.title}</p>
                        <p className={`text-xs font-bold ${i === activeIndex ? "text-primary" : "text-white/20"}`}>{trend.stat}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-3 px-5">
                    <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-primary to-amber-500 rounded-full" animate={{ width: `${((activeIndex + 1) / trends.length) * 100}%` }} transition={{ duration: 0.4 }} />
                    </div>
                    <p className="text-[10px] text-white/20 mt-2 text-right font-mono">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(trends.length).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-20">
          {trends.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-400 ${i === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const stacks = isAr ? [
    { category: "اللغات", techs: ["Python", "JavaScript"], icon: Code2, num: "01" },
    { category: "الأطر والمكتبات", techs: ["TensorFlow", "PyTorch", "Scikit-learn"], icon: Layers, num: "02" },
    { category: "منصات النماذج الكبيرة والذكاء الاصطناعي", techs: ["OpenAI", "Hugging Face", "LangChain"], icon: Brain, num: "03" },
    { category: "البيانات ومعالجتها", techs: ["Pandas", "NumPy", "Apache Spark"], icon: Database, num: "04" },
    { category: "السحابة والبنية التحتية", techs: ["AWS", "Google Cloud AI", "Azure AI"], icon: Cloud, num: "05" },
  ] : [
    { category: "Languages", techs: ["Python", "JavaScript"], icon: Code2, num: "01" },
    { category: "Frameworks & Libraries", techs: ["TensorFlow", "PyTorch", "Scikit-learn"], icon: Layers, num: "02" },
    { category: "LLM & AI Platforms", techs: ["OpenAI", "Hugging Face", "LangChain"], icon: Brain, num: "03" },
    { category: "Data & Processing", techs: ["Pandas", "NumPy", "Apache Spark"], icon: Database, num: "04" },
    { category: "Cloud & Infrastructure", techs: ["AWS", "Google Cloud AI", "Azure AI"], icon: Cloud, num: "05" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover opacity-25">
          <source src={`${import.meta.env.BASE_URL}videos/ai-techstack.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030318]/90 via-[#030318]/75 to-[#030318]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.04),_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="text-primary/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{isAr ? "مجموعتنا التقنية" : "Our Stack"}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>التقنية وراء<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> حلولنا في الذكاء الاصطناعي</span></> : <>Technology Behind{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Our AI Solutions</span></>}
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            {isAr ? "نستخدم أدوات رائدة في الصناعة لبناء أنظمة ذكاء اصطناعي قابلة للتوسع وفعّالة." : "We use industry-leading tools to build scalable and efficient AI systems."}
          </p>
        </motion.div>

        <div className="relative hidden lg:block mb-16">
          <div className="absolute top-[36px] left-[10%] right-[10%] h-px bg-white/5" />
          <motion.div style={{ width: lineWidth }} className="absolute top-[36px] left-[10%] h-px bg-gradient-to-r from-primary via-amber-500 to-primary origin-left shadow-[0_0_6px_rgba(255,107,53,0.4)]" />
          <div className="flex justify-between relative">
            {stacks.map((stack, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex flex-col items-center text-center" style={{ width: `${100 / stacks.length}%` }}>
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-amber-500/10 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(255,107,53,0.15)] transition-all duration-500 relative z-10">
                  <stack.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-white text-sm mb-4 group-hover:text-primary transition-colors">{stack.category}</h3>
                <div className="flex flex-col items-center gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-medium text-white/50 group-hover:border-primary/15 group-hover:text-white/70 transition-all duration-300 w-full max-w-[140px]">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {stacks.map((stack, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="group p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.15)] transition-all">
                  <stack.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-white/20 font-mono">{stack.num}</p>
                  <h3 className="font-bold text-white">{stack.category}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-16">
                {stack.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-primary/5 text-xs font-medium text-primary/60 border border-primary/10">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentProcess() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const steps = isAr ? [
    { num: "01", title: "تحديد المشكلة", desc: "فهم تحدياتك التجارية وتحديد فرص الذكاء الاصطناعي." },
    { num: "02", title: "جمع البيانات وإعدادها", desc: "جمع البيانات وتنظيفها لتدريب النماذج." },
    { num: "03", title: "تطوير النماذج", desc: "بناء وتدريب نماذج تعلم الآلة." },
    { num: "04", title: "الاختبار والتحقق", desc: "ضمان الدقة والموثوقية والأداء." },
    { num: "05", title: "النشر", desc: "دمج نماذج الذكاء الاصطناعي في أنظمتك." },
    { num: "06", title: "التعلم المستمر", desc: "تحسين النماذج بالبيانات الجديدة بمرور الوقت." },
  ] : [
    { num: "01", title: "Problem Definition", desc: "Understanding your business challenge and identifying AI opportunities." },
    { num: "02", title: "Data Collection & Preparation", desc: "Gathering and cleaning data for training models." },
    { num: "03", title: "Model Development", desc: "Building and training machine learning models." },
    { num: "04", title: "Testing & Validation", desc: "Ensuring accuracy, reliability, and performance." },
    { num: "05", title: "Deployment", desc: "Integrating AI models into your systems." },
    { num: "06", title: "Continuous Learning", desc: "Improving models with new data over time." },
  ];

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover opacity-10">
          <source src={`${import.meta.env.BASE_URL}videos/ai-pipeline.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030318]/95 via-[#030318]/90 to-[#030318]" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,107,53,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>نهجنا في<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> تطوير الذكاء الاصطناعي</span></> : <>Our AI Development{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Approach</span></>}
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5" />
          <motion.div style={{ height: lineHeight }} className="absolute left-8 top-0 w-px bg-gradient-to-b from-primary via-amber-500 to-primary origin-top shadow-[0_0_8px_rgba(255,107,53,0.4)]" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative flex gap-8 items-start group">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-amber-500 group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(255,107,53,0.3)] transition-all duration-500">
                  <span className="text-white/50 font-extrabold text-sm group-hover:text-white transition-colors">{step.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { lang, isRTL } = useLanguage();
  const isAr = lang === "ar";
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#030318]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.08),_transparent_60%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/8 via-amber-500/6 to-primary/8 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,107,53,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {isAr ? <>هل أنت مستعد للبناء بـ<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent"> الذكاء الاصطناعي؟</span></> : <>Ready to Build with{" "}<span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Artificial Intelligence?</span></>}
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            {isAr ? "دعنا نصمّم وننشر أنظمة ذكية تُحوّل أعمالك وتفتح إمكانيات جديدة." : "Let's design and deploy intelligent systems that transform your business and unlock new possibilities."}
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 shadow-[0_0_30px_rgba(255,107,53,0.3)]">
                {isAr ? "ابدأ مشروع الذكاء الاصطناعي" : "Start Your AI Project"}
                <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ArtificialIntelligence() {
  useSEO({
    title: "AI Solutions - Custom Artificial Intelligence Development | Takarub",
    description: "AI and machine learning solutions for Saudi Arabia and Arab region. Intelligent automation, NLP, computer vision, and predictive analytics.",
    canonicalUrl: "https://takarub.com/services/ai",
    keywords: ["AI solutions", "machine learning", "artificial intelligence", "NLP", "computer vision", "automation", "Arab region"],
  });

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#030318] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <WhatIsAI />
        <ServiceOverviewPanel />
        <AIServicesOverview />
        <UseCasesSection />
        <IndustriesSection />
        <GlobalTrendsSection />
        <TechStackSection />
        <DevelopmentProcess />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
