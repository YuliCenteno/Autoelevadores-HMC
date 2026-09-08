import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wrench, Shield, Cog, Search, Droplet, CheckCircle2, ArrowRight, Check, Flame, Zap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ServiciosPage() {
  const [activeTab, setActiveTab] = useState('combustion');

  const services = [
    {
      icon: Wrench,
      title: 'Reparación integral',
      description: 'Reparación completa de autoelevadores de todas las marcas y modelos con repuestos originales y garantía extendida.',
      benefits: [
        'Diagnóstico gratuito en nuestro taller',
        'Repuestos originales certificados',
        'Garantía de 6 meses en todas las reparaciones',
        'Servicio express en menos de 48 horas',
        'Presupuesto sin cargo'
      ],
      image: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg'
    },
    {
      icon: Shield,
      title: 'Mantenimiento preventivo',
      description: 'Planes de mantenimiento programado diseñados para maximizar la vida útil de sus equipos y prevenir fallas costosas.',
      benefits: [
        'Inspección completa de 47 puntos críticos',
        'Cambio de aceites y filtros',
        'Revisión de sistemas de seguridad',
        'Informes detallados post-servicio',
        'Planes mensuales, trimestrales o anuales'
      ],
      image: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM.jpg'
    },
    {
      icon: Cog,
      title: 'Service técnico completo',
      description: 'Service integral con revisión exhaustiva de todos los sistemas: hidráulicos, eléctricos, mecánicos y de seguridad.',
      benefits: [
        'Revisión de sistema hidráulico completo',
        'Verificación de sistema eléctrico',
        'Inspección de frenos y dirección',
        'Calibración de instrumentos',
        'Certificado de aptitud técnica'
      ],
      image: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_1.jpg'
    },
    {
      icon: Search,
      title: 'Diagnóstico de fallas',
      description: 'Diagnóstico preciso y rápido de fallas mediante equipamiento especializado de última generación y técnicos certificados.',
      benefits: [
        'Equipamiento de diagnóstico computarizado',
        'Técnicos certificados por fabricantes',
        'Informe técnico detallado',
        'Presupuesto de reparación sin cargo',
        'Atención en planta o en nuestro taller'
      ],
      image: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.34_PM_2.jpg'
    },
    {
      icon: Droplet,
      title: 'Reparaciones hidráulicas y mecánicas',
      description: 'Especialistas en sistemas hidráulicos, transmisiones, motores y todos los componentes mecánicos de su autoelevador.',
      benefits: [
        'Reparación de bombas hidráulicas',
        'Reconstrucción de cilindros',
        'Reparación de transmisiones',
        'Overhaul de motores',
        'Reemplazo de mangueras y conexiones'
      ],
      image: 'https://res.cloudinary.com/crwsvgt8/image/upload/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios de Mantenimiento y Reparación - AutoElevadores Pro</title>
        <meta name="description" content="Servicios especializados de mantenimiento preventivo, reparación, diagnóstico y service técnico para autoelevadores. Técnicos certificados y repuestos originales." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-muted via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nuestros servicios</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soluciones integrales para el mantenimiento, reparación y optimización de su flota de autoelevadores
              </p>
            </motion.div>

            {/* Listado de Servicios */}
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      <Link to="/contacto">
                        Solicitar presupuesto
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SECCIÓN DE TABLAS DE MANTENIMIENTO */}
            <div className="mt-28 pt-16 border-t border-border">
              <div className="text-center mb-12">
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase bg-primary/10 text-primary px-4 py-1.5 rounded-full inline-block mb-3">
                  Contratos de Mantenimiento
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Planes a medida de tu operación
                </h2>
                <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-base md:text-lg">
                  Nuestros contratos de mantenimiento se adecúan perfectamente a la operación de cada cliente dependiendo de las horas de uso mensuales de los equipos.
                </p>
              </div>

              {/* TABLA 1: Comparativa de Planes */}
              <div className="overflow-x-auto rounded-xl border border-border shadow-md mb-20 bg-card">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground text-center">
                      <th className="p-4 font-bold border-b border-border text-left">Planes</th>
                      <th className="p-4 font-bold border-b border-border">Soft</th>
                      <th className="p-4 font-bold border-b border-border">Low</th>
                      <th className="p-4 font-bold border-b border-border">Medium</th>
                      <th className="p-4 font-bold border-b border-border">Heavy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm md:text-base">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">Horas de uso/mes</td>
                      <td className="p-4 text-center text-muted-foreground">&lt; 80 hs</td>
                      <td className="p-4 text-center text-muted-foreground">&gt; 80 hs</td>
                      <td className="p-4 text-center text-muted-foreground">&gt; 130 hs</td>
                      <td className="p-4 text-center text-muted-foreground">&gt; 250 hs</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">Frecuencia del servicio</td>
                      <td className="p-4 text-center text-muted-foreground">Trimestral</td>
                      <td className="p-4 text-center text-muted-foreground">Trimestral</td>
                      <td className="p-4 text-center text-muted-foreground">Bimestral</td>
                      <td className="p-4 text-center text-muted-foreground">Mensual</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">Cantidad de servicios</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">2</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">4</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">6</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">12</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">Controles periódicos</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">4</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">4</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">6</td>
                      <td className="p-4 text-center text-muted-foreground font-medium">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* TABLA 2: ¿Qué incluye cada servicio? */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    ¿Qué incluye cada servicio?
                  </h3>
                </div>

                {/* Tabs para Alternar entre Combustión y Eléctricos */}
                <div className="flex justify-center mb-8 gap-4">
                  <button
                    onClick={() => setActiveTab('combustion')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === 'combustion'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <Flame className="w-5 h-5" />
                    Equipos a Combustión Interna
                  </button>
                  <button
                    onClick={() => setActiveTab('electric')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === 'electric'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                    Equipos Eléctricos
                  </button>
                </div>

                {/* Contenido de Tablas */}
                <div className="overflow-x-auto rounded-xl border border-border shadow-md bg-card">
                  {activeTab === 'combustion' ? (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-muted text-foreground">
                          <th className="p-4 font-bold border-b border-border">Tareas a realizar</th>
                          <th className="p-4 font-bold border-b border-border text-center">Cada 250/500/750 hs</th>
                          <th className="p-4 font-bold border-b border-border text-center">Cada 1000 hs</th>
                          <th className="p-4 font-bold border-b border-border text-center">Cada 2000 hs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-sm md:text-base">
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 font-medium text-foreground">Chequeo Puntos de Control - inspección Ajustes y Engrases</td>
                          <td className="p-4 text-center font-medium text-primary">90 puntos</td>
                          <td className="p-4 text-center font-medium text-primary">99 puntos</td>
                          <td className="p-4 text-center font-medium text-primary">119 puntos</td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Aceite de motor</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Filtro de aceite del motor</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Refrigerante de motor LLC</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Filtro de aire</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Filtro del combustible</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Aceite del convertidor de par</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Filtro de aceite del convertidor de par</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Aceite de engranaje del diferencial</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Aceite hidráulico</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Filtro del aceite hidráulico - retorno</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo bujías (solo nafta)</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Correa Bomba Agua</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Grasa de los cojinetes de las ruedas</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Inspección: Cilindro principal, tapa, sellos del cilindro de ruedas</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Fluido de freno</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-muted text-foreground">
                          <th className="p-4 font-bold border-b border-border">Tareas a realizar</th>
                          <th className="p-4 font-bold border-b border-border text-center">Cada 250/500/750 hs</th>
                          <th className="p-4 font-bold border-b border-border text-center">Cada 1000 hs</th>
                          <th className="p-4 font-bold border-b border-border text-center">Cada 2000 hs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-sm md:text-base">
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 font-medium text-foreground">Chequeo Puntos de Control - inspección, calibración, Ajustes y Engrases</td>
                          <td className="p-4 text-center font-medium text-primary">25 puntos</td>
                          <td className="p-4 text-center font-medium text-primary">53 puntos</td>
                          <td className="p-4 text-center font-medium text-primary">67 puntos</td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Líquido de los frenos</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Aceite hidráulico</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Filtro de aceite de retorno hidráulico</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Aceite diferencial y transmisión</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Reemplazo Grasa para cojinetes de ruedas</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-muted-foreground">-</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Inspección Partes de goma del cilindro principal (insp.)</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                        <tr className="hover:bg-muted/40">
                          <td className="p-4 text-muted-foreground">Inspección Partes de goma del cilindro de la rueda (insp.)</td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                          <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner inferior de contacto */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita un servicio personalizado?</h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              Contáctenos para recibir asesoramiento técnico sin cargo y un presupuesto adaptado a sus necesidades específicas
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServiciosPage;