import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, CheckCircle } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  badge: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Microsoft GitHub Copilot',
    issuer: 'Microsoft',
    date: '2024',
    image: '/githubcopilot.jpeg',
    badge: '🏆',
  },
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 md:py-32" ref={ref}>
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
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Professional credentials and achievements
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-card-hover p-6 cursor-pointer group"
              >
                {/* Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {cert.badge}
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle size={16} />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <p className="text-primary text-xs font-mono">{cert.date}</p>

                {/* View Link */}
                <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <ExternalLink size={14} />
                  <span>View Certificate</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Award className="text-primary" />
              Achievements
            </h3>

            <div className="glass-card p-8 text-center">
              <span className="text-5xl mb-4 block">🌟</span>
              <p className="text-muted-foreground text-lg">
                More achievements coming soon...
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Stay tuned for exciting updates!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-6 max-w-lg w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedCert.badge}</span>
                  <div>
                    <h3 className="font-bold">{selectedCert.title}</h3>
                    <p className="text-muted-foreground text-sm">{selectedCert.issuer}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl block mb-4">📜</span>
                      <p className="text-muted-foreground">Certificate Preview</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle size={18} />
                  <span className="font-medium">Verified Credential</span>
                </div>
                <span className="text-muted-foreground font-mono text-sm">{selectedCert.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
