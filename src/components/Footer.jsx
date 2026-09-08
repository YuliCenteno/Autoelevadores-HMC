import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

function Footer() {
  const handleWhatsApp = () => {
  window.open(`https://wa.me/5493513488829?text=Hola,%20vi%20la%20p%C3%A1gina%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20la%20reparaci%C3%B3n%20de%20un%20autoelevador.`, '_blank');
};

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            {/* Identidad de marca (mismo estilo del header) */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black tracking-tight text-yellow-500 leading-none select-none">
                HMC
              </span>

              <div>
                <span className="block text-xl font-bold text-secondary-foreground leading-tight">
                  Servicios
                </span>
                <p className="text-xs text-secondary-foreground/70">
                  Servicio tecnico especializado
                </p>
              </div>
            </div>

            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              Servicio tecnico especializado en mantenimiento y reparacion de autoelevadores con mas de 30 años de experiencia.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-4 block">Contacto</span>
            <div className="space-y-3">
              <a
                href="tel:+5493513488829"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+54 9 3513 48-8829</span>
              </a>
              <a
                href="mailto:hmcservicios2014@gmail.com"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>hmcservicios2014@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>C. del Riego & Av. Rancagua</span>
              </div>
              <button
  onClick={handleWhatsApp}
  className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20BA5A] transition-colors duration-200"
>
  <svg 
    className="w-4 h-4 fill-current" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.486-8.411"/>
  </svg>
  <span>WhatsApp</span>
</button>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-4 block">Enlaces rápidos</span>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Servicios
              </Link>
              <Link
                to="/contacto"
                className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Contacto
              </Link>
            </nav>
          </div>

        </div>

        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-secondary-foreground/60">
              <p>© {new Date().getFullYear()} HMC Servicios. Todos los derechos reservados</p>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <a
                href="https://github.com/YuliCenteno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Desarrollado por ZCS Systems
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                Politica de privacidad
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                Terminos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;