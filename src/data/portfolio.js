export const profile = {
  name: "Abhishek Saini",
  role: "Full-Stack Software Engineer",
  headline:
    "I build secure MERN products, real-time systems, and polished web experiences with production-minded architecture.",
  location: "Roorkee, Uttarakhand, India",
  availability: "Open to SDE, Full-Stack, and MERN opportunities",
  email: "abhishek79saini@gmail.com",
  phone: "+91 79068 28283",
  github: "https://github.com/abhishek-ab7",
  linkedin: "https://www.linkedin.com/in/abhishek79saini/",
  resume: "/Abhishek-Saini-Resume.pdf",
  stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "REST APIs", "JWT", "Tailwind"],
};

export const proofMetrics = [
  { value: "300+", label: "DSA problems solved", detail: "LeetCode + Codeforces practice" },
  { value: "3", label: "production-style builds", detail: "commerce, chat, and location systems" },
  { value: "25%", label: "manual-work reduction", detail: "estimated admin workflow improvement" },
  { value: "<100ms", label: "real-time event target", detail: "Socket.IO interaction design goal" },
];

export const capabilities = [
  {
    title: "Full-stack product delivery",
    summary: "React interfaces backed by Node/Express APIs, authentication, dashboards, and database-backed workflows.",
    proof: "Used in the e-commerce platform and chat app.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Redux"],
  },
  {
    title: "Real-time systems",
    summary: "Event-driven features for chat and live location tracking using Socket.IO, browser APIs, and map rendering.",
    proof: "Built live messaging and geolocation broadcast flows.",
    tools: ["Socket.IO", "WebSockets", "Leaflet", "Geolocation API"],
  },
  {
    title: "Secure API architecture",
    summary: "JWT-protected routes, role-aware admin flows, input validation plans, and separation of controller/service concerns.",
    proof: "Applied across auth-heavy MERN projects.",
    tools: ["JWT", "REST", "Middleware", "Protected Routes"],
  },
  {
    title: "Engineering documentation",
    summary: "Case studies, diagrams, setup notes, API maps, and tradeoff explanations that make implementation decisions auditable.",
    proof: "Portfolio now documents architecture and decisions directly.",
    tools: ["README", "Mermaid", "System Design", "CI"],
  },
];

export const projects = [
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
    skills: ["React", "Redux", "Tailwind CSS", "Material UI", "Responsive UI"],
    evidence: "Built storefront, chat, admin, and dashboard flows with reusable components and stateful interactions.",
  },
  {
    title: "Backend APIs",
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Middleware"],
    evidence: "Implemented auth, products, orders, payment verification, messages, and realtime coordination endpoints.",
  },
  {
    title: "Realtime & Browser APIs",
    skills: ["Socket.IO", "WebSockets", "Geolocation API", "Leaflet"],
    evidence: "Designed event flows for private chat and live location broadcasting.",
  },
  {
    title: "Data & Persistence",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Schema Design"],
    evidence: "Modeled users, products, orders, payments, conversations, and messages.",
  },
  {
    title: "Engineering Workflow",
    skills: ["Git", "GitHub", "README", "Deployment", "Debugging"],
    evidence: "Portfolio now includes case studies, system diagrams, SEO, and build/lint gates.",
  },
  {
    title: "Problem Solving",
    skills: ["C++", "JavaScript", "Python", "DSA"],
    evidence: "300+ algorithmic problems solved across LeetCode and Codeforces practice.",
  },
];

export const experience = [
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
