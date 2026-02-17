import React, { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Hide when contact section enters viewport (50px buffer)
        if (rect.top < window.innerHeight - 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex flex-col gap-4 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/Podomed_clinical"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar Instagram"
        title="Síguenos en Instagram"
        className="bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white p-3.5 rounded-full shadow-xl hover:opacity-90 transition-all transform hover:scale-110 flex items-center justify-center group relative hover:shadow-2xl"
      >
        <Instagram size={26} />
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Síguenos en Instagram
        </span>
      </a>

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/podomed.clinical"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar Facebook"
        title="Síguenos en Facebook"
        className="bg-[#1877F2] text-white p-3.5 rounded-full shadow-xl hover:bg-[#166fe5] transition-all transform hover:scale-110 flex items-center justify-center group relative hover:shadow-2xl"
      >
        <Facebook size={28} fill="currentColor" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Visítanos en Facebook
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/56928247344"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
        title="Chatear con Podomed Clinical"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center justify-center group relative hover:shadow-green-900/20"
      >
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¡Escríbanos ahora!
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;