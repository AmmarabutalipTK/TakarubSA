import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

type Category =
  | "All"
  | "AI & Machine Learning"
  | "Fintech & Payments"
  | "Healthcare"
  | "Food & Delivery"
  | "Transport & Mobility"
  | "EdTech"
  | "Sports & Social"
  | "Blockchain & Crypto"
  | "Enterprise & ERP"
  | "Lifestyle & Marketplace"
  | "On-Demand Services";

interface Project {
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  category: Exclude<Category, "All">;
  image: string;
  tags: string[];
}

const CATEGORY_COLORS: Record<Exclude<Category, "All">, string> = {
  "AI & Machine Learning":   "bg-violet-50 text-violet-700 border-violet-200",
  "Fintech & Payments":      "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Healthcare":              "bg-blue-50 text-blue-700 border-blue-200",
  "Food & Delivery":         "bg-orange-50 text-orange-700 border-orange-200",
  "Transport & Mobility":    "bg-slate-50 text-slate-700 border-slate-200",
  "EdTech":                  "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Sports & Social":         "bg-red-50 text-red-700 border-red-200",
  "Blockchain & Crypto":     "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Enterprise & ERP":        "bg-amber-50 text-amber-700 border-amber-200",
  "Lifestyle & Marketplace": "bg-pink-50 text-pink-700 border-pink-200",
  "On-Demand Services":      "bg-teal-50 text-teal-700 border-teal-200",
};

const PROJECTS: Project[] = [
    {
    name: "Hakeem Care",
    nameAr: "حكيم كير",
    tagline: "Saudi Arabia's all-in-one digital health platform",
    taglineAr: "منصة الرعاية الصحية الرقمية الشاملة في السعودية",
    description: "Saudi Arabia's leading digital healthcare platform — telemedicine, home nursing, lab tests, appointment scheduling, online classes with overseas experts, home spa, and AI-powered Hakeem Smart medical assistant.",
    descriptionAr: "المنصة الصحية الرقمية الرائدة في المملكة العربية السعودية — طب عن بُعد، تمريض منزلي، فحوصات مخبرية، جدولة مواعيد، ومساعد طبي ذكي Hakeem Smart.",
    category: "Healthcare",
    image: `${BASE}/images/hakeem.webp`,
    tags: ["Healthcare", "Saudi Arabia", "Telemedicine", "Home Care"],
  },
  // ── AI & Machine Learning ──
  {
    name: "AI Marketing Automation Platform",
    nameAr: "منصة أتمتة التسويق بالذكاء الاصطناعي",
    tagline: "Single command centre for CMOs",
    taglineAr: "مركز قيادة واحد لمسؤولي التسويق",
    description: "An AI-driven marketing automation platform acting as a single command centre for CMOs — enabling multi-channel campaign management, AI SEO visibility tracking, real-time analytics, and automated content creation.",
    descriptionAr: "منصة أتمتة تسويق مدفوعة بالذكاء الاصطناعي تتيح إدارة الحملات متعددة القنوات وتتبع ظهور SEO وإنشاء المحتوى الآلي.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/marketing.webp`,
    tags: ["AI/ML", "MarTech", "SaaS"],
  },
  {
    name: "Aerospace AI Decision Intelligence",
    nameAr: "ذكاء القرار للطيران",
    tagline: "Predictive intelligence for aerospace leaders",
    taglineAr: "ذكاء تنبؤي لقادة صناعة الطيران",
    description: "Enterprise AI decision intelligence for a global aerospace leader — enabling predictive maintenance, supply chain optimization, multilingual document intelligence, and workforce analytics.",
    descriptionAr: "ذكاء قرار مؤسسي لشركة طيران عالمية — يمكّن الصيانة التنبؤية وتحسين سلسلة التوريد وتحليلات القوى العاملة.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/Airbus.webp`,
    tags: ["Enterprise AI", "Predictive", "B2B"],
  },
  {
    name: "Pundit.AI",
    nameAr: "بونديت.AI",
    tagline: "Vedic wisdom meets conversational AI",
    taglineAr: "الحكمة الفيدية تلتقي بالذكاء الاصطناعي",
    description: "An AI-powered astrology platform blending ancient Vedic wisdom with conversational AI — delivering instant horoscope readings, life predictions, compatibility insights, and live expert consultations.",
    descriptionAr: "منصة تنجيم مدعومة بالذكاء الاصطناعي تمزج الحكمة الفيدية مع الذكاء الاصطناعي للمحادثة لتقديم قراءات فورية وتنبؤات حياتية.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/Pundit.webp`,
    tags: ["AI", "Consumer", "iOS & Android"],
  },
  {
    name: "AI Fitness & Nutrition App",
    nameAr: "تطبيق اللياقة والتغذية",
    tagline: "Personalized health powered by AI",
    taglineAr: "صحة شخصية مدعومة بالذكاء الاصطناعي",
    description: "Personalized nutrition and workout recommendations backed by advanced AI algorithms, machine learning, and predictive analytics — adapting to each user's goals, biometrics, and lifestyle.",
    descriptionAr: "توصيات تغذية وتمرين مخصصة مدعومة بخوارزميات الذكاء الاصطناعي والتعلم الآلي وتحليلات التنبؤ.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/Fitness.webp`,
    tags: ["AI/ML", "Health", "Wearable"],
  },

  {
    name: "KAIZAN AI",
    nameAr: "KAIZAN AI",
    tagline: "Plain-English questions → instant visual reports",
    taglineAr: "أسئلة بلغة طبيعية → تقارير مرئية فورية",
    description: "Connects any data source — finance, sales, inventory — and instantly turns plain-language questions into visual reports. Ask \"Show me top 5 customers this quarter\" and get charts in seconds.",
    descriptionAr: "يربط أي مصدر بيانات ويحوّل الأسئلة باللغة الطبيعية فوراً إلى تقارير مرئية — اسأل وسترى النتائج في ثوانٍ.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/KAIZAN.webp`,
    tags: ["Analytics", "NLP", "BI"],
  },
  {
    name: "AI Keyboard App",
    nameAr: "تطبيق لوحة المفاتيح الذكية",
    tagline: "Communication enhanced by contextual AI",
    taglineAr: "تواصل محسّن بالذكاء الاصطناعي السياقي",
    description: "An intelligent keyboard application enhancing communication with AI-driven contextual emoji suggestions, personalized sticker packs, smart autocorrect, and predictive text powered by on-device ML.",
    descriptionAr: "تطبيق لوحة مفاتيح ذكي يعزز التواصل باقتراحات رموز تعبيرية سياقية ومجموعات ملصقات مخصصة وتصحيح تلقائي ذكي.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/keyboard.webp`,
    tags: ["AI", "Productivity", "iOS & Android"],
  },
  {
    name: "AI Video iPad App",
    nameAr: "تطبيق الفيديو الذكي للآيباد",
    tagline: "Personalized AI videos from facial images",
    taglineAr: "مقاطع فيديو مخصصة من صور الوجه",
    description: "An AI-powered iPad application that generates personalized videos by processing facial images against creative templates — enabling unique, branded video content in seconds for marketing and social media.",
    descriptionAr: "تطبيق آيباد مدعوم بالذكاء الاصطناعي يُنشئ مقاطع فيديو مخصصة من خلال معالجة صور الوجه على قوالب إبداعية.",
    category: "AI & Machine Learning",
    image: `${BASE}/images/iPad_App.webp`,
    tags: ["AI", "Video", "iPad", "Creative"],
  },
  // ── Fintech & Payments ──
  {
    name: "BharatPe — 12% Club",
    nameAr: "بهارات باي — نادي 12%",
    tagline: "Financial freedom for India's merchants",
    taglineAr: "الحرية المالية لتجار الهند",
    description: "A leading fintech super-app offering merchants QR-based payments, business loans, digital bookkeeping — and consumers interest-free credit for 30 days and 12% return investment products. 10M+ downloads.",
    descriptionAr: "تطبيق مالي رائد يوفر مدفوعات QR وقروض أعمال للتجار وللمستهلكين ائتمان بدون فوائد ومنتجات استثمارية بعوائد 12%.",
    category: "Fintech & Payments",
    image: `${BASE}/images/BharatPe.webp`,
    tags: ["Fintech", "India", "10M+ Users"],
  },
  {
    name: "PostPe",
    nameAr: "بوست باي",
    tagline: "Flexible credit for modern consumers",
    taglineAr: "ائتمان مرن للمستهلك الحديث",
    description: "A modern buy-now-pay-later solution providing consumers with flexible credit options, seamless payment services, and smart spending insights — reducing friction at checkout across partner merchants.",
    descriptionAr: "حل اشترِ الآن وادفع لاحقاً يوفر للمستهلكين خيارات ائتمانية مرنة وخدمات دفع سلسة ورؤى إنفاق ذكية.",
    category: "Fintech & Payments",
    image: `${BASE}/images/postpe.webp`,
    tags: ["BNPL", "Credit", "India"],
  },
  {
    name: "Du Pay",
    nameAr: "تطبيق المدفوعات الرقمية في الإمارات",
    tagline: "Regulated digital payments for the UAE",
    taglineAr: "مدفوعات رقمية منظمة للإمارات",
    description: "A regulated financial services app for secure digital payments, local transfers, international remittances, bill payments, and account management — purpose-built for the UAE market.",
    descriptionAr: "تطبيق خدمات مالية منظم للمدفوعات الرقمية الآمنة والتحويلات المحلية والدولية ودفع الفواتير في الإمارات.",
    category: "Fintech & Payments",
    image: `${BASE}/images/du.webp`,
    tags: ["Fintech", "UAE", "Regulated"],
  },
  {
    name: "AI Insurance Platform",
    nameAr: "منصة التأمين بالذكاء الاصطناعي",
    tagline: "Automated policy issuance & fraud detection",
    taglineAr: "إصدار وثائق تلقائي وكشف الاحتيال",
    description: "An AI-driven insurance platform that automates policy issuance, claim verification, and fraud detection — delivering faster, transparent customer experiences and reducing operational costs by 40%.",
    descriptionAr: "منصة تأمين مدعومة بالذكاء الاصطناعي تؤتمت إصدار السياسات والتحقق من المطالبات وكشف الاحتيال.",
    category: "Fintech & Payments",
    image: `${BASE}/images/Insurance.webp`,
    tags: ["InsurTech", "AI", "Enterprise"],
  },
  {
    name: "Medical Finance App",
    nameAr: "تطبيق التمويل الطبي",
    tagline: "Credit & payment solutions for medical needs",
    taglineAr: "حلول ائتمانية للاحتياجات الطبية",
    description: "A financial services app offering innovative credit and payment solutions for medical needs — simplifying healthcare financing with EMI options, insurance integration, and a smooth digital experience.",
    descriptionAr: "تطبيق خدمات مالية يقدم حلولاً ائتمانية مبتكرة للاحتياجات الطبية مع خيارات التقسيط ودمج التأمين.",
    category: "Fintech & Payments",
    image: `${BASE}/images/zerope.webp`,
    tags: ["HealthFintech", "Credit", "B2C"],
  },
  // ── Healthcare ──
  {
    name: "Voice AI Elderly Care",
    nameAr: "رعاية كبار السن بالصوت الذكي",
    tagline: "Transforming elder care through voice AI",
    taglineAr: "تحويل رعاية كبار السن عبر الذكاء الاصطناعي الصوتي",
    description: "A revolutionary assistant transforming elderly care through advanced voice AI — integrating healthcare monitoring, medication management, emergency response, and family communication in one device.",
    descriptionAr: "مساعد ثوري يحوّل رعاية كبار السن عبر الذكاء الاصطناعي الصوتي المتقدم مع مراقبة صحية وإدارة الأدوية.",
    category: "Healthcare",
    image: `${BASE}/images/ingeni.webp`,
    tags: ["Voice AI", "Elder Care", "IoT"],
  },
  {
    name: "Home Nursing App",
    nameAr: "تطبيق التمريض المنزلي",
    tagline: "Professional nursing services at home",
    taglineAr: "خدمات تمريض احترافية في المنزل",
    description: "A mobile platform connecting patients with certified home nursing professionals — offering a wide range of at-home medical services with real-time nurse tracking, digital prescriptions, and insurance billing.",
    descriptionAr: "منصة جوال تربط المرضى بالممرضين المنزليين المعتمدين مع تتبع الممرض الفوري والوصفات الرقمية.",
    category: "Healthcare",
    image: `${BASE}/images/nursing.webp`,
    tags: ["Home Care", "Nursing", "On-Demand"],
  },
  {
    name: "Telemedicine Platform",
    nameAr: "منصة الطب عن بُعد",
    tagline: "Virtual healthcare for patients & providers",
    taglineAr: "رعاية صحية افتراضية للمرضى والمزودين",
    description: "A full-stack telemedicine platform — virtual consultations, appointment scheduling, health record management, e-prescriptions, and real-time health monitoring for patients and healthcare providers.",
    descriptionAr: "منصة طب عن بُعد متكاملة تشمل الاستشارات الافتراضية وجدولة المواعيد وإدارة السجلات الصحية.",
    category: "Healthcare",
    image: `${BASE}/images/patients & providers.webp`,
    tags: ["Telehealth", "Doctor App", "B2C2B"],
  },
  // ── Food & Delivery ──
  {
    name: "Venezuela Food Delivery",
    nameAr: "توصيل الطعام في فنزويلا",
    tagline: "#1 most downloaded food app in Venezuela",
    taglineAr: "التطبيق الأول في التنزيل في فنزويلا",
    description: "Built on Code Brew's AI-powered platform, this became the first and most downloaded food delivery app in Venezuela — with real-time tracking, smart restaurant discovery, and dynamic AI-based pricing.",
    descriptionAr: "مبني على منصة Code Brew المدعومة بالذكاء الاصطناعي، أصبح أول وأكثر تطبيقات توصيل الطعام تنزيلاً في فنزويلا.",
    category: "Food & Delivery",
    image: `${BASE}/images/Venezuela.webp`,
    tags: ["Food Delivery", "Latin America", "#1 App"],
  },
  {
    name: "BetterButter",
    nameAr: "بيتر باتر",
    tagline: "India's leading recipe & cooking community",
    taglineAr: "مجتمع الطبخ والوصفات الرائد في الهند",
    description: "Makes cooking healthier and easier for everyone with a huge collection of Indian recipes — step-by-step videos, community cooking challenges, meal planning, and personalized dietary recommendations.",
    descriptionAr: "يجعل الطبخ أكثر صحة وسهولة مع مجموعة ضخمة من الوصفات الهندية وفيديوهات خطوة بخطوة وتحديات الطبخ.",
    category: "Food & Delivery",
    image: `${BASE}/images/BetterButter.webp`,
    tags: ["Recipe App", "India", "Community"],
  },
  {
    name: "RED TAG",
    nameAr: "ريد تاج",
    tagline: "Fashion & lifestyle delivered in 24 hours",
    taglineAr: "الموضة ونمط الحياة في 24 ساعة",
    description: "A fashion and lifestyle e-commerce app delivering curated clothing, accessories, and beauty products within 24 hours — with AI-powered style recommendations and express checkout.",
    descriptionAr: "تطبيق تجارة إلكترونية للأزياء ونمط الحياة يوصل الملابس والإكسسوارات والمنتجات الجمالية خلال 24 ساعة.",
    category: "Food & Delivery",
    image: `${BASE}/images/Fashion.webp`,
    tags: ["E-commerce", "Fashion", "Express Delivery"],
  },
  {
    name: "Super App (Food + Ride)",
    nameAr: "تطبيق سوبر (طعام + توصيل)",
    tagline: "Everything in one app",
    taglineAr: "كل شيء في تطبيق واحد",
    description: "A comprehensive super app combining food delivery, ride-hailing, grocery delivery, home services, and more — designed to simplify daily life via a single seamless interface.",
    descriptionAr: "تطبيق سوبر شامل يجمع توصيل الطعام وحجز الرحلات وتوصيل البقالة وخدمات منزلية في واجهة واحدة سلسة.",
    category: "Food & Delivery",
    image: `${BASE}/images/Super App.webp`,
    tags: ["Super App", "On-Demand", "Multi-Service"],
  },
  // ── Transport & Mobility ──
  {
    name: "AWR Connect",
    nameAr: "AWR كونيكت",
    tagline: "Connected car management for Nissan & Renault",
    taglineAr: "إدارة السيارة المتصلة لنيسان ورينو",
    description: "Designed for Nissan, Infiniti, and Renault owners — digital car management covering service booking, remote diagnostics, roadside assistance, insurance, and loyalty rewards in one connected app.",
    descriptionAr: "مصمم لمالكي نيسان وإنفينيتي ورينو — إدارة رقمية شاملة للسيارة تشمل حجز الخدمة والتشخيص عن بُعد.",
    category: "Transport & Mobility",
    image: `${BASE}/images/AWR.webp`,
    tags: ["Automotive", "OEM", "Connected Car"],
  },
  {
    name: "Taxi Booking App in the US",
    nameAr: "تطبيق حجز مواصلات في الولايات المتحده الامريكية",
    tagline: "Advanced taxi booking across Tunisia",
    taglineAr: "حجز سيارات الأجرة المتقدم في تونس",
    description: "An efficient ride-hailing solution connecting passengers with drivers across cities. It offers features like fare estimates, driver ratings, and multiple ride options to ensure a comfortable travel experience.",
    descriptionAr: "تطبيق حجز سيارات الأجرة المتقدم بواجهة مستخدم استثنائية يعمل عبر تونس مع تتبع السائق الفوري.",
    category: "Transport & Mobility",
    image: `${BASE}/images/Taxi.webp`,
    tags: ["Ride-Hailing", "Tunisia", "Maps"],
  },
  // ── EdTech ──
  {
    name: "Gradeup — Exam Prep Platform",
    nameAr: "غريدأب — منصة التحضير للامتحانات",
    tagline: "India's #1 exam prep — 10M+ downloads",
    taglineAr: "الأول في الهند للتحضير للامتحانات — 10M+ تنزيل",
    description: "An all-encompassing learning platform offering live classes, mock tests, and exam prep resources for India's most competitive exams — 10M+ downloads with a community of millions of learners.",
    descriptionAr: "منصة تعليمية شاملة تقدم دروساً مباشرة واختبارات محاكاة للامتحانات التنافسية الكبرى في الهند مع 10M+ تنزيل.",
    category: "EdTech",
    image: `${BASE}/images/exam_prep.webp`,
    tags: ["EdTech", "India", "10M+ Downloads"],
  },
  // ── Sports & Social ──
  {
    name: "Grintafy",
    nameAr: "غرينتافاي",
    tagline: "Football's social network for the Middle East",
    taglineAr: "الشبكة الاجتماعية لكرة القدم في الشرق الأوسط",
    description: "A football-focused social app connecting players and field owners across Saudi Arabia and the Middle East — players create profiles, book fields, team up by location, and follow live match feeds.",
    descriptionAr: "تطبيق اجتماعي لكرة القدم يربط اللاعبين بأصحاب الملاعب في السعودية والشرق الأوسط مع ملفات شخصية وحجز ملاعب.",
    category: "Sports & Social",
    image: `${BASE}/images/Football.webp`,
    tags: ["Sports", "Saudi Arabia", "Community"],
  },
  // ── Blockchain & Crypto ──
  {
    name: "Multi-Chain Crypto Wallet",
    nameAr: "محفظة العملات الرقمية متعددة السلاسل",
    tagline: "Institutional-grade multi-chain security",
    taglineAr: "أمان متعدد السلاسل على مستوى المؤسسات",
    description: "A secure multi-chain crypto wallet with institutional-grade security protocols, smart contract integration, DeFi staking, NFT management, and cross-chain swaps — supporting 50+ blockchains.",
    descriptionAr: "محفظة عملات رقمية متعددة السلاسل بأمان على مستوى المؤسسات مع تكامل العقود الذكية ودعم أكثر من 50 بلوكتشين.",
    category: "Blockchain & Crypto",
    image: `${BASE}/images/multi-chain.webp`,
    tags: ["Crypto", "DeFi", "Multi-chain"],
  },
  {
    name: "Dubai Metaverse Real Estate",
    nameAr: "العقارات في الميتافيرس دبي",
    tagline: "Immersive AR/VR property experience",
    taglineAr: "تجربة عقارية غامرة بتقنية AR/VR",
    description: "An immersive metaverse experience using AR/VR technology and blockchain integration for Dubai's premier real estate market — virtual property tours, NFT-based ownership, and smart contract transactions.",
    descriptionAr: "تجربة ميتافيرس غامرة باستخدام تقنية AR/VR وتكامل البلوكتشين لسوق العقارات المتميز في دبي.",
    category: "Blockchain & Crypto",
    image: `${BASE}/images/metaverse.webp`,
    tags: ["Metaverse", "AR/VR", "Real Estate"],
  },
  {
    name: "Crypto Casino",
    nameAr: "كازينو العملات الرقمية",
    tagline: "White-label crypto gaming platform",
    taglineAr: "منصة ألعاب عملات رقمية جاهزة",
    description: "A fully customizable white-label crypto casino platform — supporting Bitcoin, Ethereum, and major altcoins with provably fair games, instant payouts, multi-currency wallets, and compliance-ready KYC.",
    descriptionAr: "منصة كازينو عملات رقمية قابلة للتخصيص الكامل تدعم Bitcoin وEthereum مع ألعاب عادلة وسحوبات فورية.",
    category: "Blockchain & Crypto",
    image: `${BASE}/images/Casino.webp`,
    tags: ["Crypto", "Gaming", "White-Label"],
  },
  {
    name: "NFT Marketplace",
    nameAr: "سوق NFT",
    tagline: "Create, buy & sell digital collectibles",
    taglineAr: "إنشاء وشراء وبيع المقتنيات الرقمية",
    description: "A full-featured NFT marketplace enabling artists, creators, and collectors to mint, list, buy, sell, and auction digital collectibles — with gas fee optimization and multi-chain support.",
    descriptionAr: "سوق NFT متكامل يمكّن الفنانين والمبدعين والجامعين من سك وإدراج وشراء وبيع المقتنيات الرقمية.",
    category: "Blockchain & Crypto",
    image: `${BASE}/images/nft.webp`,
    tags: ["NFT", "Web3", "Marketplace"],
  },
  // ── Enterprise & ERP ──
  {
    name: "SML Isuzu — Vehicle Manufacturer ERP",
    nameAr: "SML إيسوزو — ERP للمركبات",
    tagline: "ERP for buses, ambulances & custom vehicles",
    taglineAr: "نظام ERP للحافلات والإسعاف والمركبات المخصصة",
    description: "An ERP solution built for SML Isuzu — a commercial vehicle manufacturer specializing in buses, ambulances, and customized vehicles — covering production planning, quality control, dealer management, and after-sales.",
    descriptionAr: "حل ERP مبني لـ SML Isuzu لمصنّع المركبات التجارية المتخصص في الحافلات وسيارات الإسعاف.",
    category: "Enterprise & ERP",
    image: `${BASE}/images/Isuzu.webp`,
    tags: ["ERP", "Manufacturing", "B2B"],
  },
  {
    name: "Mobile ERP Tool",
    nameAr: "أداة ERP للجوال",
    tagline: "Business intelligence on the go",
    taglineAr: "ذكاء أعمال في متناول يدك",
    description: "A high-end mobile ERP tool enabling companies to manage resources, streamline operations, and access critical business data anywhere — with real-time dashboards, approval workflows, and role-based access.",
    descriptionAr: "أداة ERP محمولة عالية الجودة تمكّن الشركات من إدارة الموارد والوصول إلى بيانات الأعمال الحيوية في أي مكان.",
    category: "Enterprise & ERP",
    image: `${BASE}/images/dashboard-preview.webp`,
    tags: ["ERP", "Mobile", "Enterprise"],
  },
  // ── Lifestyle & Marketplace ──
  {
    name: "Home Renovation App",
    nameAr: "تطبيق تجديد المنازل",
    tagline: "From design idea to finished renovation",
    taglineAr: "من فكرة التصميم إلى التجديد المكتمل",
    description: "Revolutionizes home improvement — personalized interior design solutions, connecting users with skilled professionals, and managing the entire renovation process from ideation to completion.",
    descriptionAr: "يحدث ثورة في تحسين المنازل — حلول تصميم داخلي مخصصة ويربط المستخدمين بالمهنيين المهرة من الفكرة للتنفيذ.",
    category: "Lifestyle & Marketplace",
    image: `${BASE}/images/Home.webp`,
    tags: ["Home Improvement", "Marketplace", "B2C"],
  },
  {
    name: "Digital Marketplace",
    nameAr: "السوق الرقمي",
    tagline: "Multi-seller marketplace for local businesses",
    taglineAr: "سوق متعدد البائعين للشركات المحلية",
    description: "A thriving multi-seller digital marketplace supporting local businesses across diverse product categories — with AI-powered product discovery, secure escrow payments, seller analytics, and buyer protection.",
    descriptionAr: "سوق رقمي متعدد البائعين يدعم الشركات المحلية عبر فئات منتجات متنوعة مع اكتشاف المنتجات بالذكاء الاصطناعي.",
    category: "Lifestyle & Marketplace",
    image: `${BASE}/images/local.webp`,
    tags: ["Marketplace", "eCommerce", "Multi-seller"],
  },
  // ── On-Demand Services ──

  {
    name: "On-Demand Home Services",
    nameAr: "الخدمات المنزلية عند الطلب",
    tagline: "Cleaning, plumbing, repairs — on demand",
    taglineAr: "تنظيف وسباكة وإصلاحات — عند الطلب",
    description: "A full-stack on-demand home services platform connecting homeowners with verified professionals for cleaning, plumbing, electrical, appliance repair, and personal care — with GPS tracking and in-app payments.",
    descriptionAr: "منصة خدمات منزلية عند الطلب تربط أصحاب المنازل بمحترفين موثقين للتنظيف والسباكة والكهرباء والإصلاحات.",
    category: "On-Demand Services",
    image: `${BASE}/images/Cleaning.webp`,
    tags: ["Home Services", "On-Demand", "B2C"],
  },
  {
    name: "Pickup & Delivery App",
    nameAr: "تطبيق الاستلام والتوصيل",
    tagline: "Courier delivery with fleet management",
    taglineAr: "توصيل البريد مع إدارة الأسطول",
    description: "A complete courier delivery solution with Fleet Management System and Delivery Management System — real-time package tracking, multi-driver dispatching, proof-of-delivery, and business analytics.",
    descriptionAr: "حل توصيل بريد كامل مع نظام إدارة الأسطول ونظام إدارة التوصيل وتتبع الطرود الفوري وإرسال متعدد للسائقين.",
    category: "On-Demand Services",
    image: `${BASE}/images/Delivery App1.webp`,
    tags: ["Courier", "Fleet", "Last-Mile"],
  },
  {
    name: "Multi-Service Super App",
    nameAr: "تطبيق سوبر متعدد الخدمات",
    tagline: "Bill payments, travel, lifestyle in one app",
    taglineAr: "فواتير وسفر ونمط حياة في تطبيق واحد",
    description: "A comprehensive lifestyle super app covering bill payments, travel bookings, hotel reservations, event ticketing, grocery delivery, and local service discovery — one account, every need covered.",
    descriptionAr: "تطبيق نمط حياة شامل يغطي دفع الفواتير وحجز السفر والفنادق وتذاكر الفعاليات وتوصيل البقالة.",
    category: "On-Demand Services",
    image: `${BASE}/images/donepacked.webp`,
    tags: ["Super App", "Lifestyle", "Multi-Service"],
  },
];

const CATEGORIES: Category[] = [
  "All",
  "AI & Machine Learning",
  "Fintech & Payments",
  "Healthcare",
  "Food & Delivery",
  "Transport & Mobility",
  "EdTech",
  "Sports & Social",
  "Blockchain & Crypto",
  "Enterprise & ERP",
  "Lifestyle & Marketplace",
  "On-Demand Services",
];

const CATEGORY_LABELS_AR: Record<Category, string> = {
  "All":                     "الكل",
  "AI & Machine Learning":   "الذكاء الاصطناعي",
  "Fintech & Payments":      "التقنية المالية",
  "Healthcare":              "الرعاية الصحية",
  "Food & Delivery":         "الطعام والتوصيل",
  "Transport & Mobility":    "النقل والتنقل",
  "EdTech":                  "تقنية التعليم",
  "Sports & Social":         "الرياضة والتواصل",
  "Blockchain & Crypto":     "بلوكتشين وكريبتو",
  "Enterprise & ERP":        "المؤسسات / ERP",
  "Lifestyle & Marketplace": "نمط الحياة والأسواق",
  "On-Demand Services":      "الخدمات الفورية",
};

export default function Portfolio() {
  const { lang, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div
      className={cn("min-h-screen flex flex-col w-full bg-background", isRTL && "rtl")}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Navbar />

      <main className="flex-1 w-full">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-mesh-light pt-24 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(16,100%,60%,0.12),_transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {lang === "ar" ? "مشاريعنا" : "Our Work"}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                {lang === "ar" ? (
                  <>معرض{" "}<span className="text-gradient-orange">أعمالنا</span></>
                ) : (
                  <>Our{" "}<span className="text-gradient-orange">Portfolio</span></>
                )}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {lang === "ar"
                  ? "أكثر من 50 تطبيقاً موبايل وويب تم تسليمها عبر 150+ دولة — من المنصات المدعومة بالذكاء الاصطناعي إلى حلول بلوك تشين المؤسسية."
                  : "50+ mobile & web applications delivered across 150+ countries — from AI-powered platforms to enterprise blockchain solutions."}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {[
                { num: "50+",    label: lang === "ar" ? "تطبيق مكتمل"   : "Apps Delivered"  },
                { num: "150+",   label: lang === "ar" ? "دولة"           : "Countries"       },
                { num: "12",     label: lang === "ar" ? "صناعة"          : "Industries"      },
                { num: "$50M+",  label: lang === "ar" ? "تمويل للعملاء" : "Client Funding"  },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-panel rounded-2xl py-4 px-3">
                  <div className="text-2xl font-extrabold text-gradient-orange">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-lg border-b border-border py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 flex-shrink-0",
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {lang === "ar" ? CATEGORY_LABELS_AR[cat] : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project Grid ── */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    {filtered.map((project, index) => (
      <motion.div
        key={project.name}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "grid lg:grid-cols-2 gap-16 items-center mb-32",
          index % 2 !== 0 && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* Image */}
        <div className="relative group  items-center flex justify-center">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-[40px]" />

          <img
            src={project.image}
            alt={project.name}
            className="
              relative
              w-[50%]
              rounded-[32px]
              shadow-2xl
              group-hover:scale-[1.02]
              transition-all
              duration-500
            "
          />
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
            {project.category}
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            {lang === "ar" ? project.nameAr : project.name}
          </h2>

          <p className="mt-4 text-xl text-muted-foreground">
            {lang === "ar"
              ? project.taglineAr
              : project.tagline}
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {lang === "ar"
              ? project.descriptionAr
              : project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-muted
                  text-sm
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
        {/* ── CTA ── */}
        <section className="bg-secondary py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                {lang === "ar" ? (
                  <>هل أنت مستعد لبناء شيء{" "}<span className="text-gradient-orange">رائع؟</span></>
                ) : (
                  <>Ready to Build Something{" "}<span className="text-gradient-orange">Great?</span></>
                )}
              </h2>
              <p className="text-black/60 mb-8 text-lg">
                {lang === "ar"
                  ? "انضم إلى أكثر من 10,000 عميل يثقون بنا لتقديم حلول رقمية استثنائية."
                  : "Join 10,000+ clients who trust us to deliver exceptional digital solutions."}
              </p>
              <a
                href="https://wa.me/966590534431"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-500/90 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105">
                  {lang === "ar" ? "ابدأ مشروعك الآن" : "Start Your Project"}
                </button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
