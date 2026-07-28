function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 11.5a7.5 7.5 0 0 1-8 7.48 8.7 8.7 0 0 1-3.2-.8L4 20l1.62-4.2A7.5 7.5 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FloatingContact() {
  return (
    <a
      href="#contact"
      className="mobile-contact-bubble"
      aria-label="Prendre contact avec La Conciergerie Bunel"
    >
      <span className="mobile-contact-bubble__icon">
        <ChatIcon />
        <span className="mobile-contact-bubble__status" aria-hidden="true" />
      </span>
      <span>Contact</span>
    </a>
  );
}
