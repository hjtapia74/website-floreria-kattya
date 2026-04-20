import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

interface Category {
  title: string;
  description: string;
  images: string[];
}

const CATEGORIES: Category[] = [
  {
    title: "Ramos de Rosas",
    description:
      "Ramo de rosas solas o acompañadas de follaje de flor, presentado en papel de temporada con moño de organza. Los colores de la rosa, los follajes de acompañamiento, pueden variar.",
    images: [
      "/images/rosas1.jpeg",
      "/images/rosas2.jpeg",
      "/images/rosas3.jpeg",
    ],
  },
  {
    title: "Canastas de Flores",
    description:
      "Canasta de rosas solas o de flores combinadas, acompañadas de follaje de flor y follaje verde fino, presentado en diferentes tipos y estilos de canastas. Los colores, el diseño pueden variar de acuerdo a temporalidad y disponibilidad de canastas.",
    images: [
      "/images/canasta1.jpeg",
      "/images/canasta2.jpeg",
      "/images/canasta3.jpeg",
    ],
  },
  {
    title: "Arreglos en Florero",
    description:
      "Floreros de cristal de diferentes formas y estilos, cilindros de cristal transparente o blancos. Ideales para embellecer cualquier espacio.",
    images: [
      "/images/florero1.jpeg",
      "/images/florero2.jpeg",
      "/images/florero3.jpeg",
    ],
  },
  {
    title: "Arreglos Verticales",
    description:
      "Arreglos Verticales diseñados con el toque de prestigio y distinción que los hace espectaculares.",
    images: [
      "/images/vertical1.jpeg",
      "/images/vertical2.jpeg",
      "/images/vertical3.jpeg",
    ],
  },
  {
    title: "Cajas de Madera",
    description:
      "Arreglo en cajas de madera: Caja de madera tipo alhajero, chico, mediano o grande, un detalle para toda la vida. Nota: Las cajas de madera tienen diferentes acabados elaborados con la tecnica de Copage, así que los modelos disponibles, varian constantemente. Por favor contacta con nosotros por whatsapp para darte más detalle.",
    images: [
      "/images/caja1.jpeg",
      "/images/caja2.jpeg",
      "/images/caja3.jpeg",
    ],
  },
  {
    title: "Arreglos de Fruta",
    description:
      "Arreglos de fruta fresca hechos sobre pedido. Combinaciones personalizadas para cualquier celebración.",
    images: [
      "/images/fruta1.jpeg",
      "/images/fruta2.jpeg",
      "/images/fruta3.jpeg",
    ],
  },
  {
    title: "Coronas Fúnebres",
    description:
      "Coronas de flores blancas en tamaño mediano y grande. Un tributo digno y respetuoso para despedir a quienes amamos.",
    images: [
      "/images/corona1.jpeg",
      "/images/corona2.jpeg",
      "/images/corona3.jpeg",
    ],
  },
  {
    title: "Ofrendas",
    description:
      "Arreglos de condolencias en flores blancas. Expresiones de paz y cariño en momentos difíciles. Arreglos horizontales, verticales, redondos y en florero",
    images: [
      "/images/ofrenda1.jpeg",
      "/images/ofrenda2.jpeg",
      "/images/ofrenda3.jpeg",
    ],
  },
  {
    title: "Arreglo de Plantas",
    description: "Un detalle para toda la vida",
    images: [
      "/images/planta1.jpeg",
      "/images/planta2.jpeg",
      "/images/planta3.jpeg",
    ],
  },
];

export default function CatalogoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-white)]">
      <Header activePage="/catalogo" />

      <main className="flex-1">
        {/* Section 1: Page Title */}
        <section className="bg-[var(--bg-cream)] flex flex-col items-center justify-center text-center px-6 md:px-14 py-10 md:py-16 gap-4">
          <h1 className="font-display italic text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-[var(--text-primary)]">
            Nuestro Catálogo
          </h1>
          <div className="w-[60px] h-[2px] bg-[var(--primary)]" />
          <p className="font-body text-[18px] text-[var(--text-secondary)]">
            ¡Cada arreglo tiene historia, forma, estilo y dedicación! Conócelos!!!
          </p>
        </section>

        {/* Section 2: Categories Body */}
        <section className="bg-[var(--bg-white)] px-4 md:px-10 lg:px-14 py-8 md:py-12 flex flex-col gap-[56px]">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col gap-2">
              {/* Category header */}
              <div className="flex flex-col gap-2">
                <h2 className="font-display italic text-[22px] md:text-[28px] leading-snug text-[var(--text-primary)]">
                  {category.title}
                </h2>
                <p className="font-body text-[15px] text-[var(--text-secondary)] max-w-[700px] leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {category.images.map((photoId, index) => (
                  <div
                    key={photoId}
                    className="h-[200px] md:h-[240px] overflow-hidden rounded-[var(--radius-lg)]"
                  >
                    <img
                      src={photoId.startsWith("/") ? photoId : `https://images.unsplash.com/${photoId}?w=1080`}
                      alt={`${category.title} ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Section 3: CTA */}
        <section className="bg-[var(--bg-soft-pink)] px-6 md:px-14 py-10 md:py-16 flex flex-col items-center justify-center gap-6">
          <h2 className="font-display italic text-[28px] md:text-[36px] leading-tight text-[var(--text-primary)] text-center">
            ¿Te gustó algo?
          </h2>
          <p className="font-body text-[16px] text-[var(--text-secondary)] text-center">
            Cotiza tu arreglo personalizado por WhatsApp
          </p>
          <a
            href="https://wa.me/528444550296"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--secondary)] text-white font-body text-[15px] font-medium px-8 py-3 md:px-10 md:py-4 rounded-full transition-opacity hover:opacity-85"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Ordenar por WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
