import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  // WhatsApp Configuration
  const whatsappNumber = '39' + CONTACT_INFO.mobile.replace(/\s/g, '');
  const message = "Buongiorno,\nho una questione legale e vorrei capire se è possibile fissare un primo contatto.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-graphite text-gray-400 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-terracotta/50 flex items-center justify-center rounded-sm bg-navy">
                  <span className="font-serif text-xl text-terracotta">SZ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg leading-none text-ceramic">Avv. Sara Zacco</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">Studio Legale</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Assistenza e consulenza legale a Modica e provincia. 
                Chiarezza, etica e radicamento nel territorio dal 2003.
              </p>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-ceramic font-serif text-lg mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Studio</span>
                <span className="text-white">{CONTACT_INFO.address}, {CONTACT_INFO.city}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Telefono</span>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-white hover:text-terracotta transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              
              {/* WhatsApp Button replacement for Mobile Number */}
              <li className="pt-2">
                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 text-sm font-medium group"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform group-hover:scale-110">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Scrivici su WhatsApp
                </a>
              </li>

              <li className="flex flex-col mt-2">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Email</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-terracotta transition-colors">{CONTACT_INFO.email}</a>
              </li>
               <li className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider">PEC</span>
                <a href={`mailto:${CONTACT_INFO.pec}`} className="text-white hover:text-terracotta transition-colors break-all">{CONTACT_INFO.pec}</a>
                <span className="text-gray-600 text-[10px] mt-1">Per comunicazioni formali e notifiche.</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-ceramic font-serif text-lg mb-4">Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/aree-di-attivita" className="hover:text-terracotta transition-colors">Aree di attività</Link></li>
              <li><Link to="/come-funziona" className="hover:text-terracotta transition-colors">Come funziona</Link></li>
              <li><Link to="/lo-studio" className="hover:text-terracotta transition-colors">Lo Studio</Link></li>
              <li><Link to="/contatti" className="hover:text-terracotta transition-colors">Richiedi un contatto</Link></li>
            </ul>
             <h4 className="text-ceramic font-serif text-lg mt-8 mb-4">Note Legali</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-terracotta transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-terracotta transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-terracotta transition-colors">Note Legali & Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>&copy; {new Date().getFullYear()} Avv. Sara Zacco. P.IVA e dati fiscali disponibili su richiesta. Tutti i diritti riservati.</p>
          <p>Le informazioni presenti sul sito hanno finalità informativa e non costituiscono consulenza legale.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;