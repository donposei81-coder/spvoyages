"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";
import { ROUTES } from "@/data/routes";

export default function Board() {
  const [mode, setMode] = useState<"air" | "sea">("air");

  return (
    <section className="board" id="departs">
      <div className="wrap">
        <Reveal className="board-head">
          <div>
            <h2>Toutes nos liaisons</h2>
            <p>Les 38 liaisons aériennes et maritimes que nous réservons, du Maroc à la Tunisie.</p>
          </div>
          <div className="tabs-seg" role="tablist">
            <button
              className="tab"
              role="tab"
              aria-selected={mode === "air"}
              onClick={() => setMode("air")}
            >
              Avion
            </button>
            <button
              className="tab"
              role="tab"
              aria-selected={mode === "sea"}
              onClick={() => setMode("sea")}
            >
              Bateau
            </button>
          </div>
        </Reveal>

        <Reveal as="table">
          <thead>
            <tr>
              <th>Liaison</th>
              <th>Compagnies</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ROUTES[mode].map(([a, b, c]) => (
              <tr key={`${a}-${b}`}>
                <td className="leg">
                  {a}
                  <s>→</s>
                  {b}
                </td>
                <td className="carrier">{c}</td>
                <td className="act">
                  <a href="#devis">Demander un prix</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Reveal>
      </div>
    </section>
  );
}
