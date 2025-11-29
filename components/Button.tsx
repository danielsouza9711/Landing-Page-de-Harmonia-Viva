import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
}

const variants = {
  primary: "bg-brand-green hover:bg-brand-greenHover text-white shadow-brand-green/20",
  secondary: "bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-90 text-white shadow-brand-purple/20",
  outline: "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/10"
};

const baseStyles = "py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg active:scale-95";

export const Button: React.FC<ButtonProps> = memo(({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = true,
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      aria-label={typeof children === 'string' ? children : 'Botão de ação'}
      role="button"
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
    </button>
  );
});

Button.displayName = 'Button';