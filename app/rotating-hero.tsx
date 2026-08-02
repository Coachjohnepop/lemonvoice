"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CAL = "https://calendly.com/john-lemonvoice/30min";

// The hero stage cycles the Lemonvoice mark with the two featured builds —
// "we made these" said without a sentence (John 7/25).
const SLIDES = [
  {
    src: "/images/Lemonvoice_Header_Logo.webp",
    alt: "Lemonvoice",
    w: 300,
    h: 112,
    bg: "bg-transparent",
    label: null as string | null,
    href: "#case-studies",
    external: false,
  },
  {
    src: "/images/ecodelight-logo.webp",
    alt: "Eco Delight Coffee",
    w: 420,
    h: 320,
    bg: "bg-[#f5f0e8]",
    label: "Eco Delight Coffee — a full coffee ERP →",
    href: "https://buyecodelight.com/store/powered-by",
    external: true,
  },
  {
    src: "/images/trainstation-logo.png",
    alt: "The Train Station",
    w: 220,
    h: 120,
    bg: "bg-white border border-gray-200",
    label: "The Train Station — a training platform →",
    href: "https://www.thetrainstation.co/powered-by",
    external: true,
  },
  {
    src: "/images/capital-audio-logo-dark.svg",
    alt: "Capital Audio",
    w: 360,
    h: 96,
    bg: "bg-[#0c0c0c] border border-white/10",
    label: "Capital Audio — live capture studio →",
    href: "https://saccapitalaudio.com/powered-by",
    external: true,
  },
];

export function RotatingHero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 2800);
    return () => clearInterval(t);
  }, []);

  // External case studies open in a sized POPUP window (closeable, keeps this
  // tab put) rather than a new tab (John 7/25). Internal anchors scroll normally.
  const open = (e: React.MouseEvent, s: (typeof SLIDES)[number]) => {
    if (!s.external) return; // let the in-page #anchor behave normally
    e.preventDefault();
    const w = Math.min(1200, window.screen.availWidth - 80);
    const h = Math.min(900, window.screen.availHeight - 80);
    const left = (window.screen.availWidth - w) / 2;
    const top = (window.screen.availHeight - h) / 2;
    window.open(
      s.href,
      "poweredBy",
      `popup=yes,width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <section className="bg-gradient-to-br from-[#f0f7f2] via-white to-[#fefce8] py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Rotating stage — 2x size */}
        <div className="relative mx-auto mb-5 h-80 w-full max-w-2xl">
          {SLIDES.map((s, idx) => (
            <a
              key={s.src}
              href={s.href}
              onClick={(e) => open(e, s)}
              title={s.external ? `See how ${s.alt} was built` : "See the case studies"}
              className={`absolute inset-0 flex items-center justify-center rounded-2xl transition-opacity duration-700 hover:ring-2 hover:ring-[#4a7c59]/40 ${s.bg} ${
                idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                priority={idx === 0}
                unoptimized={s.src.endsWith(".svg")}
                className="object-contain max-h-56 w-auto p-4"
              />
            </a>
          ))}
        </div>

        {/* Caption + dots */}
        <div className="h-5 mb-6">
          <p className="text-xs font-medium text-gray-500 transition-opacity duration-500">
            {SLIDES[i].label ?? " "}
          </p>
        </div>
        <div className="flex justify-center gap-2 mb-8" aria-hidden="true">
          {SLIDES.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-[#4a7c59]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Show ${s.alt}`}
            />
          ))}
        </div>

        <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-4">
          Business Transformation, Built in Software
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
          We rebuild how your business runs — around how it actually makes money.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-9">
          Not another app. We study your operation, find where margin leaks and time disappears, and build the custom system that fixes it — the kind of transformation that usually takes a firm and a year, delivered in weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4a7c59] hover:bg-[#3d6849] text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105"
          >
            Start a Conversation
          </a>
          <a
            href="#case-studies"
            className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105"
          >
            See the Proof
          </a>
        </div>
      </div>
    </section>
  );
}
