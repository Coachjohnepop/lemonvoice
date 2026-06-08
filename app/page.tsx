import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowWeWork />
        <Services />
        <Industries />
        <Clients />
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
          <a href="#how-we-work" className="hover:text-gray-900 transition-colors">How We Work</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#industries" className="hover:text-gray-900 transition-colors">Industries</a>
          <a href="#clients" className="hover:text-gray-900 transition-colors">Clients</a>
        </nav>
        <a
          href="#consultation"
          className="bg-[#4a7c59] hover:bg-[#3d6849] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#f0f7f2] via-white to-[#fefce8] py-28 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/Lemonvoice_Header_Logo.webp"
          alt="Lemonvoice"
          width={320}
          height={120}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          An app agency focused on your business processes and revenue goals.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          We scope, build, and launch custom applications around your business processes and revenue goals — from first idea to live product.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#consultation"
            className="inline-block bg-[#4a7c59] hover:bg-[#3d6849] text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Pitch Your Idea
          </a>
          <a
            href="#how-we-work"
            className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            See How We Work
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your business deserves software built for it.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most small and mid-size businesses are forced to adapt their workflows to whatever off-the-shelf software almost fits. You end up paying for features you don&apos;t need and working around the ones you do.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We start by understanding how your business makes money, then scope and build the application that supports it — designed around your processes from day one.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Built around your specific workflows",
              "No features you don't need, nothing missing that you do",
              "Owned by you — not a subscription you can't escape",
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
            alt="Revenue-generating workflows"
            width={480}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-powered development. Human-led strategy.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use the latest AI tools — Claude, Grok, and others — alongside experienced DevOps engineers to build faster and smarter than traditional dev shops. You get a real, custom-coded app without the bloated agency price tag.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "/images/Ideas_Icon.webp",
              title: "Scope it together",
              description:
                "We learn your workflows, your revenue drivers, and what's slowing you down. Then we define exactly what to build — no guesswork, no bloat.",
            },
            {
              icon: "/images/Deployment_Icon.webp",
              title: "Build and launch fast",
              description:
                "Using AI-assisted development and experienced DevOps engineers, we ship production-quality software in weeks, not months.",
            },
            {
              icon: "/images/Voice_Icon.webp",
              title: "Grow with you",
              description:
                "We stay with you after launch — iterating, improving, and adding capabilities as your business evolves.",
            },
          ].map((step) => (
            <div key={step.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <Image
                src={step.icon}
                alt={step.title}
                width={80}
                height={80}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🗺️",
    title: "Scoping & MVP",
    description:
      "We define exactly what to build and why, then deliver a working MVP fast — so you can validate and launch without over-investing upfront.",
  },
  {
    icon: "⚙️",
    title: "Custom App Development",
    description:
      "Full-stack applications built around your revenue workflows — not adapted from a template.",
  },
  {
    icon: "💡",
    title: "Ideation & Design",
    description:
      "We design intelligent workflows and seamless user experiences, blending innovation with your domain expertise.",
  },
  {
    icon: "🛠️",
    title: "Ongoing Support",
    description:
      "Continuous updates, maintenance, and improvements to keep your application stable and evolving with your business.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What we build for you</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Every engagement is scoped around your specific needs. No packages, no upsells.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-gray-50 rounded-2xl p-7">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  {
    arrow: "/images/Green-Arrow.webp",
    title: "Small & Mid-Size Business Automation",
    description:
      "Automate the workflows that drive your revenue — quoting, fulfillment, client management, reporting.",
  },
  {
    arrow: "/images/Gold-Arrow.webp",
    title: "Non-Profits & Education",
    description:
      "Voice integration enhances events and supports ADA compliance on a budget that makes sense.",
  },
  {
    arrow: "/images/Blue-Arrow.webp",
    title: "Healthcare & Legal",
    description:
      "Accurate, compliant speech-to-text and documentation tools that keep your team productive.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-24 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/Appscreen-Hand.webp"
            alt="App in hand"
            width={380}
            height={480}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">Industries</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for businesses that need a real solution.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We focus on small and mid-size businesses that application companies have overlooked — companies with real, specific needs that generic software can&apos;t meet.
          </p>
          <div className="space-y-6">
            {industries.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <Image src={s.arrow} alt="" width={28} height={28} className="mt-1 flex-none" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const clients = [
  {
    logo: "/images/EYE.png",
    name: "Live Caption AI",
    description:
      "Broadcast event captions over the web. Stream real-time transcripts to your audience, making your message more shareable and enhancing accessibility.",
  },
  {
    logo: "/images/speech.png",
    name: "Speech Recognition Cloud",
    description:
      "Transcribe any conversation, recording, meeting, or video for free — and optionally receive an AI-generated summary to aid your decision making.",
  },
];

function Clients() {
  return (
    <section id="clients" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">Live Apps</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built by Lemonvoice. In the market today.</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real applications generating real results for real businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((c) => (
            <div key={c.name} className="bg-gray-50 rounded-2xl p-8 text-center">
              <Image
                src={c.logo}
                alt={c.name}
                width={80}
                height={80}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="font-bold text-gray-900 text-lg mb-3">{c.name}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{c.description}</p>
              <a href="#" className="text-[#4a7c59] font-semibold text-sm hover:underline">
                Learn More →
              </a>
            </div>
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
      className="py-24 px-6 bg-gradient-to-br from-[#4a7c59] to-[#3d6849] text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        <Image
          src="/images/Lemons.webp"
          alt=""
          width={120}
          height={120}
          className="mx-auto mb-6 opacity-90"
        />
        <h2 className="text-4xl font-bold mb-4">Free Consultation</h2>
        <p className="text-white/80 text-lg mb-10 leading-relaxed">
          Tell us how your business makes money and where the friction is. We&apos;ll show you exactly what we&apos;d build to fix it.
        </p>
        <a
          href="mailto:hello@lemonvoice.com"
          className="inline-block bg-white text-[#4a7c59] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Image
          src="/images/Lemonvoice-Footer-Logo.webp"
          alt="Lemonvoice"
          width={140}
          height={36}
        />
        <p>© 2024 Lemonvoice. All rights reserved.</p>
      </div>
    </footer>
  );
}
