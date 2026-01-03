import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Minimize2, X, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { terminalConfig, socialLinks, personalInfo } from '@/data/content';

// Move commands object outside component for better performance
const COMMANDS: Record<string, (args?: string) => string[] | string> = {
  help: () => terminalConfig.commands.help,
  about: () => terminalConfig.commands.about,
  skills: () => terminalConfig.commands.skills,
  projects: () => terminalConfig.commands.projects,
  contact: () => terminalConfig.commands.contact,
  clear: () => {
    return 'CLEAR'; // Special flag to indicate clearing the terminal
  },
  github: () => {
    window.open(socialLinks.github.url, '_blank');
    return ['Opening GitHub profile in a new tab...'];
  },
  resume: () => {
    const resumeUrl = personalInfo.resumePath;
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'resume.pdf';
    a.click();
    return ['Downloading resume...'];
  },
  ls: () => terminalConfig.commands.ls,
  date: () => [new Date().toLocaleString()],
  echo: (args?: string) => [args || '']
};

interface TerminalProps {
  onClose?: () => void;
}

const updateTerminalHeight = (height: number) => {
  document.documentElement.style.setProperty('--terminal-height', `${height}px`);
};

const Terminal = ({ onClose }: TerminalProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [input, setInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [terminalHeight, setTerminalHeight] = useState(250);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>(terminalConfig.welcomeMessages);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize terminal height CSS variable
    updateTerminalHeight(terminalHeight);
    
    // Start animation after mount
    const timer = requestAnimationFrame(() => {
      setIsAnimating(false);
    });
    return () => cancelAnimationFrame(timer);
  }, [terminalHeight]);

  const handleClose = () => {
    setIsAnimating(true);
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.toLowerCase().trim().split(' ');
    const commandFn = COMMANDS[command as keyof typeof COMMANDS];
    
    if (commandFn) {
      let result = commandFn(args.join(' '));
      if (result === 'CLEAR') {
        setHistory(terminalConfig.welcomeMessages);
      } else {
        setHistory(prev => [...prev, `$ ${cmd}`, ...(result || [])]);
      }
    } else if (cmd.trim()) {
      setHistory(prev => [...prev, `$ ${cmd}`, `Command not found: ${command}. Type "help" for available commands.`]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (!isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMinimized]);  

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMinimized) return;
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isMinimized) return;
      
      const viewportHeight = window.innerHeight;
      const maxHeight = viewportHeight - 96; // Account for title bar and menu bar
      const minHeight = 150;
      
      // Calculate height based on cursor position from bottom of viewport
      const heightFromBottom = viewportHeight - e.clientY;
      const newHeight = Math.max(minHeight, Math.min(maxHeight, heightFromBottom));
      
      setTerminalHeight(newHeight);
      updateTerminalHeight(newHeight);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || isMinimized) return;
      
      const viewportHeight = window.innerHeight;
      const maxHeight = viewportHeight - 96;
      const minHeight = 150;
      
      const heightFromBottom = viewportHeight - e.touches[0].clientY;
      const newHeight = Math.max(minHeight, Math.min(maxHeight, heightFromBottom));
      
      setTerminalHeight(newHeight);
      updateTerminalHeight(newHeight);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, isMinimized]);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className={`
        fixed bottom-0 left-0 md:left-[16rem] right-0
        bg-[#1e1e1e]
        border-t border-l border-[#2d2d30]
        transform
      `}
    >
      {!isMinimized && (
        <motion.div 
          onMouseDown={handleMouseDown}
          onTouchStart={(e) => {
            setIsDragging(true);
            setStartY(e.touches[0].clientY);
          }}
          className="h-1.5 cursor-ns-resize bg-[#2d2d30] hover:bg-[#404040] transition-colors flex items-center justify-center"
        >
          <GripVertical className="w-4 h-4 text-[#666666]" />
        </motion.div>
      )}
      <div className="flex items-center justify-between px-2 py-1 bg-[#2d2d30]">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-[#cccccc]" />
          <span className="text-sm text-[#cccccc]">Terminal</span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-[#404040] rounded transition-colors"
          >
            <Minimize2 className="w-4 h-4 text-[#cccccc]" />
          </button>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-[#e81123] rounded transition-colors"
          >
            <X className="w-4 h-4 text-[#cccccc]" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: terminalHeight }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              ref={contentRef}
              className="h-full overflow-y-auto p-2 font-mono text-sm text-[#cccccc] terminal-content"
            >
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap break-words">
                  {line}
                </div>
              ))}
              <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-green-500 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-[#cccccc] font-mono"
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Terminal;
