import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — SP Voyages",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#f0f9ff] px-6 text-center">
      <div className="text-7xl font-bold text-emerald-700">404</div>
      <h1 className="text-2xl font-bold text-neutral-800">Cette page n&apos;existe pas</h1>
      <p className="max-w-sm text-neutral-500">
        Le lien que vous avez suivi est peut-être obsolète, ou l&apos;adresse a été mal saisie.
      </p>
      <a
        href="/"
        className="mt-4 rounded-full bg-orange-600 px-8 py-3 font-semibold text-white"
      >
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
