import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AVATARS = [
  "https://i.pravatar.cc/60?img=11",
  "https://i.pravatar.cc/60?img=23",
  "https://i.pravatar.cc/60?img=47",
];

export function Testimonials() {
  const { tr } = useLanguage();
  const reviews = tr.testimonials.reviews;
  const stats = tr.testimonials.stats;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[activeIndex];

  return (
    <section className="py-24 bg-muted/20" id="customers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {tr.testimonials.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tr.testimonials.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border shadow-sm text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl font-display font-extrabold text-primary mb-4">{stat.value}</div>
              <h4 className="text-xl font-bold text-foreground mb-2">{stat.label}</h4>
              <p className="text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-1 mb-8">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-primary fill-primary" />)}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-2xl md:text-4xl font-display font-medium text-white mb-8 max-w-4xl leading-tight">
                  "{review.quote}"
                </h3>

                <div className="flex items-center gap-4">
                  <img
                    src={AVATARS[activeIndex]}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                  />
                  <div className="text-start">
                    <div className="text-white font-bold text-lg">{review.name}</div>
                    <div className="text-primary font-medium">{review.title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-primary w-6" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
