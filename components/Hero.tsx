import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Home, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const WHATSAPP_LINK = "https://wa.me/56928247344";

const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('servicios');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white" id="inicio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <SectionWrapper className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              Servicio a Domicilio
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.15] tracking-tight">
              Atención Podológica Profesional en <span className="text-secondary">Concepción</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-2">
              Servicio clínico a domicilio de alta calidad para el cuidado integral de sus pies. Llevamos la clínica a la comodidad de su hogar con los más altos estándares de higiene.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary hover:bg-green-600 text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-green-500/20 hover:-translate-y-1 hover:shadow-2xl"
              >
                <MessageCircle size={20} />
                Contactar por WhatsApp
              </a>
              <a
                href="#servicios"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-base font-bold rounded-xl transition-all hover:-translate-y-1"
              >
                Ver Servicios
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 group cursor-help" title="Profesional certificado en la Superintendencia de Salud">
                <ShieldCheck size={18} className="text-secondary group-hover:scale-110 transition-transform" />
                Certificado
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/30"></div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 group cursor-help" title="Servicio disponible en la comodidad de su hogar">
                <Home size={18} className="text-secondary group-hover:scale-110 transition-transform" />
                Domicilio
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/30"></div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 group cursor-help" title="Instrumental 100% esterilizado">
                <Sparkles size={18} className="text-secondary group-hover:scale-110 transition-transform" />
                Estéril
              </div>
            </div>
          </SectionWrapper>

          {/* Image Content */}
          <SectionWrapper delay={0.2} className="relative lg:h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-green-100/50 rounded-[2rem] -rotate-3 scale-95 z-0"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/3] lg:aspect-auto group">
              <img
                alt="Gonzalo Acevedo — Podólogo Clínico atendiendo paciente a domicilio"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                decoding="async"
                src="/Fotos/FotoCliente2.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-secondary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Servicio Integral</p>
                  <p className="text-xs text-slate-500">Experiencia, vocación y empatía</p>
                </div>
              </div>
            </div>
          </SectionWrapper>

        </div>
      </div>
    </section>
  );
};

export default Hero;