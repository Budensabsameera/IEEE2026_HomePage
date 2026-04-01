/**
 * Professional Card Component - IEEE Academic Style
 * Used for sections, achievements, events, etc.
 */

import React from 'react';
import '../styles/ProfessionalCard.css';

interface ProfessionalCardProps {
  children: React.ReactNode;
  className?: string;
  isVisible?: boolean;
  delay?: number;
  hoverable?: boolean;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  children,
  className = '',
  isVisible = true,
  delay = 0,
  hoverable = true,
}) => {
  return (
    <div
      className={`professional-card ${hoverable ? 'hoverable' : ''} ${
        isVisible ? 'visible' : ''
      } ${className}`}
      style={{
        '--animation-delay': `${delay}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ProfessionalCard;
