import { useState, useEffect } from 'react';
import { Github, Star, GitBranch, Clock, Eye, Folder, FolderOpen, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@/components/ui/Modal';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { Project } from '@/types/project';
import { projects, skillsCodeDisplay } from '@/data/content';

const ProjectsTab = () => {
  const [typedText, setTypedText] = useState('');
  const [skillsTyped, setSkillsTyped] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  const skillsText = skillsCodeDisplay;

  useEffect(() => {
    // Calculate line numbers based on content
    const skillsLines = skillsText.split('\n').length;
    const projectLines = projects.length * 8;
    setLineNumbers(Array.from({ length: skillsLines + projectLines + 10 }, (_, i) => i + 1));

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
    }, 15);

    return () => clearInterval(timer);
  }, [skillsText]);

  const toggleProject = (projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-[#4ec9b0]';
      case 'Active': return 'text-[#dcdcaa]';
      case 'In Progress': return 'text-[#ce9178]';
      default: return 'text-[#d4d4d4]';
    }
  };

  return (
    <div className="flex h-full bg-[#1e1e1e] overflow-hidden">
      <div className="flex flex-1 overflow-y-auto">
        {/* Line Numbers */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1e1e1e] text-[#858585] text-sm font-mono p-4 select-none border-r border-[#2d2d30] min-w-12 sticky left-0"
        >
          {lineNumbers.map((num) => (
            <motion.div 
              key={num} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: Math.min(num * 0.02, 1) }}
              className="text-right pr-2" 
              style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
            >
              {num}
            </motion.div>
          ))}
        </motion.div>

        {/* Code Content */}
        <div className="flex-1 p-4 font-mono text-sm">
          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <pre className="whitespace-pre-wrap">
              <code className="text-[#d4d4d4]">
                {typedText.split('\n').map((line, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
                  >
                    {line.includes('//') ? (
                      <span className="text-[#6a9955]">{line}</span>
                    ) : line.includes('const') ? (
                      <>
                        <span className="text-[#569cd6]">{line.match(/^(\s*const\s+)/)?.[0]}</span>
                        <span className="text-[#4fc1ff]">{line.replace(/^(\s*const\s+)/, '').split(' ')[0]}</span>
                        <span className="text-[#d4d4d4]">{line.includes('=') ? ' = {' : ''}</span>
                      </>
                    ) : line.includes(':') && line.includes('[') ? (
                      <>
                        <span className="text-[#9cdcfe]">  {line.trim().split(':')[0]}</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">{line.split(':')[1]}</span>
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
                    className="inline-block text-[#569cd6]"
                  >
                    |
                  </motion.span>
                )}
              </code>
            </pre>
          </motion.div>

          {/* Projects Section */}
          <AnimatePresence>
            {skillsTyped && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-4"
                  style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
                >
                  <span className="text-[#6a9955]">{"// Projects - Building the future, one commit at a time"}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
                >
                  <span className="text-[#569cd6]">const </span>
                  <span className="text-[#4fc1ff]">projects</span>
                  <span className="text-[#d4d4d4]"> = {"["}</span>
                </motion.div>

                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="ml-4"
                  >
                    <motion.div
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center cursor-pointer group py-1 hover:bg-[#2a2d2e] rounded px-2 -ml-2"
                      whileHover={{ x: 2 }}
                    >
                      <motion.span
                        animate={{ rotate: expandedProjects.has(project.id) ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="mr-1"
                      >
                        <ChevronRight className="w-4 h-4 text-[#858585]" />
                      </motion.span>
                      
                      {expandedProjects.has(project.id) ? (
                        <FolderOpen className="w-4 h-4 text-[#dcb67a] mr-2" />
                      ) : (
                        <Folder className="w-4 h-4 text-[#dcb67a] mr-2" />
                      )}
                      
                      <span className="text-[#d4d4d4]">{"{"}</span>
                      <span className="text-[#9cdcfe] ml-1">name</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className="text-[#ce9178]">"{project.name}"</span>
                      <span className="text-[#d4d4d4]">,</span>
                      <span className="text-[#9cdcfe] ml-2">status</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className={getStatusColor(project.status)}>"{project.status}"</span>
                      {!expandedProjects.has(project.id) && (
                        <>
                          <span className="text-[#858585] ml-2">{"..."}</span>
                          <span className="text-[#d4d4d4]">{"},"}</span>
                        </>
                      )}
                    </motion.div>

                    <AnimatePresence>
                      {expandedProjects.has(project.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-6 border-l border-[#2d2d30] pl-4"
                        >
                          <div className="py-1 hover:bg-[#2a2d2e] rounded px-2 -ml-2">
                            <span className="text-[#9cdcfe]">description</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">"{project.description}"</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </div>

                          <div className="py-1 hover:bg-[#2a2d2e] rounded px-2 -ml-2">
                            <span className="text-[#9cdcfe]">tech</span>
                            <span className="text-[#d4d4d4]">: [</span>
                            {project.tech.map((tech, i) => (
                              <span key={tech}>
                                <span className="text-[#ce9178]">"{tech}"</span>
                                {i < project.tech.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                              </span>
                            ))}
                            <span className="text-[#d4d4d4]">],</span>
                          </div>

                          <div className="py-1 hover:bg-[#2a2d2e] rounded px-2 -ml-2 flex items-center flex-wrap">
                            <span className="text-[#9cdcfe]">stats</span>
                            <span className="text-[#d4d4d4]">: {"{"} </span>
                            <Star className="w-3 h-3 text-[#dcdcaa] mx-1" />
                            <span className="text-[#b5cea8]">{project.stars}</span>
                            <span className="text-[#d4d4d4]">, </span>
                            <GitBranch className="w-3 h-3 text-[#4ec9b0] mx-1" />
                            <span className="text-[#b5cea8]">{project.forks}</span>
                            <span className="text-[#d4d4d4]">, </span>
                            <Clock className="w-3 h-3 text-[#858585] mx-1" />
                            <span className="text-[#ce9178]">"{project.lastUpdated}"</span>
                            <span className="text-[#d4d4d4]"> {"}"},</span>
                          </div>

                          <div className="py-2 flex items-center gap-4 flex-wrap">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="inline-flex items-center gap-2 text-[#dcdcaa] hover:text-[#569cd6] transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4" />
                              <span>viewCode</span>
                              <span className="text-[#d4d4d4]">()</span>
                              <ExternalLink className="w-3 h-3 text-[#858585]" />
                            </motion.a>

                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(project);
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="inline-flex items-center gap-2 text-[#dcdcaa] hover:text-[#569cd6] transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                              <span>seeDetails</span>
                              <span className="text-[#d4d4d4]">()</span>
                            </motion.button>

                            {project.demo && project.demo !== '#' && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 text-[#dcdcaa] hover:text-[#4ec9b0] transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>liveDemo</span>
                                <span className="text-[#d4d4d4]">()</span>
                              </motion.a>
                            )}
                          </div>

                          <div className="py-1">
                            <span className="text-[#d4d4d4]">{"},"}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + projects.length * 0.1 }}
                  style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
                >
                  <span className="text-[#d4d4d4]">{"];"}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + projects.length * 0.1 }}
                  className="mt-4"
                  style={{ minHeight: '1.5rem', padding: '0.125rem 0' }}
                >
                  <span className="text-[#c586c0]">export default </span>
                  <span className="text-[#4fc1ff]">projects</span>
                  <span className="text-[#d4d4d4]">;</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ''}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </div>
  );
};

export default ProjectsTab;