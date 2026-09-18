"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import NumberTicker from "@/components/ui/number-ticker";

const STATS: { target: number; suffix: string; label: string }[] = [
  { target: 18, suffix: "", label: "liaisons aériennes au départ de Lyon" },
  { target: 20, suffix: "", label: "traversées en ferry" },
  { target: 11, suffix: "", label: "compagnies aériennes et maritimes" },
  { target: 24, suffix: " h", label: "délai de réponse, jours ouvrés" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="stats">
      <div className="wrap stats-grid" ref={ref}>
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <b>
              {inView ? <NumberTicker from={0} target={s.target} /> : 0}
              {s.suffix}
            </b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
