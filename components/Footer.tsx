import React, { useState } from 'react';
import { Facebook, Instagram, MessageCircle, Heart, X, Shield, FileText } from 'lucide-react';

/** Logo del footer — asset local desde Public/Fotos/ */
const LOGO_FOOTER = "/Fotos/LogoSvgOficial.png";

const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);
  const closeModal = () => setModalContent(null);

  return (
    <>
      <footer id="footer" className="bg-background-dark text-white pt-20 pb-10 rounded-t-[3rem] mt-0 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            {/* Brand */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO_FOOTER}
                  alt="Podomed Clinical — Logo"
                  className="h-11 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
                <div>
                  <h2 className="text-2xl font-bold leading-none tracking-tight">Podomed Clinical</h2>
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Podología a Domicilio</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-sm">
                Servicios podológicos profesionales a domicilio en Concepción y alrededores. Calidad, higiene y compromiso con la salud de sus pies.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.facebook.com/Podomed_clinical"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Facebook"
                  title="Visitar página de Facebook"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/Podomed_clinical"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                  title="Visitar perfil de Instagram"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:border-transparent hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/56928247344"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contáctenos por WhatsApp"
                  title="Enviar mensaje por WhatsApp"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-lg font-bold text-white">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#inicio" title="Ir al inicio" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>Inicio</a></li>
                <li><a href="#servicios" title="Ver servicios" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>Servicios</a></li>
                <li><a href="#proceso" title="Ver proceso" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>Proceso</a></li>
                <li><a href="#testimonios" title="Leer testimonios" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>Testimonios</a></li>
                <li><a href="#contacto" title="Contacto y agendar hora" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>Contacto</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-lg font-bold text-white">Contacto</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-secondary shrink-0" />
                  <a href="https://wa.me/56928247344" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">+56 9 2824 7344</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <a href="mailto:podomedclinical@gmail.com" className="hover:text-secondary transition-colors">podomedclinical@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span>Concepción y alrededores</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  <span>Horarios a convenir</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 italic">Profesional: Gonzalo Andrés Acevedo Salvo</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center order-2 md:order-1">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} Podomed Clinical. Todos los derechos reservados.
              </p>
              <span className="hidden md:inline text-gray-600">|</span>
              <p className="text-sm text-gray-400 flex items-center gap-1.5">
                Hecho con <Heart size={14} className="fill-red-500 text-red-500 animate-pulse" /> por <a href="https://wa.me/56956994930" target="_blank" rel="noopener noreferrer" title="Contactar al desarrollador" className="hover:text-primary transition-colors font-medium">Lucas Méndez Risopatrón</a>
              </p>
            </div>

            <div className="flex gap-6 text-sm text-gray-400 order-1 md:order-2">
              <button onClick={() => setModalContent('privacy')} title="Ver política de privacidad" className="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer">
                <Shield size={14} /> Privacidad
              </button>
              <button onClick={() => setModalContent('terms')} title="Ver términos y condiciones" className="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer">
                <FileText size={14} /> Términos
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {modalContent && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="bg-white rounded-2xl w-full max-w-3xl h-[85vh] overflow-hidden shadow-2xl relative z-10 flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                {modalContent === 'privacy' ? <Shield size={22} className="text-primary" /> : <FileText size={22} className="text-primary" />}
                {modalContent === 'privacy' ? 'Política de Privacidad y Datos' : 'Términos y Condiciones del Servicio'}
              </h3>
              <button onClick={closeModal} title="Cerrar" className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 cursor-pointer">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto text-gray-600 space-y-8 text-sm leading-relaxed">
              {modalContent === 'privacy' ? (
                <>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">1. Marco Legal y Compromiso</h4>
                    <p>Podomed Clinical respeta su privacidad y protege sus datos personales en conformidad con la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong> y la <strong>Ley N° 20.584 sobre Derechos y Deberes de los Pacientes</strong> en Chile.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">2. Recopilación de Datos Sensibles</h4>
                    <p>Para otorgar una atención de salud segura, recopilamos:</p>
                    <ul className="list-disc pl-5 space-y-2 bg-gray-50 p-4 rounded-lg">
                      <li><strong className="text-primary">Datos Identificatorios:</strong> RUT, nombre completo, fecha de nacimiento, dirección.</li>
                      <li><strong className="text-primary">Datos de Salud (Sensibles):</strong> Antecedentes de enfermedades crónicas (Diabetes Mellitus, Hipertensión), alergias farmacológicas, tratamientos anticoagulantes y estado dermatológico de sus pies.</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">3. Finalidad de la Ficha Clínica</h4>
                    <p>La información recopilada es obligatoria según el <strong>Decreto 41 del Ministerio de Salud</strong> para la confección de la Ficha Clínica Única. Su uso es exclusivamente terapéutico, de seguimiento clínico, para contacto en caso de cambios de hora o emergencias, y estadístico (de forma anónima).</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">4. Confidencialidad y Seguridad</h4>
                    <p>Garantizamos el secreto profesional. Sus datos no serán divulgados a terceros, salvo requerimiento judicial o de la autoridad sanitaria competente.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">5. Derechos ARCO</h4>
                    <p>El paciente titular puede ejercer sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición</strong> respecto a sus datos de contacto. Los datos clínicos se conservarán por el período que estipula la ley (mínimo 15 años).</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 mb-6">
                    <p className="font-medium text-primary">Estos términos regulan la prestación de servicios podológicos profesionales por parte de Podomed Clinical. Al agendar una cita, usted acepta las siguientes condiciones.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">1. Agendamiento</h4>
                    <p>Las horas se asignan según disponibilidad. Es responsabilidad del paciente proporcionar datos de contacto fidedignos para la confirmación de la cita.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">2. Política de Cancelación (24 Horas)</h4>
                    <p>Solicitamos avisar con <strong>24 horas de antelación</strong> en caso de no poder asistir. Las cancelaciones tardías o ausencia sin aviso perjudican la continuidad de atención de otros pacientes.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">3. Protocolo de Atención Domiciliaria</h4>
                    <p>Para la atención a domicilio, el paciente debe garantizar condiciones mínimas de bioseguridad:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Espacio limpio, iluminado y ventilado.</li>
                      <li>Acceso a agua potable para lavado de manos del profesional.</li>
                      <li>Animales domésticos resguardados durante el procedimiento.</li>
                    </ul>
                    <p className="text-xs text-red-500 mt-2 font-semibold">El profesional se reserva el derecho de suspender la atención si el entorno representa un riesgo para la salud o integridad.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">4. Consentimiento Informado</h4>
                    <p>Todo procedimiento podológico conlleva riesgos inherentes mínimos. Al atenderse, el paciente declara entender estos procedimientos y autoriza su realización.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">5. Veracidad de la Información Médica</h4>
                    <p>Es obligación del paciente declarar condiciones sistémicas (Diabetes, problemas de coagulación, VIH, Hepatitis). La omisión de esta información exime de responsabilidad al profesional ante complicaciones derivadas.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-primary text-base uppercase tracking-wide border-b border-gray-200 pb-1">6. Pagos</h4>
                    <p>El pago debe efectuarse al término de cada sesión, salvo acuerdo previo. Se aceptan pagos en efectivo, transferencia bancaria y tarjeta (sujeto a disponibilidad).</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;