import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { MAKE_WEBHOOK_URL } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: '',
    privacy: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacy: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Invio dei dati al Webhook di Make
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Includiamo data e ora, oltre ai dati del form
        body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...formData
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
            name: '',
            phone: '',
            email: '',
            area: '',
            message: '',
            privacy: false
        });
      } else {
        throw new Error('Errore nella risposta del server');
      }
    } catch (error) {
      console.error("Errore invio modulo:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-olive h-full flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-olive" />
        </div>
        <h3 className="text-2xl font-serif text-navy mb-4">Richiesta inviata con successo</h3>
        <p className="text-gray-600 mb-8 max-w-sm">
            Grazie per aver contattato lo studio. <br/>
            L'Avv. Zacco ha ricevuto la tua notifica e ti ricontatterà entro 24/48 ore lavorative.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
            Invia un'altra richiesta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-terracotta relative">
      
      {/* Loading Overlay */}
      {status === 'submitting' && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-lg">
             <Loader2 className="w-12 h-12 text-terracotta animate-spin mb-4" />
             <p className="text-navy font-medium">Invio in corso...</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Nome e Cognome *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all text-navy"
            placeholder="Il tuo nome"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Telefono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all text-navy"
              placeholder="Il tuo numero"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all text-navy"
              placeholder="La tua email (opzionale)"
            />
          </div>
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-medium text-navy mb-1">Ambito di interesse</label>
          <div className="relative">
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all appearance-none text-navy"
            >
              <option value="" disabled>Seleziona un ambito</option>
              <option value="Civile">Diritto Civile</option>
              <option value="Famiglia">Diritto di Famiglia</option>
              <option value="Lavoro">Diritto del Lavoro</option>
              <option value="Sinistri">Infortunistica</option>
              <option value="Condominio">Condominio</option>
              <option value="Recupero">Recupero Crediti</option>
              <option value="Previdenza">Previdenza Sociale</option>
              <option value="Altro">Altro</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Messaggio *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all text-navy"
            placeholder="Racconti in breve cosa sta succedendo e qual è l'urgenza."
          ></textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              checked={formData.privacy}
              onChange={handleCheckboxChange}
              className="focus:ring-terracotta h-4 w-4 text-terracotta border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy" className="font-medium text-navy">
              Acconsento al trattamento dei dati personali secondo la <a href="#/privacy" className="text-terracotta hover:underline">Privacy Policy</a>
            </label>
          </div>
        </div>

        {status === 'error' && (
            <div className="bg-red-50 text-red-800 p-4 rounded flex items-center gap-3">
                <AlertCircle size={20} />
                <p>Si è verificato un errore tecnico. Per favore riprova o chiama direttamente lo studio.</p>
            </div>
        )}

        <div>
          <Button type="submit" variant="primary" className="w-full">
            Invia richiesta
          </Button>
          <p className="mt-3 text-xs text-gray-500 text-center">
            Risposta appena possibile. Il primo contatto non comporta impegno.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;