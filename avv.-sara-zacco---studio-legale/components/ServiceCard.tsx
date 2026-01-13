import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div
      className="bg-graphite/50 border border-ceramic/10 p-8 rounded-lg hover:border-terracotta/50 transition-colors duration-300 cursor-pointer h-full flex flex-col group relative overflow-hidden"
      whileHover={{ y: -5, backgroundColor: "rgba(15, 17, 21, 0.8)" }}
      onClick={onClick}
    >
      <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-6 group-hover:bg-terracotta transition-colors duration-300 relative z-10">
        <Icon className="w-7 h-7 text-terracotta group-hover:text-ceramic transition-colors duration-300" />
      </div>
      
      <h3 className="text-2xl font-serif text-ceramic mb-3 relative z-10">{title}</h3>
      
      <p className="text-gray-400 font-sans text-base leading-relaxed flex-grow relative z-10 mb-6">
        {description}
      </p>

      {/* Visual cue for interaction */}
      <div className="mt-auto flex items-center text-terracotta text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
        Scopri di più <ArrowRight size={16} className="ml-1" />
      </div>

      {/* Subtle hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-terracotta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default ServiceCard;