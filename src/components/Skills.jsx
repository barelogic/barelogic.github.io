import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-300 font-medium">{skill.name}</span>
          <span className="text-primary-400 font-semibold">{skill.level}%</span>
        </div>
        <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  const SkillCategory = ({ title, skills, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay, duration: 0.6 }}
        className="card"
      >
        <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">
          {title}
        </h3>
        <div>
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-container bg-dark-800/30">
      <motion.div ref={ref}>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Frontend Development"
            skills={skillsData.frontend}
            delay={0.1}
          />
          <SkillCategory
            title="Backend Development"
            skills={skillsData.backend}
            delay={0.2}
          />
          <SkillCategory
            title="Database & Storage"
            skills={skillsData.database}
            delay={0.3}
          />
          <SkillCategory
            title="Tools & Technologies"
            skills={skillsData.tools}
            delay={0.4}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
