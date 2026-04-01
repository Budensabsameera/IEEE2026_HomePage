/**
 * Professional Section Wrapper - IEEE Academic Style
 * Enforces consistent spacing and layout across sections
 */

import React from 'react';
import '../styles/SectionWrapper.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light-gray' | 'dark-blue';
  centered?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'white',
  centered = false,
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`section-wrapper ${bgColor} ${centered ? 'centered' : ''} ${
        isVisible ? 'visible' : ''
      } ${className}`}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
