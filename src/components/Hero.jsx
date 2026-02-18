import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-primary-400 text-lg md:text-xl mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
        >
          <span className="text-gradient">Venkatesh R</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-6"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Specializing in MERN Stack, Django & PostgreSQL
          <br />
          Building scalable web applications with modern technologies
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary w-full sm:w-auto"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary-400 hover:text-primary-300 transition-colors animate-bounce"
          >
            <FaArrowDown size={24} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
