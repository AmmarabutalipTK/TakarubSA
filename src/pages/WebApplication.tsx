import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, BarChart3, Code2, Layers, Cpu, Database, Cloud, Sparkles, Rocket, HeartPulse, Landmark, GraduationCap, ShoppingCart, Truck, Home, Palette, TestTube, Upload, Brain, Server, MessageSquareQuote, Star, Settings, Zap, Users, CheckCircle, Lock, Eye, FileCheck, ShieldCheck, Building2, Plane, Monitor, Smartphone, RefreshCw, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

function HeroSection() {
  return (
    <section className="relative bg-black text-white pt-32 pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.08),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8"
        >
          Build Web Applications{" "}
          <br className="hidden md:block" />
          <span className="text-primary">That Power Your Business</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We design and develop fast, secure, and scalable web applications that help businesses streamline operations and deliver exceptional user experiences.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-white/40 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Whether you're launching a new platform or modernizing an existing system, we build web solutions that are reliable, flexible, and built for long-term growth.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <img loading="lazy"
            src={`${import.meta.env.BASE_URL}images/webapp-hero.webp`}
            alt="Web Application Development"
            className="w-full h-auto rounded-t-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Comprehensive Web Application{" "}
              <span className="text-primary">Development Services</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer end-to-end web development services — from strategy and design to deployment and continuous improvement — ensuring your product performs at every stage.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <img loading="lazy"
              src={`${import.meta.env.BASE_URL}images/webapp-services-overview.webp`}
              alt="Responsive Web Applications"
              className="w-full h-auto rounded-2xl border border-border/60 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlocks() {
  const services = [
    {
      icon: Sparkles,
      title: "Web App Consulting",
      desc: "We help you define the right architecture, features, and roadmap to turn your idea into a scalable and efficient web application.",
      image: "webapp-consulting.webp",
    },
    {
      icon: Code2,
      title: "Custom Web Application Development",
      desc: "We build tailored web applications designed around your business processes, ensuring flexibility, performance, and scalability.",
      image: "webapp-custom-dev.webp",
    },
    {
      icon: Smartphone,
      title: "Progressive Web App (PWA) Development",
      desc: "We create fast, reliable PWAs that deliver app-like experiences directly through the browser, even in low-network conditions.",
      image: "webapp-pwa.webp",
    },
    {
      icon: RefreshCw,
      title: "Web App Modernization",
      desc: "We upgrade legacy systems with modern technologies to improve speed, usability, and long-term maintainability.",
      image: "webapp-modernization.webp",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      desc: "We ensure your application stays secure, updated, and optimized through continuous monitoring and improvements.",
      image: "webapp-maintenance.webp",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-extrabold text-2xl mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <img loading="lazy"
                  src={`${import.meta.env.BASE_URL}images/${service.image}`}
                  alt={service.title}
                  className="w-full h-auto rounded-2xl border border-white/10"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const points = [
    { icon: Rocket, title: "Business-Focused Approach", desc: "We align every feature with your business goals to deliver measurable results." },
    { icon: Layers, title: "Scalable Architecture", desc: "Our solutions are designed to handle growth — from hundreds to millions of users." },
    { icon: Eye, title: "Transparent Communication", desc: "You stay informed at every stage with clear timelines and regular updates." },
    { icon: Zap, title: "Performance-Driven Development", desc: "We prioritize speed, responsiveness, and reliability in every application." },
    { icon: Users, title: "Long-Term Partnership", desc: "We support your product beyond launch with continuous improvements and updates." },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Why Businesses Choose Us for{" "}
            <span className="text-primary">Web Development</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.slice(0, 3).map((point, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {points.slice(3).map((point, i) => (
              <motion.div
                key={i + 3}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
                className="group p-7 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WebAppTypesSection() {
  const types = [
    { icon: Building2, title: "Enterprise Applications", desc: "Robust systems that streamline internal operations and improve efficiency." },
    { icon: Cloud, title: "SaaS Platforms", desc: "Scalable cloud-based applications designed for subscription-based models." },
    { icon: Users, title: "Customer Portals", desc: "Secure platforms that allow users to access services, data, and support." },
    { icon: ShoppingCart, title: "E-commerce Platforms", desc: "Feature-rich online stores with seamless checkout and payment integration." },
    { icon: BarChart3, title: "Analytics & Dashboard Applications", desc: "Data-driven platforms that help businesses make informed decisions." },
    { icon: Settings, title: "Workflow & Automation Tools", desc: "Applications that automate repetitive tasks and improve productivity." },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Custom Web Applications{" "}
            <span className="text-primary">We Build</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-5">
                <type.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{type.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const points = [
    { icon: Lock, title: "Data Protection", desc: "Encryption protocols ensure sensitive information remains secure." },
    { icon: ShieldCheck, title: "Secure Architecture", desc: "We design systems that minimize vulnerabilities and prevent unauthorized access." },
    { icon: FileCheck, title: "Compliance Standards", desc: "Our solutions align with industry regulations and best practices." },
    { icon: TestTube, title: "Regular Security Testing", desc: "We perform continuous testing to identify and fix potential risks." },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Built with Security{" "}
              <span className="text-primary">at the Core</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We implement strong security practices at every stage of development to protect your data, users, and infrastructure.
            </p>
            <div className="space-y-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                    <p className="text-muted-foreground text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <img loading="lazy"
              src={`${import.meta.env.BASE_URL}images/webapp-security.webp`}
              alt="Security & Compliance"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { icon: HeartPulse, name: "Healthcare" },
    { icon: Landmark, name: "Finance & Banking" },
    { icon: ShoppingCart, name: "E-commerce & Retail" },
    { icon: Truck, name: "Logistics & Transportation" },
    { icon: GraduationCap, name: "Education & E-learning" },
    { icon: Home, name: "Real Estate" },
    { icon: Plane, name: "Travel & Hospitality" },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Web Solutions Across{" "}
            <span className="text-primary">Industries</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We develop web applications tailored to the unique needs of different industries, helping businesses innovate and grow.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 4).map((ind, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ind.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {industries.slice(4).map((ind, i) => (
              <motion.div
                key={i + 4}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i + 4) * 0.08 }}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ind.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          {...fadeUp}
          className="text-white/30 text-sm text-center mt-10"
        >
          Each solution is customized to match industry workflows, compliance needs, and user expectations.
        </motion.p>
      </div>
    </section>
  );
}

function TechStackSection() {
  const stacks = [
    { category: "Frontend", techs: ["React", "Angular", "Vue.js", "HTML5 / CSS3 / JavaScript"], icon: Monitor },
    { category: "Backend", techs: ["Node.js", "Python", "Java", ".NET"], icon: Server },
    { category: "Database", techs: ["PostgreSQL", "MySQL", "MongoDB"], icon: Database },
    { category: "Cloud & DevOps", techs: ["AWS", "Google Cloud", "Azure", "Docker"], icon: Cloud },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Technology That Drives Our{" "}
            <span className="text-primary">Web Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use modern, proven technologies to build web applications that are secure, scalable, and high-performing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
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
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Build Your{" "}
            <span className="text-primary">Web Application?</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a powerful web platform that drives results and scales with your business.
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
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

export default function WebApplication() {
  useSEO({
    title: "Web Application Development - Custom Solutions | Takarub",
    description: "Full-stack web development services including PWAs, e-commerce, and enterprise solutions for Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/services/web",
    keywords: ["web development", "web applications", "full-stack development", "PWA", "e-commerce", "enterprise solutions"],
  });

  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesOverview />
        <ServiceOverviewPanel />
        <ServiceBlocks />
        <WhyChooseUsSection />
        <WebAppTypesSection />
        <SecuritySection />
        <IndustriesSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
