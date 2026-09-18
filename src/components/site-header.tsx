"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#recherche", label: "Rechercher" },
  { href: "#departs", label: "Départs" },
  { href: "#destinations", label: "Destinations" },
  { href: "#traversees", label: "Traversées" },
  { href: "#devis", label: "Devis" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = -1;
    let raf: number;
    function tick() {
      if (window.scrollY !== lastY) {
        lastY = window.scrollY;
        setScrolled(lastY > 8);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(lastY / max, 1) * 100 : 0;
        const bar = document.getElementById("scroll-progress");
        if (bar) bar.style.width = pct + "%";
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (open && navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <>
      <div className="scroll-progress" id="scroll-progress" />
      <header className={`topbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        <div className="wrap">
          <a href="#top" className="mark">
            <Image src="/img/logo.png" alt="" width={62} height={62} />
            <span>
              SP<i>Voyages</i>
            </span>
          </a>
          <nav className={`links ${open ? "open" : ""}`} id="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="call">
            <span>Conseiller</span>
            <a href="tel:+33478626508">
              <b>04 78 62 65 08</b>
            </a>
            <em>/</em>
            <a href="tel:+33973880987">
              <b>09 73 88 09 87</b>
            </a>
          </div>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
