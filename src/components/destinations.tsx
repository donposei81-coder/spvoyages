import Image from "next/image";
import Reveal from "@/components/reveal";

const PANELS = [
  {
    img: "/img/dest-algerie.jpg",
    alt: "Baie d'Oran, Algérie",
    name: "Algérie",
    cities: "Alger · Oran · Constantine · Annaba · Sétif · Béjaïa · Batna · Biskra · Tlemcen",
    carriers: ["Air Algérie", "Transavia", "Corsica Linea", "Volotea", "GNV", "Balearia", "Armas Trasmediterranea"],
  },
  {
    img: "/img/dest-maroc.jpg",
    alt: "Mosquée Koutoubia, Marrakech",
    name: "Maroc",
    cities: "Casablanca · Marrakech · Tanger · Agadir · Fès · Oujda",
    carriers: ["Royal Air Maroc", "Transavia", "easyJet", "Volotea", "Air Arabia", "GNV", "Balearia", "Armas Trasmediterranea"],
  },
  {
    img: "/img/dest-tunisie.jpg",
    alt: "Sidi Bou Saïd, Tunisie",
    name: "Tunisie",
    cities: "Tunis · Monastir · Djerba",
    carriers: ["Tunisair", "Nouvelair", "Transavia", "CTN", "GNV"],
  },
];

export default function Destinations() {
  return (
    <section className="dest" id="destinations">
      <div className="wrap">
        <Reveal as="h2">Trois pays, douze compagnies, un seul interlocuteur</Reveal>
        <div className="panels">
          {PANELS.map((p) => (
            <Reveal as="article" className="panel" key={p.name}>
              <div className="panel-art">
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="panel-body">
                <h3>{p.name}</h3>
                <p className="cities">{p.cities}</p>
                <ul className="carriers">
                  {p.carriers.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <a className="more" href="#devis">
                  Demander un devis {p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
