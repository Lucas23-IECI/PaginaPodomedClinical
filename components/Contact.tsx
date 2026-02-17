import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight, MessageCircle, Instagram } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  const whatsappLink = "https://wa.me/56928247344";
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${formData.name}. Mi teléfono es ${formData.phone}. ${formData.message}`;
    window.open(`https://wa.me/56928247344?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-white relative scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <SectionWrapper className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Contacto</span>
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-6">Estamos aquí para ayudarle</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ¿Tiene dudas o necesita agendar una hora? Contáctenos directamente por <strong className="text-primary">WhatsApp</strong> o al <strong className="text-primary">celular</strong> para coordinar su cita.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Contact Info */}
          <SectionWrapper className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Clock className="text-primary" />
                Horarios de Atención
              </h3>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-4">
                <p className="text-slate-800 font-medium text-center">
                  Horario flexible según la necesidad del paciente
                </p>
                <p className="text-primary font-bold text-center text-lg mt-1">
                  A convenir — Atención a domicilio
                </p>
              </div>
              <p className="text-gray-500 text-sm text-center italic">
                Coordine su horario ideal directamente por WhatsApp o llamada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="tel:+56928247344" className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Llámenos</h4>
                <p className="text-gray-500 text-sm group-hover:text-primary transition-colors">+56 9 2824 7344</p>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-green-500/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">WhatsApp</h4>
                <p className="text-gray-500 text-sm group-hover:text-green-500 transition-colors">+56 9 2824 7344</p>
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-primary-dark text-white p-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              <Calendar size={24} />
              <span>Agendar Cita Ahora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </SectionWrapper>

          {/* Coverage Areas + Form */}
          <SectionWrapper delay={0.2} className="space-y-6">
            {/* Coverage Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-[2rem] shadow-xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Zonas de Atención</h3>
                  <p className="text-white/80">Atención a domicilio en Concepción y alrededores:</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {['Concepción', 'San Pedro de la Paz', 'Chiguayante', 'Talcahuano'].map((zona) => (
                  <div key={zona} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center hover:bg-white/20 transition-colors">
                    <span className="font-semibold">{zona}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Form → WhatsApp */}
            <div className="bg-background-alt p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Escríbanos directamente</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Nombre</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    id="name"
                    placeholder="Su nombre"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Teléfono</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    id="phone"
                    placeholder="+56 9 ..."
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Mensaje</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    id="message"
                    placeholder="¿En qué podemos ayudarle?"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  ></textarea>
                </div>
                <button className="w-full bg-secondary hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2" type="submit">
                  <MessageCircle size={20} />
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Social + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:podomedclinical@gmail.com" className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Email</h4>
                  <p className="text-gray-500 text-xs group-hover:text-primary transition-colors">podomedclinical@gmail.com</p>
                </div>
              </a>

              <a href="https://www.instagram.com/Podomed_clinical" target="_blank" rel="noopener noreferrer" className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-pink-400/30 hover:shadow-lg transition-all group flex items-center gap-4">
                <div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Instagram</h4>
                  <p className="text-gray-500 text-xs group-hover:text-pink-500 transition-colors">@Podomed_clinical</p>
                </div>
              </a>
            </div>
          </SectionWrapper>

        </div>
      </div>
    </section>
  );
};

export default Contact;