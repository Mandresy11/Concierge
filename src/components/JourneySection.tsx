import JourneyCardIcon from "@/components/JourneyCardIcon";

function ChatIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M9 34.5 6.5 42l8.2-3.6A18 18 0 1 0 9 34.5Z" />
      <path d="M16 22h16M16 28h10" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="7" y="10" width="34" height="31" rx="5" />
      <path d="M7 19h34M16 6v8M32 6v8M16 29l5 5 11-12" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="17" cy="24" r="10" />
      <path d="m26 24 15-15M34 16l5 5M29 21l4 4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4.2 4.2M33.3 33.3l4.2 4.2M37.5 10.5l-4.2 4.2M14.7 33.3l-4.2 4.2" />
    </svg>
  );
}

const steps = [
  {
    title: "Premier échange",
    description:
      "Vous partagez vos dates, vos besoins et vos envies pour imaginer un séjour qui vous ressemble.",
    icon: ChatIcon,
    cardIcon: "message",
  },
  {
    title: "Préparation du séjour",
    description:
      "Le logement, le linge et les services sont soigneusement préparés avant votre arrivée.",
    icon: CalendarIcon,
    cardIcon: "calendar",
  },
  {
    title: "Accueil en Guadeloupe",
    description:
      "Vous êtes accueilli et accompagné dès votre installation dans votre logement.",
    icon: KeyIcon,
    cardIcon: "key",
  },
  {
    title: "Profitez sereinement",
    description:
      "La conciergerie reste disponible tout au long du séjour pour répondre à vos besoins.",
    icon: SunIcon,
    cardIcon: "sun",
  },
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export default function JourneySection() {
  return (
    <section id="sejour-etapes" className="journey-section section-color-bridge">
      <div className="journey-section__glow journey-section__glow--left" aria-hidden="true" />
      <div className="journey-section__glow journey-section__glow--right" aria-hidden="true" />

      <div className="journey-section__inner">
        <header className="journey-section__heading">
          <span className="journey-section__eyebrow">De la demande à votre retour</span>
          <h2>
            Votre séjour en <em>4 étapes</em>
          </h2>
          <p>
            Un accompagnement simple et attentionné, pensé pour vous laisser
            profiter pleinement de la Guadeloupe.
          </p>
        </header>

        <div className="journey-mobile-route" aria-hidden="true">
          <span>Votre parcours</span>
          <span className="journey-mobile-route__track">
            {steps.map((step) => (
              <i key={step.title} />
            ))}
          </span>
          <strong>4 étapes</strong>
        </div>

        <div className="journey-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="journey-step">
                <div className="journey-step__marker">
                  <Icon />
                </div>

                <span className="journey-step__number">
                  {index + 1}
                </span>

                {index < steps.length - 1 && (
                  <span className="journey-step__arrow" aria-hidden="true" />
                )}

                <div className="journey-step__card">
                  <span className="journey-step__card-icon" aria-hidden="true">
                    <JourneyCardIcon name={step.cardIcon} />
                  </span>
                  <h3>{step.title}</h3>
                  <span className="journey-step__rule" aria-hidden="true" />
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mobile-carousel-hint mobile-carousel-hint--light" aria-hidden="true">
          <span>←</span>
          Parcourez les 4 étapes
          <span>→</span>
        </p>

        <a href="#contact" className="journey-section__cta">
          Préparer mon séjour
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
