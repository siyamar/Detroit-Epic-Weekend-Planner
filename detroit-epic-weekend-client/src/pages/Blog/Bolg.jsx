import React from 'react';
import { motion } from 'framer-motion';
import useSuccessStory from '../../hooks/useMenu/useSuccessStory';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPost = useSuccessStory();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-20 space-y-12">
      {blogPost.map((post) => (
        <motion.div
          key={post._id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Image Section */}
          <div className="w-full">
            <motion.img
              src={post.image}
              alt={post.title}
              className="object-cover rounded-lg shadow-lg w-9/10 h-48 md:h-72 mx-auto"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {post.title}
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {post.shortDescription}
            </motion.p>
            <Link to={`/blogDetails/${post._id}`}>
            <motion.a
              href={post.link}
              className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Read More
            </motion.a>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Blog;
