import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Quote } from 'lucide-react';
import Button from './Button';

export interface NarrativeContent {
  title: string;
  story: string;
  normalization: string;
  risk: string;
  role: string;
  cta: string;
}

interface NarrativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: NarrativeContent | null;
}

const NarrativeModal: React.FC<NarrativeModalProps> = ({ isOpen, onClose, content }) => {
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/90 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f141e] border border-gray-800 w-full max-w-lg rounded-xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent" />

              {/* Header with Close */}
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-serif text-ceramic mb-8 leading-tight">
                  {content.title}
                </h2>

                <div className="space-y-8 text-gray-300 font-light leading-relaxed">
                    
                    {/* Story */}
                    <div className="relative pl-6 border-l border-terracotta/30">
                        <p className="text-lg">{content.story}</p>
                    </div>

                    {/* Normalization */}
                    <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                        <p className="text-sm text-gray-400 italic mb-2">È una reazione comune...</p>
                        <p>{content.normalization}</p>
                    </div>

                    {/* Silent Risk */}
                    <div>
                        <h4 className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                             Il rischio silenzioso
                        </h4>
                        <p className="text-white/90">{content.risk}</p>
                    </div>

                    {/* Lawyer Role (Repositioning) */}
                    <div>
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                             Cosa facciamo insieme
                        </h4>
                        <p className="text-sm">{content.role}</p>
                    </div>

                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 md:p-8 border-t border-gray-800 bg-[#0B1220] flex flex-col items-center gap-4 text-center">
                <Button to="/contatti" variant="primary" className="w-full justify-center" onClick={onClose}>
                    {content.cta} <ArrowRight size={16} className="ml-2" />
                </Button>
                <button onClick={onClose} className="text-xs text-gray-500 hover:text-gray-300 underline">
                    Chiudi e torna alle aree
                </button>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NarrativeModal;