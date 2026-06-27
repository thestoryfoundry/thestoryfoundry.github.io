export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  year: string;
  tier: 1 | 2 | 3;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "ml" | "systems";
}

export const personalInfo = {
  name: "Dixit Kumar",
  role: "Software Engineer",
  company: "Kimbal",
  location: "Noida, India",
  email: "dixitkumar300@gmail.com",
  phone: "+91 7060137673",
  tagline: "Building reliable systems at scale.",
  subTagline: "From embedded firmware to AI-powered web products.",
  github: "https://github.com/Dixit1010",
  linkedin: "https://www.linkedin.com/in/dixitkum",
  portfolio: "https://thestoryfoundry.github.io/",
};

export const stats = [
  { value: "900+", label: "DSA Problems Solved" },
  { value: "0.5%", label: "Amazon ML Top Applicants" },
  { value: "10K+", label: "Lines of Code Refactored" },
  { value: "9", label: "Projects Shipped" },
];

export const roles = [
  "MERN Stack Developer",
  "Embedded Systems Engineer",
  "Full Stack Developer",
  "ML Integration Engineer",
  "Open to Opportunities",
];

export const projects: Project[] = [
  {
    id: "travsy",
    title: "Travsy",
    description: "AI-powered travel planning SaaS that generates complete trip itineraries with hotels, daily plans, and local gems in ~20 seconds.",
    longDescription: `Travsy is an intelligent travel planning SaaS that races multiple AI models (Groq, Gemini, Cerebras via OpenRouter) to generate complete trip itineraries — hotels, daily plans, and local gems — in under 20 seconds.\n\nFeatures a weather-aware packing list generator, boarding pass splash screen, real-time feature flags with admin dashboard, and Google Analytics 4 for user insights. Built with a glassmorphism UI and smooth Framer Motion transitions.\n\nBackend runs on Node.js + Express with Netlify Serverless Functions. Auth via Firebase and Clerk. Data persisted across Firebase Firestore and Supabase (PostgreSQL). Deployed on Netlify.`,
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Firebase", "Supabase", "PostgreSQL", "Node.js", "Express", "Clerk", "Groq", "Gemini", "Cerebras", "Google Analytics 4"],
    year: "2026",
    tier: 1,
    featured: true,
    category: "web",
    liveUrl: "https://travsy.in",
    githubUrl: "https://github.com/Dixit1010/Trav_Plan",
  },
  {
    id: "chatify",
    title: "Chatify",
    description: "Real-time chat with 1:1 and group messaging, typing indicators, online presence, and push notifications.",
    longDescription: "Real-time chat with 1:1 and group messaging, typing indicators, online presence, and push notifications.",
    tech: ["MERN", "Socket.IO", "Tailwind", "JWT"],
    year: "2025",
    tier: 1,
    featured: true,
    category: "web",
  },
  {
    id: "saarthi",
    title: "Saarthi",
    description: "Full-stack job hunt tracker for Indian college students with AI tools, Kanban board, campus placement mode, and admin dashboard.",
    longDescription: `Saarthi is a personal productivity platform built for Indian placement seasons. Track applications across Kanban and timeline views, generate AI cold emails, tailor resumes to any JD, and prep for interviews — all without an email signup.\n\nBuilt with Next.js Server Actions throughout (no separate API layer), JWT auth with session management, ban/impersonate support, and a full admin dashboard with user analytics and maintenance mode.\n\nProduction hardened: auth guards on all AI routes, MongoDB connection pooling with indexes and data projections, N+1 query fixes, and mobile-responsive dark/light UI with Framer Motion.`,
    tech: ["Next.js", "TypeScript", "MongoDB Atlas", "JWT", "Groq AI", "Gemini AI", "Framer Motion", "Vercel"],
    year: "2026",
    tier: 1,
    featured: true,
    category: "web",
    liveUrl: "https://saarthi-tracker.vercel.app",
    githubUrl: "https://github.com/Dixit1010/Assistant",
  },
  {
    id: "hirexx",
    title: "Hirexx",
    description: "Production-grade job portal with RBAC, real-time search, Clerk OAuth, and 10+ type-safe REST endpoints.",
    longDescription: "Production-grade job portal with RBAC, real-time search, Clerk OAuth, and 10+ type-safe REST endpoints.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "TanStack Query", "Zod"],
    year: "2026",
    tier: 1,
    featured: true,
    category: "web",
    liveUrl: "https://hirexx.vercel.app/",
    githubUrl: "https://github.com/Dixit1010/job_portal",
  },
  {
    id: "tradebook",
    title: "TradeBook",
    description: "Next.js stock trading journal with live market data, interactive charts, trade categorization, and profitability insights.",
    longDescription: "Quant TradeBook is a Next.js-powered stock trading journal and analytics platform that enables traders to log and analyze their trades in real-time. Integrated with market data APIs, it fetches live stock information and visualizes performance trends through interactive charts and graphs. The platform provides trade categorization, filtering, and profitability insights to help traders make data-driven decisions.",
    tech: ["Next.js", "Market APIs", "Charts"],
    year: "2024",
    tier: 2,
    featured: false,
    category: "web",
    githubUrl: "https://github.com/Dixit1010/Quant_TradeBook.git",
    liveUrl: "https://drive.google.com/file/d/11VOTnOQxjevLqFS0JxMz4_NV5F7k0BYg/view?usp=sharing",
  },
  {
    id: "plant-ai",
    title: "Plant AI",
    description: "CNN image classifier with 98% accuracy across 38 plant disease classes using ResNet34 transfer learning.",
    longDescription: "Used the plant disease dataset from Kaggle and trained an image classifier model using the PyTorch framework with CNN and Transfer Learning across 38 classes of various plant leaves. The model successfully detects diseased and healthy leaves of 14 unique plants, achieving 98% accuracy using a ResNet34 pretrained model.",
    tech: ["PyTorch", "CNN", "Transfer Learning", "ResNet34", "Python"],
    year: "2024",
    tier: 2,
    featured: false,
    category: "ml",
    liveUrl: "https://plant49-ai.herokuapp.com/",
  },
  {
    id: "wordoodle",
    title: "Wordoodle",
    description: "Wordle-inspired word game with 4 difficulty levels (3–6 letter words) and 5 guesses per round.",
    longDescription: "Wordoodle is a Wordle-inspired browser word game built for fun. Features 4 levels of increasing difficulty — from 3-letter to 6-letter words — with an on-screen keyboard, guess tracking, and a restart flow. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2024",
    tier: 2,
    featured: false,
    category: "web",
    liveUrl: "https://wordoodle-lovat.vercel.app/",
    githubUrl: "https://github.com/Dixit1010/Wordoodle",
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description: "Interactive visualizer for Bubble Sort, Merge Sort, and Quick Sort with real-time step-by-step animation.",
    longDescription: "A sorting visualizer that brings algorithms to life. This interactive tool visually demonstrates sorting techniques like Bubble Sort, Merge Sort, and Quick Sort in real time, helping users understand their step-by-step operations. Perfect for learning, debugging, and exploring algorithm efficiency.",
    tech: ["JavaScript", "HTML Canvas"],
    year: "2023",
    tier: 2,
    featured: false,
    category: "web",
    githubUrl: "https://github.com/Dixit1010/sorting-visualizer-.git",
    liveUrl: "https://sorting-visualizzeer.netlify.app/",
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    description: "ML regression model predicting used car prices based on features like brand, mileage, age, and condition.",
    longDescription: "A car price prediction model that uses machine learning regression algorithms to predict the price of a car based on its features. Trained on a real-world dataset of car prices, covering features like brand, mileage, age, and condition to produce accurate market price estimates.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    year: "2023",
    tier: 3,
    featured: false,
    category: "ml",
    githubUrl: "https://github.com/Dixit1010/Car-Prices-Prediction.git",
  },
];

export const experience = [
  {
    company: "Kimbal",
    role: "Software Developer",
    period: "Jan 2025 – Present",
    location: "Noida",
    type: "full-time",
    highlights: [
      "Refactored 10,000+ lines of embedded C middleware for RL78/I1C smart meters, reducing memory footprint by 25% and raising packet reliability from 60% to 95%.",
      "Built Windows desktop automation framework using C# .NET, WPF, and MVVM for RF/4G module testing; automated 8 critical test sequences.",
      "Reduced firmware variants from 20+ to a single binary via production configuration system for smart meters.",
      "Python CLI tools and bash scripts reduced manual QA effort by 66% and boosted testing throughput by 3x.",
      "Engineered real-time optical pulse decoding system integrated with internal ML labeling pipelines, increasing data processing throughput by 2x.",
    ],
  },
  {
    company: "Amazon ML Summer School",
    role: "Mentee, Applied ML Program",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    type: "program",
    highlights: [
      "Selected among the top 0.5% of 80,000+ applicants.",
      "Built end-to-end ML pipelines using Python, Scikit-learn, Pandas, Flask APIs.",
      "Deployed ML models on AWS SageMaker for real-time predictions.",
    ],
  },
];

export const skills = {
  web: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Framer Motion"],
  systems: ["C", "C++", "C#", ".NET", "WPF", "MVVM", "RTOS", "UART", "RL78"],
  ml: ["Python", "PyTorch", "Scikit-learn", "Flask", "AWS SageMaker", "Pandas"],
  tools: ["Git", "Postman", "Vercel", "Render", "Cloudinary", "MongoDB Atlas"],
};

export const education = {
  institution: "Netaji Subhas University of Technology (NSUT)",
  degree: "B.Tech in Electronics and Communication Engineering",
  period: "Aug 2021 – May 2025",
  location: "Delhi, India",
  cgpa: "7.3/10",
  coursework: ["OS", "DBMS", "CN", "Software Engineering", "Algorithms"],
};
