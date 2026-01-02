import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'CI/CD Pipeline Automation using Jenkins, Docker & AWS',
    description: 'DevOps Project. Designed and implemented an end-to-end CI/CD pipeline integrating Jenkins, SonarQube, Docker, and AWS to automate build, test, and deployment workflows. Configured Jenkins pipelines to automate code checkout, frontend & backend builds, static code analysis, and Docker image creation. Integrated SonarQube for continuous code quality analysis and enforced Quality Gate validation to prevent faulty builds from progressing. Built and containerized applications using Docker to ensure consistent and reproducible deployments. Deployed and managed application infrastructure on AWS (EC2), enabling cloud-based execution of CI/CD workflows. Implemented automated pipelines triggered on code commits, simulating real-world DevOps workflows. Troubleshot pipeline failures, configuration issues, and build errors, improving debugging and system-integration skills.',
    tags: ['Jenkins', 'Docker', 'AWS', 'SonarQube', 'CI/CD', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    pdf: '/certificates/CI_CD.pdf',
    color: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: 'AI Yoga Pose Detection & Healthcare',
    description: 'Developed a real-time computer vision system using the YOLO Model to detect and classify yoga poses from video. Implemented a core logic utilizing the Cosine Similarity Algorithm to compare user posture against ideal pose landmarks, generating instant corrective feedback. Designed the backend with a Pain Suggestion Service and MongoDB to personalize practice, track progress, and recommend adjustments to prevent injury.',
    tags: ['Computer Vision', 'YOLO', 'Cosine Similarity', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    pdf: '/certificates/Yoga.pdf',
    color: 'from-teal-500/20 to-cyan-400/20',
  },
  {
    title: 'E-Commerce Platform: Shoes Collection Website',
    description: 'Built a full-stack E-Commerce platform for local businesses using the MERN Stack (MongoDB, Express, React, Node.js). Developed a secure Admin Panel (single-IP access) for inventory and order management. Provided a complete client interface for product viewing, cart management, and order placement.',
    tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    pdf: '/certificates/Shoe.pdf',
    color: 'from-lime-400/20 to-green-500/20',
  },
  {
    title: 'Blood Bank Management System (BBMS)',
    description: 'Developed a secure, web-based platform to automate and streamline the process of blood donation and request across Donors, Patients, and Blood Bank Administrators. Engineered the full-stack application using PHP and MySQL for robust database management and application logic, with HTML5/CSS3/JavaScript for the client side interface. Implemented critical features including real-time blood stock updates, patient request submission, donor self-service profile management, and location-based searching with Google Maps integration.',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Google Maps'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    pdf: '/certificates/BBMS.pdf',
    color: 'from-amber-400/20 to-lime-400/20',
  },
];

const Projects = () => {
  const openPdf = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };
  
  return (
    <section id="projects" className="py-32 px-6 relative bg-background">

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, computer vision, and web applications
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative card-3d"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="card-3d-inner relative glass rounded-2xl overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-card/80" />
                  

                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* PDF View Button */}
                  <div className="mt-4">
                    <motion.button
                      onClick={() => openPdf(project.pdf)}
                      className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>

                {/* Bottom border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary bg-card text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
