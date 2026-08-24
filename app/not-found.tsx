import Link from "next/link";
import { Footer, Nav } from "./components/chrome";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <Nav />
      <main id="main" className="flex-1 px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">404</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found.</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            That URL is not on lemonvoice.com. The live work is on these pages:
          </p>
          <nav className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-[#4a7c59] text-white font-semibold px-6 py-3 rounded-full text-sm"
            >
              Home
            </Link>
            <Link
              href="/software"
              className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm"
            >
              Custom software
            </Link>
            <Link
              href="/ai-lawn"
              className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm"
            >
              Robot lawn mowing
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
