import { useState, useEffect } from 'react';
import { Github, Star, GitBranch, Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '@/components/ui/Modal';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { Project } from '@/types/project';

const projects: Project[] = [
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
    features: ["Multiple game modes (Human vs Human, Human vs AI)", "Minimax AI with configurable depth", "Alpha-Beta Pruning optimization", "Dynamic evaluation function", "Visual move highlights and score tracking", "Phase-based strategy adaptation"]
  },
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
    features: ["VS Code-inspired interface", "Interactive terminal with custom commands", "Tabbed file navigation system", "Smooth animations with Framer Motion", "Responsive mobile-first design", "Dark theme optimized for developers", "Project showcase with modals", "Code syntax highlighting", "Type-safe development with TypeScript"]
  },
  {
    id: 8,
    name: "Morbido Interiors",
    description: "Elegant furniture e-commerce platform with sophisticated design and smooth animations",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Vite"],
    github: "https://github.com/DMKeyy/morbido-interiors",
    demo: "#",
    stars: 3,
    forks: 0,
    status: "Completed",
    lastUpdated: "2025",
    screenshots: ["/projects/morbido-1.png", "/projects/morbido-2.png"],
    detailedDescription: "Morbido is a premium furniture e-commerce platform that combines visual elegance with exceptional user experience. The project features a sophisticated design system with multiple furniture collections including Modern & Minimal, Wabi Harmony, Nordic Calm, Urban Edge, and more. Built with React and TypeScript, the site showcases advanced animations using Framer Motion, custom production options, international imports, and a comprehensive contact system. The platform includes smooth page transitions, interactive product catalogs, customer testimonials, and a fully responsive design optimized for all devices.",
    features: ["Multiple furniture collection catalogs", "Smooth page transitions and animations", "Interactive product detail modals", "Custom production consultation system", "International imports showcase", "Responsive design with mobile-first approach", "Customer testimonials and reviews", "Advanced filtering and search", "Contact forms with multiple channels", "Brand story and values presentation"]
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
    features: ["Teacher preference submission with semester-based course selection", "Administrative dashboard for managing teachers, modules, and preferences", "Real-time messaging system with WebSocket integration", "PDF export for preference sheets with professional formatting", "Role-based access control (Teachers, Staff, Head of Department)", "Course catalog management with levels and specialties", "Academic year and semester tracking", "Module assignment preference ranking (1st, 2nd, 3rd choice)", "Supplementary hours and PFE project proposals", "Multi-semester preference collection (S1/S2)", "Email notification system", "Responsive UI with shadcn/ui components", "Secure JWT authentication with Spring Security", "RESTful API with comprehensive error handling", "Data export tools for schedule creation", "Teacher profile management with office and department info"]
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
    features: ["Game store with advanced filtering and search", "Personal game library with installation status", "Detailed game pages with screenshots and reviews", "Shopping cart with real-time updates", "User profile and settings management", "Download progress tracking", "Playtime and statistics tracking", "Glass-morphism UI design", "Responsive layout for all devices", "Smooth scroll animations", "System requirements display", "Gaming events calendar"]
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
    features: ["Multiple choice questions", "Score tracking", "Time-limited challenges", "Learning statistics", "Custom quiz creation"]
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
    features: ["Patient records management", "Appointment scheduling", "Billing and invoicing", "Inventory tracking", "Reporting and analytics"]
  }
];

const ProjectsTab = () => {
  const [lineNumbers] = useState(Array.from({ length: 25 }, (_, i) => i + 1));
  const [typedText, setTypedText] = useState('');
  const [skillsTyped, setSkillsTyped] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skillsText = `const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
  Backend: ["Java", "Spring Boot","Python", "C#", "C"],
  Tools: ["Unity", "Blender", "Sophos Firewall", "VMware", "VSCode"],
  Database: ["PostgreSQL", "MySQL", "Oracle DB"],
  DevOps: ["Git", "GitHub"]
};`;

  const projectsText = `// My Projects - Building the future, one commit at a time`;

  useEffect(() => {
    // Typing animation for skills
    let index = 0;
    const timer = setInterval(() => {
      if (index <= skillsText.length) {
        setTypedText(skillsText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setSkillsTyped(true);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      <div className="flex h-full bg-[#1e1e1e] rounded-lg">
        {/* Line Numbers */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1e1e1e] text-[#858585] text-sm font-mono p-4 select-none border-r border-[#2d2d30] min-w-12"
        >
          {lineNumbers.map((num) => (
            <motion.div 
              key={num} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: num * 0.05 }}
              className="h-6 leading-6 text-right pr-2"
            >
              {num}
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <div className="flex-1 p-4 space-y-6">
          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-sm"
          >
            <pre className="whitespace-pre-wrap">
              <code className="text-[#d4d4d4]">
                {typedText.split('\n').map((line, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ x: 4, transition: { duration: 0.1 } }}
                    style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
                  >
                    {line.includes('//') ? (
                      <span className="text-[#6a9955]">{line}</span>
                    ) : line.includes('const') ? (
                      <>
                        <span className="text-[#569cd6]">{line.match(/^(\s*const\s+)/)?.[0]}</span>
                        <span className="text-[#9cdcfe]">{line.replace(/^(\s*const\s+)/, '').split(':')[0]}</span>
                        <span className="text-[#d4d4d4]">{line.includes(':') ? ':' : ''}</span>
                        <span className="text-[#ce9178]">{line.split(':')[1] || ''}</span>
                      </>
                    ) : line.includes('"') ? (
                      line.split('"').map((part, i) => 
                        i % 2 === 0 ? 
                          <span key={i} className="text-[#d4d4d4]">{part}</span> : 
                          <span key={i} className="text-[#ce9178]">"{part}"</span>
                      )
                    ) : (
                      <span className="text-[#d4d4d4]">{line}</span>
                    )}
                  </motion.div>
                ))}
                {!skillsTyped && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block"
                  >
                    |
                  </motion.span>
                )}
              </code>
            </pre>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#6a9955] mb-4"
            >
              {projectsText}
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0, 120, 212, 0.2)"
                  }}
                  transition={{ 
                    scale: { duration: 0.05 },
                    boxShadow: { duration: 0.05 },
                    default: { duration: 0 },
                    opacity: { duration: 0.3 },
                    y: { duration: 0.3, delay: 0.6 }
                  }}
                  className="bg-[#1e1e1e] rounded-lg border border-[#2d2d30] p-6 cursor-pointer transition-all duration-300 hover:border-[#0078d4] relative overflow-hidden group"
                >
                  {/* Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#0078d4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  <div className="flex justify-between items-start mb-4">
                    <motion.h3 
                      whileHover={{ x: 4, transition: { duration: 0.1 } }}
                      className="text-xl font-semibold text-white group-hover:text-[#0078d4] transition-colors duration-300"
                    >
                      {project.name}
                    </motion.h3>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        project.status === 'Active' ? 'bg-green-600/20 text-green-400' :
                        project.status === 'Completed' ? 'bg-blue-600/20 text-blue-400' :
                        'bg-yellow-600/20 text-yellow-400'
                      }`}
                    >
                      {project.status}
                    </motion.div>
                  </div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#cccccc] text-sm mb-6 line-clamp-2 group-hover:text-white transition-colors duration-300"
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(0, 120, 212, 0.2)",
                          boxShadow: "0 0 15px rgba(97, 218, 251, 0.5)"
                        }}
                        transition={{ 
                          default: { duration: 0.05 },
                          scale: { duration: 0.05 },
                          backgroundColor: { duration: 0.05 },
                          boxShadow: { duration: 0.05 },
                          opacity: { duration: 0.2, delay: 0.8 + techIndex * 0.1 }
                        }}
                        className="px-3 py-1.5 bg-[#0078d4]/10 border border-[#0078d4]/30 rounded-full text-xs text-[#61dafb] hover:border-[#0078d4] transition-all duration-300 relative overflow-hidden group"
                      >
                        <motion.span
                          className="absolute inset-0 bg-[#61dafb]/20 opacity-0 group-hover:opacity-100"
                          initial={false}
                          animate={{ 
                            boxShadow: ["0 0 5px rgba(97, 218, 251, 0.5)", "0 0 20px rgba(97, 218, 251, 0.8)", "0 0 5px rgba(97, 218, 251, 0.5)"],
                          }}
                          transition={{ 
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-[#888888] mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                        className="flex items-center space-x-1 group-hover:text-white transition-colors duration-300"
                      >
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                        className="flex items-center space-x-1 group-hover:text-white transition-colors duration-300"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </motion.div>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                      className="flex items-center space-x-1 group-hover:text-white transition-colors duration-300"
                    >
                      <Clock className="w-4 h-4" />
                      <span>{project.lastUpdated}</span>
                    </motion.div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#2ea043",
                        transition: { duration: 0.05 }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        backgroundColor: "#238636",
                        transition: { duration: 0.05 }
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.8 + index * 0.1,
                        scale: { duration: 0.05 },
                        backgroundColor: { duration: 0.05 }
                      }}
                      className="flex items-center space-x-2 bg-[#238636] hover:bg-[#2ea043] px-4 py-2 rounded transition-all duration-300 text-sm cursor-pointer relative overflow-hidden group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear"
                        }}
                      />
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                    
                    {/* See Details Button */}
                    <motion.button 
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#0078d4",
                        transition: { duration: 0.05 }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        backgroundColor: "#106ebe",
                        transition: { duration: 0.05 }
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.9 + index * 0.1,
                        scale: { duration: 0.05 },
                        backgroundColor: { duration: 0.05 }
                      }}
                      className="flex items-center space-x-2 bg-[#0078d4] hover:bg-[#106ebe] px-4 py-2 rounded transition-all duration-300 text-sm cursor-pointer relative overflow-hidden group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear"
                        }}
                      />
                      <Eye className="w-4 h-4" />
                      <span>See Details</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ''}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </motion.div>
  );
};

export default ProjectsTab;