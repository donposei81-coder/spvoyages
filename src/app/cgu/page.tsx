import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — SP Voyages",
  description: "Conditions générales d'utilisation du site SP Voyages.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      <header className="border-b border-[#E8DDCE] bg-white px-6 py-4">
        <a href="/" className="inline-flex items-center gap-2 font-bold text-[#2B211C]">
          <Image src="/img/logo.png" alt="SPVoyages" width={34} height={34} className="rounded" />
          SPVoyages
        </a>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 leading-relaxed text-neutral-800">
        <a href="/" className="mb-8 inline-block text-sm font-semibold text-[#B91C34]">
          ← Retour au site
        </a>
        <h1 className="mb-2 text-3xl font-bold">Conditions générales d&apos;utilisation</h1>
        <p className="mb-10 text-sm text-neutral-500">Dernière mise à jour : 22 septembre 2026</p>

        <h2 className="mb-2 mt-8 text-xl font-bold">1. Objet</h2>
        <p>
          Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et
          l&apos;utilisation du site spvoyages.com, édité par SP Voyages. En naviguant sur ce
          site, vous acceptez sans réserve les présentes CGU.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">2. Éditeur du site</h2>
        <p>
          SP Voyages
          <br />
          12 Rue Montebello, 69003 Lyon / 17 Avenue Jean Cagne, 69200 Vénissieux
          <br />
          Téléphone : 04 78 62 65 08 / 09 73 88 09 87
          <br />
          E-mail : <a href="mailto:contact@spvoyages.com" className="text-[#B91C34]">contact@spvoyages.com</a>
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">3. Description du service</h2>
        <p>
          Le site spvoyages.com présente les prestations de l&apos;agence : recherche de vols
          secs, séjours (vol + hôtel) et traversées en ferry vers l&apos;Algérie, le Maroc et la
          Tunisie. Le site ne permet pas la réservation ou le paiement en ligne : toute demande
          passe par un devis personnalisé établi par nos conseillers.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">4. Devis et réservation</h2>
        <p>
          Les informations demandées via le formulaire de devis sont indicatives et confirmées
          uniquement après échange avec un conseiller. Les prix affichés sur le site sont donnés à
          titre indicatif et peuvent varier selon la disponibilité des compagnies partenaires.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">5. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus du site (textes, images, logo, mise en page) est la
          propriété de SP Voyages ou de ses partenaires, sauf mention contraire, et ne peut être
          reproduit sans autorisation préalable.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">6. Responsabilité</h2>
        <p>
          SP Voyages met tout en œuvre pour assurer l&apos;exactitude des informations publiées,
          mais ne saurait être tenu responsable des erreurs, omissions ou indisponibilités
          temporaires du site.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">7. Liens externes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers (compagnies partenaires, cartes
          Google Maps). SP Voyages n&apos;est pas responsable du contenu de ces sites externes.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">8. Droit applicable</h2>
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige relève de la compétence
          des tribunaux français.
        </p>
      </main>
      <footer className="border-t border-[#E8DDCE] px-6 py-8 text-center text-sm text-neutral-500">
        spvoyages.com · © 2026 SP Voyages ·{" "}
        <a href="/politique-de-confidentialite" className="font-semibold text-[#B91C34]">Confidentialité</a>
      </footer>
    </div>
  );
}
