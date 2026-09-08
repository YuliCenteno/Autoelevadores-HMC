import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactoPage() {
  const handleWhatsApp = () => {
  window.open(`https://wa.me/5493513488829?text=Hola,%20vi%20la%20p%C3%A1gina%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20la%20reparaci%C3%B3n%20de%20un%20autoelevador.`, '_blank');
};;

  return (
    <>
      <Helmet>
        <title>Contacto - HMC Servicios</title>
        <meta name="description" content="Contáctenos para solicitar presupuesto, agendar un servicio o resolver sus consultas. Atención personalizada y respuesta rápida." />
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contáctenos</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estamos listos para atender sus consultas y brindarle el mejor servicio técnico para sus autoelevadores
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Envienos un mensaje</h2>
                  <ContactForm />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Informacion de contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Telefono</p>
                        <a href="tel:+5493513488829" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          +54 9 3513 48-8829
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Lunes a viernes de 8:30 a 17:00 hs</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                        <Button
                          onClick={handleWhatsApp}
                          className="p-0 h-auto bg-[#25D366] text-white hover:bg-[#20BA5A] px-4 py-2 rounded-lg transition-all duration-200 active:scale-[0.98]"
                        >
                          <svg
                            className="w-5 h-5 mr-2 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.486-8.411" />
                          </svg>
                          WhatsApp
                        </Button>
                        <p className="text-sm text-muted-foreground mt-1">Respuesta inmediata</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <a href="mailto:hmcservicios2014@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          hmcservicios2014@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Direccion</p>
                        <p className="text-muted-foreground">C. del Riego & Av. Rancagua</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Horario de atencion</p>
                        <p className="text-muted-foreground">Lunes a viernes de 8:30 a 17:00 hs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3407.642236502509!2d-64.14692022439556!3d-31.34125207429647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIwJzI4LjUiUyA2NMKwMDgnMzkuNiJX!5e0!3m2!1sen!2sar!4v1786998977187!5m2!1sen!2sar"
                    width="600"
                    height="450"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  /></div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Necesita atención urgente?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
Comuniquese con nosotros y coordinamos la atencion de su equipo a la brevedad
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <a href="tel:+5493513488829">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar ahora
                  </a>
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
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactoPage;