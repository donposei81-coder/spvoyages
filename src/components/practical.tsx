import Reveal from "@/components/reveal";

export default function Practical() {
  return (
    <section className="prac">
      <div className="wrap">
        <Reveal as="h2">Ce que fait un conseiller que ne fait pas un comparateur</Reveal>
        <div className="prac-grid">
          <Reveal as="div" className="prac-item">
            <h4>Le vrai prix, bagages compris</h4>
            <p>
              Un billet low-cost à 49 € devient vite plus cher qu&apos;Air Algérie une fois les
              23 kg ajoutés. Nous comparons le total.
            </p>
          </Reveal>
          <Reveal as="div" className="prac-item">
            <h4>Les dates qui bougent</h4>
            <p>
              Décaler d&apos;un jour fait souvent gagner 80 €. Nous regardons la semaine
              entière avant de vous proposer quelque chose.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
