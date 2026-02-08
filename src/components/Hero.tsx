import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, FileText, FolderOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'B.Tech CSE Student',
  'Full Stack Developer',
  'Data Engineer',
  'Problem Solver',
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content - Side by Side */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left flex-1">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-mono text-sm md:text-base mb-4"
              >
                {'<Hello World />'}
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                I'm{' '}
                <span className="gradient-text glow-text">Srishanth Reddy</span>
              </motion.h1>

              {/* Rotating Roles - Fade Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-10 md:h-12 mb-6 relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-10 md:h-12 flex items-center justify-center lg:justify-start text-xl md:text-2xl text-muted-foreground"
                  >
                    {roles[currentRole]}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8"
              >
                I build clean, scalable, and impactful web solutions that make a difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <a href="#projects" className="btn-primary flex items-center gap-2">
                  <FolderOpen size={18} />
                  View Projects
                </a>
                <a 
                  href="#resume" 
                  className="btn-outline flex items-center gap-2"
                >
                  <FileText size={18} />
                  Download Resume
                </a>
              </motion.div>
            </div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                {/* Image container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full overflow-hidden border-3 border-primary/50 bg-card">
                  <img 
                    src="/myprofile.jpeg" 
                    alt="Srishanth Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
