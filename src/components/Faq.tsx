import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Landmark } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Cine poate beneficia de ajutorul de deces în județul Iași?',
      a: 'De ajutorul de deces (decontat integral prin Casa de Pensii Iași) pot beneficia familiile pensionarilor sau ale persoanelor care erau asigurate în sistemul public de pensii în momentul decesului. De asemenea, se poate obține un ajutor parțial (jumătate din valoare) și pentru membrii de familie aflați în întreținerea unui asigurat sau pensionar.'
    },
    {
      q: 'Ce acte trebuie să pregătească familia inițial în momentul decesului?',
      a: 'Familia trebuie să ne pună la dispoziție doar Cartea de Identitate (buletinul) a persoanei decedate, Certificatul de Naștere și, dacă este disponibil, Constatatorul Medical de Deces eliberat de medicul de familie sau spital. De obținerea tuturor celorlalte acte (Certificat de Deces de la primărie, Adeverință de înhumare și dosar de decontare) ne ocupăm noi în mod complet.'
    },
    {
      q: 'În cât timp ajunge echipa de preluare Sf. Lazăr la adresa indicată?',
      a: 'Echipa noastră răspunde rapid solicitărilor dumneavoastră. În municipiul Iași și zonele metropolitane limitrofe (Valea Lupului, Miroslava, Tomești, Ciurea, Lunca Cetățuii etc.), echipa noastră cu autospeciala frigorifică autorizată se deplasează rapid pentru a fi alături de dumneavoastră în cel mai scurt timp de la confirmarea apelului.'
    },
    {
      q: 'Prețurile din pachete sunt cu adevărat fixe sau există costuri ascunse?',
      a: 'Prețurile noastre sunt 100% fixe și sunt garantate prin contractul semnat înainte de începerea serviciilor. Nu percepem taxe adiacente pentru manipulare, transport suplimentar local sau consultanță de noapte. Transparența deplină și corectitudinea financiară sunt fundamentele firmei Sf. Lazăr.'
    },
    {
      q: 'Organizați servicii funerare și în mediul rural sau în alte orașe din județul Iași?',
      a: 'Da, oferim servicii complete pe întreg teritoriul județului Iași și în județele limitrofe. Dispunem de logistica necesară pentru transport pe distanțe lungi și repatrieri internaționale în conformitate cu legislația sanitară europeană în vigoare.'
    }
  ];

  return (
    <section className="py-24 bg-dark-bg text-sand border-t border-gold/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              ÎNTREBĂRI FRECVENTE
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide mb-4">
              Consultanță Funerară Gratuită
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-sm">
              Răspundem cu claritate la principalele nelămuriri din clipele de doliu. Pentru orice altă întrebare, apelați dispeceratul nostru oricând.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.1 + idx * 0.1}>
                <div className="border border-gold/15 rounded-none overflow-hidden bg-gold/5 hover:bg-gold/10 transition-colors duration-300">
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-start gap-3.5 pr-4">
                      <HelpCircle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                      <span className="font-serif text-base sm:text-lg font-light text-sand hover:text-gold transition-colors duration-300">
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 text-gold"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-gold/10 text-xs sm:text-sm text-sand/60 leading-relaxed font-light pl-12 font-serif italic">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-12 p-6 sm:p-8 bg-gold/5 border border-gold/15 rounded-none flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-none bg-gold/5 border border-gold/15 flex items-center justify-center text-gold flex-shrink-0 sm:flex hidden">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-light text-gold">
                  Drepturi de decontare prin Casa de Pensii Iași
                </h4>
                <p className="font-serif italic text-sand/60 text-xs mt-1 max-w-lg font-light leading-relaxed">
                  Valoarea ajutorului de deces se modifică anual prin Legea Bugetului Asigurărilor Sociale. Ne ocupăm direct de încasarea sumei de la Casa de Pensii, oferind decontare din prețul pachetului.
                </p>
              </div>
            </div>
            <a
              href="tel:+40754321321"
              className="px-6 py-3.5 rounded-full bg-gold hover:bg-transparent hover:text-gold border border-gold text-dark-bg font-sans font-semibold text-xs uppercase tracking-[0.15em] text-center flex-shrink-0 transition-all duration-300"
            >
              Sună consilier
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
