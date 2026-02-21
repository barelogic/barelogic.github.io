import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card h-full flex flex-col"
    >
      {/* Project Title */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-slate-100 mb-2">
          {project.title}
        </h3>
        {project.featured && (
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-500/20 text-primary-400 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Project Description */}
      <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-primary-500/10 text-primary-300 rounded-full border border-primary-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${project.hasLiveDemo ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white rounded-lg transition-all duration-300 font-semibold`}
        >
          <FaGithub /> View Code
        </motion.a>
        {project.hasLiveDemo && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white hover:bg-primary-600 rounded-lg transition-all duration-300 font-semibold"
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
