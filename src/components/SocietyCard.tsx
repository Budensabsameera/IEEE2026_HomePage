/**
 * Society Card Component
 * Reusable IEEE society card with glassmorphism and animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface SocietyCardProps {
  icon: IconType;
  name: string;
  description: string;
  href?: string;
  index?: number;
}

const SocietyCard: React.FC<SocietyCardProps> = ({
  icon: Icon,
  name,
  description,
  href,
  index = 0,
}) => {
  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href
    ? {
        href,
        target: '_blank',
        rel: 'noreferrer',
      }
    : {};

  return (
    <Wrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative block"
      {...wrapperProps}
    >
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#00629B]/40 via-[#00A6D6]/30 to-[#00629B]/40 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[#00629B]/20 bg-white/80 p-6 shadow-[0_10px_35px_-16px_rgba(0,98,155,0.5)] backdrop-blur-md transition-all duration-300 group-hover:border-[#00629B]/50 group-hover:shadow-[0_18px_45px_-18px_rgba(0,98,155,0.6)]">
        {/* Top gradient accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#00629B]/10 to-transparent" />

        {/* Corner glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00A6D6]/20 blur-2xl"
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-4 flex items-start justify-between gap-3">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ duration: 0.25 }}
              className="inline-flex rounded-xl bg-gradient-to-br from-[#00629B] to-[#004a7a] p-3 shadow-md"
            >
              <Icon className="text-2xl text-white" />
            </motion.div>

            {href ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#00629B]/25 bg-[#00629B]/5 px-3 py-1 text-xs font-semibold text-[#00507d]">
                Visit
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </span>
            ) : null}
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
            {name}
          </h3>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-5 h-1 rounded-full bg-gradient-to-r from-[#00629B] to-transparent origin-left"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SocietyCard;
