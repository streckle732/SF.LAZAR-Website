import { Truck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FleetAndGallery() {
  const fleet = [
    {
      id: 'w212',
      name: 'Mercedes-Benz E250 W212 (Euro 6)',
      description: 'Limuzină funerară premium, ultramodernă și complet echipată conform standardelor europene riguroase. Folosită exclusiv pentru ceremonii VIP de înalt nivel, asigurând un transport ireproșabil în condiții de temperatură controlată și demnitate maximă.',
      tag: 'VIP'
    },
    {
      id: 'w210',
      name: 'Mercedes-Benz W210 Clasic',
      description: 'Autospecială funerară consacrată, extrem de silențioasă și discretă. Reprezintă alegerea clasică ideală pentru pachetul Standard, fiind special autorizată de Direcția de Sănătate Publică pentru transport funerar de protocol.',
      tag: 'Standard'
    }
  ];

  return (
    <section id="flota" className="py-24 bg-dark-bg text-sand relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              DOTĂRI ȘI LOGISTICĂ
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4">
              Flota de autospeciale funerare și dotări
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-base font-light">
              Dispunem de mașini funerare special omologate RAR și avizate de Direcția de Sănătate Publică Iași, capabile să asigure transportul și protocolul funerar în deplină siguranță și respect.
            </p>
          </ScrollReveal>
        </div>

        {/* Fleet List (Text only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleet.map((car, idx) => (
            <ScrollReveal key={car.id} direction={idx === 0 ? 'right' : 'left'} delay={0.2}>
              <div className="h-full bg-gold/5 border border-gold/15 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative hover:border-gold/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-sans tracking-widest text-gold/60 uppercase">Echipament omologat</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-light text-gold flex items-center gap-3">
                        <Truck className="w-5 h-5 text-gold stroke-[1.5] flex-shrink-0" />
                        <span>{car.name}</span>
                      </h3>
                    </div>
                    <span className="px-3 py-1 border border-gold/30 bg-gold/10 text-gold text-[9px] font-sans tracking-wider uppercase flex-shrink-0 mt-1">
                      {car.tag}
                    </span>
                  </div>
                  <p className="font-serif italic text-sand/70 text-sm sm:text-base leading-relaxed font-light">
                    {car.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
