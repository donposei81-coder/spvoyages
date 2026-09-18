"use client";

import { useRef, useState, type MouseEvent } from "react";

export default function Hero({
  airMapSvg,
  seaMapSvg,
}: {
  airMapSvg: string;
  seaMapSvg: string;
}) {
  const [map, setMap] = useState<"air" | "sea">("air");
  const visualRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  if (typeof window !== "undefined") {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reducedRef.current) return;
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 4}deg) rotateX(${-py * 4}deg)`;
  }

  function handleMouseLeave() {
    const el = visualRef.current;
    if (el) el.style.transform = "";
  }

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <p className="kicker">Vols secs et traversées en ferry</p>
          <h1>
            Une mer à traverser, <em>trois pays</em> à retrouver.
          </h1>
          <p>
            Nous réservons vos billets d&apos;avion et de bateau vers l&apos;Algérie, le Maroc et
            la Tunisie.
          </p>
          <div className="cta-row">
            <a href="#devis" className="btn btn-fill">
              Demander un devis
            </a>
            <a href="#recherche" className="btn btn-line">
              Chercher une liaison
            </a>
          </div>
          <p className="hero-note">
            Réponse sous 24 h ouvrées · 11 compagnies aériennes et maritimes · Agence agréée IATA
          </p>
        </div>

        <div
          className="hero-visual"
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transition: "transform 0.2s ease-out" }}
        >
          <div className="map-tabs" role="tablist">
            <button
              type="button"
              className="mtab"
              aria-selected={map === "air"}
              onClick={() => setMap("air")}
            >
              Avion
            </button>
            <button
              type="button"
              className="mtab"
              aria-selected={map === "sea"}
              onClick={() => setMap("sea")}
            >
              Bateau
            </button>
          </div>
          <div
            key={map}
            dangerouslySetInnerHTML={{ __html: map === "air" ? airMapSvg : seaMapSvg }}
          />
          <div className="map-key">
            {map === "air" ? (
              <span>
                <i className="swatch" />
                <em>18 liaisons aériennes au départ de Lyon</em>
              </span>
            ) : (
              <span>
                <i className="swatch s2" />
                <em>20 traversées depuis la France, l&apos;Espagne et l&apos;Italie</em>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
