import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Globe, Database, Layers } from 'lucide-react';

type SkillCategory = 'all' | 'languages' | 'web' | 'databases';

interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'C', category: 'languages', icon: '🔵', level: 80 },
  { name: 'Java', category: 'languages', icon: '☕', level: 75 },
  { name: 'HTML', category: 'web', icon: '🌐', level: 90 },
  { name: 'CSS', category: 'web', icon: '🎨', level: 85 },
  { name: 'JavaScript', category: 'web', icon: '⚡', level: 80 },
  { name: 'React', category: 'web', icon: '⚛️', level: 75 },
  { name: 'PostgreSQL', category: 'databases', icon: '🐘', level: 70 },
];

const filters: { key: SkillCategory; label: string; icon: typeof Code }[] = [
  { key: 'all', label: 'All Skills', icon: Layers },
  { key: 'languages', label: 'Languages', icon: Code },
  { key: 'web', label: 'Web Tech', icon: Globe },
  { key: 'databases', label: 'Databases', icon: Database },
];

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredSkills = skills.filter(
    skill => activeFilter === 'all' || skill.category === activeFilter
  );

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'glass-card hover:border-primary/50'
                }`}
              >
                <filter.icon size={16} />
                <span className="text-sm font-medium">{filter.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="skill-card group"
              >
                <div className="skill-icon text-2xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-foreground">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))'
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
