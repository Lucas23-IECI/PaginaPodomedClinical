import React from 'react';
import { Stethoscope, Sparkles, Activity, Home, ClipboardList, CheckCircle, Clock, HeartPulse } from 'lucide-react';
import { Service } from '../types';
import SectionWrapper from './SectionWrapper';

const services: Service[] = [
  { icon: 'ClipboardList', title: 'Evaluación', description: 'Diagnóstico completo del estado de sus pies y plan de tratamiento personalizado.', popular: false },
  { icon: 'Activity', title: 'Uñas Encarnadas', description: 'Procedimiento indoloro para corrección de onicocriptosis y alivio inmediato.', popular: false },
  { icon: 'Sparkles', title: 'Micosis', description: 'Tratamiento efectivo para infecciones por hongos en piel y uñas.', popular: false },
  { icon: 'HeartPulse', title: 'Preventiva', description: 'Cuidado regular para pacientes diabéticos y prevención de futuras complicaciones.', popular: false },
  { icon: 'Home', title: 'Domiciliaria', description: 'Atención podológica completa sin salir de casa. Ideal para adultos mayores.', popular: true },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'ClipboardList': return <ClipboardList size={28} />;
    case 'Activity': return <Activity size={28} />;
    case 'Sparkles': return <Sparkles size={28} />;
    case 'HeartPulse': return <HeartPulse size={28} />;
    case 'Home': return <Home size={28} />;
    default: return <Stethoscope size={28} />;
  }
};

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-background-alt scroll-mt-24 md:scroll-mt-32" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Tratamientos</span>
          <h2 className="text-primary text-3xl font-extrabold tracking-tight mb-4">Servicios Podológicos Integrales</h2>
          <p className="text-slate-600 text-lg">Tratamientos especializados adaptados a sus necesidades, realizados con equipamiento profesional en su propio domicilio.</p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                )}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Badges */}
        <SectionWrapper delay={0.3} className="flex flex-wrap justify-center gap-4 mt-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm shadow-sm">
            <CheckCircle size={16} className="text-secondary" />
            Servicio 100% a domicilio
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm shadow-sm">
            <Clock size={16} className="text-secondary" />
            Horarios a convenir
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm shadow-sm">
            <HeartPulse size={16} className="text-secondary" />
            Protocolos sanitarios estrictos
          </span>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default Services;