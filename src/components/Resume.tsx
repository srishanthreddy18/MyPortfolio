import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <FileText size={40} className="text-primary" />
              </motion.div>

              {/* Content */}
              <h2 className="section-title">
                My <span className="gradient-text">Resume</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Get a detailed overview of my education, skills, and experience. 
                Download my resume to learn more about my qualifications.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/MyResume.pdf"
                  className="btn-primary flex items-center justify-center gap-2"
                  download="Srishanth-Resume.pdf"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <button
                  className="btn-outline flex items-center justify-center gap-2"
                  onClick={() => window.open('/MyResume.pdf', '_blank')}
                >
                  <Eye size={18} />
                  Preview
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
