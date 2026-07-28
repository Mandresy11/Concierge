const reviews = [
  {
    quote:
      "Tout était prêt à notre arrivée, jusque dans les petites attentions. Nous avons pu profiter de nos vacances dès la première minute, avec une équipe disponible et toujours très agréable.",
    name: "Élodie & Marc",
    stay: "Séjour en famille",
    initials: "EM",
  },
  {
    quote:
      "Une organisation fluide, des conseils précieux et beaucoup de réactivité. Nous nous sommes sentis accompagnés sans jamais perdre cette sensation de liberté que nous recherchions.",
    name: "Claire D.",
    stay: "Escapade en couple",
    initials: "CD",
  },
  {
    quote:
      "Le logement était impeccable et l'accueil vraiment chaleureux. Chaque question a trouvé une réponse rapide. Une expérience sereine que nous recommandons sans hésiter.",
    name: "Nicolas R.",
    stay: "Voyage entre amis",
    initials: "NR",
  },
];

function Stars() {
  return (
    <span className="guest-reviews__stars" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true">
          <path d="m10 1.7 2.45 4.96 5.48.8-3.97 3.86.94 5.46L10 14.2l-4.9 2.58.94-5.46-3.97-3.86 5.48-.8L10 1.7Z" />
        </svg>
      ))}
    </span>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="guest-reviews__quote-icon"
      viewBox="0 0 52 42"
      aria-hidden="true"
    >
      <path d="M0 42V25.6C0 8.9 7.4 1.4 22.2 0v8.4c-6.7.8-10.2 4.4-10.5 10.8h9.8V42H0Zm30.5 0V25.6C30.5 8.9 37.9 1.4 52 0v8.4c-6.2.8-9.5 4.4-9.8 10.8H52V42H30.5Z" />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="avis"
      className="section-color-bridge guest-reviews"
      aria-labelledby="reviews-title"
    >
      <div className="guest-reviews__glow guest-reviews__glow--left" aria-hidden="true" />
      <div className="guest-reviews__glow guest-reviews__glow--right" aria-hidden="true" />

      <div className="guest-reviews__inner">
        <header className="guest-reviews__header">
          <div>
            <p className="guest-reviews__eyebrow">
              <span aria-hidden="true">✦</span>
              Avis voyageurs
            </p>
            <h2 id="reviews-title">
              Leurs plus beaux souvenirs
              <br />
              <em>commencent ici</em>
            </h2>
          </div>

        </header>

        <p className="guest-reviews__intro">
          Derrière chaque séjour, il y a une histoire. Découvrez les mots de
          celles et ceux qui nous ont confié leurs vacances en Guadeloupe.
        </p>

        <div className="guest-reviews__grid">
          {reviews.map((review, index) => (
            <article
              className={`guest-reviews__card${index === 1 ? " guest-reviews__card--featured" : ""}`}
              key={review.name}
            >
              <div className="guest-reviews__card-top">
                <Stars />
                <QuoteIcon />
              </div>

              <blockquote>« {review.quote} »</blockquote>

              <footer className="guest-reviews__author">
                <span className="guest-reviews__avatar" aria-hidden="true">
                  {review.initials}
                </span>
                <div>
                  <cite>{review.name}</cite>
                  <p>{review.stay}</p>
                </div>
                <span className="guest-reviews__verified">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="m7.8 13.7-3.5-3.5 1.4-1.4 2.1 2.1 6.5-6.5 1.4 1.4-7.9 7.9Z" />
                  </svg>
                  Voyageur
                </span>
              </footer>
            </article>
          ))}
        </div>

        <p className="guest-reviews__mobile-hint" aria-hidden="true">
          <span>←</span>
          Faites glisser pour lire les avis
          <span>→</span>
        </p>

        <div className="guest-reviews__actions">
          <a
            className="guest-reviews__google-button"
            href="https://www.google.com/maps/search/?api=1&query=La%20Conciergerie%20Bunel%20Le%20Gosier%20Guadeloupe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="guest-reviews__google-mark" aria-hidden="true">
              G
            </span>
            Voir les avis Google
            <ExternalArrowIcon />
          </a>

          <p className="guest-reviews__closing">
            Merci à nos voyageurs pour leur confiance
            <span aria-hidden="true">♡</span>
          </p>
        </div>
      </div>
    </section>
  );
}
