import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const { tr, lang, setLang, isRTL } = useLanguage();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolveHref = (href: string) => href.startsWith("/") && !href.startsWith("/#") ? `${base}${href}` : href;

  const serviceCategories = [
    {
      name: tr.nav.applicationDev,
      href: "#app-dev",
      subItems: [
        { name: tr.nav.mobile, href: "/services/mobile-application" },
        { name: tr.nav.ios, href: "/services/ios-application" },
        { name: tr.nav.android, href: "/services/android-application" },
        { name: tr.nav.web, href: "/services/web-application" },
      ],
    },
    {
      name: tr.nav.blockchain,
      href: "#blockchain",
      subItems: [
        { name: tr.nav.blockchainApp, href: "/services/blockchain-app-development" },
        { name: tr.nav.blockchainConsulting, href: "/services/blockchain-consulting" },
        { name: tr.nav.cryptoWallet, href: "/services/crypto-wallet" },
        { name: tr.nav.smartContract, href: "/services/smart-contract-development" },
      ],
    },
    {
      name: tr.nav.ai,
      href: "/services/artificial-intelligence",
      subItems: [],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setActiveCategory(null);
    }, 150);
  };

  const navLinks = [
    { name: tr.nav.home, href: "/" },
    { name: tr.nav.about, href: "/about" },
    { name: tr.nav.portfolio, href: "/portfolio" },
    { name: tr.nav.industries, href: "/industries" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg border-b border-border/50 shadow-sm" 
            : "bg-white"
        )}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href={resolveHref("/")} className="flex-shrink-0 flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/takarub_logo.png`}
                alt="Takarub"
                className="h-[75px] w-auto"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={resolveHref(link.href)}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tr.nav.services}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                </button>

                {isServicesOpen && (
                  <div className={cn("absolute top-full pt-3", isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2")}>
                    <div className="bg-white rounded-xl border border-border/80 shadow-xl min-w-[240px] py-2 overflow-visible">
                      {serviceCategories.map((cat) => (
                        <div
                          key={cat.name}
                          className="relative"
                          onMouseEnter={() => setActiveCategory(cat.name)}
                          onMouseLeave={() => setActiveCategory(null)}
                        >
                          <a
                            href={resolveHref(cat.href)}
                            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {cat.name}
                            {cat.subItems.length > 0 && (
                              <ChevronRight className={cn("w-4 h-4 text-muted-foreground", isRTL && "rotate-180")} />
                            )}
                          </a>

                          {cat.subItems.length > 0 && activeCategory === cat.name && (
                            <div className={cn("absolute top-0 ml-1", isRTL ? "right-full mr-1" : "left-full")}>
                              <div className="bg-white rounded-xl border border-border/80 shadow-xl min-w-[240px] py-2">
                                {cat.subItems.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={resolveHref(sub.href)}
                                    className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={resolveHref(link.href)}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5" />
                {lang === "en" ? "عربي" : "English"}
              </button>
              <a href={resolveHref("/contact")}>
                <Button className="gap-2 group">
                  {tr.nav.getInTouch}
                  <ArrowRight className={cn("w-4 h-4 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
                </Button>
              </a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-border/60 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3" />
                {lang === "en" ? "عربي" : "EN"}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            <a href={resolveHref("/")} className="text-base font-semibold text-foreground p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {tr.nav.home}
            </a>
            <a href={resolveHref("/about")} className="text-base font-semibold text-foreground p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {tr.nav.about}
            </a>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {tr.nav.services}
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {serviceCategories.map((cat) => (
                    <div key={cat.name}>
                      {cat.subItems.length > 0 ? (
                        <>
                          <button
                            onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.name ? null : cat.name)}
                            className="w-full flex items-center justify-between text-sm font-semibold text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            {cat.name}
                            <ChevronDown className={cn("w-3 h-3 transition-transform", mobileActiveCategory === cat.name && "rotate-180")} />
                          </button>
                          {mobileActiveCategory === cat.name && (
                            <div className="pl-4 flex flex-col gap-1">
                              {cat.subItems.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={resolveHref(sub.href)}
                                  className="text-sm text-muted-foreground p-2 rounded-lg hover:bg-muted hover:text-primary transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={resolveHref(cat.href)}
                          className="block text-sm font-semibold text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {cat.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href={resolveHref("/industries")} className="text-base font-semibold text-foreground p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {tr.nav.industries}
            </a>

            <div className="h-px bg-border my-2"></div>
            <div className="flex flex-col gap-3">
              <a href={resolveHref("/contact")} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full justify-center">{tr.nav.getInTouch}</Button>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
