import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationCTA, FloatingCTA, Footer, Nav } from "../components/chrome";
import { Faq } from "../components/faq";
import { JsonLd } from "../components/json-ld";
import { CAL, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Robot Lawn Mowing in Sacramento",
  description:
    "Robot lawn mowing in Greater Sacramento with Segway Navimow. Lemonvoice installs, maps, and runs Navimow X330 fleets — and consults landscape operators standing up their own. Two years in, no boundary wire.",
  alternates: { canonical: `${SITE_URL}/ai-lawn` },
  openGraph: {
    title: "Robot Lawn Mowing in Sacramento | Segway Navimow | Lemonvoice",
    description:
      "Wire-free Segway Navimow service and fleet consulting. We mow properties and teach operators how to run the same machines.",
    url: `${SITE_URL}/ai-lawn`,
  },
  twitter: {
    title: "Robot Lawn Mowing in Sacramento | Segway Navimow | Lemonvoice",
    description:
      "Wire-free Segway Navimow service and fleet consulting. We mow properties and teach operators how to run the same machines.",
  },
};

const FAQ = [
  {
    q: "Do you mow lawns or sell robots?",
    a: "Both, as two offers. We install, map, and run Segway Navimow units on the property as a recurring service. We also consult landscape companies and property owners who want their own fleet.",
  },
  {
    q: "Where do you mow?",
    a: "Robot lawn service is Greater Sacramento. Consulting on fleet sizing, install, and ops can be remote.",
  },
  {
    q: "What machine do you run?",
    a: "Our own unit is a Segway Navimow X330 — the one-acre X3, GPS to the centimeter, quiet enough for a weekday morning. Sister X3 units cover other lot sizes.",
  },
  {
    q: "Do you need a boundary wire?",
    a: "No. Navimow maps a virtual boundary. Setup is wire-free zone mapping, then a recurring weekly cut. The robot returns itself to charge.",
  },
];

export default function AiLawnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Robot lawn mowing with Segway Navimow",
    provider: { "@type": "Organization", name: "Lemonvoice", url: SITE_URL },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Sacramento, California",
    },
    description:
      "Install, map, and run Segway Navimow robot mowers on residential and commercial properties in Greater Sacramento, plus consulting for operators standing up a fleet.",
    url: `${SITE_URL}/ai-lawn`,
    brand: { "@type": "Brand", name: "Segway Navimow" },
  };

  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <JsonLd data={jsonLd} />
      <FloatingCTA />
      <Nav />
      <main id="main">
        <section className="py-20 px-6 bg-[#0f1612] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-5 mb-8">
              <span className="inline-flex items-center gap-4 rounded-2xl bg-white px-5 py-3">
                <Image
                  src="/images/navimow/segway-wordmark-dark.svg"
                  alt="Segway"
                  width={120}
                  height={25}
                  unoptimized
                  className="h-6 w-auto"
                />
                <span className="h-6 w-px bg-gray-200" aria-hidden />
                <Image
                  src="/images/navimow/navimow-wordmark.svg"
                  alt="Navimow"
                  width={130}
                  height={24}
                  unoptimized
                  className="h-5 w-auto"
                />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ff8a3d]">
                Greater Sacramento · two years in
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-balance">
              Robot lawn mowing in Sacramento with Segway Navimow.
            </h1>
            <p className="text-white/75 text-xl leading-relaxed max-w-3xl mb-10">
              We cut the grass with robots, and we teach the fleet. Since 2024 Lemonvoice has run robotic mowing in partnership with Segway Navimow — no weekly crew on a deck, no boundary wire.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#ff5a00] hover:bg-[#e65000] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
              >
                Talk lawn service or consulting
              </a>
              <a
                href="https://navimow.com/products/segway-navimow-x330"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-all"
              >
                Segway Navimow X330 <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#0f1612] text-white border-t border-white/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff8a3d] mb-3">We mow</p>
              <h2 className="text-xl font-semibold mb-3">Robot lawn service</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Install, map, and run Segway Navimow units on Greater Sacramento properties. No weekly crew. No boundary wire. The lawn stays at a set height, and the robot returns itself to charge.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                {[
                  "Wire-free setup and zone mapping",
                  "Recurring weekly cut on the X330 and sister X3 units",
                  "Slope, multi-zone, and obstacle-aware routes",
                  "Quiet enough for a weekday morning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#ff8a3d] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#a3d9b1] mb-3">We advise</p>
              <h2 className="text-xl font-semibold mb-3">AI lawn consulting</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                For landscape companies and property owners standing up a robot program. Which machine, how many, how to price a route, how to keep the fleet online.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                {[
                  "Fleet sizing and model mix (X3 / X330 and up)",
                  "Install playbooks, antenna, and virtual boundaries",
                  "Ops: charging, winter, theft, and customer comms",
                  "How to price a robot route against a crew",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#a3d9b1] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">
              The machine
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">
              Navimow X330 — the one-acre X3 we run ourselves.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
              The machines map the yard, stay inside a virtual boundary, and keep working while nobody is standing on a deck. GPS to the centimeter. That is the unit we have operated since 2024, so the consulting is not theoretical.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <figure className="rounded-2xl bg-[#0b0d0c] border border-gray-200 p-4 flex flex-col">
                <Image
                  src="/images/navimow/navimow-x330-alt.png"
                  alt="Segway Navimow X330 robot lawn mower, three-quarter view"
                  width={640}
                  height={640}
                  className="object-contain w-full h-56"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-gray-500">
                  Navimow X330 · our machine
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-[#0b0d0c] border border-gray-200 p-4 flex flex-col">
                <Image
                  src="/images/navimow/navimow-x330-studio.png"
                  alt="Segway Navimow X330 studio product shot"
                  width={640}
                  height={640}
                  className="object-contain w-full h-56"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-gray-500">
                  X3 series · Segway Navimow
                </figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-[#0b0d0c] flex flex-col">
                <Image
                  src="/images/navimow/navimow-x3-card.jpg"
                  alt="Segway Navimow X3 robot mower cutting a lawn"
                  width={640}
                  height={372}
                  className="object-cover w-full h-56"
                />
                <figcaption className="p-4 text-xs uppercase tracking-widest text-gray-500">
                  On the turf
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <Faq items={FAQ} heading="Robot mowing, in plain terms." />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
