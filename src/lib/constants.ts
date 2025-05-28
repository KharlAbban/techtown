export const APP_TITLE = "TechTown";
export const APP_TAGLINE = "Building Tomorrow's Tech Leaders";
export const APP_DESCRIPTION =
  "Fostering innovation and building tomorrow's tech leaders through cutting-edge research, industry collaboration, and community engagement. Discover groundbreaking projects, innovative research, and collaborative partnerships that are transforming our city into a thriving technology hub.";
export const APP_KEYWORDS =
  "university, technology, innovation, research, projects, tech town";

// URLs
export const APP_BASE_URL = "https://techtown-seven.vercel.app";

export const APP_LOGO_URL = "/logos/logo.png";
export const APP_LOGO_OG_URL = "/logos/logo_og.png";

export const RELATIVE_PATHS = {
  home: "/",
  projects: "/projects",
  articles: "/articles",
  events: "/events",
  partners: "/partners",
  about: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  cookiePolicy: "/cookie-policy",
};

export const NAV_ITEMS = [
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Events", href: "/events" },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_CONTENT = {
  footerSections: [
    {
      title: "Miscallenous",
      links: ["About Us", "Mission & Vision", "Faculty", "Research", "Campus"],
    },
    {
      title: "Innovation",
      links: ["Projects", "Labs", "Incubator", "Articles", "Publications"],
    },
    {
      title: "Community",
      links: ["Events", "News", "Partners", "Alumni", "Careers"],
    },
    {
      title: "Resources",
      links: ["Contact", "Support", "Guidelines"],
    },
  ],
  legal: [
    {
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      text: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      text: "Cookie Policy",
      href: "/cookie-policy",
    },
  ],
};

export const FEATURED_PROJECTS = [
  {
    title: "AI-Powered Smart City Platform",
    description:
      "Developing intelligent urban solutions using machine learning and IoT sensors to optimize city operations.",
    category: "Research",
    image: "/images/placeholder.svg?height=300&width=400",
    tags: ["AI", "IoT", "Smart City"],
  },
  {
    title: "Sustainable Energy Management System",
    description:
      "Student-led project creating renewable energy optimization algorithms for campus buildings.",
    category: "Student Project",
    image: "/images/placeholder.svg?height=300&width=400",
    tags: ["Sustainability", "Energy", "Algorithms"],
  },
  {
    title: "Healthcare Data Analytics Platform",
    description:
      "Collaborative research improving patient outcomes through advanced data insights and predictive modeling.",
    category: "Faculty Research",
    image: "/images/placeholder.svg?height=300&width=400",
    tags: ["Healthcare", "Data Science", "Analytics"],
  },
];

export const FEATURED_EVENTS = [
  {
    title: "Tech Innovation Summit 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "University Main Auditorium",
    description:
      "Annual summit bringing together industry leaders, researchers, and students.",
  },
  {
    title: "AI & Machine Learning Workshop",
    date: "March 22, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Computer Science Building",
    description:
      "Hands-on workshop covering the latest in AI and ML technologies.",
  },
];

export const LATEST_ARTICLES = [
  {
    id: 1,
    title: "The Rise of AI in Urban Planning: A Local Perspective",
    excerpt:
      "How our university researchers are pioneering artificial intelligence solutions for smarter city development and sustainable growth.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    category: "AI Research",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Tomorrow's Tech Workforce Today",
    excerpt:
      "Exploring innovative educational approaches and industry partnerships that are preparing students for the future of technology.",
    author: "Prof. Michael Rodriguez",
    date: "March 12, 2024",
    category: "Education",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Sustainable Technology: From Lab to Market",
    excerpt:
      "Success stories of clean technology innovations developed at our university that are making real-world impact.",
    author: "Dr. Emily Thompson",
    date: "March 10, 2024",
    category: "Sustainability",
    readTime: "6 min read",
  },
];

export const PARTNERS = [
  { name: "TechCorp Industries", logo: "TC", tier: "Platinum" },
  { name: "Innovation Labs", logo: "IL", tier: "Gold" },
  { name: "Future Systems", logo: "FS", tier: "Gold" },
  { name: "Digital Solutions", logo: "DS", tier: "Silver" },
  { name: "Smart City Initiative", logo: "SC", tier: "Silver" },
  { name: "Green Energy Co", logo: "GE", tier: "Silver" },
  { name: "AI Research Foundation", logo: "AR", tier: "Bronze" },
  { name: "Biotech Ventures", logo: "BV", tier: "Bronze" },
];
