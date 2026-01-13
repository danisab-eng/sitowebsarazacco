import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { PRACTICE_AREAS } from '../constants';
import { Link } from 'react-scroll';
import { Check, ArrowRight, MousePointerClick } from 'lucide-react';
import NarrativeModal, { NarrativeContent } from '../components/NarrativeModal';

// Narrative Content Map for specific scenarios
const NARRATIVE_MAP: Record<string, NarrativeContent> = {
  // --- DIRITTO DEL LAVORO ---
  "Sono stato licenziato senza una giusta causa o preavviso.": {
    title: "Quando il rapporto si interrompe all'improvviso.",
    story: "Arriva una lettera, o una comunicazione verbale. Di colpo, la stabilità quotidiana viene meno. È un momento in cui si accavallano pensieri su scadenze, motivazioni poco chiare e un comprensibile timore per il futuro immediato.",
    normalization: "Sentirsi disorientati o provare rabbia è la reazione più comune. Spesso l'istinto spinge a reagire subito, o al contrario, a bloccarsi per lo shock.",
    risk: "Il fattore critico, in silenzio, è il tempo. Esistono termini di decadenza molto stretti (60 giorni) per impugnare un licenziamento. Lasciar passare i giorni senza una verifica tecnica può precludere ogni possibilità, a prescindere dalle ragioni.",
    role: "In situazioni come questa, la prima cosa utile non è reagire, ma capire se esistono margini reali e quali tempi vanno rispettati per non pregiudicare i propri diritti.",
    cta: "Capire se questa situazione rientra nei termini"
  },
  "Non ho ricevuto il TFR o gli stipendi arretrati dopo le dimissioni.": {
    title: "Il lavoro svolto e l'attesa del dovuto.",
    story: "Il rapporto è finito, oppure prosegue, ma i bonifici non arrivano. Spesso ci sono promesse (\"la prossima settimana\"), rinvii continui o silenzio. Si ha la sensazione sgradevole di dover chiedere quasi \"per favore\" ciò che spetta di diritto.",
    normalization: "Molti lavoratori aspettano mesi per fiducia personale o per timore di rovinare i rapporti, sperando che la situazione si risolva da sola.",
    risk: "L'attesa passiva comporta un rischio preciso: che la situazione patrimoniale dell'azienda peggiori nel frattempo, rendendo il recupero impossibile. Inoltre, alcuni crediti si prescrivono se non richiesti nel modo corretto.",
    role: "Prima di qualsiasi iniziativa, è utile ricostruire con ordine i documenti, le comunicazioni e le scadenze che contano davvero per formalizzare la richiesta.",
    cta: "Verificare documenti e conteggi"
  },
  "L'azienda mi ha demansionato o subisco comportamenti vessatori (mobbing).": {
    title: "Quando l'ambiente di lavoro cambia volto.",
    story: "Non è un singolo episodio, ma un clima. Mansioni tolte senza motivo apparente, isolamento dai colleghi, richiami che sembrano pretestuosi. Andare al lavoro diventa un peso psicologico quotidiano.",
    normalization: "È frequente arrivare a dubitare di se stessi (\"Sono io che sbaglio?\"). Questo stato d'animo porta spesso a considerare le dimissioni immediate solo per uscire dalla pressione.",
    risk: "Dimettersi senza aver prima cristallizzato i fatti significa spesso perdere diritti importanti (come la disoccupazione NASpI o il risarcimento). Senza prove raccolte con metodo, la situazione diventa parola contro parola.",
    role: "In questi contesti, prima di fare scelte irreversibili, serve capire se ciò che sta accadendo rientra nel normale potere direttivo o se supera il confine della legittimità.",
    cta: "Valutare la situazione prima di dimettersi"
  },
  "Come azienda, devo gestire un procedimento disciplinare contro un dipendente.": {
    title: "La gestione formale di un rapporto critico.",
    story: "Un dipendente ha commesso un'infrazione o non rispetta le direttive. C'è l'esigenza di intervenire per tutelare l'azienda, ma anche il timore che una mossa sbagliata porti a vertenze sindacali o ricorsi.",
    normalization: "L'imprenditore teme spesso di essere ostaggio della burocrazia o di sbagliare la forma, invalidando la sostanza del provvedimento.",
    risk: "Un provvedimento disciplinare, anche se giusto nel merito, può essere annullato totalmente se non rispetta tempi e modi previsti dallo Statuto dei Lavoratori, esponendo l'azienda a costi imprevisti.",
    role: "In questi casi, una valutazione preventiva serve soprattutto a evitare errori procedurali difficili da correggere dopo, garantendo che ogni passaggio sia formalmente corretto.",
    cta: "Valutare il percorso più prudente"
  },

  // --- DIRITTO CIVILE ---
  "Ho acquistato casa ma ho scoperto vizi o difetti nascosti.": {
    title: "La casa dei sogni e la scoperta amara.",
    story: "Dopo il rogito e l'ingresso in casa, emergono problemi che non si vedevano: umidità, impianti non a norma, difetti strutturali. L'entusiasmo si trasforma in preoccupazione per i costi imprevisti.",
    normalization: "Ci si sente raggirati, ma spesso si esita a contestare per paura di lunghe cause civili o per incertezza su chi sia davvero responsabile.",
    risk: "La legge impone termini brevissimi per la denuncia dei vizi (spesso 8 giorni dalla scoperta). Attendere 'per vedere se si risolve' o fare segnalazioni solo verbali può far decadere totalmente il diritto alla garanzia.",
    role: "Il mio compito è esaminare l'atto di acquisto e la natura del vizio per formalizzare la contestazione nei tempi corretti, prima di valutare qualsiasi azione.",
    cta: "Verificare i termini della denuncia"
  },
  "Un inquilino non paga l'affitto e devo avviare lo sfratto.": {
    title: "Quando la rendita diventa un costo.",
    story: "L'inquilino ha smesso di pagare. Prima una scusa, poi il silenzio. Le spese condominiali e le tasse sull'immobile, però, continuano a correre a tuo carico.",
    normalization: "È comune sperare nel buon senso dell'inquilino e rimandare l'azione legale per 'non essere cattivi', ma intanto il debito cresce.",
    risk: "Più tempo passa senza un'azione formale, più difficile sarà recuperare le somme arretrate. Inoltre, finché non si avvia la procedura, le tasse sui canoni non percepiti continuano a maturare.",
    role: "Non serve aggressività, ma tempestività. Avviare la procedura serve a cristallizzare il debito e a rientrare in possesso dell'immobile nel minor tempo concesso dalla legge.",
    cta: "Valutare i presupposti dello sfratto"
  },
  "Devo recuperare una somma di denaro prestata e mai restituita.": {
    title: "La fiducia tradita nei rapporti personali.",
    story: "Hai prestato denaro a un amico, un parente o un conoscente. C'era un accordo verbale o una stretta di mano. Ora, al momento della restituzione, trovi muri di gomma o irreperibilità.",
    normalization: "Si prova imbarazzo a chiedere indietro i propri soldi, temendo di passare per venali, specialmente se non c'è un contratto scritto formale.",
    risk: "Senza una data certa o un atto interruttivo della prescrizione, il credito può estinguersi legalmente. Inoltre, se il debitore si spoglia dei beni nel frattempo, avere ragione non basterà a recuperare i soldi.",
    role: "Valuto quali prove (anche informali, come messaggi o bonifici) abbiamo a disposizione per costruire una richiesta solida e interrompere la prescrizione.",
    cta: "Analizzare le prove del credito"
  },
  "Ho problemi di confini o servitù di passaggio con il vicino.": {
    title: "La serenità domestica compromessa.",
    story: "Una recinzione spostata, un passaggio ostruito, alberi troppo vicini. Quelle che sembrano piccole questioni diventano fonte di tensione quotidiana che rovina la qualità della vita.",
    normalization: "Spesso si reagisce con litigi verbali che esasperano gli animi senza risolvere il problema giuridico alla base.",
    risk: "L'uso prolungato di una servitù o di un confine errato può portare all'usucapione, facendo perdere definitivamente la proprietà di quella porzione di terreno.",
    role: "Prima di iniziare guerre di vicinato, analizzo i titoli di proprietà e lo stato dei luoghi per capire dove passa esattamente il confine tra il tuo diritto e quello altrui.",
    cta: "Esaminare i titoli di proprietà"
  },

  // --- DIRITTO DI FAMIGLIA ---
  "Voglio separarmi ma non troviamo un accordo sui figli o sulla casa.": {
    title: "Quando il dialogo in casa si è interrotto.",
    story: "La convivenza è diventata insostenibile, ma ogni tentativo di discutere del 'dopo' (figli, casa, mantenimento) finisce in recriminazioni o silenzi ostili.",
    normalization: "La paura di perdere il rapporto con i figli o la stabilità economica paralizza molte persone in una convivenza ormai finita.",
    risk: "Prendere decisioni unilaterali (come andare via di casa senza accordo) o firmare accordi 'fai da te' per chiudere in fretta può creare precedenti vincolanti difficili da modificare in tribunale.",
    role: "In questa fase delicata, aiuto a separare il conflitto emotivo dalle questioni pratiche, disegnando uno scenario realistico di cosa prevede la legge per la tua specifica situazione.",
    cta: "Capire i propri diritti prima di agire"
  },
  "Il mio ex coniuge non versa l'assegno di mantenimento stabilito.": {
    title: "La gestione quotidiana senza il supporto dovuto.",
    story: "C'è una sentenza o un accordo, ma i bonifici arrivano in ritardo, parziali o non arrivano affatto. Chi subisce questa situazione si trova a dover coprire da solo tutte le spese per i figli.",
    normalization: "Si esita ad agire legalmente per non inasprire i rapporti con l'altro genitore, sperando che sia solo un momento di difficoltà passeggera.",
    risk: "Il mancato recupero tempestivo può essere interpretato come una non-necessità di quelle somme. Inoltre, l'accumulo di un debito troppo alto rende poi impossibile per l'ex coniuge saldarlo tutto insieme.",
    role: "Verifico la situazione patrimoniale dell'obbligato per capire quale strumento (precetto, pignoramento, pagamento diretto dal datore di lavoro) è più efficace e meno traumatico.",
    cta: "Valutare come recuperare le somme"
  },
  "Vorrei modificare le condizioni di divorzio perché la situazione è cambiata.": {
    title: "Quando la vita cambia, gli accordi devono adeguarsi.",
    story: "È cambiato il lavoro, sono cresciute le esigenze dei figli, o ci sono nuove famiglie. Le condizioni stabilite anni fa non rispecchiano più la realtà attuale e sono diventate insostenibili.",
    normalization: "Molti pensano che una sentenza sia 'per sempre' e continuano a subire condizioni economiche ormai ingiuste per paura di tornare davanti al giudice.",
    risk: "Smettere arbitrariamente di pagare o ridurre l'assegno senza un provvedimento del giudice è illegale e porta a conseguenze penali e civili, anche se la situazione economica è peggiorata davvero.",
    role: "Analizzo se le nuove circostanze sono sufficienti per chiedere legalmente una revisione delle condizioni, preparando un ricorso fondato su dati oggettivi.",
    cta: "Verificare i presupposti per la modifica"
  },
  "Devo gestire una successione ereditaria complessa tra parenti.": {
    title: "Il patrimonio e gli affetti familiari.",
    story: "Dopo un lutto, la gestione dei beni (case, conti, debiti) può risvegliare antichi dissapori tra parenti. Testamenti poco chiari o donazioni fatte in vita complicano la divisione.",
    normalization: "È normale volersi tenere fuori dalle liti familiari, ma l'inerzia nella gestione ereditaria può costare cara.",
    risk: "Accettare un'eredità senza verifiche può significare ereditare anche i debiti del defunto. Inoltre, ci sono termini precisi per impugnare testamenti o chiedere la legittima.",
    role: "Ricostruisco l'asse ereditario con precisione matematica e legale per garantire che la divisione rispetti le quote di legge, proteggendoti da debiti occulti.",
    cta: "Analizzare l'asse ereditario"
  },

  // --- INFORTUNISTICA STRADALE ---
  "L'assicurazione mi offre una cifra troppo bassa per il danno subito.": {
    title: "L'offerta che sembra chiudere tutto subito.",
    story: "Dopo l'incidente, l'assicurazione propone una liquidazione rapida. La cifra sembra bassa rispetto al dolore o al danno auto, ma la tentazione di chiudere e incassare è forte.",
    normalization: "Si accetta spesso per stanchezza o perché non si ha idea di come si quantifichi davvero un danno biologico.",
    risk: "Firmare una quietanza 'a saldo e stralcio' preclude per sempre la possibilità di chiedere ulteriori danni, anche se dovessero emergere problemi fisici in futuro legati all'incidente.",
    role: "Valuto l'offerta non a sensazione, ma tabelle alla mano, spesso con l'ausilio di un medico legale, per capire se quanto proposto copre davvero tutto il danno.",
    cta: "Valutare se l'offerta è congrua"
  },
  "Ho avuto un incidente con colpo di frusta e danni all'auto.": {
    title: "Il trauma invisibile e la burocrazia.",
    story: "L'impatto, lo spavento, il dolore al collo che arriva dopo qualche ora. Oltre alla salute, c'è da gestire il carrozziere, il perito e i moduli CAI compilati in fretta.",
    normalization: "Molti sottovalutano i micro-danni fisici, non andando al pronto soccorso subito, pensando che 'passerà'.",
    risk: "Senza referti medici immediati (entro 24-48 ore) che colleghino il dolore all'incidente, le assicurazioni oggi non risarciscono nulla per il danno fisico (colpo di frusta).",
    role: "Guido nella raccolta della documentazione medica e tecnica necessaria fin dal primo giorno, per evitare che la pratica venga rigettata per mancanza di prove.",
    cta: "Capire quali documenti servono subito"
  },
  "Sono stato investito come pedone o ciclista.": {
    title: "La vulnerabilità sulla strada.",
    story: "Chi subisce un incidente senza veicolo si trova spesso con danni fisici importanti e una sensazione di impotenza di fronte alle compagnie assicurative.",
    normalization: "Lo shock post-traumatico spesso fa dimenticare di raccogliere testimonianze o dati fondamentali sul momento.",
    risk: "In assenza di verbali delle autorità o testimoni, l'assicurazione potrebbe sostenere un concorso di colpa del pedone (es. 'attraversava fuori dalle strisce') per ridurre drasticamente il risarcimento.",
    role: "Intervengo per ricostruire la dinamica esatta, acquisendo verbali e cercando testimonianze, per tutelare la parte debole del sinistro.",
    cta: "Ricostruire la dinamica per la tutela"
  },
  "Il responsabile del sinistro non è assicurato o è scappato.": {
    title: "Il danno senza un colpevole apparente.",
    story: "L'incidente c'è stato, il danno è reale, ma l'altro veicolo è fuggito o non ha copertura assicurativa. Sembra di non avere nessuno a cui chiedere i danni.",
    normalization: "La reazione comune è la rassegnazione: 'Ormai devo pagarmi i danni da solo'.",
    risk: "Non attivare subito la procedura con il Fondo di Garanzia per le Vittime della Strada può far perdere il diritto al risarcimento, che invece esiste ed è tutelato.",
    role: "Gestisco la complessa procedura burocratica verso il Fondo di Garanzia, assicurandomi che la domanda sia formalmente perfetta per evitare rigetti.",
    cta: "Attivare il Fondo di Garanzia"
  },

  // --- RESPONSABILITÀ MEDICA ---
  "Ho subito un intervento chirurgico con esito negativo per errore medico.": {
    title: "Quando la cura diventa un danno.",
    story: "Un'operazione doveva risolvere un problema, invece ne ha creati di nuovi o peggiori. Il dubbio che qualcosa sia andato storto è forte, ma i medici sono vaghi.",
    normalization: "È normale sentirsi piccoli di fronte a una struttura ospedaliera e temere che denunciare sia una battaglia persa in partenza.",
    risk: "Agire d'impulso con una denuncia penale spesso porta a un'archiviazione. Senza una perizia medico-legale preventiva che accerti il nesso causale, si rischiano solo spese legali inutili.",
    role: "Non inizio nessuna causa senza prima aver fatto analizzare le cartelle cliniche a un medico legale di fiducia per capire se c'è stato davvero un errore tecnico dimostrabile.",
    cta: "Valutare la fattibilità con un esperto"
  },
  "C'è stata una mancata o ritardata diagnosi che ha aggravato la salute.": {
    title: "Il tempo perso che non torna.",
    story: "Sintomi sottovalutati, esami non prescritti. Quando la diagnosi arriva, la patologia è avanzata. Resta l'amarezza di sapere che 'preso in tempo' sarebbe andata diversamente.",
    normalization: "La rabbia è tanta, ma trasformarla in una richiesta risarcitoria valida richiede freddezza e dati scientifici.",
    risk: "Dimostrare che la diagnosi tempestiva avrebbe cambiato l'esito (chance di sopravvivenza o guarigione) è giuridicamente complesso. Improvvisare significa perdere.",
    role: "Lavoro con specialisti per quantificare statisticamente la 'perdita di chance', trasformando un'ipotesi dolorosa in un argomento giuridico solido.",
    cta: "Analizzare la storia clinica"
  },
  "Ho contratto un'infezione durante il ricovero ospedaliero.": {
    title: "Entrare per curarsi, uscire con un nuovo problema.",
    story: "Il ricovero è andato bene, ma è subentrata un'infezione nosocomiale che ha allungato la degenza o causato danni permanenti.",
    normalization: "Spesso ci si sente dire che 'sono cose che capitano', ma in realtà le strutture sanitarie hanno obblighi precisi di sterilizzazione e prevenzione.",
    risk: "Senza acquisire subito le cartelle cliniche complete (inclusi i diari infermieristici), diventa difficile provare che l'infezione è stata presa in reparto e non era preesistente.",
    role: "Richiedo e analizzo tutta la documentazione per verificare il rispetto dei protocolli sanitari e la responsabilità della struttura.",
    cta: "Verificare i protocolli ospedalieri"
  },
  "Mancato consenso informato sui rischi dell'operazione.": {
    title: "Il diritto di scegliere consapevolmente.",
    story: "L'intervento ha avuto complicazioni che nessuno ti aveva spiegato. Se avessi saputo dei rischi, forse non avresti accettato l'operazione.",
    normalization: "Si tende a firmare i moduli in ospedale senza leggere, fidandosi, ma la firma non copre la mancata spiegazione verbale e sostanziale.",
    risk: "Confondere l'errore tecnico con la mancata informazione. Sono due diritti diversi. Anche se l'intervento è tecnicamente riuscito, la lesione del diritto all'autodeterminazione è risarcibile.",
    role: "Valuto se il consenso firmato era generico o specifico e se sei stato messo davvero nelle condizioni di decidere liberamente.",
    cta: "Valutare la validità del consenso"
  },

  // --- CONDOMINIO ---
  "Ho infiltrazioni d'acqua in casa provenienti dal piano di sopra o dal tetto.": {
    title: "Il danno che entra in casa tua.",
    story: "Macchie sul soffitto, intonaco che cade. La casa si rovina e vivere diventa insalubre. Il vicino nega, l'amministratore prende tempo.",
    normalization: "Si aspetta mesi tra una riunione di condominio e l'altra, vivendo nel disagio, sperando che qualcuno intervenga.",
    risk: "L'acqua scava. Attendere significa aumentare i danni strutturali e rendere più difficile individuare l'origine esatta (e quindi il responsabile) se le tubature vengono riparate di nascosto.",
    role: "Attivo subito una procedura tecnica (ATP) per fotografare legalmente la situazione, individuare le cause con un perito del tribunale e quantificare i danni prima che vengano coperti.",
    cta: "Accertare subito le cause del danno"
  },
  "L'assemblea ha deliberato spese straordinarie che ritengo illegittime.": {
    title: "Spese impreviste e decisioni subite.",
    story: "Arriva un verbale d'assemblea con spese altissime per lavori che non ritieni utili o ripartiti male. Ti senti in minoranza e costretto a pagare.",
    normalization: "Molti pensano: 'Hanno deciso, ormai devo pagare'. Invece le delibere possono essere viziate.",
    risk: "C'è un termine tassativo di 30 giorni per impugnare una delibera annullabile. Passati quelli, anche la decisione più ingiusta diventa legge per i condòmini e bisogna pagare.",
    role: "Analizzo il verbale e le tabelle millesimali per capire se ci sono vizi formali o sostanziali che rendono la delibera impugnabile entro i termini.",
    cta: "Esaminare il verbale d'assemblea"
  },
  "Un condomino non paga le quote e crea problemi agli altri.": {
    title: "Quando i debiti altrui pesano su tutti.",
    story: "Ci sono servizi a rischio (luce, pulizia, ascensore) perché c'è un buco nel bilancio condominiale causato dai morosi. L'amministratore sembra inerte.",
    normalization: "Si crea un clima di sospetto e rabbia nel palazzo, ma spesso non si sa se l'amministratore stia davvero facendo il suo dovere.",
    risk: "Se il condominio non recupera i crediti, i fornitori possono aggredire anche i condòmini in regola con i pagamenti (responsabilità solidale).",
    role: "Assisto l'amministratore o i condòmini per attivare le procedure rapide previste dalla legge per il recupero crediti condominiale.",
    cta: "Valutare l'azione di recupero"
  },
  "Contestazione delle tabelle millesimali errate.": {
    title: "Pagare più del dovuto per sempre.",
    story: "Hai il sospetto che le tue quote condominiali siano troppo alte rispetto ai metri quadri reali del tuo appartamento. Le tabelle sono vecchie o sono stati fatti lavori che hanno cambiato i volumi.",
    normalization: "Si tende a lamentarsi ma a continuare a pagare, perché rifare le tabelle sembra un'impresa costosa e litigiousa.",
    risk: "Pagare quote errate per anni significa perdere migliaia di euro che difficilmente verranno restituiti retroattivamente.",
    role: "Verifico con un tecnico se ci sono i presupposti oggettivi (errore o modifica strutturale > 1/5) per obbligare il condominio alla revisione delle tabelle.",
    cta: "Verificare la correttezza delle quote"
  },

  // --- RECUPERO CREDITI ---
  "Ho emesso fatture che il cliente non paga nonostante i solleciti.": {
    title: "Il lavoro fatto e non retribuito.",
    story: "Hai lavorato, consegnato la merce o il servizio. La fattura è scaduta da mesi. Solo promesse telefoniche o scuse. La tua liquidità ne soffre.",
    normalization: "Molti imprenditori aspettano troppo per paura di perdere il cliente, finendo per finanziare involontariamente i propri debitori.",
    risk: "Mentre aspetti, il debitore potrebbe fallire o chiudere. Inoltre, senza una messa in mora formale, non maturano gli interessi di mora e la prescrizione avanza.",
    role: "Valuto la solvibilità del debitore prima di spendere soldi in azioni legali. Se c'è capienza, agiamo subito con decreto ingiuntivo.",
    cta: "Valutare la solvibilità del debitore"
  },
  "Devo fare un decreto ingiuntivo per recuperare i miei soldi.": {
    title: "L'ordine del giudice di pagare.",
    story: "Hai le prove del credito (fatture, contratti, riconoscimenti di debito). Vuoi uno strumento rapido per esigere il pagamento.",
    normalization: "C'è il timore che la procedura sia lunga e costosa come una causa ordinaria.",
    risk: "Un decreto ingiuntivo fatto male può essere opposto dal debitore, aprendo una causa lunga anni. La precisione documentale è tutto.",
    role: "Preparo il fascicolo in modo inattaccabile affinché il decreto sia emesso rapidamente e, se possibile, sia subito esecutivo.",
    cta: "Preparare il ricorso monitorio"
  },
  "Voglio pignorare lo stipendio o il conto corrente del debitore.": {
    title: "Passare dalla ragione all'incasso.",
    story: "Hai un titolo esecutivo (sentenza o decreto), ma il debitore non paga spontaneamente. Bisogna andare a prendere i soldi dove sono.",
    normalization: "Si teme di spendere altri soldi per il pignoramento senza trovare nulla.",
    risk: "Agire alla cieca è costoso. Pignorare un conto vuoto è una perdita secca di spese legali.",
    role: "Utilizzo gli strumenti di indagine telematica autorizzati per vedere in anticipo se e dove il debitore ha conti, stipendi o beni aggredibili.",
    cta: "Indagare i beni aggredibili"
  },
  "Il debitore ha intestato i beni ad altri per non pagarmi.": {
    title: "La fuga dalle responsabilità.",
    story: "Appena hai chiesto i soldi, il debitore ha venduto la casa alla moglie o ha fatto un fondo patrimoniale. Ti senti beffato.",
    normalization: "La sensazione è che 'ormai non ha più nulla', ma la legge prevede rimedi specifici per queste furbizie.",
    risk: "C'è un termine di 5 anni per l'azione revocatoria. Se lasci passare questo tempo, quei trasferimenti diventano definitivi e intoccabili.",
    role: "Analizzo gli atti di disposizione patrimoniale per capire se ci sono i presupposti per renderli inefficaci e aggredire comunque quei beni.",
    cta: "Verificare la revocabilità degli atti"
  },

  // --- PREVIDENZA SOCIALE ---
  "L'INPS ha rigettato la domanda per l'invalidità civile.": {
    title: "Il diniego burocratico a un bisogno reale.",
    story: "Hai patologie vere, documentate, che limitano la tua vita. La commissione medica, dopo una visita frettolosa, dice che non sei abbastanza invalido.",
    normalization: "Ci si sente umiliati e si pensa che 'contro lo Stato non si vince', rinunciando ai propri diritti.",
    risk: "Il verbale INPS diventa definitivo se non si fa ricorso entro 6 mesi. Rinunciare significa perdere arretrati e sussidi per sempre.",
    role: "Faccio valutare il verbale a un medico legale di parte. Se la valutazione INPS è errata, presentiamo ricorso giudiziario per l'accertamento tecnico preventivo.",
    cta: "Valutare il ricorso con un medico"
  },
  "Mi è stata negata l'indennità di accompagnamento anche se ne ho diritto.": {
    title: "L'aiuto necessario per chi non è autonomo.",
    story: "C'è una persona anziana o malata che non può deambulare o compiere gli atti quotidiani da sola. L'INPS riconosce l'invalidità ma non l'accompagnamento economico.",
    normalization: "Spesso le famiglie si rassegnano a coprire i costi di assistenza da sole, pensando che i criteri siano troppo rigidi.",
    risk: "L'accompagnamento non dipende dal reddito ma dalle condizioni cliniche. Non impugnare il diniego significa perdere un aiuto economico mensile fondamentale.",
    role: "Verifico se la documentazione medica presentata provava specificamente la 'non autosufficienza' (che è diversa dalla semplice malattia) e imposto il ricorso su questo punto.",
    cta: "Riesaminare i requisiti sanitari"
  },
  "Ho bisogno del riconoscimento della Legge 104 per assistere un familiare.": {
    title: "Il tempo per la cura.",
    story: "Lavori e devi assistere un genitore o un figlio disabile. Hai bisogno dei permessi retribuiti, ma l'handicap non è stato riconosciuto come 'grave' (art. 3 comma 3).",
    normalization: "Si vive nella fatica quotidiana tra lavoro e assistenza, pensando che sia un sacrificio inevitabile.",
    risk: "Senza il riconoscimento della gravità, si perdono permessi, precedenza nella scelta della sede di lavoro e agevolazioni fiscali.",
    role: "Analizziamo se la gravità della patologia è stata sottovalutata dalla commissione e se ci sono gli estremi per chiedere la revisione.",
    cta: "Verificare la gravità dell'handicap"
  },
  "Ricalcolo della pensione o errori nei contributi versati.": {
    title: "I conti di una vita di lavoro.",
    story: "L'importo della pensione sembra basso rispetto agli anni lavorati, oppure mancano periodi contributivi nell'estratto conto.",
    normalization: "La complessità dei calcoli INPS scoraggia dal fare verifiche. Si tende a fidarsi 'perché loro sanno i conti'.",
    risk: "Gli errori di calcolo sono frequenti e, se non segnalati, diventano definitivi. Si rischia di percepire per anni meno di quanto spetta.",
    role: "Con l'ausilio di consulenti del lavoro, verifichiamo la correttezza della posizione contributiva e chiediamo la ricostituzione della pensione se ci sono errori.",
    cta: "Controllare l'estratto contributivo"
  },

  // --- DIRITTO TRIBUTARIO (NEW) ---
  "Ho ricevuto una cartella esattoriale per tasse che ritengo non dovute o prescritte.": {
    title: "Il debito che ritorna dal passato.",
    story: "Arriva una busta verde. È una cartella per vecchi bolli auto, TARI o IRPEF di anni fa. La cifra, con sanzioni e interessi, è raddoppiata.",
    normalization: "La prima reazione è lo spavento, seguita dal dubbio: 'Ma non l'avevo già pagato?' o 'Non è passato troppo tempo?'.",
    risk: "Pagare subito per paura o ignorare la lettera sperando che scada. In entrambi i casi si rischia: di pagare somme prescritte o di subire pignoramenti improvvisi.",
    role: "Analizzo l'estratto di ruolo e le date di notifica per capire se il debito è prescritto o se la cartella è viziata e annullabile.",
    cta: "Verificare la prescrizione del debito"
  },
  "L'Agenzia delle Entrate mi ha inviato un avviso di accertamento con sanzioni pesanti.": {
    title: "Il fisco chiede spiegazioni (e soldi).",
    story: "L'Agenzia delle Entrate contesta la tua dichiarazione dei redditi o movimenti bancari. Ti chiedono imposte maggiori e sanzioni pesanti.",
    normalization: "Ci si sente sotto accusa e impotenti contro 'lo Stato'. Spesso si pensa che non ci sia nulla da fare se non pagare.",
    risk: "Non rispondere o rispondere male all'invito al contraddittorio rende l'accertamento definitivo. I termini per il ricorso (60 giorni) sono tassativi.",
    role: "Esamino la contestazione e preparo una difesa tecnica o un'istanza di autotutela per ridurre o annullare la pretesa fiscale.",
    cta: "Valutare la difesa tributaria"
  },
  "Voglio accedere alla rottamazione delle cartelle o chiedere una rateizzazione.": {
    title: "Mettersi in regola, ma alle proprie condizioni.",
    story: "Il debito c'è, lo riconosci, ma la cifra totale è impossibile da pagare in un'unica soluzione. Temi le conseguenze del mancato pagamento.",
    normalization: "È normale volersi togliere il pensiero ma non avere la liquidità immediata.",
    risk: "Sbagliare la domanda di rateizzazione o non aderire alle sanatorie (rottamazioni) nei tempi previsti significa perdere l'occasione di risparmiare sanzioni e interessi.",
    role: "Valuto qual è lo strumento migliore (rateizzazione ordinaria, straordinaria o rottamazione) per rendere il debito sostenibile per le tue tasche.",
    cta: "Pianificare il rientro del debito"
  },
  "Ho un fermo amministrativo sull'auto o un'ipoteca sulla casa per debiti fiscali.": {
    title: "Quando il debito blocca la vita.",
    story: "Scopri di avere un fermo amministrativo sull'auto che ti serve per lavorare, o peggio, un'ipoteca sulla casa per debiti esattoriali.",
    normalization: "La sensazione è di essere in trappola, con la libertà di movimento o il patrimonio immobiliare bloccati.",
    risk: "Circolare con l'auto sottoposta a fermo comporta sanzioni gravissime. Ignorare l'ipoteca può portare all'asta della casa.",
    role: "Verifico se la procedura cautelare è stata legittima (preavviso) e attivo le procedure per la sospensione o cancellazione del fermo/ipoteca.",
    cta: "Sbloccare beni e veicoli"
  },

  // --- BANCARIO E FINANZIARIO ---
  "Il tasso del mio mutuo o finanziamento è troppo alto (usura).": {
    title: "Interessi che mangiano la vita.",
    story: "Paghi le rate regolarmente, ma il debito non scende mai. Hai il sospetto che gli interessi applicati siano oltre la soglia legale.",
    normalization: "È difficile leggere un contratto bancario. Si tende a pensare che la banca non possa sbagliare o commettere illeciti.",
    risk: "Continuare a pagare interessi usurari o anatocistici significa perdere soldi che non erano dovuti. In alcuni casi, il contratto potrebbe essere nullo.",
    role: "Con l'aiuto di periti econometrici, analizziamo il contratto per verificare il superamento del tasso soglia (usura) o altre irregolarità.",
    cta: "Analizzare il contratto di mutuo"
  },
  "La banca mi ha addebitato costi e interessi non dovuti (anatocismo).": {
    title: "Pagare interessi sugli interessi.",
    story: "Sul conto corrente affidato o sul mutuo, la banca calcola gli interessi passivi e poi su quelli applica nuovi interessi. Il debito lievita esponenzialmente.",
    normalization: "Sembra un meccanismo tecnico incomprensibile, accettato come prassi bancaria.",
    risk: "L'anatocismo è vietato (con specifiche eccezioni). Non contestarlo significa regalare alla banca somme ingenti nel corso degli anni.",
    role: "Ricalcoliamo il saldo reale del conto o del mutuo depurandolo dagli addebiti illegittimi per chiedere la restituzione.",
    cta: "Ricalcolare il saldo reale"
  },
  "Mi hanno segnalato in centrale rischi ingiustamente.": {
    title: "Il nome macchiato nel sistema creditizio.",
    story: "Ti vedi rifiutare un finanziamento o una carta di credito. Scopri di essere segnalato come 'cattivo pagatore' per un piccolo ritardo o un errore, senza preavviso.",
    normalization: "Si prova vergogna e si pensa di essere in una 'lista nera' per sempre.",
    risk: "La segnalazione illegittima blocca l'accesso al credito per anni, paralizzando attività imprenditoriali o progetti di vita. Deve essere cancellata subito.",
    role: "Agisco per verificare se la banca ha rispettato l'obbligo di preavviso. Se manca, chiediamo la cancellazione immediata della segnalazione e il risarcimento.",
    cta: "Verificare la legittimità della segnalazione"
  },
  "Ho firmato una fideiussione bancaria che voglio contestare.": {
    title: "Garante per sempre e per tutto.",
    story: "Hai firmato per garantire il debito di un'azienda o di un parente. Ora la banca chiede a te somme enormi, magari superiori a quanto pensavi.",
    normalization: "Si pensa che la firma sia una condanna definitiva.",
    risk: "Molte fideiussioni (specie quelle 'omnibus') contengono clausole nulle perché basate su schemi sanzionati dall'Antitrust. Non verificarle è un errore grave.",
    role: "Esamino il testo della fideiussione per capire se contiene le clausole nulle dello schema ABI e se è possibile liberarti dall'obbligo.",
    cta: "Controllare le clausole della garanzia"
  }
};

const PracticeAreas: React.FC = () => {
  const [narrativeContent, setNarrativeContent] = useState<NarrativeContent | null>(null);
  const [isNarrativeOpen, setIsNarrativeOpen] = useState(false);

  const handleExampleClick = (exampleText: string) => {
    // Clean the text to match keys (remove confusing chars if needed, though exact match is best)
    // We check if we have a specific narrative for this example
    if (NARRATIVE_MAP[exampleText]) {
      setNarrativeContent(NARRATIVE_MAP[exampleText]);
      setIsNarrativeOpen(true);
    }
  };

  return (
    <div className="pt-20 bg-navy min-h-screen">
      <Section dark className="pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-ceramic mb-6">Aree di attività</h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Ambiti in cui lo studio offre consulenza e assistenza, stragiudiziale e giudiziale.
          </p>
        </div>
      </Section>

      {/* Navigation for areas */}
      <div className="sticky top-20 z-40 bg-navy/95 backdrop-blur border-b border-gray-800 py-4 overflow-x-auto shadow-lg">
         <div className="max-w-7xl mx-auto px-4 flex gap-4 min-w-max">
            {PRACTICE_AREAS.map((area) => (
                <Link 
                    key={area.id}
                    to={area.id} 
                    smooth={true} 
                    offset={-140} 
                    duration={500}
                    className="text-base font-medium text-gray-400 hover:text-terracotta cursor-pointer transition-all px-4 py-2 rounded hover:bg-white/5 border border-transparent hover:border-terracotta/20"
                    activeClass="text-terracotta bg-white/5 border-terracotta/20"
                    spy={true}
                >
                    {area.title}
                </Link>
            ))}
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {PRACTICE_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
                <div key={area.id} id={area.id} className="scroll-mt-40 bg-graphite/30 rounded-2xl p-8 md:p-12 border border-gray-800/50 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-20 h-20 rounded-full bg-navy border border-terracotta/20 flex items-center justify-center flex-shrink-0 shadow-xl">
                            <Icon className="w-10 h-10 text-terracotta" />
                        </div>
                        <div className="flex-1 w-full">
                            <h2 className="text-4xl font-serif text-ceramic mb-8">{area.title}</h2>
                            
                            <div className="prose prose-invert prose-xl text-gray-300 leading-relaxed font-light mb-10">
                                <p>{area.fullDescription}</p>
                            </div>
                            
                            {/* Practical Examples Section */}
                            <div className="bg-navy/50 rounded-xl p-8 border border-gray-800">
                                <h4 className="text-sm font-bold text-terracotta uppercase tracking-wider mb-6 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                                  Esempi tipici di intervento
                                </h4>
                                <ul className="grid grid-cols-1 gap-5">
                                    {area.examples.map((example, i) => {
                                        // Check if this example has a narrative interaction
                                        const isInteractive = !!NARRATIVE_MAP[example];
                                        
                                        return (
                                            <li 
                                                key={i} 
                                                className={`flex items-start gap-4 text-base md:text-lg transition-all p-3 rounded-lg ${
                                                    isInteractive 
                                                    ? 'cursor-pointer text-gray-200 hover:bg-white/5 hover:text-terracotta group' 
                                                    : 'text-gray-400'
                                                }`}
                                                onClick={() => isInteractive && handleExampleClick(example)}
                                            >
                                                <div className="mt-1 shrink-0">
                                                    {isInteractive ? (
                                                        <MousePointerClick className="w-6 h-6 text-terracotta opacity-70 group-hover:opacity-100" />
                                                    ) : (
                                                        <Check className="w-6 h-6 text-olive" />
                                                    )}
                                                </div>
                                                <span className={isInteractive ? 'border-b border-gray-700 group-hover:border-terracotta/50 pb-0.5' : ''}>
                                                    {example}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="text-sm text-gray-500 mt-6 italic text-right">
                                    * Clicca sugli esempi per approfondire
                                </p>
                            </div>
                            
                            <div className="mt-8 flex justify-end">
                                <Button to="/contatti" variant="outline" className="text-base py-3 px-6">
                                    Chiedi consulenza su questo tema
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>

      <Section className="bg-terracotta/10 border-t border-terracotta/20">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="text-3xl font-serif text-ceramic mb-3">Hai bisogno di assistenza in uno di questi ambiti?</h3>
                <p className="text-gray-400 text-lg">Parliamone per capire la strada migliore.</p>
            </div>
            <Button to="/contatti" variant="primary" className="text-lg px-8 py-4">Richiedi un primo contatto</Button>
         </div>
      </Section>

      {/* Narrative Modal for specific deep-dives */}
      <NarrativeModal 
        isOpen={isNarrativeOpen}
        onClose={() => setIsNarrativeOpen(false)}
        content={narrativeContent}
      />
    </div>
  );
};

export default PracticeAreas;