import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function TermsOfService() {
  const { tr } = useLanguage();
  const sections = tr.terms.sections;

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#07070e] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                {tr.terms.title}
              </h1>
              <p className="text-white/30 text-sm">
                {tr.terms.lastUpdated}
              </p>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent mt-8" />
            </motion.div>

            <motion.p {...fadeUp} className="text-white/50 text-lg leading-relaxed mb-12">
              {tr.terms.intro}
            </motion.p>

            <div className="space-y-12">
              {sections.map((section, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.03 }}>
                  <h2 className="text-xl font-bold text-white mb-4">
                    {i + 1}. {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, j) => (
                      <p key={j} className="text-white/40 leading-relaxed text-[15px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
