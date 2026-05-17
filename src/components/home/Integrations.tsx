import { motion } from "framer-motion";
import { MapPin, Users, Cpu, Globe, Shield, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REASON_ICONS = [MapPin, Users, Cpu, Globe, Shield, Rocket];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export function Integrations() {
  const { tr } = useLanguage();
  const reasons = tr.integrations.reasons;
  const stats = tr.integrations.stats;

  return (
    <section className="relative py-24 z-10" style={{ clipPath: "inset(0 0 0 0)" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#07070e] via-[#0a0a16] to-[#0e0812]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <motion.div {...fadeUp}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-amber-500/10 rounded-3xl blur-2xl" />
                <img loading="lazy"
                  src={`${import.meta.env.BASE_URL}images/home-why-us.webp`}
                  alt="Takarub Regional Expertise"
                  className="relative w-full h-auto rounded-2xl border border-white/10"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/5 text-center">
                    <p className="text-xl font-extrabold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">{stat.num}</p>
                    <p className="text-white/30 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div {...fadeUp} className="mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                {tr.integrations.heading}{" "}
                <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                  {tr.integrations.headingHighlight}
                </span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed">
                {tr.integrations.description}
              </p>
            </motion.div>

            <div className="space-y-5">
              {reasons.map((reason, i) => {
                const Icon = REASON_ICONS[i];
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">{reason.title}</h3>
                        <p className="text-white/35 text-sm leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
