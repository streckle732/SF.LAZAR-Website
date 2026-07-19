import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckCircle, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSending(true);

    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg text-sand border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-sans tracking-[0.4em] text-gold uppercase block mb-3">
              SUNTEM AICI PENTRU DUMNEAVOASTRĂ
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4">
              Suntem aici pentru a vă sprijini
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6 opacity-45" />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-serif italic text-sand/60 text-sm sm:text-base">
              Ne puteți contacta direct pentru asistență completă în caz de deces și suport organizatoric în tot județul Iași.
            </p>
          </ScrollReveal>
        </div>

        {/* Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.2}>
                <h3 className="font-serif text-2xl font-light text-gold">
                  Informații de Contact Direct
                </h3>
              </ScrollReveal>

              <div className="space-y-5">
                {/* 1. Address */}
                <ScrollReveal direction="right" delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-gold/5 border border-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-sans font-semibold tracking-widest text-gold/60 uppercase">Sediu Central & Showroom</h4>
                      <p className="text-sand text-sm sm:text-base font-light font-serif mt-0.5">Strada Carpați 9A, Iași, Cod 700729</p>
                      <p className="text-sand/50 text-xs font-light font-serif italic">Zona Nicolina 1 (vizavi de parcul Nicolina)</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* 2. Phone */}
                <ScrollReveal direction="right" delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-gold/5 border border-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 stroke-[1.5] animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-sans font-semibold tracking-widest text-gold/60 uppercase">Telefon de Urgență & Asistență</h4>
                      <a href="tel:+40754321321" className="text-gold hover:text-sand text-lg sm:text-xl font-sans font-semibold block transition-colors mt-0.5">
                        0754 321 321
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* 3. Email */}
                <ScrollReveal direction="right" delay={0.5}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-gold/5 border border-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-sans font-semibold tracking-widest text-gold/60 uppercase">Email Corespondență</h4>
                      <a href="mailto:sf.lazar32@gmail.com" className="text-sand hover:text-gold text-sm sm:text-base font-light block transition-colors mt-0.5">
                        sf.lazar32@gmail.com
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* 4. Schedule */}
                <ScrollReveal direction="right" delay={0.6}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-gold/5 border border-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-sans font-semibold tracking-widest text-gold/60 uppercase">Orar Showroom</h4>
                      <p className="text-sand text-sm sm:text-base font-light font-serif mt-0.5">Luni – Sâmbătă: 08:00 – 16:00</p>
                      <p className="text-sand/50 text-xs font-light font-serif italic">Echipă operativă disponibilă zilnic pentru asistență rapidă</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Billing / Legal Info */}
            <ScrollReveal direction="right" delay={0.7}>
              <div className="p-5 rounded-none bg-gold/5 border border-gold/15 text-xs text-sand/60 leading-relaxed space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-gold uppercase tracking-widest text-[10px] font-sans">
                  <ShieldAlert className="w-3.5 h-3.5 text-gold" />
                  <span>Date Identificare Companie</span>
                </div>
                <p><strong className="text-gold">Companie:</strong> S.C. SF. LAZĂR S.R.L.</p>
                <p><strong className="text-gold">Domeniu CAEN principal:</strong> 9603 (Servicii funerare și conexe complete)</p>
                <p>Toate serviciile sunt prestate în baza legilor sanitare în vigoare, asigurând eliberarea facturii fiscale pentru decontarea rapidă prin casele teritoriale de pensii.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Interactive Form Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-[#0a0a0a]/80 border border-gold/15 rounded-none p-6 sm:p-10 shadow-2xl relative h-full flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="space-y-1">
                        <h4 className="font-serif text-xl font-light text-gold">
                          Trimiteți un mesaj rapid
                        </h4>
                        <p className="text-sand/60 text-xs sm:text-sm font-light font-serif italic">
                          Completați formularul de mai jos pentru solicitări pachete sau consultanță. Vă sunăm înapoi de urgență.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-gold/60 uppercase block">
                            Nume complet *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Ex. Popescu Andrei"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-none border border-gold/15 bg-transparent text-sm text-sand placeholder:text-sand/30 focus:outline-none focus:border-gold transition-all duration-350"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-gold/60 uppercase block">
                            Număr de telefon *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="Ex. 07xx xxx xxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-none border border-gold/15 bg-transparent text-sm text-sand placeholder:text-sand/30 focus:outline-none focus:border-gold transition-all duration-350"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-sans font-semibold tracking-wider text-gold/60 uppercase block">
                          Adresă de email (Opțional)
                        </label>
                        <input
                          type="email"
                          placeholder="Ex. andrei@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-none border border-gold/15 bg-transparent text-sm text-sand placeholder:text-sand/30 focus:outline-none focus:border-gold transition-all duration-350"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-sans font-semibold tracking-wider text-gold/60 uppercase block">
                          Cum vă putem ajuta?
                        </label>
                        <textarea
                          placeholder="Scrieți detalii despre solicitarea dumneavoastră..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-none border border-gold/15 bg-transparent text-sm text-sand placeholder:text-sand/30 focus:outline-none focus:border-gold transition-all duration-350 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold hover:bg-transparent hover:text-gold border border-gold text-dark-bg font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-70 shadow-2xl cursor-pointer"
                      >
                        {isSending ? (
                          <>
                            <div className="w-4 h-4 border-2 border-dark-bg border-t-gold rounded-full animate-spin" />
                            <span>Se trimite...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Trimite Solicitare Rapidă</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center space-y-4 py-6"
                    >
                      <div className="w-14 h-14 rounded-none bg-gold/5 border border-gold/15 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-gold" />
                      </div>
                      <h4 className="font-serif text-2xl font-light text-gold">
                        Mesaj trimis cu succes!
                      </h4>
                      <p className="font-serif italic text-sand/60 text-sm leading-relaxed max-w-md mx-auto">
                        Vă mulțumim pentru încredere. Am primit datele dumneavoastră. Un operator al echipei **Sf. Lazăr SRL Iași** vă va contacta telefonic în cel mai scurt timp posibil pentru a vă asigura asistență completă.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="text-xs font-sans font-semibold tracking-wider uppercase text-gold hover:underline pt-4 block mx-auto"
                      >
                        Trimite alt mesaj
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Embedded Dark Theme Google Map */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 rounded-none overflow-hidden border border-gold/15 shadow-2xl h-[350px] bg-[#0a0a0a] relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.8964567099286!2d27.58596031503232!3d47.15502862284142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb75818930eb%3A0x5b6b09a69e8e7a6a!2sStrada%20Carpa%C8%9Bi%209A%2C%20Ia%C8%99i%20700729!5e0!3m2!1sro!2sro!4v1"
              className="w-full h-full border-0 grayscale invert saturate-50 brightness-75 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 group-hover:contrast-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Sediul Sf. Lazar SRL — Strada Carpați 9A, Iași"
            />
            {/* Soft map border outline */}
            <div className="absolute inset-0 border border-gold/15 pointer-events-none rounded-none" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
