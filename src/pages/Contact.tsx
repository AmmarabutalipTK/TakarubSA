import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { allCountries } from "country-telephone-data";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const ARAB_FIRST = ["sa", "ae", "kw", "qa", "bh", "om", "jo", "lb", "eg", "iq", "ye", "sy", "ma", "dz", "tn", "ly", "sd", "ps"];

function isoToFlag(iso2: string) {
  return iso2.toUpperCase().split("").map((c) => String.fromCodePoint(c.charCodeAt(0) + 127397)).join("");
}

const COUNTRY_CODES = (() => {
  const seen = new Set<string>();
  const list = allCountries
    .filter((c) => {
      const key = `${c.iso2}-${c.dialCode}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((c) => ({
      flag: isoToFlag(c.iso2),
      code: `+${c.dialCode}`,
      label: c.name.replace(/\s*\(.*?\)\s*/g, "").trim(),
      iso2: c.iso2,
    }));

  const priority = ARAB_FIRST.map((iso2) => list.find((c) => c.iso2 === iso2)).filter(Boolean) as typeof list;
  const rest = list.filter((c) => !ARAB_FIRST.includes(c.iso2)).sort((a, b) => a.label.localeCompare(b.label));
  return [...priority, ...rest];
})();

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { tr, isRTL } = useLanguage();

  useSEO({
    title: "Contact Takarub - Get in Touch for Digital Solutions",
    description: "Reach out to Takarub for consulting on AI, blockchain, mobile and web development. Serving Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/contact",
    keywords: ["contact us", "get in touch", "digital solutions", "consulting", "Arab region"],
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+966");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setStatus("submitting");
  setErrorMsg("");

  try {
    const payload = {
      title: `New Contact Request - ${formData.name}`,
      body: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${countryCode} ${formData.mobile}
Service: ${formData.service}

Message:
${formData.message}
      `,
      channel: "email",
    };

    const res = await fetch(
      "https://api.chatgate.io/bot-api/v1.0/customer/94401/bot/8b977976e3804441/flow/EC5B4D614E1E42CEBC8BDA8F2D997D63",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic 0cac7f1f-8f24-40c9-88f0-c27a24baeeee-IGvRaoY",
        },
        body: JSON.stringify(payload),
      }
    );

    if (res.ok) {
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
      });

      setCountryCode("+966");
    } else {
      const data = await res.json().catch(() => ({}));

      setErrorMsg(data.error || tr.contact.errorFallback);

      setStatus("error");
    }
  } catch (error) {
    console.error(error);

    setErrorMsg(tr.contact.networkError);

    setStatus("error");
  }
};

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#07070e] selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.06),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.04),_transparent_50%)]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                {tr.contact.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                {tr.contact.heading}{" "}
                <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                  {tr.contact.headingHighlight}
                </span>
              </h1>
              <p className="text-lg text-white/40 max-w-xl mx-auto">
                {tr.contact.subheading}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
              <motion.div {...fadeUp} className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8">
                    {tr.contact.talkWithUs}
                  </h2>
                  <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />

                  <div className="space-y-6">
                    <a
                      href="mailto:Contact@takarubsa.com"
                      className={cn("group flex items-start gap-4 hover:translate-x-1 transition-transform duration-300", isRTL && "hover:translate-x-0 hover:-translate-x-1")}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                        <Mail className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-white/25 uppercase tracking-wider mb-1">{tr.contact.emailLabel}</p>
                        <p className="text-white/70 font-medium group-hover:text-white transition-colors">
                          Contact@takarubsa.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+966590536401"
                      className={cn("group flex items-start gap-4 hover:translate-x-1 transition-transform duration-300", isRTL && "hover:translate-x-0 hover:-translate-x-1")}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                        <Phone className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-white/25 uppercase tracking-wider mb-1">{tr.contact.phoneLabel}</p>
                        <p className="text-white/70 font-medium group-hover:text-white transition-colors">
                          +966 590 536 401
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white/40" />
                      </div>
                      <div>
                        <p className="text-xs text-white/25 uppercase tracking-wider mb-1">{tr.contact.locationLabel}</p>
                        <p className="text-white/70 font-medium">{tr.contact.locationValue}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="https://wa.me/966590536401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span className="text-[#25D366] font-semibold text-sm uppercase tracking-wide">
                      {tr.contact.startWhatsapp}
                    </span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-3"
              >
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8">
                    {tr.contact.sayHello}
                  </h2>
                  <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-10" />

                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{tr.contact.successTitle}</h3>
                      <p className="text-white/50 max-w-sm">
                        {tr.contact.successMessage}
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                      >
                        {tr.contact.sendAnother}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder={tr.contact.namePlaceholder}
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder={tr.contact.emailPlaceholder}
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                        />
                      </div>

                      <div className="flex rounded-xl overflow-hidden border border-white/[0.08] focus-within:border-primary/40 transition-all duration-300 bg-white/[0.03] focus-within:bg-white/[0.05]">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="bg-transparent border-r border-white/[0.08] text-white text-sm px-3 py-4 focus:outline-none cursor-pointer appearance-none"
                          style={{
                            width: "108px",
                            flexShrink: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 8px center",
                            paddingRight: "26px",
                          }}
                        >
                          {COUNTRY_CODES.map(({ flag, code, label }) => (
                            <option key={`${flag}-${code}`} value={code} className="bg-[#0e0e1a] text-white">
                              {flag} {code} — {label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder={tr.contact.mobilePlaceholder}
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          className="flex-1 min-w-0 bg-transparent px-4 py-4 text-white placeholder:text-white/25 focus:outline-none text-sm"
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-300 text-sm appearance-none cursor-pointer [&:has(option:checked:not([value=''']))]:text-white"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 20px center",
                          }}
                        >
                          <option value="" className="bg-[#0e0e1a] text-white/40">
                            {tr.contact.serviceLabel}
                          </option>
                          <option value="mobile-app" className="bg-[#0e0e1a] text-white">{tr.contact.services.mobileApp}</option>
                          <option value="web-app" className="bg-[#0e0e1a] text-white">{tr.contact.services.webApp}</option>
                          <option value="blockchain" className="bg-[#0e0e1a] text-white">{tr.contact.services.blockchain}</option>
                          <option value="ai" className="bg-[#0e0e1a] text-white">{tr.contact.services.ai}</option>
                          <option value="consulting" className="bg-[#0e0e1a] text-white">{tr.contact.services.consulting}</option>
                          <option value="other" className="bg-[#0e0e1a] text-white">{tr.contact.services.other}</option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          placeholder={tr.contact.messagePlaceholder}
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-300 text-sm resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              {tr.contact.sending}
                            </>
                          ) : (
                            <>
                              {tr.contact.submit}
                              <ArrowRight className={cn("w-4 h-4 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer textColor="white" />
    </div>
  );
}
