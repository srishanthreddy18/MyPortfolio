import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Database, Sparkles } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code2, text: 'Full Stack Development' },
    { icon: Database, text: 'Data Engineering' },
    { icon: Sparkles, text: 'Clean Code Advocate' },
  ];

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Passionate developer with a vision to create impactful solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate Computer Science student at <span className="text-primary">KL University</span>, 
                  deeply interested in full-stack development and data engineering. My focus is on writing 
                  clean, efficient code and building real-world solutions that make a difference.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I believe in continuous learning and pushing boundaries. Whether it's mastering a new 
                  framework or optimizing database performance, I'm always eager to expand my skill set 
                  and take on challenging projects.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                    >
                      <item.icon size={16} className="text-primary" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              
              <div className="space-y-0">
                <div className="timeline-item">
                  <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">B.Tech – Computer Science & Engineering</h4>
                      <span className="text-primary font-mono text-sm">2024 – 2028</span>
                    </div>
                    <p className="text-primary font-medium mb-2">KL University</p>
                    <p className="text-muted-foreground text-sm">
                      Pursuing a comprehensive curriculum in computer science, focusing on software 
                      development, data structures, algorithms, and emerging technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: '2028', label: 'Graduation' },
                  { number: '5+', label: 'Projects' },
                  { number: '∞', label: 'Curiosity' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
