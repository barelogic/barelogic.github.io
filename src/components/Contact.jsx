import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using FormSpree - sends email to venkateshr.work@gmail.com
      const response = await fetch('https://formspree.io/f/xbdazrwq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email, // Allow replying directly to sender
          _subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div ref={ref}>
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="input-field resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center font-medium"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center font-medium"
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.p>
                )}
              </form>

              <p className="text-sm text-slate-500 mt-4 text-center">
                Messages are sent directly to venkateshr.work@gmail.com
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="card">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">
                  Let's Connect!
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Whether you have a
                  question or just want to say hi, I'll try my best to get back to
                  you!
                </p>

                {/* Email */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary-500/10 rounded-lg">
                      <FaEnvelope className="text-primary-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Email</p>
                      <a
                        href="mailto:venkateshr.work@gmail.com"
                        className="text-slate-300 hover:text-primary-400 transition-colors font-medium"
                      >
                        venkateshr.work@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-slate-400 mb-4 font-medium">Connect with me on:</p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/barelogic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-primary-500/10 hover:bg-primary-500/20 rounded-lg transition-colors group"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-primary-400 text-2xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.linkedin.com/in/venkatesh-rathinasabapathy-671491322/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-primary-500/10 hover:bg-primary-500/20 rounded-lg transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-primary-400 text-2xl" />
                    </motion.a>
                    {/* <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-primary-500/10 hover:bg-primary-500/20 rounded-lg transition-colors group"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-primary-400 text-2xl" />
                    </motion.a> */}
                  </div>
                </div>
              </div>

              {/* <div className="card bg-gradient-to-br from-primary-500/10 to-primary-600/10 border-primary-500/30">
                <p className="text-slate-300 text-center text-lg font-medium">
                  Open to opportunities and collaborations
                </p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
