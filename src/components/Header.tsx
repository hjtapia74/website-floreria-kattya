"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-white)] border-b border-[var(--border)] backdrop-blur-md">
      <div className="flex items-center justify-between px-14 py-5">
        <Link
          href="/"
          className="font-display text-[24px] italic font-semibold text-[var(--primary)] no-underline"
        >
          Florería Kattya
        </Link>

        <nav className="flex items-center gap-8 font-body" aria-label="Navegación principal">
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

        <a
          href="https://wa.me/528444550296"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[var(--secondary)] text-white rounded-full px-6 py-2.5 text-[13px] font-medium font-body no-underline transition-opacity duration-200 hover:opacity-85"
          aria-label="Contáctanos por WhatsApp"
        >
          <MessageCircle size={16} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
