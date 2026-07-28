"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Room = {
  name: string;
  subtitle: string;
  image: string;
  flower?: string;
  flowerColor?: string;
  capacity: string;
  beds: string;
  amenities: { label: string; icon: string }[];
};

const rooms: Room[] = [
  {
    name: "Iris",
    subtitle: "Chambre romantique",
    image: "/images/logements/hibiscus.jpg",
    flower: "/chambres/fleurs4.png",
    capacity: "2 personnes",
    beds: "1 lit double",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Dressing", icon: "dressing" },
    ],
  },
  {
    name: "Hibiscus",
    subtitle: "Appartement cosy",
    image: "/images/logements/iris.jpg",
    flower: "/chambres/fleurs2.png",
    capacity: "4 personnes",
    beds: "2 lits",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Cuisine équipée", icon: "kitchen" },
    ],
  },
  {
    name: "Jasmin",
    subtitle: "Studio vue mer",
    image: "/images/logements/frangipanier.jpg",
    flower: "/chambres/fleurs3.png",
    capacity: "2 personnes",
    beds: "1 lit",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Vue lagon", icon: "wave" },
    ],
  },
  {
    name: "Orchidée",
    subtitle: "Appartement familial",
    image: "/images/logements/pivoine.jpg",
    flower: "/chambres/fleurs1.png",
    capacity: "6 personnes",
    beds: "3 lits",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Cuisine équipée", icon: "kitchen" },
    ],
  },
  {
    name: "Camélia",
    subtitle: "Appartement moderne",
    image: "/images/logements/camelia.jpg",
    flower: "/chambres/fleurs-camelia.png",
    capacity: "4 personnes",
    beds: "2 lits",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Cuisine équipée", icon: "kitchen" },
    ],
  },
  {
    name: "Nymphéa",
    subtitle: "Studio indépendant",
    image: "/images/logements/nymphea.jpg",
    flower: "/chambres/fleurs-nymphea.png",
    capacity: "2 personnes",
    beds: "1 lit",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Cuisine équipée", icon: "kitchen" },
    ],
  },
  {
    name: "Tulipe",
    subtitle: "Terrasse vue mer",
    image: "/images/logements/tulipe.jpg",
    flower: "/chambres/fleurs-tulipe.png",
    capacity: "4 personnes",
    beds: "2 lits",
    amenities: [
      { label: "Wi-Fi", icon: "wifi" },
      { label: "Climatisation", icon: "clim" },
      { label: "Vue lagon", icon: "wave" },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" strokeWidth="1.5" />
      <path d="M5 20c1.4-3.6 4.3-5.3 7-5.3s5.6 1.7 7 5.3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18v2M21 18v2M3 13V7a1 1 0 011-1h4a1 1 0 011 1v3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M2 8.5a16 16 0 0120 0M5.5 12a11 11 0 0113 0M9 15.5a6 6 0 016 0M12 19h.01"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11M8 4l4 3 4-3M8 20l4-3 4 3M2.5 9l4 1.5-1 4M21.5 9l-4 1.5 1 4M2.5 15l4-1.5-1-4M21.5 15l-4-1.5 1-4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M6 3v6a3 3 0 006 0V3M9 9v12M16 3c-1.4 0-2.5 1.6-2.5 3.5S14.6 10 16 10s2.5-1.6 2.5-3.5S17.4 3 16 3zM16 10v11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DressingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.5" strokeWidth="1.5" />
      <path
        d="M12 6l-8 5h16l-8-5zM4 11v8a1 1 0 001 1h14a1 1 0 001-1v-8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M3 11c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0M3 16c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowerIcon({ color }: { color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <circle cx="12" cy="12" r="7" fill={color} />
      <circle cx="12" cy="6" r="3.2" fill={color} />
      <circle cx="12" cy="18" r="3.2" fill={color} />
      <circle cx="6" cy="12" r="3.2" fill={color} />
      <circle cx="18" cy="12" r="3.2" fill={color} />
      <circle cx="12" cy="12" r="2.4" fill="#faf9f4" />
    </svg>
  );
}

function amenityIcon(icon: string) {
  if (icon === "wifi") return <WifiIcon />;
  if (icon === "clim") return <SnowflakeIcon />;
  if (icon === "kitchen") return <KitchenIcon />;
  if (icon === "wave") return <WaveIcon />;
  if (icon === "water") return <DropletIcon />;
  return <DressingIcon />;
}

export default function LogementsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const clamped = Math.max(0, Math.min(rooms.length - 1, i));
    const el = scrollRef.current;
    const card = el?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setIndex(clamped);
  };

  return (
    <section id="logements" className="rooms-section section-color-bridge">
      <Image
        src="/chambres/backChambres.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />

      <div className="rooms-layout">
        <div className="rooms-copy">
          <svg
            className="rooms-title-flourish"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M50 92V50M50 50C40 30 20 25 5 30c8 15 22 20 45 20zM50 50c10-20 30-25 45-20-8 15-22 20-45 20zM50 50c-6-22-22-32-40-30 6 17 20 27 40 30zM50 50c6-22 22-32 40-30-6 17-20 27-40 30z"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="rooms-title">Les chambres</h2>
          <p className="rooms-title rooms-title--gold">à vivre</p>
          <p className="rooms-description">
            Des espaces pensés pour votre confort, entre élégance créole et douceur
            tropicale.
          </p>
          <a
            href="#contact"
            className="rooms-cta rooms-cta--desktop"
          >
            Voir les logements
            <ArrowIcon />
          </a>

          <div className="rooms-controls">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              aria-label="Logement précédent"
              className="rooms-arrow"
              disabled={index === 0}
            >
              <ChevronLeftIcon />
            </button>
            <div className="rooms-dots">
              {rooms.map((room, i) => (
                <button
                  key={room.name}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Voir ${room.name}`}
                  className={`rooms-dot ${i === index ? "rooms-dot--active" : ""}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              aria-label="Logement suivant"
              className="rooms-arrow"
              disabled={index === rooms.length - 1}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="rooms-carousel"
        >
          {rooms.map((room) => (
            <article
              key={room.name}
              className="room-card"
            >
              <div className="room-card-image">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 1280px) 18vw, (min-width: 768px) 280px, 82vw"
                  className="object-cover"
                />
              </div>

              <div className="room-card-body">
                <div className="room-flower">
                  {room.flower ? (
                    <Image src={room.flower} alt="" fill sizes="120px" className="object-cover" />
                  ) : (
                    <FlowerIcon color={room.flowerColor ?? "#c29a4a"} />
                  )}
                </div>

                <h3 className="room-name">{room.name}</h3>
                <p className="room-subtitle">{room.subtitle}</p>

                <div className="room-facts">
                  <span>
                    <PersonIcon />
                    {room.capacity}
                  </span>
                  <span>
                    <BedIcon />
                    {room.beds}
                  </span>
                </div>

                <div className="room-amenities">
                  {room.amenities.map((a) => (
                    <span key={a.label}>
                      {amenityIcon(a.icon)}
                      {a.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mobile-carousel-hint" aria-hidden="true">
          <span>←</span>
          Faites glisser pour découvrir
          <span>→</span>
        </p>

        <a href="#contact" className="rooms-cta rooms-cta--mobile">
          Voir les logements
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
