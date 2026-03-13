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
        <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1701821062523-966445ed98af?w=1080"
            alt="Florería Kattya — Nuestra Historia"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#1A0A1099" }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <h1 className="font-display italic text-[52px] text-white text-center leading-tight">
              Nuestra Historia
            </h1>
            <p className="font-body text-[18px] text-white/80 text-center">
              Más de 53 años creando belleza en Saltillo
            </p>
          </div>
        </section>

        {/* ── 2. Founding Story ── */}
        <section
          className="flex flex-row"
          style={{
            backgroundColor: "var(--bg-cream)",
            padding: "80px 120px",
            gap: "60px",
          }}
        >
          {/* Left image */}
          <div
            className="shrink-0 rounded-[16px] overflow-hidden"
            style={{ width: "480px", height: "500px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1675802022045-335004711b12?w=1080"
              alt="Los orígenes de Florería Kattya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col justify-center" style={{ gap: "24px" }}>
            <span
              className="font-body font-semibold"
              style={{
                fontSize: "13px",
                color: "var(--primary)",
                letterSpacing: "2px",
              }}
            >
              LOS ORÍGENES
            </span>
            <h2
              className="font-display italic"
              style={{ fontSize: "40px", color: "var(--text-primary)", margin: 0 }}
            >
              Donde todo comenzó
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              El 13 de abril de 1973, la Señora Catalina María García Gutiérrez abrió las puertas
              de Florería Kattya en la Calzada Francisco I. Madero de Saltillo, Coahuila. Con
              pasión por las flores y un sueño de crear algo diferente, comenzó una tradición que
              perdura hasta hoy.
            </p>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Ocho años después, la florería se trasladó a la Calle Obregón en la Zona Centro,
              donde permanece hasta el día de hoy, siendo un referente del arte floral en la región.
            </p>
          </div>
        </section>

        {/* ── 3. Timeline ── */}
        <section
          className="flex flex-col items-center"
          style={{
            backgroundColor: "var(--bg-white)",
            padding: "80px 120px",
            gap: "48px",
          }}
        >
          <h2
            className="font-display italic text-center"
            style={{ fontSize: "36px", color: "var(--text-primary)", margin: 0 }}
          >
            Un legado de más de cinco décadas
          </h2>

          <div className="grid grid-cols-4 w-full" style={{ gap: "0" }}>
            {TIMELINE_ITEMS.map((item) => (
              <div
                key={item.year}
                className="flex flex-col items-center text-center"
                style={{ padding: "24px 16px", gap: "12px" }}
              >
                <span
                  className="font-display italic"
                  style={{ fontSize: "32px", color: "var(--primary)" }}
                >
                  {item.year}
                </span>
                <div
                  className="rounded-full shrink-0"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "var(--primary)",
                  }}
                  aria-hidden="true"
                />
                <p
                  className="font-body text-center"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Diego Story ── */}
        <section
          className="flex flex-row"
          style={{
            backgroundColor: "var(--bg-soft-pink)",
            padding: "80px 120px",
            gap: "60px",
          }}
        >
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-center" style={{ gap: "24px" }}>
            <span
              className="font-body font-semibold"
              style={{
                fontSize: "13px",
                color: "var(--primary)",
                letterSpacing: "2px",
              }}
            >
              SEGUNDA GENERACIÓN
            </span>
            <h2
              className="font-display italic"
              style={{ fontSize: "40px", color: "var(--text-primary)", margin: 0 }}
            >
              La pasión que se hereda
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Diego de la Peña García creció entre flores, aromas y colores. Desde niño acompañó a
              su madre en la florería, aprendiendo el oficio con cada arreglo. A los 18 años asumió
              la dirección del negocio, y en julio de 1999 lo adquirió formalmente.
            </p>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Bajo su liderazgo, Florería Kattya transformó el paradigma de los arreglos florales
              en Saltillo. Dejó atrás los diseños tradicionales de clavel redondo para adoptar
              estilos internacionales: oriental, europeo, americano, pavé, &ldquo;despeinado&rdquo;
              y muchos más.
            </p>
          </div>

          {/* Right image */}
          <div
            className="shrink-0 rounded-[16px] overflow-hidden"
            style={{ width: "480px", height: "500px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1651606977342-58f9c6c0422f?w=1080"
              alt="Diego de la Peña García — Segunda generación"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── 5. Philosophy ── */}
        <section
          className="flex flex-col items-center"
          style={{
            backgroundColor: "var(--bg-white)",
            padding: "80px 120px",
            gap: "48px",
          }}
        >
          <h2
            className="font-display italic text-center"
            style={{ fontSize: "36px", color: "var(--text-primary)", margin: 0 }}
          >
            Nuestra Filosofía
          </h2>
          <p
            className="font-body text-center"
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              maxWidth: "700px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Cada arreglo es una obra de arte única que combina color, línea, estilo, textura,
            proporción, unidad, ritmo, acento, balance y armonía.
          </p>

          <div className="grid grid-cols-3 w-full" style={{ gap: "24px" }}>
            {PHILOSOPHY_CARDS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "var(--bg-cream)",
                  borderRadius: "16px",
                  padding: "32px",
                  gap: "16px",
                }}
              >
                <Icon size={32} color="var(--primary)" aria-hidden="true" />
                <h3
                  className="font-display italic text-center"
                  style={{ fontSize: "20px", color: "var(--text-primary)", margin: 0 }}
                >
                  {title}
                </h3>
                <p
                  className="font-body text-center"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Emotional Closer ── */}
        <section
          className="flex flex-col justify-center items-center"
          style={{
            backgroundColor: "var(--bg-dark)",
            height: "350px",
            padding: "80px 120px",
            gap: "24px",
          }}
        >
          <blockquote
            className="font-display italic text-white text-center"
            style={{ fontSize: "28px", maxWidth: "800px", lineHeight: 1.5, margin: 0 }}
          >
            &ldquo;Generaciones de familias saltillenses nos han confiado sus momentos más
            importantes. Novias que regresan con sus hijas y nietas.&rdquo;
          </blockquote>
          <div
            aria-hidden="true"
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "var(--primary)",
              flexShrink: 0,
            }}
          />
          <p
            className="font-body"
            style={{ fontSize: "16px", color: "var(--text-muted)", margin: 0 }}
          >
            — Florería Kattya, Desde 1973
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
