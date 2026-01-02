import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect Job Simulation",
    issuer: "Forage",
    date: "2025",
    description: "Hands-on virtual experience in designing scalable and reliable hosting architectures, simulating real-world responsibilities of a Solutions Architect with practical, industry-aligned tasks.",
    link: "/certificates/AWS Solutions Architect Job Simulation.pdf"
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Foundational knowledge of AWS cloud services, security, pricing models, and architectural best practices, enabling cloud-native and DevOps-ready solutions.",
    link: "/certificates/aws-certified-solutions-architect.pdf"
  },

  {
    id: 3,
    title: "Python Complete Course for Beginners",
    issuer: "Python Institute",
    date: "2024",
    description: "Comprehensive training in Python programming fundamentals with practical applications in automation and backend development.",
    link: "/certificates/Python Certification.pdf"
  },
  {
    id: 4,
    title: "SAP Code Unnati – Emerging Technologies (ABAP on BTP)",
    issuer: "SAP",
    date: "2024",
    description: "Advanced training in emerging technologies with hands-on experience in SAP ABAP development on SAP Business Technology Platform.",
    link: "/certificates/SAP Certificate.pdf"
  }
];

const Certifications = () => {
  
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Certifications
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional credentials and achievements
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <BadgeCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-primary">{cert.date}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  {cert.issuer}
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-1"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;