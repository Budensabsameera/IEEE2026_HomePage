import "./svcepages.css";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FaAtom,
  FaComputer,
  FaGraduationCap,
  FaLightbulb,
  FaSignal,
  FaWaveSquare,
  FaIndustry,
  FaMicrochip,
  FaMagnifyingGlass,
} from 'react-icons/fa6';
import AnimatedSection from './AnimatedSection';
import ImageCard from './ImageCard';
import SocietyCard from './SocietyCard';
import IeeeAbout from './ieeeabout';

interface Society {
  id: string;
  name: string;
  description: string;
  icon: IconType;
  href: string;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

function SvcePages() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // IEEE Societies Data - based on current SVCE branch list provided
  const societies: Society[] = [
    {
      id: 'commui',
      name: 'IEEE Computer Society',
      description: 'Promotes computing knowledge, coding culture, and software-focused technical activities.',
      icon: FaComputer,
      href: 'https://www.computer.org/',
    },
    {
      id: 'nano',
      name: 'IEEE Nanotechnology Council',
      description: 'Focuses on nano-scale science, engineering applications, and interdisciplinary innovation.',
      icon: FaAtom,
      href: 'https://ieeenano.org/',
    },
    {
      id: 'comsoc',
      name: 'IEEE Communications Society (ComSoc)',
      description: 'Covers communication systems, networking concepts, and modern telecom technologies.',
      icon: FaSignal,
      href: 'https://www.comsoc.org/',
    },
    {
      id: 'women',
      name: 'IEEE Women in Engineering (WIE)',
      description: 'Encourages women in technology through mentorship, leadership, and inclusive initiatives.',
      icon: FaIndustry,
      href: 'https://wie.ieee.org/',
    },
    {
      id: 'signal',
      name: 'IEEE Signal Processing Society',
      description: 'Focuses on signal, speech, and image processing concepts across practical domains.',
      icon: FaWaveSquare,
      href: 'https://signalprocessingsociety.org/',
    },
    {
      id: 'sensor',
      name: 'IEEE Sensors Council',
      description: 'Highlights sensor technologies, applications, and measurement systems for engineering use.',
      icon: FaMicrochip,
      href: 'https://ieee-sensors.org/',
    },
    {
      id: 'power',
      name: 'IEEE Power & Energy Society',
      description: 'Covers power systems, energy management, and sustainable electrical engineering solutions.',
      icon: FaLightbulb,
      href: 'https://ieee-pes.org/',
    },
    {
      id: 'education',
      name: 'IEEE Education Society',
      description: 'Promotes engineering education, learning innovation, and effective teaching practices.',
      icon: FaGraduationCap,
      href: 'https://education.ieee.org/',
    },
  ];

  // Gallery Images
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: 'https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati1-gallery-image-549.jpg',
      alt: 'SVCE Tirupati campus main block view',
      title: 'Workshop',
      description: 'Core IEEE workshop session focused on technical foundations and practical exposure.',
    },
    {
      id: '2',
      src: 'https://assets.kollegeapply.com/images/1751548633694-1452683642php4hntvL.jpeg',
      alt: 'IEEE conference group photo',
      title: 'Conference Sessions',
      description: 'Student conference and paper presentation sessions with technical discussions.',
    },
    {
      id: '3',
      src: 'https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati3-gallery-image-966.jpg',
      alt: 'SVCE Tirupati campus infrastructure view',
      title: 'Event',
      description: 'Branch technical presentation event highlighting emerging IEEE domains.',
    },
    {
      id: '4',
      src: 'https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati4-gallery-image-991.jpg',
      alt: 'SVCE Tirupati campus event area',
      title: 'Skill Workshop',
      description: 'Workshop-based session to strengthen technical communication and teamwork.',
    },
    {
      id: '5',
      src: 'https://assets.kollegeapply.com/images/1751548633396-1452683534phpE6TBZT.png',
      alt: 'SVCE Tirupati main building perspective view',
      title: 'Research paper',
      description: 'Student project presentation session with peer and mentor feedback.',
    },
    {
      id: '6',
      src: 'https://assets.kollegeapply.com/images/1751548633694-1452683642php4hntvL.jpeg',
      alt: 'SVCE Tirupati campus building and frontage',
      title: 'Innovation and skill development program ',
      description: 'Integrated seminar and workshop format for IEEE SVCE technical learning.',
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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const photoItems = [
    {
      src: "/frontimage.jpg",
      alt: "SVCE Tirupati main campus wide view",
      className: "svce-photo-frame svce-photo-top",
    },
    {
      src: "https://assets.kollegeapply.com/images/1751548629949-1745219334phpCgBvrG.jpeg",
      alt: "SVCE Tirupati academic block side view",
      className: "svce-photo-frame svce-photo-left",
    },
    {
      src: "https://assets.kollegeapply.com/images/1751548630272-1745225910phpfC2A3T.jpeg",
      alt: "SVCE Tirupati greenery and building view",
      className: "svce-photo-frame svce-photo-right",
    },
    {
      src: "https://assets.kollegeapply.com/images/1751548630597-1745225936phpyFEJjC.jpeg",
      alt: "SVCE Tirupati front elevation view",
      className: "svce-photo-frame svce-photo-bottom",
    },
  ];

  return (
    <div className="bg-white">
      {/* ===== SECTION 1: SVCE PAGE ===== */}
      <section className="svce-page" ref={sectionRef}>
        <div className="svce-inner">
          <div className="svce-copy">
            <p className="svce-eyebrow">About SVCE</p>
            <h2 className="svce-title">Sri Venkateswara College of Engineering</h2>
            <p className="svce-body">
              Sri Venkateswara College of Engineering (SVCE), Tirupati approved by AICTE,
              permanently affiliated to JNTU Anantapur, and accredited by NAAC
              with an A Grade, with NBA accreditation for B.Tech programs in CSE,
              ECE, EEE, Mechanical, Civil, and IT. With a student-centric culture,
              SVCE blends strong academics, industry exposure, and
              innovation-driven learning to prepare engineers who can lead and
              build real-world solutions.
            </p>
            <p className="svce-body">
              Guided by the Council for Social Development Trust, SVCE emphasizes
              outcome-based education and continuous quality improvement. Its
              autonomous status and accreditations reflect a commitment to
              academic excellence and industry relevance. SVCE is known for its
              student achievements, strong project culture, and active innovation
              ecosystem that supports leadership, entrepreneurship, and placement
              readiness.
            </p>
            <p className="svce-body">
              The college is led by Principal Prof. Dr. Vijaya Gunturu (M.Tech,
              Ph.D., IIT Roorkee), who brings over 35 years of academic leadership.
              His focus on OBE, accreditation readiness, and research-driven
              learning in biomedical instrumentation, machine learning, IoT, and
              embedded systems continues to strengthen SVCE's academic governance
              and innovation-led outcomes.
            </p>
          </div>

          <div className="svce-collage" aria-hidden="true">
            {photoItems.map((photo) => (
              <figure key={photo.alt} className={photo.className}>
                <img src={photo.src} alt={photo.alt} className="svce-photo" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <IeeeAbout />

      {/* ===== SECTION 2: IEEE SOCIETIES PAGE ===== */}
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
        {/* IMAGE GALLERY */}
        <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                IEEE SVCE Activities & Events
              </motion.h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-20 h-1 bg-gradient-to-r from-[#00629B] to-transparent mx-auto origin-left" 
              />
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ImageCard
                    {...image}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* SEARCH BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00629B]/5 via-transparent to-[#00629B]/5 backdrop-blur-sm"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative flex items-center">
                <motion.div
                  animate={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-4"
                >
                  <FaMagnifyingGlass className="text-[#00629B] text-lg" />
                </motion.div>
                <input
                  type="text"
                  placeholder="Search IEEE societies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#00629B]/30 bg-white/80 backdrop-blur-sm focus:border-[#00629B] focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-md hover:shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* IEEE SOCIETIES */}
        <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                IEEE Societies
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto mb-4"
              >
                Explore the major IEEE societies driving innovation across engineering disciplines
              </motion.p>
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-1 bg-gradient-to-r from-[#00629B] to-transparent mx-auto origin-left" 
              />
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

      </div>
    </div>
  );
}

export default SvcePages;
