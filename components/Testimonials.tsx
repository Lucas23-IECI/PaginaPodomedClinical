import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

/* PENDIENTE: Confirmar con el cliente si estos testimonios son reales o reemplazarlos por reseñas verificadas */
const testimonials: Testimonial[] = [
  {
    text: "Excelente servicio, muy puntual y profesional. Mi madre quedó encantada con la atención y el cuidado que tuvo con sus pies. Totalmente recomendado.",
    author: "María Paz",
    type: "Paciente Domiciliaria",
    initials: "MP"
  },
  {
    text: "Sufría mucho con una uña encarnada y Gonzalo solucionó el problema en una sola visita y sin dolor. Muy agradecido por su disposición.",
    author: "Jorge Rojas",
    type: "Paciente Clínico",
    initials: "JR"
  },
  {
    text: "Me da mucha confianza que todo el material venga estéril. Se nota la preocupación por la higiene. Seguiré atendiéndome con él.",
    author: "Carmen Muñoz",
    type: "Paciente Preventiva",
    initials: "CM"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary relative overflow-hidden scroll-mt-24 md:scroll-mt-32" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionWrapper className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-white/80 font-bold tracking-widest uppercase text-sm mb-2 block">Lo que dicen nuestros pacientes</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">Confianza y Resultados</h2>
        </SectionWrapper>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary transition-all backdrop-blur-sm"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-20">
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary transition-all backdrop-blur-sm"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
              >
                <div className="absolute top-8 right-8 text-primary/10">
                  <Quote size={80} />
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="flex text-yellow-400 mb-6 gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={24} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xl md:text-2xl italic leading-relaxed mb-8 font-light">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xl shadow-inner">
                      {testimonials[currentIndex].initials}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-primary text-lg">{testimonials[currentIndex].author}</h4>
                      <p className="text-sm text-secondary font-medium tracking-wide uppercase">{testimonials[currentIndex].type}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;