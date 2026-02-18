import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card h-full flex flex-col"
    >
      {/* Blog Title */}
      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 hover:text-primary-400 transition-colors">
        {post.title}
      </h3>

      {/* Meta Information */}
      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
        <div className="flex items-center gap-2">
          <FaCalendar />
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Excerpt */}
      <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
        {post.excerpt}
      </p>

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-primary-500/10 text-primary-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read More Link */}
      <motion.a
        whileHover={{ x: 5 }}
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors mt-auto group"
      >
        Read More
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </motion.a>
    </motion.div>
  );
};

export default BlogCard;
