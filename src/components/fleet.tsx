import Image from "next/image";
import Reveal from "@/components/reveal";
import { LogoMarquee } from "@/components/ui/logo-marquee";

const PARTNERS = [
  "Air Algérie",
  "Royal Air Maroc",
  "Tunisair",
  "Transavia",
  "Air Arabia",
  "Volotea",
  "easyJet",
  "Nouvelair",
  "Corsica Linea",
  "CTN",
  "GNV",
  "Balearia",
].map((label, i) => ({ id: `${i}-${label}`, label }));

const FLEET = [
  {
    img: "/img/fleet-royal-air-maroc.jpg",
    alt: "Boeing 787 Royal Air Maroc",
    name: "Royal Air Maroc",
    note: "Maroc · vols directs",
  },
  {
    img: "/img/fleet-transavia.jpg",
    alt: "Boeing 737 Transavia",
    name: "Transavia",
    note: "Maroc, Algérie, Tunisie",
  },
  {
    img: "/img/fleet-volotea.jpg",
    alt: "Airbus A320 Volotea",
    name: "Volotea",
    note: "Maroc · lignes régionales",
  },
  {
    img: "/img/fleet-air-arabia.jpg",
    alt: "Airbus A320 Air Arabia",
    name: "Air Arabia Maroc",
    note: "Maroc · tarifs économiques",
  },
];

export default function Fleet() {
  return (
    <section className="fleet">
      <div className="wrap">
        <Reveal as="h2">Les compagnies sur lesquelles nous réservons</Reveal>
        <Reveal className="fleet-lead">
          <figure>
            <Image
              src="/img/fleet-air-algerie.jpg"
              alt="Airbus A330 d'Air Algérie en vol"
              width={620}
              height={360}
            />
          </figure>
          <div>
            <h3>Air Algérie</h3>
            <p>
              Notre compagnie la plus demandée. Elle dessert à elle seule les neuf villes
              algériennes que nous proposons au départ de Lyon, y compris les aéroports
              intérieurs comme Biskra, Batna et Tlemcen que peu de compagnies desservent.
            </p>
          </div>
        </Reveal>
        <div className="fleet-grid">
          {FLEET.map((f) => (
            <Reveal as="figure" key={f.name}>
              <Image src={f.img} alt={f.alt} width={280} height={160} />
              <figcaption>
                {f.name}
                <span>{f.note}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="fleet-note">11 compagnies aériennes et maritimes partenaires&nbsp;:</p>
        <LogoMarquee items={PARTNERS} label="Compagnies partenaires" speed={32} gap={8} />
      </div>
    </section>
  );
}
