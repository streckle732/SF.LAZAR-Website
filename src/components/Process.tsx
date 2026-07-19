import { motion } from 'motion/react';
import { Phone, Truck, ShieldCheck, HeartPulse, Sparkles, FileText, Landmark } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <Phone className="w-4 h-4 text-gold" />,
      title: 'Primul Apel & Consiliere',
      description: 'Ne apelați cu încredere. Consilierul nostru identifică rapid solicitarea, vă ghidează cu calm privind primii pași legali și vă ajută să stabiliți pachetul de servicii funerare.'
    },
    {
      num: '02',
      icon: <Truck className="w-4 h-4 text-gold" />,
      title: 'Transportul la Laborator',
      description: 'Echipa operativă Sf. Lazăr se deplasează de urgență cu o autospecială autorizată D.S.P. pentru preluarea corpului în condiții de igienă absolută și demnitate.'
    },
    {
      num: '03',
      icon: <Sparkles className="w-4 h-4 text-gold" />,
      title: 'Pregătire, Toaletare & Cosmetică',
      description: 'În laboratorul nostru specializat, efectuăm servicii de conservare (tanatopraxie), cosmetizare și îmbrăcare profesională cu hainele stabilite, pregătind trupul pentru depunerea la capelă.'
    },
    {
      num: '04',
      icon: <FileText className="w-4 h-4 text-gold" />,
      title: 'Întocmirea Actelor Legale',
      description: 'Rezolvăm birocrația obositoare: declararea decesului la starea civilă Iași, obținerea certificatului de deces, a adeverinței de înhumare și depunerea dosarului pentru decontarea ajutorului de deces.'
    },
    {
      num: '05',
      icon: <Landmark className="w-4 h-4 text-gold" />,
      title: 'Ceremonia și Înhumarea',
      description: 'Asigurăm manipularea sicriului de către personalul nostru în uniformă, depunerea la capelă, cortegiul funerar și organizarea finală a slujbei religioase și a pomenii.'
    }
  ];

  return (
    <section id="proces" className="py-24 bg-dark-bg text-sand overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              CUM LUCRĂM PAS CU PAS
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4">
              Cum decurge procesul nostru de asistență
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-base font-light">
              Vă suntem alături în fiecare moment, preluând toată povara organizatorică astfel încât dumneavoastră să vă puteți concentra doar pe reculegere și familie.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold via-gold/15 to-gold/5 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col sm:flex-row items-stretch">
                  
                  {/* Left / Right content positioning */}
                  <div className={`w-full sm:w-1/2 flex ${isEven ? 'sm:justify-end sm:pr-12' : 'sm:order-2 sm:pl-12'}`}>
                    <ScrollReveal direction={isEven ? 'right' : 'left'} delay={0.15}>
                      <div className="p-6 sm:p-8 bg-gold/5 border border-gold/15 rounded-none shadow-2xl hover:border-gold/30 transition-all duration-350 relative group h-full">
                        {/* Bullet count background */}
                        <div className="absolute top-4 right-4 font-serif text-3xl font-light text-gold/10 group-hover:text-gold/25 transition-colors duration-300">
                          {step.num}
                        </div>

                        {/* Heading */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-none bg-gold/5 border border-gold/15 flex items-center justify-center">
                            {step.icon}
                          </div>
                          <h3 className="font-serif text-lg sm:text-xl font-light text-gold">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="font-serif italic text-sand/60 text-xs sm:text-sm leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Bullet Node Point in timeline */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-8 h-8 rounded-none border border-gold/30 bg-dark-bg text-gold shadow-2xl flex items-center justify-center -translate-x-1/2 z-10 hidden sm:flex">
                    <span className="text-[10px] text-gold font-sans font-semibold">{step.num}</span>
                  </div>

                  {/* Empty filler for matching height grid on wide screens */}
                  <div className="w-full sm:w-1/2 sm:block hidden" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
