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

  const inputStyle: React.CSSProperties = {
    height: "44px",
    borderRadius: "8px",
    backgroundColor: "var(--bg-white)",
    border: "1px solid var(--border)",
    padding: "0 16px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    color: "var(--text-primary)",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header activePage="/contacto" />

      <main style={{ flex: 1 }}>

        {/* ── 1. Contact Hero ──────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center"
          style={{
            backgroundColor: "var(--bg-cream)",
            height: "280px",
            padding: "80px 120px",
            gap: "16px",
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--primary)",
              letterSpacing: "2px",
            }}
          >
            ESTAMOS PARA TI
          </span>

          <h1
            className="font-display"
            style={{
              fontSize: "52px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            Cont&aacute;ctanos
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Estamos listos para ayudarte a crear el arreglo perfecto. Esc&iacute;benos o vis&iacute;tanos.
          </p>
        </section>

        {/* ── 2. Contact Main ──────────────────────────────────────────── */}
        <section
          className="flex flex-row"
          style={{
            backgroundColor: "var(--bg-white)",
            padding: "60px 120px",
            gap: "48px",
          }}
        >
          {/* Left column — Contact info cards */}
          <div
            className="flex flex-col"
            style={{ flex: 1, gap: "24px" }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "28px",
                fontStyle: "italic",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Informaci&oacute;n de Contacto
            </h2>

            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex flex-row items-center"
                style={{
                  borderRadius: "12px",
                  padding: "24px",
                  gap: "16px",
                  backgroundColor: card.cardBg,
                }}
              >
                {/* Icon container */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "9999px",
                    backgroundColor: card.iconBg,
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col" style={{ gap: "4px" }}>
                  <span
                    className="font-body"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="font-body"
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {card.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — Contact form */}
          <div style={{ flex: 1 }}>
            <div
              className="flex flex-col"
              style={{
                backgroundColor: "var(--bg-cream)",
                borderRadius: "16px",
                padding: "40px",
                gap: "20px",
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: "28px",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Env&iacute;anos un mensaje
              </h2>

              <p
                className="font-body"
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Completa el formulario y te responderemos a la brevedad.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col"
                style={{ gap: "20px" }}
                noValidate
              >
                {/* Nombre */}
                <div className="flex flex-col" style={{ gap: "6px" }}>
                  <label
                    htmlFor="nombre"
                    className="font-body"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
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
                    style={{
                      ...inputStyle,
                      // placeholder color handled via CSS below
                    }}
                    className="contact-input"
                    required
                  />
                </div>

                {/* Telefono */}
                <div className="flex flex-col" style={{ gap: "6px" }}>
                  <label
                    htmlFor="telefono"
                    className="font-body"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
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
                    style={inputStyle}
                    className="contact-input"
                  />
                </div>

                {/* Ocasion */}
                <div className="flex flex-col" style={{ gap: "6px" }}>
                  <label
                    htmlFor="ocasion"
                    className="font-body"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    Tipo de ocasi&oacute;n
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="ocasion"
                      name="ocasion"
                      value={form.ocasion}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        WebkitAppearance: "none",
                        paddingRight: "40px",
                        cursor: "pointer",
                        color: form.ocasion ? "var(--text-primary)" : "var(--text-muted)",
                      }}
                      className="contact-input"
                    >
                      <option value="" disabled>
                        Selecciona una ocasi&oacute;n
                      </option>
                      {OCASIONES.map((o) => (
                        <option key={o} value={o} style={{ color: "var(--text-primary)" }}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <div
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "var(--text-muted)",
                      }}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col" style={{ gap: "6px" }}>
                  <label
                    htmlFor="mensaje"
                    className="font-body"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
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
                    style={{
                      height: "100px",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-white)",
                      border: "1px solid var(--border)",
                      padding: "16px",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      color: "var(--text-primary)",
                      outline: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                    className="contact-input"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center font-body"
                  style={{
                    width: "100%",
                    height: "48px",
                    backgroundColor: "var(--primary)",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    gap: "8px",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  }}
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
          className="flex flex-col items-center"
          style={{
            backgroundColor: "var(--bg-white)",
            padding: "0 120px 60px 120px",
            gap: "24px",
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--text-primary)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Encu&eacute;ntranos
          </h2>

          {/* Map placeholder */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              borderRadius: "16px",
              height: "350px",
              width: "100%",
              backgroundColor: "#E5E5E5",
              border: "1px solid var(--border)",
              gap: "12px",
            }}
          >
            <MapPin
              size={48}
              aria-hidden="true"
              style={{ color: "var(--text-muted)" }}
            />
            <p
              className="font-body"
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                textAlign: "center",
                margin: 0,
                maxWidth: "360px",
              }}
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
      `}</style>
    </div>
  );
}
