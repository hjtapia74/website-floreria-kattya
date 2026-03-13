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
    <div className="min-h-screen flex flex-col">
      <Header activePage="/precios" />

      <main className="flex-1">

        {/* ── 1. Page Title ─────────────────────────────────────────── */}
        <section className="bg-[var(--bg-cream)] px-6 md:px-14 py-10 md:py-16 flex flex-col items-center gap-4">
          <h1 className="font-display italic font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[var(--text-primary)] text-center m-0">
            Nuestros Precios
          </h1>

          <div
            className="w-[60px] h-[2px] bg-[var(--primary)] mt-4"
            aria-hidden="true"
          />

          <p className="font-body text-[16px] md:text-[18px] text-[var(--text-secondary)] text-center m-0">
            Transparencia y calidad en cada arreglo
          </p>
        </section>

        {/* ── 2. Pricing Table ──────────────────────────────────────── */}
        <section className="bg-[var(--bg-white)] px-4 md:px-10 lg:px-14 py-8 md:py-12">
          <div className="overflow-x-auto">
            <div
              role="table"
              aria-label="Lista de precios"
              className="w-full min-w-[500px]"
            >
              {/* Header row */}
              <div
                role="row"
                className="flex font-body bg-[var(--bg-dark)] px-4 md:px-6 py-4"
              >
                <span
                  role="columnheader"
                  className="flex-1 text-[13px] font-semibold text-white"
                >
                  Producto
                </span>
                <span
                  role="columnheader"
                  className="flex-1 text-[13px] font-semibold text-white"
                >
                  Tama&ntilde;o
                </span>
                <span
                  role="columnheader"
                  className="flex-1 text-[13px] font-semibold text-white text-right"
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
                    className={[
                      "flex font-body items-center px-4 md:px-6 py-[14px]",
                      isCreamRow ? "bg-[var(--bg-cream)]" : "bg-[var(--bg-white)]",
                      row.isLastRow ? "" : "border-b border-[var(--border)]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Product column */}
                    <span
                      role="cell"
                      className={[
                        "flex-1",
                        row.isGroupHeader
                          ? "text-[15px] font-display italic font-semibold text-[var(--text-primary)]"
                          : "text-[14px] font-body font-normal text-[var(--text-muted)]",
                      ].join(" ")}
                    >
                      {row.product}
                    </span>

                    {/* Size column */}
                    <span
                      role="cell"
                      className="flex-1 text-[14px] text-[var(--text-secondary)]"
                    >
                      {row.size}
                    </span>

                    {/* Price column */}
                    <span
                      role="cell"
                      className={[
                        "flex-1 text-[14px] font-semibold text-right",
                        row.isPriceAccent
                          ? "text-[var(--primary)]"
                          : "text-[var(--text-primary)]",
                      ].join(" ")}
                    >
                      {row.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. Disclaimer ─────────────────────────────────────────── */}
        <section className="bg-[var(--bg-white)] px-6 md:px-14 py-6 md:py-8 flex justify-center">
          <p className="font-body text-[13px] text-[var(--text-muted)] text-center m-0">
            Precios sujetos a cambio sin previo aviso. M&aacute;s env&iacute;o. M&aacute;s IVA.
          </p>
        </section>

        {/* ── 4. CTA Section ────────────────────────────────────────── */}
        <section className="bg-[var(--bg-soft-pink)] px-6 md:px-14 py-10 md:py-16 flex flex-col items-center gap-6">
          <h2 className="font-display italic font-bold text-[28px] md:text-[36px] text-[var(--text-primary)] text-center m-0">
            &iquest;Listo para ordenar?
          </h2>

          <p className="font-body text-[16px] text-[var(--text-secondary)] text-center m-0">
            Cont&aacute;ctanos por WhatsApp y te atendemos de inmediato
          </p>

          <a
            href="https://wa.me/528444550296"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] font-body bg-[var(--secondary)] text-white px-10 py-4 md:px-12 md:py-4 rounded-full text-[15px] font-medium no-underline transition-opacity duration-200 ease-in-out hover:opacity-80"
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
