"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Mail,
  MapPin,
  Facebook,
  Clock3,
  ChevronDown,
  Send,
} from "lucide-react";

interface ContactCard {
  icon: React.ReactNode;
  iconBg: string;
  cardBg: string;
  label: string;
  value: string;
}

interface FormState {
  nombre: string;
  telefono: string;
  ocasion: string;
  mensaje: string;
}

const OCASIONES = [
  "Cumpleaños",
  "Aniversario",
  "Boda",
  "XV Años",
  "Graduación",
  "Día de la Madre",
  "San Valentín",
  "Funeral / Condolencias",
  "Día de Muertos",
  "Otro",
];

const CONTACT_CARDS: ContactCard[] = [
  {
    icon: <MessageCircle size={22} color="#FFFFFF" aria-hidden="true" />,
    iconBg: "var(--primary)",
    cardBg: "var(--bg-soft-pink)",
    label: "WhatsApp",
    value: "844 455 02 96  •  844 185 07 36",
  },
  {
    icon: <Mail size={22} color="#FFFFFF" aria-hidden="true" />,
    iconBg: "var(--secondary)",
    cardBg: "var(--bg-cream)",
    label: "Correo Electrónico",
    value: "ofe.273@gmail.com",
  },
  {
    icon: <MapPin size={22} color="#FFFFFF" aria-hidden="true" />,
    iconBg: "var(--primary)",
    cardBg: "var(--bg-soft-pink)",
    label: "Dirección",
    value: "Obregón Sur 165-1, Zona Centro, Saltillo, Coahuila, México",
  },
  {
    icon: <Facebook size={22} color="#FFFFFF" aria-hidden="true" />,
    iconBg: "var(--secondary)",
    cardBg: "var(--bg-cream)",
    label: "Facebook",
    value: "Florería Kattya",
  },
  {
    icon: <Clock3 size={22} color="#FFFFFF" aria-hidden="true" />,
    iconBg: "var(--primary)",
    cardBg: "var(--bg-soft-pink)",
    label: "Horario",
    value: "Lunes a Sábado: 9:00 AM - 7:00 PM",
  },
];

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    ocasion: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const phone = "528444550296";
    const text = encodeURIComponent(
      `Hola, me comunico desde el sitio web.\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nOcasión: ${form.ocasion || "No especificada"}\n\nMensaje:\n${form.mensaje}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="/contacto" />

      <main className="flex-1">

        {/* ── 1. Contact Hero ──────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center gap-4 min-h-[200px] md:min-h-[280px] px-6 md:px-14 lg:px-[80px] xl:px-[120px] py-10 md:py-20"
          style={{ backgroundColor: "var(--bg-cream)" }}
        >
          <span
            className="font-body text-[13px] font-semibold tracking-[2px]"
            style={{ color: "var(--primary)" }}
          >
            ESTAMOS PARA TI
          </span>

          <h1
            className="font-display text-[32px] md:text-[42px] lg:text-[52px] italic font-bold m-0"
            style={{ color: "var(--text-primary)" }}
          >
            Cont&aacute;ctanos
          </h1>

          <p
            className="font-body text-[18px] text-center leading-[1.7] m-0 max-w-[90%] md:max-w-[600px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Estamos listos para ayudarte a crear el arreglo perfecto. Esc&iacute;benos o vis&iacute;tanos.
          </p>
        </section>

        {/* ── 2. Contact Main ──────────────────────────────────────────── */}
        <section
          className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-[80px] xl:px-[120px] py-8 md:py-14 gap-8 md:gap-12"
          style={{ backgroundColor: "var(--bg-white)" }}
        >
          {/* Left column — Contact info cards */}
          <div className="flex flex-col gap-6 w-full lg:flex-1">
            <h2
              className="font-display text-[28px] italic font-bold m-0"
              style={{ color: "var(--text-primary)" }}
            >
              Informaci&oacute;n de Contacto
            </h2>

            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex flex-row items-center rounded-xl p-6 gap-4"
                style={{ backgroundColor: card.cardBg }}
              >
                {/* Icon container */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                  style={{ backgroundColor: card.iconBg }}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <span
                    className="font-body text-[14px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="font-body text-[14px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — Contact form */}
          <div className="w-full lg:flex-1">
            <div
              className="flex flex-col rounded-2xl p-6 md:p-10 gap-5"
              style={{ backgroundColor: "var(--bg-cream)" }}
            >
              <h2
                className="font-display text-[28px] italic font-bold m-0"
                style={{ color: "var(--text-primary)" }}
              >
                Env&iacute;anos un mensaje
              </h2>

              <p
                className="font-body text-[14px] leading-[1.5] m-0"
                style={{ color: "var(--text-secondary)" }}
              >
                Completa el formulario y te responderemos a la brevedad.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nombre"
                    className="font-body text-[13px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="contact-input h-11 rounded-lg px-4 text-[14px] font-body w-full box-border outline-none border"
                    style={{
                      backgroundColor: "var(--bg-white)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    required
                  />
                </div>

                {/* Telefono */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="telefono"
                    className="font-body text-[13px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Tel&eacute;fono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Tu número de teléfono"
                    className="contact-input h-11 rounded-lg px-4 text-[14px] font-body w-full box-border outline-none border"
                    style={{
                      backgroundColor: "var(--bg-white)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Ocasion */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ocasion"
                    className="font-body text-[13px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Tipo de ocasi&oacute;n
                  </label>
                  <div className="relative">
                    <select
                      id="ocasion"
                      name="ocasion"
                      value={form.ocasion}
                      onChange={handleChange}
                      className="contact-input h-11 rounded-lg px-4 pr-10 text-[14px] font-body w-full box-border outline-none border appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "var(--bg-white)",
                        borderColor: "var(--border)",
                        color: form.ocasion ? "var(--text-primary)" : "var(--text-muted)",
                      }}
                    >
                      <option value="" disabled>
                        Selecciona una ocasi&oacute;n
                      </option>
                      {OCASIONES.map((o) => (
                        <option
                          key={o}
                          value={o}
                          style={{ color: "var(--text-primary)" }}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="mensaje"
                    className="font-body text-[13px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas..."
                    rows={4}
                    className="contact-input rounded-lg p-4 text-[14px] font-body w-full box-border outline-none border resize-y min-h-[100px]"
                    style={{
                      backgroundColor: "var(--bg-white)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-submit flex items-center justify-center gap-2 font-body w-full h-12 rounded-lg border-none text-[15px] font-medium cursor-pointer text-white transition-opacity duration-200"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  <Send size={18} aria-hidden="true" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ── 3. Map Section ───────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center gap-6 px-4 md:px-10 lg:px-[80px] xl:px-[120px] pb-10 md:pb-14"
          style={{ backgroundColor: "var(--bg-white)" }}
        >
          <h2
            className="font-display text-[28px] italic font-bold text-center m-0"
            style={{ color: "var(--text-primary)" }}
          >
            Encu&eacute;ntranos
          </h2>

          {/* Map placeholder */}
          <div
            className="flex flex-col items-center justify-center gap-3 rounded-2xl h-[350px] w-full border"
            style={{
              backgroundColor: "#E5E5E5",
              borderColor: "var(--border)",
            }}
          >
            <MapPin
              size={48}
              aria-hidden="true"
              style={{ color: "var(--text-muted)" }}
            />
            <p
              className="font-body text-[14px] text-center m-0 max-w-[360px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Obreg&oacute;n Sur 165-1, Zona Centro, Saltillo, Coahuila, M&eacute;xico
            </p>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        .contact-input::placeholder {
          color: var(--text-muted);
        }
        .contact-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-light);
        }
        .contact-submit:hover {
          opacity: 0.88;
        }
      `}</style>
    </div>
  );
}
