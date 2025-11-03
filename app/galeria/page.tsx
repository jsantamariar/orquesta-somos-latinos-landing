import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GaleriaPage() {
  const galleryImages = [
    {
      src: "/gallery/DSC03188.jpg",
      alt: "Orquesta Somos Latinos en vivo - Grupo vocal",
      caption: "Nuestros vocalistas en acción",
    },
    {
      src: "/gallery/DSC03178.jpg",
      alt: "Vocalista femenina de Somos Latinos",
      caption: "Interpretación apasionada",
    },
    {
      src: "/gallery/DSC03181.jpg",
      alt: "Vocalista masculino de Somos Latinos",
      caption: "Energía en el escenario",
    },
    {
      src: "/gallery/DSC03174.jpg",
      alt: "Orquesta Somos Latinos - Presentación completa",
      caption: "Show completo con toda la orquesta",
    },
    {
      src: "/gallery/DSC03173.jpg",
      alt: "Banda Somos Latinos en vivo",
      caption: "Profesionalismo y calidad",
    },
    {
      src: "/gallery/DSC03179.jpg",
      alt: "Cantante de Somos Latinos",
      caption: "Conexión con el público",
    },
    {
      src: "/gallery/DSC03180.jpg",
      alt: "Presentación en vivo Somos Latinos",
      caption: "Espectáculo inolvidable",
    },
    {
      src: "/gallery/DSC03187.jpg",
      alt: "Grupo vocal Somos Latinos",
      caption: "Armonía perfecta",
    },
    {
      src: "/gallery/DSC03183.jpg",
      alt: "Cantante principal Somos Latinos",
      caption: "Talento y carisma",
    },
    {
      src: "/gallery/DSC03168.jpg",
      alt: "Orquesta Somos Latinos Show completo",
      caption: "La experiencia completa",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#0D0D0D] to-[#2D2D2D] text-white py-20 overflow-hidden">
          <div className="absolute top-10 left-16 w-28 h-28 opacity-20">
            <Image src="/stars-decoration.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-10 right-12 w-24 h-24 opacity-15 animate-pulse">
            <Image src="/stars-decoration.png" alt="" fill className="object-contain" />
          </div>
          {/* End of stars decoration */}
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
                <span className="text-[#D93232]">Galería</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#F2F2F0]/80 leading-relaxed">
                Momentos inolvidables capturados en cada presentación. Descubre la energía y pasión de Somos Latinos en
                acción.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-[#0D0D0D] shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-lg font-medium text-balance">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0D0D0D] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
                ¿Listo para vivir la <span className="text-[#D93232]">experiencia</span>?
              </h2>
              <p className="text-xl text-[#F2F2F0]/80 mb-8 leading-relaxed">
                Contáctanos hoy y lleva tu evento al siguiente nivel con Somos Latinos
              </p>
              <a
                href="/contacto"
                className="inline-block bg-[#D93232] hover:bg-[#B82828] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
