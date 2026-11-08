import { Project, SkillCategory, WPSite, ExperienceItem, EducationItem } from "@/types";

export const projectsData: Project[] = [
  {
    id: 8,
    name: "BiblioDrop – Premium Book Lending & Library Platform",
    image: "/assets/BiblioDrop.png",
    tags: ["Next.js", "MongoDB", "Stripe"],
    stack: "Next.js, React 19, Tailwind CSS, Node.js, Express.js, MongoDB, Better Auth, Stripe, Framer Motion",
    desc: "Full-stack book borrowing and delivery platform with role-based access for Admin, Librarian, and User, Stripe payments (secure checkout sessions with webhook-based async order processing), and advanced analytics dashboards. Includes a paginated catalog with search/filter, buyer-restricted reviews, and a wishlist.",
    challenges: "Debugging MongoDB aggregation pipelines, corrupt documents causing React render errors, and Vercel serverless deployment patterns.",
    live: "https://bibliodrop.vercel.app/",
    github: "https://github.com/muhiuddinshanto/BiblioDrop_Client"
  },
  {
    id: 7,
    name: "YesFashion – eCommerce Platform with Admin Panel",
    image: "/assets/YesFashion.png",
    tags: ["Next.js", "TypeScript", "MySQL"],
    stack: "Next.js 15, React 19, TypeScript, Tailwind CSS v4, HeroUI, Express 5, Prisma, MySQL, Zod",
    desc: "Single-process eCommerce app with a Next.js storefront, admin panel and Express API on one port, so it needs no CORS setup or separate API hosting. Includes multi-category products, auto-generated SEO metadata, sale badges, role-based session auth, AES-256-GCM encrypted payment/SMTP/courier credentials (bKash, Nagad, SSLCommerz, Steadfast), and local or S3 image storage, deployed on Hostinger.",
    live: "https://woocommerce.epicoptimize.com/",
    github: "https://github.com/mohiuddinshanto/epic_store"
  },
  {
    id: 6,
    name: "Epic Optimize – 3D Bilingual Digital Agency Website",
    image: "/assets/EpicOptimize.png",
    tags: ["Next.js", "TypeScript", "Three.js"],
    stack: "Next.js 15 (App Router), TypeScript, Tailwind CSS, Three.js, Zod, Resend",
    desc: "Digital agency website built on the Next.js 15 App Router, with interactive Three.js visuals including a hero core and a wireframe Dhaka globe. Features English/Bengali localization with edge-middleware geo-detection, dark/light/system themes, and reusable UI components like a magnetic button and 3D tilt cards. The contact API has Zod validation, IP rate limiting and honeypot spam protection.",
    live: "https://epicoptimize.com",
    github: "https://github.com/mohiuddinshanto/Epic-Optimize"
  },
  {
    id: 5,
    name: "Dragon News",
    image: "/assets/dragon_news.png",
    tags: ["Next.js", "React"],
    stack: "Next.js 13, React, Tailwind CSS",
    desc: "News web app with category filtering, dynamic routing, and fast responsive UI.",
    challenges: "Next.js App Router dynamic routes and NewsAPI error handling.",
    improvements: "User authentication and dark mode.",
    live: "https://news-next-alpha.vercel.app/",
    github: "https://github.com/muhiuddinshanto/Dragon-News"
  },
  {
    id: 4,
    name: "DocAppoint – Doctor Appointment Booking Platform",
    image: "/assets/DocAppoint.png",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Better Auth"],
    stack: "Next.js 16, React 19, Express.js, MongoDB, Tailwind CSS, Better Auth, Swiper.js",
    desc: "A modern doctor appointment booking interface where patients can browse doctors, view details, and book appointments securely with robust authentication.",
    challenges: "Implementing secure JWT + Google OAuth, real-time search & filtering by name/specialty, and managing full CRUD for appointments with instant UI sync.",
    improvements: "Video consultation integration, payment gateway (SSLCommerz/Stripe), dedicated doctor dashboard, email/SMS reminders, real-time chat.",
    live: "https://doc-appoint-omega.vercel.app",
    github: "https://github.com/muhiuddinshanto/DocAppoint"
  },
  {
    id: 3,
    name: "YouTube Clone",
    image: "/assets/youtube-clone.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Better Auth"],
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS, HeroUI, Better Auth, Node.js, Express, MongoDB",
    desc: "Feature-rich YouTube clone with channel creation, video upload, like/dislike, comments, subscriptions, watch history, and Google OAuth authentication.",
    challenges: "Integrating Better Auth with MongoDB and handling JWT verification between Next.js frontend and Express backend with secure server/client component boundaries.",
    improvements: "Add real video file upload support, notifications system, and video recommendations algorithm.",
    live: "https://youtube-clon-client.vercel.app",
    github: "https://github.com/muhiuddinshanto/youtube_clon_client"
  },
  {
    id: 2,
    name: "Payoo Banking",
    image: "/assets/payoo.jpg",
    tags: ["Vanilla JS", "Tailwind"],
    stack: "HTML5, Tailwind CSS, DaisyUI, JavaScript, LocalStorage",
    desc: "Offline-first banking simulation with a full transaction lifecycle — deposit, cashout, transfer, bill payment, and bonus coupons from one dashboard, with the balance updating instantly after every transaction.",
    challenges: "Managing application state without frameworks and real-time balance updates.",
    improvements: "Backend API integration for full-stack banking.",
    live: "https://muhiuddinshanto.github.io/payoo/home.html",
    github: "https://github.com/muhiuddinshanto/payoo"
  },
  {
    id: 1,
    name: "Tile Gallery",
    image: "/assets/tile_gellery.png",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    stack: "Next.js 16, MongoDB, Better Auth, SwiperJS, Tailwind, DaisyUI",
    desc: "Production-ready tile showcase interface with 3D coverflow slider, smart search/filtering, secure authentication, and server-side rendering.",
    challenges: "Implementing 3D coverflow slider with SwiperJS while maintaining SSR performance.",
    improvements: "AI-based tile visualizer for room preview, admin dashboard, wishlist system.",
    live: "https://tiles-nextjs-brown.vercel.app/",
    github: "https://github.com/muhiuddinshanto/tiles-nextjs"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "fab fa-react",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "Zustand", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Swiper.js", "HeroUI"]
  },
  {
    category: "Backend",
    icon: "fab fa-node-js",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT", "OAuth", "Better Auth"]
  },
  {
    category: "Database",
    icon: "fas fa-database",
    skills: ["MongoDB", "Mongoose"]
  },
  {
    category: "Tools & Platforms",
    icon: "fas fa-screwdriver-wrench",
    skills: ["Git", "GitHub", "Figma", "Vercel", "Hostinger"]
  },
  {
    category: "WordPress & E‑commerce (2022–24)",
    icon: "fab fa-wordpress",
    skills: ["WooCommerce", "Elementor / WoodMart", "CartFlows / Funnels", "Custom Themes & Plugins"]
  }
];

export const wpSites: WPSite[] = [
  { name: "LekhaShikhi", url: "https://lekhashikhi.com/", unique: "Complete e-commerce for handwriting & course notebooks, built with Woo + Elementor. Unique niche targeting students and teachers.", badge: "E‑commerce" },
  { name: "Hibban Fashion", url: "https://hibbanfashion.com/", unique: "Premium panjabi & gift box store. WoodMart theme ensures ultra-fast browsing. Specializes in festive and Islamic clothing.", badge: "Clothing" },
  { name: "Epic Optimize", url: "https://epicoptimize.com/", unique: "Corporate website for a digital marketing agency. Service showcase, lead capture, and performance-optimized design.", badge: "Agency" },
  { name: "Epic Optimize Demo", url: "https://demo1.epicoptimize.com/", unique: "Lead generation landing page for freelancing courses. High converting sections with testimonials and urgency.", badge: "Lead Gen" },
  { name: "Hibban Shop (Panjabi)", url: "https://shop.hibbanfashion.com/", unique: "Single-product sales funnel for panjabi. Uses CartFlows to reduce abandonment and increase conversions.", badge: "Funnel" },
  { name: "Gift Box Funnel", url: "https://shop.hibbanfashion.com/step/gift-box/", unique: "Islamic gift box one‑page checkout. Includes upsells, order bump, and thank you page.", badge: "CartFlows" },
  { name: "LekhaShikhi Bundle", url: "https://bundle.lekhashikhi.com/step/big-book/", unique: "Notebook bundle sales funnel. High average order value with discounted packages.", badge: "Bundle" },
  { name: "Rakib Fashion", url: "https://rakibfashion.com/", unique: "Pyjama product page with custom WooCommerce design. Clean layout, size chart, and easy checkout.", badge: "Product" },
  { name: "Panjabi Premium", url: "https://work.epicoptimize.com/step/panjabi-four/", unique: "High‑end panjabi sales page with urgency design, countdown timer, and social proof.", badge: "Premium" },
  { name: "Al‑Muttaki Gift", url: "https://work.epicoptimize.com/step/al-muttaki/", unique: "Islamic gift package with warm design. CartFlows checkout tailored for Ramadan and Eid promotions.", badge: "Islamic" },
  { name: "Sukkari Mufaddal", url: "https://work.epicoptimize.com/step/sukkari-mufaddal/", unique: "Saudi dates sales page – one‑page checkout optimized for impulse buying. Unique food niche.", badge: "Food" },
  { name: "Black Label Pharma", url: "https://blacklabelpharma.com/", unique: "UK prescription pharmacy. Trust elements, registration required, professional medical e-commerce.", badge: "Pharma" },
  { name: "UK Pills", url: "https://ukpills.com/", unique: "UK‑based medication store with secure checkout and detailed product information.", badge: "Pharma" },
  { name: "USA Pharma Online", url: "https://usapharmaonline.com/", unique: "US‑focused pharmacy with clean design and easy navigation. Specializes in wellness products.", badge: "Pharma" }
];

export const experienceData: ExperienceItem[] = [
  {
    date: "2026 – PRESENT",
    title: "MERN Stack Developer",
    desc: "Building full-stack, production-ready web apps like BiblioDrop, DocAppoint, Woocommerce and YouTube Clone with Next.js, React, Node.js, Express.js and MongoDB — covering REST APIs, authentication flows, Stripe payments and Vercel deployment."
  },
  {
    date: "3-MONTH INTERNSHIP · COMPLETED",
    title: "Frontend Development Intern — TechArenaX",
    desc: "Completed a 3-month frontend development internship at TechArenaX."
  },
  {
    date: "JAN 2026 – JUL 2026",
    title: "Complete Web Development Course (Batch 13) — Programming Hero",
    desc: "Completed the 6-month course — Completion with Excellence."
  },
  {
    date: "2022 – 2024",
    title: "WordPress Frontend & UI Specialist",
    desc: "Built 14+ website frontends (WooCommerce, Elementor, CartFlows) for fashion, pharma, and education sectors. Designed custom themes, responsive layouts, and conversion-focused landing pages."
  }
];

export const educationData: EducationItem[] = [
  {
    level: "Foundation · Intermediate",
    title: "Ibtidaiyah to Sharh-e-Bekaya",
    institution: "Jamiyatul Ibrahim, Sainboard — Qawmi Madrasa"
  },
  {
    level: "Advanced · Bachelor's",
    title: "Mishkat al-Masabih",
    institution: "Jamiyatul Ibrahim, Sainboard — Advanced Hadith Studies"
  },
  {
    level: "Highest · Master's",
    title: "Dawra Hadith",
    institution: "Jamiyatul Ibrahim, Sainboard — Highest Qawmi Level"
  },
  {
    level: "Specialization · Current",
    title: "Ifta — Islamic Jurisprudence",
    institution: "Jamia Mahmudia, Kajlarpar"
  },
  {
    level: "Web Development · Jan 2026 – Jul 2026",
    title: "Complete Web Development Course (Batch 13)",
    institution: "Programming Hero — Completion with Excellence"
  },
  {
    level: "Certification · 2022",
    title: "Computer Office Application",
    institution: "BTEB National Skill Standard — Grade A+"
  }
];

export const heroStats = [
  { count: 15, label: "Projects Built" },
  { count: 14, label: "WP Demos" },
  { count: 3, label: "Years Exp." }
];

export const hobbiesAndSkillsChips = [
  "⚽ Football",
  "📖 Islamic History",
  "🕌 Qira'ah",
  "💻 Open Source",
  "🛠️ Development",
  "✈️ Traveling",
  "📚 Reading",
  "🌐 Bengali (Native)",
  "🌐 English (Professional)"
];
