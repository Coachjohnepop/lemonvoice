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
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#why" className="hover:text-gray-900 transition-colors">Why Us</a>
          <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
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
      <div className="max-w-3xl mx-auto">
        <Image
          src="/images/Lemonvoice_Header_Logo.webp"
          alt="Lemonvoice"
          width={320}
          height={120}
          className="mx-auto mb-8"
          priority
        />
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
          An app dev agency that combines your expertise with the power of voice integration to help you solve problems and reimagine your business.
        </p>
        <p className="text-2xl font-bold text-[#4a7c59] mb-10">Sounds like Lemonvoice.</p>
        <a
          href="#consultation"
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
          <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest mb-3">Our Values</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Innovation", "Collaboration", "Integrity", "Customer Success"].map((v) => (
              <span key={v} className="bg-[#4a7c59]/10 text-[#4a7c59] text-sm font-semibold px-4 py-1.5 rounded-full">
                {v}
              </span>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Empowering Businesses with Rev-Gen Apps
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Lemonvoice, our mission is to empower businesses by transforming ideas into innovative, revenue-generating applications. We believe in technology that drives growth and unlocks potential.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We partner with you to transform your ideas into powerful applications that drive business success. Together, we can create solutions that help your business thrive.
          </p>
          <a
            href="#consultation"
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
    description: "We create applications that seamlessly integrate with your existing processes.",
  },
  {
    icon: "/images/Voice_Icon.webp",
    title: "Voice Integration for Enhanced User Exp",
    description: "Voice integration technology enhances accessibility and engagement.",
  },
  {
    icon: "/images/Deployment_Icon.webp",
    title: "Flexible Deployment Options",
    description: "We offer deployment solutions that adapt to your business environment.",
  },
];

function WhyChoose() {
  return (
    <section id="why" className="py-24 px-6 bg-[#f9fbf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lemonvoice</h2>
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
        <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
          <Image
            src="/images/Lemons.webp"
            alt="Lemonvoice platform"
            width={180}
            height={180}
            className="mx-auto mb-6"
          />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Lemonvoice offers a powerful, monetizable platform, allowing industry professionals to license and leverage your technology to amplify their own success.
          </p>
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    arrow: "/images/Green-Arrow.webp",
    title: "From Small to Enterprise Biz Automation",
    description: "Automate data collection and streamline service management.",
  },
  {
    arrow: "/images/Gold-Arrow.webp",
    title: "Non-Profits & Education Solutions",
    description: "Voice integration enhances events and supports ADA compliance.",
  },
  {
    arrow: "/images/Blue-Arrow.webp",
    title: "Healthcare & Legal Solutions",
    description: "Accurate, compliant speech-to-text services enhance productivity.",
  },
];

function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-white">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Custom Apps Tailored for Your Industry
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our software solutions cater to diverse industries, ensuring compliance and efficiency. We harness the latest technology to meet your unique needs.
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
    </section>
  );
}

const services = [
  {
    icon: "⚡",
    title: "Minimum Viable Product",
    description:
      "We rapidly develop MVPs, delivering functional prototypes within weeks so you can test, refine, and validate your application early.",
  },
  {
    icon: "🎙️",
    title: "Voice & Accessibility",
    description:
      "Our solutions enable applications to process spoken words into text and enhance accessibility for a more inclusive user experience.",
  },
  {
    icon: "💡",
    title: "Ideation & Design",
    description:
      "We design intelligent workflows and seamless user experiences, blending innovation with expertise to bring your vision to life.",
  },
  {
    icon: "🛠️",
    title: "Ongoing Support",
    description:
      "We provide continuous updates, maintenance, and improvements to ensure your application remains stable, engaging, and free from churn.",
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
    description:
      "Broadcast event captions over the web! Stream real-time transcripts to your audience, making your message more shareable and enhancing accessibility.",
  },
  {
    logo: "/images/speech.png",
    name: "Speech Recognition Cloud",
    description:
      "Transcribe any conversation, recording, meeting, or video for free. And optionally receive an AI generated summary to aid your decision making.",
  },
];

function Clients() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Showcase</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real products built by Lemonvoice, live in the market.
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
        <h2 className="text-4xl font-bold mb-4">Free Consultation</h2>
        <p className="text-white/80 text-lg mb-10">
          Ready to build something? Tell us about your project and we&apos;ll show you how voice can transform it.
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
