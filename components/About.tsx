import React from 'react';
import { GraduationCap, BadgeCheck, Heart, Quote } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

/** Ruta de la foto del profesional desde Public/Fotos/ */
const FOTO_ESPECIALISTA = "/Fotos/FotoPerfil.png";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-background-alt overflow-hidden scroll-mt-24 md:scroll-mt-32" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <SectionWrapper className="relative w-full max-w-md lg:w-1/2">
            <div className="absolute inset-0 bg-primary/10 rounded-full translate-x-4 translate-y-4"></div>
            <div className="relative rounded-full overflow-hidden aspect-square border-8 border-white shadow-2xl group">
              <img
                alt="Gonzalo Andrés Acevedo Salvo — Podólogo Clínico"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                src={FOTO_ESPECIALISTA}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2} className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Sobre el Profesional</span>
            <h2 className="text-primary text-3xl font-extrabold tracking-tight mb-2">Conozca a su Especialista</h2>
            <h3 className="text-xl font-bold text-slate-700 mb-6">Gonzalo Andrés Acevedo Salvo</h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              <strong className="text-primary">TENS titulado en Santo Tomás</strong> y <strong className="text-primary">Podólogo Clínico formado en Universidad Diego Portales</strong>. Con amplia experiencia en el tratamiento de afecciones del pie, mi enfoque se centra en brindar una atención empática, profesional y segura, entendiendo que cada paciente requiere un trato personalizado, especialmente en la comodidad de su hogar.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-secondary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Técnico en Enfermería de Nivel Superior (TENS)</h4>
                  <p className="text-sm text-slate-500">Titulado en Instituto Profesional Santo Tomás</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-secondary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Podólogo Clínico</h4>
                  <p className="text-sm text-slate-500">Formado en Universidad Diego Portales</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck size={20} className="text-secondary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Registro Nacional de Prestadores Individuales de Salud</h4>
                  <p className="text-sm text-slate-500">Inscrito en la Superintendencia de Salud</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart size={20} className="text-secondary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Atención Humanizada</h4>
                  <p className="text-sm text-slate-500">Especialista en trato con adulto mayor y pie diabético.</p>
                </div>
              </div>
            </div>

            {/* Frase destacada del profesional */}
            <blockquote className="mt-8 relative bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5">
              <Quote size={20} className="text-primary/30 absolute top-3 right-4" />
              <p className="text-primary font-semibold text-lg italic leading-relaxed">
                "El cuidado de los pies es el primer paso hacia el éxito"
              </p>
            </blockquote>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center group cursor-default" title="Vocación y empatía con el paciente">
                <h4 className="text-3xl font-extrabold text-primary group-hover:scale-110 transition-transform">100%</h4>
                <span className="text-sm text-slate-500">Vocación</span>
              </div>
              <div className="text-center group cursor-default" title="Servicio integral a domicilio">
                <h4 className="text-3xl font-extrabold text-primary group-hover:scale-110 transition-transform">Integral</h4>
                <span className="text-sm text-slate-500">Servicio</span>
              </div>
              <div className="text-center group cursor-default" title="Experiencia profesional">
                <h4 className="text-3xl font-extrabold text-primary group-hover:scale-110 transition-transform">Exp.</h4>
                <span className="text-sm text-slate-500">Años de Experiencia</span>
              </div>
            </div>
          </SectionWrapper>

        </div>
      </div>
    </section>
  );
};

export default About;