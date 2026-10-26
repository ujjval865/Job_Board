// data.js
// Remote Job Board - Static Content Data
import {
  UserRoundPlus,
  SearchCheck,
  Send,
  BriefcaseBusiness,
  Home,
  ShieldCheck,
  Filter,
 RefreshCw,
 DollarSign,
 Globe2 
} from "lucide-react";



export const siteConfig = {
  name: "RemotePeak",
  tagline: "Find Your Dream Remote Job",
  description:
    "Discover thousands of fully remote jobs from top companies worldwide. Work from anywhere, grow faster.",
  url: "https://remotepeak.com",
};


export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];


export const hero = {
  title: "Find Your Perfect Remote Job",
  subtitle:
    "Explore 100,000+ remote opportunities from the world's best companies. Work from anywhere, live on your terms.",
  ctaPrimary: "Browse Jobs",
  ctaSecondary: "How it Works",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80", // team collaboration
  badge: "100% Remote • Verified Companies",
};

export const stats = [
  {
    id: 1,
    value: "114K+",
    label: "Active Remote Jobs",
    icon: "Briefcase",
  },
  {
    id: 2,
    value: "9,500+",
    label: "Companies Hiring",
    icon: "Building2",
  },
  {
    id: 3,
    value: "180+",
    label: "Countries",
    icon: "Globe",
  },
  {
    id: 4,
    value: "92%",
    label: "Success Rate",
    icon: "TrendingUp",
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Create Your Profile",
    description:
      "Sign up in under 2 minutes. Add your skills, experience, and preferred time zones so we can match you with the best roles.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    step: "01",
    icon: UserRoundPlus,
  },
  {
    id: 2,
    title: "Discover Perfect Matches",
    description:
      "Browse curated remote jobs or let our smart filters find roles that match your skills, salary expectations, and lifestyle.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    step: "02",
    icon: SearchCheck,
  },
  {
    id: 3,
    title: "Apply with One Click",
    description:
      "Apply directly to company career pages. Track every application and get notified when companies view your profile.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    step: "03",
    icon: Send,
  },
  {
    id: 4,
    title: "Start Working Remotely",
    description:
      "Land the job, set up your home office, and begin working from anywhere in the world with full flexibility.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    step: "04",
    icon: BriefcaseBusiness,
  },
];

export const features = [
  {
    id: 1,
    title: "100% Remote Only",
    description:
      "Every single job is fully remote. No hybrid, no office days — just pure remote work.",
    icon: Home,
  },
  {
    id: 2,
    title: "Verified Companies",
    description:
      "We only list jobs from real, verified companies. No scams, no fake postings.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Smart Filters",
    description:
      "Filter by salary, seniority, tech stack, time zone, and more in seconds.",
    icon: Filter,
  },
  {
    id: 4,
    title: "Daily Fresh Jobs",
    description:
      "New remote opportunities added every hour from thousands of company career pages.",
    icon: RefreshCw,
  },
  {
    id: 5,
    title: "Salary Transparency",
    description:
      "Most jobs show clear salary ranges so you know what to expect before applying.",
    icon: DollarSign,
  },
  {
    id: 6,
    title: "Global Opportunities",
    description:
      "Work for companies in the US, Europe, Asia, or anywhere — location restrictions clearly shown.",
    icon: Globe2,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Frontend Developer",
    company: "Now at Notion",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content:
      "I found my current remote role within 3 weeks of using RemotePeak. The filters and company verification made the whole process stress-free.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Product Manager",
    company: "Now at Linear",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content:
      "Finally a job board that only shows real remote jobs. No more wasting time on 'remote but only if you live in SF' postings.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sara Chen",
    role: "UX Designer",
    company: "Now at Figma",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    content:
      "The salary transparency and clear location restrictions saved me so much time. Highly recommend for anyone serious about remote work.",
    rating: 5,
  },
];

export const faqs = [
  {
    id: 1,
    question: "Are all jobs on RemotePeak fully remote?",
    answer:
      "Yes. We only list 100% remote positions. If a job requires any office presence, we do not include it.",
  },
  {
    id: 2,
    question: "Is RemotePeak free to use?",
    answer:
      "Completely free for job seekers. You can browse, search, and apply to all jobs without creating an account (though creating one helps you save jobs and get better matches).",
  },
  {
    id: 3,
    question: "How often are new jobs added?",
    answer:
      "We update the job feed continuously. New remote openings appear throughout the day as companies post them.",
  },
  {
    id: 4,
    question: "Do you show salary information?",
    answer:
      "Whenever the company provides it, yes. We display min/max salary, currency, and period (annual/monthly) clearly on every job card.",
  },
  {
    id: 5,
    question: "Can I filter jobs by country or time zone?",
    answer:
      "Absolutely. Use our advanced filters for location restrictions, preferred time zones, seniority, employment type, and categories.",
  },
  {
    id: 6,
    question: "How do I apply to a job?",
    answer:
      "Click on any job and you’ll be taken to the company’s official application page. We never insert ourselves between you and the employer.",
  },
];

export const cta = {
  title: "Ready to work from anywhere?",
  subtitle:
    "Join thousands of professionals who found their dream remote job on RemotePeak.",
  buttonText: "Explore Remote Jobs",
  image:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
};

export const about = {
  heroTitle: "We're on a mission to make remote work accessible to everyone",
  heroSubtitle:
    "RemotePeak was built by remote workers, for remote workers. We believe talent should not be limited by geography.",
  heroImage:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",

  story: {
    title: "Our Story",
    content: [
      "In 2023, our founders were frustrated by job boards that mixed hybrid and office jobs with true remote opportunities. Many 'remote' listings still required living in specific cities.",
      "So we built RemotePeak — a platform dedicated exclusively to 100% remote roles. We pull jobs directly from company career pages and carefully label location and timezone restrictions so you only see jobs you can actually take.",
      "Today we help over 200,000 professionals discover flexible careers with companies that truly embrace remote-first culture.",
    ],
  },

  values: [
    {
      title: "Transparency First",
      description:
        "Clear salary ranges, honest location rules, and no hidden requirements.",
    },
    {
      title: "Quality over Quantity",
      description:
        "We focus on verified, high-quality remote roles instead of flooding you with noise.",
    },
    {
      title: "Worker-Centric",
      description:
        "Every feature is designed to save job seekers time and reduce application fatigue.",
    },
    {
      title: "Global by Default",
      description:
        "Talent is everywhere. We help companies hire the best people regardless of borders.",
    },
  ],

  team: [
    {
      name: "Aarav Mehta",
      role: "Co-Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elena Vargas",
      role: "Co-Founder & Product",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Jordan Lee",
      role: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
  ],
};

export const contact = {
  title: "Get in Touch",
  subtitle:
    "Have a question, partnership idea, or feedback? We’d love to hear from you.",
  email: "hello@remotepeak.com",
  supportEmail: "support@remotepeak.com",
  location: "Fully Remote • Global Team",
  socials: {
    twitter: "https://twitter.com/remotepeak",
    linkedin: "https://linkedin.com/company/remotepeak",
    github: "https://github.com/remotepeak",
  },
  formFields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "subject", label: "Subject", type: "text", required: true },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
    },
  ],
};

export const categories = [
  "Software Development",
  "Product Management",
  "Design",
  "Marketing",
  "Sales",
  "Customer Success",
  "Data Science",
  "DevOps",
  "Content Writing",
  "Finance",
  "HR & Recruiting",
  "Support",
];

export const seniorityLevels = [
  "Junior",
  "Mid-level",
  "Senior",
  "Lead",
  "Staff",
  "Principal",
  "Director",
  "VP",
];

export const employmentTypes = [
  "Full Time",
  "Part Time",
  "Contract",
  "Freelance",
  "Internship",
];