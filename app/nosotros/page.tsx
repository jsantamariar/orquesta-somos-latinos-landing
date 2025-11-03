import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Heart, Target, Award } from "lucide-react"
import Image from "next/image"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-[#F2F2F0] to-[#E5E5E3] overflow-hidden">
        <div className="absolute top-10 right-20 w-24 h-24 opacity-20">
          <Image src="/stars-decoration.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 left-16 w-16 h-16 opacity-25 animate-pulse">
          <Image src="/stars-decoration.png" alt="" fill className="object-contain" />
        </div>
        {/* </CHANGE> */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0D0D0D] mb-6 text-balance">
              Nuestra <span className="text-[#D93232]">Historia</span>
            </h1>
            <p className="text-xl text-[#5C5C5C] leading-relaxed">
              Conoce la pasión y el compromiso detrás de cada presentación
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-[#0D0D0D] mb-6">
              SOMOS LATINOS – La Experiencia que Conecta Cultura y Emoción
            </h2>
            <p className="text-[#5C5C5C] leading-relaxed mb-6">
              Somos más que una orquesta. Somos el pulso de una identidad.{" "}
              <strong className="text-[#0D0D0D]">Somos Latinos</strong> nace de la pasión por unir ritmos, culturas y
              generaciones en un solo lenguaje: La Música.
            </p>
            <p className="text-[#5C5C5C] leading-relaxed mb-6">
              Nuestra esencia combina la potencia de una big band latina con la sensibilidad del show contemporáneo.
              Cada presentación es una celebración de lo que somos: alegría, raíz, energía y sofisticación.
            </p>
            <p className="text-[#5C5C5C] leading-relaxed mb-8">
              En cada nota, en cada sonrisa, en cada historia…{" "}
              <strong className="text-[#D93232]">
                Somos tradición, somos energía, somos espectáculo, Somos Latinos.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 lg:px-8 bg-[#F2F2F0]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-[#0D0D0D] text-center mb-12">
            Nuestros <span className="text-[#D93232]">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-[#D4D4D2] bg-white">
              <div className="w-16 h-16 rounded-full bg-[#D93232] flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-3">Pasión</h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Cada presentación es una entrega total de amor por la música latina y nuestra cultura
              </p>
            </Card>

            <Card className="p-8 text-center border-[#D4D4D2] bg-white">
              <div className="w-16 h-16 rounded-full bg-[#D93232] flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-3">Excelencia</h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Compromiso con la calidad musical y el profesionalismo en cada detalle
              </p>
            </Card>

            <Card className="p-8 text-center border-[#D4D4D2] bg-white">
              <div className="w-16 h-16 rounded-full bg-[#D93232] flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-3">Autenticidad</h3>
              <p className="text-[#5C5C5C] leading-relaxed">
                Mantenemos vivas nuestras raíces mientras innovamos en cada show
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-[#0D0D0D] mb-12 text-center">
            ¿Por qué <span className="text-[#D93232]">Elegirnos</span>?
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D93232] flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Repertorio Versátil y Formato Ajustable</h3>
                <p className="text-[#5C5C5C] leading-relaxed">
                  Interpretamos una rica variedad de géneros como: 🎷 Salsa - 🎺 Merengue - 🕺 Tropical & Popular - 🎧
                  Crossover - 🎙 Pop Latino
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D93232] flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Experiencia y Profesionalismo</h3>
                <p className="text-[#5C5C5C] leading-relaxed">
                  Años de trayectoria en eventos privados y presentaciones públicas nos respaldan
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D93232] flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Energía en Vivo</h3>
                <p className="text-[#5C5C5C] leading-relaxed">
                  Espectáculo que conecta con tu público y lo hace vibrar de principio a fin
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D93232] flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Variedad de Servicios</h3>
                <p className="text-[#5C5C5C] leading-relaxed">
                  Disponemos de diferentes formatos que se adaptan al tipo y presupuesto de tu evento, sin disminuir en
                  lo más mínimo la calidad de nuestro show/performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
