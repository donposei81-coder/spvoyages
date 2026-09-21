import Reveal from "@/components/reveal";
import { DestinationCard } from "@/components/ui/destination-card";

const PANELS = [
  {
    img: "/img/dest-algerie.jpg",
    name: "Algérie",
    stats: "9 villes desservies · 7 compagnies",
    theme: "144 55% 41%",
  },
  {
    img: "/img/dest-maroc.jpg",
    name: "Maroc",
    stats: "6 villes desservies · 8 compagnies",
    theme: "18 87% 56%",
  },
  {
    img: "/img/dest-tunisie.jpg",
    name: "Tunisie",
    stats: "3 villes desservies · 5 compagnies",
    theme: "42 86% 58%",
  },
];

export default function Destinations() {
  return (
    <section className="dest" id="destinations">
      <div className="wrap">
        <Reveal as="h2">Trois pays, douze compagnies, un seul interlocuteur</Reveal>
        <div className="panels">
          {PANELS.map((p, i) => (
            <Reveal as="div" className="panel-card" key={p.name} delay={i * 0.08}>
              <DestinationCard
                imageUrl={p.img}
                location={p.name}
                stats={p.stats}
                href="#devis"
                themeColor={p.theme}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
