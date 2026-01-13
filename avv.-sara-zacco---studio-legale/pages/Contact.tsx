import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-navy text-ceramic">
      <Section dark className="pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contatti</h1>
          <p className="text-xl text-gray-400 font-light">
            Per un primo confronto e per capire come muoversi.
          </p>
        </div>
      </Section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info Side */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-graphite p-6 rounded border border-gray-800 hover:border-terracotta/50 transition-colors">
                        <Phone className="w-6 h-6 text-terracotta mb-4" />
                        <h3 className="text-lg font-serif mb-1">Telefono Studio</h3>
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                    </div>
                    <div className="bg-graphite p-6 rounded border border-gray-800 hover:border-terracotta/50 transition-colors">
                        <Phone className="w-6 h-6 text-olive mb-4" />
                        <h3 className="text-lg font-serif mb-1">Cellulare</h3>
                        <a href={`tel:${CONTACT_INFO.mobile.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.mobile}</a>
                    </div>
                    <div className="bg-graphite p-6 rounded border border-gray-800 hover:border-terracotta/50 transition-colors">
                        <Mail className="w-6 h-6 text-azure mb-4" />
                        <h3 className="text-lg font-serif mb-1">Email</h3>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">{CONTACT_INFO.email}</a>
                    </div>
                    <div className="bg-graphite p-6 rounded border border-gray-800 hover:border-terracotta/50 transition-colors">
                        <Mail className="w-6 h-6 text-gray-500 mb-4" />
                        <h3 className="text-lg font-serif mb-1">PEC</h3>
                        <a href={`mailto:${CONTACT_INFO.pec}`} className="text-gray-300 hover:text-white transition-colors text-xs break-all">{CONTACT_INFO.pec}</a>
                        <p className="text-gray-500 text-xs mt-2">Per comunicazioni formali e notifiche.</p>
                    </div>
                </div>

                <div className="bg-graphite p-8 rounded border border-gray-800">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-terracotta mt-1" />
                        <div>
                            <h3 className="text-xl font-serif mb-2">Sede</h3>
                            <p className="text-gray-300">{CONTACT_INFO.address}</p>
                            <p className="text-gray-300">{CONTACT_INFO.city}</p>
                            
                            <div className="mt-6">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.8!2d14.7!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzAwLjAiTiAxNMKwNDInMDAuMCJF!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit" 
                                    width="100%" 
                                    height="200" 
                                    style={{ border: 0, opacity: 0.7 }} 
                                    loading="lazy"
                                    title="Mappa Studio"
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div>
                <ContactForm />
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;