import { JsonLd } from "./json-ld";

export type FaqItem = { q: string; a: string };

export function Faq({
  items,
  heading = "Questions we get asked",
  id = "faq",
}: {
  items: FaqItem[];
  heading?: string;
  id?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id={id} className="py-16 px-6 bg-white">
      <JsonLd data={jsonLd} />
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-balance">
          {heading}
        </h2>
        <dl className="space-y-8">
          {items.map((item) => (
            <div key={item.q}>
              <dt className="text-lg font-semibold text-gray-900 mb-2">{item.q}</dt>
              <dd className="text-gray-600 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
