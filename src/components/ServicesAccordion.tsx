"use client";

import { useState } from "react";

import "./ServicesAccordion.css";

function SunriseIcon() {
  return (
    <svg viewBox="0 0 132 76" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M14 56h104M24 63h84M37 70h58" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M42 55a24 24 0 0 1 48 0" strokeWidth="1.2" />
      <path
        d="M66 14v13M28 30l9 7M104 30l-9 7M14 54h13M105 54h13"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="m43 18 5 10M89 18l-5 10" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M14 45.5 11 54l10-4.2A22 22 0 1 0 14 45.5Z"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="31" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="32" cy="31" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="40" cy="31" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="32" cy="22.5" r="10" strokeWidth="2" />
      <path
        d="M16 53v-5.5C16 38.9 23.2 34 32 34s16 4.9 16 13.5V53"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="m32 8 5.4 17.6L54 32l-16.6 6.4L32 56l-5.4-17.6L10 32l16.6-6.4L32 8Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="12" y="15" width="40" height="38" rx="2" strokeWidth="2" />
      <path d="M12 25h40M22 10v10M42 10v10" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M21 33h4M30 33h4M39 33h4M21 42h4M30 42h4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PalmShadow() {
  return (
    <svg viewBox="0 0 430 560" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round">
        <path d="M415-30C342 92 297 266 282 575" strokeWidth="13" />
        <path d="M341 142C252 88 161 72 54 94" strokeWidth="10" />
        <path d="M344 137C266 28 191-16 104-30" strokeWidth="10" />
        <path d="M349 143C398 46 422-37 416-90" strokeWidth="10" />
        <path d="M347 147C421 132 478 139 529 176" strokeWidth="10" />
        <path d="M334 156C260 165 191 211 137 280" strokeWidth="9" />
        <path d="M326 142C246 117 174 122 99 157" strokeWidth="8" />
        <path d="M350 154C397 199 427 261 435 332" strokeWidth="9" />
      </g>
    </svg>
  );
}

function WaterWave() {
  return (
    <svg
      viewBox="0 0 650 500"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="faq-water-fill" x1="318" y1="126" x2="114" y2="493">
          <stop stopColor="#f2fafb" stopOpacity=".42" />
          <stop offset=".42" stopColor="#a8d9e7" stopOpacity=".48" />
          <stop offset="1" stopColor="#5fb0cf" stopOpacity=".55" />
        </linearGradient>
        <linearGradient id="faq-water-line" x1="410" y1="122" x2="47" y2="453">
          <stop stopColor="#ffffff" stopOpacity=".76" />
          <stop offset=".5" stopColor="#8ac9df" stopOpacity=".37" />
          <stop offset="1" stopColor="#278db7" stopOpacity=".2" />
        </linearGradient>
        <filter id="faq-water-distort" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".009 .025"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
        <clipPath id="faq-water-clip">
          <path d="M-18 198C63 125 150 105 232 126c104 27 126 118 212 177 67 46 124 83 224 94v121H-18V198Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#faq-water-clip)">
        <rect y="86" width="650" height="432" fill="url(#faq-water-fill)" />
        <g filter="url(#faq-water-distort)" stroke="url(#faq-water-line)" strokeLinecap="round">
          <path d="M-35 240C78 130 199 133 298 195c76 48 105 119 180 158 52 28 111 36 179 29" strokeWidth="8" />
          <path d="M-38 278C78 173 187 168 277 219c84 48 114 129 199 170 54 26 112 32 183 23" strokeWidth="5" />
          <path d="M-43 318c123-97 231-96 319-42 78 47 111 117 195 155 55 24 120 27 188 14" strokeWidth="4" />
          <path d="M-31 365c110-74 214-70 299-20 80 47 115 106 194 137 56 23 120 22 188 9" strokeWidth="7" />
          <path d="M11 206c87-49 164-50 231-16 75 39 103 101 167 137" strokeWidth="2.5" />
          <path d="M-18 400c94-52 192-42 278 4 57 30 96 72 139 98" strokeWidth="3" />
        </g>
        <path
          d="M-13 218C83 133 165 122 236 148c79 29 105 100 166 142"
          stroke="#fff"
          strokeOpacity=".62"
          strokeWidth="16"
          strokeLinecap="round"
          filter="url(#faq-water-distort)"
        />
        <path
          d="M-8 225C81 154 158 143 229 168c74 27 99 88 158 130"
          stroke="#82c8dd"
          strokeOpacity=".24"
          strokeWidth="23"
          strokeLinecap="round"
          filter="url(#faq-water-distort)"
        />
      </g>
    </svg>
  );
}

const items = [
  {
    question: "Comment réserver ?",
    answer:
      "Vous nous contactez via WhatsApp depuis le site ; nous confirmons ensuite les disponibilités avec vous.",
    icon: <ChatIcon />,
  },
  {
    question: "Qui gère mon séjour ?",
    answer:
      "Le gérant vous accompagne personnellement, de la réservation jusqu’à votre départ.",
    icon: <UserIcon />,
  },
  {
    question: "Que comprend la conciergerie ?",
    answer:
      "Ménage, linge de maison, accueil et assistance disponible tout au long de votre séjour.",
    icon: <SparkleIcon />,
  },
  {
    question: "Puis-je annuler ma réservation ?",
    answer:
      "Les conditions d’annulation sont discutées directement avec le gérant au moment de la réservation, pour rester flexibles selon votre situation.",
    icon: <CalendarIcon />,
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-section" aria-labelledby="services-title">
      <span id="services" className="section-anchor" aria-hidden="true" />
      <div className="faq-paper-texture" aria-hidden="true" />
      <div className="faq-water">
        <WaterWave />
      </div>
      <div className="faq-palm">
        <PalmShadow />
      </div>

      <div className="faq-inner">
        <header className="faq-intro">
          <p className="faq-eyebrow">Questions fréquentes</p>
          <h2 id="services-title">Nos services</h2>
          <p className="faq-description">
            Toutes les réponses aux questions que vous vous posez avant votre séjour en
            Guadeloupe.
          </p>
          <div className="faq-sunrise">
            <SunriseIcon />
          </div>
          <a href="#contact" className="faq-cta">
            Poser une question
            <ArrowIcon />
          </a>
        </header>

        <div className="faq-accordion">
          {items.map((item, index) => {
            const isOpen = open === index;
            const panelId = `service-answer-${index}`;

            return (
              <article
                key={item.question}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq-icon">{item.icon}</span>
                  <span className="faq-question">{item.question}</span>
                  <svg
                    className="faq-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 9 7 7 7-7"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={panelId}
                  className="faq-answer"
                  aria-hidden={!isOpen}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <a href="#contact" className="faq-cta faq-cta--mobile">
          Poser une question
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
