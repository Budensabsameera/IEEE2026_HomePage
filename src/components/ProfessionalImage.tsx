/**
 * Professional Image Component - IEEE Academic Style
 * Optimized for performance with smooth animations
 */

import React from 'react';
import '../styles/ProfessionalImage.css';

interface ProfessionalImageProps {
  src: string;
  alt: string;
  className?: string;
  isVisible?: boolean;
  width?: string | number;
  height?: string | number;
  caption?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

const ProfessionalImage: React.FC<ProfessionalImageProps> = ({
  src,
  alt,
  className = '',
  isVisible = true,
  width,
  height,
  caption,
  objectFit = 'cover',
}) => {
  return (
    <figure
      className={`professional-image-wrapper ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        width: width,
        height: height,
      }}
    >
      <div className="professional-image-container">
        <img
          src={src}
          alt={alt}
          className="professional-image"
          style={{ objectFit }}
          loading="lazy"
        />
      </div>
      {caption && <figcaption className="image-caption">{caption}</figcaption>}
    </figure>
  );
};

export default ProfessionalImage;
