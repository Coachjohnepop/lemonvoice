import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Solutions />
        <Services />
        <Clients />
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
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#why" className="hover:text-gray-900 transition-colors">Why Us</a>
          <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
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
    <section className="bg-gradient-to-br from-[#f0f7f2] via-white to-[#fefce8] py-28 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <Image
          src="/images/Lemonvoice_Header_Logo.webp"
          alt="Lemonvoice"
          width={320}
          height={120}
          className="mx-auto mb-8"
          priority
        />
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          An app dev agency that combines your expertise with the power of voice integration to help you solve problems and reimagine your business.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#4a7c59] hover:bg-[#3d6849] text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
        >
          Pitch an Idea
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Empowering Businesses with Rev-Gen Apps
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We believe technology should drive growth and unlock potential. Our mission is to build voice-integrated applications that generate real revenue for your business.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {["Innovation", "Collaboration", "Integrity", "Customer Success"].map((v) => (
              <div key={v} className="flex items-center gap-2 text-[#4a7c59] font-semibold">
                <span>✓</span> {v}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block bg-[#4a7c59] hover:bg-[#3d6849] text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Pitch an Idea
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/Money-Making_Graphic.webp"
            alt="Revenue-generating apps"
            width={480}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: "/images/Ideas_Icon.webp",
    title: "Tailored App Solutions for Biz Challenges",
    description:
      "Custom-built applications designed around your specific industry, workflows, and goals.",
  },
  {
    icon: "/images/Voice_Icon.webp",
    title: "Voice Integration for Enhanced User Exp",
    description:
      "Speech-to-text and voice commands seamlessly integrated to improve accessibility and efficiency.",
  },
  {
    icon: "/images/Deployment_Icon.webp",
    title: "Flexible Deployment Options",
    description:
      "Deploy on the cloud, on-premise, or hybrid — whatever fits your business and compliance needs.",
  },
];

function WhyChoose() {
  return (
    <section id="why" className="py-24 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lemonvoice</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            We build apps that actually work for your business — not generic solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <Image
                src={b.icon}
                alt={b.title}
                width={80}
                height={80}
                className="mx-auto mb-5"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/Lemons.webp"
            alt="Lemonvoice platform"
            width={500}
            height={300}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    arrow: "/images/Green-Arrow.webp",
    title: "Business Automation",
    description:
      "Streamline operations with voice-powered workflows that reduce manual effort and boost productivity.",
  },
  {
    arrow: "/images/Gold-Arrow.webp",
    title: "Nonprofit & Education",
    description:
      "Cost-effective voice solutions for mission-driven organizations and educational institutions.",
  },
  {
    arrow: "/images/Blue-Arrow.webp",
    title: "Healthcare & Legal",
    description:
      "HIPAA and compliance-ready transcription and documentation for high-stakes industries.",
  },
];

function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="flex justify-center">
            <Image
              src="/images/Appscreen-Hand.webp"
              alt="App in hand"
              width={380}
              height={480}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Voice-integrated applications built for the industries that need them most.
            </p>
            <div className="space-y-6">
              {solutions.map((s) => (
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
      </div>
    </section>
  );
}

const services = [
  {
    icon: "⚡",
    title: "Minimum Viable Product",
    description: "Get a working product to market fast. Validate your idea before full investment.",
  },
  {
    icon: "🎙️",
    title: "Voice & Accessibility",
    description: "ADA-compliant voice integration that opens your app to every user.",
  },
  {
    icon: "💡",
    title: "Ideation & Design",
    description: "From concept to prototype — we help you shape the right product.",
  },
  {
    icon: "🛠️",
    title: "Ongoing Support",
    description: "We stay with you post-launch with continuous maintenance and updates.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need to go from idea to live product.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm">
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

const clients = [
  {
    logo: "/images/EYE.png",
    name: "Live Caption AI",
    description: "Real-time captioning powered by voice AI for live events and meetings.",
  },
  {
    logo: "/images/speech.png",
    name: "Speech Recognition Cloud",
    description: "Cloud-based speech recognition platform for enterprise transcription needs.",
  },
];

function Clients() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Showcase</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real products built by Lemonvoice, live in the market.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {clients.map((c) => (
            <div key={c.name} className="bg-gray-50 rounded-2xl p-8 text-center">
              <Image
                src={c.logo}
                alt={c.name}
                width={80}
                height={80}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{c.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{c.description}</p>
              <a href="#" className="text-[#4a7c59] font-semibold text-sm hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
        <div className="text-center bg-gradient-to-br from-[#4a7c59] to-[#3d6849] rounded-3xl py-16 px-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to build something?</h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your project. We&apos;ll show you how voice can transform it.
          </p>
          <a
            href="mailto:hello@lemonvoice.com"
            className="inline-block bg-white text-[#4a7c59] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            hello@lemonvoice.com
          </a>
        </div>
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
        <p>© {new Date().getFullYear()} Lemonvoice. All rights reserved.</p>
      </div>
    </footer>
  );
}
