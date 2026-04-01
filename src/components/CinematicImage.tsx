import React, { type CSSProperties } from 'react';
import './CinematicImage.css';

interface CinematicImageProps {
  src: string;
  alt: string;
  duration?: number; // in seconds (default: 7)
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

const CinematicImage: React.FC<CinematicImageProps> = ({
  src,
  alt,
  duration = 7,
  className = '',
  objectFit = 'cover',
}) => {
  const animationDuration: CSSProperties = {
    '--animation-duration': `${duration}s`,
  } as CSSProperties;

  return (
    <div className={`cinematic-container ${className}`} style={animationDuration}>
      <img
        src={src}
        alt={alt}
        className="cinematic-image"
        style={{
          objectFit: objectFit,
        }}
      />
    </div>
  );
};

export default CinematicImage;
