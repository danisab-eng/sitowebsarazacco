import React, { useEffect } from 'react';
import Section from '../components/Section';
import { useLocation } from 'react-router-dom';

const Legal: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pt-24 pb-12 bg-ceramic text-navy min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        
        <Section className="mb-12">
            <h1 className="text-3xl font-serif mb-6 border-b border-gray-300 pb-4">Note Legali & Disclaimer</h1>
            <div className="prose text-sm text-gray-600">
                <p>
                    I contenuti del presente sito web hanno scopo esclusivamente informativo e non costituiscono in alcun modo consulenza legale o professionale, 
                    né proposta contrattuale. L'utilizzo delle informazioni qui contenute non instaura alcun rapporto avvocato-cliente.
                </p>
                <p>
                    L'Avv. Sara Zacco non si assume alcuna responsabilità per azioni intraprese sulla base delle informazioni contenute nel sito senza una preventiva 
                    consulenza professionale personalizzata. L'invio di email o la compilazione del modulo di contatto non comporta l'accettazione dell'incarico professionale.
                </p>
                <p>
                    Il sito è conforme agli art. 17 e 17 bis del Codice Deontologico Forense in materia di informazione sull'esercizio dell'attività professionale.
                </p>
                <p>
                    <strong>Responsabile del sito:</strong> Avv. Sara Zacco<br/>
                    P.IVA: [Numero P.IVA]<br/>
                    Ordine Avvocati di Ragusa n. 1171<br/>
                    Polizza assicurativa professionale: [Estremi polizza, se disponibili]
                </p>
            </div>
        </Section>

        <Section className="mb-12" id="privacy">
            <h1 className="text-3xl font-serif mb-6 border-b border-gray-300 pb-4">Privacy Policy</h1>
            <div className="prose text-sm text-gray-600">
                <h3>1. Titolare del Trattamento</h3>
                <p>
                    Il Titolare del trattamento dei dati è l'Avv. Sara Zacco, con studio in Via Fosso Tantillo 19/B, 97015 Modica (RG).
                    Email: studiolegalesarazacco@gmail.com
                </p>
                
                <h3>2. Tipologia di dati trattati</h3>
                <p>
                    <strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati 
                    su questo sito o la compilazione del form contatti comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, 
                    nonché degli eventuali altri dati personali inseriti nella missiva.
                </p>
                <p>
                    <strong>Dati di navigazione:</strong> I sistemi informatici preposti al funzionamento di questo sito acquisiscono alcuni dati personali la cui trasmissione 
                    è implicita nell'uso dei protocolli di comunicazione di Internet.
                </p>

                <h3>3. Finalità del trattamento</h3>
                <p>
                    I dati personali sono trattati per le seguenti finalità:
                    <ul>
                        <li>Rispondere a richieste di informazioni o contatto;</li>
                        <li>Eseguire obblighi precontrattuali (es. preventivi);</li>
                        <li>Adempiere agli obblighi previsti dalla legge.</li>
                    </ul>
                </p>

                <h3>4. Base giuridica</h3>
                <p>
                    Il trattamento si basa sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR) espresso mediante l'invio della richiesta, 
                    e sull'esecuzione di misure precontrattuali adottate su richiesta dello stesso (art. 6, par. 1, lett. b GDPR).
                </p>

                <h3>5. Modalità e durata del trattamento</h3>
                <p>
                    Il trattamento è effettuato con strumenti automatizzati e cartacei. I dati saranno conservati per il tempo strettamente necessario a conseguire 
                    gli scopi per cui sono stati raccolti o fino alla revoca del consenso, salvo obblighi di legge.
                </p>

                <h3>6. Diritti dell'interessato</h3>
                <p>
                    Gli interessati hanno il diritto di chiedere al Titolare l'accesso ai dati personali, la rettifica, la cancellazione degli stessi, 
                    la limitazione del trattamento o di opporsi al trattamento (artt. 15 e ss. GDPR). Le richieste vanno rivolte all'indirizzo email del Titolare.
                </p>
            </div>
        </Section>

        <Section id="cookies">
            <h1 className="text-3xl font-serif mb-6 border-b border-gray-300 pb-4">Cookie Policy</h1>
            <div className="prose text-sm text-gray-600">
                <p>
                    Questo sito utilizza cookie per garantire il corretto funzionamento delle procedure e migliorare l'esperienza di uso delle applicazioni online.
                </p>
                <h3>Cookie Tecnici</h3>
                <p>
                    Sono indispensabili per il corretto funzionamento del sito e consentono la navigazione e l'uso dei servizi. 
                    Senza questi cookie, il sito potrebbe non funzionare correttamente. Per questi cookie non è richiesto il consenso.
                </p>
                <h3>Cookie Analytics</h3>
                <p>
                    Questo sito potrebbe utilizzare cookie di terze parti (es. Google Analytics) in forma anonimizzata per raccogliere informazioni, 
                    in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso. Tali cookie sono assimilati ai cookie tecnici.
                </p>
                <h3>Gestione dei Cookie</h3>
                <p>
                    L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. 
                    La disabilitazione dei cookie "terze parti" non pregiudica in alcun modo la navigabilità.
                </p>
            </div>
        </Section>

      </div>
    </div>
  );
};

export default Legal;