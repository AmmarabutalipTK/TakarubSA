import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceOverviewPanel } from "@/components/shared/ServiceOverviewPanel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Wallet, Shield, BarChart3, Code2, Layers, Globe, Database, Cloud, Sparkles, Rocket, Lock, Eye, ShieldCheck, Server, Coins, FileCode, Network, Hexagon, Send, ArrowLeftRight, CreditCard, QrCode, Fingerprint, Key, Smartphone, Bell, Activity, Search, Plug, MonitorSmartphone } from "lucide-react";
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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
            preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={`${import.meta.env.BASE_URL}videos/crypto-hero.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#06060c]" />
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
          Build Secure Crypto Wallets{" "}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-400 bg-clip-text text-transparent">
            for the Next Generation of Finance
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]"
        >
          We design and develop centralized and decentralized crypto wallets with seamless transactions, advanced security, and powerful integrations.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-white/60 max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          From self-custodial Web3 wallets to enterprise-grade custodial solutions, we help you deliver secure, scalable, and user-friendly digital asset experiences.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
            <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90">
              Build Your Wallet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#06060c] to-transparent z-10" />
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="relative py-24 bg-[#06060c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,107,53,0.04),_transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              End-to-End Crypto{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Wallet Development
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              We provide complete wallet development services — from architecture design to third-party integrations — ensuring your product is secure, compliant, and ready for scale.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "100+", label: "Wallets Built" },
                { num: "50M+", label: "Transactions" },
                { num: "99.9%", label: "Uptime" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/5 text-center">
                  <p className="text-xl font-extrabold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{stat.num}</p>
                  <p className="text-white/30 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-amber-500/15 rounded-3xl blur-2xl" />
              <img loading="lazy"
                src={`${import.meta.env.BASE_URL}images/crypto-wallet-overview.webp`}
                alt="Crypto Wallet Development"
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
      icon: Shield,
      title: "Custodial Wallet Development",
      desc: "We build centralized wallets where user assets are securely managed with institutional-grade infrastructure.",
      image: "crypto-wallet-custodial.webp",
    },
    {
      icon: Key,
      title: "Non-Custodial Wallet Development",
      desc: "We create decentralized wallets that give users full control over their private keys and assets.",
      image: "crypto-wallet-noncustodial.webp",
    },
    {
      icon: Coins,
      title: "Multi-Currency Wallets",
      desc: "Support for multiple cryptocurrencies, tokens, and blockchain networks in a single wallet.",
      image: "crypto-wallet-multicurrency.webp",
    },
    {
      icon: Plug,
      title: "Wallet Integration Services",
      desc: "We integrate wallets with exchanges, DeFi protocols, and third-party services.",
      image: "crypto-wallet-overview.webp",
    },
    {
      icon: ShieldCheck,
      title: "Security & Audit Services",
      desc: "We implement encryption, multi-signature wallets, and continuous monitoring for maximum security.",
      image: "crypto-wallet-security.webp",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#06060c] via-[#0a0a16] to-[#06060c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            From custodial enterprise wallets to fully decentralized Web3 solutions, we cover the complete spectrum.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-500/5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-extrabold text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg">{service.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
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

function FeaturesParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    { icon: Send, title: "Send & Receive Crypto", desc: "Fast and secure transactions across multiple blockchain networks." },
    { icon: ArrowLeftRight, title: "Token Swap Integration", desc: "Enable seamless swaps directly within the wallet." },
    { icon: CreditCard, title: "Buy & Sell Crypto", desc: "On-ramp and off-ramp integrations for fiat-to-crypto transactions." },
    { icon: BarChart3, title: "Portfolio Tracking", desc: "Real-time balance updates and analytics." },
    { icon: QrCode, title: "QR Code Payments", desc: "Simplified transactions with QR scanning." },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/crypto-wallet-features-bg.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060c]/60 via-transparent to-[#06060c]/60" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Modern Crypto Wallets
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-7 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{feat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {features.slice(3).map((feat, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i + 3) * 0.15 }}
                className="group p-7 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{feat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const categories = [
    {
      title: "Buy / Sell / On-Ramp",
      items: ["MoonPay", "Ramp Network", "Transak"],
      icon: CreditCard,
    },
    {
      title: "Swap & DeFi",
      items: ["Uniswap", "1inch", "PancakeSwap"],
      icon: ArrowLeftRight,
    },
    {
      title: "KYC & Compliance",
      items: ["Onfido", "Sumsub", "Trulioo"],
      icon: Search,
    },
    {
      title: "Notifications & Monitoring",
      items: ["Firebase", "Sentry"],
      icon: Bell,
    },
    {
      title: "Blockchain Infrastructure",
      items: ["Alchemy", "Infura", "QuickNode"],
      icon: Server,
    },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#06060c] via-[#0a0812] to-[#06060c]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Seamless Integrations for a{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Complete Ecosystem
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We integrate trusted third-party services to enhance your wallet's functionality and user experience.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((cat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/50 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {categories.slice(3).map((cat, i) => (
              <motion.div
                key={i + 3}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
                className="group p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-white/50 border border-white/5">
                      {item}
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

function TechStackSection() {
  const stacks = [
    { category: "Frontend", techs: ["React", "React Native", "Next.js"], icon: MonitorSmartphone },
    { category: "Backend", techs: ["Node.js", "Python"], icon: Server },
    { category: "Blockchain Libraries", techs: ["Web3.js", "Ethers.js"], icon: Code2 },
    { category: "Infrastructure & APIs", techs: ["Alchemy", "Infura", "QuickNode"], icon: Cloud },
    { category: "Monitoring & Analytics", techs: ["Firebase", "Sentry"], icon: Activity },
    { category: "Security", techs: ["Multi-signature", "E2E Encryption", "Biometric Auth"], icon: Lock },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[#0a0812]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.05),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Technology Behind{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Secure Wallet Development
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
    </section>
  );
}

function SecuritySection() {
  const points = [
    { icon: Key, title: "Private Key Protection", desc: "Secure storage and encryption for user keys." },
    { icon: Shield, title: "Multi-Signature Authentication", desc: "Additional layer of security for transactions." },
    { icon: Fingerprint, title: "Biometric Authentication", desc: "Fingerprint and face recognition support." },
    { icon: ShieldCheck, title: "Regulatory Compliance", desc: "KYC/AML integration for global compliance." },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0812] to-[#06060c]" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Security Built into{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Every Layer
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              We implement advanced security measures to protect user assets and ensure regulatory compliance.
            </p>
            <div className="space-y-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-amber-500 transition-all duration-300">
                    <point.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{point.title}</h3>
                    <p className="text-white/30 text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-purple-500/15 rounded-3xl blur-2xl" />
              <img loading="lazy"
                src={`${import.meta.env.BASE_URL}images/crypto-wallet-security.webp`}
                alt="Wallet Security"
                className="relative w-full h-auto rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MultiChainSection() {
  const chains = [
    { name: "Ethereum", desc: "The leading smart contract platform." },
    { name: "Binance Smart Chain", desc: "Low-fee, high-speed transactions." },
    { name: "Polygon", desc: "Layer-2 scaling with Ethereum security." },
    { name: "Solana", desc: "Ultra-fast transaction processing." },
    { name: "Avalanche", desc: "Sub-second finality and custom subnets." },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[#06060c]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-primary/10 rounded-3xl blur-2xl" />
              <img loading="lazy"
                src={`${import.meta.env.BASE_URL}images/crypto-wallet-multichain.webp`}
                alt="Multi-Chain Support"
                className="relative w-full h-auto rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Multi-Chain{" "}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Wallet Support
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              We build wallets that support multiple blockchain networks, enabling users to manage assets across ecosystems.
            </p>
            <div className="space-y-4">
              {chains.map((chain, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Hexagon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{chain.name}</h3>
                    <p className="text-white/30 text-xs">{chain.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white/20 text-sm mt-6">
              Multi-chain compatibility ensures flexibility and wider adoption.
            </p>
          </motion.div>
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
    { num: "01", title: "Requirement Analysis", desc: "Understanding your business model and wallet type." },
    { num: "02", title: "Architecture Design", desc: "Designing secure wallet infrastructure." },
    { num: "03", title: "UI/UX Design", desc: "Creating intuitive wallet interfaces." },
    { num: "04", title: "Development", desc: "Building frontend, backend, and blockchain integrations." },
    { num: "05", title: "Testing & Security Audits", desc: "Ensuring performance and security." },
    { num: "06", title: "Deployment & Launch", desc: "Publishing and scaling the wallet." },
    { num: "07", title: "Ongoing Support", desc: "Continuous monitoring and updates." },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060c] via-[#08080f] to-[#06060c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.05),_transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Development{" "}
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
      <div className="absolute inset-0 bg-[#06060c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.1),_transparent_60%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/8 via-amber-500/6 to-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              Crypto Wallet?
            </span>
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto">
            Let's create a secure, scalable wallet solution that your users will trust and love.
          </p>
          <div className="flex items-center justify-center">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button size="lg" className="text-lg gap-2 group bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90">
                Build Your Wallet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CryptoWallet() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#06060c] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesOverview />
        <ServiceOverviewPanel />
        <ServiceBlocks />
        <FeaturesParallax />
        <IntegrationsSection />
        <TechStackSection />
        <SecuritySection />
        <MultiChainSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
