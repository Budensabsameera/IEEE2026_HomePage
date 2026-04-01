/**
 * Professional Hero Section - IEEE Academic Style
 * Eye-catching header with background image and overlay
 */

import React from 'react';
import '../styles/HeroSection.css';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlayOpacity = 0.5,
  children,
  height = '500px',
}) => {
  return (
    <section
      className="hero-section"
      style={{
        '--hero-height': height,
        '--overlay-opacity': overlayOpacity,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      } as React.CSSProperties}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
