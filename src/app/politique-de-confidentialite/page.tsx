import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — SP Voyages",
  description: "Politique de confidentialité et protection des données personnelles de SP Voyages.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 leading-relaxed text-neutral-800">
        <a href="/" className="mb-8 inline-block text-sm font-semibold text-emerald-700">
          ← Retour au site
        </a>
        <h1 className="mb-2 text-3xl font-bold">Politique de confidentialité</h1>
        <p className="mb-10 text-sm text-neutral-500">Dernière mise à jour : 22 septembre 2026</p>

        <p>
          SP Voyages (« nous ») s&apos;engage à protéger la vie privée des utilisateurs de son site
          spvoyages.com. Cette politique explique quelles données nous collectons, pourquoi, et
          comment vous pouvez exercer vos droits.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">1. Responsable du traitement</h2>
        <p>
          SP Voyages
          <br />
          12 Rue Montebello, 69003 Lyon / 17 Avenue Jean Cagne, 69200 Vénissieux
          <br />
          Contact : <a href="mailto:contact@spvoyages.com" className="text-emerald-700">contact@spvoyages.com</a> · 04 78 62 65 08
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">2. Données que nous collectons</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Formulaire de devis</strong> : nom, e-mail, téléphone, destination souhaitée,
            nombre de voyageurs et message, afin de répondre à votre demande.
          </li>
          <li>
            <strong>Navigation</strong> : si vous acceptez les cookies de mesure d&apos;audience,
            nous collectons des statistiques anonymisées (pages visitées, provenance).
          </li>
        </ul>

        <h2 className="mb-2 mt-8 text-xl font-bold">3. Cookies</h2>
        <p>
          Notre site utilise des cookies de mesure d&apos;audience uniquement après votre
          consentement. Vous pouvez retirer votre consentement à tout moment en effaçant les
          cookies de votre navigateur.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">4. Base légale et finalité</h2>
        <p>
          Vos données sont traitées sur la base de votre consentement afin de répondre à vos
          demandes de devis et, le cas échéant, d&apos;améliorer notre site.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">5. Durée de conservation</h2>
        <p>
          Les demandes de devis sont conservées le temps nécessaire au traitement de votre
          dossier, puis archivées conformément à nos obligations légales.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">6. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement et d&apos;opposition sur vos données personnelles. Pour exercer ces
          droits, contactez-nous à{" "}
          <a href="mailto:contact@spvoyages.com" className="text-emerald-700">contact@spvoyages.com</a>. Vous
          pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).
        </p>

        <h2 className="mb-2 mt-8 text-xl font-bold">7. Partage des données</h2>
        <p>
          Nous ne vendons ni ne louons vos données personnelles. Elles peuvent être partagées avec
          les compagnies aériennes et maritimes partenaires uniquement dans le cadre de la
          réservation que vous nous confiez.
        </p>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-500">
          Cette page est un modèle générique à faire relire par un professionnel du droit avant
          mise en production, et à compléter avec votre numéro SIRET / immatriculation Atout
          France si applicable.
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
