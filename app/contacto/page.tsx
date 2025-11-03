"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-[#F2F2F0] to-[#E5E5E3] overflow-hidden">
        <div className="absolute top-12 right-16 w-32 h-32 opacity-20 animate-pulse">
          <Image
            src="/stars-decoration.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-12 left-10 w-18 h-18 opacity-25">
          <Image
            src="/stars-decoration.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0D0D0D] mb-6 text-balance">
              <span className="text-[#D93232]">Contáctanos</span>
            </h1>
            <p className="text-xl text-[#5C5C5C] leading-relaxed">
              Estamos listos para hacer de tu evento una experiencia inolvidable
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0D0D0D] mb-6">
                Solicita tu <span className="text-[#D93232]">Cotización</span>
              </h2>
              <p className="text-[#5C5C5C] mb-8 leading-relaxed">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-[#0D0D0D]">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="mt-2 border-[#D4D4D2] focus:border-[#D93232] focus:ring-[#D93232]"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#0D0D0D]">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-[#D4D4D2] focus:border-[#D93232] focus:ring-[#D93232]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-[#0D0D0D]">
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="mt-2 border-[#D4D4D2] focus:border-[#D93232] focus:ring-[#D93232]"
                    placeholder="+57 3106000772"
                  />
                </div>

                <div>
                  <Label htmlFor="tipoEvento" className="text-[#0D0D0D]">
                    Tipo de Evento *
                  </Label>
                  <select
                    id="tipoEvento"
                    name="tipoEvento"
                    required
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-[#D4D4D2] bg-white px-3 py-2 text-[#0D0D0D] focus:border-[#D93232] focus:outline-none focus:ring-1 focus:ring-[#D93232]"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="boda">Boda</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="festival">Festival</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="fecha" className="text-[#0D0D0D]">
                    Fecha del Evento *
                  </Label>
                  <Input
                    id="fecha"
                    name="fecha"
                    type="date"
                    required
                    value={formData.fecha}
                    onChange={handleChange}
                    className="mt-2 border-[#D4D4D2] focus:border-[#D93232] focus:ring-[#D93232]"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-[#0D0D0D]">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 border-[#D4D4D2] focus:border-[#D93232] focus:ring-[#D93232]"
                    placeholder="Cuéntanos más sobre tu evento..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D93232] hover:bg-[#B82828] text-white text-lg py-6"
                >
                  Enviar Solicitud
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0D0D0D] mb-6">
                Información de <span className="text-[#D93232]">Contacto</span>
              </h2>
              <p className="text-[#5C5C5C] mb-8 leading-relaxed">
                También puedes contactarnos directamente a través de estos
                medios
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-[#D4D4D2] bg-[#F2F2F0]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D0D0D] mb-1">
                        Teléfono
                      </h3>
                      <p className="text-[#5C5C5C]">+57 3147471243</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[#D4D4D2] bg-[#F2F2F0]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D0D0D] mb-1">Email</h3>
                      <p className="text-[#5C5C5C]">
                        daviddiazvillage@gmail.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[#D4D4D2] bg-[#F2F2F0]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D0D0D] mb-1">
                        Ubicación
                      </h3>
                      <p className="text-[#5C5C5C]">Medellín, Colombia</p>
                      <p className="text-[#5C5C5C]">
                        Disponibles para eventos en toda la región
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[#D4D4D2] bg-[#F2F2F0]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D0D0D] mb-1">
                        Horario de Atención
                      </h3>
                      <p className="text-[#5C5C5C]">
                        Lunes a Viernes: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-[#5C5C5C]">
                        Sábados: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
