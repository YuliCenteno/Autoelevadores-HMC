import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  Shield,
  Cog,
  Search,
  Droplet,
  CheckCircle2,
  ArrowRight,
  Check,
  Truck,
  Flame,
  Zap
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

// Servicios principales
const SERVICES = [
  {
    icon: Wrench,
    title: 'Reparación integral de autoelevadores',
    description:
      'Reparación integral de autoelevadores con diagnóstico previo para identificar el trabajo necesario. La atención se coordina en el taller o en las instalaciones del cliente.',
    benefits: [
      'Diagnóstico de fallas',
      'Reparación de componentes mecánicos e hidráulicos',
      'Presupuesto de reparación',
      'Atención en taller o en las instalaciones del cliente'
    ],
    image:
      'https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_800/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg'
  },
  {
    icon: Shield,
    title: 'Mantenimiento preventivo',
    description:
      'Mantenimiento preventivo y correctivo para atender el estado del autoelevador y las necesidades de cada operación.',
    benefits: [
      'Inspección general del equipo',
      'Cambio de aceites y filtros',
      'Revisión de sistemas de seguridad',
      'Controles periódicos',
      'Planes de mantenimiento adaptados a las horas de uso'
    ],
    image:
      'https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_800/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM.jpg'
  },
  {
    icon: Cog,
    title: 'Service técnico completo',
    description:
      'Service técnico de autoelevadores con revisión de sus principales componentes y definición de las tareas según el estado del equipo.',
    benefits: [
      'Revisión del sistema hidráulico',
      'Inspección de frenos y dirección',
      'Revisión de componentes mecánicos',
      'Control general del equipo'
    ],
    image:
      'https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_800/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_1.jpg'
  },
  {
    icon: Search,
    title: 'Diagnóstico de fallas',
    description:
      'Diagnóstico de fallas para identificar problemas en los distintos sistemas del autoelevador y determinar las reparaciones necesarias.',
    benefits: [
      'Diagnóstico de fallas',
      'Revisión de sistemas del equipo',
      'Identificación de problemas mecánicos',
      'Identificación de problemas hidráulicos',
      'Informe y presupuesto de reparación'
    ],
    image:
      'https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_800/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.34_PM_2.jpg'
  },
  {
    icon: Droplet,
    title: 'Reparaciones hidráulicas y mecánicas',
    description:
      'Reparación de sistemas hidráulicos, transmisiones, motores y distintos componentes mecánicos de autoelevadores.',
    benefits: [
      'Reparación de bombas hidráulicas',
      'Reconstrucción de cilindros',
      'Reparación de transmisiones',
      'Reparación de motores',
      'Reemplazo de mangueras y conexiones'
    ],
    image:
      'https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_800/v1786942805/WhatsApp_Image_2026-05-20_at_9.02.33_PM.jpg'
  },
  {
    icon: Truck,
    title: 'Alquiler de autoelevadores',
    description:
      'Alquiler de autoelevadores para empresas que requieren un equipo por un período determinado. La disponibilidad y las condiciones se confirman al realizar la consulta.',
    benefits: [
      'Consulta de disponibilidad',
      'Alquiler para necesidades temporales',
      'Coordinación de condiciones y plazo'
    ],
    image:
      'https://res.cloudinary.com/crwsvgt8/image/upload/f_auto,q_auto,w_800/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg'
  }
];

// Tabla de mantenimiento para equipos a combustión
const COMBUSTION_TASKS = [
  {
    task: 'Chequeo Puntos de Control - inspección Ajustes y Engrases',
    h250: '90 puntos',
    h1000: '99 puntos',
    h2000: '119 puntos',
    isHeader: true
  },
  {
    task: 'Reemplazo Aceite de motor',
    h250: true,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Filtro de aceite del motor',
    h250: true,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Refrigerante de motor LLC',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Reemplazo Filtro de aire',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Filtro del combustible',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Aceite del convertidor de par',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Filtro de aceite del convertidor de par',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Aceite de engranaje del diferencial',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Reemplazo Aceite hidráulico',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Filtro del aceite hidráulico - retorno',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo bujías (solo nafta)',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Correa Bomba Agua',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Reemplazo Grasa de los cojinetes de las ruedas',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Inspección: Cilindro principal, tapa, sellos del cilindro de ruedas',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Reemplazo Fluido de freno',
    h250: false,
    h1000: true,
    h2000: true
  }
];

// Tabla de mantenimiento para equipos eléctricos
const ELECTRIC_TASKS = [
  {
    task: 'Chequeo Puntos de Control - inspección, calibración, Ajustes y Engrases',
    h250: '25 puntos',
    h1000: '53 puntos',
    h2000: '67 puntos',
    isHeader: true
  },
  {
    task: 'Reemplazo Líquido de los frenos',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Aceite hidráulico',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Filtro de aceite de retorno hidráulico',
    h250: false,
    h1000: true,
    h2000: true
  },
  {
    task: 'Reemplazo Aceite diferencial y transmisión',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Reemplazo Grasa para cojinetes de ruedas',
    h250: false,
    h1000: false,
    h2000: true
  },
  {
    task: 'Inspección Partes de goma del cilindro principal (insp.)',
    h250: true,
    h1000: true,
    h2000: true
  },
  {
    task: 'Inspección Partes de goma del cilindro de la rueda (insp.)',
    h250: true,
    h1000: true,
    h2000: true
  }
];

function ServiciosPage() {
  const [activeTab, setActiveTab] = useState('combustion');

  const activeTableData =
    activeTab === 'combustion' ? COMBUSTION_TASKS : ELECTRIC_TASKS;

  const renderCellContent = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 mx-auto text-primary" />
      ) : (
        <span className="text-muted-foreground">-</span>
      );
    }

    return <span className="font-medium text-primary">{value}</span>;
  };

  return (
    <>
      <Helmet>
        <title>Servicio técnico de autoelevadores en Córdoba | Autoelevadores HMC</title>

        <meta
          name="description"
          content="Reparación y mantenimiento de autoelevadores en Córdoba: service técnico, diagnóstico de fallas y reparaciones hidráulicas y mecánicas. Atención en taller o en su empresa."
        />

        <link
          rel="canonical"
          href="https://autoelevadoreshmc.com.ar/servicios"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://autoelevadoreshmc.com.ar/servicios"
        />

        <meta
          property="og:title"
          content="Servicio técnico de autoelevadores en Córdoba | Autoelevadores HMC"
        />

        <meta
          property="og:description"
          content="Reparación y mantenimiento de autoelevadores en Córdoba: service técnico, diagnóstico de fallas y reparaciones hidráulicas y mecánicas. Atención en taller o en su empresa."
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
          content="Servicio técnico de autoelevadores en Córdoba | Autoelevadores HMC"
        />

        <meta
          name="twitter:description"
          content="Reparación y mantenimiento de autoelevadores en Córdoba: service técnico, diagnóstico de fallas y reparaciones hidráulicas y mecánicas."
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/crwsvgt8/image/upload/v1786942806/WhatsApp_Image_2026-05-20_at_9.02.35_PM_2.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Servicio técnico de autoelevadores',
            provider: {
              '@id': 'https://autoelevadoreshmc.com.ar/#localbusiness'
            },
            areaServed: {
              '@type': 'City',
              name: 'Córdoba'
            },
            serviceType: SERVICES.map((service) => service.title),
            description:
              'Reparación integral, mantenimiento preventivo y correctivo, diagnóstico de fallas, reparaciones hidráulicas y mecánicas y alquiler de autoelevadores.'
          })}
        </script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-20 bg-gradient-to-br from-muted via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Servicio técnico y reparación de autoelevadores en Córdoba
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Mantenimiento preventivo y correctivo, diagnóstico, reparaciones hidráulicas y mecánicas y alquiler de autoelevadores. Atención en taller y en las instalaciones del cliente.
              </p>
            </motion.div>

            {/* LISTADO DE SERVICIOS */}
            <div className="space-y-20">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* INFORMACIÓN */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                      <service.icon className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />

                          <span className="text-foreground">
                            {benefit}
                          </span>
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

                  {/* IMAGEN */}
                  <div
                    className={
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={`${service.title} - Autoelevadores HMC`}
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
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
                  Mantenimiento preventivo de autoelevadores
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Frecuencia de mantenimiento según el uso
                </h2>

                <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-base md:text-lg">
                  Las tareas y los intervalos dependen del tipo de autoelevador, sus horas de uso y las indicaciones del fabricante. Consulte para definir el mantenimiento requerido para su equipo.
                </p>
              </div>

              {/* TABLA 1: COMPARATIVA DE PLANES */}
              <div className="overflow-x-auto rounded-xl border border-border shadow-md mb-20 bg-card">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground text-center">
                      <th className="p-4 font-bold border-b border-border text-left">
                        Planes
                      </th>

                      <th className="p-4 font-bold border-b border-border">
                        Soft
                      </th>

                      <th className="p-4 font-bold border-b border-border">
                        Low
                      </th>

                      <th className="p-4 font-bold border-b border-border">
                        Medium
                      </th>

                      <th className="p-4 font-bold border-b border-border">
                        Heavy
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border text-sm md:text-base">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">
                        Horas de uso/mes
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        &lt; 80 hs
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        &gt; 80 hs
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        &gt; 130 hs
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        &gt; 250 hs
                      </td>
                    </tr>

                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">
                        Frecuencia del servicio
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        Trimestral
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        Trimestral
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        Bimestral
                      </td>

                      <td className="p-4 text-center text-muted-foreground">
                        Mensual
                      </td>
                    </tr>

                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">
                        Cantidad de servicios
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        2
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        4
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        6
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        12
                      </td>
                    </tr>

                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">
                        Controles periódicos
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        4
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        4
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        6
                      </td>

                      <td className="p-4 text-center text-muted-foreground font-medium">
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* TABLA 2 */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    ¿Qué incluye cada servicio?
                  </h3>
                </div>

                {/* TABS */}
                <div
                  role="tablist"
                  className="flex flex-col sm:flex-row justify-center mb-8 gap-4"
                >
                  <button
                    role="tab"
                    aria-selected={activeTab === 'combustion'}
                    onClick={() => setActiveTab('combustion')}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === 'combustion'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <Flame className="w-5 h-5" />
                    Equipos a Combustión Interna
                  </button>

                  <button
                    role="tab"
                    aria-selected={activeTab === 'electric'}
                    onClick={() => setActiveTab('electric')}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === 'electric'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                    Equipos Eléctricos
                  </button>
                </div>

                {/* TABLA DINÁMICA */}
                <div className="overflow-x-auto rounded-xl border border-border shadow-md bg-card">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted text-foreground">
                        <th className="p-4 font-bold border-b border-border">
                          Tareas a realizar
                        </th>

                        <th className="p-4 font-bold border-b border-border text-center">
                          Cada 250/500/750 hs
                        </th>

                        <th className="p-4 font-bold border-b border-border text-center">
                          Cada 1000 hs
                        </th>

                        <th className="p-4 font-bold border-b border-border text-center">
                          Cada 2000 hs
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-border text-sm md:text-base">
                      {activeTableData.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-muted/40 transition-colors"
                        >
                          <td
                            className={`p-4 ${
                              row.isHeader
                                ? 'font-medium text-foreground'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {row.task}
                          </td>

                          <td className="p-4 text-center">
                            {renderCellContent(row.h250)}
                          </td>

                          <td className="p-4 text-center">
                            {renderCellContent(row.h1000)}
                          </td>

                          <td className="p-4 text-center">
                            {renderCellContent(row.h2000)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER INFERIOR DE CONTACTO */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesita un servicio personalizado?
            </h2>

            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              Solicite un presupuesto para reparación, mantenimiento o alquiler de autoelevadores en Córdoba.
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