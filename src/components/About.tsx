import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { HeartHandshake, ShieldCheck, UserCheck, Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Reusable animated count component
function AnimatedCounter({ value, duration = 2, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="despre" className="py-24 bg-dark-bg text-sand overflow-hidden relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              CINE SUNTEM NOI
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6">
              S.C. SF. LAZĂR S.R.L.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-base sm:text-lg leading-relaxed font-light">
              O echipă tânără, discretă și înalt competentă, specializată în organizarea de funeralii complete în județul Iași. Ne ghidăm după principii de compasiune profundă, transparență financiară absolută și respect solemn pentru viață și amintirea ei.
            </p>
          </ScrollReveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Comforting Empathy Image */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/5 filter blur-xl group-hover:scale-105 transition-transform duration-500" />
                <div className="relative overflow-hidden rounded-none border border-gold/15 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
                    alt="Compasiune si sustinere Sf. Lazar"
                    className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-102 opacity-75"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative corner borders */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/45" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/45" />
                  
                  {/* Floating support badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-none bg-[#0a0a0a]/95 backdrop-blur-md border border-gold/15 shadow-2xl">
                    <p className="text-xs italic text-sand/80 leading-relaxed font-serif">
                      "Datoria noastră nu este doar de a asigura servicii perfecte, ci de a oferi un reazem sufletesc real celor rămași în urmă."
                    </p>
                    <p className="text-[9px] font-sans text-gold uppercase tracking-[0.2em] mt-3 text-right">
                      — Echipa Sf. Lazăr SRL
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Informative details & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="left" delay={0.3}>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-sand leading-tight">
                Servicii corecte, complet lipsite de birocrație
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="font-serif italic text-sand/60 text-sm leading-relaxed font-light">
                Știm că momentele de doliu sunt copleșitoare. Ne asumăm întreaga responsabilitate pentru pregătirea sicriului, preluarea decedatului cu autospeciale moderne, obținerea documentelor necesare de la starea civilă, manipularea sicriului, depunerea la capelă și pachetele de pomenire.
              </p>
              <p className="font-serif italic text-sand/60 text-sm leading-relaxed mt-4 font-light">
                Suntem una dintre puținele firme din Iași cu autorizare sanitară D.S.P. completă, care garantează respectarea strictă a normelor legale și igienico-sanitare europene.
              </p>
            </ScrollReveal>

            {/* Official Legal Coordinates Box */}
            <ScrollReveal direction="left" delay={0.5}>
              <div className="p-6 rounded-none bg-gold/5 border border-gold/15 space-y-4 shadow-xl">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Date de Identificare & Contact Direct
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-sand/70 font-sans">
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Administrator:</strong> Andreea-Teodora Croitoru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Adresă:</strong> Str. Carpați 9A, Nicolina 1, Iași</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Email:</strong> sf.lazar32@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0 animate-pulse" />
                    <span><strong>Tel direct:</strong> 0754 321 321</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats Block */}
            <ScrollReveal direction="left" delay={0.6}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/10">
                <div className="text-center sm:text-left">
                  <div className="flex items-baseline justify-center sm:justify-start gap-1">
                    <AnimatedCounter value={8} />
                  </div>
                  <p className="text-[9px] font-sans text-sand/40 uppercase tracking-[0.25em] mt-2">
                    Consilieri Funerari
                  </p>
                </div>
                
                <div className="text-center sm:text-left border-x border-gold/10 px-4">
                  <div className="flex items-baseline justify-center sm:justify-start gap-1">
                    <AnimatedCounter value={3} />
                  </div>
                  <p className="text-[9px] font-sans text-sand/40 uppercase tracking-[0.25em] mt-2">
                    Pachete Prestabilite
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex items-baseline justify-center sm:justify-start gap-1">
                    <AnimatedCounter value={30} suffix="'" />
                  </div>
                  <p className="text-[9px] font-sans text-sand/40 uppercase tracking-[0.25em] mt-2">
                    Timp Intervenție
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}
