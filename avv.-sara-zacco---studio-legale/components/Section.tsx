import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false, delay = 0 }) => {
  return (
    <section 
      id={id} 
      className={`py-12 md:py-24 ${dark ? 'bg-navy text-ceramic' : 'bg-ceramic text-navy'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;