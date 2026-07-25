import Image from "next/image";
import { RotatingHero } from "./rotating-hero";

const CAL = "https://calendly.com/john-lemonvoice/30min";

function FloatingCTA() {
  return (
    <a
      href={CAL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#4a7c59] hover:bg-[#3d6849] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <span>📅</span> Start a Conversation
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <FloatingCTA />
      <Nav />
      <main>
        <RotatingHero />
        <TheShift />
        <Approach />
        <EcoDelightCaseStudy />
        <TrainStationCaseStudy />
        <SupportingWork />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image
          src="/images/Lemonvoice-Navbar-Logo.webp"
          alt="Lemonvoice"
          width={160}
          height={40}
          priority
        />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#approach" className="hover:text-gray-900 transition-colors">Approach</a>
          <a href="#case-studies" className="hover:text-gray-900 transition-colors">Case Studies</a>
          <a href="#work" className="hover:text-gray-900 transition-colors">Other Work</a>
        </nav>
        <a
          href={CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4a7c59] hover:bg-[#3d6849] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105"
        >
          Start a Conversation
        </a>
      </div>
    </header>
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
            alt="Revenue-driven workflows"
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

function EcoDelightCaseStudy() {
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
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2">
            <Image src="/images/ecodelight-logo.png" alt="Eco Delight Coffee" width={130} height={40} className="object-contain h-8 w-auto" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#a3d9b1]">Featured Case Study</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl text-balance">
          A coffee roaster ran on guesswork. Now it runs on a system that could stand an acquisition.
        </h2>
        <div className="flex items-baseline gap-4 mb-10 rounded-xl bg-white/5 border border-white/10 px-6 py-5 max-w-2xl">
          <div className="text-4xl font-bold text-[#a3d9b1] tabular-nums flex-none">700+</div>
          <p className="text-sm text-white/80 leading-relaxed">
            hours of build poured in — the depth of a year-long firm engagement, delivered in weeks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Eco Delight Coffee was doing what most growing businesses do: holding an operation together with QuickBooks, an online store, and a lot of spreadsheets. Nobody could say, with confidence, which customers actually made money.
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
              href="https://www.buyecodelight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a2a] font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-all hover:scale-105"
            >
              See it live at buyecodelight.com <span>→</span>
            </a>
            <a
              href="https://buyecodelight.com/store/powered-by"
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {supporting.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="bg-white h-28 flex items-center justify-center p-6 border-b border-gray-100">
                <Image src={c.logo} alt={c.name} width={110} height={60} className="object-contain max-h-16 w-auto" />
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

function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="py-20 px-6 bg-gradient-to-br from-[#4a7c59] to-[#3d6849] text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        <Image src="/images/Lemons.webp" alt="" width={110} height={110} className="mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          Tell us how your business makes money.
        </h2>
        <p className="text-white/80 text-lg mb-8 leading-relaxed">
          We&apos;ll show you where the friction is and exactly what we&apos;d build to remove it. The first conversation is free — and worth having.
        </p>
        <a
          href={CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#4a7c59] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all hover:scale-105"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <a
          href={CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-[2] origin-bottom-left"
        >
          <Image
            src="/images/Lemonvoice-Footer-Logo-White.webp"
            alt="Lemonvoice"
            width={140}
            height={36}
          />
        </a>
        <p>© 2026 Lemonvoice. All rights reserved.</p>
      </div>
    </footer>
  );
}
