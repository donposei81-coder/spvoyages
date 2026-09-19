"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import Reveal from "@/components/reveal";

// Clé publique Web3Forms (contact@spvoyages.com) — https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "420e2b9b-0db3-49c9-a3ac-03bef16cbc24";

export default function QuoteSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nom = (form.elements.namedItem("nom") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const tel = (form.elements.namedItem("tel") as HTMLInputElement).value;
    const mode = (form.elements.namedItem("mode") as HTMLSelectElement).value;
    const pays = (form.elements.namedItem("pays") as HTMLSelectElement).value;
    const de = (form.elements.namedItem("de") as HTMLInputElement).value;
    const pax = (form.elements.namedItem("pax") as HTMLInputElement).value;
    const det = (form.elements.namedItem("det") as HTMLTextAreaElement).value;

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Demande de devis — ${pays}`,
          from_name: nom,
          Nom: nom,
          Email: email,
          Téléphone: tel,
          "Avion ou bateau": mode,
          Pays: pays,
          "Ville de départ": de,
          Voyageurs: pax,
          "Dates et précisions": det,
          replyto: email,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Échec de l'envoi");
      setSent(true);
      toast.success("Demande envoyée", {
        description: "Un conseiller vous rappelle sous 24 h ouvrées.",
      });
    } catch {
      const corps = `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${tel}\nAvion ou bateau : ${mode}\nPays : ${pays}\nVille de départ : ${de}\nVoyageurs : ${pax}\nDates et précisions : ${det}`;
      window.location.href = `mailto:contact@spvoyages.com?subject=${encodeURIComponent(
        "Demande de devis — " + pays,
      )}&body=${encodeURIComponent(corps)}`;
      setSent(true);
      toast.message("Votre logiciel mail va s'ouvrir", {
        description: "L'envoi automatique a échoué, finalisez l'envoi depuis votre boîte mail.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="quote" id="devis">
      <div className="wrap">
        <Reveal>
          <h2>Dites-nous où vous allez</h2>
          <p className="intro">
            Décrivez votre trajet, nous revenons avec les meilleures options sous 24 h ouvrées.
            Sans engagement.
          </p>
          <div className="reach">
            <div className="reach-tel">
              <small>Téléphone</small>
              <a href="tel:+33478626508">
                <b>04 78 62 65 08</b>
              </a>
              <a href="tel:+33973880987">
                <b>09 73 88 09 87</b>
              </a>
            </div>
            <a href="mailto:contact@spvoyages.com">
              <small>E-mail</small>
              <b>contact@spvoyages.com</b>
            </a>
          </div>
        </Reveal>

        <Reveal as="form" id="quote" onSubmit={handleSubmit}>
          <div className="f2">
            <div>
              <label htmlFor="nom">Nom</label>
              <input id="nom" name="nom" required />
            </div>
            <div>
              <label htmlFor="tel">Téléphone</label>
              <input id="tel" name="tel" type="tel" required />
            </div>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="f2">
            <div>
              <label htmlFor="mode">Avion ou bateau</label>
              <select id="mode" name="mode" defaultValue="Avion">
                <option>Avion</option>
                <option>Bateau</option>
                <option>À voir ensemble</option>
              </select>
            </div>
            <div>
              <label htmlFor="pays">Pays</label>
              <select id="pays" name="pays" defaultValue="Algérie">
                <option>Algérie</option>
                <option>Maroc</option>
                <option>Tunisie</option>
              </select>
            </div>
          </div>
          <div className="f2">
            <div>
              <label htmlFor="de">Ville de départ</label>
              <input id="de" name="de" placeholder="Marseille" />
            </div>
            <div>
              <label htmlFor="pax">Voyageurs</label>
              <input id="pax" name="pax" type="number" min={1} defaultValue={2} />
            </div>
          </div>
          <div>
            <label htmlFor="det">Dates souhaitées et précisions</label>
            <textarea
              id="det"
              name="det"
              rows={3}
              placeholder="Autour du 15 juillet, retour fin août, 2 adultes 2 enfants, véhicule."
            />
          </div>
          <button className="send" type="submit" disabled={sending}>
            {sent ? "Demande envoyée" : sending ? "Envoi en cours..." : "Envoyer la demande"}
          </button>
          <p className={`sent ${sent ? "on" : ""}`}>
            Demande reçue. Un conseiller vous rappelle sous 24 h ouvrées.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
