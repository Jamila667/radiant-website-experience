import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Asterisk } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SLABPRINT™ — A very loud creative studio" },
      {
        name: "description",
        content:
          "SLABPRINT is a bold, maximalist creative agency for brands that refuse to whisper. Identity, campaign, digital, and moving image.",
      },
      { property: "og:title", content: "SLABPRINT™ — A very loud creative studio" },
      {
        property: "og:description",
        content: "Identity, campaign, digital, and moving image for brands that refuse to whisper.",
      },
    ],
  }),
  component: Index,
});

const works = [
  { n: "01", client: "Otro Café", tag: "Identity / Packaging", year: "2025", img: work4, span: "md:col-span-7" },
  { n: "02", client: "Runwild Athletica", tag: "Campaign / Film", year: "2025", img: work2, span: "md:col-span-5" },
  { n: "03", client: "Salvo Magazine", tag: "Art Direction / Print", year: "2024", img: work3, span: "md:col-span-5" },
  { n: "04", client: "Halo Records", tag: "Poster Series", year: "2024", img: work1, span: "md:col-span-7" },
];

const services = [
  ["Brand Identity", "Logotypes, systems, guidelines, wordmarks that punch."],
  ["Campaign & Art Direction", "Films, print, OOH, editorial — end to end."],
  ["Digital & Interactive", "Websites, product, motion — built the loud way."],
  ["Packaging & Print", "Objects you'll want to keep on the shelf."],
];

const clients = ["Aperol", "Ganni", "MUBI", "A24", "Vans", "Off-White", "Perrier", "Le Labo", "Uniqlo", "Warp"];

function Index() {
  return (
    <div className="bg-cream text-ink">
      <TopBar />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Manifesto />
      <Clients />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em]">
          <Asterisk className="h-4 w-4" aria-hidden />
          Slabprint™
        </a>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.18em] md:flex">
          <a href="#work" className="hover:text-hot">Work</a>
          <a href="#services" className="hover:text-hot">Services</a>
          <a href="#studio" className="hover:text-hot">Studio</a>
          <a href="#contact" className="hover:text-hot">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:bg-hot"
        >
          Start a project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/15">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-6 pb-16 pt-14 md:grid-cols-12 md:gap-6 md:px-10 md:pb-24 md:pt-20">
        <div className="md:col-span-8">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-hot blink" aria-hidden />
            Est. 2013 — Lisbon / New York
          </div>
          <h1 className="font-display text-[15vw] leading-[0.82] tracking-[-0.03em] md:text-[11.5rem]">
            A very loud
            <br />
            creative <em className="italic text-hot">studio.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-snug text-ink/80 md:text-xl">
            We build identities, campaigns and digital things for brands that refuse to whisper. Ink-first,
            hand-set, screen-tested — then shipped at scale.
          </p>
        </div>

        <aside className="md:col-span-4 md:pt-4">
          <div className="rounded-2xl border border-ink/20 bg-acid p-6 shadow-[8px_8px_0_0_var(--color-ink)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em]">Now showing</div>
            <div className="mt-3 font-display text-3xl leading-tight">
              Salvo Magazine, Issue 07 — "Loud is a Language."
            </div>
            <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em]">
              <span>Case study</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
            <Stat k="Projects" v="240+" />
            <Stat k="Awards" v="38" />
            <Stat k="Countries" v="17" />
          </div>
        </aside>
      </div>

      <img
        src={work5}
        alt=""
        aria-hidden
        width={1200}
        height={1500}
        className="pointer-events-none absolute -right-10 -top-10 hidden h-[380px] w-[300px] rotate-6 rounded-xl object-cover opacity-90 shadow-2xl xl:block"
      />
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-ink/20 p-3">
      <div className="font-display text-3xl leading-none">{v}</div>
      <div className="mt-2 text-[10px] text-ink/70">{k}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Identity",
    "Campaign",
    "Motion",
    "Packaging",
    "Editorial",
    "Digital",
    "Art Direction",
    "Sound",
  ];
  const track = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-b border-ink/15 bg-ink py-6 text-cream">
      <div className="flex whitespace-nowrap marquee-track">
        {track.map((t, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 font-display text-6xl md:text-7xl"
          >
            {t}
            <Asterisk className="h-8 w-8 text-hot" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="border-b border-ink/15 py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              §01 — Selected work
            </div>
            <h2 className="mt-4 font-display text-5xl leading-none tracking-tight md:text-7xl">
              Recent<em className="italic"> obsessions.</em>
            </h2>
          </div>
          <a href="#" className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] hover:text-hot md:inline-flex">
            All 240 projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {works.map((w) => (
            <a
              key={w.n}
              href="#"
              className={`group relative block overflow-hidden rounded-2xl border border-ink/20 bg-ink ${w.span}`}
            >
              <img
                src={w.img}
                alt={w.client}
                loading="lazy"
                width={1400}
                height={1000}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 text-cream md:p-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span>{w.n}</span>
                  <span>{w.year}</span>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
                    {w.tag}
                  </div>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-display text-4xl leading-none md:text-6xl">{w.client}</h3>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-acid text-ink transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-ink/15 bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
              §02 — What we do
            </div>
            <h2 className="mt-4 font-display text-5xl leading-none tracking-tight md:text-7xl">
              Four ways
              <br />
              <em className="italic text-acid">to be loud.</em>
            </h2>
          </div>

          <ol className="md:col-span-8">
            {services.map(([title, desc], i) => (
              <li
                key={title}
                className="group flex items-start gap-6 border-t border-cream/15 py-8 first:border-t-0 md:gap-10 md:py-10"
              >
                <span className="w-14 shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-4xl leading-none transition-colors group-hover:text-hot md:text-6xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xl text-cream/70 md:text-lg">{desc}</p>
                </div>
                <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 opacity-40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid group-hover:opacity-100" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="studio" className="border-b border-ink/15 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            §03 — Manifesto
          </div>
          <div className="mt-8 space-y-4 font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
            <p>Ink first.</p>
            <p>Committee last.</p>
            <p>Screen tested.</p>
            <p>Shipped at scale.</p>
          </div>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-3xl leading-[1.05] tracking-tight md:text-6xl">
            We believe the brands people love are the ones brave enough to have a{" "}
            <em className="italic text-hot">point of view</em>. So we make work that argues, sings,
            <span className="whitespace-nowrap"> shouts —</span> and occasionally, if the brief calls
            for it, whispers. But not often.
          </p>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const track = [...clients, ...clients];
  return (
    <section className="overflow-hidden border-b border-ink/15 bg-acid py-10">
      <div className="flex whitespace-nowrap marquee-slow">
        {track.map((c, i) => (
          <span key={i} className="mx-10 flex items-center gap-10 font-display text-4xl italic md:text-5xl">
            {c}
            <span className="inline-block h-2 w-2 rounded-full bg-ink" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
          §04 — Let's make something loud
        </div>
        <h2 className="mt-6 font-display text-[16vw] leading-[0.85] tracking-[-0.03em] md:text-[12rem]">
          Say <em className="italic text-acid">hello.</em>
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
              New business
            </div>
            <a
              href="mailto:hello@slabprint.studio"
              className="mt-3 block font-display text-3xl underline decoration-hot decoration-2 underline-offset-4 hover:text-hot"
            >
              hello@slabprint.studio
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
              Press
            </div>
            <a href="mailto:press@slabprint.studio" className="mt-3 block font-display text-3xl hover:text-acid">
              press@slabprint.studio
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
              Studios
            </div>
            <p className="mt-3 font-display text-3xl leading-tight">
              Lisbon —<br />
              14 Rua da Rosa
              <br />
              <span className="text-cream/60">New York — 88 Bowery</span>
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/60 md:flex-row md:items-center">
          <span>© Slabprint™ Studio, MMXXVI</span>
          <span>Made loud. Handled with care.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-acid">Instagram</a>
            <a href="#" className="hover:text-acid">Are.na</a>
            <a href="#" className="hover:text-acid">Vimeo</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
