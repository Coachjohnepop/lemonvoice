import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationCTA, Footer, Nav } from "./components/chrome";
import { Faq } from "./components/faq";
import { CAL, SITE_URL } from "./lib/site";
import { RotatingHero } from "./rotating-hero";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const HOME_FAQ = [
  {
    q: "What does Lemonvoice do?",
    a: "Two practices, one firm: custom software that rebuilds how a business runs, and robot lawn mowing with Segway Navimow in Greater Sacramento — plus consulting for operators who want a fleet of their own.",
  },
  {
    q: "Do clients own the software?",
    a: "Yes. You own it outright. Engagements are scoped on paper and billed by invoice — no subscription you cannot escape.",
  },
  {
    q: "Where is the lawn service?",
    a: "Robot lawn mowing is Greater Sacramento. Fleet consulting for landscape operators can be remote.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <Nav />
      <main id="main">
        <RotatingHero />
        <BusinessAreas />
        <LawnPractice />
        <TheShift />
        <Approach />
        <RoasteryCaseStudy />
        <TrainStationCaseStudy />
        <SupportingWork />
        <Faq items={HOME_FAQ} heading="Straight answers." />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}

function BusinessAreas() {
  return (
    <section id="practices" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">
          What we do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-balance">
          Two practices. Same firm.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10">
          Software that replaces the patchwork. Lawns that stay cut without a crew on a mower. We have run both for years — one from the keyboard, one from a Segway Navimow fleet.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/software"
            className="group rounded-3xl border border-gray-200 bg-[#f9fbf9] p-8 hover:border-[#4a7c59]/40 hover:shadow-md transition-all"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#4a7c59] mb-3">Practice 01</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom software</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We map how you make money, then build the system that runs the operation — order-to-cash, reporting, the daily loop. You own it.
            </p>
            <span className="text-[#4a7c59] font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
              How we build <span>→</span>
            </span>
          </Link>
          <Link
            href="/ai-lawn"
            className="group rounded-3xl border border-[#ff5a00]/25 bg-[#0b0d0c] p-8 text-white hover:shadow-md transition-all overflow-hidden relative"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff8a3d] mb-3">Practice 02 · since 2024</p>
            <h3 className="text-2xl font-bold mb-3">AI lawn mowing</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              In partnership with Segway Navimow. We mow properties with robot fleets, and we consult operators who want to put the same machines to work.
            </p>
            <span className="text-[#ff8a3d] font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
              Service &amp; consulting <span>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LawnPractice() {
  return (
    <section id="lawn" className="py-20 px-6 bg-[#0f1612] text-white">
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
            Partner fleet · two years in
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-3xl text-balance">
          AI lawn mowing with Segway Navimow — we cut the grass, and we teach the fleet.
        </h2>
        <p className="text-white/75 leading-relaxed max-w-3xl mb-12">
          Since 2024 we have run robotic mowing in Greater Sacramento in partnership with Segway Navimow. The machines map the yard, stay inside a virtual boundary, and keep working while nobody is standing on a deck. Our own unit is a <span className="text-white font-semibold">Navimow X330</span> — the one-acre X3, GPS to the centimeter, quiet enough for a weekday morning.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff8a3d] mb-3">We mow</p>
            <h3 className="text-xl font-semibold mb-3">Robot lawn service</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Install, map, and run Segway Navimow units on the property. No weekly crew. No boundary wire. The lawn stays at a set height, and the robot returns itself to charge.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "Wire-free setup and zone mapping",
                "Recurring weekly cut on the X330 and sister X3 units",
                "Slope, multi-zone, and obstacle-aware routes",
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
            <h3 className="text-xl font-semibold mb-3">AI lawn consulting</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              For landscape companies and property owners standing up a robot program. Which machine, how many, how to price a route, how to keep the fleet online.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "Fleet sizing and model mix (X3 / X330 and up)",
                "Install playbooks, antenna, and virtual boundaries",
                "Ops: charging, winter, theft, and customer comms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#a3d9b1] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <figure className="rounded-2xl bg-black/40 border border-white/10 p-4 flex flex-col">
            <Image
              src="/images/navimow/navimow-x330-alt.png"
              alt="Segway Navimow X330 three-quarter view"
              width={640}
              height={640}
              className="object-contain w-full h-56"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-widest text-white/50">
              Navimow X330 · our machine
            </figcaption>
          </figure>
          <figure className="rounded-2xl bg-black/40 border border-white/10 p-4 flex flex-col">
            <Image
              src="/images/navimow/navimow-x330-studio.png"
              alt="Segway Navimow X330 studio product shot"
              width={640}
              height={640}
              className="object-contain w-full h-56"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-widest text-white/50">
              X3 series · Segway Navimow
            </figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex flex-col">
            <Image
              src="/images/navimow/navimow-x3-card.jpg"
              alt="Segway Navimow X3 mowing a lawn"
              width={640}
              height={372}
              className="object-cover w-full h-56"
            />
            <figcaption className="p-4 text-xs uppercase tracking-widest text-white/50">
              On the turf
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#ff5a00] hover:bg-[#e65000] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
          >
            Talk lawn service or consulting
          </a>
          <Link
            href="/ai-lawn"
            className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-all"
          >
            Robot lawn mowing in Sacramento <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TheShift() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">The Shift</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
            Most software makes you adapt. We do the opposite.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Off-the-shelf tools force your business into their shape. You end up with a patchwork — accounting here, orders there, spreadsheets holding it together — and no clear picture of what&apos;s actually working.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We start with the money. How does your business earn it, where does it leak, and what would it take to run the whole operation from one source of truth? Then we build exactly that.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "We map how you make money before we write a line of code",
              "One custom system replaces the patchwork you're paying for",
              "You own it outright — no subscription you can't escape",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-[#4a7c59] font-bold mt-0.5">✓</span>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/Money-Making_Graphic.webp"
            alt="Diagram of revenue-driven workflows Lemonvoice maps before writing software"
            width={480}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      icon: "/images/Ideas_Icon.webp",
      title: "Understand the money",
      description:
        "We learn how your business earns, where margin quietly disappears, and which work is worth automating. The analysis comes first — that's where the transformation is.",
    },
    {
      icon: "/images/Deployment_Icon.webp",
      title: "Build the system fast",
      description:
        "Senior strategy paired with AI-accelerated development. We ship production-quality software in weeks, not the months — and the budget — a traditional firm would quote.",
    },
    {
      icon: "/images/Voice_Icon.webp",
      title: "Run the business on it",
      description:
        "The system becomes your operation — order-to-cash, reporting, the daily loop. We stay on to iterate as you grow, and it keeps earning its keep.",
    },
  ];
  return (
    <section id="approach" className="py-16 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">The Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Transformation consulting that ships working software.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The insight of a strategy firm and the output of a dev shop — from the same team, at a pace neither can match alone.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-white rounded-2xl p-8 shadow-sm">
              <Image src={step.icon} alt="" width={72} height={72} className="mb-5" />
              <p className="text-xs font-bold text-[#4a7c59] mb-2">STEP {i + 1}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoasteryCaseStudy() {
  const outcomes = [
    { stat: "3 → 1", label: "QuickBooks, WooCommerce & spreadsheets replaced by one platform" },
    { stat: "Order → cash", label: "Automated: quote, roast, pack, ship, invoice, reconcile" },
    { stat: "M&A-grade", label: "Books and a financial warehouse built to stand an acquisition audit" },
    { stat: "Now licensed", label: "The platform is being resold to other roasters" },
  ];
  const capabilities = [
    "Bilingual storefront & subscriptions",
    "Wholesale order-to-cash",
    "Roasting, grinding & fulfillment floor",
    "Per-customer profitability analytics",
    "Financial warehouse & forecasting",
    "Bank-feed reconciliation",
  ];
  return (
    <section id="case-studies" className="py-20 px-6 bg-gradient-to-br from-[#1e3a2a] to-[#14251b] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#f5f0e8] px-4 py-2 text-sm font-bold text-[#1e3a2a]">
            Roastery ERP
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#a3d9b1]">Featured Case Study</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl text-balance">
          A coffee roaster ran on guesswork. Now it runs on a system that could stand an acquisition.
        </h2>
        <div className="group relative flex items-baseline gap-4 mb-10 rounded-xl bg-white/5 border border-white/10 px-6 py-5 max-w-2xl cursor-help">
          <div className="text-4xl font-bold text-[#a3d9b1] tabular-nums flex-none">1,000+</div>
          <p className="text-sm text-white/80 leading-relaxed">
            hours of build and review poured in — the depth of a multi-year firm engagement, delivered in months.
            <span className="block text-xs text-white/40 mt-1">Hover for the version-control record</span>
          </p>
          {/* Provable floor from git history — the number behind the number */}
          <div className="pointer-events-none absolute left-6 -bottom-2 translate-y-full z-20 w-72 rounded-lg bg-white text-gray-900 shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-[#1e3a2a] tabular-nums">~760</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#4a7c59] bg-[#4a7c59]/10 px-2 py-0.5 rounded-full">✓ documented in git</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Provable from version control: 100 active build days across 2,200+ commits, first commit to last, Jan–Aug 2026. The 1,000+ headline adds the testing, spec, operations, and owner review time that never lands in a commit.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              A Sacramento-area specialty coffee roaster was doing what most growing businesses do: holding an operation together with QuickBooks, an online store, and a lot of spreadsheets. Nobody could say, with confidence, which customers actually made money.
            </p>
            <p>
              We started with the analysis. A custom profitability model — built on the company&apos;s own numbers — revealed exactly where margin was earned and where it quietly drained away. That single view changed how the business made decisions.
            </p>
            <p>
              Then we built the system to run on it: a full platform covering the storefront, subscriptions, wholesale, roasting, and fulfillment, sitting on a financial warehouse with books rigorous enough to survive due diligence. What used to live in three tools and a founder&apos;s head now runs in one place — and it&apos;s solid enough that other roasters are now licensing it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="text-2xl font-bold text-[#a3d9b1] mb-1">{o.stat}</div>
                <div className="text-xs text-white/70 leading-relaxed">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#a3d9b1] mb-4">What we built</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {capabilities.map((c) => (
              <span key={c} className="text-sm rounded-full bg-white/10 px-4 py-1.5 text-white/85">{c}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a2a] font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-all hover:scale-105"
            >
              Ask for a walkthrough <span>→</span>
            </a>
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              License the platform <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainStationCaseStudy() {
  const outcomes = [
    { stat: "2,500+", label: "members across competitive and wellness tracks" },
    { stat: "Programs → app", label: "Coaching and training delivered through one platform" },
    { stat: "Live in production", label: "Running the business day to day" },
  ];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-xl bg-white border border-gray-200 px-4 py-2.5">
            <Image src="/images/trainstation-logo.png" alt="The Train Station" width={120} height={40} className="object-contain h-9 w-auto" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4a7c59]">Featured Case Study</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-3xl text-balance">
          A training facility turned its programs into a platform 2,500 athletes run on.
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Train Station built its reputation on professional training programs for athletes, adolescents, and adults. Growth meant more members than any binder or group chat could serve.
            </p>
            <p>
              We built the platform that scaled the coaching — competitive and wellness tracks, member management, and program delivery in one place — so the business could grow its membership without growing its overhead. It runs the operation in production today.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-xl bg-[#f9fbf9] border border-gray-100 p-5 flex items-baseline gap-4">
                <div className="text-2xl font-bold text-[#4a7c59] flex-none">{o.stat}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{o.label}</div>
              </div>
            ))}
            <a
              href="https://www.thetrainstation.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4a7c59] font-semibold text-sm hover:gap-3 transition-all mt-1"
            >
              Visit thetrainstation.co <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const supporting = [
  {
    logo: "/images/capital-audio-logo-dark.svg",
    name: "Capital Audio",
    tag: "Live Capture Studio",
    description:
      "Multi-track audio and multi-cam video for live shows — media library, multicam sync, timeline studio, and client review portal for Sacramento's Capital of California scene.",
    url: "https://saccapitalaudio.com/powered-by",
  },
  {
    logo: "/images/EYE.png",
    name: "Live Caption AI",
    tag: "Accessibility Tech",
    description: "Real-time event captions streamed over the web — making live messages shareable and accessible.",
    url: "https://www.livecaptionai.com",
  },
  {
    logo: "/images/cma-logo.webp",
    name: "CMA Sacramento",
    tag: "B2B Services",
    description: "Tools for a family-owned industrial supplier serving 800+ California accounts since 1990.",
    url: "https://www.cmasacramento.com",
  },
];

function SupportingWork() {
  return (
    <section id="work" className="py-16 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">Other Work</p>
          <h2 className="text-3xl font-bold text-gray-900">More systems in the market today.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {supporting.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div
                className={`h-28 flex items-center justify-center p-6 border-b border-gray-100 ${
                  c.name === "Capital Audio" ? "bg-[#0c0c0c]" : "bg-white"
                }`}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={c.name === "Capital Audio" ? 200 : 110}
                  height={60}
                  className="object-contain max-h-16 w-auto"
                  unoptimized={c.logo.endsWith(".svg")}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{c.name}</h3>
                  <span className="text-xs font-semibold text-[#4a7c59] bg-[#4a7c59]/10 px-3 py-1 rounded-full">{c.tag}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{c.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[#4a7c59] font-semibold text-sm group-hover:gap-2 transition-all">
                  Visit Site <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


