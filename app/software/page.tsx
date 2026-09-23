import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationCTA, Footer, Nav } from "../components/chrome";
import { Faq } from "../components/faq";
import { JsonLd } from "../components/json-ld";
import { CAL, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Custom Business Software",
  description:
    "Lemonvoice maps how you make money, then builds the system that runs the operation — order-to-cash, reporting, the daily loop. You own it. Scoped on paper, billed by invoice. Greater Sacramento and remote.",
  alternates: { canonical: `${SITE_URL}/software` },
  openGraph: {
    title: "Custom Business Software | Lemonvoice",
    description:
      "One custom system replaces the patchwork of accounting, storefronts, and spreadsheets. You own it outright.",
    url: `${SITE_URL}/software`,
  },
  twitter: {
    title: "Custom Business Software | Lemonvoice",
    description:
      "One custom system replaces the patchwork of accounting, storefronts, and spreadsheets. You own it outright.",
  },
};

const FAQ = [
  {
    q: "Do we own the software you build?",
    a: "Yes. You own it outright. There is no platform subscription you cannot escape. Engagements are scoped on paper and billed by invoice.",
  },
  {
    q: "How is this different from buying SaaS?",
    a: "Off-the-shelf tools force your operation into their shape. We start with how you actually earn, then build the system that matches — order-to-cash, reporting, the daily loop — in one source of truth.",
  },
  {
    q: "How long does a build take?",
    a: "We ship production software in weeks, not the months a traditional firm would quote. Eco Delight Coffee was a 700+ hour engagement delivered across a handful of months, not a year-long program.",
  },
  {
    q: "Who is this for?",
    a: "Operators with a real business already making money — roasting, training, live production, wholesale, services — who are holding it together with QuickBooks, a store, and spreadsheets.",
  },
];

export default function SoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom business software",
    provider: { "@type": "Organization", name: "Lemonvoice", url: SITE_URL },
    areaServed: "Greater Sacramento, California",
    description:
      "Custom software that maps how a business makes money and runs the operation — order-to-cash, reporting, and the daily loop. The client owns the system.",
    url: `${SITE_URL}/software`,
  };

  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <JsonLd data={jsonLd} />
      <Nav />
      <main id="main">
        <section className="bg-gradient-to-br from-[#f0f7f2] via-white to-[#fefce8] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-4">
              Custom software · Greater Sacramento
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
              Custom software around how you actually make money.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-9">
              We map the operation, then build the system that runs it — quotes, production, fulfillment, invoicing, and the books. You own it. Work is paperwork and invoices, not a subscription you cannot leave.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4a7c59] hover:bg-[#3d6849] text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105 text-center"
              >
                Start a Conversation
              </a>
              <Link
                href="/#case-studies"
                className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105 text-center"
              >
                See the work
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">
                The problem
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">
                Most growing businesses run on a patchwork.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Accounting here, orders there, spreadsheets holding it together. Nobody can say, with confidence, which customers actually make money.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We start with the money. How you earn it, where it leaks, and what it would take to run the whole operation from one source of truth. Then we build exactly that.
              </p>
            </div>
            <Image
              src="/images/Money-Making_Graphic.webp"
              alt="Diagram of revenue-driven workflows Lemonvoice maps before writing software"
              width={480}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </section>

        <section id="approach" className="py-16 px-6 bg-[#f9fbf9]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">
                How we work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Transformation consulting that ships working software.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "/images/Ideas_Icon.webp",
                  title: "Understand the money",
                  description:
                    "We learn how the business earns, where margin quietly disappears, and which work is worth automating. Analysis first — that is where the transformation is.",
                },
                {
                  icon: "/images/Deployment_Icon.webp",
                  title: "Build the system fast",
                  description:
                    "Senior strategy paired with AI-accelerated development. Production-quality software in weeks, not the months — and the budget — a traditional firm would quote.",
                },
                {
                  icon: "/images/Voice_Icon.webp",
                  title: "Run the business on it",
                  description:
                    "The system becomes the operation — order-to-cash, reporting, the daily loop. We stay on to iterate as you grow.",
                },
              ].map((step, i) => (
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

        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">
              Proof in production
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Systems running businesses today.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eco Delight Coffee</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Sacramento-area roaster replaced QuickBooks, WooCommerce, and spreadsheets with one platform: storefront, wholesale, roasting, fulfillment, and M&amp;A-grade books. Other roasters now license it.
                </p>
                <Link href="/#case-studies" className="text-[#4a7c59] font-semibold text-sm">
                  Read the case study →
                </Link>
              </article>
              <article className="rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Train Station</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A training facility turned binders and group chats into a platform 2,500+ athletes run on — competitive and wellness tracks, member management, program delivery.
                </p>
                <Link href="/#case-studies" className="text-[#4a7c59] font-semibold text-sm">
                  Read the case study →
                </Link>
              </article>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Also in market:{" "}
              <a href="https://saccapitalaudio.com/powered-by" className="underline hover:text-gray-800">
                Capital Audio
              </a>
              ,{" "}
              <a href="https://www.livecaptionai.com" className="underline hover:text-gray-800">
                Live Caption AI
              </a>
              , and{" "}
              <a href="https://www.cmasacramento.com" className="underline hover:text-gray-800">
                CMA Sacramento
              </a>
              .
            </p>
          </div>
        </section>

        <Faq items={FAQ} heading="How an engagement actually works." />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
