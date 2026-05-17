import { Facebook, Instagram,X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer({textColor="black"}: {textColor?: string}) {
  const { tr } = useLanguage();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const footerSections = [
    {
      title: tr.footer.categories.applicationDev,
      links: [
        { label: tr.footer.links.mobileApp, href: `${base}/services/mobile-application` },
        { label: tr.footer.links.iosApp, href: `${base}/services/ios-application` },
        { label: tr.footer.links.androidApp, href: `${base}/services/android-application` },
        { label: tr.footer.links.webApp, href: `${base}/services/web-application` },
      ],
    },
    {
      title: tr.footer.categories.blockchain,
      links: [
        { label: tr.footer.links.blockchainApp, href: `${base}/services/blockchain-app-development` },
        { label: tr.footer.links.blockchainConsulting, href: `${base}/services/blockchain-consulting` },
        { label: tr.footer.links.cryptoWallet, href: `${base}/services/crypto-wallet` },
        { label: tr.footer.links.smartContract, href: `${base}/services/smart-contract-development` },
      ],
    },
    {
      title: tr.footer.categories.ai,
      links: [
        { label: tr.footer.links.artificialIntelligence, href: `${base}/services/artificial-intelligence` },
      ],
    },
    {
      title: tr.footer.categories.company,
      links: [
        { label: tr.footer.links.aboutUs, href: `${base}/about` },
        { label: tr.footer.links.industries, href: `${base}/industries` },
        { label: tr.footer.links.whyTakarub, href: `${base}/#platform` },
        { label: tr.footer.links.ourPartners, href: `${base}/#customers` },
      ],
    },
    {
      title: tr.footer.categories.contact,
      links: [
        { label: "Contact@takarubsa.com", href: "mailto:Contact@takarubsa.com" },
        { label: "+966 590 536 401", href: "tel:+966590536401" },
        { label: tr.footer.whatsappChat, href: "https://wa.me/966590536401" },
        { label: tr.footer.location, href: undefined },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-24 pb-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-6 mb-16">
          <div className="lg:col-span-2">
            <a href={`${base}/`} className="flex items-center mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}images/takarub-logo.webp`}
                alt="Takarub"
                className="h-24 w-auto"
              />
            </a>
            <p className={`text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs text-${textColor}`}>
              {tr.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className={`font-display font-bold text-white mb-6 text-${textColor}`}>{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((item) => {
                  const isExternal = item.href && (item.href.startsWith("http") || item.href.startsWith("mailto:") || item.href.startsWith("tel:"));
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className={`text-sm text-muted-foreground hover:text-primary transition-colors text-${textColor} `}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className={`text-sm text-muted-foreground text-${textColor}`}>{item.label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm text-muted-foreground text-${textColor}`}>
            {tr.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href={`${base}/privacy-policy`} className={`text-sm text-muted-foreground hover:text-white transition-colors text-${textColor}`}>{tr.footer.privacyPolicy}</a>
            <a href={`${base}/terms-of-service`} className={`text-sm text-muted-foreground hover:text-white transition-colors text-${textColor}`}>{tr.footer.termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
