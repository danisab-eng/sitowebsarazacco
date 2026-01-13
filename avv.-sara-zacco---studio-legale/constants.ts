import { Scale, Users, Briefcase, HeartHandshake, Stethoscope, Building, BadgeEuro, Landmark, ShieldAlert, FileText } from 'lucide-react';
import { PracticeArea, ContactInfo, FAQItem } from './types';

// CONFIGURAZIONE WEBHOOK MAKE
export const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/ds4im5kvk0gn5b9nfwvkm02ud3qjsa52";

export const CONTACT_INFO: ContactInfo = {
  phone: "0932 762223",
  mobile: "338 483 0855",
  email: "studiolegalesarazacco@gmail.com",
  pec: "sara.zacco@avvocatimodica.legalmail.it",
  address: "Via Fosso Tantillo 19/B",
  city: "97015 Modica (RG)"
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civile",
    title: "Diritto Civile",
    shortDescription: "Consulenza su obbligazioni, contratti e diritti reali.",
    fullDescription: "Assistenza completa in materia di diritto civile, dalla contrattualistica alla tutela della proprietà e dei diritti reali. Gestione di contenziosi ordinari e procedure stragiudiziali per la risoluzione di conflitti tra privati o imprese.",
    examples: [
      "Ho acquistato casa ma ho scoperto vizi o difetti nascosti.",
      "Un inquilino non paga l'affitto e devo avviare lo sfratto.",
      "Devo recuperare una somma di denaro prestata e mai restituita.",
      "Ho problemi di confini o servitù di passaggio con il vicino."
    ],
    icon: Scale
  },
  {
    id: "famiglia",
    title: "Diritto di Famiglia",
    shortDescription: "Separazioni, divorzi e tutela dei minori.",
    fullDescription: "Gestione delicata e professionale di separazioni (consensuali e giudiziali), divorzi, modifica delle condizioni, affidamento dei figli e questioni patrimoniali familiari. L'approccio privilegia, ove possibile, la mediazione per tutelare i rapporti.",
    examples: [
      "Voglio separarmi ma non troviamo un accordo sui figli o sulla casa.",
      "Il mio ex coniuge non versa l'assegno di mantenimento stabilito.",
      "Vorrei modificare le condizioni di divorzio perché la situazione è cambiata.",
      "Devo gestire una successione ereditaria complessa tra parenti."
    ],
    icon: Users
  },
  {
    id: "lavoro",
    title: "Diritto del Lavoro",
    shortDescription: "Tutela lavoratori e aziende, licenziamenti e spettanze.",
    fullDescription: "Assistenza sia dalla parte del lavoratore che del datore di lavoro in controversie riguardanti licenziamenti, demansionamenti, recupero spettanze retributive, mobbing e sicurezza sul lavoro.",
    examples: [
      "Sono stato licenziato senza una giusta causa o preavviso.",
      "Non ho ricevuto il TFR o gli stipendi arretrati dopo le dimissioni.",
      "L'azienda mi ha demansionato o subisco comportamenti vessatori (mobbing).",
      "Come azienda, devo gestire un procedimento disciplinare contro un dipendente."
    ],
    icon: Briefcase
  },
  {
    id: "infortunistica",
    title: "Infortunistica Stradale",
    shortDescription: "Risarcimento danni da sinistri stradali.",
    fullDescription: "Gestione delle pratiche risarcitorie derivanti da incidenti stradali, sia per danni materiali che fisici (lesioni micro e macro permanenti). Rapporti con le assicurazioni e assistenza medico-legale.",
    examples: [
      "L'assicurazione mi offre una cifra troppo bassa per il danno subito.",
      "Ho avuto un incidente con colpo di frusta e danni all'auto.",
      "Sono stato investito come pedone o ciclista.",
      "Il responsabile del sinistro non è assicurato o è scappato."
    ],
    icon: ShieldAlert
  },
  {
    id: "resp-medica",
    title: "Responsabilità Medica",
    shortDescription: "Malpractice e tutela del diritto alla salute.",
    fullDescription: "Valutazione e azione legale in casi di responsabilità sanitaria per errore medico o carenze strutturali, avvalendosi di consulenti tecnici specializzati per l'accertamento del nesso causale.",
    examples: [
      "Ho subito un intervento chirurgico con esito negativo per errore medico.",
      "C'è stata una mancata o ritardata diagnosi che ha aggravato la salute.",
      "Ho contratto un'infezione durante il ricovero ospedaliero.",
      "Mancato consenso informato sui rischi dell'operazione."
    ],
    icon: Stethoscope
  },
  {
    id: "condominio",
    title: "Condominio",
    shortDescription: "Controversie condominiali e gestione parti comuni.",
    fullDescription: "Assistenza ad amministratori e condòmini per questioni relative a ripartizione spese, uso delle parti comuni, impugnazione delibere assembleari e recupero oneri condominiali.",
    examples: [
      "Ho infiltrazioni d'acqua in casa provenienti dal piano di sopra o dal tetto.",
      "L'assemblea ha deliberato spese straordinarie che ritengo illegittime.",
      "Un condomino non paga le quote e crea problemi agli altri.",
      "Contestazione delle tabelle millesimali errate."
    ],
    icon: Building
  },
  {
    id: "recupero-crediti",
    title: "Recupero Crediti",
    shortDescription: "Azioni esecutive per privati e aziende.",
    fullDescription: "Procedure monitorie (decreti ingiuntivi), pignoramenti mobiliari, immobiliari e presso terzi per il recupero effettivo dei crediti insoluti.",
    examples: [
      "Ho emesso fatture che il cliente non paga nonostante i solleciti.",
      "Devo fare un decreto ingiuntivo per recuperare i miei soldi.",
      "Voglio pignorare lo stipendio o il conto corrente del debitore.",
      "Il debitore ha intestato i beni ad altri per non pagarmi."
    ],
    icon: BadgeEuro
  },
  {
    id: "previdenza",
    title: "Previdenza Sociale",
    shortDescription: "Assistenza per prestazioni INPS e invalidità.",
    fullDescription: "Tutela per il riconoscimento di invalidità civile, indennità di accompagnamento, legge 104 e altre prestazioni previdenziali o assistenziali negate.",
    examples: [
      "L'INPS ha rigettato la domanda per l'invalidità civile.",
      "Mi è stata negata l'indennità di accompagnamento anche se ne ho diritto.",
      "Ho bisogno del riconoscimento della Legge 104 per assistere un familiare.",
      "Ricalcolo della pensione o errori nei contributi versati."
    ],
    icon: HeartHandshake
  },
  {
    id: "tributario",
    title: "Diritto Tributario",
    shortDescription: "Contenziosi contro Agenzia Entrate e Riscossione.",
    fullDescription: "Assistenza legale specialistica nel contenzioso tributario per la gestione di cartelle esattoriali, avvisi di accertamento, fermi amministrativi e ipoteche. Consulenza su rottamazioni, saldo e stralcio e rateizzazioni del debito fiscale.",
    examples: [
      "Ho ricevuto una cartella esattoriale per tasse che ritengo non dovute o prescritte.",
      "L'Agenzia delle Entrate mi ha inviato un avviso di accertamento con sanzioni pesanti.",
      "Voglio accedere alla rottamazione delle cartelle o chiedere una rateizzazione.",
      "Ho un fermo amministrativo sull'auto o un'ipoteca sulla casa per debiti fiscali."
    ],
    icon: Landmark
  },
  {
    id: "bancario",
    title: "Bancario e Finanziario",
    shortDescription: "Anomalie bancarie e contratti di finanziamento.",
    fullDescription: "Analisi di contratti di mutuo, leasing e conto corrente per la verifica di usura, anatocismo o altre irregolarità contrattuali.",
    examples: [
      "Il tasso del mio mutuo o finanziamento è troppo alto (usura).",
      "La banca mi ha addebitato costi e interessi non dovuti (anatocismo).",
      "Mi hanno segnalato in centrale rischi ingiustamente.",
      "Ho firmato una fideiussione bancaria che voglio contestare."
    ],
    icon: FileText
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Quanto tempo serve per avere un riscontro?",
    answer: "Solitamente forniamo un primo riscontro entro 24-48 ore lavorative dalla richiesta per fissare un appuntamento conoscitivo."
  },
  {
    question: "Devo venire in studio o si può iniziare a distanza?",
    answer: "Il primo contatto può avvenire telefonicamente o via email. Successivamente, valutiamo se è necessario un incontro in presenza presso lo studio di Modica."
  },
  {
    question: "Che documenti servono per il primo incontro?",
    answer: "È utile portare qualsiasi documento ricevuto (lettere, atti giudiziari, contratti) e una cronistoria sintetica dei fatti. Non si preoccupi di avere tutto subito."
  },
  {
    question: "Seguite anche pratiche fuori Modica o fuori provincia?",
    answer: "Sì, lo studio opera principalmente nel circondario del Tribunale di Ragusa ma segue pratiche in tutta la Sicilia e, tramite domiciliazioni, in tutta Italia."
  },
  {
    question: "È possibile tentare una soluzione stragiudiziale?",
    answer: "Assolutamente sì. Ove possibile e vantaggioso per il cliente, privilegiamo sempre soluzioni che evitino il contenzioso in tribunale."
  },
  {
    question: "Come funziona la consulenza iniziale?",
    answer: "Si ascolta la problematica, si esaminano sommariamente i documenti e si prospettano le possibili strade da percorrere con i relativi costi e rischi."
  },
  {
    question: "In quali ambiti potete aiutarmi più spesso?",
    answer: "Le aree principali sono Diritto Civile, Famiglia, Lavoro e Infortunistica, ma copriamo anche altri rami come indicato nella sezione 'Aree di attività'."
  },
  {
    question: "Cosa succede dopo il primo contatto?",
    answer: "Se decide di affidarci l'incarico, riceverà un preventivo scritto e un mandato professionale che chiarisce costi e attività prevista."
  },
  {
    question: "Come funziona il patrocinio a spese dello Stato?",
    answer: "Lo studio offre assistenza col Gratuito Patrocinio per chi possiede i requisiti di reddito previsti dalla legge (D.P.R. 115/2002)."
  },
  {
    question: "Se ho urgenza, qual è il modo più rapido per contattarvi?",
    answer: "Telefonare direttamente al numero di studio 0932 762223 o al cellulare 338 483 0855 negli orari d'ufficio."
  }
];