import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { Phone, FileSearch, CalendarCheck, ClipboardList, Clock, ShieldCheck, ArrowDown } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Phone,
      title: "1. Descrizione Breve",
      desc: "Compili il modulo o chiami lo studio. Ci descriva in poche righe l'accaduto o la necessità. Non servono termini tecnici, basta chiarezza."
    },
    {
      icon: FileSearch,
      title: "2. Valutazione Preliminare",
      desc: "Valutiamo la richiesta per confermare che rientri nelle nostre competenze e che non ci siano conflitti di interessi. Le risponderemo indicando se possiamo procedere."
    },
    {
      icon: CalendarCheck,
      title: "3. Appuntamento",
      desc: "Fissiamo un incontro (telefonico o in studio a Modica) per approfondire, analizzare documenti e definire la strategia."
    }
  ];

  return (
    <div className="pt-20 bg-ceramic min-h-screen text-navy relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <Section className="pb-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 rounded-full bg-terracotta/10 text-terracotta mb-6"
          >
            <ArrowDown size={28} className="animate-bounce" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Il primo contatto: cosa aspettarsi</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Un percorso lineare per ridurre l'ansia e rendere tutto prevedibile.
          </p>
        </div>
      </Section>

      <div className="max-w-5xl mx-auto px-4 pb-24 relative z-10">
        {/* Timeline Container */}
        <div className="relative space-y-16 md:space-y-32">
            
            {/* The Vertical Line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0 hidden md:block">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-terracotta via-terracotta to-transparent"
                />
            </div>
            
            {/* Mobile Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:hidden">
                 <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-terracotta via-terracotta to-transparent"
                />
            </div>

            {steps.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0; // In desktop: Even (0, 2) is Left, Odd (1) is Right
                
                return (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                        className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Center Dot/Icon */}
                        <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                            <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 + (idx * 0.2) }}
                                className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-ceramic bg-terracotta text-white shadow-lg flex items-center justify-center"
                            >
                                <Icon size={24} />
                            </motion.div>
                        </div>

                        {/* Content Card */}
                        <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                            <motion.div 
                                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                                className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group"
                            >
                                {/* Decorative corner */}
                                <div className={`absolute top-0 w-24 h-24 bg-gradient-to-br from-terracotta/5 to-transparent pointer-events-none transition-transform duration-500 group-hover:scale-150 ${isEven ? 'right-0 rounded-bl-full' : 'left-0 rounded-br-full'}`}></div>
                                
                                <h3 className="font-serif text-2xl md:text-3xl text-navy mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed relative z-10">{step.desc}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )
            })}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32">
            
            {/* Checklist Card */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-navy text-ceramic p-10 rounded-2xl shadow-xl relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-terracotta/20 rounded-lg">
                            <ClipboardList className="text-terracotta w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-serif">Cosa preparare</h3>
                    </div>
                    <ul className="space-y-6">
                        {[
                            "Cronistoria sintetica dei fatti (date e eventi chiave).",
                            "Eventuali atti ricevuti (multe, citazioni, lettere).",
                            "Dati della controparte (se nota)."
                        ].map((item, i) => (
                            <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex gap-4 text-gray-300 text-lg items-start"
                            >
                                <span className="w-2 h-2 bg-terracotta rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(197,106,61,0.6)]" />
                                <span className="flex-1">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Timing Card */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white border border-gray-200 p-10 rounded-2xl relative overflow-hidden shadow-lg group"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-olive to-emerald-600"></div>
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-olive/10 rounded-lg">
                        <Clock className="text-olive w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-serif text-navy">Tempi di risposta</h3>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Sappiamo che le questioni legali spesso generano ansia. 
                    <strong className="text-navy font-medium block mt-2">Rispondiamo alle richieste di contatto entro 24-48 ore lavorative.</strong>
                </p>
                <p className="text-gray-500 text-base mb-10 italic">
                    Se l'urgenza è massima, consigliamo di telefonare.
                </p>
                
                <div className="flex items-center gap-4 text-sm font-medium text-olive bg-olive/5 p-6 rounded-xl border border-olive/10">
                    <ShieldCheck size={20} />
                    I tuoi dati sono trattati con la massima riservatezza.
                </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-24 text-center"
        >
            <Button to="/contatti" variant="primary" className="px-12 py-5 text-xl shadow-xl shadow-terracotta/20">Richiedi un primo contatto</Button>
            <div className="mt-8">
                <Button to="tel:0932762223" variant="outline" className="text-base border-gray-300 text-gray-500 hover:text-navy hover:border-navy">
                    Chiama lo studio: 0932 762223
                </Button>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;