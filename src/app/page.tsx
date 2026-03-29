import Link from "next/link";
import { MessageCircle, Headphones, ClipboardList, CreditCard, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  {
    title: "Arreglos de ocasión",
    description: "Somos especialistas en diseño floral de ocasión, creamos arreglos personalizados que capturan la esencia de cada momento. Celebramos cumpleaños, aniversarios, fechas importantes, días festivos. Expresando amor, agradecimiento, disculpa, compañerismo, liderazgo.",
    image: "/images/ocasion.jpeg",
  },
  {
    title: "Arreglos funerarios",
    description: "Acompañamos en momentos difíciles, mostrando reconocimiento, amor, condolencia, apoyo. Garantizando la frescura de nuestras flores y entrega segura a tiempo.",
    image: "/images/funerarios.jpeg",
  },
  {
    title: "Arreglos para eventos",
    description: "<b>Eventos sociales:</b> Transformamos las ocasiones especiales en recuerdos inolvidables, creando junto a ti, los arreglos idóneos para tu cena romántica, pedida de mano, despedida de soltera, boda, baby shower, bautizo, primera comunión.<br/><b>Eventos empresariales:</b> Damos el toque elegante y distinguido para tu reunión de negocios, sesión corporativa y directivas, capacitaciones, posadas y eventos.",
    image: "/images/eventos.jpeg",
  },
];

const STEPS = [
  {
    icon: MessageCircle,
    label: "1. Contacto",
    description: "Escríbenos por WhatsApp o llámanos",
  },
  {
    icon: Headphones,
    label: "2. Atención",
    description: "Te asesoramos para elegir el arreglo ideal",
  },
  {
    icon: ClipboardList,
    label: "3. Pedido",
    description: "Confirmamos tu pedido y detalles de entrega",
  },
  {
    icon: CreditCard,
    label: "4. Pago",
    description: "Transferencia, efectivo o tarjeta",
  },
  {
    icon: Gift,
    label: "5. Recepción",
    description: "Entrega a domicilio o recoges en tienda",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="/" />

      <main className="flex-1">
        {/* ── 1. Hero Section ── */}
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center">
          <img
            src="/images/hero.jpeg"
            alt="Arreglos florales Florería Kattya"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Light overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Centered content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h1 className="font-display italic text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-white text-center max-w-[90%] md:max-w-[700px] lg:max-w-[900px] leading-tight">
              No vendemos flores, solo obras de arte
            </h1>
            <p className="font-body text-[16px] md:text-[20px] text-white/80 text-center max-w-[90%] md:max-w-[700px]">
              Desde 1973, creando historias
            </p>
            <Link
              href="/catalogo"
              className="font-body flex items-center gap-8 bg-[var(--primary)] text-white text-base font-medium px-6 py-3 md:px-10 md:py-4 rounded-sm"
            >
              Ver Catálogo →
            </Link>
          </div>
        </section>

        {/* ── 2. Intro Section ── */}
        <section className="bg-[var(--bg-cream)] px-6 md:px-16 lg:px-[120px] xl:px-[200px] py-10 md:py-16 flex flex-col items-center gap-4">
          <h2 className="font-display italic text-[28px] md:text-[36px] text-[var(--text-primary)] text-center">
            Tradición Floral desde 1973
          </h2>
          <div className="w-[60px] h-[2px] bg-[var(--primary)]" />
          <p className="font-body text-[16px] text-[var(--text-secondary)] text-center max-w-[700px] leading-[1.6]">
            Por más de 53 años, Florería Kattya ha sido parte de la historia de las familias
            saltillenses. La tradición, la calidad, el servicio y el buen gusto, nos ha distinguido.
          </p>
        </section>

        {/* ── 3. Featured Categories ── */}
        <section className="bg-[var(--bg-white)] px-4 md:px-8 xl:px-14 py-16 flex flex-col items-center gap-10">
          <h2 className="font-display italic text-[36px] text-[var(--text-primary)] text-center">
            Nuestras Especialidades
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {CATEGORIES.map((card) => (
              <div key={card.title} className="rounded-sm overflow-hidden">
                <div className="h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden rounded-t-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[var(--bg-cream)] px-4 py-5 flex flex-col gap-2">
                  <h3 className="font-display italic text-[20px] text-[var(--text-primary)]">
                    {card.title}
                  </h3>
                  <p className="font-body text-[13px] text-[var(--text-secondary)] leading-[1.5] whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. How It Works ── */}
        <section className="bg-[var(--bg-soft-pink)] px-4 md:px-8 xl:px-14 py-16 flex flex-col items-center gap-10">
          <h2 className="font-display italic text-[28px] md:text-[36px] text-[var(--text-primary)] text-center">
            ¿Cómo Ordenar?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex flex-col items-center gap-3 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0">
                    <Icon size={28} color="white" aria-hidden="true" />
                  </div>
                  <p className="font-body text-[16px] font-semibold text-center text-[var(--text-primary)]">
                    {step.label}
                  </p>
                  <p className="font-body text-[14px] text-center text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. Testimonial / Quote ── */}
        <section className="bg-[var(--bg-dark)] px-6 md:px-16 lg:px-[120px] py-12 md:py-20 flex flex-col items-center gap-6">
          <span
            className="font-display italic text-[60px] md:text-[90px] lg:text-[120px] text-[var(--primary)] select-none leading-[0.5]"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="font-display italic text-[22px] md:text-[28px] lg:text-[32px] text-white text-center max-w-[95%] md:max-w-[800px] leading-[1.4]">
            Cada arreglo tiene historia, forma, estilo y dedicación
          </blockquote>
          <div className="w-[60px] h-[2px] bg-[var(--primary)]" />
          <p className="font-body text-[14px] text-[var(--text-muted)] text-center">
            — Florería Kattya, desde 1973
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
