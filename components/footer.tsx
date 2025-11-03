import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-black-bg.png"
                alt="Orquesta Somos Latinos Show"
                width={200}
                height={200}
                className="h-52 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              La experiencia que conecta cultura y emoción
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#D93232] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-400 hover:text-[#D93232] transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className="text-gray-400 hover:text-[#D93232] transition-colors"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-400 hover:text-[#D93232] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-[#D93232]" />
                <span>+57 3147471243</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-[#D93232]" />
                <span>daviddiazvillage@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="text-[#D93232] mt-1" />
                <span>Medellín, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/somoslatinosshow/?hl=en"
                className="w-10 h-10 rounded-full bg-[#8C8C8C] hover:bg-[#D93232] flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Somos Latinos. Todos los derechos
            reservados.
          </p>
          <p>
            Creado por{" "}
            <a
              href="https://www.jorgesantamaria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D93232] hover:text-[#B82828] transition-colors"
            >
              Jorge Santamaría
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
