import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PracticeArea } from '../types';
import Button from './Button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  area: PracticeArea | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, area }) => {
  if (!area) return null;

  const Icon = area.icon;

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy border border-gray-700 w-full max-w-2xl rounded-lg shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Decorative Header Background */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-terracotta/10 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="p-6 md:p-8 flex items-start justify-between relative z-10 pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-terracotta flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-ceramic">{area.title}</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <h3 className="text-terracotta font-medium mb-3 text-sm uppercase tracking-wide">Di cosa ci occupiamo</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {area.fullDescription}
                </p>
                
                <div className="mt-8 p-4 bg-graphite rounded border border-gray-800">
                    <p className="text-sm text-gray-400 italic">
                        La gestione di ogni caso specifico richiede un'analisi approfondita dei documenti e della situazione di fatto.
                    </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 md:p-8 border-t border-gray-800 bg-graphite/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link 
                    to="/aree-di-attivita" 
                    onClick={onClose}
                    className="text-gray-400 hover:text-terracotta text-sm flex items-center gap-2 transition-colors order-2 sm:order-1"
                >
                    Vedi tutte le aree <ArrowRight size={14} />
                </Link>
                <div className="flex gap-3 w-full sm:w-auto order-1 sm:order-2">
                    <Button onClick={onClose} variant="secondary" className="flex-1 sm:flex-none">
                        Chiudi
                    </Button>
                    <Button to="/contatti" variant="primary" className="flex-1 sm:flex-none">
                        Contattaci
                    </Button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;