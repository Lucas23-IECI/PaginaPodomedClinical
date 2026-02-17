import React from 'react';
import { MessageSquare, CalendarDays, Stethoscope, ClipboardCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const steps = [
  { number: 1, icon: 'MessageSquare', title: 'Contacto', description: 'Contáctenos vía WhatsApp para solicitar información.' },
  { number: 2, icon: 'CalendarDays', title: 'Coordinación', description: 'Agendamos su visita en el día y horario que más le acomode.' },
  { number: 3, icon: 'Stethoscope', title: 'Atención', description: 'El profesional acude a su domicilio con todo el equipo necesario.' },
  { number: 4, icon: 'ClipboardCheck', title: 'Seguimiento', description: 'Realizamos un control posterior para asegurar su recuperación.' },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'MessageSquare': return <MessageSquare size={24} />;
    case 'CalendarDays': return <CalendarDays size={24} />;
    case 'Stethoscope': return <Stethoscope size={24} />;
    case 'ClipboardCheck': return <ClipboardCheck size={24} />;
    default: return <MessageSquare size={24} />;
  }
};

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white scroll-mt-24 md:scroll-mt-32" id="proceso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Proceso</span>
          <h2 className="text-primary text-3xl font-extrabold tracking-tight mb-4">¿Cómo trabajamos?</h2>
          <p className="text-slate-600">Un proceso simple y transparente pensado en su comodidad.</p>
        </SectionWrapper>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <SectionWrapper key={step.number} delay={index * 0.15}>
                <div className="bg-white p-6 text-center group">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-4 ring-white relative ${
                    index === 0
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-white border-2 border-primary text-primary shadow-md"
                  }`}>
                    {getIcon(step.icon)}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.description}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;