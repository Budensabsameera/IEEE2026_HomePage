/**
 * COMPREHENSIVE EXAMPLE: IEEE Professional Website Components
 * This file demonstrates all components and proper usage patterns
 */

import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import ProfessionalCard from '../components/ProfessionalCard';
import ProfessionalImage from '../components/ProfessionalImage';
import ProfessionalButton from '../components/ProfessionalButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Example 1: Using HeroSection
 */
export const HeroSectionExample: React.FC = () => (
  <section>
    <HeroSection
      title="IEEE Student Branch"
      subtitle="Building Tomorrow's Engineers and Innovators"
      backgroundImage="/hero-background.jpg"
      height="500px"
      overlayOpacity={0.6}
    />
  </section>
);

/**
 * Example 2: Basic SectionWrapper
 */
export const SectionWrapperExample: React.FC = () => (
  <SectionWrapper
    title="Our Mission"
    subtitle="Advancing Technology and Innovation"
    bgColor="white"
    centered={true}
  >
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p>
        IEEE SVCE is dedicated to advancing technology and fostering innovation through
        student engagement, mentorship, and practical learning experiences.
      </p>
    </div>
  </SectionWrapper>
);

/**
 * Example 3: ProfessionalCard with scroll animation
 */
export const CardWithAnimationExample: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref}>
      <ProfessionalCard
        isVisible={isVisible}
        hoverable={true}
        delay={0}
      >
        <h3>Event Title</h3>
        <p>Event description goes here with beautiful styling</p>
        <ProfessionalButton variant="primary" size="sm">
          Learn More
        </ProfessionalButton>
      </ProfessionalCard>
    </div>
  );
};

/**
 * Example 4: Image Gallery with animations
 */
export const ImageGalleryExample: React.FC = () => {
  const images = [
    { src: '/image1.jpg', alt: 'Event 1', caption: 'Annual Tech Summit' },
    { src: '/image2.jpg', alt: 'Event 2', caption: 'Workshop Series' },
    { src: '/image3.jpg', alt: 'Event 3', caption: 'Networking Event' },
  ];

  return (
    <SectionWrapper
      title="Event Gallery"
      subtitle="Moments from our community"
      centered={true}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {images.map((img) => (
          <ProfessionalImage
            key={img.alt}
            src={img.src}
            alt={img.alt}
            caption={img.caption}
            height="300px"
            isVisible={true}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

/**
 * Example 5: Button Variants
 */
export const ButtonVariantsExample: React.FC = () => (
  <SectionWrapper title="Button Variations" centered={true}>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProfessionalButton variant="primary" size="md">
        Primary Button
      </ProfessionalButton>
      <ProfessionalButton variant="secondary" size="md">
        Secondary Button
      </ProfessionalButton>
      <ProfessionalButton variant="outline" size="md">
        Outline Button
      </ProfessionalButton>
      <ProfessionalButton variant="ghost" size="md">
        Ghost Button
      </ProfessionalButton>

      <ProfessionalButton variant="primary" size="sm">
        Small
      </ProfessionalButton>
      <ProfessionalButton variant="primary" size="lg">
        Large
      </ProfessionalButton>

      <ProfessionalButton variant="primary" disabled>
        Disabled
      </ProfessionalButton>
    </div>
  </SectionWrapper>
);

/**
 * Example 6: Complex Section with Mixed Components
 */
export const ComplexSectionExample: React.FC = () => {
  const achievements = [
    { title: 'Founded 2010', description: 'Over 13 years of excellence' },
    { title: '500+ Members', description: 'Active student community' },
    { title: '50+ Events', description: 'Annual activities and workshops' },
    { title: '95% Placement', description: 'Strong industry connections' },
  ];

  return (
    <SectionWrapper
      title="Achievements"
      subtitle="Our Impact and Growth"
      bgColor="light-gray"
      centered={true}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        {achievements.map((achievement, idx) => (
          <ProfessionalCard
            key={achievement.title}
            isVisible={true}
            delay={idx * 100}
            hoverable={true}
          >
            <h3 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>
              {achievement.title}
            </h3>
            <p>{achievement.description}</p>
          </ProfessionalCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

/**
 * Example 7: Full Page Example
 */
export const FullPageExample: React.FC = () => (
  <>
    <HeroSection
      title="IEEE Student Branch"
      subtitle="Excellence in Technology and Innovation"
      backgroundImage="/hero.jpg"
    />

    <SectionWrapper
      title="Who We Are"
      subtitle="Learn about our organization"
      centered={false}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <p>
            IEEE SVCE is a student-led organization dedicated to advancing technology
            and fostering innovation among engineering students.
          </p>
          <ProfessionalButton variant="primary" size="lg">
            Join Us Today
          </ProfessionalButton>
        </div>
        <div>
          <ProfessionalImage
            src="/organization.jpg"
            alt="Our team"
            caption="IEEE SVCE Leadership Team"
          />
        </div>
      </div>
    </SectionWrapper>

    <ComplexSectionExample />

    <ImageGalleryExample />
  </>
);

/**
 * Hook Usage Example
 */
export const ScrollAnimationHookExample: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    once: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <p>This element animates in when scrolled into view!</p>
    </div>
  );
};

/**
 * TypeScript Interface Examples
 */

// For strongly typed section data
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

// Usage example
const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Chairperson',
    bio: 'Leading the chapter with vision and innovation',
    imageUrl: '/team/john.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Vice Chairperson',
    bio: 'Driving strategic initiatives and member engagement',
    imageUrl: '/team/jane.jpg',
  },
];

export const TypedTeamSectionExample: React.FC = () => (
  <SectionWrapper
    title="Leadership Team"
    subtitle="Meet the people driving our mission"
    centered={true}
  >
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
    }}>
      {teamData.map((member) => (
        <ProfessionalCard key={member.id} isVisible={true} hoverable={true}>
          <ProfessionalImage
            src={member.imageUrl}
            alt={member.name}
            height="250px"
          />
          <h3 style={{ marginTop: '1rem' }}>{member.name}</h3>
          <p style={{ color: '#1e40af', fontWeight: '600', marginBottom: '0.5rem' }}>
            {member.role}
          </p>
          <p>{member.bio}</p>
        </ProfessionalCard>
      ))}
    </div>
  </SectionWrapper>
);

/**
 * Export all examples
 */
export const AllExamples = {
  hero: HeroSectionExample,
  section: SectionWrapperExample,
  card: CardWithAnimationExample,
  gallery: ImageGalleryExample,
  buttons: ButtonVariantsExample,
  complex: ComplexSectionExample,
  full: FullPageExample,
  animation: ScrollAnimationHookExample,
  team: TypedTeamSectionExample,
};
