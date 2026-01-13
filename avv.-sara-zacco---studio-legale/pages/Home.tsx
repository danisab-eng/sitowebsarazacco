import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, CheckCircle2, Phone, Star, AlertTriangle, MessageSquareX, MicOff, FileWarning } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import Accordion from '../components/Accordion';
import ServiceModal from '../components/ServiceModal';
import { PRACTICE_AREAS, FAQS } from '../constants';
import { PracticeArea } from '../types';

const Home: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy text-ceramic pt-32 pb-0 md:pt-20 md:pb-0">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111c30] to-[#0B1220] opacity-95" />
            <motion.div 
                animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
            />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center w-full mb-20 md:mb-32">
            {/* BLOCK 1: HEADLINE */}
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tight break-words text-white"
            >
                Hai una questione legale e <br className="hidden md:block"/>
                <span className="text-terracotta italic">vuoi capire come muoverti?</span>
            </motion.h1>
            
            {/* BLOCK 2: UNIFIED BODY TEXT */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mb-10 max-w-3xl w-full mx-auto"
            >
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    Se temi costi, tempi e decisioni sbagliate, un confronto chiaro può fare la differenza.
                    <span className="block mt-4 text-white font-normal md:inline md:mt-0 md:ml-2">
                        Assistenza e consulenza legale a Modica e provincia, per capire come procedere con ordine e consapevolezza.
                    </span>
                </p>
            </motion.div>

            {/* ACTION AREA */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center w-full"
            >
                {/* CTA PRIMARIA */}
                <Button 
                    to="/contatti" 
                    variant="primary" 
                    className="w-full sm:w-auto min-w-[280px] px-8 py-5 text-xl shadow-xl shadow-black/20 mb-3 font-medium"
                >
                    Richiedi un primo contatto
                </Button>
                
                {/* Microcopy */}
                <p className="text-sm text-gray-400 mb-8 font-light tracking-wide opacity-80">
                    Il primo contatto non comporta impegno.
                </p>

                {/* CTA SECONDARIA */}
                <a 
                    href="tel:0932762223"
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 px-6 py-3 rounded-full hover:bg-white/5 border border-white/10 hover:border-terracotta/50 backdrop-blur-sm mt-2"
                >
                    <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center group-hover:border-terracotta group-hover:text-terracotta transition-colors bg-navy/50">
                        <Phone size={14} />
                    </div>
                    <span className="text-base font-medium tracking-wider uppercase">Chiama lo studio</span>
                </a>
            </motion.div>
        </div>

        {/* Pillars - Repositioned for Mobile Visibility */}
        <div className="w-full relative bg-graphite border-t border-white/10 py-10 mt-0 md:mt-0 md:absolute md:bottom-0 md:left-0 md:bg-gradient-to-t md:from-navy md:to-transparent md:pt-12 md:pb-10 md:border-0 z-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                    { title: "Ascolto e metodo", text: "Per inquadrare la situazione e valutare i passi sensati." },
                    { title: "Chiarezza e trasparenza", text: "Spiegazioni comprensibili, senza tecnicismi inutili." },
                    { title: "Esperienza sul territorio", text: "Attività professionale dal 2003, con studio a Modica." }
                ].map((pillar, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (idx * 0.1) }}
                        className="border-l-2 border-terracotta/30 pl-6 py-2"
                    >
                        <h3 className="font-serif text-2xl text-ceramic mb-2">{pillar.title}</h3>
                        <p className="text-base text-gray-400 leading-relaxed">{pillar.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Aree di Attività (Preview) */}
      <Section dark id="aree">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="w-full md:w-auto">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-ceramic">Aree di attività</h2>
                <p className="text-gray-400 max-w-xl text-lg md:text-xl font-light">
                    Cosa posso seguire per tutelare i tuoi interessi. Clicca sulle schede per approfondire.
                </p>
            </div>
            <Link to="/aree-di-attivita" className="text-terracotta hover:text-white transition-colors flex items-center gap-2 mt-6 md:mt-0 self-start md:self-end text-lg font-medium">
                Vedi tutte le aree <ArrowRight size={20} />
            </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.slice(0, 8).map((area, idx) => (
                <ServiceCard 
                    key={area.id}
                    title={area.title}
                    description={area.shortDescription}
                    icon={area.icon}
                    onClick={() => setSelectedArea(area)}
                />
            ))}
        </div>
      </Section>

      {/* Anti-Anxiety Section */}
      <Section className="bg-ceramic text-navy relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <Scale className="w-14 h-14 text-terracotta mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-navy leading-tight">Prima di agire, <br/> chiarire è già tutela.</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed px-2 font-light">
                Quando c’è di mezzo una questione legale è normale sentirsi sotto pressione. 
                Spesso il rischio è fare scelte affrettate o comunicazioni che complicano la situazione. 
                Un primo confronto serve a mettere ordine: capire tempi, alternative e documenti utili.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-left">
                {[
                    "Chiarire priorità e opzioni",
                    "Ridurre incertezza e confusione",
                    "Valutare un percorso sostenibile"
                ].map((item, i) => (
                    <div key={i} className="flex items-start sm:items-center gap-4 bg-white p-6 rounded shadow-sm border border-gray-100 relative overflow-hidden">
                        <CheckCircle2 className="text-olive w-6 h-6 flex-shrink-0 mt-0.5 sm:mt-0 relative z-10" />
                        <span className="font-medium text-navy text-lg relative z-10">{item}</span>
                        {/* Subtle background element in cards */}
                        <div className="absolute right-0 bottom-0 w-16 h-16 bg-terracotta/5 rounded-tl-full translate-x-4 translate-y-4"></div>
                    </div>
                ))}
            </div>
        </div>
      </Section>

      {/* Come Funziona */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-terracotta/5 skew-x-12 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16 text-ceramic">Come funziona il primo contatto</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { step: "01", title: "Descrizione", text: "Ci descrive in breve cosa sta succedendo." },
                    { step: "02", title: "Valutazione", text: "Valutiamo e le indichiamo il passo più sensato." },
                    { step: "03", title: "Appuntamento", text: "Se utile, fissiamo un appuntamento (in studio o telefonico)." }
                ].map((item, idx) => (
                    <div key={idx} className="relative p-10 bg-navy border border-gray-800 rounded-lg text-center group hover:border-terracotta/30 transition-colors">
                        <div className="text-7xl font-serif text-gray-800 absolute top-4 left-1/2 -translate-x-1/2 opacity-50 group-hover:text-terracotta/10 transition-colors">{item.step}</div>
                        <div className="relative z-10 pt-8">
                            <h3 className="text-2xl font-serif text-ceramic mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-16">
                <Button to="/contatti" variant="primary" className="px-10 py-4 text-lg">Richiedi un primo contatto</Button>
            </div>
        </div>
      </Section>

      {/* NEW SECTION: Common Errors / Urgency */}
      <Section dark className="bg-[#1a1f2e] relative overflow-hidden border-y border-white/5">
         {/* Warning Accent Gradient */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
         
         <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
                >
                    <AlertTriangle size={18} />
                    <span className="text-sm font-bold uppercase tracking-wider">Errori da evitare</span>
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white leading-tight">3 errori che peggiorano una situazione legale</h2>
                <p className="text-gray-400 text-xl font-light">
                    Spesso il danno maggiore non lo causa la controparte, ma le azioni impulsive fatte prima di chiedere consiglio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Error 1 */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#131722] p-8 md:p-10 rounded-xl border border-red-900/20 hover:border-red-500/30 transition-colors group"
                >
                    <div className="w-16 h-16 rounded-full bg-red-500/5 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
                        <MessageSquareX className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-4">Scrivere messaggi impulsivi</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Chat, email o messaggi vocali inviati con rabbia diventano prove documentali che possono essere usate contro di te in giudizio. L'emotività è spesso la peggior consigliera.
                    </p>
                </motion.div>

                {/* Error 2 */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#131722] p-8 md:p-10 rounded-xl border border-red-900/20 hover:border-red-500/30 transition-colors group"
                >
                    <div className="w-16 h-16 rounded-full bg-red-500/5 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
                        <MicOff className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-4">Parlare senza una guida</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Confrontarsi direttamente con la controparte o il suo legale senza preparazione rischia di farti rivelare strategie o fare ammissioni parziali che indeboliscono la tua difesa.
                    </p>
                </motion.div>

                {/* Error 3 */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#131722] p-8 md:p-10 rounded-xl border border-red-900/20 hover:border-red-500/30 transition-colors group"
                >
                    <div className="w-16 h-16 rounded-full bg-red-500/5 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
                        <FileWarning className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-4">Firmare per "quieto vivere"</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Accettare condizioni svantaggiose o firmare accordi frettolosi pur di chiudere la questione porta spesso alla rinuncia definitiva di diritti importanti e irrecuperabili.
                    </p>
                </motion.div>
            </div>

            <div className="mt-16 text-center">
                 <p className="text-gray-400 mb-8 italic font-light text-lg">
                    "Fermati. Non fare nulla di cui potresti pentirti. Parliamone prima."
                 </p>
                 <Button to="/contatti" variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 px-8 py-3 text-lg">
                    Evita questi rischi, contattaci
                 </Button>
            </div>
         </div>
      </Section>

      {/* Lo Studio (Short) */}
      <Section className="bg-[#E8E5DE] relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto relative z-10">
            <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 text-navy">Lo Studio</h2>
                <div className="prose-lg text-gray-700 mb-10 leading-relaxed font-light">
                    <p className="mb-6">
                        L’Avv. Sara Zacco è iscritta all’Ordine degli Avvocati di Ragusa (n. 1171) dal 30 ottobre 2007 
                        ed esercita attività professionale dal 2003.
                    </p>
                    <p>
                        Laureata in Giurisprudenza presso l’Università di Catania, svolge attività di consulenza e assistenza, 
                        sia stragiudiziale sia giudiziale, con un approccio fondato sulla trasparenza e sulla concretezza.
                    </p>
                </div>
                <Link to="/lo-studio" className="text-terracotta text-lg font-medium hover:underline inline-flex items-center gap-2">
                    Approfondisci profilo <ArrowRight size={20} />
                </Link>
            </div>
            <div className="flex-1 w-full flex justify-center">
                {/* Profile Photo */}
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-terracotta bg-navy">
                     <img 
                        src="https://i.ibb.co/x8B02GLV/sara-zacco.jpg"
                        alt="Avv. Sara Zacco" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
      </Section>

      {/* Reviews (Linked to Google) */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-serif mb-6 text-ceramic">Cosa dicono</h2>
             <p className="text-gray-400 text-lg">
                La fiducia è alla base del rapporto professionale.
             </p>
        </div>
        
        <div className="max-w-3xl mx-auto text-center bg-navy border border-gray-800 p-10 md:p-14 rounded-2xl shadow-lg relative overflow-hidden group hover:border-terracotta/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent opacity-50"></div>
            
            <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                ))}
            </div>
            
            <p className="text-2xl md:text-3xl font-serif text-white mb-10 leading-relaxed italic">
                "Professionalità, competenza e umanità. <br/>
                Leggi le recensioni verificate dei clienti su Google."
            </p>

            <Button 
                to="https://share.google/hiTE0UNibvb0DaqJy" 
                variant="secondary"
                external
                className="hover:text-terracotta text-lg px-8 py-4"
            >
                Leggi le recensioni su Google
            </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-ceramic relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-navy">Domande Frequenti</h2>
            <Accordion items={FAQS} />
            
            {/* NEW PRO CTA BLOCK */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto mt-20 text-center"
            >
                <div className="bg-navy p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden group">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent opacity-50"></div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                        Il tuo caso è unico, le risposte online no.
                    </h3>
                    <p className="text-gray-400 mb-10 text-xl leading-relaxed font-light">
                        Leggere aiuta a orientarsi, ma solo un confronto diretto può darti la certezza della strada da percorrere. 
                        Smetti di cercare conferme generiche: parliamone concretamente.
                    </p>
                    
                    <div className="flex flex-col items-center gap-4">
                         <Button to="/contatti" variant="primary" className="px-10 py-5 text-xl shadow-xl shadow-black/20">
                            Richiedi un primo contatto
                        </Button>
                        <span className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">
                            Senza impegno • Risposta in 24/48h
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
      </Section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={!!selectedArea}
        onClose={() => setSelectedArea(null)}
        area={selectedArea}
      />
    </div>
  );
};

export default Home;