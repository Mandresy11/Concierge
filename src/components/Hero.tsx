import Image from "next/image";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FernIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M12 21V3" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M12 6c-2-2-4-2-5.5-1M12 6c2-2 4-2 5.5-1M12 10c-2.3-1.6-4.4-1.4-6-.2M12 10c2.3-1.6 4.4-1.4 6-.2M12 14c-2.3-1.2-4.3-.8-5.7.6M12 14c2.3-1.2 4.3-.8 5.7.6"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="hero-section relative h-screen min-h-175 w-full overflow-hidden"
    >
      <Image
        src="/images/gallery-lagoon.jpg"
        alt="Lagon et palmiers en Guadeloupe"
        fill
        priority
        sizes="100vw"
        className="hero-background object-cover"
      />
      <div className="hero-overlay hero-overlay--vertical" aria-hidden="true" />
      <div className="hero-overlay hero-overlay--horizontal" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white md:px-16">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            La Conciergerie Bunel Guadeloupe
          </p>
          <h1>
            Séjournez en
            <br />
            Guadeloupe
          </h1>
          <div className="hero-emblem" aria-hidden="true">
            <FernIcon />
          </div>
          <p className="hero-subtitle">
            Logements meublés &amp; conciergerie
          </p>
          <a
            href="#logements"
            className="hero-cta mt-10 inline-flex items-center gap-3 rounded-full border border-[#dfbd72]/40 bg-[#c29a4a] px-8 py-4 text-sm font-medium tracking-[0.15em] text-[#1d2418] uppercase transition-colors hover:bg-[#dfbd72]"
          >
            Découvrir
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
