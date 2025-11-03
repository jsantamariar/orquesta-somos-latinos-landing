"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F0]/95 backdrop-blur-sm border-b border-[#D4D4D2]">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-somos-latinos.png"
              alt="Orquesta Somos Latinos Show"
              width={200}
              height={200}
              className="h-52 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0D0D0D] hover:text-[#D93232] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#D93232] hover:bg-[#B82828] text-white"
            >
              <Link href="/contacto">Reservar Ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0D0D0D]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D4D4D2]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#0D0D0D] hover:text-[#D93232] transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#D93232] hover:bg-[#B82828] text-white w-full"
              >
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Reservar Ahora
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
