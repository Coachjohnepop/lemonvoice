import Image from "next/image";
import Link from "next/link";
import { CAL, EMAIL, PHONE, PHONE_TEL } from "../lib/site";

export function FloatingCTA() {
  return (
    <a
      href={CAL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#4a7c59] hover:bg-[#3d6849] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      Start a Conversation
    </a>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Lemonvoice home">
          <Image
            src="/images/Lemonvoice-Navbar-Logo.webp"
            alt="Lemonvoice"
            width={160}
            height={40}
            priority
          />
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/software" className="hover:text-gray-900 transition-colors">
            Custom software
          </Link>
          <Link href="/ai-lawn" className="hover:text-gray-900 transition-colors">
            AI Lawn
          </Link>
          <Link href="/#approach" className="hover:text-gray-900 transition-colors">
            Approach
          </Link>
          <Link href="/#case-studies" className="hover:text-gray-900 transition-colors">
            Case Studies
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            aria-label={`Call Lemonvoice at ${PHONE}`}
          >
            {PHONE}
          </a>
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4a7c59] hover:bg-[#3d6849] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </header>
  );
}

export function ConsultationCTA() {
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
          We&apos;ll show you where the friction is and exactly what we&apos;d build to remove it. The first conversation is free — and worth having. Work is scoped on paper and billed by invoice.
        </p>
        <a
          href={CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#4a7c59] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all hover:scale-105"
        >
          Start a Conversation
        </a>
        <p className="mt-6 text-white/80 text-base">
          Or call{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white underline underline-offset-4 hover:no-underline">
            {PHONE}
          </a>
          . Leave a message and we&apos;ll call you back.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-[2] origin-bottom-left"
          >
            <Image
              src="/images/Lemonvoice-Footer-Logo-White.webp"
              alt="Lemonvoice"
              width={140}
              height={36}
            />
          </Link>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/software" className="hover:text-white transition-colors">
              Custom software
            </Link>
            <Link href="/ai-lawn" className="hover:text-white transition-colors">
              Robot lawn mowing
            </Link>
            <Link href="/#case-studies" className="hover:text-white transition-colors">
              Case studies
            </Link>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
              {EMAIL}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">
              {PHONE}
            </a>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm border-t border-white/10 pt-6">
          <p>
            Greater Sacramento, California ·{" "}
            <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">
              {PHONE}
            </a>
          </p>
          <p>© 2026 Lemonvoice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
