import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Precios", href: "/precios" },
  { label: "Nuestra Historia", href: "/historia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

const CONTACT_ITEMS = [
  "844 455 02 96",
  "844 185 07 36",
  "floreriakattya@gmail.com",
  "Facebook: Florería Kattya",
];

const LOCATION_ITEMS = [
  "Obregón Sur 165-1",
  "Zona Centro",
  "Saltillo, Coahuila",
  "México",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] px-6 md:px-10 xl:px-14 py-10 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
        {/* Brand */}
        <div className="w-full sm:col-span-2 lg:col-span-1">
          <span className="block font-display text-[24px] italic font-semibold text-white mb-3">
            Florería Kattya
          </span>
          <p className="font-body text-[13px] text-[var(--text-muted)] leading-relaxed max-w-full sm:max-w-[280px]">
            Arte floral desde 1973. Cada arreglo cuenta una historia de amor,
            celebración y recuerdo.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-body text-[13px] font-semibold text-white mb-4">Navegación</p>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-[13px] text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body text-[13px] font-semibold text-white mb-4">Contacto</p>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {CONTACT_ITEMS.map((item) => (
              <li key={item} className="font-body text-[13px] text-[var(--text-muted)] leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <p className="font-body text-[13px] font-semibold text-white mb-4">Ubicación</p>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {LOCATION_ITEMS.map((item) => (
              <li key={item} className="font-body text-[13px] text-[var(--text-muted)] leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-0 border-t border-white/[0.08] m-0" />

      <p className="text-center font-body text-[12px] text-[var(--text-muted)] mt-10">
        &copy; 2026 Florería Kattya. Todos los derechos reservados.
      </p>
    </footer>
  );
}
