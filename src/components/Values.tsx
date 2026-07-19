import { motion } from 'motion/react';
import { Eye, ShieldCheck, Heart, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Values() {
  const values = [
    {
      id: 'transparente',
      icon: <Eye className="w-5 h-5 text-gold" />,
      title: 'Transparență Totală',
      description: 'Prețul stabilit inițial în contract rămâne neschimbat. Vă oferim factură detaliată pentru fiecare serviciu, fără costuri ascunse sau taxe de urgență absurde.'
    },
    {
      id: 'promptitudine',
      icon: <Clock className="w-5 h-5 text-gold" />,
      title: 'Promptitudine Absolută',
      description: 'Suntem întotdeauna prompți când aveți nevoie de noi. Echipa de preluare ajunge la dumneavoastră în 30–45 de minute în municipiul Iași și zonele metropolitane limitrofe.'
    },
    {
      id: 'birocratie',
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: 'Fără Birocrație pentru Familie',
      description: 'Noi facem drumurile obositoare. Obținem certificatul de deces, adeverința de înhumare și întocmim dosarul complet pentru ajutorul oferit de stat.'
    },
    {
      id: 'respect',
      icon: <Heart className="w-5 h-5 text-gold" />,
      title: 'Empatie și Respect Profund',
      description: 'Înțelegem pe deplin greutatea acestor momente. Abordăm fiecare caz cu maximă discreție, blândețe și solemnitate, onorând amintirea celui plecat.'
    }
  ];

  return (
    <section className="py-24 bg-dark-bg text-sand relative overflow-hidden border-t border-gold/10">
      {/* Abstract dark decoration lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-10 w-[1px] h-full bg-gold" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gold" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              STANDARDELE NOASTRE DE CONDUITĂ
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4 text-sand">
              Valorile pe care ne clădim promisiunea
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-base font-light">
              Nu ne considerăm doar o firmă de pompe funebre, ci partenerul dumneavoastră de încredere în organizarea unui ultim drum absolut onorabil.
            </p>
          </ScrollReveal>
        </div>

        {/* Values grid (staggered delay cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <ScrollReveal key={val.id} direction="up" delay={0.1 + idx * 0.15}>
              <motion.div
                whileHover={{ y: -6, borderColor: 'rgba(193, 154, 107, 0.5)' }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-none border border-gold/15 bg-gold/5 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-none bg-gold/5 border border-gold/20 flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-lg font-light text-gold mb-3 tracking-wide">
                    {val.title}
                  </h3>
                  <p className="font-serif italic text-sand/60 text-xs sm:text-sm leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
                {/* Decorative bottom corner border */}
                <div className="w-8 h-[1px] bg-gold/25 mt-6" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
