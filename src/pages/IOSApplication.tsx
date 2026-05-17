import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Apple, Shield, Zap, BarChart3, Code2, Layers, Globe, Cpu, Database, Cloud, Blocks, Sparkles, Rocket, HeartPulse, Landmark, GraduationCap, ShoppingCart, Truck, Plane, Smartphone, Palette, TestTube, Upload, Brain, Wifi, Glasses, Server, Link2, MessageSquareQuote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

function useParallax(speed: number = 0.3) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return { ref, y };
}

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} className="relative bg-black text-white pt-32 pb-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
            preload="metadata"
          className="w-full h-full object-cover opacity-30 scale-110"
        >
          <source src={`${import.meta.env.BASE_URL}videos/ios-hero.mp4`} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.08),_transparent_50%)]" />
      <motion.div style={{ y: textY, opacity: heroOpacity }} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8"
        >
          Build iPhone Apps That{" "}
          <br className="hidden md:block" />
          <span className="text-primary">People Love to Use</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We design and develop high-performance iOS applications that combine elegant design with powerful functionality — built to scale from startup to enterprise.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm font-semibold text-primary uppercase tracking-wider mb-10"
        >
          From concept to App Store launch, tailored for the Apple ecosystem.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            End-to-End iOS{" "}
            <span className="text-primary">Development Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a full spectrum of iOS app development services tailored to your business goals — from early-stage strategy to long-term product evolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceBlocks() {
  const services = [
    {
      icon: Sparkles,
      title: "Product Strategy & Consulting",
      desc: "We help you validate ideas, define features, and choose the right technical approach to ensure your app succeeds from day one.",
    },
    {
      icon: Palette,
      title: "UI/UX Design for iOS",
      desc: "Our designers craft intuitive, visually refined interfaces aligned with Apple's design standards for seamless user experiences.",
    },
    {
      icon: Code2,
      title: "Custom iOS App Development",
      desc: "We build robust, scalable apps using modern frameworks, ensuring performance, security, and long-term maintainability.",
    },
    {
      icon: TestTube,
      title: "App Testing & Optimization",
      desc: "We rigorously test your app across devices to ensure flawless performance, fast load times, and zero critical bugs.",
    },
    {
      icon: Upload,
      title: "App Store Launch & Support",
      desc: "From submission to post-launch updates, we manage the entire lifecycle so your app stays competitive and relevant.",
    },
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
                <img loading="lazy"
                  src={`${import.meta.env.BASE_URL}images/ios-services.webp`}
                  alt="iOS Development Services"
                  className="relative w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          <div>
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
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
  const industries = [
    { icon: HeartPulse, name: "Healthcare & Wellness" },
    { icon: Landmark, name: "Fintech & Banking" },
    { icon: ShoppingCart, name: "E-commerce & Retail" },
    { icon: Truck, name: "Logistics & Transportation" },
    { icon: GraduationCap, name: "Education & E-learning" },
    { icon: Plane, name: "Travel & Hospitality" },
  ];

  const useCases = [
    "Real-time tracking and analytics",
    "Secure payment integrations",
    "Video streaming & media apps",
    "AI-powered recommendations",
    "Location-based services",
  ];

  const { ref: imgRef, y: imgY } = useParallax(0.25);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                Solutions Built for{" "}
                <span className="text-primary">Diverse Industries</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We create iOS applications tailored to the unique demands of different industries, combining domain knowledge with cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                >
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
                <img loading="lazy"
                  src={`${import.meta.env.BASE_URL}images/ios-industries.webp`}
                  alt="Industry Solutions"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div {...fadeUp} className="bg-black/5 rounded-2xl p-8">
          <h3 className="font-bold text-foreground text-lg mb-4 text-center">Use Cases We Deliver</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((uc, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white border border-border/60 text-sm font-medium text-foreground">
                {uc}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EmergingTechSection() {
  const techs = [
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
                Powered by{" "}
                <span className="text-primary">Next-Generation Technologies</span>
              </h2>
              <p className="text-lg text-white/50">
                We integrate advanced technologies into iOS apps to create smarter, more engaging, and future-ready digital experiences.
              </p>
            </motion.div>

            <div className="space-y-4">
              {techs.map((tech, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300"
                >
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
                <img loading="lazy"
                  src={`${import.meta.env.BASE_URL}images/ios-emerging-tech.webp`}
                  alt="Emerging Technologies"
                  className="relative w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const stacks = [
    { category: "Mobile Development", techs: ["Swift", "Objective-C"], icon: Smartphone },
    { category: "Frontend Technologies", techs: ["React", "JavaScript"], icon: Globe },
    { category: "Backend Development", techs: ["Node.js", "Python"], icon: Server },
    { category: "Database", techs: ["PostgreSQL", "MongoDB"], icon: Database },
    { category: "Cloud & DevOps", techs: ["AWS", "Google Cloud", "Docker"], icon: Cloud },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Technology That{" "}
            <span className="text-primary">Powers Our Apps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use a modern, reliable tech stack to ensure your app is fast, secure, and built for growth.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.slice(0, 3).map((stack, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-border/60 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black mx-auto flex items-center justify-center mb-5">
                  <stack.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-black/5 text-sm font-medium text-foreground whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {stacks.slice(3).map((stack, i) => (
              <motion.div
                key={i + 3}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                className="p-7 rounded-2xl border border-border/60 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black mx-auto flex items-center justify-center mb-5">
                  <stack.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-black/5 text-sm font-medium text-foreground whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
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
  const testimonials = [
    {
      quote: "They understood our vision immediately and delivered an app that exceeded our expectations in both performance and design.",
      name: "Ahmed Al-Mansour",
      role: "CEO, TechVentures",
    },
    {
      quote: "The team was highly responsive and technically strong. Our app launched smoothly and scaled without issues.",
      name: "Sara Al-Khalidi",
      role: "CTO, FinFlow",
    },
    {
      quote: "Their attention to detail and user experience made a huge difference in how our customers engage with the app.",
      name: "Omar Rasheed",
      role: "Founder, ShopEase",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            What Our Clients{" "}
            <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <MessageSquareQuote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-white/70 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Ready to Build Your{" "}
            <span className="text-primary">iOS App?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's bring your idea to life on the Apple ecosystem with a team that delivers exceptional results.
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
