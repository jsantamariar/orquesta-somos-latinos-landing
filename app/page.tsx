import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Music, Users, Sparkles, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-image.jpg"
            alt="Orquesta Somos Latinos en vivo"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 opacity-30 animate-pulse">
          <Image
            src="/stars-decoration.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-32 left-10 w-20 h-20 opacity-40">
          <Image
            src="/stars-decoration.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* </CHANGE> */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance leading-[90px]">
              <span className="text-[#D93232]">Orquesta</span> <br />
              <span className="text-white ">SOMOS LATINOS</span> <br />
              <span className="text-[#D93232]">Show</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed text-pretty">
              La experiencia que conecta cultura y emoción
            </p>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Somos más que una orquesta. Somos el pulso de una identidad.
              Combinamos la potencia de una big band latina con la sensibilidad
              del show contemporáneo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#D93232] hover:bg-[#B82828] text-white text-lg px-8"
              >
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0D0D0D] text-lg px-8 bg-transparent"
              >
                <Link href="/catalogo">Ver Catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-[#D4D4D2] hover:border-[#D93232] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center mb-4">
                <Music className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">
                Repertorio Versátil
              </h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Salsa, Merengue, Tropical, Crossover y Pop Latino
              </p>
            </Card>

            <Card className="p-6 border-[#D4D4D2] hover:border-[#D93232] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">
                Profesionalismo
              </h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Años de trayectoria en eventos privados y públicos
              </p>
            </Card>

            <Card className="p-6 border-[#D4D4D2] hover:border-[#D93232] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">
                Energía en Vivo
              </h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Espectáculo que conecta y hace vibrar a tu público
              </p>
            </Card>

            <Card className="p-6 border-[#D4D4D2] hover:border-[#D93232] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D93232] flex items-center justify-center mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">
                Formato Ajustable
              </h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Diferentes formatos adaptados a tu evento y presupuesto
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 lg:px-8 bg-[#F2F2F0]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D0D0D] mb-6 text-balance">
              Somos tradición, somos energía,{" "}
              <span className="text-[#D93232]">somos espectáculo</span>
            </h2>
            <p className="text-lg text-[#5C5C5C] mb-8 leading-relaxed">
              Cada presentación es una celebración de lo que somos: alegría,
              raíz, energía y sofisticación. En cada nota, en cada sonrisa, en
              cada historia.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#D93232] text-[#D93232] hover:bg-[#D93232] hover:text-white bg-transparent"
            >
              <Link href="/nosotros">Conoce Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-[#000000] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            ¿Listo para una experiencia{" "}
            <span className="text-[#D93232]">inolvidable</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y descubre cómo podemos hacer de tu evento algo
            extraordinario
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#D93232] hover:bg-[#B82828] text-white text-lg px-8"
          >
            <Link href="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
