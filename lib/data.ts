import { assetPath } from "./asset-path";

export const personalInfo = {
  name: "Utkarsh Shirbhate",
  role: "AI Automation & Software Engineer | n8n, Python, Node.js",
  bio: "I build LLM-powered automation pipelines and backend systems that cut manual work and run reliably.",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  email: "UtkarshShirbhate1311@gmail.com",
  phone: "+91 7820874588",
  dateOfBirth: "November 13, 2004",

  social: {
    github: "https://github.com/Vukung",
    linkedin: "https://www.linkedin.com/in/UtkarshShirbhate",
    resume: "/Utkarsh%20Shirbhate%20Resume.pdf", // RESUME PDF to public folder
  },

  coordinates: {
    lat: 18.5053,
    lng: 73.8682,

    // 18°30'19.1"N 73°52'05.4"E

  }
};

export const education = [
  {
    year: "2026",
    degree: "B.Tech (Savitribai Phule Pune University)",
    institute: "MIT Academy of Engineering, Pune",
    score: "8.98 CGPA",
    remark: "Pursuing",
  },
  {
    year: "2022",
    degree: "12th (Maharashtra State Board)",
    institute: "Bhartiya Mahavidyalaya, Amravati",
    score: "81%",
    remark: "Distinction",
  },
  {
    year: "2020",
    degree: "10th (Maharashtra State Board)",
    institute: "Golden Kids English School, Amravati",
    score: "85%",
    remark: "Distinction",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "SQL", "C++"],
  aiAutomation: [
    "n8n",
    "LLM Integration (Groq LLaMA 3.1, Llama 3.3 70B)",
    "Prompt Engineering",
    "Event-driven Workflows",
    "LLM Output Validation",
    "Rate-limit and Retry Handling"
  ],
  frameworks: ["React.js", "React Native", "Node.js", "Express.js", "FastAPI", "Vercel AI SDK"],
  backend: [
    "RESTful API Design",
    "JWT Authentication",
    "OAuth 2.0",
    "Role-Based Access Control (RBAC)",
    "Firebase Authentication",
    "Payment Integration (Razorpay)",
    "Postman"
  ],
  databases: ["MySQL", "MongoDB", "Database Schema Design", "Soft Delete Patterns"],
  dataAnalytics: [
    "SQL",
    "Advanced Excel",
    "Power BI",
    "Looker Studio",
    "Google Ads and Meta Ads Data",
    "Funnel Analysis",
    "CPA, CAC and ROAS Analysis"
  ],
  cloud: [
    "AWS (Cloud Practitioner, IAM, S3)",
    "Docker",
    "Linux",
    "Cloudflare Tunnel",
    "Render"
  ],
  dataML: [
    "Data Cleaning & Feature Engineering",
    "Applied ML Pipelines",
    "Model Evaluation (Regression & Classification Metrics)",
    "Hyperparameter Tuning (GridSearchCV)"
  ],
  practices: [
    "Git & GitHub",
    "Code Reviews & Pull Requests",
    "API Security & Token Handling",
    "Reusable Component Design",
    "Open-Source Collaboration",
    "Cursor",
    "GitHub Copilot",
    "Claude"
  ]
};

export const experience = [
  {
    company: "Aristok Technologies",
    role: "Business Analyst Intern",
    duration: "Aug 2025 - Nov 2025",
    period: "4 MONTHS",
    current: false,
    description: "",
    highlights: [
      "Owned and optimized an INR 600K/month performance marketing budget across key client accounts, reallocating spend based on CAC, ROAS and demand trends",
      "Analysed acquisition funnels to find leakage points and cut CPA by 28%",
      "Collected, validated and standardized datasets from Google Ads, Meta Ads and Analytics for accurate reporting",
      "Built Excel tracking models and executive dashboards for spend efficiency, conversion rates and revenue contribution",
      "Forecast campaign demand from historical data to guide budget allocation",
    ],
    skills: ["Google Ads", "Meta Ads", "Advanced Excel", "Funnel Analysis", "Budget Forecasting"],
    logo: assetPath("/aristok_logo.png"),
  },
  {
    company: "PulseOn-EV",
    role: "Technical Intern – Web & Mobile Development",
    duration: "Jun 2025 - Aug 2025",
    period: "2 MONTHS",
    current: false,
    problem: "Bridging the gap for EV users and older demographics to access on-demand charging and vanity vans through a seamless mobile interface.",
    description: "Architected backend APIs and mobile screens for a cross-platform app enabling EV users to request charging and vanity vans, with a focus on accessibility for non-tech-savvy users.",
    highlights: [
      "Developed a secure OAuth & phone-based OTP login system, specifically optimized to improve accessibility for older users",
      "Architected and deployed a real-time driver assignment & tracking system using Google Maps API",
      "Redesigned the booking UI to be more intuitive, resulting in a ~30% reduction in user errors through improved accessibility design",
      "Led the evaluation of multiple payment gateways before spearheading the end-to-end integration of Razorpay for reliable transactions",
      "Created 12+ REST APIs and optimized MongoDB queries for faster data access",
      "Collaborated in a 3-member team using GitHub for code reviews, PRs, and conflict resolution",
    ],
    caseStudy: {
      problemAndConstraints: "Real Users faced challenges with real-time location accuracy and complex payment flows. The core constraint was designing for older, non-tech-savvy users while maintaining system performance and security.",
      architecture: "Built a robust flow from RESTful APIs to MongoDB, integrating real-time tracking via Google Maps API and secure authentication through OAuth and Firebase.",
      keyDecision: "After comparing multiple payment gateways (Stripe, PayU, Razorpay), I led the decision to integrate Razorpay based on its superior Indian market support, competitive pricing, and robust webhook system for transaction reliability.",
      businessImpact: "The improved booking flow reduced user errors by about 30%, while the secure payment integration increased transaction success rates and user trust."
    },
    skills: ["React Native", "Node.js", "MongoDB", "Firebase", "OAuth", "Google Maps API", "Razorpay", "REST APIs"],
    // logo: "/PulseOn-EV Logo.jpg",
    logo: assetPath("/PulseOn-EV Logo.jpg"),
  },
  {
    company: "Campus Credentials",
    role: "Full Stack Development Intern",
    duration: "Jun 2024 - Aug 2024",
    period: "2 MONTHS",
    current: false,
    description: "",
    highlights: [
      "Engineered a full-stack blog platform using React, Node.js and Express.js",
      "Architected a MySQL database with foreign keys and indexing for data integrity",
      "Designed a secure RESTful API with JWT and Bcrypt for user authentication",
      "Built an Admin Dashboard with Role-Based Access Control (RBAC) for content moderation",
    ],
    skills: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Bcrypt", "RBAC"],
    logo: assetPath("/campus_credentials_logo.jpg"),
  },
];

export const openSource = [
  {
    title: "Calendar Wallpaper Generator",
    description: "Contributed to an open-source calendar wallpaper generator. The project is no longer hosted publicly by its maintainer, and my merged pull requests remain visible on GitHub.",
    contributions: [
      "Before/After: Replaced fragmented font handling with a centralized FontPicker component, eliminating 150+ lines of duplicate code and significantly improving maintainability",
      "Feature Engineering: Implemented 9-position layout logic and a scalable canvas-based text overlay system for flexible cross-device rendering",
      "AI Integration: Integrated Groq AI via Vercel AI SDK to enable real-time streaming text updates",
      "Collaborated in a production open-source environment through PR reviews, issues, and maintainer feedback",
    ],
    caseStudy: {
      howIFound: "While experimenting with ways to surface useful information directly on the desktop, I noticed that most interactive wallpaper or widget-based solutions were either resource-heavy or required constant manual setup. To work around this, I had been manually generating quote-based wallpapers, which highlighted a gap between flexibility and usability.\n\nI discovered this project through a post shared by the maintainer in the Developers India community, where it was being actively discussed and used by developers. On exploring the repository and existing discussions, I realized it solved the core problem well but lacked extensibility around text customization and dynamic content. Reviewing the open issues revealed an existing proposal to add quote support, which closely aligned with my use case and made it a strong opportunity for a meaningful contribution.",
      constraintsAndDesign: "The solution needed to support flexible text placement across different screen sizes while remaining lightweight and performant. Additionally, the project roadmap included AI-generated quotes based on user preferences, which required integrating a streaming-capable AI SDK without blocking UI rendering or degrading user experience.",
      // architectureAndImprovements: "Beyond the current implementation, I proposed an API-driven and CLI-based approach to automate daily wallpaper updates. Instead of requiring users to manually download multiple images or manage slideshows, the system would dynamically generate the wallpaper for the current date and update it automatically using OS-specific commands. This design improves reliability, scalability, and cross-platform support while enabling a true “set-it-and-forget-it” experience."
      architectureAndImprovements: "Beyond the current implementation, I initially proposed an approach where users could generate and download a full set of date-specific wallpapers in one batch, with each image visually reflecting the calendar state (past dates crossed out and the current date highlighted). A lightweight OS-level script would then automatically switch the wallpaper daily by matching the current date to the corresponding image.\n\nDuring discussions in the project’s issue tracker, community feedback highlighted potential limitations of this approach around file management, automation reliability, and cross-platform support. Based on this, a more scalable direction emerged: an API-driven and CLI-based solution that dynamically generates the wallpaper for the current date and updates it automatically using OS-specific commands. This design significantly simplifies user setup while improving reliability and extensibility, enabling a true “set-it-and-forget-it” experience.",
    },
    stats: {
      downloads: "300+",
      contributors: 6,
      stars: 17,
    },
    logo: "/wallendar.ico",
    duration: "Dec 2025 - Mar 2026",
    links: {
      github: "https://github.com/shm-dtt/wallendar/pulls?q=is%3Apr+author%3AVukung",
    },
    skills: ["React", "Next.js", "Canvas API", "Vercel AI SDK", "TypeScript"],
  },
];

export const projects = [
  {
    title: "AI Ads Mapping and Category Classification System",
    description: "",
    duration: "March 2026",
    type: "Project",
    highlights: [
      "Found a gap in ad performance analysis caused by missing product-category mapping across Google and Meta campaigns",
      "Built an automated classification, decision and action pipeline that turns unstructured ad data into structured attributes",
      "Cut manual tagging effort by about 80%, saving 6 to 8 hours per client account per week",
      "Handled HTTP 429 rate limits, retries, backoff and partial failures so the workflow runs reliably",
      "Used structured validation and prompt constraints to keep LLM outputs accurate enough for dashboard reporting",
      "Fed the clean data into Looker Studio to compare creative performance across product categories and campaigns",
    ],
    skills: ["n8n", "Groq LLaMA-3.1", "Google Sheets", "Looker Studio", "Docker"],
    links: {
      github: "https://github.com/Vukung/AI-Ad-Mapping-Category-Classification-System",
      live: undefined,
    },
    stats: {
      impact: "~80% less manual tagging effort",
    },
  },
  {
    title: "AI Conversational Sales Agent",
    description: "",
    duration: "August 2026",
    type: "Project",
    highlights: [
      "Built a full-stack conversational sales agent with persona-driven prompting, session management and real-time chat",
      "Designed prompt architecture and output formatting to be voice-channel compatible, with no markdown dependency",
      "Added guardrails for booking-date validation, using regex checks with an LLM-level fallback",
      "Wrote and ran 6 test scenarios, which caught a real opt-out compliance failure that prompting alone had missed, and fixed it",
    ],
    skills: ["Node.js", "Express.js", "Groq API (Llama 3.3 70B)", "Vanilla JS"],
    links: {
      github: "https://github.com/Vukung/northstar-homes-ai-agent",
      live: undefined,
    },
    stats: {
      impact: "6 test scenarios",
    },
  },
  {
    title: "Smart Home Automation System",
    description: "",
    duration: "Feb 2026 - Jun 2026",
    type: "Project",
    highlights: [
      "Set up a smart home system on a Raspberry Pi running Linux, controlling multiple lights, fans, smart plugs and sensors",
      "Used the open-source Home Assistant app on Android and integrated the Google Home app for control from anywhere with internet access",
      "Used a Cloudflare Tunnel to enable secure remote access from outside the home network",
      "Connected devices securely over Wi-Fi and used MQTT for device communication",
    ],
    skills: ["Raspberry Pi", "Linux", "Home Assistant", "Google Home", "MQTT", "Cloudflare Tunnel"],
    links: {
      github: undefined,
      live: undefined,
    },
  },
  {
    title: "Resume Builder Web Application",
    description: "Full-stack application for creating professional resumes with real-time validation and secure file handling",
    duration: "May 2024 - Jul 2024",
    type: "Project",
    highlights: [
      "Engineered secure REST APIs with JWT-based authentication",
      "Modeled normalized MySQL database with 8+ interconnected tables supporting resume content",
      "Implemented CRUD operations with soft-delete patterns and data validation",
      "Handled secure file uploads using Multer with type/size restrictions and automatic cleanup mechanisms",
      "Achieved sub-second response times for form submissions and data fetching",
      "Secured 15+ API endpoints with proper token handling and protected route access",
      "Built real-time validation for 20+ form fields with tooltips and user-friendly feedback",
      "Achieved 95%+ code reusability with modular, maintainable architecture",
      "Reduced user resume creation time by 80% through intuitive backend logic and dynamic data structure",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    links: {
      github: "https://github.com/Vukung/Resume-Builder-Webapp",
      live: undefined,
    },
    stats: {
      impact: "80% reduction in resume creation time",
    },
    logo: "/ResumeRocket.jpg",
  },
  {
    title: "Pune House Price Prediction Model",
    description: "End-to-end ML pipeline for real estate valuations in Pune",
    duration: "Sep 2024 - Oct 2024",
    type: "Project",
    highlights: [
      "Engineered an end-to-end ML pipeline in Python for Pune real estate valuations",
      "Achieved an R² score of 0.55 using real-world, non-linear property datasets",
      "Architected custom cleaning logic to standardize total square feet and complex size strings",
      "Improved training data quality by resolving inconsistent range-based and multi-format inputs",
      "Optimized accuracy using GridSearchCV for hyperparameter tuning across 6+ models",
      "Evaluated performance of XGBoost, Random Forest and KNN regression algorithms",
      "Streamlined deployment by serializing production weights via Pickle",
      "Deployed a responsive web-based prediction interface on the Render cloud platform",
    ],
    skills: ["Python", "Machine Learning", "XGBoost", "Random Forest", "GridSearchCV", "Pickle", "Render"],
    links: {
      live: "https://house-price-prediction-city-pune.onrender.com",
      github: "https://github.com/Vukung/Pune-House-Price-Prediction/tree/master",
    },
    stats: {
      accuracy: "R² score: 0.55",
    },
  },
];

export const leadership = [
  {
    title: "Co-founder, Nekotachi Podcast Community (NPC)",
    year: "2023 to 2025",
    description: "Led a 15-member team to deliver 10+ events on time using a task and status tracking system.",
    type: "Leadership",
  },
  {
    title: "IPL-Style Auction Auctioneer",
    year: "2023",
    description: "Managed as an auctioneer in an IPL-style auction organized by E-CELL MITAOE. Successfully auctioned for 8 teams in front of a 150+ audience. Demonstrated strong communication, negotiation, and public speaking skills.",
    type: "Event Management",
  },
];

export const achievements = [
  {
    title: "17th Rank - State-Level Coding Wars",
    organization: "PCCOE Spectrum",
    year: "2023",
    description: "Attained 17th rank in the State-Level Coding Wars, showcasing exceptional problem-solving and coding skills in a competitive environment.",
    type: "Competition",
  },
  {
    title: "Research Paper: Millet Production Management Using Cloud Computing for Farmers (NCPC 2024)",
    organization: "Sinhgad College of Engineering",
    year: "2024",
    description: "Presented a paper on 'Millet Production Management Using Cloud Computing for Farmers' during National Conference on Power and Control, contributing to research.",
    type: "Academic",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "AWS",
    year: "May 2026",
    description: "Earned the AWS Certified Cloud Practitioner certification, covering cloud fundamentals across compute, storage, networking and security.",
    type: "Certification",
    link: "https://www.credly.com/badges/cec3d94b-537d-4715-9121-1fcbf21eab62",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundation",
    organization: "AWS Academy",
    year: "2024",
    description: "Completed AWS Academy Cloud Foundation certification",
    type: "Certification",
    link: "https://www.credly.com/badges/b3c95ae1-575e-4981-bc6f-4938226d4796",
  },
  {
    title: "AWS Academy Graduate – Data Engineering",
    organization: "AWS Academy",
    year: "2024",
    description: "Completed AWS Academy Data Engineering certification",
    type: "Certification",
    link: "https://www.credly.com/badges/76c261ab-03a6-4d92-9260-c7a4fe0e747a",
  },
  {
    title: "Sentiment Mining from Social Media Platforms: A Tool for Real-Time Opinion Analysis",
    organization: "Springer (ICTCS 2025)",
    year: "2025",
    description: "Co-authored a paper on machine learning and NLP based sentiment analysis of social media using Naive Bayes, published in Springer's ICTCS 2025 proceedings (Lecture Notes in Networks and Systems).",
    type: "Publication",
    link: "https://link.springer.com/book/10.1007/978-3-032-20612-1",
    linkLabel: "View Publication",
  },
];

export const hobbies = ["Gardening", "Basketball", "Photography", "Listening to music"];
