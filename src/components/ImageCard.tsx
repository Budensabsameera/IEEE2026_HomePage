/**
 * Image Card Component
 * Reusable animated image card with hover effects and overlay
 */

import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  index?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  description,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg h-64"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Blue gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-[#00629B] via-[#00629B]/50 to-transparent"
      />

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end p-6 text-white"
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-100 line-clamp-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ImageCard;
