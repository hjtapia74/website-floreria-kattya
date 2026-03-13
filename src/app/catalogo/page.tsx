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
      "Bouquets de 12, 24 y 50 rosas en rojo, rosa, blanco y amarillo. Envueltos con elegancia para cualquier ocasión.",
    images: [
      "photo-1709373292533-1a208c18cced",
      "photo-1708401127420-cc4c328213dc",
      "photo-1759675905571-9c01cac8cec4",
    ],
  },
  {
    title: "Canastas de Flores",
    description:
      "Canastas de 12 a 100 flores, rosas o mixtas. Ideales para regalos que dejan huella.",
    images: [
      "photo-1593465078652-a34d250129d4",
      "photo-1569431372699-6ee294ad99c8",
      "photo-1595657333960-3a7d04bdab2a",
    ],
  },
  {
    title: "Arreglos en Florero",
    description:
      "Arreglos de 12 a más de 100 flores en elegantes floreros de cristal. Perfectos para decorar cualquier espacio.",
    images: [
      "photo-1704478394484-01095c915829",
      "photo-1759771181560-16e552668ba4",
      "photo-1739446303318-7a88655bea53",
    ],
  },
  {
    title: "Arreglos Verticales",
    description:
      "Arreglos verticales de flores mixtas con diseño escultural. Una pieza de arte para espacios especiales.",
    images: [
      "photo-1686426013960-9c372152f93e",
      "photo-1745242919196-a7e95147b91d",
      "photo-1770988042803-904bb99911ff",
    ],
  },
  {
    title: "Cajas de Madera",
    description:
      "Arreglos en cajas de madera chica, mediana y grande. Un regalo rústico y elegante con flores frescas.",
    images: [
      "photo-1620753739364-0fea76ddf86c",
      "photo-1703769192628-aecc65bc3964",
      "photo-1751997579166-3d9e52e7b11b",
    ],
  },
  {
    title: "Arreglos de Fruta",
    description:
      "Arreglos de fruta fresca hechos sobre pedido. Combinaciones personalizadas para cualquier celebración.",
    images: [
      "photo-1603481840330-daf9a25d2c10",
      "photo-1659527027414-4c5d98034104",
      "photo-1715817608067-8ee98fa5a16e",
    ],
  },
  {
    title: "Coronas Fúnebres",
    description:
      "Coronas de flores blancas en tamaño mediano y grande. Un tributo digno y respetuoso para despedir a quienes amamos.",
    images: [
      "photo-1768102435163-e989a89fcd24",
      "photo-1581957829801-433af0687345",
      "photo-1769372742183-9495f9d1b303",
    ],
  },
  {
    title: "Ofrendas",
    description:
      "Arreglos de condolencias en flores blancas. Expresiones de paz y cariño en momentos difíciles.",
    images: [
      "photo-1640223996225-314669fef27f",
      "photo-1768878288799-3b0d10d4a6ac",
      "photo-1733247137798-7cc63841ef3c",
    ],
  },
];

export default function CatalogoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-white)]">
      <Header activePage="/catalogo" />

      <main className="flex-1">
        {/* Section 1: Page Title */}
        <section className="bg-[var(--bg-cream)] flex flex-col items-center justify-center text-center px-[56px] py-[64px] gap-4">
          <h1 className="font-display italic text-[48px] leading-tight text-[var(--text-primary)]">
            Nuestro Catálogo
          </h1>
          <div className="w-[60px] h-[2px] bg-[var(--primary)]" />
          <p className="font-body text-[18px] text-[var(--text-secondary)]">
            Cada arreglo es una obra de arte hecha a tu medida
          </p>
        </section>

        {/* Section 2: Categories Body */}
        <section className="bg-[var(--bg-white)] px-[56px] py-[48px] flex flex-col gap-[56px]">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col gap-2">
              {/* Category header */}
              <div className="flex flex-col gap-2">
                <h2 className="font-display italic text-[28px] leading-snug text-[var(--text-primary)]">
                  {category.title}
                </h2>
                <p
                  className="font-body text-[15px] text-[var(--text-secondary)] max-w-[700px]"
                  style={{ lineHeight: 1.6 }}
                >
                  {category.description}
                </p>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-3 gap-6 mt-4">
                {category.images.map((photoId, index) => (
                  <div
                    key={photoId}
                    className="h-[240px] overflow-hidden rounded-[var(--radius-lg)]"
                  >
                    <img
                      src={`https://images.unsplash.com/${photoId}?w=1080`}
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
        <section className="bg-[var(--bg-soft-pink)] px-[56px] py-[64px] flex flex-col items-center justify-center gap-6">
          <h2 className="font-display italic text-[36px] leading-tight text-[var(--text-primary)] text-center">
            ¿Te gustó algo?
          </h2>
          <p className="font-body text-[16px] text-[var(--text-secondary)] text-center">
            Cotiza tu arreglo personalizado por WhatsApp
          </p>
          <a
            href="https://wa.me/528444550296"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--secondary)] text-white font-body text-[15px] font-medium px-[40px] py-[16px] rounded-full transition-opacity hover:opacity-85"
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
