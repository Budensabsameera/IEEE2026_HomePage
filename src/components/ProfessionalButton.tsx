/**
 * Professional Button Component - IEEE Academic Style
 * Multiple variants for different use cases
 */

import React from 'react';
import '../styles/ProfessionalButton.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ProfessionalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const ProfessionalButton = React.forwardRef<
  HTMLButtonElement,
  ProfessionalButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      isLoading = false,
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`professional-button button-${variant} button-${size} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className="button-spinner" />}
        {icon && iconPosition === 'left' && <span className="button-icon">{icon}</span>}
        <span className="button-text">{children}</span>
        {icon && iconPosition === 'right' && <span className="button-icon">{icon}</span>}
      </button>
    );
  }
);

ProfessionalButton.displayName = 'ProfessionalButton';

export default ProfessionalButton;
