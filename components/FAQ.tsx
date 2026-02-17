import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const faqs: FaqItem[] = [
  {
    question: "¿En qué comunas de Concepción realizan atención?",
    answer: "Atendemos principalmente en Concepción centro, San Pedro de la Paz, Chiguayante y Talcahuano. Para otras comunas cercanas, por favor consúltenos directamente por WhatsApp para evaluar disponibilidad y costos de traslado."
  },
  {
    question: "¿Atienden a niños y adultos mayores?",
    answer: "Sí, brindamos atención podológica para todas las edades, desde niños hasta adultos mayores. Tenemos especial experiencia y paciencia en el trato con personas de la tercera edad y pacientes con movilidad reducida."
  },
  {
    question: "¿Qué debo preparar antes de la visita?",
    answer: "Solo necesitamos un espacio cómodo con buena iluminación donde el paciente pueda sentarse (un sillón o silla) y una toma de corriente cercana. Nosotros llevamos todo el instrumental, insumos y equipos necesarios."
  },
  {
    question: "¿Emiten boleta para reembolso?",
    answer: "Sí, entregamos boleta de honorarios electrónica por la prestación del servicio podológico."
  },
  {
    question: "¿Cómo agendo una hora?",
    answer: "Agendar es muy sencillo. Puede contactarnos directamente a través de WhatsApp haciendo clic en el botón flotante de esta página. Coordinaremos el día y hora que más le acomode."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background-alt scroll-mt-24 md:scroll-mt-32" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Dudas Comunes</span>
          <h2 className="text-primary text-3xl font-extrabold tracking-tight mb-4">Preguntas Frecuentes</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Respuestas rápidas a las consultas más habituales de nuestros pacientes.
          </p>
        </SectionWrapper>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <div className={`group bg-white rounded-2xl border ${openIndex === index ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-slate-100 shadow-sm'} overflow-hidden transition-all duration-300 hover:shadow-md`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between gap-4 p-6 w-full text-left bg-white focus:outline-none cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <h3 className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`shrink-0 ${openIndex === index ? 'text-primary' : 'text-slate-400'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={openIndex === index ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto", marginBottom: 24 },
                    collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;