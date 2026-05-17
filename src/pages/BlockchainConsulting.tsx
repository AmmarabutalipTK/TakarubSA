import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Blocks, Shield, BarChart3, Code2, Layers, Globe, Cpu, Database, Cloud, Sparkles, Rocket, HeartPulse, Landmark, ShoppingCart, Truck, Home, Zap, Lock, Eye, FileCheck, ShieldCheck, Building2, Server, Coins, FileCode, Network, Map, TestTube, Settings, Gamepad2, Box, Glasses, CircleDot, Hexagon, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/bc-consulting-hero.webp`}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#08080f]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.06),_transparent_70%)]" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24"
      >
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        >
          Strategic Blockchain Consulting{" "}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">
            for Future-Ready Businesses
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]"
        >
          We help organizations identify, design, and implement blockchain solutions that drive transparency, efficiency, and long-term value.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-white/60 max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          From early-stage ideation to full-scale implementation, our consultants guide you through every step of your blockchain journey with clarity and precision.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080f] to-transparent z-10" />
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="relative py-24 bg-[#08080f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,107,53,0.05),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Comprehensive Blockchain{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Consulting Services
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed">
              We offer a full suite of consulting services to help you explore, validate, and implement blockchain solutions tailored to your business needs.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-purple-500/15 rounded-3xl blur-2xl" />
              <img loading="lazy"
                src={`${import.meta.env.BASE_URL}images/bc-consulting-overview.webp`}
                alt="Blockchain Consulting"
                className="relative w-full h-auto rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlocks() {
  const services = [
    {
      icon: Map,
      title: "Blockchain Strategy & Roadmapping",
      desc: "We analyze your business model and define a clear roadmap for adopting blockchain effectively.",
      image: "bc-consulting-strategy.webp",
      gradient: "from-primary/20 to-amber-500/10",
    },
    {
      icon: TestTube,
      title: "Proof of Concept (PoC) Development",
      desc: "We build prototypes to validate feasibility before full-scale development.",
      image: "bc-consulting-poc.webp",
      gradient: "from-purple-500/15 to-primary/10",
    },
    {
      icon: Settings,
      title: "Platform Selection Guidance",
      desc: "We help you choose the right blockchain platform based on scalability, cost, and use case.",
      image: "bc-consulting-platform.webp",
      gradient: "from-cyan-500/10 to-primary/15",
    },
    {
      icon: Layers,
      title: "Blockchain Implementation Consulting",
      desc: "We guide you through deployment, integration, and optimization of blockchain systems.",
      image: "bc-consulting-implementation.webp",
      gradient: "from-primary/15 to-purple-500/10",
    },
    {
      icon: FileCode,
      title: "Smart Contract Advisory",
      desc: "We assist in designing secure, efficient smart contracts aligned with your business logic.",
      image: "bc-consulting-poc.webp",
      gradient: "from-amber-500/10 to-primary/15",
    },
    {
      icon: ShieldCheck,
      title: "Security & Audit Consulting",
      desc: "We identify risks and ensure your blockchain ecosystem is secure and compliant.",
      image: "bc-consulting-security.webp",
      gradient: "from-red-500/10 to-primary/10",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#08080f] via-[#0c0c18] to-[#08080f]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Consulting{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            From strategy to security, we cover every aspect of blockchain adoption for your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5 flex-shrink-0">
                  <img loading="lazy"
                    src={`${import.meta.env.BASE_URL}images/${service.image}`}
                    alt={service.title}
                    className="w-full h-48 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{service.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  const useCases = [
    { icon: Coins, title: "Decentralized Finance (DeFi)", desc: "Secure platforms for lending, trading, and asset management without intermediaries." },
    { icon: Gem, title: "NFT Ecosystems", desc: "Marketplaces and platforms for managing digital ownership and assets." },
    { icon: Globe, title: "Web3 Platforms", desc: "Decentralized applications that give users control over data and identity." },
    { icon: Glasses, title: "Metaverse Experiences", desc: "Blockchain-powered virtual environments with digital economies." },
    { icon: Gamepad2, title: "Decentralized Gaming", desc: "Gaming platforms with ownership-driven economies and token rewards." },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/bc-consulting-usecases-bg.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080f]/80 via-transparent to-[#08080f]/80" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Real-World Blockchain{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Applications We Enable
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.slice(0, 3).map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group p-7 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <uc.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{uc.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {useCases.slice(3).map((uc, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i + 3) * 0.12 }}
                className="group p-7 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <uc.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{uc.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { icon: Landmark, name: "Finance & Banking", desc: "DeFi, payments, and digital asset management" },
    { icon: HeartPulse, name: "Healthcare", desc: "Patient data security and pharmaceutical tracking" },
    { icon: Truck, name: "Supply Chain & Logistics", desc: "Provenance, traceability, and automation" },
    { icon: Home, name: "Real Estate", desc: "Tokenized ownership and smart lease agreements" },
    { icon: Building2, name: "Government & Public Sector", desc: "Identity management and transparent governance" },
    { icon: ShoppingCart, name: "Retail & E-commerce", desc: "Loyalty programs and counterfeit prevention" },
    { icon: Zap, name: "Energy & Utilities", desc: "Decentralized energy trading and carbon credits" },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#08080f] via-[#0a0a14] to-[#0f0812]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Blockchain Consulting{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We help organizations across industries unlock the value of blockchain through tailored strategies and solutions.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.slice(0, 4).map((ind, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-amber-500 transition-all duration-300">
                  <ind.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-1">{ind.name}</h3>
                <p className="text-white/30 text-xs">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
            {industries.slice(4).map((ind, i) => (
              <motion.div
                key={i + 4}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i + 4) * 0.08 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-amber-500 transition-all duration-300">
                  <ind.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-1">{ind.name}</h3>
                <p className="text-white/30 text-xs">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  const platforms = [
    { name: "Ethereum", desc: "The most established smart contract platform with the largest ecosystem." },
    { name: "Polygon", desc: "Layer-2 scaling with low fees and fast transaction finality." },
    { name: "Solana", desc: "High-throughput blockchain for performance-intensive applications." },
    { name: "Hyperledger", desc: "Enterprise-grade permissioned blockchain for private networks." },
    { name: "Avalanche", desc: "Sub-second finality with custom subnet architecture." },
    { name: "Polkadot", desc: "Cross-chain interoperability with parachain architecture." },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[#0f0812]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.06),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Blockchain Platforms{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              We Work With
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We provide consulting across a wide range of blockchain networks, helping you choose and implement the right platform for your use case.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/5 rounded-2xl group-hover:border-primary/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-500/10 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-amber-500 transition-all duration-300">
                  <Hexagon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white text-xl mb-2">{platform.name}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{platform.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="text-white/25 text-sm text-center mt-10">
          Each platform is evaluated based on scalability, transaction speed, security, and ecosystem support.
        </motion.p>
      </div>
    </section>
  );
}

function TechStackSection() {
  const stacks = [
    { category: "Smart Contracts", techs: ["Solidity", "Rust"], icon: FileCode },
    { category: "Backend", techs: ["Node.js", "Python"], icon: Server },
    { category: "Frontend", techs: ["React", "Next.js"], icon: Globe },
    { category: "Infrastructure", techs: ["AWS", "Docker", "Kubernetes"], icon: Cloud },
    { category: "Blockchain Tools", techs: ["Web3.js", "Ethers.js", "Hardhat"], icon: Code2 },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0812] to-[#0a0a14]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Technology That Supports Your{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Blockchain Strategy
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We use modern tools and frameworks to design and implement secure, scalable blockchain ecosystems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.slice(0, 3).map((stack, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 text-center hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mx-auto flex items-center justify-center mb-5">
                  <stack.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-white mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/50 border border-white/5">
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
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 text-center hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mx-auto flex items-center justify-center mb-5">
                  <stack.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-white mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/50 border border-white/5">
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

function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const steps = [
    { num: "01", title: "Discovery & Business Analysis", desc: "Understanding your goals, challenges, and opportunities." },
    { num: "02", title: "Feasibility Assessment", desc: "Evaluating whether blockchain is the right solution." },
    { num: "03", title: "Platform & Architecture Design", desc: "Selecting the best technology stack and system structure." },
    { num: "04", title: "PoC Development", desc: "Building a working prototype to validate ideas." },
    { num: "05", title: "Implementation Strategy", desc: "Planning full-scale deployment and integration." },
    { num: "06", title: "Testing & Optimization", desc: "Ensuring performance, security, and scalability." },
    { num: "07", title: "Ongoing Support", desc: "Continuous monitoring and improvements post-launch." },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-[#08080f] to-[#08080f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,107,53,0.06),_transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Consulting{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 top-0 w-px bg-gradient-to-b from-primary via-primary to-amber-500 origin-top"
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-8 items-start group"
              >
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

function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.1),_transparent_60%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/10 via-amber-500/8 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Explore{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Blockchain?
            </span>
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
            Let our blockchain consultants help you identify the right strategy and build a solution that transforms your business.
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90">
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function BlockchainConsulting() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#08080f] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesOverview />
        <ServiceOverviewPanel />
        <ServiceBlocks />
        <UseCasesParallax />
        <IndustriesSection />
        <PlatformsSection />
        <TechStackSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
