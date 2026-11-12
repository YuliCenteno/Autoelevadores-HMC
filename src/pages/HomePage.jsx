import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackContactClick } from '@/lib/analytics';
import { 
  Wrench, Shield, Cog, Search, Droplet, Truck, MapPin, Calendar, Building2,
  Phone, Mail, MapPin as MapPinIcon, AlarmClock as ClockIcon
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import BrandsCarousel from '@/components/BrandsCarousel.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function HomePage() {
  const services = [
    {
      icon: Wrench,
      title: 'Reparación de Autoelevadores',
      description: 'Reparación integral de autoelevadores: evaluamos la falla y coordinamos la atención en taller o en las instalaciones del cliente.'
    },
    {
      icon: Shield,
      title: 'Mantenimiento Preventivo',
      description: 'Mantenimiento preventivo y correctivo para atender el estado del equipo y las necesidades de operación de cada empresa.'
    },
    {
      icon: Cog,
      title: 'Service Técnico Especializado',
      description: 'Service técnico para autoelevadores, con revisión de sus componentes y coordinación de los trabajos necesarios.'
    },
    {
      icon: Search,
      title: 'Diagnóstico de Fallas',
      description: 'Revisión de fallas para identificar el problema del autoelevador y definir los pasos de reparación.'
    },
    {
      icon: Droplet,
      title: 'Reparaciones Hidráulicas y Mecánicas',
      description: 'Reparación hidráulica y mecánica de autoelevadores, según el diagnóstico y el alcance requerido por el equipo.'
    },
    {
      icon: Truck,
      title: 'Alquiler de Autoelevadores',
      description: 'Alquiler de autoelevadores para necesidades temporales. Consulte disponibilidad y condiciones para su operación.'
    }
  ];

  const benefits = [
    {
      icon: Wrench,
      title: 'Atención en taller',
      description: 'Coordinamos la atención de autoelevadores en el taller de Autoelevadores HMC.'
    },
    {
      icon: MapPin,
      title: 'Atención en sus instalaciones',
      description: 'Atención técnica en las instalaciones de empresas, depósitos y centros de distribución de Córdoba.'
    },
    {
      icon: Cog,
      title: 'Servicio enfocado en autoelevadores',
      description: 'Reparación y mantenimiento técnico de autoelevadores para operaciones empresariales.'
    },
    {
      icon: Calendar,
      title: 'Mantenimiento preventivo',
      description: 'Mantenimiento preventivo y correctivo según las necesidades del equipo y de su operación.'
    },
    {
      icon: Building2,
      title: 'Soluciones para empresas',
      description: 'Atención a industrias, empresas de logística y transporte, depósitos y centros de distribución.'
    },
    {
      icon: Truck,
      title: 'Alquiler de autoelevadores',
      description: 'Consulte por alquiler para responder a necesidades temporales de su empresa.'
    }
  ];

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
      alt: 'Service preventivo de autoelevadores en las instalaciones del cliente'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.34_PM_3.jpg',
      alt: 'Reemplazo de componentes en un autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1789323981/pa3.jpg',
      alt: 'Revisión técnica de autoelevador en domicilio'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1789323982/pa2.jpg',
      alt: 'Revisión técnica de autoelevador en domicilio'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1789323981/pa1.jpg',
      alt: 'Revisión técnica de autoelevador en domicilio'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1789323981/pa4.jpg',
      alt: 'Revisión técnica de autoelevador en domicilio'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1789323981/pa5.jpg',
      alt: 'Revisión técnica de autoelevador en domicilio'
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
      alt: 'Atención técnica de un autoelevador'
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
      alt: 'Inspección de componentes de un autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942807/WhatsApp_Image_2026-05-20_at_9.02.36_PM.jpg',
      alt: 'Reparación de cilindros hidráulicos en Córdoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.36_PM_1.jpg',
      alt: 'Traslado de un autoelevador en Córdoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_3.jpg',
      alt: 'Trabajo técnico en un autoelevador en Córdoba'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_11.jpg',
      alt: 'Ajuste e inspección técnica de un autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM_3.jpg',
      alt: 'Pintura Autoelevador'
    },
    {
      src: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942804/WhatsApp_Image_2026-05-20_at_9.02.33_PM_10.jpg',
      alt: 'Servicio de mantenimiento integral de Autoelevadores HMC'
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
    trackContactClick('whatsapp');
    window.open(`https://wa.me/5493513488829?text=Hola,%20vi%20la%20p%C3%A1gina%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20la%20reparaci%C3%B3n%20de%20un%20autoelevador.`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Autoelevadores HMC | Servicio Técnico y Mantenimiento en Córdoba</title>

        <meta
          name="description"
          content="Servicio técnico, reparación, mantenimiento y alquiler de autoelevadores en Córdoba. Autoelevadores HMC atiende empresas en taller y en sus instalaciones."
        />

        <link rel="canonical" href="https://autoelevadoreshmc.com.ar/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoelevadoreshmc.com.ar/" />
        <meta
          property="og:title"
          content="Autoelevadores HMC | Servicio Técnico y Mantenimiento en Córdoba"
        />
        <meta
          property="og:description"
          content="Reparación, mantenimiento preventivo y correctivo, diagnóstico y alquiler de autoelevadores en Córdoba. Atención en taller o en sus instalaciones."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg"
        />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Autoelevadores HMC" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Autoelevadores HMC | Servicio Técnico y Mantenimiento en Córdoba"
        />
        <meta
          name="twitter:description"
          content="Reparación, mantenimiento preventivo y correctivo, diagnóstico y alquiler de autoelevadores en Córdoba. Atención en taller o en sus instalaciones."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg"
        />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-muted via-background to-background">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_1600/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg"
              alt=""
              className="w-full h-full object-cover opacity-10" 
              fetchPriority="high"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Servicio técnico y reparación de autoelevadores en Córdoba
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Autoelevadores HMC atiende a industrias, empresas de logística y transporte, depósitos y centros de distribución de Córdoba. Realizamos reparación, mantenimiento preventivo y correctivo, diagnóstico de fallas y alquiler, en taller o en las instalaciones de su empresa.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Servicio técnico para empresas en Córdoba</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Autoelevadores HMC brinda servicio técnico exclusivo para autoelevadores y atiende a empresas industriales, de logística y transporte, depósitos y centros de distribución.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El trabajo puede coordinarse en el taller de reparación de autoelevadores de HMC en Córdoba o en las instalaciones del cliente. El servicio incluye diagnóstico de fallas, reparación integral y mantenimiento preventivo y correctivo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  También ofrecemos alquiler de autoelevadores. Para solicitar un presupuesto, indique el tipo de equipo, la falla o tarea requerida y dónde necesita la atención.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <Wrench className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Atención en taller</h3>
                  <p className="text-sm text-muted-foreground">Servicio técnico para autoelevadores en el taller de HMC.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Atención en su empresa</h3>
                  <p className="text-sm text-muted-foreground">Coordinación de trabajos en las instalaciones del cliente en Córdoba.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <Truck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Alquiler de autoelevadores</h3>
                  <p className="text-sm text-muted-foreground">Consulte disponibilidad para una necesidad temporal.</p>
                </div>
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
                  Atención en sus instalaciones
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Mirá cómo trabajamos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Atención técnica para autoelevadores en las instalaciones de empresas, depósitos y centros de distribución de Córdoba.
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
                    preload="none"
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
                Solicite un presupuesto para reparación, mantenimiento, diagnóstico o alquiler de autoelevadores en Córdoba.
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
                        <a
                          href="tel:+5493513488829"
                          onClick={() => trackContactClick('phone')}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          +54 9 3513 48-8829
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href="mailto:hmcserviciosg2014@gmail.com"
                          onClick={() => trackContactClick('email')}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          hmcserviciosg2014@gmail.com
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
                    title="Ubicación de Autoelevadores HMC en Córdoba"
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