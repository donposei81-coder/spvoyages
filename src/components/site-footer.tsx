import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <a href="#top" className="mark">
          <Image src="/img/logo-footer.png" alt="" width={34} height={34} />
          <span>
            SP<i>Voyages</i>
          </span>
        </a>
        <span>Vols secs et traversées vers l&apos;Algérie, le Maroc et la Tunisie</span>
        <span>
          spvoyages.com · © 2026 ·{" "}
          <a href="/politique-de-confidentialite">Confidentialité</a> ·{" "}
          <a href="/cgu">CGU</a>
        </span>
      </div>
    </footer>
  );
}
