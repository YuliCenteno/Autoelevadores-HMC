import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Wrench, Shield, Cog, Search, Droplet, Truck, Clock, MapPin, 
  Award, Calendar, Building2, Headphones, TrendingUp, Users, 
  Package, Phone, Mail, MapPin as MapPinIcon, AlarmClock as ClockIcon 
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import BrandsCarousel from '@/components/BrandsCarousel.jsx';
import StatCard from '@/components/StatCard.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function HomePage() {
  const services = [
    {
      icon: Wrench,
      title: 'Reparación de Autoelevadores',
      description: 'Reparación integral de autoelevadores de todas las marcas y modelos con repuestos originales y garantía en Córdoba.'
    },
    {
      icon: Shield,
      title: 'Mantenimiento Preventivo',
      description: 'Planes de mantenimiento programado para maximizar la vida útil de sus equipos y prevenir fallas costosas.'
    },
    {
      icon: Cog,
      title: 'Service Técnico Especializado',
      description: 'Service completo con revisión de sistemas hidráulicos, eléctricos, mecánicos y sistemas de seguridad.'
    },
    {
      icon: Search,
      title: 'Diagnóstico de Fallas',
      description: 'Diagnóstico preciso y rápido mediante equipamiento especializado y técnicos certificados en planta.'
    },
    {
      icon: Droplet,
      title: 'Reparaciones Hidráulicas y Mecánicas',
      description: 'Especialistas en cilindros hidráulicos, transmisiones, mangueras, motores y componentes mecánicos.'
    },
    {
      icon: Truck,
      title: 'Alquiler de Autoelevadores',
      description: 'Alquiler de autoelevadores para cubrir necesidades temporales durante mantenimientos o picos de trabajo.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Atención rápida',
      description: 'Respuesta en menos de 24 horas para emergencias y servicios urgentes en Córdoba y alrededores.'
    },
    {
      icon: MapPin,
      title: 'Servicio a domicilio',
      description: 'Nos trasladamos a su planta, taller o depósito en toda la zona metropolitana.'
    },
    {
      icon: Award,
      title: 'Técnicos especializados',
      description: 'Personal certificado con más de 30 años de experiencia en todas las marcas del mercado.'
    },
    {
      icon: Calendar,
      title: 'Mantenimiento preventivo',
      description: 'Planes personalizados para evitar paradas no programadas en su cadena logística.'
    },
    {
      icon: Building2,
      title: 'Soluciones para empresas',
      description: 'Contratos corporativos y de flota con condiciones comerciales preferenciales.'
    },
    {
      icon: Headphones,
      title: 'Asistencia profesional',
      description: 'Asesoramiento técnico directo y soporte continuo para toda su operación.'
    }
  ];

  // Agregamos alts con sentido SEO y descriptivo para cada trabajo
  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg',
      alt: 'Mantenimiento de autoelevador en Córdoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.33_PM_2.jpg',
      alt: 'Reparación de sistema hidráulico de autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_1.jpg',
      alt: 'Revisión técnica de autoelevador en domicilio'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.36_PM_2.jpg',
      alt: 'Service preventivo a domicilio para autoelevadores'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.34_PM_3.jpg',
      alt: 'Cambio de repuestos originales de autoelevadores'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM.jpg',
      alt: 'Diagnóstico de motor de autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.34_PM.jpg',
      alt: 'Reparación de torre y uñas de elevación'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.34_PM_2.jpg',
      alt: 'Servicio mecánico para autoelevadores'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM.jpg',
      alt: 'Mantenimiento de flota de autoelevadores industriales'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_5.jpg',
      alt: 'Atención técnica de emergencias de autoelevadores'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.33_PM_1.jpg',
      alt: 'Ajuste de dirección y frenos de minicargadora'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.32_PM_1.jpg',
      alt: 'Reparación general de bobcat'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.32_PM.jpg',
      alt: 'Service preventivo'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.33_PM_9.jpg',
      alt: 'Trabajos de pintura autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_7.jpg',
      alt: 'Inspección de sistemas de seguridad en maquinaria pesada'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942807/WhatsApp_Image_2026-05-20_at_9.02.36_PM.jpg',
      alt: 'Reparación de cilindros hidráulicos en Córdoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.36_PM_1.jpg',
      alt: 'Traslado de autoelevador Cordoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_3.jpg',
      alt: 'Pintura Autoelevador Córdoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_11.jpg',
      alt: 'Ajuste e inspección técnica integral'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_3.jpg',
      alt: 'Pintura Autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.33_PM_10.jpg',
      alt: 'Servicio de mantenimiento integral HMC Servicios'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.33_PM_4.jpg',
      alt: 'Verificación de componentes mecánicos y lubricación'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_12.jpg',
      alt: 'Reparación especializada de autoelevadores'
    }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5493513488829?text=Hola,%20vi%20la%20p%C3%A1gina%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20la%20reparaci%C3%B3n%20de%20un%20autoelevador.`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Servicio Técnico de Autoelevadores, Apiladoras y Montacargas en Córdoba | HMC Servicios</title>
        <meta
          name="description"
          content="Servicio técnico, reparación y mantenimiento de autoelevadores, apiladoras, bobcats y retroexcavadoras en Córdoba. Diagnóstico, repuestos originales y atención a domicilio para empresas."
        />
        <link rel="canonical" href="https://autoelevadoreshmc.com.ar/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoelevadoreshmc.com.ar/" />
        <meta property="og:title" content="Servicio Técnico de Autoelevadores y Apiladoras en Córdoba | HMC Servicios" />
        <meta property="og:description" content="Reparación, mantenimiento preventivo y diagnóstico de autoelevadores, apiladoras, bobcats y retroexcavadoras en Córdoba. Atención a domicilio y soporte para empresas." />
        <meta property="og:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Autoelevadores HMC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicio Técnico de Autoelevadores y Apiladoras en Córdoba | HMC Servicios" />
        <meta name="twitter:description" content="Reparación, mantenimiento preventivo y diagnóstico de autoelevadores, montacargas y maquinaria industrial en Córdoba." />
        <meta name="twitter:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-muted via-background to-background">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg" 
              alt="Servicio técnico de autoelevadores industrias en Córdoba" 
              className="w-full h-full object-cover opacity-10" 
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Servicio técnico y mantenimiento de autoelevadores en Córdoba
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Más de 30 años brindando soluciones integrales para su operación logística. Mantenimiento preventivo, reparaciones hidráulicas y alquiler de equipos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contacto">Solicitar presupuesto</Link>
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 active:scale-[0.98]"
                  >
                    <svg
                      className="w-5 h-5 mr-2 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.486-8.411" />
                    </svg>
                    Contactar por WhatsApp
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Carrusel de Marcas */}
        <BrandsCarousel />

        <section id="servicios" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros servicios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluciones completas para el mantenimiento y operación de su flota de autoelevadores en Córdoba
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => <ServiceCard key={index} {...service} index={index} />)}
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre nosotros</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  HMC Servicios es una empresa especializada en el servicio técnico, mantenimiento y reparación de autoelevadores con más de 30 años de trayectoria en la provincia de Córdoba y zonas aledañas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Brindamos servicio técnico especializado en reparación y mantenimiento de autoelevadores, trabajando con compromiso, experiencia y soluciones eficientes para garantizar la continuidad operativa de cada cliente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos con empresas de logística, industrias, depósitos y centros de distribución, ofreciendo planes de mantenimiento preventivo personalizados y servicio de emergencia a domicilio.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard number="30+" label="Años de experiencia" icon={TrendingUp} index={0} />
                <StatCard number="80+" label="Clientes atendidos" icon={Users} index={1} />
                <StatCard number="300+" label="Equipos mantenidos" icon={Package} index={2} />
              </div>
            </div>
          </div>
        </section>

        {/* Sección Video Reel */}
        <section className="py-16 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Texto descriptivo */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  Trabajo a Domicilio
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Mirá cómo trabajamos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reparación y mantenimiento en tiempo real en tu planta o depósito. Nos enfocamos en cuidar cada detalle técnico para asegurar la máxima durabilidad de tus equipos.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 active:scale-[0.98]"
                  >
                    <svg
                      className="w-5 h-5 mr-2 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.486-8.411" />
                    </svg>
                    Consultar por tu equipo
                  </Button>
                </div>
              </div>

              {/* Contenedor del Video en formato Reel (9:16) */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-card bg-black">
                  <video
                    src="https://res.cloudinary.com/crwsvgt8/video/upload/v1788988906/ReparacionDomicilio.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    Tu navegador no soporta el formato de video.
                  </video>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="galeria" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galería de trabajos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Algunos de nuestros proyectos y servicios de reparación realizados
              </p>
            </div>
            <div className="w-full">
              <GalleryImage images={galleryImages} />
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Beneficios que nos distinguen en el mercado industrial de Córdoba
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => <BenefitCard key={index} {...benefit} index={index} />)}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctenos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos listos para atender sus consultas y brindarle el mejor servicio técnico
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <a href="tel:+5493513488829" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          +54 9 3513 48-8829
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:hmcservicios2014@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          hmcservicios2014@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Dirección</p>
                        <p className="text-muted-foreground">C. del Riego & Av. Rancagua, Córdoba, Argentina</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ClockIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Horario de atención</p>
                        <p className="text-muted-foreground">Lunes a viernes de 8:30 a 17:00 hs</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden h-64">
                  <iframe
                    title="Ubicación de HMC Servicios en Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3407.642236502509!2d-64.14692022439556!3d-31.34125207429647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIwJzI4LjUiUyA2NMKwMDgnMzkuNiJX!5e0!3m2!1sen!2sar!4v1786998977187!5m2!1sen!2sar"
                    width="600"
                    height="450"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;