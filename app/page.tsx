import Image from "next/image";
import type { ReactNode } from "react";
import {
  Daisy,
  BlackEyedSusan,
  MiniDaisy,
  FlowerCluster,
} from "@/components/florals";
import { StarRating } from "@/components/star-rating";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SiteNav } from "@/components/nav";

const PHONE_DISPLAY = "073 199 8736";
const PHONE_TEL = "tel:+27731998736";
const WHATSAPP_URL = `https://wa.me/27731998736?text=${encodeURIComponent(
  "Hi Taahira! I'd like to book a haircut — when are you free?"
)}`;
const MAPS_URL =
  "https://maps.google.com/?q=Dorasamys+Hair+Studio+151+Cape+Rd+Glendinningvale+Gqeberha";
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(
    "Dorasamy's Hair Studio by Taahira, 151 Cape Rd, Glendinningvale, Gqeberha, 6001"
  ) +
  "&z=16&output=embed";
const REVIEW_URL =
  "https://maps.google.com/?q=Dorasamys+Hair+Studio+151+Cape+Rd+Glendinningvale+Gqeberha";

const STEPS = [
  {
    title: "Reach out",
    line: "Call or WhatsApp — she replies fast.",
  },
  {
    title: "Tell her the plan",
    line: "What you need, when suits, what it looks like now.",
  },
  {
    title: "Walk out feeling yourself",
    line: "Fresh cut, good day, back to your week.",
  },
];

const SERVICES = [
  {
    name: "Ladies' Cuts & Styling",
    line: "A cut that suits your face — and your life.",
    tag: "Most booked",
  },
  {
    name: "Kids' Haircuts",
    line: "Patient, gentle and fun, even for the wrigglers.",
    tag: "Parent favourite",
  },
  {
    name: "Men's Cuts & Grooming",
    line: "Sharp, clean and done right.",
    tag: null,
  },
  {
    name: "Corrective Fix-Up Cuts",
    line: "Had a bad cut elsewhere? Taahira sorts it out.",
    tag: "Speciality",
  },
  {
    name: "Wash, Blow-Dry & Finishing",
    line: "Walk out ready for the occasion.",
    tag: null,
  },
];

const COLOUR_PRICES = [
  { service: "Short", price: "R550" },
  { service: "Medium", price: "R550*" },
  { service: "Long", price: "R750" },
  { service: "Extra long / thick", price: "R650*" },
  { service: "Add a cut", price: "+R150" },
];

const MAINTENANCE_BUNDLE = [
  "3 wash & blow-dries",
  "1 colour touch-up",
  "1 protein treatment",
  "1 split-end trim",
  "6 foils",
];

const PROMO_TITLE = "Full colour, cut & blow-dry";
const PROMO_LINE = "Save 10% · free treatment included";

const GALLERY = [
  { label: "Ladies' Cuts", file: "/gallery/gallery-a.jpg" },
  { label: "Kids' Cuts", file: "/gallery/gallery-b.jpg" },
  { label: "Men's Cuts", file: "/gallery/gallery-c.jpg" },
  { label: "Fix-Up Cuts", file: "/gallery/gallery-d.jpg" },
  { label: "Blow-Dry & Styling", file: "/gallery/gallery-e.jpg" },
  { label: "From the Chair", file: "/gallery/gallery-f.jpg" },
];

const HOURS = [
  { day: "Monday – Friday", time: "08:00 – 17:00", closed: false },
  { day: "Saturday", time: "08:00 – 13:00", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

const FAQS = [
  {
    q: "Do I need to book, or can I just walk in?",
    a: "Walk-ins are welcome when there's space, but booking saves you the wait. A quick WhatsApp or call and she'll slot you in.",
  },
  {
    q: "How long does a cut take?",
    a: "Most cuts take 30–60 minutes. Fix-up and styling work can take a bit longer — she'll give you a proper time when you book.",
  },
  {
    q: "Does she cut kids' hair?",
    a: "Yes — and she's brilliant with them. Lots of parents bring their little ones, and the studio is set up to keep it calm and easy.",
  },
  {
    q: "I had a bad cut somewhere else. Can she fix it?",
    a: "That's one of her favourites. Bring it in and she'll sort you out — it's literally how a lot of her regulars found her.",
  },
];

const REVIEWS = [
  {
    quote:
      "Hair was cut incorrectly by a previous hairdresser and Taahira worked her magic — she made me look and feel like a person again.",
    name: "Rochelle N.",
  },
  {
    quote:
      "The only hairdresser I go to! I always go home happy. They definitely know their stuff — very professional.",
    name: "Milah De K.",
  },
  {
    quote:
      "Stunning haircut for my daughter. Taahira made us very comfortable and had great ideas.",
    name: "Deshani N.",
  },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="hand-pop text-center text-4xl sm:text-[2.6rem]">{children}</h3>
  );
}

function GalleryTile({ label, file }: { label: string; file: string }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-white shadow-[0_8px_20px_rgba(17,35,22,0.15)]">
      <Image
        src={file}
        alt={label}
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-forest/75 via-forest/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="text-sm font-extrabold uppercase tracking-wider text-white drop-shadow">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="cloud-bg relative min-h-screen overflow-x-clip px-4 pb-16 pt-28 font-body sm:pt-32">
      {/* soft cloud puffs */}
      <div className="cloud-puff left-[-90px] top-[6%] h-64 w-80" />
      <div className="cloud-puff right-[-60px] top-[18%] h-48 w-72" />
      <div className="cloud-puff bottom-[10%] left-[8%] h-44 w-64" />
      <div className="cloud-puff bottom-[24%] right-[4%] h-56 w-72" />
      <div className="cloud-puff left-[30%] top-[40%] h-36 w-56 opacity-70" />

      {/* ============ POSTER + ANCHORED FLORALS ============ */}
      <div className="relative mx-auto max-w-4xl">
        {/* deliberate corner framing — clusters anchored to the poster's top corners */}
        <div className="relative mx-auto max-w-2xl">
          <FlowerCluster className="absolute -left-6 -top-6 z-10 hidden sm:block" size={140} />
          <FlowerCluster className="absolute -right-6 -top-6 z-10 hidden sm:block" size={120} />

      {/* ============ STICKY NAV ============ */}
      <SiteNav whatsappUrl={WHATSAPP_URL} />

      {/* ============ WHITE FRAME ============ */}
      <section
        id="top"
        className="relative mx-auto max-w-2xl overflow-hidden rounded-[32px] border-[3px] border-white bg-white/95 shadow-[0_30px_80px_-20px_rgba(17,35,22,0.55)]"
      >
        {/* ---------- HERO ---------- */}
        <header className="hero-band relative overflow-hidden px-6 pb-12 pt-12 text-center sm:px-12">
          <Daisy className="absolute left-1 top-1 h-16 w-16 rotate-[-15deg] [filter:drop-shadow(0_8px_10px_rgba(17,35,22,0.2))]" />
          <BlackEyedSusan className="absolute right-1 top-1 h-16 w-16 rotate-12 [filter:drop-shadow(0_8px_10px_rgba(17,35,22,0.2))]" />

          <div className="relative z-10">
            <p className="hand-pop text-3xl leading-none sm:text-4xl">
              Fabulous hair starts here
            </p>
            <h1 className="brand-head mt-4 text-4xl uppercase leading-none sm:text-6xl">
              Dorasamy&apos;s
            </h1>
            <h2 className="brand-head mt-2 text-3xl uppercase leading-none sm:text-5xl">
              Hair Studio
            </h2>
            <p className="hand-pop mt-4 text-3xl sm:text-4xl">by Taahira</p>

            <div className="mt-6 flex flex-col items-center justify-center gap-1.5">
              <StarRating rating={4.5} size={24} />
              <p className="text-sm font-bold uppercase tracking-widest text-forest/80">
                4.5 · 11 Google reviews
              </p>
            </div>

            <p className="mx-auto mt-4 max-w-md text-sm font-semibold text-forest/75">
              Gqeberha&apos;s friendly neighbourhood salon — cuts, styling and
              fix-ups on Cape Rd, Glendinningvale.
            </p>
          </div>
        </header>

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="px-6 py-8 sm:px-12">
          <div className="grid gap-3 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-mint/40 bg-mint/10 px-4 py-4 text-center"
              >
                <p className="hand-dark text-2xl leading-none text-meadow">
                  {i + 1}
                </p>
                <p className="mt-1 text-sm font-extrabold uppercase tracking-wider text-forest">
                  {s.title}
                </p>
                <p className="mt-1 text-xs text-forest/65">{s.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="scroll-mt-24 px-6 py-10 sm:px-12">
          <SectionHeading>Our Services</SectionHeading>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-forest/70">
            Honest cuts, great ideas and a chair that makes you feel comfortable.
          </p>

          <ul className="mt-8 space-y-4">
            {SERVICES.map((s) => (
              <li
                key={s.name}
                className="flex items-start gap-4 rounded-2xl border border-mint/50 bg-mint/15 px-5 py-4 transition hover:bg-mint/25"
              >
                <MiniDaisy className="mt-1 shrink-0" size={24} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="hand-dark text-2xl leading-tight">{s.name}</h4>
                    {s.tag && (
                      <span className="rounded-full bg-sun/80 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-forest">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-forest/70">{s.line}</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 shrink-0 rounded-full border-2 border-meadow px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-meadow transition hover:bg-meadow hover:text-white sm:px-3.5 sm:py-1.5"
                >
                  Book
                </a>
              </li>
            ))}
          </ul>

          {/* Colour price list — real prices from the studio's price list */}
          <div className="mt-10">
            <h4 className="hand-pop text-center text-3xl">Colour Services</h4>
            <ul className="mx-auto mt-5 max-w-md space-y-2">
              {COLOUR_PRICES.map((p) => (
                <li
                  key={p.service}
                  className="flex items-center justify-between rounded-xl border border-mint/40 bg-mint/10 px-5 py-3"
                >
                  <span className="text-sm font-extrabold uppercase tracking-wider text-forest">
                    {p.service}
                  </span>
                  <span className="font-brand text-base font-extrabold text-meadow">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-center text-[11px] text-forest/45">
              * Standard studio list — confirm current pricing when booking.
            </p>
          </div>

          {/* Monthly maintenance bundle — the studio's anchor offer */}
          <div className="mt-8 rounded-2xl border-2 border-sun bg-sun/10 px-6 py-6 text-center">
            <p className="hand-pop text-3xl leading-none">Monthly Maintenance Bundle</p>
            <p className="mt-1 font-brand text-2xl font-extrabold text-forest">
              R1,000<span className="text-sm font-bold text-forest/60">/month</span>
            </p>
            <ul className="mx-auto mt-4 grid max-w-sm gap-1.5 text-left sm:grid-cols-1">
              {MAINTENANCE_BUNDLE.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm font-semibold text-forest/80">
                  <MiniDaisy size={18} className="shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-[#25D366] px-7 py-3 text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_10px_24px_rgba(37,211,102,0.45)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Claim My Bundle
            </a>
          </div>

          {/* Promo strip */}
          <div className="mt-5 rounded-2xl bg-sun/15 px-6 py-4 text-center">
            <p className="hand-pop text-2xl leading-none">{PROMO_TITLE}</p>
            <p className="mt-1 text-sm font-extrabold uppercase tracking-widest text-forest/70">
              {PROMO_LINE}
            </p>
          </div>
        </section>

        {/* ---------- GALLERY ---------- */}
        <section id="gallery" className="scroll-mt-24 bg-white px-6 py-10 sm:px-12">
          <SectionHeading>Fresh from the chair</SectionHeading>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-forest/70">
            A peek at the work — real cuts from the studio.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {GALLERY.map((g) => (
              <GalleryTile key={g.label} label={g.label} file={g.file} />
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-forest/50">
            This gallery is built from your best photos — send us a handful of
            cuts you&apos;re proud of and they go here.
          </p>
        </section>

        {/* ---------- ABOUT TAAHIRA ---------- */}
        <section id="about" className="scroll-mt-24 bg-lilac/15 px-6 py-10 sm:px-12">
          <SectionHeading>Meet Taahira</SectionHeading>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative shrink-0">
              <div className="absolute -inset-2 rotate-6">
                <Daisy size={144} />
              </div>
              <Image
                src="/taahira-studio.jpg"
                alt="Dorasamy's Hair Studio — profile photo"
                width={160}
                height={160}
                className="relative h-32 w-32 rounded-full border-4 border-white object-cover shadow-[0_12px_28px_rgba(17,35,22,0.3)] sm:h-40 sm:w-40"
              />
              <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 shadow-md">
                <MiniDaisy size={26} />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="hand-dark text-3xl leading-none">Taahira Dorasamy</p>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-widest text-meadow">
                Owner &amp; Stylist
              </p>
              <p className="mt-3 text-sm leading-relaxed text-forest/80">
                Taahira runs the studio with a simple belief: you should leave
                feeling like yourself again. Regulars book her by name, kids
                leave smiling, and if another salon got it wrong — she&apos;s
                the one who sorts it out. Honest advice, great ideas, and a
                chair that makes you feel comfortable.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- HOURS ---------- */}
        <section className="px-6 py-10 sm:px-12">
          <SectionHeading>Studio Hours</SectionHeading>
          <ul className="mx-auto mt-8 max-w-md space-y-2">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between rounded-xl bg-mint/10 px-5 py-3"
              >
                <span className="text-sm font-extrabold uppercase tracking-wider text-forest">
                  {h.day}
                </span>
                <span
                  className={`text-sm font-bold ${
                    h.closed ? "text-forest/45" : "text-meadow"
                  }`}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-forest/50">
            Times can shift on public holidays — call ahead to be safe.
          </p>
        </section>

        {/* ---------- REVIEWS ---------- */}
        <section id="reviews" className="scroll-mt-24 bg-lilac/15 px-6 py-10 sm:px-12">
          <SectionHeading>What clients say</SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-2xl border border-lilac/50 bg-white/80 p-5 shadow-sm"
              >
                <StarRating rating={5} size={16} />
                <blockquote className="mt-3 flex-1 text-sm italic leading-relaxed text-forest/80">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs font-extrabold uppercase tracking-wider text-forest/55">
                  — {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center">
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold uppercase tracking-wider text-meadow underline-offset-4 transition hover:underline"
            >
              Loved your cut? Leave us a Google review →
            </a>
          </p>
        </section>

        {/* ---------- GIFT + FAQ ---------- */}
        <section className="px-6 py-10 sm:px-12">
          <div className="rounded-2xl border-2 border-dashed border-sun/70 bg-sun/10 px-6 py-6 text-center">
            <p className="hand-pop text-3xl">Gift a fresh cut</p>
            <p className="mx-auto mt-1 max-w-sm text-sm text-forest/75">
              Know someone who deserves a good hair day? Vouchers available —
              call or WhatsApp to arrange one.
            </p>
          </div>

          <div className="mt-10">
            <SectionHeading>Good to know</SectionHeading>
            <div className="mt-6 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-mint/50 bg-mint/10 px-5 py-4 open:bg-mint/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-extrabold text-forest">
                    {f.q}
                    <span className="text-meadow transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-forest/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section id="contact" className="scroll-mt-24 px-6 py-12 text-center sm:px-12">
          <p className="hand-pop text-4xl sm:text-[2.6rem]">Ready for a fresh cut?</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="rounded-full bg-sun px-8 py-4 font-brand text-lg font-extrabold uppercase tracking-widest text-forest shadow-[0_10px_24px_rgba(253,200,0,0.5)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 font-brand text-lg font-extrabold uppercase tracking-widest text-white shadow-[0_10px_24px_rgba(37,211,102,0.45)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              WhatsApp Us
            </a>
          </div>
        </section>

        {/* ---------- LOCATION ---------- */}
        <section className="bg-mint/10 px-6 py-10 text-center sm:px-12">
          <p className="text-sm font-extrabold uppercase tracking-widest text-meadow">
            Find us
          </p>
          <p className="mt-2 text-base font-semibold text-forest/85">
            151 Cape Rd, Dental Centre, Glendinningvale, Gqeberha, 6001
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full border-2 border-meadow px-7 py-3 text-sm font-extrabold uppercase tracking-widest text-meadow transition hover:bg-meadow hover:text-white"
          >
            Get Directions
          </a>

          <div className="mx-auto mt-6 max-w-xl overflow-hidden rounded-[20px] border-2 border-white shadow-[0_10px_30px_rgba(17,35,22,0.2)]">
            <iframe
              src={MAPS_EMBED_URL}
              title="Map to Dorasamy's Hair Studio by Taahira"
              className="h-72 w-full sm:h-80"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-4 text-xs text-forest/50">
            Proudly serving Glendinningvale, Newton Park, Walmer &amp; greater
            Gqeberha.
          </p>
        </section>

        <footer className="bg-white px-6 py-5 text-center">
          <p className="text-xs text-forest/50">
            © 2026 Dorasamy&apos;s Hair Studio by Taahira
          </p>
          <p className="mt-1 text-xs text-forest/40">
            Website by{" "}
            <a
              href="https://www.allegrodigital.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest/60 transition hover:text-forest"
            >
              Allegro Digital
            </a>{" "}
            · Gqeberha
          </p>
        </footer>
      </section>
        </div>
      </div>

      <WhatsAppFloat />
    </main>
  );
}
