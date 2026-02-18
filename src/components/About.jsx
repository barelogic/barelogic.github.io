import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with expertise in building
              modern, scalable web applications. With a strong foundation in both
              frontend and backend technologies, I create seamless user experiences
              backed by robust server architectures.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              My journey in software development has equipped me with a diverse skill
              set spanning the MERN stack, Django framework, and PostgreSQL database
              management. I thrive on solving complex problems and transforming ideas
              into functional, elegant solutions.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-primary-400 mb-4">
                What I Do:
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">▹</span>
                  <span>
                    Build responsive and interactive user interfaces with React.js
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">▹</span>
                  <span>
                    Develop RESTful APIs using Django and Node.js/Express
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">▹</span>
                  <span>
                    Design and optimize databases with PostgreSQL and MongoDB
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">▹</span>
                  <span>
                    Deploy and maintain applications using cloud platforms and Docker
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t border-dark-700 pt-8">
              <h3 className="text-xl font-semibold text-primary-400 mb-6 text-center">
                Let's Connect
              </h3>
              <div className="flex justify-center items-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/barelogic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={32} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/venkatesh-rathinasabapathy-671491322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={32} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram size={32} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
