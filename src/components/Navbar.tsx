"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  "Accueil",
  "Nos logements",
  "Services",
  "Galerie",
  "À propos",
  "Votre séjour",
  "FAQ",
  "Avis",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-navbar fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-6">
      <div className="site-navbar__bar mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-blue-400/25 bg-[#0d1f3c]/60 px-5 py-3 text-white shadow-lg shadow-blue-950/30 backdrop-blur-md md:px-8">
        <div className="site-navbar__brand flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="La Conciergerie Bunel"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full ring-2 ring-blue-400/30"
          />
          <span className="site-navbar__identity hidden flex-col leading-tight sm:flex">
            <span className="font-(family-name:--font-playfair) text-xs tracking-[0.15em] uppercase">
              La Conciergerie Bunel
            </span>
            <span className="text-[9px] tracking-[0.25em] text-blue-300/70 uppercase">
              Guadeloupe
            </span>
          </span>
        </div>

        <nav
          className="site-navbar__desktop-nav hidden items-center gap-7 text-xs tracking-[0.15em] text-white/90 uppercase lg:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="site-navbar__link transition-colors hover:text-blue-300"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="site-navbar__actions flex items-center gap-3">
          <button
            type="button"
            className="site-navbar__language hidden items-center gap-1 text-xs text-white/90 uppercase hover:text-blue-300 sm:flex"
          >
            FR
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="site-navbar__contact hidden items-center rounded-full border border-blue-400/40 px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-blue-500/90 hover:border-blue-400/40 sm:inline-flex"
          >
            <span>Contact</span>
            <svg
              className="site-navbar__contact-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M14 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="navigation-mobile"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            className="site-navbar__toggle text-white lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="navigation-mobile"
          className="site-navbar__mobile-menu mx-auto mt-3 flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-blue-400/25 bg-[#071b32]/95 p-3 text-white shadow-2xl shadow-blue-950/40 backdrop-blur-xl lg:hidden"
          aria-label="Navigation mobile"
        >
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-5 py-3.5 text-sm tracking-[0.12em] text-white/90 uppercase transition-colors hover:bg-white/8 hover:text-[#dfbd72]"
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[#c29a4a] px-6 text-sm font-medium tracking-[0.15em] text-[#071b32] uppercase"
          >
            <span>Contact</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M14 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      )}
    </header>
  );
}
