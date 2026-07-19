import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Calculator, FileText, ChevronRight, PhoneCall, Sparkles, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Packages() {
  const [activeTab, setActiveTab] = useState<'standard' | 'premium' | 'calculator'>('standard');

  // Calculator State
  const [casketType, setCasketType] = useState<number>(0); // 0: Brad/Pop (Included), 1: Stejar Masiv (+2500), 2: Mahon Lux (+4500)
  const [embalming, setEmbalming] = useState<boolean>(false); // +600
  const [flowers, setFlowers] = useState<number>(0); // 0: None, 1: 1 Coroana (+250), 2: 2 Coroane + Jerba (+700), 3: Lux floral (+1500)
  const [hearse, setHearse] = useState<number>(0); // 0: Standard, 1: Mercedes VIP (+800)
  const [paperwork, setPaperwork] = useState<boolean>(false); // +400
  const [agentsCount, setAgentsCount] = useState<number>(2); // 2: Standard, 4: Protocol (+800), 6: Gala VIP (+1600)
  const [catering, setCatering] = useState<number>(0); // 0: None, 1: 15 pers (+1200), 2: 30 pers (+2500), 3: 50 pers (+4200)

  // Form submission in estimator
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const casketOptions = [
    { id: 0, label: 'Standard (Brad/Plop) - Inclus', price: 0 },
    { id: 1, label: 'Stejar Masiv Clasă Superioară (+2.500 RON)', price: 2500 },
    { id: 2, label: 'Mahon Imperial Lux (+4.500 RON)', price: 4500 },
  ];

  const flowerOptions = [
    { id: 0, label: 'Fără flori suplimentare', price: 0 },
    { id: 1, label: '1 Coroană naturală mare (+250 RON)', price: 250 },
    { id: 2, label: '2 Coroane Premium + Jerbă Sicriu (+700 RON)', price: 700 },
    { id: 3, label: 'Pachet floral complet capelă de Lux (+1.500 RON)', price: 1500 },
  ];

  const hearseOptions = [
    { id: 0, label: 'Autospecială Standard - Inclusă', price: 0 },
    { id: 1, label: 'Mercedes-Benz E250 VIP Premium (+800 RON)', price: 800 },
  ];

  const agentOptions = [
    { id: 2, label: '2 Agenți (Manipulare de bază) - Inclus', price: 0 },
    { id: 4, label: '4 Agenți (Uniformă protocol superior) (+800 RON)', price: 800 },
    { id: 6, label: '6 Agenți (Ținută de gală VIP ceremonie) (+1.600 RON)', price: 1600 },
  ];

  const cateringOptions = [
    { id: 0, label: 'Fără catering pomană', price: 0 },
    { id: 1, label: 'Pachet 15 persoane (Meniu Tradițional) (+1.200 RON)', price: 1200 },
    { id: 2, label: 'Pachet 30 persoane (Partener local premium) (+2.500 RON)', price: 2500 },
    { id: 3, label: 'Pachet 50 persoane (Gourmet complet) (+4.200 RON)', price: 4200 },
  ];

  // Dynamically calculate final custom price
  const estimatedPrice = useMemo(() => {
    let base = 8000; // Base starting price
    base += casketOptions[casketType].price;
    base += embalming ? 600 : 0;
    base += flowerOptions[flowers].price;
    base += hearseOptions[hearse].price;
    base += paperwork ? 400 : 0;
    base += agentOptions.find(opt => opt.id === agentsCount)?.price || 0;
    base += cateringOptions[catering].price;
    return base;
  }, [casketType, embalming, flowers, hearse, paperwork, agentsCount, catering]);

  const handleSubmitEstimator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsSubmitted(true);
  };

  const handleResetEstimator = () => {
    setIsSubmitted(false);
    setClientName('');
    setClientPhone('');
    setCasketType(0);
    setEmbalming(false);
    setFlowers(0);
    setHearse(0);
    setPaperwork(false);
    setAgentsCount(2);
  };

  return (
    <section id="pachete" className="py-24 bg-dark-bg text-sand border-t border-gold/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              SERVICII TRANSPARENTE
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4">
              Pachete stabilite clar, fără taxe suplimentare
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-base font-light">
              Alege un pachet optim pentru nevoile tale sau folosește calculatorul nostru transparent de buget pentru a-ți stabili singur serviciile dorite.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-16">
          <ScrollReveal direction="up" delay={0.4}>
            <div className="inline-flex p-1 rounded-none bg-[#0a0a0a] border border-gold/15 shadow-2xl">
              <button
                onClick={() => setActiveTab('standard')}
                className={`px-4 sm:px-6 py-3 rounded-none font-sans text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeTab === 'standard'
                    ? 'bg-gold/15 text-gold border border-gold/35 font-semibold'
                    : 'text-sand/50 hover:text-gold'
                }`}
              >
                Pachet Standard
              </button>
              <button
                onClick={() => setActiveTab('premium')}
                className={`px-4 sm:px-6 py-3 rounded-none font-sans text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeTab === 'premium'
                    ? 'bg-gold text-dark-bg font-semibold'
                    : 'text-sand/50 hover:text-gold'
                }`}
              >
                Pachet Premium Lux
              </button>
              <button
                id="calculator"
                onClick={() => setActiveTab('calculator')}
                className={`px-4 sm:px-6 py-3 rounded-none font-sans text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'calculator'
                    ? 'bg-[#0d0d0d] text-gold border border-gold/40 font-semibold'
                    : 'text-sand/50 hover:text-gold'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-gold" />
                <span>Calculator Buget</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Panel with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'standard' && (
            <motion.div
              key="standard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#0a0a0a] border border-gold/15 rounded-none p-6 sm:p-10 shadow-2xl"
            >
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-sand/40">Pachetul Accesibil</span>
                  <h3 className="font-serif text-3xl font-light text-gold mt-2 mb-4">Standard All-Inclusive</h3>
                  <p className="font-serif italic text-sand/60 text-sm leading-relaxed mb-8">
                    Gândit special pentru a asigura o înmormântare demnă și completă, la preț minim. Acest pachet este <strong className="text-gold font-normal">acoperit în totalitate de ajutorul de deces</strong> acordat de Casa Județeană de Pensii Iași. Familia nu mai trebuie să aducă niciun ban în plus dacă încredințează dosarul reprezentanților noștri.
                  </p>

                  <div className="h-[1px] bg-gold/10 my-6" />

                  <h4 className="font-serif text-lg font-light text-gold mb-4">Ce include pachetul:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {[
                      'Sicriu brad/plop esență moale complet echipat',
                      'Cruce din lemn masiv inscripționată',
                      'Preluare decedat cu autospecială autorizată',
                      'Pregătire decedat: toaletare, îmbrăcare',
                      'Manipulare sicriu (2 agenți autorizați)',
                      'Pachet doliu complet (12 batiste, lumânări, doliu)',
                      'Obținere adeverință înhumare și dosar ajutor',
                      'Transport sicriu la biserică/capelă/cimitir'
                    ].map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-sand/70 font-sans">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-none bg-gold/5 border border-gold/15 flex items-start gap-3">
                  <Info className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-sand/50 leading-relaxed italic">
                    <strong>Notă importantă:</strong> Noi ne ocupăm de întocmirea dosarului legal pentru deces și încasăm ajutorul direct, astfel încât efortul financiar inițial al familiei este redus la <strong>0 RON</strong>.
                  </p>
                </div>
              </div>

              {/* Price Callout standard */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center bg-gold/5 border border-gold/15 rounded-none p-8 text-center">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-sand/40 mb-3">Preț Fix Garantat Contractual</span>
                <div className="font-serif text-5xl font-light text-gold tracking-tight mb-2">
                  8.000 <span className="text-xl font-light text-sand/60">RON</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-none border border-gold/30 bg-gold/10 text-gold text-[9px] font-sans tracking-wider uppercase mb-8">
                  Acoperit complet de ajutorul de deces
                </div>
                <div className="w-full h-[1px] bg-gold/10 mb-8" />
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-dark-bg border border-gold font-sans text-xs tracking-[0.15em] uppercase hover:bg-transparent hover:text-gold transition-all duration-300"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-dark-bg group-hover:text-gold" />
                  <span>Solicită Acord de Urgență</span>
                </a>
                <p className="text-[10px] font-sans tracking-wider text-sand/40 mt-3.5 uppercase">Timp estimat de răspuns: sub 30 minute în Iași</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'premium' && (
            <motion.div
              key="premium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#0c0c0c] border border-gold/25 rounded-none p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Gold light accent glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

              <div className="lg:col-span-7 flex flex-col justify-between relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-gold/10 border border-gold/30 text-gold text-[9px] font-sans tracking-widest uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Clasă de Lux Premium</span>
                  </div>
                  <h3 className="font-serif text-3xl font-light text-gold mt-2 mb-4">Pachet Ceremonial Premium</h3>
                  <p className="font-serif italic text-sand/60 text-sm leading-relaxed mb-8">
                    Conceput pentru familiile care doresc să asigure un ultim omagiu solemn, de o eleganță desăvârșită și protocol de înalt nivel. Include un sicriu premium din lemn masiv și asistența unui maestru de ceremonii dedicat care dirijează cortegiul.
                  </p>

                  <div className="h-[1px] bg-gold/10 my-6" />

                  <h4 className="font-serif text-lg font-light text-gold mb-4">Ce include pachetul Premium:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {[
                      'Sicriu din Lemn Masiv (Nuc/Mahon) complet echipat din mătase',
                      'Cruce finisată asortată estetic cu sicriul',
                      'Transport premium cu autospeciala Mercedes-Benz E250 VIP',
                      'Pregătire completă, toaletare, machiaj funerar profesional',
                      'Echipă protocol de gală din 6 agenți în uniformă solemnă',
                      '2 Coroane ample din flori naturale proaspete (crini/trandafiri)',
                      'Pachet protocol superior (prosoape preoți, 30 batiste, lumânări stâlp)',
                      'Catering tradițional (pomana) pentru 30 de persoane inclus',
                      'Consilier dedicat (Maestru de ceremonii)'
                    ].map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-sand/70 font-sans">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-none bg-gold/5 border border-gold/15 flex items-start gap-3">
                  <Info className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-sand/50 leading-relaxed italic">
                    Diferența dintre valoarea ajutorului de deces acordat de stat și prețul acestui pachet complet de lux poate fi achitată direct în rate sau la finalul tuturor serviciilor.
                  </p>
                </div>
              </div>

              {/* Price Callout premium */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center bg-[#111111] border border-gold/15 rounded-none p-8 text-center relative z-10">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-gold/70 font-semibold mb-3">Preț Fix Fără Costuri Ascunse</span>
                <div className="font-serif text-5xl font-light text-gold tracking-tight mb-2">
                  13.500 <span className="text-xl font-light text-sand/40">RON</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-none border border-gold/30 bg-gold/10 text-gold text-[9px] font-sans tracking-wider uppercase mb-8">
                  Mercedes E250 VIP & Catering Inclus
                </div>
                <div className="w-full h-[1px] bg-gold/10 mb-8" />
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-dark-bg border border-gold font-sans text-xs tracking-[0.15em] uppercase hover:bg-transparent hover:text-gold transition-all duration-300 shadow-[0_4px_25px_rgba(193,154,107,0.2)]"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-dark-bg" />
                  <span>Rezervă Ceremonie VIP</span>
                </a>
                <p className="text-[10px] font-sans tracking-wider text-sand/40 mt-3 uppercase">Disponibilitate rapidă la numărul direct</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a] border border-gold/15 rounded-none p-6 sm:p-10 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Options Panel */}
                <div className="w-full lg:w-7/12 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-gold flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-gold" />
                      <span>Configurează-ți Propriul Deviz</span>
                    </h3>
                    <p className="text-sand/50 text-xs sm:text-sm mt-1 italic font-serif">
                      Selectează produsele și serviciile de care ai nevoie. Devizul estimativ se actualizează în timp real, cu transparență de 100%.
                    </p>
                  </div>

                  <div className="h-[1px] bg-gold/10" />

                  {/* 1. Coffin Type */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      1. Tip Sicriu & echipare interioară
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {casketOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setCasketType(opt.id)}
                          className={`p-3.5 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 ${
                            casketType === opt.id
                              ? 'border-gold bg-gold/10 text-gold shadow-none'
                              : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                          }`}
                        >
                          <div className="flex justify-between items-center font-sans uppercase tracking-wider text-[11px]">
                            <span>{opt.label}</span>
                            {casketType === opt.id && <Check className="w-3.5 h-3.5 text-gold" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Tanatopraxie */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      2. Tratament de Conservare (Tanatopraxie)
                    </label>
                    <button
                      onClick={() => setEmbalming(!embalming)}
                      className={`w-full p-3.5 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 ${
                        embalming
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-sans">
                          <p className="font-semibold text-[11px] uppercase tracking-wider">Tanatopraxie avansată completă (+600 RON)</p>
                          <p className="text-[10px] text-sand/40 font-light mt-0.5 font-serif italic normal-case">Necesară legal pentru depunerea prelungită la capelă</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={embalming}
                          readOnly
                          className="text-gold focus:ring-0 w-4 h-4 border-gold/30 bg-transparent rounded-none"
                        />
                      </div>
                    </button>
                  </div>

                  {/* 3. Flowers */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      3. Aranjamente Florale Naturale
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {flowerOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setFlowers(opt.id)}
                          className={`p-3 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 font-sans text-[11px] uppercase tracking-wider ${
                            flowers === opt.id
                              ? 'border-gold bg-gold/10 text-gold'
                              : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                          }`}
                        >
                          <span className="block">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Hearse */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      4. Autospecială Funerară Transport
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {hearseOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setHearse(opt.id)}
                          className={`p-3 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 font-sans text-[11px] uppercase tracking-wider ${
                            hearse === opt.id
                              ? 'border-gold bg-gold/10 text-gold'
                              : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                          }`}
                        >
                          <span className="block">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 5. Paperwork */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      5. Întocmire dosar ajutor deces & documente legale
                    </label>
                    <button
                      onClick={() => setPaperwork(!paperwork)}
                      className={`w-full p-3.5 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 ${
                        paperwork
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-sans">
                          <p className="font-semibold text-[11px] uppercase tracking-wider">Reprezentare legală integrală (+400 RON)</p>
                          <p className="text-[10px] text-sand/40 font-light mt-0.5 font-serif italic normal-case">Mergem noi la primărie, starea civilă și casa de pensii Iași</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={paperwork}
                          readOnly
                          className="text-gold focus:ring-0 w-4 h-4 border-gold/30 bg-transparent rounded-none"
                        />
                      </div>
                    </button>
                  </div>

                  {/* 6. Agents */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      6. Agenți Manipulare & Protocol
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {agentOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setAgentsCount(opt.id)}
                          className={`p-3 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 font-sans text-[11px] uppercase tracking-wider ${
                            agentsCount === opt.id
                              ? 'border-gold bg-gold/10 text-gold'
                              : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                          }`}
                        >
                          <span className="block">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 7. Catering */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-gold block">
                      7. Catering Pomană (Pachete Alimentare complete)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cateringOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setCatering(opt.id)}
                          className={`p-3 text-left rounded-none border text-xs sm:text-sm font-medium transition-all duration-200 font-sans text-[11px] uppercase tracking-wider ${
                            catering === opt.id
                              ? 'border-gold bg-gold/10 text-gold'
                              : 'border-gold/15 hover:bg-gold/5 text-sand/60'
                          }`}
                        >
                          <span className="block">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Estimation Results Panel */}
                <div className="w-full lg:w-5/12 bg-gold/5 border border-gold/15 rounded-none p-6 sm:p-8 lg:sticky lg:top-24">
                  <div className="text-center pb-6 border-b border-gold/10 mb-6">
                    <span className="text-[9px] font-sans font-semibold uppercase text-sand/40 tracking-[0.15em]">Deviz Estimativ Total</span>
                    <motion.div
                      key={estimatedPrice}
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-serif text-4xl sm:text-5xl font-light text-gold mt-1"
                    >
                      {estimatedPrice.toLocaleString('ro-RO')} <span className="text-xl font-normal text-sand/60">RON</span>
                    </motion.div>
                    <div className="text-[9px] font-sans text-gold mt-2 bg-gold/10 border border-gold/25 rounded-none px-2.5 py-1 inline-block uppercase tracking-wider">
                      Deducere Ajutor Stat valabilă: -8.000 RON
                    </div>
                    <div className="text-xs text-sand/50 font-medium mt-3.5">
                      Cost net suplimentar de achitat: <strong className="text-gold">{(estimatedPrice - 8000).toLocaleString('ro-RO')} RON</strong>
                    </div>
                  </div>

                  {/* Summary lists */}
                  <div className="space-y-3.5 mb-8">
                    <h4 className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-sand/40">Sumarul Configurației tale</h4>
                    <div className="space-y-2 text-xs font-sans tracking-wide text-sand/70">
                      <div className="flex justify-between">
                        <span>Pachet de bază (Inclus):</span>
                        <span>8.000 RON</span>
                      </div>
                      <div className="flex justify-between font-light">
                        <span>Sicriu selectat:</span>
                        <span>+{casketOptions[casketType].price.toLocaleString('ro-RO')} RON</span>
                      </div>
                      {embalming && (
                        <div className="flex justify-between font-light text-gold">
                          <span>✓ Tanatopraxie avansată:</span>
                          <span>+600 RON</span>
                        </div>
                      )}
                      {flowers > 0 && (
                        <div className="flex justify-between font-light">
                          <span>Aranjamente florale:</span>
                          <span>+{flowerOptions[flowers].price.toLocaleString('ro-RO')} RON</span>
                        </div>
                      )}
                      {hearse > 0 && (
                        <div className="flex justify-between font-light">
                          <span>Mercedes VIP transport:</span>
                          <span>+800 RON</span>
                        </div>
                      )}
                      {paperwork && (
                        <div className="flex justify-between font-light text-gold">
                          <span>✓ Birocrație & Acte complet:</span>
                          <span>+400 RON</span>
                        </div>
                      )}
                      {agentsCount > 2 && (
                        <div className="flex justify-between font-light">
                          <span>Agenți protocol ({agentsCount} pers):</span>
                          <span>+{(agentsCount === 4 ? 800 : 1600).toLocaleString('ro-RO')} RON</span>
                        </div>
                      )}
                      {catering > 0 && (
                        <div className="flex justify-between font-light">
                          <span>Catering pomană:</span>
                          <span>+{cateringOptions[catering].price.toLocaleString('ro-RO')} RON</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Estimator Form */}
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmitEstimator}
                        className="space-y-3.5"
                      >
                        <div className="h-[1px] bg-gold/10" />
                        <h4 className="text-[9px] font-sans font-semibold uppercase tracking-[0.15em] text-gold">
                          Trimite devizul către un consilier
                        </h4>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Numele tău complet"
                          className="w-full p-3.5 rounded-none border border-gold/15 bg-transparent text-xs text-sand placeholder:text-sand/30 focus:outline-none focus:border-gold"
                        />
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="Număr de deces / Telefon"
                          className="w-full p-3.5 rounded-none border border-gold/15 bg-transparent text-xs text-sand placeholder:text-sand/30 focus:outline-none focus:border-gold"
                        />
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gold hover:bg-transparent hover:text-gold border border-gold text-dark-bg font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Obține Ofertă</span>
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-5 rounded-none bg-gold/5 border border-gold/20 text-center space-y-3"
                      >
                        <div className="w-10 h-10 rounded-none bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto">
                          <Check className="w-5 h-5 text-gold" />
                        </div>
                        <h4 className="font-serif text-base font-light text-gold">
                          Vă mulțumim pentru încredere
                        </h4>
                        <p className="text-xs text-sand/60 leading-relaxed font-serif italic">
                          Am înregistrat configurația dumneavoastră în valoare de <strong>{estimatedPrice.toLocaleString('ro-RO')} RON</strong>. Un consilier de la **Sf. Lazăr** vă va apela în maximum 15 minute la numărul <strong>{clientPhone}</strong> pentru confirmare.
                        </p>
                        <button
                          onClick={handleResetEstimator}
                          className="text-[10px] font-sans font-semibold tracking-wider uppercase text-gold hover:underline block mx-auto pt-2"
                        >
                          Modifică configurația
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
 
      </div>
    </section>
  );
}
