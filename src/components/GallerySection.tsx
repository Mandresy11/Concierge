import Image from "next/image";
import type { ReactNode } from "react";

function PalmIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 25V12.5m0 0C12 7 7.5 6 3.5 8c4 1 7.4 2.3 10.5 4.5Zm0 0c2-5.5 6.5-6.5 10.5-4.5-4 1-7.4 2.3-10.5 4.5Zm0 0C9.7 9.2 6.2 11 5 14.5c3.8-1.2 6.7-1.8 9-2Zm0 0c4.3-3.3 7.8-1.5 9 2-3.8-1.2-6.7-1.8-9-2Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M5 17.5c2 1.8 4 1.8 6 0s4-1.8 6 0 4 1.8 6 0M4 22.5c2 1.8 4 1.8 6 0s4-1.8 6 0 4 1.8 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14.5c1.6-4.6 4.5-7.6 8.7-9 1.1 4.8-.7 8.2-5.4 10.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M23 17.2A10 10 0 1 1 11.1 4.1 8 8 0 0 0 23 17.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m20.7 5 .7 1.6L23 7.3l-1.6.7-.7 1.6L20 8l-1.6-.7 1.6-.7.7-1.6Z" fill="currentColor" />
    </svg>
  );
}

type Photo = {
  src: string;
  alt: string;
  title?: string;
  icon?: ReactNode;
  position: string;
  imagePosition?: string;
};

const photos: Photo[] = [
  {
    src: "/images/gallery-lagoon.jpg",
    alt: "Vue paisible sur le lagon",
    title: "Vue lagon",
    icon: <WaveIcon />,
    position: "light-gallery-card--lagoon",
    imagePosition: "center 52%",
  },
  {
    src: "/images/hero-bg.jpg",
    alt: "Plage privée bordée de palmiers",
    title: "Plage privée",
    icon: <PalmIcon />,
    position: "light-gallery-card--private",
    imagePosition: "center center",
  },
  {
    src: "/images/section-logements-bg.jpg",
    alt: "Piscine illuminée à la nuit tombée",
    title: "Ambiance nocturne",
    icon: <MoonIcon />,
    position: "light-gallery-card--evening",
    imagePosition: "center center",
  },
  {
    src: "/images/section-contact-bg.jpg",
    alt: "Plage de sable blanc et eau turquoise",
    position: "light-gallery-card--beach",
    imagePosition: "center center",
  },
  {
    src: "/images/logements/tulipe.jpg",
    alt: "Terrasse ouverte sur la mer",
    position: "light-gallery-card--terrace",
    imagePosition: "center center",
  },
];

const mobileTopPhotos = photos.slice(0, 3);
const mobileBottomPhotos = [...photos.slice(3), ...photos.slice(0, 1)];

function PalmShadow({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 300 620"
      className={`gallery-palm gallery-palm--${side}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M136 635C126 432 126 218 72 25" strokeWidth="12" />
        <path d="M82 69C33 86 7 118-9 173M91 104c-47 13-78 39-102 78M101 142C53 151 19 172-11 209M111 185c-47 4-83 20-116 51M120 230c-45-2-82 10-117 35M127 277c-41-7-78 1-113 22M91 104c40-26 80-33 122-22M101 142c42-19 84-20 124-3M111 185c43-12 85-6 124 17M120 230c43-5 84 7 120 36M127 277c40 1 76 17 108 49" strokeWidth="7" />
      </g>
    </svg>
  );
}

function GalleryCard({
  photo,
  duplicate = false,
}: {
  photo: Photo;
  duplicate?: boolean;
}) {
  return (
    <article
      className={`light-gallery-card ${photo.position}`}
      aria-hidden={duplicate ? "true" : undefined}
    >
      <Image
        src={photo.src}
        alt={duplicate ? "" : photo.alt}
        fill
        sizes="(min-width: 1280px) 38vw, (min-width: 768px) 50vw, 230px"
        className="light-gallery-card__image"
        style={{ objectPosition: photo.imagePosition }}
      />
      <div className="light-gallery-card__shade" />
      {photo.title && (
        <div className="light-gallery-caption">
          <span className="light-gallery-caption__icon">{photo.icon}</span>
          <strong>{photo.title}</strong>
        </div>
      )}
    </article>
  );
}

function GalleryMarqueeRow({
  photos,
  direction,
}: {
  photos: Photo[];
  direction: "left" | "right";
}) {
  return (
    <div className={`light-gallery-marquee__row light-gallery-marquee__row--${direction}`}>
      <div className="light-gallery-marquee__track">
        <div className="light-gallery-marquee__group">
          {photos.map((photo) => (
            <GalleryCard key={photo.src} photo={photo} />
          ))}
        </div>
        <div className="light-gallery-marquee__group" aria-hidden="true">
          {photos.map((photo) => (
            <GalleryCard key={photo.src} photo={photo} duplicate />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="galerie" className="light-gallery section-color-bridge">
      <PalmShadow side="left" />
      <PalmShadow side="right" />
      <div className="light-gallery-glow" aria-hidden="true" />

      <div className="light-gallery-inner">
        <header className="light-gallery-heading">
          <h2>Galerie</h2>
          <p>Découvrez l&apos;art de vivre face au lagon.</p>
        </header>

        <div className="light-gallery-mosaic">
          {photos.map((photo) => (
            <GalleryCard key={photo.src} photo={photo} />
          ))}
        </div>

        <div className="light-gallery-marquee" aria-label="Galerie photos défilante">
          <GalleryMarqueeRow photos={mobileTopPhotos} direction="right" />
          <GalleryMarqueeRow photos={mobileBottomPhotos} direction="left" />
        </div>

        <p className="mobile-carousel-hint" aria-hidden="true">
          <span>←</span>
          Faites glisser la galerie
          <span>→</span>
        </p>

        <a href="#contact" className="light-gallery-cta">
          <span className="light-gallery-cta__copy">
            <strong>Découvrir toute la galerie</strong>
            <small>Inspirez votre prochain séjour</small>
          </span>
          <span className="light-gallery-cta__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M14 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
