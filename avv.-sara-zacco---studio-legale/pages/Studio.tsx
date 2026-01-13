import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { MapPin, Award, Scale } from 'lucide-react';

const Studio: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#E8E5DE] relative overflow-hidden">
      
      <Section className="bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-12">Avv. Sara Zacco</h1>
            
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200 mb-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-12 relative z-10">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-serif text-navy mb-8">Profilo Professionale</h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed font-sans text-lg md:text-xl font-light">
                            <p>
                                L’Avv. Sara Zacco è iscritta all’Ordine degli Avvocati di Ragusa (n. 1171) dal 30 ottobre 2007. 
                                Ha conseguito la Laurea in Giurisprudenza presso l’Università degli Studi di Catania.
                            </p>
                            <p>
                                Esercita l'attività professionale dal 2003, maturando una solida esperienza nella gestione 
                                di controversie civili, familiari e lavorative nel contesto del foro locale e regionale.
                            </p>
                            <p>
                                Lo studio offre servizi di consulenza, assistenza stragiudiziale, rappresentanza in giudizio 
                                e patrocinio a spese dello Stato (laddove sussistano i requisiti di legge).
                            </p>
                        </div>
                    </div>
                    
                    {/* Photo Badge */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-terracotta shadow-xl relative bg-navy">
                             <img 
                                src="https://i.ibb.co/x8B02GLV/sara-zacco.jpg" 
                                alt="Avv. Sara Zacco" 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-navy text-ceramic p-10 rounded-lg relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-terracotta/10 rounded-bl-full"></div>
                    <Scale className="w-10 h-10 text-terracotta mb-6" />
                    <h3 className="text-2xl font-serif mb-4">Approccio</h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        Niente promesse irrealizzabili o strategie aggressive fini a sé stesse. 
                        L'approccio dello studio si basa su:
                    </p>
                    <ul className="space-y-3 text-base text-gray-200">
                        <li>• Ascolto attento della problematica</li>
                        <li>• Analisi realistica di costi e benefici</li>
                        <li>• Ricerca di soluzioni bonarie quando possibile</li>
                        <li>• Determinazione in giudizio quando necessario</li>
                    </ul>
                </div>
                
                <div className="bg-terracotta text-ceramic p-10 rounded-lg relative overflow-hidden">
                     <div className="absolute right-0 bottom-0 w-24 h-24 bg-navy/10 rounded-tl-full"></div>
                    <MapPin className="w-10 h-10 text-white mb-6" />
                    <h3 className="text-2xl font-serif mb-4">Radicamento</h3>
                    <p className="text-white/95 text-base md:text-lg leading-relaxed">
                        Operiamo con base a Modica (RG) in Via Fosso Tantillo 19/B. 
                        La conoscenza delle dinamiche del foro locale è un valore aggiunto per il cliente.
                        Seguiamo posizioni anche fuori provincia quando la natura dell'incarico lo consente.
                    </p>
                </div>
            </div>

            <div className="text-center mt-12">
                <Button to="/contatti" variant="primary" className="px-10 py-4 text-lg">Contatta lo studio</Button>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Studio;