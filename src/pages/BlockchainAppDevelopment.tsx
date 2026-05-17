import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Blocks, Shield, BarChart3, Code2, Layers, Globe, Cpu, Database, Cloud, Sparkles, Rocket, HeartPulse, Landmark, ShoppingCart, Truck, Home, Zap, Lock, Eye, FileCheck, ShieldCheck, Building2, MessageSquareQuote, Star, Server, Coins, FileCode, Binary, Network, Fingerprint, CircuitBoard } from "lucide-react";
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
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/blockchain-hero.webp`}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.08),_transparent_70%)]" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24"
      >
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        >
          Build Decentralized Apps{" "}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">
            That Redefine Trust
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]"
        >
          We design and develop secure, transparent, and high-performance blockchain applications that transform how businesses operate and transact.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-white/60 max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          From smart contracts to full-scale dApps, we bring your Web3 vision to life with enterprise-grade reliability and innovation.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-primary hover:bg-primary/90">
              Start Your Blockchain Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10" />
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,107,53,0.06),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              End-to-End{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Blockchain Development
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              We deliver comprehensive blockchain solutions — from architecture design and smart contract development to deployment and ongoing support — built for security, scalability, and real-world impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "99.9%", label: "Uptime Guarantee" },
                { num: "15+", label: "Blockchain Networks" },
                { num: "24/7", label: "Support Coverage" },
              ].map((stat, i) => (
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
              <img loading="lazy"
                src={`${import.meta.env.BASE_URL}images/blockchain-dapp.webp`}
                alt="Blockchain dApp"
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
      icon: FileCode,
      title: "Smart Contract Development",
      desc: "We architect and deploy secure, gas-optimized smart contracts across Ethereum, Solana, Polygon, and other leading networks.",
      image: "blockchain-smart-contract.webp",
      gradient: "from-purple-500/10 to-primary/10",
    },
    {
      icon: Globe,
      title: "Decentralized Application (dApp) Development",
      desc: "We build intuitive, full-stack decentralized applications with seamless Web3 wallet integration and on-chain data flows.",
      image: "blockchain-dapp.webp",
      gradient: "from-primary/10 to-amber-500/10",
    },
    {
      icon: Coins,
      title: "Tokenization & DeFi Solutions",
      desc: "From token creation and NFT platforms to DeFi protocols, we build financial infrastructure on the blockchain.",
      image: "blockchain-tokenization.webp",
      gradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      icon: Shield,
      title: "Blockchain Security & Auditing",
      desc: "We perform rigorous smart contract audits, penetration testing, and security reviews to protect your protocol and users.",
      image: "blockchain-security.webp",
      gradient: "from-cyan-500/10 to-primary/10",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            From foundational smart contracts to full-scale decentralized ecosystems, we deliver blockchain solutions that are secure, scalable, and production-ready.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
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
                  <img loading="lazy"
                    src={`${import.meta.env.BASE_URL}images/${service.image}`}
                    alt={service.title}
                    className="relative w-full h-auto rounded-2xl border border-white/10"
                  />
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[20%] -bottom-[20%]"
      >
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/blockchain-parallax-bg.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div {...fadeUp} className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Future is <span className="text-primary">Decentralized</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We help businesses harness the power of blockchain to build transparent, secure, and trustless systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyBlockchainSection() {
  const points = [
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
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Blockchain?
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Blockchain technology offers fundamental advantages that traditional systems cannot match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500"
            >
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const industries = [
    { icon: Landmark, name: "Finance & DeFi", desc: "Decentralized exchanges, lending, and payment systems" },
    { icon: HeartPulse, name: "Healthcare", desc: "Secure patient data sharing and pharmaceutical tracking" },
    { icon: ShoppingCart, name: "Supply Chain", desc: "End-to-end traceability and provenance verification" },
    { icon: Home, name: "Real Estate", desc: "Tokenized property ownership and smart lease agreements" },
    { icon: Truck, name: "Logistics", desc: "Transparent shipping, tracking, and customs automation" },
    { icon: Building2, name: "Government", desc: "Digital identity, voting systems, and public records" },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/blockchain-industries.webp`}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Blockchain Solutions{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We tailor blockchain technology to solve real-world challenges across diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
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
  const stacks = [
    { category: "Blockchain Networks", techs: ["Ethereum", "Solana", "Polygon", "Binance Smart Chain", "Hyperledger"], icon: Network },
    { category: "Smart Contract Languages", techs: ["Solidity", "Rust", "Vyper", "Move"], icon: FileCode },
    { category: "Development Frameworks", techs: ["Hardhat", "Foundry", "Truffle", "Anchor"], icon: Code2 },
    { category: "Frontend & Web3", techs: ["React", "Next.js", "ethers.js", "wagmi", "Web3.js"], icon: Globe },
    { category: "Storage & Infrastructure", techs: ["IPFS", "Arweave", "The Graph", "Chainlink"], icon: Database },
    { category: "DevOps & Monitoring", techs: ["Docker", "AWS", "Alchemy", "Infura"], icon: Server },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We work with cutting-edge blockchain tools and frameworks to deliver production-grade decentralized solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-5">
                <stack.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/60 border border-white/5 whitespace-nowrap">
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

function ProcessSection() {
  const steps = [
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
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-8 items-start"
              >
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
  const testimonials = [
    {
      quote: "They delivered a flawless smart contract system that handles millions in transaction volume with zero security incidents. Their blockchain expertise is unmatched.",
      name: "Omar Al-Rashid",
      role: "CEO, ChainVault Technologies",
    },
    {
      quote: "Our DeFi platform went from concept to mainnet in record time. The team's deep understanding of tokenomics and protocol design was invaluable.",
      name: "Layla Al-Qahtani",
      role: "CTO, DeFi Nexus",
    },
    {
      quote: "They transformed our supply chain with blockchain traceability that our partners and customers trust completely. A game-changing implementation.",
      name: "Ahmad Al-Salem",
      role: "COO, TraceLink MENA",
    },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1a] to-[#0a0a0f]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Innovators
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <MessageSquareQuote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-white/50 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-white/30 text-sm">{t.role}</p>
                </div>
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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.12),_transparent_60%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build on{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Blockchain?
            </span>
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
            Let's architect your decentralized future — from smart contracts to full-scale dApps, we've got you covered.
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90">
                Start Your Blockchain Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
    title: "Blockchain Development - Smart Contracts & DApps | Takarub",
    description: "Blockchain development services including smart contracts, decentralized applications, and Web3 solutions for the Arab region.",
    canonicalUrl: "https://takarub.com/services/blockchain",
    keywords: ["blockchain development", "smart contracts", "DApps", "Web3", "cryptocurrency", "blockchain solutions", "Ethereum"],
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
      <Footer />
    </div>
  );
}
