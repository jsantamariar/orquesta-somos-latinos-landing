import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Music2, Mic2, Radio, Disc3, Guitar } from "lucide-react"

export default function CatalogoPage() {
  const genres = [
    {
      icon: Music2,
      title: "Salsa",
      description: "El ritmo que hace bailar a todos. Desde la salsa clásica hasta las fusiones más modernas.",
      color: "bg-[#D93232]",
    },
    {
      icon: Mic2,
      title: "Merengue",
      description: "Energía pura y alegría contagiosa. El merengue que enciende cualquier fiesta.",
      color: "bg-[#D93232]",
    },
    {
      icon: Radio,
      title: "Tropical & Popular",
      description: "Los éxitos que todos conocen y aman. Música tropical que conecta generaciones.",
      color: "bg-[#D93232]",
    },
    {
      icon: Disc3,
      title: "Crossover",
      description: "Fusión de estilos que rompe fronteras. Lo mejor de varios mundos musicales.",
      color: "bg-[#D93232]",
    },
    {
      icon: Guitar,
      title: "Pop Latino",
      description: "Los hits latinos del momento. Música contemporánea con sabor latino.",
      color: "bg-[#D93232]",
    },
  ]

  const formats = [
    {
      title: "Formato Completo",
      subtitle: "Big Band Latina",
      description:
        "Orquesta completa con sección de vientos, percusión, cuerdas y vocalistas. La experiencia más impactante.",
      features: ["15-20 músicos", "Sonido profesional", "Show completo", "Ideal para eventos grandes"],
    },
    {
      title: "Formato Medio",
      subtitle: "Combo Latino",
      description: "Agrupación versátil que mantiene la esencia de la big band con un formato más compacto.",
      features: ["8-12 músicos", "Repertorio completo", "Excelente calidad", "Perfecto para eventos medianos"],
    },
    {
      title: "Formato Reducido",
      subtitle: "Grupo Selecto",
      description: "Grupo íntimo pero poderoso, ideal para espacios más reducidos sin sacrificar calidad.",
      features: ["5-7 músicos", "Repertorio adaptado", "Alta calidad musical", "Ideal para eventos íntimos"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-[#F2F2F0] to-[#E5E5E3] overflow-hidden">
        <div className="absolute top-16 left-12 w-28 h-28 opacity-15">
          <Image src="/stars-decoration.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-16 right-20 w-20 h-20 opacity-30 animate-pulse">
          <Image src="/stars-decoration.png" alt="" fill className="object-contain" />
        </div>
        {/* End of added decorative stars */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0D0D0D] mb-6 text-balance">
              Nuestro <span className="text-[#D93232]">Catálogo</span>
            </h1>
            <p className="text-xl text-[#5C5C5C] leading-relaxed">
              Descubre nuestra variedad de géneros y formatos para tu evento
            </p>
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-[#0D0D0D] text-center mb-4">
            Géneros <span className="text-[#D93232]">Musicales</span>
          </h2>
          <p className="text-center text-[#5C5C5C] mb-12 max-w-2xl mx-auto leading-relaxed">
            Interpretamos una rica variedad de géneros que se adaptan a cualquier tipo de evento
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {genres.map((genre, index) => {
              const Icon = genre.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-[#D4D4D2] hover:border-[#D93232] transition-all hover:shadow-lg"
                >
                  <div className={`w-14 h-14 rounded-full ${genre.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-3">{genre.title}</h3>
                  <p className="text-[#5C5C5C] leading-relaxed">{genre.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20 px-4 lg:px-8 bg-[#F2F2F0]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-[#0D0D0D] text-center mb-4">
            Formatos <span className="text-[#D93232]">Disponibles</span>
          </h2>
          <p className="text-center text-[#5C5C5C] mb-12 max-w-2xl mx-auto leading-relaxed">
            Diferentes configuraciones que se adaptan al tipo y presupuesto de tu evento
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formats.map((format, index) => (
              <Card key={index} className="p-8 border-[#D4D4D2] bg-white hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-1">{format.title}</h3>
                  <p className="text-[#D93232] font-semibold">{format.subtitle}</p>
                </div>
                <p className="text-[#5C5C5C] mb-6 leading-relaxed">{format.description}</p>
                <ul className="space-y-3 mb-6">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#5C5C5C]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D93232]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#D93232] hover:bg-[#B82828] text-white">
                  <Link href="/contacto">Consultar Disponibilidad</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-[#0D0D0D] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            ¿No encuentras lo que <span className="text-[#D93232]">buscas</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos y creamos un formato personalizado para tu evento especial
          </p>
          <Button asChild size="lg" className="bg-[#D93232] hover:bg-[#B82828] text-white text-lg px-8">
            <Link href="/contacto">Solicitar Cotización Personalizada</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
