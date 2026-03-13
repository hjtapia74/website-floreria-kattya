import Link from "next/link";
import { MessageCircle, Headphones, ClipboardList, CreditCard, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  {
    title: "Ramos",
    description: "Ramos de rosas frescas en presentaciones de 12, 24 y 50 piezas",
    image: "https://images.unsplash.com/photo-1642564452659-d9d37b9439eb?w=1080",
  },
  {
    title: "Arreglos en Florero",
    description: "Elegantes arreglos en florero con rosas y flores mixtas",
    image: "https://images.unsplash.com/photo-1651571646480-04ed8876925a?w=1080",
  },
  {
    title: "Canastas",
    description: "Canastas florales de 12 a 100 flores para toda ocasión",
    image: "https://images.unsplash.com/photo-1749305577446-6d9289e9587f?w=1080",
  },
  {
    title: "Arreglos para Eventos",
    description: "Decoración floral para bodas, quinceañeras y eventos especiales",
    image: "https://images.unsplash.com/photo-1758810741375-0fea503c9cbd?w=1080",
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
            src="https://images.unsplash.com/photo-1759031755373-7567f0f30b26?w=1080"
            alt="Arreglos florales Florería Kattya"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Centered content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h1 className="font-display italic text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-white text-center max-w-[90%] md:max-w-[700px] lg:max-w-[900px] leading-tight">
              No vendemos flores, sino arte
            </h1>
            <p className="font-body text-[16px] md:text-[20px] text-white/80 text-center max-w-[90%] md:max-w-[700px]">
              Desde 1973 creando arreglos florales únicos en Saltillo
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
            Por más de 53 años, Florería Kattya ha sido parte de los momentos más importantes de
            las familias saltillenses. Cada arreglo que creamos lleva consigo la dedicación
            artesanal que nos ha distinguido desde nuestros inicios en el corazón de Saltillo.
          </p>
        </section>

        {/* ── 3. Featured Categories ── */}
        <section className="bg-[var(--bg-white)] px-4 md:px-8 xl:px-14 py-16 flex flex-col items-center gap-10">
          <h2 className="font-display italic text-[36px] text-[var(--text-primary)] text-center">
            Nuestras Especialidades
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
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
                  <p className="font-body text-[13px] text-[var(--text-secondary)] leading-[1.5]">
                    {card.description}
                  </p>
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
                  <p className="font-body text-[14px] font-semibold text-center text-[var(--text-primary)]">
                    {step.label}
                  </p>
                  <p className="font-body text-[12px] text-center text-[var(--text-secondary)]">
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
