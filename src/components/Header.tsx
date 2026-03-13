"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Precios", href: "/precios" },
  { label: "Nuestra Historia", href: "/historia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage }: HeaderProps) {
  const pathname = usePathname();
  const currentPage = activePage ?? pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-white)] border-b border-[var(--border)] backdrop-blur-md">
      <div className="flex items-center justify-between px-4 md:px-8 xl:px-14 py-5">
        <Link
          href="/"
          className="font-display text-[24px] italic font-semibold text-[var(--primary)] no-underline"
        >
          Florería Kattya
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] no-underline transition-colors duration-200 hover:text-[var(--primary)] ${
                  isActive
                    ? "text-[var(--text-primary)] font-medium"
                    : "text-[var(--text-secondary)] font-normal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/528444550296"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--secondary)] text-white rounded-full p-2.5 sm:px-6 sm:py-2.5 text-[13px] font-medium font-body no-underline transition-opacity duration-200 hover:opacity-85"
            aria-label="Contáctanos por WhatsApp"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            className="lg:hidden p-2 text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden flex flex-col border-t border-[var(--border)] bg-[var(--bg-white)]"
          aria-label="Navegación móvil"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-6 text-[15px] font-body border-b border-[var(--border)] hover:text-[var(--primary)] hover:bg-[var(--bg-cream)] transition-colors no-underline ${
                  isActive
                    ? "text-[var(--primary)] font-medium bg-[var(--bg-cream)]"
                    : "text-[var(--text-secondary)] font-normal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="flex justify-center m-4">
            <a
              href="https://wa.me/528444550296"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 bg-[var(--secondary)] text-white rounded-full px-6 py-2.5 text-[14px] font-medium font-body no-underline transition-opacity duration-200 hover:opacity-85"
              aria-label="Contáctanos por WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
