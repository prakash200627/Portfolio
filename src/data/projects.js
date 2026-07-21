// Project categories
export const categories = [
  "All",
  "AI & ML",
  "DevOps",
  "Full Stack",
  "Frontend",
  "Backend",
];

export const projects = [
  // ─── AI & ML / DevOps (Featured DevOps Projects) ───────────────────────────
  {
    id: 1,
    title: "Smart Queue Manager",
    description:
      "AI-powered queue & token tracking platform using Q-Learning (RL) to route customers to optimal counters and Linear Regression to predict wait times. Real-time WebSocket sync, Prometheus + Grafana monitoring, deployed on AWS EC2 with full CI/CD.",
    tech: ["Python", "Flask", "React", "SocketIO", "ML", "Docker", "AWS EC2", "GitHub Actions"],
    category: ["AI & ML", "DevOps", "Full Stack"],
    badges: ["Featured", "DevOps", "AI"],
    demo: "#",
    github: "https://github.com/prakash200627/smart-queue-manager",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 2,
    title: "VibeNest — Real-Time Chat Platform",
    description:
      "Real-time chat & social platform with FastAPI WebSockets, JWT auth, and PostgreSQL. Dockerized with Nginx reverse proxy, Prometheus + Grafana observability. CI/CD pipeline builds Docker images to Docker Hub and deploys to AWS EC2 on every push.",
    tech: ["FastAPI", "React", "WebSockets", "PostgreSQL", "Docker", "Nginx", "GitHub Actions"],
    category: ["DevOps", "Full Stack"],
    badges: ["Featured", "DevOps"],
    demo: "#",
    github: "https://github.com/prakash200627/vibenest",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
  },
  {
    id: 3,
    title: "Valkey E-Commerce Platform",
    description:
      "E-commerce platform built for the Build Beyond Limits hackathon using Valkey (Redis Stack) — features RediSearch vector similarity search, Redis JSON document store, and Sorted Sets for price filtering. Deployed via GitHub Actions with SHA-tagged Docker images.",
    tech: ["Node.js", "React", "Redis Stack", "RediSearch", "Docker", "GitHub Actions"],
    category: ["DevOps", "Full Stack"],
    badges: ["DevOps", "Hackathon"],
    demo: "#",
    github: "https://github.com/prakash200627/valkey",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
  },
  {
    id: 4,
    title: "Realtime Queue Dashboard",
    description:
      "Queue token tracker with live Socket.IO updates across customer kiosk, operator counters, and the public display board. Full DevOps stack: Docker Compose, PostgreSQL, Redis (Socket.IO message queue), Prometheus + Grafana, GitHub Actions CI/CD.",
    tech: ["Flask", "React", "SocketIO", "PostgreSQL", "Redis", "Docker", "Prometheus"],
    category: ["DevOps", "Full Stack"],
    badges: ["DevOps"],
    demo: "#",
    github: "https://github.com/prakash200627/realtime-queue-dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 5,
    title: "AI Complaint System",
    description:
      "REST API for complaint management with JWT auth and auto-escalation. Dockerized with multi-stage builds (Python/Gunicorn backend + Nginx frontend). GitHub Actions CI/CD: 4 workflows — backend tests, frontend build, Docker validation, and EC2 deploy.",
    tech: ["Flask", "React", "Docker", "Nginx", "GitHub Actions", "PostgreSQL"],
    category: ["DevOps", "Full Stack"],
    badges: ["DevOps"],
    demo: "#",
    github: "https://github.com/prakash200627/ai-complaint-system",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=800&q=80",
  },
  {
    id: 6,
    title: "AI Learning Assistant",
    description:
      "Document intelligence platform where users upload PDFs and the Groq AI API generates flashcards and quizzes. Features Multer file upload with Docker named volume persistence, MongoDB Atlas, JWT auth, Prometheus + Grafana monitoring.",
    tech: ["Node.js", "React", "MongoDB", "Groq AI", "Docker", "Multer", "Prometheus"],
    category: ["AI & ML", "DevOps", "Full Stack"],
    badges: ["Featured", "AI"],
    demo: "#",
    github: "https://github.com/prakash200627/ai-learning-assistant",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
  },

  // ─── AI & ML ────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "AI Career Copilot",
    description:
      "LangGraph-powered AI assistant for full career guidance — resume parsing, skill-gap analysis, job search, curriculum generation, mock interviewing with conversation memory, and technical performance feedback. Built with Gradio UI.",
    tech: ["Python", "LangChain", "LangGraph", "Gemini API", "ChromaDB", "Gradio"],
    category: ["AI & ML"],
    badges: ["AI"],
    demo: "#",
    github: "https://github.com/prakash200627/AI-Career-Copilot",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    id: 8,
    title: "AI eBook Creator",
    description:
      "AI-powered eBook generator where users enter topics and Google Gemini generates chapter outlines and full content. Backend compiles chapters into downloadable PDF and .docx files using PDFKit and node stream buffers.",
    tech: ["Node.js", "React", "Gemini API", "PDFKit", "Tailwind"],
    category: ["AI & ML", "Full Stack"],
    badges: ["AI"],
    demo: "#",
    github: "https://github.com/prakash200627/ai-ebook-creator",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
  },

  // ─── Full Stack ──────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "MyMusic — Streaming Platform",
    description:
      "Full-stack music streaming platform with a high-fidelity React media player, Cloudinary API for audio/artwork hosting, a separate admin panel for CRUD on tracks/albums, and JWT access + refresh token auth.",
    tech: ["Node.js", "React 19", "MongoDB", "Cloudinary", "JWT", "Tailwind"],
    category: ["Full Stack"],
    badges: ["Featured", "Full Stack"],
    demo: "#",
    github: "https://github.com/prakash200627",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
  },
  {
    id: 10,
    title: "CryptoVerse Dashboard",
    description:
      "Cryptocurrency analytics dashboard with real-time market data, historical price charts (Chart.js), and Redux Toolkit state management. Frontend and backend containerized with Docker and deployed on AWS EC2 behind Nginx.",
    tech: ["React", "Redux Toolkit", "Chart.js", "Ant Design", "Docker", "AWS EC2", "Nginx"],
    category: ["Full Stack"],
    badges: ["Full Stack"],
    demo: "#",
    github: "https://github.com/prakash200627/cryptoverse-dashboard",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
  },
  {
    id: 11,
    title: "Hospital Management System",
    description:
      "Database-driven app for managing hospital appointments, doctor schedules, and patient records. Flask REST backend with SQLAlchemy + SQLite and a React frontend portal.",
    tech: ["Flask", "React", "SQLAlchemy", "SQLite"],
    category: ["Full Stack"],
    badges: ["Full Stack"],
    demo: "#",
    github: "https://github.com/prakash200627/hospital-management",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    id: 12,
    title: "Smartail Cricket Team Manager",
    description:
      "Cricket player and team roster administration app using FastAPI backend and Angular CLI frontend. Includes Docker Compose setup for containerized deployment.",
    tech: ["FastAPI", "Angular", "Docker", "Python"],
    category: ["Full Stack", "DevOps"],
    badges: ["Full Stack"],
    demo: "#",
    github: "https://github.com/prakash200627/smartail-cricket-team-manager",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
  },
  {
    id: 13,
    title: "House of Turtles — Jewellery Store",
    description:
      "High-fidelity luxury e-commerce web app for handcrafted 92.5 Sterling Silver and 18K Gold Plated jewellery. Built with Next.js App Router and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: ["Full Stack", "Frontend"],
    badges: ["Full Stack"],
    demo: "#",
    github: "https://github.com/prakash200627/house-of-turtles",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 14,
    title: "Intern Tracker",
    description:
      "Full-stack intern management and tracking system to manage internship applications, status updates, and progress monitoring.",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack"],
    badges: ["Full Stack"],
    demo: "#",
    github: "https://github.com/prakash200627/intern-tracker",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
  },
  {
    id: 15,
    title: "Jewel Pics — Gallery App",
    description:
      "Photo gallery application for jewellery photography with a clean browsing interface and image management features.",
    tech: ["React", "Node.js"],
    category: ["Full Stack"],
    badges: [],
    demo: "#",
    github: "https://github.com/prakash200627",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
  },

  // ─── Backend ─────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "FastAPI Blog Platform",
    description:
      "Template-rendered blog built with FastAPI async lifespans, Jinja2 templates, and async SQLAlchemy. Demonstrates async context managers, Jinja2 rendering, and SQLite/PostgreSQL switching.",
    tech: ["FastAPI", "SQLAlchemy", "Jinja2", "SQLite", "Python"],
    category: ["Backend"],
    badges: ["Backend"],
    demo: "#",
    github: "https://github.com/prakash200627/fastapi-blog",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28fd666b?w=800&q=80",
  },
  {
    id: 17,
    title: "Django Blog",
    description:
      "Standard Django MVT blog illustrating models, views, templates, and the Django admin panel. A classic foundation for understanding Django's full-stack workflow.",
    tech: ["Django", "Python", "SQLite"],
    category: ["Backend"],
    badges: ["Backend"],
    demo: "#",
    github: "https://github.com/prakash200627/django-blog",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
  },
  {
    id: 18,
    title: "Flask Blog",
    description:
      "Flask blog app featuring post editing, user profiles, database migrations with Flask-Migrate, and Jinja2 templating with SQLAlchemy.",
    tech: ["Flask", "SQLAlchemy", "Jinja2", "Python"],
    category: ["Backend"],
    badges: ["Backend"],
    demo: "#",
    github: "https://github.com/prakash200627/flask-blog",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80",
  },
  {
    id: 19,
    title: "Flask Marshmallow Todo API",
    description:
      "Todo REST API showcasing Flask API serialization and schema validation with Flask-Marshmallow. Includes SQLite persistence and CRUD endpoints.",
    tech: ["Flask", "Marshmallow", "SQLite", "Python"],
    category: ["Backend"],
    badges: ["Backend"],
    demo: "#",
    github: "https://github.com/prakash200627/flask-marshmallow-todo",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  },

  // ─── Frontend ────────────────────────────────────────────────────────────────
  {
    id: 20,
    title: "Tax Loss Harvesting Dashboard",
    description:
      "Capital gains dashboard and Tax Loss Harvesting simulator. Lets users model stock sales and compute tax harvesting benefits with real-time calculations and interactive UI.",
    tech: ["React", "Vite", "Tailwind CSS"],
    category: ["Frontend"],
    badges: ["Frontend"],
    demo: "#",
    github: "https://github.com/prakash200627/tax-dashboard",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    id: 21,
    title: "Next.js Shopping Cart",
    description:
      "Interactive e-commerce shopping cart demonstrating Next.js App Router server/client components, state handling, and dynamic product lists with TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: ["Frontend"],
    badges: ["Frontend"],
    demo: "#",
    github: "https://github.com/prakash200627/nextjs-shopcart",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    id: 22,
    title: "Fashion Hub",
    description:
      "Stylish fashion e-commerce frontend with product browsing, category filtering, and a polished UI. Showcases component design and responsive layouts.",
    tech: ["React", "Vite", "CSS"],
    category: ["Frontend"],
    badges: ["Frontend"],
    demo: "#",
    github: "https://github.com/prakash200627/fashion-hub",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 23,
    title: "React Todo App",
    description:
      "Client-side Todo application built with React and Tailwind CSS, demonstrating component architecture, state management with hooks, and local filtering.",
    tech: ["React", "Vite", "Tailwind CSS"],
    category: ["Frontend"],
    badges: [],
    demo: "#",
    github: "https://github.com/prakash200627/react-todo",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  },
  {
    id: 24,
    title: "Static Bitcoin Landing Page",
    description:
      "Static marketing landing page for Bitcoin built with vanilla HTML, CSS, and JavaScript — clean, fast, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend"],
    badges: [],
    demo: "#",
    github: "https://github.com/prakash200627/static-bitcoin",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
  },
  {
    id: 25,
    title: "Food Munch Landing Page",
    description:
      "Restaurant and food delivery static UI template — showcases clean landing page design, responsive grid layouts, and smooth CSS animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend"],
    badges: [],
    demo: "#",
    github: "https://github.com/prakash200627/static-food-munch",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  },
];
