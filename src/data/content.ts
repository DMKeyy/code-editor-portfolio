import { Project } from '@/types/project';

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Haiouani Anis",
  title: "AI Engineering",
  fullTitle: "Full Stack Developer & AI Engineering Student",
  email: "haiouani.anis05@gmail.com",
  resumePath: "/my-resume.pdf",
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
  github: {
    url: "https://github.com/DMKeyy",
    username: "DMKeyy",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/haiouani-anis/",
    username: "haiouani-anis",
  },
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutContent = {
  bio: `Hi, I'm ${personalInfo.name}, a passionate Full Stack Developer and AI Engineering student at USTHB. I love building modern web applications, exploring new technologies, and making video games. Welcome to my portfolio!`,
  // This is the code-style display text for the About tab
  codeDisplay: `// About Me\nconst about = "Hi, I'm Haiouani Anis, a passionate Full Stack Developer and AI Engineering student at USTHB. I love building modern web applications, exploring new technologies, and making video games. Welcome to my portfolio!";`,
};

// ============================================
// EDUCATION & EXPERIENCE
// ============================================
export const education = {
  institution: "USTHB - University of Science and Technology Houari Boumediene",
  degree: "Artificial Intelligence Engineer",
  period: "2023 - Present",
};

export const experience = [
  {
    title: "Cyber Security Intern",
    company: "Arcan Networks",
    type: "Internship",
    period: "2025 - 2025",
  },
  {
    title: "Web Developer",
    company: "",
    type: "Freelance",
    period: "2024 - Present",
  },
];

// Code-style display for Education & Experience section
export const educationExpCodeDisplay = `// Education & Experience
const education = {
  // Current Education
  institution: "${education.institution}",
  degree: "${education.degree}",
  period: "${education.period}"
};

const experience = [
  {
    title: "Cyber Security Intern",
    company: "Arcan Networks",
    type: "Internship",
    period: "2025 - 2025",
  },
  {
    title: "Web Developer", 
    type: "Freelance",
    period: "2024 - Present",
  }
];`;

// ============================================
// SKILLS
// ============================================
export const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
  Backend: ["Java", "Spring Boot", "Python", "C#", "C"],
  Tools: ["Unity", "Blender", "Sophos Firewall", "VMware", "VSCode"],
  Database: ["PostgreSQL", "MySQL", "Oracle DB"],
  DevOps: ["Git", "GitHub"],
};

// Code-style display for skills
export const skillsCodeDisplay = `const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
  Backend: ["Java", "Spring Boot","Python", "C#", "C"],
  Tools: ["Unity", "Blender", "Sophos Firewall", "VMware", "VSCode"],
  Database: ["PostgreSQL", "MySQL", "Oracle DB"],
  DevOps: ["Git", "GitHub"]
};`;

// ============================================
// CONTACT INFORMATION
// ============================================
export const contactInfo = {
  email: personalInfo.email,
  github: `github.com/${socialLinks.github.username}`,
  linkedin: `linkedin.com/in/${socialLinks.linkedin.username}`,
  web3formsKey: "7812f63a-9749-44e0-9af0-1025abab6e7c", // Replace with your Web3Forms access key
};

// Code-style display for contact section
export const contactCodeDisplay = `// Contact Me
// Let's build something amazing together!

const Contact = {
  Email: "${contactInfo.email}",
  Github: "${contactInfo.github}",
  Linkedin: "${contactInfo.linkedin}"
};`;

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
    {
    id: 7,
    name: "VS Code Portfolio",
    description: "Modern VS Code-inspired portfolio website with interactive developer experience",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "shadcn/ui"],
    github: "https://github.com/DMKeyy/code-editor-portfolio",
    demo: "https://dmkey.netlify.app/",
    stars: 7,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/portfolio-1.png", "/projects/portfolio-2.png"],
    detailedDescription: "A unique portfolio website that mimics the Visual Studio Code interface, providing developers with a familiar environment to explore my work. Features include an interactive file system sidebar, tabbed navigation, a functional terminal, and smooth animations. Built with modern web technologies including React, TypeScript, and Tailwind CSS with shadcn/ui components for a polished user experience. The project showcases advanced UI/UX design with code-style syntax highlighting, typing animations, and responsive layouts optimized for all devices.",
    features: ["VS Code-inspired interface", "Interactive terminal with custom commands", "Tabbed file navigation system", "Smooth animations with Framer Motion", "Responsive mobile-first design", "Dark theme optimized for developers", "Project showcase with modals", "Code syntax highlighting", "Type-safe development with TypeScript"],
  },
  {
    id: 8,
    name: "Morbido Interiors",
    description: "Elegant furniture e-commerce platform with sophisticated design and smooth animations",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/DMKeyy/morbido-interiors",
    demo: "https://morbido-store.netlify.app/",
    stars: 3,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/morbido-1.png", "/projects/morbido-2.png"],
    detailedDescription: "Morbido is a premium furniture e-commerce platform that combines visual elegance with exceptional user experience. The project features a sophisticated design system with multiple furniture collections including Modern & Minimal, Wabi Harmony, Nordic Calm, Urban Edge, and more. Built with React and TypeScript, the site showcases advanced animations using Framer Motion, custom production options, international imports, and a comprehensive contact system. The platform includes smooth page transitions, interactive product catalogs, customer testimonials, and a fully responsive design optimized for all devices.",
    features: ["Multiple furniture collection catalogs", "Smooth page transitions and animations", "Interactive product detail modals", "Custom production consultation system", "International imports showcase", "Responsive design with mobile-first approach", "Customer testimonials and reviews", "Advanced filtering and search", "Contact forms with multiple channels", "Brand story and values presentation"],
  },
  {
    id: 6,
    name: "Othello AI",
    description: "Intelligent Othello (Reversi) game with AI powered by Minimax and Alpha-Beta Pruning",
    tech: ["Python", "Pygame", "Minimax Algorithm", "Alpha-Beta Pruning"],
    github: "https://github.com/DMKeyy/Othello-AI",
    demo: "#",
    stars: 9,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/othello-1.png", "/projects/othello-2.png"],
    detailedDescription: "A sophisticated Othello (Reversi) game implementation featuring multiple AI algorithms. The game includes a graphical interface built with Pygame and offers various play modes including human vs human, human vs AI, and AI vs AI. The AI uses advanced game theory algorithms including Minimax search and Alpha-Beta Pruning for optimal move selection. The evaluation function dynamically adjusts its strategy based on game phase (early/mid/endgame), considering corner control, mobility, piece count, and stable pieces.",
    features: ["Multiple game modes (Human vs Human, Human vs AI)", "Minimax AI with configurable depth", "Alpha-Beta Pruning optimization", "Dynamic evaluation function", "Visual move highlights and score tracking", "Phase-based strategy adaptation"],
  },
  {
    id: 10,
    name: "Fiches de Voeux",
    description: "Full-stack university teaching preferences management system with real-time collaboration",
    tech: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "WebSocket", "JWT", "Maven", "shadcn/ui"],
    github: "https://github.com/DMKeyy/teacher-preferences-management",
    demo: "#",
    stars: 4,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/fiches-1.png", "/projects/fiches-2.png"],
    detailedDescription: "Fiches de Voeux is an enterprise-grade web application designed to streamline the collection and management of faculty teaching preferences for university course scheduling. Built for USTHB's Faculty of Informatics, this full-stack solution replaces manual processes with a centralized digital platform. The backend leverages Spring Boot with JWT authentication, Spring Security for role-based access control, and PostgreSQL for data persistence. The frontend features a modern React interface with TypeScript, real-time WebSocket communication for instant messaging, and PDF export capabilities using OpenPDF. The system supports multiple user roles including teachers, department heads, and administrators, each with specialized interfaces for preference submission, review workflows, and schedule assignment support. The application demonstrates advanced enterprise patterns including service layer architecture, DTO transformations, comprehensive validation, and transaction management.",
    features: ["Teacher preference submission with semester-based course selection", "Administrative dashboard for managing teachers, modules, and preferences", "Real-time messaging system with WebSocket integration", "PDF export for preference sheets with professional formatting", "Role-based access control (Teachers, Staff, Head of Department)", "Course catalog management with levels and specialties", "Academic year and semester tracking", "Module assignment preference ranking (1st, 2nd, 3rd choice)", "Supplementary hours and PFE project proposals", "Multi-semester preference collection (S1/S2)", "Email notification system", "Responsive UI with shadcn/ui components", "Secure JWT authentication with Spring Security", "RESTful API with comprehensive error handling", "Data export tools for schedule creation", "Teacher profile management with office and department info"],
  },
  {
    id: 9,
    name: "GameVault",
    description: "Modern gaming storefront with glass-morphism design, game library, and shopping features",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DMKeyy/gamify-storefront",
    demo: "#",
    stars: 5,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/gamevault-1.png", "/projects/gamevault-2.png"],
    detailedDescription: "GameVault is a comprehensive gaming platform built with modern web technologies featuring a sleek glass-morphism design. The application includes a full-featured game store with browsing and filtering, a personal game library with installation management and playtime tracking, detailed game pages with reviews and system requirements, shopping cart functionality, and user settings. Built with React 18 and TypeScript for type safety, the platform showcases advanced features like scroll-triggered animations, real-time cart updates, game download progress tracking, and a responsive design optimized for desktop, tablet, and mobile devices. The project demonstrates expertise in state management, form validation with Zod, and creating interactive gaming experiences.",
    features: ["Game store with advanced filtering and search", "Personal game library with installation status", "Detailed game pages with screenshots and reviews", "Shopping cart with real-time updates", "User profile and settings management", "Download progress tracking", "Playtime and statistics tracking", "Glass-morphism UI design", "Responsive layout for all devices", "Smooth scroll animations", "System requirements display", "Gaming events calendar"],
  },
  {
    id: 3,
    name: "Eureka",
    description: "An educational Quiz game to make learning fun",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/DMKeyy/eureka",
    demo: "#",
    stars: 8,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/eureka-1.png", "/projects/eureka-2.png"],
    detailedDescription: "Eureka is an educational quiz game designed to make learning interactive and fun. It challenges players with questions across various subjects while providing an engaging user experience with JavaFX animations and responsive design.",
    features: ["Multiple choice questions", "Score tracking", "Time-limited challenges", "Learning statistics", "Custom quiz creation"],
  },
  {
    id: 5,
    name: "Medical Office Management System",
    description: "A comprehensive medical office management system",
    tech: ["Java"],
    github: "https://github.com/DMKeyy/Gestion-Cabinet-Medical",
    demo: "#",
    stars: 6,
    forks: 0,
    status: "In Progress",
    lastUpdated: "2024",
    screenshots: ["/projects/medical-1.png", "/projects/medical-2.png"],
    detailedDescription: "A Java-based medical office management system that handles patient records, appointment scheduling, billing, and inventory management for healthcare providers. The system aims to improve office efficiency and patient care coordination.",
    features: ["Patient records management", "Appointment scheduling", "Billing and invoicing", "Inventory tracking", "Reporting and analytics"],
  },
];

// ============================================
// SIDEBAR FILES CONFIGURATION
// ============================================
export const sidebarFiles = [
  { name: 'about.tsx', type: 'react', description: 'Learn about my background and experience' },
  { name: 'projects.ts', type: 'typescript', description: 'Explore my projects and work' },
  { name: 'contact.md', type: 'markdown', description: 'Get in touch with me' },
];

// ============================================
// TERMINAL CONFIGURATION
// ============================================
export const terminalConfig = {
  welcomeMessages: [
    '$ Welcome to my portfolio terminal!',
    '$ Type "help" to see available commands',
    '$ Feel free to explore my work',
  ],
  commands: {
    help: [
      'Available commands:',
      '  about    - Learn more about me',
      '  skills   - View my technical skills',
      '  projects - See my recent projects',
      '  contact  - Get my contact information',
      '  clear    - Clear the terminal',
      '  github   - Open my GitHub profile',
      '  resume   - Download my resume',
      '  echo     - Echo back your input',
    ],
    about: [
      `Hello! I'm ${personalInfo.name}, a passionate Full Stack Developer`,
      'and AI Engineering student at USTHB. I love building modern',
      'web applications, exploring new technologies, and solving',
      'real-world problems with code. Welcome to my portfolio!',
    ],
    skills: [
      'Primary Skills:',
      `• Frontend: ${skills.Frontend.join(', ')}`,
      `• Backend: ${skills.Backend.join(', ')}`,
      `• Tools: ${skills.Tools.join(', ')}`,
      `• Database: ${skills.Database.join(', ')}`,
      `• DevOps: ${skills.DevOps.join(', ')}`,
    ],
    projects: [
      'Recent Projects:',
      '• Eureka - Educational quiz game (Java, JavaFX, MySQL)',
      '• Teacher Preference Form - Faculty management system (React, TypeScript, Spring Boot)',
      '• Medical Office Management - Healthcare system (Java)',
      '• Gaming Store Web Design - Modern gaming store (HTML, Tailwind CSS, React)',
      '• Furniture Store Design - Elegant furniture showcase (HTML, Tailwind CSS, React)',
      'Visit the Projects tab for more details!',
    ],
    contact: [
      'Contact Information:',
      ` Email: ${contactInfo.email}`,
      ` LinkedIn: ${contactInfo.linkedin}`,
      ` GitHub: ${contactInfo.github}`,
    ],
    ls: ['about.tsx  projects.ts  skills.json  contact.md  '],
  },
};

// ============================================
// WELCOME SCREEN CONFIGURATION
// ============================================
export const welcomeScreenConfig = {
  title: "Welcome to my Portfolio",
  subtitle: `${personalInfo.name} - ${personalInfo.title}`,
  tip: "💡 Tip: Use the sidebar to explore files, click on the cards above to get started, or open the terminal from the menu bar.",
};
