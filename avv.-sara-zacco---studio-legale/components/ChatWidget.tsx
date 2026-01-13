import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { CONTACT_INFO, PRACTICE_AREAS, FAQS } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Buongiorno. Sono l'assistente virtuale dell'Avv. Sara Zacco. Come posso esserle utile oggi?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Gemini Chat Session
  useEffect(() => {
    const initChat = async () => {
      try {
        // Construct the "Knowledge Base" from constants
        const practiceAreasText = PRACTICE_AREAS.map(p => `- ${p.title}: ${p.shortDescription}`).join('\n');
        const faqsText = FAQS.map(f => `D: ${f.question}\nR: ${f.answer}`).join('\n');
        
        const systemInstruction = `
          Sei l'assistente virtuale professionale dello Studio Legale dell'Avv. Sara Zacco.
          
          IL TUO OBIETTIVO:
          Fornire informazioni preliminari, spiegare le aree di competenza e guidare l'utente verso il contatto diretto (telefono o email) per questioni specifiche.
          
          INFORMAZIONI SULLO STUDIO:
          - Avvocato: Sara Zacco (Iscritta all'Ordine di Ragusa dal 2007).
          - Indirizzo: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}.
          - Telefono: ${CONTACT_INFO.phone}.
          - Cellulare: ${CONTACT_INFO.mobile}.
          - Email: ${CONTACT_INFO.email}.
          - PEC: ${CONTACT_INFO.pec}.
          - Orari: Lun-Ven, orari d'ufficio. Riceve su appuntamento.
          
          AREE DI COMPETENZA:
          ${practiceAreasText}
          
          DOMANDE FREQUENTI (FAQ):
          ${faqsText}
          
          REGOLE DI COMPORTAMENTO:
          1. Tono: Formale, cortese, empatico ("Lei"), professionale.
          2. NON dare consigli legali specifici su casi concreti. Se l'utente chiede un parere su un caso specifico, rispondi che per una valutazione accurata è necessario fissare un appuntamento e analizzare i documenti.
          3. Sii conciso. Risposte brevi e dirette (max 3-4 frasi se possibile).
          4. Se ti chiedono prezzi, rispondi che il preventivo viene fornito dopo il primo colloquio in base alla complessità.
          5. Parla solo italiano.
          
          DISCLAIMER OBBLIGATORIO:
          Se l'utente chiede azioni legali immediate, ricorda che sei un'intelligenza artificiale e non sostituisci il colloquio con l'Avvocato.
        `;

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const chat = ai.chats.create({
          model: 'gemini-3-flash-preview', 
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7, 
          },
        });
        setChatSession(chat);
      } catch (error) {
        console.error("Failed to initialize chat", error);
      }
    };

    if (isOpen && !chatSession) {
      initChat();
    }
  }, [isOpen, chatSession]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatSession) {
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                id: Date.now().toString(), 
                role: 'model', 
                text: "Mi scusi, al momento non riesco a connettermi al server di intelligenza artificiale. La prego di contattare lo studio telefonicamente." 
            }]);
            setIsLoading(false);
        }, 1000);
        return;
      }

      const response = await chatSession.sendMessage({ message: userMsg.text });
      const text = response.text;

      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: text || "Mi scusi, non ho capito. Può riformulare?" 
      }]);

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "Si è verificato un errore tecnico. La prego di contattare lo studio ai recapiti indicati nella sezione Contatti." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to format bold text (**text**) and clean up output
  const formatMessage = (text: string) => {
    if (!text) return "";
    // Split by the bold markdown syntax
    const parts = text.split(/\*\*(.*?)\*\*/g);
    
    return parts.map((part, index) => {
      // If the index is odd, it was inside the **...** marks, so render as bold
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold text-white/90">{part}</strong>;
      }
      // Otherwise render as normal text
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
        {/* Chat Window */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-navy border border-gray-700 w-[90vw] md:w-[380px] h-[500px] rounded-2xl shadow-2xl mb-4 pointer-events-auto flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-graphite p-4 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-[#8a4a2a] flex items-center justify-center shadow-inner">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-serif text-ceramic text-lg leading-none">Assistente Virtuale</h3>
                                <p className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy/50 scrollbar-thin scrollbar-thumb-gray-700">
                        {messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div 
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                                        msg.role === 'user' 
                                            ? 'bg-terracotta text-white rounded-tr-none' 
                                            : 'bg-graphite text-gray-200 border border-gray-800 rounded-tl-none'
                                    }`}
                                >
                                    {formatMessage(msg.text)}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-graphite border border-gray-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 text-terracotta animate-spin" />
                                    <span className="text-xs text-gray-400">Sto scrivendo...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-graphite border-t border-gray-800 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Scrivi qui la tua domanda..."
                            className="flex-1 bg-navy border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-terracotta transition-colors placeholder-gray-500"
                        />
                        <button 
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-terracotta hover:bg-[#b05a30] text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                    
                    {/* Footer Disclaimer */}
                    <div className="px-4 py-1 bg-graphite text-[10px] text-center text-gray-600 border-t border-gray-800/50">
                        AI Assistant - Non costituisce parere legale vincolante.
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* FAB Button */}
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-terracotta rounded-full shadow-2xl flex items-center justify-center text-white pointer-events-auto hover:bg-[#b05a30] transition-colors relative"
        >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            {!isOpen && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-navy"></span>
            )}
        </motion.button>
    </div>
  );
};

export default ChatWidget;