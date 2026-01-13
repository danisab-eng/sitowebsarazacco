import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className={`w-full py-6 flex justify-between items-center text-left focus:outline-none group transition-all duration-300 ${isOpen ? 'text-terracotta' : 'text-ceramic'}`}
        onClick={(e) => {
             // Prevents the click from immediately triggering the document listener if it were set to bubble, 
             // though with the current check ref.contains it is safe.
             // We keep it clean.
             onToggle();
        }}
      >
        <span className={`text-xl md:text-2xl font-serif font-medium group-hover:text-terracotta transition-colors pr-6 ${isOpen ? 'text-terracotta' : 'text-ceramic'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          className={`flex-shrink-0 ${isOpen ? 'text-terracotta' : 'text-gray-500 group-hover:text-terracotta'}`}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }} // Modern easing
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-300 font-sans leading-relaxed text-lg font-light border-l-2 border-terracotta/20 pl-6 ml-1 pr-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If clicking outside the container, close all
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    };

    // Use mousedown to detect the start of a click outside, 
    // which feels snappier than click (which waits for mouseup)
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
        ref={containerRef}
        className="w-full max-w-4xl mx-auto bg-navy p-8 md:p-10 rounded-xl border border-gray-800 shadow-2xl"
    >
      {items.map((item, index) => (
        <AccordionItem 
            key={index} 
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;