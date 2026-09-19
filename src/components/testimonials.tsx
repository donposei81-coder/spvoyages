import { Banknote, Ticket, BadgeCheck } from "lucide-react";
import Reveal from "@/components/reveal";

const STARS = "★★★★★";

const LYON_URL =
  "https://www.google.com/maps/place/SP+VOYAGES/@45.755833,4.842488,17z/data=!4m8!3m7!1s0x47f4c38f96613877:0xbde0246bbd691b89!8m2!3d45.755833!4d4.842488!16s%2Fg%2F11b6bd2nr6";
const VENISSIEUX_URL =
  "https://www.google.com/maps/place/SP+VOYAGES/@45.6967926,4.8711123,17z/data=!4m8!3m7!1s0x47f4c27019f734c5:0x15bcd350c11c1a28!8m2!3d45.6967926!4d4.8711123!16s%2Fg%2F11bzz3lpdg";

const REVIEWS = [
  {
    name: "Samia A.",
    text: "Superbe agence, toujours bien reçus et avec des facilités de paiement. Vraiment rien à dire, nous reviendrons prendre nos billets dans cette agence ! Foncez les yeux fermés.",
    branch: "Lyon 3",
    url: LYON_URL,
  },
  {
    name: "Mohamed B.",
    text: "J'ai pris mon billet aujourd'hui chez eux et ça n'était pas la première fois, rien à dire, personnel sympathique et accueillant, souriant et à l'écoute, ça fait plaisir !",
    branch: "Vénissieux",
    url: VENISSIEUX_URL,
  },
  {
    name: "Zine eddine B.",
    text: "Je recommande l'agence, le service est de qualité et le personnel est à l'écoute et très sympathique.",
    branch: "Lyon 3",
    url: LYON_URL,
  },
];

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="wrap">
        <Reveal as="div" className="testi-head">
          <h2>Ce qu&apos;en disent nos clients</h2>
          <div className="testi-scores">
            <a href={LYON_URL} target="_blank" rel="noopener noreferrer">
              <b>4,9</b> <span aria-hidden>{STARS}</span> Lyon 3 · 57 avis
            </a>
            <a href={VENISSIEUX_URL} target="_blank" rel="noopener noreferrer">
              <b>4,6</b> <span aria-hidden>{STARS}</span> Vénissieux · 78 avis
            </a>
          </div>
        </Reveal>
        <div className="testi-grid">
          {REVIEWS.map((r, i) => (
            <Reveal as="figure" className="testi-card" key={r.name} delay={i * 0.05}>
              <div className="testi-stars" aria-label="5 étoiles sur 5">
                {STARS}
              </div>
              <blockquote>&laquo;&nbsp;{r.text}&nbsp;&raquo;</blockquote>
              <figcaption>
                <b>{r.name}</b>
                <span>{r.branch}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="testi-note">
          Avis publiés sur les fiches Google des deux agences SP Voyages (Lyon 3 et Vénissieux).
          Google ne vérifie pas les avis mais supprime les faux contenus identifiés.
        </p>

        <div className="agrement">
          <BadgeCheck size={18} aria-hidden />
          Agence de voyages agréée IATA
        </div>

        <div className="payments">
          <span className="payments-label">Moyens de paiement acceptés</span>
          <ul>
            {/* eslint-disable @next/next/no-img-element */}
            <li className="payment-logos">
              <img src="/img/payments/visa.svg" alt="Visa" />
              <img src="/img/payments/mastercard.svg" alt="Mastercard" />
              <img src="/img/payments/cb.svg" alt="Carte Bancaire" />
              <span>Paiement en ligne sécurisé</span>
            </li>
            <li>
              <Banknote size={18} aria-hidden />
              Espèces
            </li>
            <li>
              <Ticket size={18} aria-hidden />
              Chèques Vacances
            </li>
            <li className="payment-logos">
              <img src="/img/payments/oney.svg" alt="Oney" />
              <span>3x ou 4x</span>
            </li>
            {/* eslint-enable @next/next/no-img-element */}
          </ul>
        </div>
      </div>
    </section>
  );
}
