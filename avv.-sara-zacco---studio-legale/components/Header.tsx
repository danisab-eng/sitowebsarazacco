import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Definiamo le pagine che hanno uno sfondo scuro all'inizio
  const darkBackgroundPaths = ['/', '/contatti', '/aree-di-attivita'];
  const isDarkBackground = darkBackgroundPaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Aree di attività', path: '/aree-di-attivita' },
    { label: 'Come funziona', path: '/come-funziona' },
    { label: 'Lo Studio', path: '/lo-studio' },
  ];

  const useLightText = scrolled || isOpen || isDarkBackground;

  const textColorClass = useLightText 
    ? 'text-gray-300 hover:text-white' 
    : 'text-navy hover:text-terracotta';

  const logoTitleClass = useLightText ? 'text-ceramic' : 'text-navy';
  const logoSubtitleClass = useLightText ? 'text-gray-400' : 'text-navy/70';
  const mobileMenuButtonClass = useLightText ? 'text-white' : 'text-navy';

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isOpen 
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3 border-white/5' 
            : 'bg-transparent py-4 md:py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
              <div className={`w-10 h-10 border flex items-center justify-center rounded-sm transition-colors ${useLightText ? 'border-terracotta/50 bg-navy' : 'border-navy/20 bg-transparent'}`}>
                <span className={`font-serif text-xl transition-colors ${useLightText ? 'text-terracotta group-hover:text-ceramic' : 'text-navy group-hover:text-terracotta'}`}>SZ</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg leading-none transition-colors ${logoTitleClass}`}>Avv. Sara Zacco</span>
                <span className={`text-[10px] uppercase tracking-widest transition-colors ${logoSubtitleClass}`}>Studio Legale</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-terracotta font-medium' : textColorClass
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contatti" 
                className={`text-sm tracking-wide transition-colors duration-200 mr-2 ${
                    location.pathname === '/contatti' ? 'text-terracotta font-medium' : textColorClass
                }`}
              >
                Contatti
              </Link>
              <Button to="/contatti" variant="primary" className="text-sm px-4 py-2">
                Richiedi contatto
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden relative z-50 p-2 -mr-2 transition-colors ${mobileMenuButtonClass}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay - MOVED OUTSIDE HEADER TO FIX STACKING CONTEXT ISSUES */}
      <div 
        className={`md:hidden fixed inset-0 h-dvh bg-navy/95 backdrop-blur-xl z-40 transition-all duration-300 flex flex-col pt-28 px-6 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 h-full overflow-y-auto pb-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-3xl font-serif py-2 border-b border-white/5 ${
                location.pathname === link.path ? 'text-terracotta' : 'text-ceramic hover:text-terracotta'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contatti" 
            className={`text-3xl font-serif py-2 border-b border-white/5 ${
              location.pathname === '/contatti' ? 'text-terracotta' : 'text-ceramic hover:text-terracotta'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contatti
          </Link>
          
          <div className="mt-auto pt-8">
            <Button to="/contatti" variant="primary" className="w-full justify-center text-lg py-4 shadow-xl" onClick={() => setIsOpen(false)}>
              Richiedi contatto
            </Button>
            <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-widest">
              Avv. Sara Zacco - Studio Legale
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;