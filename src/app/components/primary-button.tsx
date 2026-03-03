import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export function PrimaryButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  glow = false,
  className = '',
  ...props 
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 text-white hover:shadow-lg hover:shadow-violet-500/50',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        rounded-xl font-medium transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glow ? 'animate-pulse shadow-2xl shadow-violet-600/60' : ''}
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
