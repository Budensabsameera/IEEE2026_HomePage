/**
 * IEEE Societies Page Component
 * Complete upgraded page with animations, search, and 9 societies
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FaComputer,
  FaLightbulb,
  FaSignal,
  FaRobot,
  FaAtom,
  FaWaveSquare,
  FaIndustry,
  FaMicrochip,
  FaSatellite,
  FaMagnifyingGlass,
} from 'react-icons/fa6';
import AnimatedSection from '../components/AnimatedSection';
import ImageCard from '../components/ImageCard';
import SocietyCard from '../components/SocietyCard';

interface Society {
  id: string;
  name: string;
  description: string;
  icon: IconType;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const SocietiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // IEEE Societies Data - 9 societies
  const societies: Society[] = [
    {
      id: 'cs',
      name: 'IEEE Computer Society',
      description: 'Advancing computing technology with focus on AI, software engineering, and cybersecurity.',
      icon: FaComputer,
    },
    {
      id: 'power',
      name: 'IEEE Power & Energy Society',
      description: 'Leading innovation in power generation, transmission, and sustainable energy solutions.',
      icon: FaLightbulb,
    },
    {
      id: 'comms',
      name: 'IEEE Communications Society',
      description: 'Promoting advancement in telecommunications, 5G, and wireless communication systems.',
      icon: FaSignal,
    },
    {
      id: 'robotics',
      name: 'IEEE Robotics & Automation Society',
      description: 'Developing robotics and automation technologies for industrial and research applications.',
      icon: FaRobot,
    },
    {
      id: 'nano',
      name: 'IEEE Nanotechnology Council',
      description: 'Exploring nano-scale science and engineering for revolutionary applications.',
      icon: FaAtom,
    },
    {
      id: 'signal',
      name: 'IEEE Signal Processing Society',
      description: 'Advancing signal and image processing technologies across diverse applications.',
      icon: FaWaveSquare,
    },
    {
      id: 'industrial',
      name: 'IEEE Industrial Electronics Society',
      description: 'Fostering industrial automation and power electronics innovation and research.',
      icon: FaIndustry,
    },
    {
      id: 'electron',
      name: 'IEEE Electron Devices Society',
      description: 'Promoting electron device research and development for next-generation technology.',
      icon: FaMicrochip,
    },
    {
      id: 'aerospace',
      name: 'IEEE Aerospace & Electronic Systems Society',
      description: 'Supporting aerospace and electronic systems innovation for critical applications.',
      icon: FaSatellite,
    },
  ];

  // Gallery Images
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      alt: 'Technology conference',
      title: 'Technical Conferences',
      description: 'Leading industry experts sharing innovation and research',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      alt: 'Research lab',
      title: 'Research Excellence',
      description: 'Cutting-edge research and development initiatives',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop',
      alt: 'Collaboration event',
      title: 'Global Collaboration',
      description: 'Connecting engineers worldwide for innovation',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1552664782-8c18cbb9ff8c?w=600&h=400&fit=crop',
      alt: 'Workshop session',
      title: 'Professional Development',
      description: 'Hands-on workshops and skill enhancement programs',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=600&h=400&fit=crop',
      alt: 'Networking event',
      title: 'Networking Opportunities',
      description: 'Building connections with industry professionals',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1518611505868-d7d2d1c0e0fb?w=600&h=400&fit=crop',
      alt: 'Innovation hub',
      title: 'Innovation Hub',
      description: 'Empowering the next generation of engineers',
    },
  ];

  // Filter societies based on search
  const filteredSocieties = useMemo(() => {
    return societies.filter(
      (society) =>
        society.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        society.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* ===== SECTION 1: IMAGE GALLERY ===== */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IEEE Activities & Events
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00629B] to-transparent mx-auto" />
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <ImageCard
                key={image.id}
                {...image}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== SECTION 2: SEARCH BAR ===== */}
      <AnimatedSection className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative flex items-center">
              <FaMagnifyingGlass className="absolute left-4 text-[#00629B] text-lg" />
              <input
                type="text"
                placeholder="Search IEEE societies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#00629B]/30 bg-white/80 backdrop-blur-sm focus:border-[#00629B] focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ===== SECTION 3: IEEE SOCIETIES (9 SOCIETIES) ===== */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IEEE Professional Societies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Explore the major IEEE societies driving innovation across engineering disciplines
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00629B] to-transparent mx-auto" />
          </motion.div>

          {/* Societies Grid */}
          <AnimatePresence>
            {filteredSocieties.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredSocieties.map((society, index) => (
                  <SocietyCard
                    key={society.id}
                    {...society}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <p className="text-lg text-gray-600">
                  No societies found matching "{searchTerm}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* ===== SECTION 4: NANOTECHNOLOGY HIGHLIGHT ===== */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00629B]/5 via-purple-500/5 to-[#00629B]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border-2 border-[#00629B]/30 bg-gradient-to-br from-white via-blue-50 to-white p-10 overflow-hidden"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#00629B] to-purple-500 rounded-full opacity-10 blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                {/* Atom Icon with floating animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00629B] to-purple-600 flex items-center justify-center shadow-lg">
                    <FaAtom className="text-white text-3xl" />
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    IEEE Nanotechnology Council
                  </h3>
                  <p className="text-[#00629B] font-semibold mb-4">
                    ⭐ Featured Society
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Exploring the frontiers of nano-scale science and engineering, the IEEE Nanotechnology Council 
                    drives innovation in nanoelectronics, nanomaterials, bionanotechnology, and quantum computing. 
                    Our members are shaping the future of technology at the atomic level.
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#00629B] via-purple-500 to-transparent rounded-full origin-left"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ===== SECTION 5: CTA SECTION ===== */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join IEEE Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of a global community of engineers, scientists, and technical professionals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00629B] to-[#004a7a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Membership
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SocietiesPage;
