import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

/** Logo del navbar — asset local desde Public/Fotos/ */
const LOGO_NAV = "/Fotos/LogoSvgOficial.png";

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo Trabajamos', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

const WHATSAPP_LINK = "https://wa.me/56928247344";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setTimeout(() => {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }, 100);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 md:gap-3 group z-50 relative shrink-0"
              onClick={(e) => handleNavClick(e, '#')}
            >
              <img
                src={LOGO_NAV}
                alt="Podomed Clinical — Logo"
                className="h-10 md:h-12 w-auto object-contain"
                loading="eager"
              />
              <div className="flex flex-col">
                <h2 className="text-primary text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight group-hover:text-primary-dark transition-colors duration-300">
                  Podomed Clinical
                </h2>
                <span className="text-secondary text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase">
                  Podología Clínica
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-600 hover:text-primary text-xs lg:text-[13px] xl:text-sm font-bold uppercase tracking-wide transition-colors relative group py-2 whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="bg-secondary hover:bg-green-600 transition-all transform hover:scale-105 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/30 flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar size={18} />
                <span>Agendar Cita</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden text-slate-600 p-2 hover:text-primary transition-colors z-[60] relative ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[55] lg:hidden flex flex-col pt-24 pb-10 px-6 transition-all duration-500 overflow-y-auto ${
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-3 text-center w-full max-w-md mx-auto h-full justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex items-center justify-between p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span className="text-slate-600 text-2xl font-bold group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                {item.label}
              </span>
              <span className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight size={24} />
              </span>
            </a>
          ))}

          <div className="mt-8 space-y-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-green-600 text-white text-center py-4 rounded-full font-bold text-lg shadow-xl shadow-green-500/20 transition-all flex items-center justify-center gap-3 w-full transform active:scale-95 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar size={24} />
              Agendar Cita
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-slate-400 text-sm mt-8">
              Podomed Clinical © 2026<br />Podología Clínica a Domicilio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;