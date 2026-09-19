import { MapPin, Phone, Clock } from "lucide-react";
import Reveal from "@/components/reveal";

const AGENCIES = [
  {
    city: "Lyon 3",
    address: "12 Rue Montebello, 69003 Lyon",
    tel: "04 78 62 65 08",
    telHref: "tel:+33478626508",
    mapQuery: "SP+Voyages+12+Rue+Montebello+69003+Lyon",
    dirQuery: "SP Voyages, 12 Rue Montebello, 69003 Lyon",
  },
  {
    city: "Vénissieux",
    address: "17 Avenue Jean Cagne, 69200 Vénissieux",
    tel: "09 73 88 09 87",
    telHref: "tel:+33973880987",
    mapQuery: "SP+Voyages+17+Avenue+Jean+Cagne+69200+Venissieux",
    dirQuery: "SP Voyages, 17 Avenue Jean Cagne, 69200 Vénissieux",
  },
];

const HOURS = [
  ["Lundi – Jeudi", "9h30–12h · 14h–18h"],
  ["Vendredi", "9h30–12h · 14h–18h"],
  ["Samedi", "9h30–12h"],
  ["Dimanche", "Fermé"],
];

export default function FindUs() {
  return (
    <section className="findus">
      <div className="wrap">
        <Reveal as="h2">Nous trouver</Reveal>
        <div className="findus-grid">
          {AGENCIES.map((a) => (
            <Reveal as="article" className="findus-card" key={a.city}>
              <iframe
                className="findus-map"
                loading="lazy"
                title={`Carte SP Voyages ${a.city}`}
                src={`https://www.google.com/maps?q=${a.mapQuery}&output=embed`}
              />
              <div className="findus-body">
                <h3>SP Voyages — {a.city}</h3>
                <p>
                  <MapPin size={16} aria-hidden />
                  {a.address}
                </p>
                <p>
                  <Phone size={16} aria-hidden />
                  <a href={a.telHref}>{a.tel}</a>
                </p>
                <div className="findus-hours">
                  <p className="findus-hours-label">
                    <Clock size={16} aria-hidden />
                    Horaires
                  </p>
                  <ul>
                    {HOURS.map(([day, hours]) => (
                      <li key={day}>
                        <span>{day}</span>
                        <span>{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  className="findus-dir"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(a.dirQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itinéraire →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
