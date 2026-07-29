"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

// À remplacer par le vrai numéro WhatsApp du gérant (format international, sans "+" ni espaces).
const WHATSAPP_NUMBER = "590000000000";

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c1.4-3.6 4.3-5.3 7-5.3s5.6 1.7 7 5.3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M6 3h3l1.5 4.5L8 9.5a11 11 0 006.5 6.5l2-2.5L21 15v3a2 2 0 01-2 2C10.5 20 4 13.5 4 5a2 2 0 012-2z" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M4 20l1-4L16.5 4.5a1.5 1.5 0 012 2L7 18l-3 2z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2Zm-7-2a2 2 0 014 0v2h-4V7Zm3 9.7V18h-2v-1.3a2 2 0 112 0Z" />
    </svg>
  );
}

function PalmIslandIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M24 39V21M24 21c0-7-5-10-12-9 2 5 6 8 12 9Zm0 0c0-7 5-10 12-9-2 5-6 8-12 9Z" />
      <path d="M7 39c7-4 27-4 34 0M10 44h28" />
    </svg>
  );
}

export default function ContactCta() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      `Bonjour, je suis ${name || "un(e) client(e) intéressé(e)"}.`,
      phone && `Mon numéro : ${phone}.`,
      message,
    ]
      .filter(Boolean)
      .join(" ");

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      className="section-color-bridge join-section"
      aria-labelledby="join-title"
    >
      <Image
        src="/rejoindre/rejoindre-background.png"
        alt=""
        fill
        sizes="100vw"
        className="join-section__background"
        aria-hidden="true"
      />
      <div className="join-section__veil" aria-hidden="true" />

      <div className="join-section__inner">
        <div className="join-section__heading">
          <div className="join-section__ornament" aria-hidden="true">
            <PalmIslandIcon />
          </div>

          <h2 id="join-title">Envie de nous rejoindre&nbsp;?</h2>
          <p>
            Échangez avec nous simplement,
            <br />
            le message est transmis au gérant pour préparer votre séjour.
          </p>
        </div>

        <form className="join-form" onSubmit={handleSubmit}>
          <div className="join-form__fields">
            <label className="join-field">
              <PersonIcon />
              <span className="sr-only">Votre nom</span>
              <input
                type="text"
                required
                placeholder="Votre nom"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label className="join-field">
              <PhoneIcon />
              <span className="sr-only">Votre téléphone</span>
              <input
                type="tel"
                placeholder="Votre téléphone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </label>

            <label className="join-field join-field--message">
              <PencilIcon />
              <span className="sr-only">Votre demande</span>
              <input
                type="text"
                placeholder="Votre demande (dates, logement souhaité, nombre de personnes...)"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>

            <button type="submit" className="join-form__submit">
              <SendIcon />
              Envoyer un formulaire
            </button>
          </div>

          <p className="join-form__privacy">
            <LockIcon />
            Réponse directe et confidentielle. Votre message est transmis
            personnellement au gérant.
          </p>
        </form>
      </div>
    </section>
  );
}
