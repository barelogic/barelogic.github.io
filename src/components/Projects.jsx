import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-container">
      <motion.div ref={ref}>
        <h2 className="section-title">Featured Projects</h2>

        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Here are some of my recent projects showcasing my expertise in full-stack
            development, from conception to deployment.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
