import Portfolio from "../components/Portfolio";

export default function Home() {
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
              <p className="mt-1 text-sm font-medium text-[#241d1a]">
                Martina Bruzzi
              </p>
            </div>

            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-full bg-[#241d1a] px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:opacity-90"
            >
               <span className="text-white">Contattami</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-10">
          <div>
            <p className="inline-block rounded-full border border-[#dbcabd] bg-white/80 px-4 py-2 text-sm text-[#7a6454]">
              Event Design · Branding · Visual Content
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#241d1a] sm:text-6xl xl:text-7xl">
              Design elegante per eventi, brand e contenuti visivi
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4c]">
              Creo esperienze visive curate nei dettagli, tra estetica e
              funzionalità. Dalle identità per eventi ai contenuti grafici e
              fotografici, ogni progetto nasce con attenzione, gusto e sensibilità.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full bg-[#241d1a] px-6 py-3 text-sm font-medium text-white no-underline shadow-lg shadow-black/10 transition hover:-translate-y-[1px]"
              >
                <span className="text-white">Scopri il portfolio</span>
              </a>

              <a
                href="#servizi"
                className="inline-flex items-center justify-center rounded-full border border-[#cbb8aa] bg-white/80 px-6 py-3 text-sm font-medium text-[#241d1a] no-underline transition hover:bg-white"
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
                <p className="mt-3 text-xl font-semibold leading-snug text-[#241d1a]">
                  Bellezza, coerenza visiva e attenzione autentica ai dettagli.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
                  Una direzione creativa sensibile e versatile, pensata per dare
                  forma a progetti che si sentano curati, armoniosi e memorabili.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#241d1a] sm:text-4xl">
            Servizi creativi pensati per un’immagine curata e memorabile
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#241d1a]">Event Design</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Inviti, menu, tableau, coordinati grafici e materiali visivi per
              matrimoni, eventi privati e occasioni speciali.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#241d1a]">
              Brand & Graphic Design
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Loghi, identità visive, materiali grafici, contenuti per social e
              progetti personalizzati per piccoli brand e attività.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#241d1a]">
              Photo Editing & Visual Content
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Editing fotografico, selezione visiva, impaginazione e contenuti
              creativi per comunicare con più stile e coerenza.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5d6ca] bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#241d1a]">Eventi & Viaggi</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f5a4c]">
              Supporto creativo e organizzativo per eventi, itinerari e piccoli
              progetti speciali da costruire con cura e gusto estetico.
            </p>
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8e7462]">
              Chi sono
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#241d1a] sm:text-4xl">
              Uno sguardo creativo, elegante e profondamente curato
            </h2>
            <p className="mt-6 text-base leading-8 text-[#6f5a4c]">
              Sono Martina, una creativa appassionata di design e dettagli.
            </p>
            <p className="mt-4 text-base leading-8 text-[#6f5a4c]">
              Mi piace trasformare idee in esperienze visive che raccontano
              qualcosa — che si tratti di un evento, di un brand o di un'immagine.
            </p>
            <p className="mt-4 text-base leading-8 text-[#6f5a4c]">
              Ogni progetto è per me una combinazione di estetica, emozione e
              cura, con un approccio sensibile ma concreto.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#eadfd5] bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8e7462]">
              Perché lavorare con me
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f8f1eb] p-4 text-sm leading-7 text-[#4c392d]">
                Approccio estetico forte ma versatile
              </div>
              <div className="rounded-2xl bg-[#f8f1eb] p-4 text-sm leading-7 text-[#4c392d]">
                Cura del dettaglio e coerenza visiva
              </div>
              <div className="rounded-2xl bg-[#f8f1eb] p-4 text-sm leading-7 text-[#4c392d]">
                Progetti personalizzati, non soluzioni generiche
              </div>
              <div className="rounded-2xl bg-[#f8f1eb] p-4 text-sm leading-7 text-[#4c392d]">
                Una visione creativa adatta a servizi diversi, ma ben diretta
              </div>
            </div>
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
                Nuovi progetti possono essere aggiunti facilmente
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Testi e immagini si aggiornano in pochi minuti
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Portfolio strutturato per crescere nel tempo
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/80">
                Perfetta base per una futura versione ancora più premium
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
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#241d1a]">
              Contattami per collaborazioni o progetti
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6f5a4c]">
              Qui puoi inserire email, Instagram, WhatsApp o un modulo contatti.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:bruzzi.martina12@gmail.com"
                className="block rounded-2xl bg-[#f8f1eb] px-4 py-4 text-sm text-[#4c392d] no-underline transition hover:bg-[#f3e8de]"
              >
                bruzzi.martina12@gmail.com
              </a>

              <a
                href="https://www.instagram.com/martina_bruzzi"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-[#f8f1eb] px-4 py-4 text-sm text-[#4c392d] no-underline transition hover:bg-[#f3e8de]"
              >
                @martina_bruzzi
              </a>

              <div className="rounded-2xl bg-[#f8f1eb] px-4 py-4 text-sm text-[#4c392d]">
                Disponibile per collaborazioni da remoto
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#eadfd5] bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <p className="text-sm text-[#6f5a4c]">
            © 2026 Martina Bruzzi — Event design, branding e contenuti visivi.
          </p>
        </div>
      </footer>
    </div>
  );
}