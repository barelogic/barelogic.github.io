import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import BlogCard from './BlogCard';
import blogPostsData from '../data/blogPosts.json';

const BlogPosts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-container bg-dark-800/30">
      <motion.div ref={ref}>
        <h2 className="section-title">Recent Blog Posts</h2>

        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Sharing insights, tutorials, and experiences from my journey in software
            development.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogPosts;
