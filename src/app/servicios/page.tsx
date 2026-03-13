import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Gift,
  Heart,
  Cloud,
  Flower2,
  Sparkles,
  Users,
  MessageCircle,
} from "lucide-react";

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Gift,
    title: "Ocasiones Especiales",
    description:
      "Cumpleaños, aniversarios, regalos para amigos y familia. Cada ocasión merece un arreglo único que exprese tus sentimientos.",
    image: "https://images.unsplash.com/photo-1651594860590-1df53a23fe1c?w=1080",
  },
  {
    icon: Heart,
    title: "Bodas y Eventos",
    description:
      "Bodas, quinceañeras, graduaciones y eventos sociales. Diseñamos la decoración floral completa para tu celebración.",
    image: "https://images.unsplash.com/photo-1718287609592-2d02c43d58a8?w=1080",
  },
  {
    icon: Cloud,
    title: "Servicios Funerarios",
    description:
      "Coronas fúnebres y ofrendas. Arreglos de flores blancas elaborados con respeto y delicadeza para momentos difíciles.",
    image: "https://images.unsplash.com/photo-1663174702647-da5633a1de49?w=1080",
  },
  {
    icon: Flower2,
    title: "Diseño de Jardines",
    description:
      "Diseñamos y creamos jardines personalizados que transforman tus espacios exteriores en verdaderos oasis de belleza natural.",
    image: "https://images.unsplash.com/photo-1597130515429-a8aa93b4cf9e?w=1080",
  },
  {
    icon: Sparkles,
    title: "Decoración de Eventos",
    description:
      "Decoración floral integral para cualquier tipo de evento. Centros de mesa, arcos, ambientación y cada detalle floral.",
    image: "https://images.unsplash.com/photo-1768508949122-040d9ac82032?w=1080",
  },
  {
    icon: Users,
    title: "Consulta Personal",
    description:
      "Cada pedido incluye una consulta personalizada. Te asesoramos para crear el arreglo perfecto para tu ocasión y presupuesto.",
    image: "https://images.unsplash.com/photo-1728566835693-0b8abd57e7ee?w=1080",
  },
];

export default function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-white)]">
      <Header activePage="/servicios" />

      <main className="flex-1">
        {/* ── 1. Services Hero ── */}
        <section className="flex items-center justify-center bg-[var(--bg-cream)] min-h-[200px] md:min-h-[300px] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-20">
          <div className="flex flex-col items-center gap-4">
            <span className="font-body font-semibold text-[13px] tracking-[2px] text-[var(--primary)]">
              LO QUE HACEMOS
            </span>
            <h1 className="font-display italic text-[32px] md:text-[42px] lg:text-[52px] text-[var(--text-primary)]">
              Nuestros Servicios
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-[var(--text-secondary)] text-center max-w-[90%] md:max-w-[650px]">
              Desde un ramo especial hasta la decoración completa de tu evento,
              estamos para crear algo único para ti.
            </p>
          </div>
        </section>

        {/* ── 2. Services Grid ── */}
        <section className="bg-[var(--bg-white)] flex flex-col gap-6 px-4 md:px-10 lg:px-[80px] xl:px-[120px] py-8 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-[16px] overflow-hidden flex flex-col bg-[var(--bg-white)] border border-[var(--border)]"
                >
                  {/* Card image */}
                  <div className="h-[180px] md:h-[220px] overflow-hidden rounded-t-[16px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-3 p-6">
                    <Icon
                      size={28}
                      className="text-[var(--primary)]"
                      aria-hidden="true"
                    />
                    <h2 className="font-display italic text-[22px] text-[var(--text-primary)]">
                      {service.title}
                    </h2>
                    <p className="font-body text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 3. CTA Section ── */}
        <section className="bg-[var(--bg-soft-pink)] flex items-center justify-center min-h-[200px] md:min-h-[300px] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-12 md:py-20">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-display italic text-[28px] md:text-[36px] text-[var(--text-primary)]">
              ¿Tienes un evento especial?
            </h2>
            <p className="font-body text-[18px] text-[var(--text-secondary)]">
              Platícanos tu idea y te ayudamos a hacerla realidad con flores
            </p>
            <a
              href="https://wa.me/528444550296"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] bg-[var(--primary)] text-white font-body font-medium rounded-full px-8 py-3 md:px-10 md:py-4"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Cotízanos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
