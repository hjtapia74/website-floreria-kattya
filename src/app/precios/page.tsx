import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

interface PricingRow {
  product: string;
  isGroupHeader: boolean;
  size: string;
  price: string;
  isLastRow?: boolean;
  isPriceAccent?: boolean;
}

const PRICING_ROWS: PricingRow[] = [
  { product: "Ramos", isGroupHeader: true,  size: "12 rosas",     price: "$650"   },
  { product: "Ramos", isGroupHeader: false, size: "24 rosas",     price: "$900"   },
  { product: "Ramos", isGroupHeader: false, size: "50 rosas",     price: "$1,600" },
  { product: "Canastas / Arreglo / Florero", isGroupHeader: true,  size: "12 rosas",  price: "$750"   },
  { product: "Canastas / Arreglo / Florero", isGroupHeader: false, size: "24 rosas",  price: "$1,300" },
  { product: "Canastas / Arreglo / Florero", isGroupHeader: false, size: "50 rosas",  price: "$2,500" },
  { product: "Canastas / Arreglo / Florero", isGroupHeader: false, size: "100 rosas", price: "$4,700" },
  { product: "Cajas de Madera", isGroupHeader: true,  size: "Chica",   price: "$1,100" },
  { product: "Cajas de Madera", isGroupHeader: false, size: "Mediana", price: "$1,600" },
  { product: "Cajas de Madera", isGroupHeader: false, size: "Grande",  price: "$2,200" },
  { product: "Ofrenda", isGroupHeader: true,  size: "Chica",   price: "$1,300" },
  { product: "Ofrenda", isGroupHeader: false, size: "Mediana", price: "$1,600" },
  { product: "Ofrenda", isGroupHeader: false, size: "Grande",  price: "$2,500" },
  { product: "Corona", isGroupHeader: true,  size: "Mediana", price: "$2,500" },
  { product: "Corona", isGroupHeader: false, size: "Grande",  price: "$5,000" },
  {
    product: "Arreglo de Fruta",
    isGroupHeader: true,
    size: "Sobre pedido",
    price: "Cotizar",
    isPriceAccent: true,
    isLastRow: true,
  },
];

export default function PreciosPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header activePage="/precios" />

      <main style={{ flex: 1 }}>

        {/* ── 1. Page Title ─────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--bg-cream)",
            padding: "64px 56px",
          }}
          className="flex flex-col items-center"
        >
          <h1
            className="font-display"
            style={{
              fontSize: "48px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--text-primary)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Nuestros Precios
          </h1>

          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "var(--primary)",
              marginTop: "16px",
            }}
            aria-hidden="true"
          />

          <p
            className="font-body"
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              textAlign: "center",
              margin: "16px 0 0",
            }}
          >
            Transparencia y calidad en cada arreglo
          </p>
        </section>

        {/* ── 2. Pricing Table ──────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--bg-white)",
            padding: "48px 56px",
          }}
        >
          <div
            role="table"
            aria-label="Lista de precios"
            style={{ width: "100%" }}
          >
            {/* Header row */}
            <div
              role="row"
              className="flex font-body"
              style={{
                backgroundColor: "var(--bg-dark)",
                padding: "16px 24px",
              }}
            >
              <span
                role="columnheader"
                style={{
                  flex: 1,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Producto
              </span>
              <span
                role="columnheader"
                style={{
                  flex: 1,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Tamaño
              </span>
              <span
                role="columnheader"
                style={{
                  flex: 1,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textAlign: "right",
                }}
              >
                Precio (MXN)
              </span>
            </div>

            {/* Data rows */}
            {PRICING_ROWS.map((row, index) => {
              const isCreamRow = index % 2 !== 0;
              return (
                <div
                  key={`${row.product}-${row.size}`}
                  role="row"
                  className="flex font-body"
                  style={{
                    backgroundColor: isCreamRow
                      ? "var(--bg-cream)"
                      : "var(--bg-white)",
                    padding: "14px 24px",
                    borderBottom: row.isLastRow
                      ? "none"
                      : "1px solid var(--border)",
                    alignItems: "center",
                  }}
                >
                  {/* Product column */}
                  <span
                    role="cell"
                    style={{
                      flex: 1,
                      fontSize: row.isGroupHeader ? "15px" : "14px",
                      fontFamily: row.isGroupHeader
                        ? '"Playfair Display", serif'
                        : "Inter, sans-serif",
                      fontStyle: row.isGroupHeader ? "italic" : "normal",
                      fontWeight: row.isGroupHeader ? 600 : 400,
                      color: row.isGroupHeader
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                    }}
                  >
                    {row.product}
                  </span>

                  {/* Size column */}
                  <span
                    role="cell"
                    style={{
                      flex: 1,
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {row.size}
                  </span>

                  {/* Price column */}
                  <span
                    role="cell"
                    style={{
                      flex: 1,
                      fontSize: "14px",
                      fontWeight: 600,
                      color: row.isPriceAccent
                        ? "var(--primary)"
                        : "var(--text-primary)",
                      textAlign: "right",
                    }}
                  >
                    {row.price}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 3. Disclaimer ─────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--bg-white)",
            padding: "32px 56px",
          }}
          className="flex justify-center"
        >
          <p
            className="font-body"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Precios sujetos a cambio sin previo aviso. M&aacute;s env&iacute;o. M&aacute;s IVA.
          </p>
        </section>

        {/* ── 4. CTA Section ────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--bg-soft-pink)",
            padding: "64px 56px",
          }}
          className="flex flex-col items-center"
        >
          <h2
            className="font-display"
            style={{
              fontSize: "36px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--text-primary)",
              textAlign: "center",
              margin: 0,
            }}
          >
            &iquest;Listo para ordenar?
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              textAlign: "center",
              margin: "24px 0 0",
            }}
          >
            Cont&aacute;ctanos por WhatsApp y te atendemos de inmediato
          </p>

          <a
            href="https://wa.me/528444550296"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-body"
            style={{
              backgroundColor: "var(--secondary)",
              color: "#FFFFFF",
              padding: "16px 40px",
              borderRadius: "9999px",
              gap: "10px",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              marginTop: "24px",
              transition: "opacity 0.2s ease",
            }}
            aria-label="Ordenar por WhatsApp"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Ordenar por WhatsApp
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
}
