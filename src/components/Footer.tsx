import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3C16.2 4.3 15.2 4 14 4c-2.4 0-4 1.5-4 4.2V10.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.5.3.1.2.1.9-.1 1.6z" />
    </svg>
  );
}

const sections = [
  {
    title: "Découvrir",
    links: [
      { name: "Nos logements", href: "#logements" },
      { name: "Services", href: "#services" },
      { name: "Galerie", href: "#galerie" },
      { name: "À propos", href: "#a-propos" },
    ],
  },
  {
    title: "Votre séjour",
    links: [
      { name: "Votre séjour en 4 étapes", href: "#sejour-etapes" },
      { name: "Avis voyageurs", href: "#avis" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Informations",
    links: [
      { name: "Mentions légales", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "CGV", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <WhatsAppIcon />, href: "#", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="section-color-bridge bg-[#0d1b30] px-6 py-16 text-white md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex flex-col gap-5 lg:max-w-xs">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="La Conciergerie Bunel"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-(family-name:--font-playfair) text-sm tracking-[0.15em] uppercase">
                  La Conciergerie Bunel
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#c9a24a] uppercase">
                  Guadeloupe
                </span>
              </span>
            </a>
            <p className="text-sm text-white/60">
              Conciergerie de logements meublés en Guadeloupe : séjours sur mesure
              et accompagnement personnalisé, du premier contact jusqu&apos;à votre
              retour.
            </p>
            <ul className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#c9a24a] hover:text-[#c9a24a]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full gap-10 sm:grid-cols-3 lg:max-w-xl">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-medium tracking-[0.2em] text-[#c9a24a] uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="transition-colors hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 La Conciergerie Bunel. Tous droits réservés.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
