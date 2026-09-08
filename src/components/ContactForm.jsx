import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.telefono || !formData.mensaje) {
      toast.error('Por favor complete todos los campos requeridos');
      return;
    }

    setIsSubmitting(true);

    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast.success('Mensaje enviado correctamente. Nos contactaremos pronto.');
      
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        mensaje: ''
      });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-foreground font-medium">
            Nombre completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Juan Pérez"
            className="bg-input text-gray-900 placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-foreground font-medium">
            Empresa
          </Label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Logística del Sur S.A."
            className="bg-input text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="telefono" className="text-foreground font-medium">
          Teléfono <span className="text-destructive">*</span>
        </Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          required
          placeholder="+54 11 1234-5678"
          className="bg-input text-gray-900 placeholder:text-gray-400"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="mensaje" className="text-foreground font-medium">
          Mensaje <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describa su consulta o necesidad de servicio..."
          className="bg-input text-gray-900 placeholder:text-gray-400 resize-none"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;