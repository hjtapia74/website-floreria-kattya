import { Palette, Sparkles, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TIMELINE_ITEMS = [
  { year: "1973", description: "Apertura en Calzada Francisco I. Madero" },
  { year: "1981", description: "Traslado a Calle Obregón, Zona Centro" },
  { year: "1999", description: "Diego de la Peña García adquiere el negocio" },
  { year: "2026", description: "53+ años de tradición y arte floral" },
];

const PHILOSOPHY_CARDS = [
  {
    Icon: Palette,
    title: "Arte, no producto",
    description:
      "No vendemos flores, vendemos arte. Cada arreglo es diseñado como una pieza única.",
  },
  {
    Icon: Sparkles,
    title: "Hecho sobre pedido",
    description:
      "Sin inventario. Cada arreglo se crea fresco al momento de tu pedido con flores seleccionadas.",
  },
  {
    Icon: Truck,
    title: "Entrega personal",
    description:
      "Cada arreglo es entregado personalmente para garantizar que llegue en perfectas condiciones.",
  },
];

export default function NuestraHistoriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="/historia" />

      <main className="flex-1">
        {/* ── 1. Hero ── */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1701821062523-966445ed98af?w=1080"
            alt="Florería Kattya — Nuestra Historia"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-[#1A0A1099]"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-center gap-4 px-4">
            <h1 className="font-display italic text-[32px] md:text-[42px] lg:text-[52px] text-white text-center leading-tight">
              Nuestra Historia
            </h1>
            <p className="font-body text-[16px] md:text-[18px] text-white/80 text-center">
              Más de 53 años creando belleza en Saltillo
            </p>
          </div>
        </section>

        {/* ── 2. Founding Story ── */}
        <section className="flex flex-col lg:flex-row bg-[var(--bg-cream)] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-16 lg:py-20 gap-8 md:gap-12 lg:gap-[60px]">
          {/* Left image */}
          <div className="w-full lg:w-[480px] h-[300px] md:h-[400px] lg:h-[500px] shrink-0 rounded-[16px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1675802022045-335004711b12?w=1080"
              alt="Los orígenes de Florería Kattya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <span className="font-body font-semibold text-[13px] text-[var(--primary)] tracking-[2px]">
              LOS ORÍGENES
            </span>
            <h2 className="font-display italic text-[28px] md:text-[36px] lg:text-[40px] text-[var(--text-primary)] m-0">
              Donde todo comenzó
            </h2>
            <p className="font-body text-[16px] text-[var(--text-secondary)] leading-[1.7] m-0">
              El 13 de abril de 1973, la Señora Catalina María García Gutiérrez abrió las puertas
              de Florería Kattya en la Calzada Francisco I. Madero de Saltillo, Coahuila. Con
              pasión por las flores y un sueño de crear algo diferente, comenzó una tradición que
              perdura hasta hoy.
            </p>
            <p className="font-body text-[16px] text-[var(--text-secondary)] leading-[1.7] m-0">
              Ocho años después, la florería se trasladó a la Calle Obregón en la Zona Centro,
              donde permanece hasta el día de hoy, siendo un referente del arte floral en la región.
            </p>
          </div>
        </section>

        {/* ── 3. Timeline ── */}
        <section className="flex flex-col items-center bg-[var(--bg-white)] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-16 lg:py-20 gap-12">
          <h2 className="font-display italic text-[28px] md:text-[36px] text-[var(--text-primary)] text-center m-0">
            Un legado de más de cinco décadas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-0">
            {TIMELINE_ITEMS.map((item) => (
              <div
                key={item.year}
                className="flex flex-col items-center text-center py-6 px-4 gap-3"
              >
                <span className="font-display italic text-[32px] text-[var(--primary)]">
                  {item.year}
                </span>
                <div
                  className="w-3 h-3 rounded-full shrink-0 bg-[var(--primary)]"
                  aria-hidden="true"
                />
                <p className="font-body text-[14px] text-[var(--text-secondary)] leading-[1.5] text-center m-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Diego Story ── */}
        <section className="flex flex-col-reverse lg:flex-row bg-[var(--bg-soft-pink)] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-16 lg:py-20 gap-8 md:gap-12 lg:gap-[60px]">
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <span className="font-body font-semibold text-[13px] text-[var(--primary)] tracking-[2px]">
              SEGUNDA GENERACIÓN
            </span>
            <h2 className="font-display italic text-[28px] md:text-[36px] lg:text-[40px] text-[var(--text-primary)] m-0">
              La pasión que se hereda
            </h2>
            <p className="font-body text-[16px] text-[var(--text-secondary)] leading-[1.7] m-0">
              Diego de la Peña García creció entre flores, aromas y colores. Desde niño acompañó a
              su madre en la florería, aprendiendo el oficio con cada arreglo. A los 18 años asumió
              la dirección del negocio, y en julio de 1999 lo adquirió formalmente.
            </p>
            <p className="font-body text-[16px] text-[var(--text-secondary)] leading-[1.7] m-0">
              Bajo su liderazgo, Florería Kattya transformó el paradigma de los arreglos florales
              en Saltillo. Dejó atrás los diseños tradicionales de clavel redondo para adoptar
              estilos internacionales: oriental, europeo, americano, pavé, &ldquo;despeinado&rdquo;
              y muchos más.
            </p>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-[480px] h-[300px] md:h-[400px] lg:h-[500px] shrink-0 rounded-[16px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1651606977342-58f9c6c0422f?w=1080"
              alt="Diego de la Peña García — Segunda generación"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── 5. Philosophy ── */}
        <section className="flex flex-col items-center bg-[var(--bg-white)] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-16 lg:py-20 gap-12">
          <h2 className="font-display italic text-[28px] md:text-[36px] text-[var(--text-primary)] text-center m-0">
            Nuestra Filosofía
          </h2>
          <p className="font-body text-[18px] text-[var(--text-secondary)] text-center max-w-full md:max-w-[700px] leading-[1.7] m-0">
            Cada arreglo es una obra de arte única que combina color, línea, estilo, textura,
            proporción, unidad, ritmo, acento, balance y armonía.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            {PHILOSOPHY_CARDS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center bg-[var(--bg-cream)] rounded-[16px] p-8 gap-4"
              >
                <Icon size={32} color="var(--primary)" aria-hidden="true" />
                <h3 className="font-display italic text-[20px] text-[var(--text-primary)] text-center m-0">
                  {title}
                </h3>
                <p className="font-body text-[14px] text-[var(--text-secondary)] text-center leading-[1.6] m-0">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Emotional Closer ── */}
        <section className="flex flex-col justify-center items-center bg-[var(--bg-dark)] min-h-[250px] md:min-h-[350px] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-16 lg:py-20 gap-6">
          <blockquote className="font-display italic text-[20px] md:text-[24px] lg:text-[28px] text-white text-center max-w-[95%] md:max-w-[800px] leading-[1.5] m-0">
            &ldquo;Generaciones de familias saltillenses nos han confiado sus momentos más
            importantes. Novias que regresan con sus hijas y nietas.&rdquo;
          </blockquote>
          <div
            aria-hidden="true"
            className="w-[60px] h-[2px] bg-[var(--primary)] shrink-0"
          />
          <p className="font-body text-[16px] text-[var(--text-muted)] m-0">
            — Florería Kattya, Desde 1973
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
