import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta";
  
  const variants = {
    primary: "bg-terracotta text-ceramic hover:bg-[#b05a30] shadow-lg hover:shadow-xl",
    secondary: "bg-navy text-ceramic border border-ceramic/20 hover:bg-graphite",
    outline: "border border-terracotta text-terracotta hover:bg-terracotta/10"
  };

  const Component = to ? Link : motion.button;
  
  const content = (
    <span className="flex items-center gap-2">
      {children}
    </span>
  );

  if (to) {
    if (external) {
      return (
        <a href={to} className={`${baseStyles} ${variants[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
      )
    }
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;