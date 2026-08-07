"use client";

import { useState } from "react";
import { Daisy } from "@/components/florals";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav({ whatsappUrl }: { whatsappUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-40 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2">
      {/* pill bar */}
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(17,35,22,0.18)] backdrop-blur sm:px-6 sm:py-2.5">
        <a
          href="#top"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Daisy size={26} />
          <span className="font-brand text-sm font-extrabold uppercase tracking-widest text-forest">
            Dorasamy&apos;s
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-4 sm:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-extrabold uppercase tracking-wider text-forest/70 transition hover:text-meadow"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition hover:brightness-105 sm:py-2"
          >
            Book
          </a>

          {/* mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition hover:bg-mint/20 sm:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-mint/40 bg-white/95 shadow-[0_18px_40px_rgba(17,35,22,0.25)] sm:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-5 py-3.5 text-sm font-extrabold uppercase tracking-wider text-forest/80 transition hover:bg-mint/15"
            >
              {l.label}
              <span className="text-meadow" aria-hidden="true">
                ›
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
