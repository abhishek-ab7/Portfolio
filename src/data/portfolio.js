export const profile = {
  name: "Abhishek Saini",
  role: "Full-Stack Software Engineer",
  headline:
    "I build secure full-stack products, AI-assisted productivity tools, realtime systems, and scalable internal platforms with production-minded architecture.",
  location: "Roorkee, Uttarakhand, India",
  availability: "Open to SDE, Full-Stack, and MERN opportunities",
  email: "abhishek79saini@gmail.com",
  phone: "+91 79068 28283",
  github: "https://github.com/abhishek-ab7",
  linkedin: "https://www.linkedin.com/in/abhishek79saini/",
  resume: "/Abhishek-Saini-Resume.pdf",
  stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Redis", "Docker"],
};

export const proofMetrics = [
  { value: "300+", label: "DSA problems solved", detail: "LeetCode + Codeforces practice" },
  { value: "5", label: "production-style builds", detail: "CRM, PMS, AI habits, commerce, and realtime systems" },
  { value: "10K+", label: "daily API requests supported", detail: "Redis-backed CRM API caching work" },
  { value: "80%", label: "automated test coverage target", detail: "Jest/Vitest CI pipeline experience" },
];

export const capabilities = [
  {
    title: "Full-stack product delivery",
    summary: "Next.js and React interfaces backed by Node/Express APIs, authentication, dashboards, and database-backed workflows.",
    proof: "Used in CRM, project-management, AI productivity, commerce, and chat products.",
    tools: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Real-time systems",
    summary: "Event-driven features for chat, live location tracking, realtime subscriptions, and high-read workflow dashboards.",
    proof: "Built live messaging, geolocation broadcast flows, and Supabase realtime product interactions.",
    tools: ["Socket.IO", "WebSockets", "Supabase Realtime", "Leaflet", "Geolocation API"],
  },
  {
    title: "Secure API architecture",
    summary: "JWT-protected routes, granular RBAC, role-aware admin flows, input validation plans, and separation of controller/service concerns.",
    proof: "Applied across CRM, project-management, commerce, and messaging projects.",
    tools: ["JWT", "RBAC", "REST", "Middleware", "Protected Routes"],
  },
  {
    title: "Engineering documentation",
    summary: "Dockerized environments, CI/CD, case studies, setup notes, API maps, and tradeoff explanations that make implementation decisions auditable.",
    proof: "Reduced onboarding and deployment friction with containerized workflows and automated checks.",
    tools: ["Docker", "Podman", "GitHub Actions", "Jest", "Vitest"],
  },
];

export const projects = [
  {
    id: "habitflow",
    title: "HabitFlow — AI-Powered Productivity Platform",
    eyebrow: "AI · Gamification · Supabase",
    role: "Full-stack AI product developer",
    description:
      "An AI-assisted habit platform that generates personalized schedules, tracks progress, and motivates users with XP, levels, streaks, and realtime feedback.",
    problem:
      "Users often abandon habit tools when setup feels manual, progress feedback is delayed, or habit tracking lacks motivation loops.",
    impact: "Integrated Gemini AI to reduce setup time by 40% and engineered gamification flows designed to improve 7-day retention from 22% to 68%.",
    image: "/projects/habitflow.svg",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Supabase", "@dnd-kit", "Tailwind"],
    demoUrl: "https://habit-flow-ochre-two.vercel.app/",
    githubUrl: "https://github.com/abhishek-ab7/HabitFlow",
    slug: "/projects/habitflow",
    stackWhy: [
      ["Next.js + TypeScript", "Typed full-stack product surface for habit dashboards, onboarding flows, and production-ready routing."],
      ["Gemini AI", "Personalized habit schedule generation that reduces blank-page setup friction for new users."],
      ["Supabase", "Database triggers and realtime subscriptions for XP, levels, streaks, and progress updates."],
      ["@dnd-kit", "Accessible drag-and-drop interactions with optimistic UI updates across desktop and mobile."],
    ],
    architecture: [
      "Next.js renders onboarding, routine planning, habit boards, and progress dashboards.",
      "Gemini-powered flows transform user goals into personalized habit schedules.",
      "Supabase persists habits, completions, XP, levels, streaks, and profile state.",
      "Realtime subscriptions and optimistic updates keep progress feedback fast during drag-and-drop and completion actions.",
    ],
    challenges: [
      ["AI output must feel immediately useful", "Constrain prompts around user goals and transform generated schedules into editable habit objects."],
      ["Gamification requires consistent state", "Use database-backed completion and streak logic so XP, levels, and retention loops stay reliable."],
      ["Drag-and-drop can feel sluggish", "Apply optimistic UI updates and keep interactions responsive with sub-50 ms feedback targets."],
    ],
    endpoints: ["POST /api/ai/generate-schedule", "GET /habits", "POST /habit-completions", "supabase: realtime changes", "PATCH /routines/:id"],
    schema: ["Profile", "Habit", "Routine", "HabitCompletion", "XPEvent", "Streak"],
  },
  {
    id: "project-management-system",
    title: "Nexus Project Management System",
    eyebrow: "PMS · Auth · Messaging",
    role: "Full-stack platform developer",
    description:
      "A premium project-management system for modern teams with kanban boards, task lists, subtasks, realtime messaging, local attachments, and self-hosted persistence.",
    problem:
      "Teams need one secure workspace for project planning, messaging, task ownership, and file-backed collaboration without depending on a third-party backend platform.",
    impact: "Built a self-hosted PMS architecture with PostgreSQL, Prisma, Auth.js, optimized Next.js App Router flows, and local attachment storage for team autonomy.",
    image: "/projects/nexus-pms.svg",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Tailwind"],
    githubUrl: "https://github.com/abhishek-ab7/Product_management_system",
    slug: "/projects/project-management-system",
    stackWhy: [
      ["Next.js App Router", "Server-first routing and optimized UI delivery for dashboards, kanban boards, task details, and messaging views."],
      ["PostgreSQL + Prisma", "Relational project, task, membership, message, and attachment models with type-safe data access."],
      ["Auth.js", "Secure authentication with GitHub and email providers for team workspace access."],
      ["Local file storage", "Attachment support that keeps files and message metadata under self-hosted infrastructure control."],
    ],
    architecture: [
      "Next.js app workspace renders project dashboards, boards, task lists, subtasks, and messaging screens.",
      "Auth.js manages secure sessions and provider-based login for team members.",
      "Prisma coordinates PostgreSQL models for users, projects, memberships, tasks, subtasks, messages, and attachments.",
      "Local upload storage supports message attachments and user files with deploy-time persistence considerations.",
    ],
    challenges: [
      ["Project tools need trustworthy authorization", "Model users, memberships, roles, and project access checks close to server actions and API boundaries."],
      ["Messaging needs durable context", "Store message metadata and attachment references in PostgreSQL while keeping files in local upload storage."],
      ["Complex task state can sprawl", "Separate kanban, task-list, subtask, and detail flows into typed data models and reusable workspace UI."],
    ],
    endpoints: ["GET /projects", "POST /tasks", "PATCH /tasks/:id", "POST /messages", "POST /uploads"],
    schema: ["User", "Project", "Membership", "Task", "Subtask", "Message", "Attachment"],
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce Platform",
    eyebrow: "Payments · Admin · Orders",
    role: "Full-stack developer",
    description:
      "A production-style storefront with secure user sessions, product catalog, cart, Razorpay checkout, admin dashboard, and order management.",
    problem:
      "Small commerce teams need a reliable storefront that handles customer checkout, order state, and admin operations without manual coordination.",
    impact: "Reduced manual order-management effort by an estimated 25% through admin workflows and status visibility.",
    image: "/projects/project_1.png",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Tailwind", "Razorpay"],
    demoUrl: "https://e-commerce-mauve-eight.vercel.app/",
    githubUrl: "https://github.com/abhishek-ab7/E-commerce",
    slug: "/projects/ecommerce",
    stackWhy: [
      ["React + Redux", "Predictable product, cart, session, and checkout state across a multi-step buying journey."],
      ["Node + Express", "Fast REST API development with route-level middleware for auth, users, products, orders, and admin actions."],
      ["MongoDB", "Flexible product/order documents that can evolve quickly while keeping commerce workflows simple."],
      ["Razorpay", "Payment integration aligned with Indian checkout expectations and order verification flows."],
    ],
    architecture: [
      "React client renders catalog, cart, checkout, and admin dashboard views.",
      "Express API separates auth, product, order, and payment route groups.",
      "JWT/session middleware protects customer and admin endpoints.",
      "MongoDB stores users, products, orders, payment state, and admin-managed status transitions.",
    ],
    challenges: [
      ["Payment state can become inconsistent", "Persist pending orders and verify successful payment server-side before marking an order as paid."],
      ["Admin and user permissions overlap", "Separate role checks from authentication so privileged dashboard routes stay isolated."],
      ["Cart state affects checkout reliability", "Centralize cart state and validate final order payload again on the server."],
    ],
    endpoints: ["POST /api/auth/login", "GET /api/products", "POST /api/orders", "POST /api/payments/verify", "PATCH /api/admin/orders/:id"],
    schema: ["User", "Product", "Cart", "Order", "Payment"],
  },
  {
    id: "location-tracking",
    title: "Live Location Tracking App",
    eyebrow: "Realtime · Maps · Geolocation",
    role: "Backend/realtime-focused developer",
    description:
      "A real-time map application that captures browser geolocation updates and broadcasts them to connected clients on an OpenStreetMap-powered interface.",
    problem:
      "Teams need low-friction visibility into moving users or assets without refreshing dashboards or polling APIs.",
    impact: "Designed a realtime broadcast pipeline for high-accuracy location updates and shared map visibility.",
    image: "/projects/project_2.png",
    tags: ["Node.js", "Express", "Socket.IO", "JavaScript", "Leaflet", "Geolocation API"],
    demoUrl: "https://live-location-tracking-rj87.onrender.com/",
    githubUrl: "https://github.com/abhishek-ab7/Live-Location-tracking",
    slug: "/projects/location-tracking",
    stackWhy: [
      ["Socket.IO", "Bidirectional event transport for live location updates without wasteful HTTP polling."],
      ["Leaflet", "Lightweight map rendering with OpenStreetMap support and strong browser compatibility."],
      ["Geolocation API", "Native browser access to latitude/longitude data with permission-aware UX."],
      ["Express", "Simple server layer to host client assets and coordinate realtime socket events."],
    ],
    architecture: [
      "Browser requests geolocation permission and watches coordinate changes.",
      "Client emits location payloads to a Socket.IO server with user/session identity.",
      "Server broadcasts normalized coordinates to active map subscribers.",
      "Leaflet updates markers and viewport state without full-page refreshes.",
    ],
    challenges: [
      ["Location streams can become noisy", "Throttle update frequency and send only useful coordinate deltas."],
      ["Users may deny permissions", "Design fallback states that explain why location access is needed."],
      ["Multiple users require marker identity", "Attach connection/user identifiers to broadcast events and marker state."],
    ],
    endpoints: ["GET /", "socket: connection", "socket: send-location", "socket: receive-location", "socket: disconnect"],
    schema: ["Connection", "UserMarker", "LocationEvent"],
  },
  {
    id: "chat",
    title: "Real-Time Chat Application",
    eyebrow: "Socket.IO · JWT · Messaging",
    role: "Full-stack realtime developer",
    description:
      "A private messaging app with JWT authentication, low-latency Socket.IO delivery, and MongoDB-backed chat history.",
    problem:
      "Users need private realtime conversations that remain available after reconnects and page refreshes.",
    impact: "Built a recoverable chat experience with persistent message history and realtime delivery semantics.",
    image: "/projects/Project_3.png",
    tags: ["React", "Material UI", "Node.js", "MongoDB", "Express", "Socket.IO", "JWT"],
    demoUrl: "https://mern-chat-bwlm.onrender.com/",
    githubUrl: "https://github.com/abhishek-ab7/MERN-Chat",
    slug: "/projects/chat",
    stackWhy: [
      ["Socket.IO", "Realtime message delivery, connection lifecycle events, and room/user channel patterns."],
      ["JWT", "Stateless authentication for protected chat APIs and session restoration."],
      ["MongoDB", "Flexible message documents and conversation history persistence."],
      ["React", "Componentized conversation list, message pane, and auth-driven UI states."],
    ],
    architecture: [
      "React manages auth, conversation selection, and realtime message state.",
      "Express exposes auth, user, conversation, and message APIs.",
      "Socket.IO maps connected users to delivery channels and emits message events.",
      "MongoDB persists users, conversations, and messages for recoverability.",
    ],
    challenges: [
      ["Messages must persist after realtime delivery", "Write message records to MongoDB and use socket events for live updates."],
      ["Private conversations need authorization", "Protect REST routes and socket actions with authenticated user context."],
      ["Reconnects can miss messages", "Load persisted conversation history on page refresh or reconnect."],
    ],
    endpoints: ["POST /api/auth/login", "GET /api/users", "GET /api/messages/:id", "POST /api/messages", "socket: send-message"],
    schema: ["User", "Conversation", "Message", "SocketSession"],
  },
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: ["Next.js", "React", "TypeScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
    evidence: "Built AI productivity, PMS, CRM, storefront, chat, admin, and dashboard flows with reusable components and stateful interactions.",
  },
  {
    title: "Backend APIs",
    skills: ["Node.js", "Express", "REST APIs", "JWT", "RBAC", "Middleware"],
    evidence: "Implemented auth, products, orders, payment verification, messages, RBAC, caching, and realtime coordination endpoints.",
  },
  {
    title: "Realtime & Browser APIs",
    skills: ["Socket.IO", "WebSockets", "Supabase Realtime", "Geolocation API", "Leaflet", "@dnd-kit"],
    evidence: "Designed event flows for private chat, live location broadcasting, realtime subscriptions, and fast drag-and-drop interactions.",
  },
  {
    title: "Data & Persistence",
    skills: ["PostgreSQL", "Prisma", "MongoDB", "Redis", "Supabase", "Schema Design"],
    evidence: "Modeled users, projects, tasks, messages, habits, streaks, products, orders, payments, conversations, and cache-heavy CRM API flows.",
  },
  {
    title: "DevOps & Workflow",
    skills: ["Docker", "Podman", "Git", "GitHub Actions", "Postman", "Linux"],
    evidence: "Containerized development and production environments, documented API workflows, and wired automated checks into CI/CD pipelines.",
  },
  {
    title: "Problem Solving",
    skills: ["C++", "JavaScript", "TypeScript", "SQL", "DSA"],
    evidence: "Ranked 128 out of 15,931 participants in CodeChef Starters 67 and placed 6th in Manthan 2022.",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Ispecia Technologies Pvt Ltd.",
    period: "Nov 2025 – Present",
    location: "Dehradun, Uttarakhand",
    bullets: [
      "Architected a scalable monorepo for an internal CRM platform using TurboRepo, separating the Next.js frontend and Node.js/Express backend services for improved maintainability and faster frontend deployments.",
      "Dockerized development and production environments using multi-stage Docker and Podman builds, reducing developer onboarding from 2 days to 2 hours and eliminating environment inconsistencies across a four-member team.",
      "Implemented a Redis-based caching layer for high-read CRM APIs handling 10K+ requests daily, reducing average response time from 800ms to 120ms and cutting database load by 65%.",
      "Designed and developed a granular Role-Based Access Control (RBAC) system using JWT and custom middleware to securely manage Admin, Manager, and User access.",
      "Established a CI/CD pipeline using GitHub Actions with automated testing (Jest/Vitest), achieving 80% code coverage and reducing deployment time from 45 minutes to 8 minutes.",
    ],
  },
  {
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    period: "Mar 2025 – Apr 2025",
    location: "Remote",
    bullets: [
      "Contributed to fintech-facing web workflows with attention to maintainability, state handling, and reliable UI behavior.",
      "Practiced production collaboration habits: readable commits, issue-focused implementation, and iterative delivery.",
      "Strengthened full-stack debugging by tracing frontend states through API responses and user-facing outcomes.",
    ],
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Microdot Tech Aspire Solutions (P) Ltd.",
    period: "Jun 2023 – Aug 2023",
    location: "Noida, UP",
    bullets: [
      "Built responsive web interfaces and integrated application features across client and server concerns.",
      "Applied Git-based collaboration, component decomposition, and reusable UI patterns in project delivery.",
      "Improved practical understanding of API integration, deployment readiness, and full-stack feature ownership.",
    ],
  },
];

export const engineeringNotes = [
  {
    slug: "/blog/socketio-chat-architecture",
    title: "Designing Socket.IO flows for private chat",
    summary: "How authenticated users, socket sessions, message persistence, and reconnect behavior fit together.",
    tags: ["Socket.IO", "JWT", "MongoDB"],
    readTime: "5 min read",
  },
  {
    slug: "/blog/razorpay-ecommerce-payment-flow",
    title: "Payment lifecycle design for a MERN commerce app",
    summary: "A walkthrough of pending orders, payment verification, admin status changes, and failure states.",
    tags: ["Razorpay", "Orders", "REST APIs"],
    readTime: "6 min read",
  },
  {
    slug: "/blog/live-location-system-design",
    title: "Building a live location tracking system",
    summary: "Design notes for geolocation permissions, event throttling, marker state, and map rendering.",
    tags: ["Geolocation", "Leaflet", "Realtime"],
    readTime: "4 min read",
  },
];

export const repoQuality = [
  "README with setup, architecture, API map, and screenshots",
  "Environment variables documented instead of hard-coded secrets",
  "Build and lint checks wired into CI",
  "Case-study links from deployed portfolio to source code",
  "Architecture diagrams close to implementation details",
];
