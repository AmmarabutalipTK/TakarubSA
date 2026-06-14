import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function CTA() {
  const { tr, isRTL } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img loading="lazy"
          src={`${import.meta.env.BASE_URL}images/home-parallax-bg.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            {tr.cta.heading}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {tr.cta.headingHighlight}
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
            {tr.cta.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/966590534431" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 text-lg h-14 px-8 gap-2 group shadow-xl shadow-primary/20"
              >
                {tr.cta.whatsapp}
                <ArrowRight className={cn("w-5 h-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
              </Button>
            </a>
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact`}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/10 text-lg h-14 px-8"
              >
                {tr.cta.consultation}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
