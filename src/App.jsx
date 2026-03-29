import { useState } from "react";

const portfolio = [
  {
    title: "Evento elegante",
    category: "Eventi",
    description:
      "Concept visivo, coordinazione estetica e dettagli curati per un’esperienza raffinata.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Photo editing editoriale",
    category: "Foto",
    description:
      "Ritocco, luce, correzione colore e valorizzazione estetica dell’immagine.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Travel experience",
    category: "Viaggi",
    description:
      "Itinerari curati su misura, con attenzione allo stile e all’esperienza complessiva.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brand content design",
    category: "Design",
    description:
      "Visual coordinati, contenuti creativi e materiali grafici con identità chiara.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Small event styling",
    category: "Eventi",
    description:
      "Progetti intimi ma curati, con una visione armoniosa e dettagli memorabili.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Website updates",
    category: "Web",
    description:
      "Aggiornamento portfolio, immagini, testi e mantenimento estetico della pagina.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
];


const filters = ["Tutti", "Design", "Foto", "Eventi", "Viaggi", "Web"];

export default function App() {
  const [filter, setFilter] = useState("Tutti");

  const filtered =
    filter === "Tutti"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#f7f2ee] text-[#241d1a]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(193,154,107,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex items-center justify-between rounded-full border border-[#e8dacf] bg-white/70 px-5 py-3 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8e7462]">
                Studio creativo
              </p>
              <p className="mt-1 text-sm font-medium">Martina Bruzzi</p>
            </div>
            <a
              href="#contatti"
              className="rounded-full bg-[#241d1a] px-5 py-2.5 text-sm text-white transition hover:opacity-90"
            >
              Contattami
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-10">
          <div>
            <p className="inline-block rounded-full border border-[#dbcabd] bg-white/80 px-4 py-2 text-sm text-[#7a6454]">
              Design · Foto · Eventi · Viaggi
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              Creo progetti visivi eleganti, curati e pieni di personalità.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4c]">
              Mi occupo di design creativo, editing fotografico, pianificazione
              di eventi e viaggi, con uno stile raffinato, sensibile e altamente
              visivo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="rounded-full bg-[#241d1a] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-[1px]"
              >
                Scopri il portfolio
              </a>
              <a
                href="#servizi"
                className="rounded-full border border-[#cbb8aa] bg-white/80 px-6 py-3 text-sm font-medium text-[#241d1a] transition hover:bg-white"
              >
                Vedi i servizi
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                alt="Evento"
                className="h-[430px] w-full object-cover"
              />
            </div>

            <div className="mt-10 space-y-4 sm:mt-14">
              <div className="overflow-hidden rounded-[28px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Photo editing"
                  className="h-48 w-full object-cover"
                />
              </div>

              <div className="rounded-[28px] border border-[#eadfd5] bg-white/80 p-6 shadow-lg backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8e7462]">
                  Approccio
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug">
                  Bellezza, coerenza visiva e attenzione autentica ai dettagli.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
                  Una pagina pensata per trasmettere stile, attrarre clienti e
                  raccontare il valore di ogni progetto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-[#8e7462]">
            Servizi
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Servizi creativi pensati per un’immagine curata e memorabile
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Design creativo</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Grafica, inviti, contenuti visuali, branding e materiali
              personalizzati.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Editing fotografico</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Ritocco, correzione colore, armonia visiva e miglioramento
              estetico.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Eventi & viaggi</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Esperienze curate, planning elegante e idee su misura.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Manutenzione sito</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Aggiornamenti di portfolio, immagini, testi e refresh della pagina.
            </p>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="border-y border-[#eadfd5] bg-white/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#8e7462]">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Una selezione di lavori e mondi visivi
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === f
                      ? "bg-[#241d1a] text-white"
                      : "border border-[#d7c3b2] bg-white text-[#5f4a3c]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[30px] border border-[#eadfd5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8e7462]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-[#241d1a] p-8 text-white shadow-2xl sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Facile da aggiornare
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Una base elegante, ma pensata per crescere
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Aggiunta semplice di nuovi progetti
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Cambio rapido di testi e immagini
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Portfolio flessibile e facile da mantenere
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Perfetta base per una futura versione aún más pro
              </div>
            </div>
          </div>
          
          <div
            id="contatti"
            className="rounded-[32px] border border-[#eadfd5] bg-white p-8 shadow-sm sm:p-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#8e7462]">
              Contatti
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Parliamo del tuo progetto
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6f5a4c]">
              Qui puoi inserire email, Instagram, WhatsApp o un modulo contatti.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-[#f8f1eb] px-4 py-4 text-sm text-[#4c392d]">
                martina@example.com
              </div>
              <div className="rounded-2xl bg-[#f8f1eb] px-4 py-4 text-sm text-[#4c392d]">
                @martinabruzzi
              </div>
              <div className="rounded-2xl bg-[#f8f1eb] px-4 py-4 text-sm text-[#4c392d]">
                Servizi disponibili anche da remoto
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#eadfd5] bg-white/60">
  <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
    <p className="text-sm text-[#6f5a4c]">
      © 2026 Martina Bruzzi — Design, photo editing, eventi e viaggi.
    </p>
  </div>
</footer>
    </div>
    
  );
}