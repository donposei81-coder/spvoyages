"use client";

import { useState, type FormEvent } from "react";
import { ROUTES, PAYS, norm } from "@/data/routes";
import DateField from "@/components/date-field";

function fmtDate(d: Date | undefined) {
  if (!d) return null;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function Finder() {
  const [segMode, setSegMode] = useState<"air" | "sea">("air");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [out, setOut] = useState<Date | undefined>(undefined);
  const [back, setBack] = useState<Date | undefined>(undefined);
  const [pax, setPax] = useState("2");
  const [searched, setSearched] = useState(false);

  function runSearch(e?: FormEvent) {
    e?.preventDefault();
    setSearched(true);
  }

  function requestQuote(a: string, b: string, c: string) {
    const modeSel = document.getElementById("mode") as HTMLSelectElement | null;
    const deInput = document.getElementById("de") as HTMLInputElement | null;
    const paysSel = document.getElementById("pays") as HTMLSelectElement | null;
    const paxInput = document.getElementById("pax") as HTMLInputElement | null;
    const detInput = document.getElementById("det") as HTMLTextAreaElement | null;
    if (modeSel) modeSel.value = segMode === "air" ? "Avion" : "Bateau";
    if (deInput) deInput.value = a;
    const p = PAYS[norm(b)];
    if (p && paysSel) paysSel.value = p;
    if (paxInput) paxInput.value = pax;
    let txt = `Trajet : ${a} → ${b}.`;
    if (c) txt += ` Compagnies : ${c}.`;
    if (out) txt += ` Aller le ${fmtDate(out)}.`;
    if (back) txt += ` Retour le ${fmtDate(back)}.`;
    txt += ` ${pax} voyageur${Number(pax) > 1 ? "s" : ""}.`;
    if (detInput) detInput.value = txt;
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("nom")?.focus(), 600);
  }

  const rows = searched
    ? ROUTES[segMode].filter(
        ([a, b]) =>
          (!from || norm(a).includes(norm(from))) && (!to || norm(b).includes(norm(to))),
      )
    : [];
  const label = segMode === "air" ? "liaison aérienne" : "traversée";

  return (
    <section className="finder" id="recherche">
      <div className="wrap">
        <div className="finder-box reveal">
          <div className="finder-top">
            <h2>Chercher une liaison</h2>
            <div className="seg">
              <button
                type="button"
                aria-pressed={segMode === "air"}
                onClick={() => {
                  setSegMode("air");
                  if (searched) setSearched(true);
                }}
              >
                Avion
              </button>
              <button
                type="button"
                aria-pressed={segMode === "sea"}
                onClick={() => {
                  setSegMode("sea");
                  if (searched) setSearched(true);
                }}
              >
                Bateau
              </button>
            </div>
          </div>
          <form className="finder-fields" onSubmit={runSearch}>
            <div>
              <label htmlFor="f-from">Départ</label>
              <input
                id="f-from"
                list="villes-fr"
                placeholder="Marseille"
                autoComplete="off"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="f-to">Arrivée</label>
              <input
                id="f-to"
                list="villes-mg"
                placeholder="Alger"
                autoComplete="off"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <DateField id="f-out" label="Aller" value={out} onChange={setOut} />
            <DateField id="f-back" label="Retour" value={back} onChange={setBack} fromDate={out} />
            <div>
              <label htmlFor="f-pax">Voyageurs</label>
              <input
                id="f-pax"
                type="number"
                min={1}
                max={9}
                value={pax}
                onChange={(e) => setPax(e.target.value)}
              />
            </div>
            <button type="submit">Rechercher</button>
          </form>

          <div className="results" aria-live="polite">
            {searched && rows.length > 0 && (
              <>
                <p className="res-count">
                  {rows.length} {label}
                  {rows.length > 1 ? "s" : ""} correspondent à votre recherche.
                </p>
                {rows.map(([a, b, c]) => (
                  <div className="res" key={`${a}-${b}`}>
                    <div>
                      <div className="leg2">
                        {a}
                        <s>→</s>
                        {b}
                      </div>
                      <div className="sub">{c}</div>
                    </div>
                    <button type="button" onClick={() => requestQuote(a, b, c)}>
                      Demander un prix
                    </button>
                  </div>
                ))}
              </>
            )}
            {searched && rows.length === 0 && (
              <>
                <p className="res-empty">
                  <b>Aucune liaison régulière enregistrée sur ce trajet.</b>
                  <br />
                  Nous réservons aussi les vols avec escale et les lignes saisonnières :
                  envoyez-nous la demande et un conseiller cherche pour vous.
                </p>
                <div className="res">
                  <div>
                    <div className="leg2">
                      {from || "Départ"}
                      <s>→</s>
                      {to || "Arrivée"}
                    </div>
                    <div className="sub">Recherche sur mesure par un conseiller</div>
                  </div>
                  <button type="button" onClick={() => requestQuote(from, to, "")}>
                    Demander un prix
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <datalist id="villes-fr">
        {["Lyon", "Marseille", "Sète", "Barcelone", "Valence", "Almería", "Algésiras", "Gênes"].map(
          (v) => (
            <option key={v}>{v}</option>
          ),
        )}
      </datalist>
      <datalist id="villes-mg">
        {[
          "Alger",
          "Oran",
          "Constantine",
          "Annaba",
          "Sétif",
          "Béjaïa",
          "Batna",
          "Biskra",
          "Tlemcen",
          "Skikda",
          "Ghazaouet",
          "Mostaganem",
          "Casablanca",
          "Marrakech",
          "Tanger",
          "Agadir",
          "Fès",
          "Oujda",
          "Nador",
          "Melilla",
          "Tunis",
          "Monastir",
          "Djerba",
        ].map((v) => (
          <option key={v}>{v}</option>
        ))}
      </datalist>
    </section>
  );
}
