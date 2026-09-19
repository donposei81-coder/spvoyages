import fs from "node:fs";
import path from "node:path";

import SiteHeader from "@/components/site-header";
import BackToTop from "@/components/back-to-top";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Finder from "@/components/finder";
import Board from "@/components/board";
import Destinations from "@/components/destinations";
import Crossings from "@/components/crossings";
import Fleet from "@/components/fleet";
import Testimonials from "@/components/testimonials";
import Practical from "@/components/practical";
import QuoteSection from "@/components/quote-section";
import FindUs from "@/components/find-us";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  const airMapSvg = fs.readFileSync(path.join(process.cwd(), "src/data/map-air.txt"), "utf8");
  const seaMapSvg = fs.readFileSync(path.join(process.cwd(), "src/data/map-sea.txt"), "utf8");

  return (
    <>
      <SiteHeader />
      <Hero airMapSvg={airMapSvg} seaMapSvg={seaMapSvg} />
      <Stats />
      <Finder />
      <Board />
      <Destinations />
      <Crossings />
      <Fleet />
      <Testimonials />
      <Practical />
      <QuoteSection />
      <FindUs />
      <SiteFooter />
      <BackToTop />
    </>
  );
}
