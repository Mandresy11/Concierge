import Image from "next/image";

function BellIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M8 34.5c0-8.8 5.4-13.3 16-13.3s16 4.5 16 13.3" />
      <path d="M5 34.5h38M9 39h30" />
      <circle cx="24" cy="14" r="2.3" />
    </svg>
  );
}

function TowelsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="9" y="27" width="30" height="9" rx="4.5" />
      <rect x="9" y="12" width="30" height="9" rx="4.5" />
      <path d="M13 12c0-3 1.7-4.6 3.2-5.5M35 12c0-3-1.7-4.6-3.2-5.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M24 41S8 31.2 5.3 21.8C3.1 14.2 7 8.5 13.6 8.5c4.3 0 7.7 2.5 10.4 7 2.7-4.5 6.1-7 10.4-7 6.6 0 10.5 5.7 8.3 13.3C40 31.2 24 41 24 41Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 13v12l7 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function SealMarkIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M24 33V15M24 15c-3-5-9-6-15-4 3 6 8 8 15 4zm0 0c3-5 9-6 15-4-3 6-8 8-15 4z" />
    </svg>
  );
}

const services = [
  {
    title: "Accueil personnalisé",
    description:
      "Un interlocuteur dédié pour un accueil chaleureux et adapté à vos besoins.",
    image: "/services/intro-accueil-v2.png",
    imagePosition: "center bottom",
    icon: BellIcon,
    featured: true,
  },
  {
    title: "Ménage & linge inclus",
    description:
      "Des logements impeccables avec linge de qualité fourni pour votre confort.",
    image: "/services/intro-menage-v2.png",
    imagePosition: "center bottom",
    icon: TowelsIcon,
    featured: false,
  },
  {
    title: "Séjour sur mesure",
    description:
      "Des attentions personnalisées et des services adaptés à vos envies.",
    image: "/services/intro-sejour-v2.png",
    imagePosition: "center bottom",
    icon: HeartIcon,
    featured: false,
  },
  {
    title: "Disponible 7j/7",
    description:
      "Notre équipe est disponible à tout moment pour vous accompagner sereinement.",
    image: "/services/intro-disponible-v2.png",
    imagePosition: "center bottom",
    icon: ClockIcon,
    featured: false,
  },
];

export default function Intro() {
  return (
    <section id="a-propos" className="concierge-listen section-color-bridge">
      <Image
        src="/services/background-interieur-original.jpg"
        alt=""
        fill
        sizes="100vw"
        className="concierge-listen__background"
        aria-hidden="true"
      />
      <div className="concierge-listen__veil" aria-hidden="true" />

      <div className="concierge-listen__inner">
        <header className="concierge-listen__heading">
          <div className="concierge-listen__seal" aria-hidden="true">
            <SealMarkIcon />
          </div>

          <h2>Une conciergerie à votre écoute</h2>

          <p>
            Séjours sur mesure et accompagnement personnalisé,
            <br />
            du premier contact jusqu&apos;à votre retour.
          </p>
        </header>

        <div className="concierge-listen__cards">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.image}
                className={`concierge-service-card${
                  service.featured ? " concierge-service-card--featured" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 699px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="concierge-service-card__image"
                  style={{ objectPosition: service.imagePosition }}
                  aria-hidden="true"
                />
                <div className="concierge-service-card__shade" aria-hidden="true" />

                <div className="concierge-service-card__content">
                  <span className="concierge-service-card__icon">
                    <Icon />
                  </span>
                  <span className="concierge-service-card__rule" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <span className="concierge-service-card__rule" aria-hidden="true" />
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p
          className="mobile-carousel-hint mobile-carousel-hint--light concierge-listen__carousel-hint"
          aria-hidden="true"
        >
          <span>←</span>
          Faites glisser pour découvrir
          <span>→</span>
        </p>

        <a href="#services" className="concierge-listen__cta">
          Voir nos services
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
