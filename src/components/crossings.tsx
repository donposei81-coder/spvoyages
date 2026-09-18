import Image from "next/image";
import Reveal from "@/components/reveal";

const SHIPS = [
  { img: "/img/ferry-corsica.jpg", alt: "Navire Corsica Linea", label: "Corsica Linea" },
  { img: "/img/ferry-ctn.jpg", alt: "Navire Tunisia Ferries (CTN)", label: "CTN — Tunisia Ferries" },
  { img: "/img/ferry-balearia.jpg", alt: "Navire Balearia", label: "Balearia" },
];

const OPS = [
  { name: "Corsica Linea", route: "France → Algérie, Tunisie" },
  { name: "CTN", route: "France, Italie → Tunisie" },
  { name: "GNV", route: "France, Italie → Tunisie, Maroc" },
  { name: "Balearia", route: "Espagne → Maroc, Algérie" },
];

const CROSSINGS = [
  { r: "Marseille → Alger", meta: "Corsica Linea · cabine ou fauteuil · véhicule possible", dur: "env. 20 h" },
  { r: "Marseille → Tunis", meta: "CTN et Corsica Linea · véhicule possible", dur: "env. 22 h" },
  { r: "Gênes → Tunis", meta: "GNV · départs plusieurs fois par semaine", dur: "env. 24 h" },
  { r: "Sète → Nador", meta: "GNV · saison estivale renforcée", dur: "env. 38 h" },
  { r: "Algésiras → Tanger Med", meta: "Balearia · rotations quotidiennes", dur: "env. 1 h 30" },
];

export default function Crossings() {
  return (
    <section className="cross" id="traversees">
      <div className="wrap cross-grid">
        <Reveal>
          <h2>Partir avec sa voiture</h2>
          <p className="intro">
            Pour les familles qui descendent chargées, le ferry reste souvent moins cher que
            l&apos;avion à quatre avec les bagages. Nous réservez cabines, fauteuils et
            emplacements véhicule.
          </p>
          <div className="ships">
            {SHIPS.map((s) => (
              <figure key={s.label}>
                <Image src={s.img} alt={s.alt} width={280} height={140} />
                <figcaption>{s.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="ops">
            {OPS.map((o) => (
              <div className="op" key={o.name}>
                <b>{o.name}</b>
                <span>{o.route}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal as="div" className="crossing-list">
          {CROSSINGS.map((c) => (
            <div className="crossing" key={c.r}>
              <div>
                <div className="r">{c.r}</div>
                <div className="meta">{c.meta}</div>
              </div>
              <div className="dur">{c.dur}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
