export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Industries />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍋</span>
          <span className="text-xl font-bold text-gray-900">Lemonvoice</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#industries" className="hover:text-gray-900 transition-colors">Industries</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
        </nav>
        <a
          href="#contact"
          className="bg-[#4a7c59] hover:bg-[#3d6849] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#f0f7f2] via-white to-[#fefce8] py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#4a7c59]/10 text-[#4a7c59] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          <span>🎙️</span> Voice-Integrated App Development
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
          Your expertise,{" "}
          <span className="text-[#4a7c59]">amplified by voice.</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          We build custom voice-integrated applications that solve real problems, streamline your workflows, and unlock new revenue — from MVP to enterprise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#4a7c59] hover:bg-[#3d6849] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Start Your Project
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🎙️",
    title: "Voice Integration",
    description:
      "Speech-to-text, voice commands, and accessibility features seamlessly woven into your application.",
  },
  {
    icon: "⚡",
    title: "MVP Development",
    description:
      "Get a working product in your hands in weeks, not months. We move fast without cutting corners.",
  },
  {
    icon: "🏗️",
    title: "Custom App Development",
    description:
      "Tailored solutions built around your industry, processes, and goals — not generic templates.",
  },
  {
    icon: "♿",
    title: "ADA Compliance",
    description:
      "Voice-first design ensures your app is accessible to everyone, meeting legal requirements by default.",
  },
  {
    icon: "🔗",
    title: "System Integration",
    description:
      "Connect your new app with your existing tools, data, and workflows without disruption.",
  },
  {
    icon: "🛠️",
    title: "Ongoing Support",
    description:
      "We don't ship and disappear. Continuous maintenance, updates, and iteration as your needs evolve.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            End-to-end application development with voice as a first-class feature.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  { icon: "🏥", name: "Healthcare", desc: "HIPAA-compliant transcription and clinical documentation" },
  { icon: "⚖️", name: "Legal", desc: "Accurate legal transcription and case management workflows" },
  { icon: "🎓", name: "Education", desc: "Accessible learning tools and lecture capture solutions" },
  { icon: "🤝", name: "Nonprofits", desc: "Cost-effective automation for mission-driven organizations" },
  { icon: "🏢", name: "Enterprise", desc: "Scalable voice solutions across teams and business units" },
  { icon: "♿", name: "Accessibility", desc: "Voice-first experiences for users with diverse needs" },
];

function Industries() {
  return (
    <section id="industries" className="py-24 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Deep experience across regulated and high-stakes industries.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
              <span className="text-3xl">{ind.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{ind.name}</h3>
                <p className="text-sm text-gray-600">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, your users, and the problem you're solving. No wasted effort on things you don't need.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Rapid prototyping to validate the concept before writing production code. You see it before we build it.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We build your app with voice integrated from day one, connecting to your existing systems along the way.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Ship to users, gather feedback, and keep improving. We stay with you after launch.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            From first call to live product — a clear, collaborative process.
          </p>
        </div>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-none w-14 h-14 rounded-2xl bg-[#4a7c59]/10 flex items-center justify-center">
                <span className="text-[#4a7c59] font-bold text-lg">{step.number}</span>
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-br from-[#4a7c59] to-[#3d6849] text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to build something?</h2>
        <p className="text-xl text-white/80 mb-10 leading-relaxed">
          Tell us about your project. We&apos;ll show you how voice can transform it.
        </p>
        <a
          href="mailto:hello@lemonvoice.com"
          className="inline-block bg-white text-[#4a7c59] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
        >
          hello@lemonvoice.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span>🍋</span>
          <span className="text-white font-semibold">Lemonvoice</span>
        </div>
        <p>© {new Date().getFullYear()} Lemonvoice. All rights reserved.</p>
      </div>
    </footer>
  );
}
