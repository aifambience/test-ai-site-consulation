"use client";

import { useState } from "react";

const navLinks = ["Home", "About", "Services", "How It Works", "Contact"];

const services = [
  {
    icon: "🥗",
    title: "Personalized Meal Plans",
    description:
      "Custom diet plans tailored to your body type, goals, and lifestyle — no generic templates.",
  },
  {
    icon: "📊",
    title: "Body Composition Analysis",
    description:
      "Deep-dive into your current nutritional status and health metrics to set a solid baseline.",
  },
  {
    icon: "💬",
    title: "1-on-1 Consultations",
    description:
      "Private video or chat sessions to discuss progress, challenges, and refine your nutrition strategy.",
  },
  {
    icon: "🔁",
    title: "Ongoing Support",
    description:
      "Weekly check-ins and plan adjustments to keep you on track and accountable over time.",
  },
  {
    icon: "🧬",
    title: "Gut & Digestive Health",
    description:
      "Evidence-based guidance on gut microbiome, food sensitivities, and digestive wellness.",
  },
  {
    icon: "🏋️",
    title: "Sports Nutrition",
    description:
      "Fuel your performance with plans designed around training cycles, recovery, and competition.",
  },
];

const steps = [
  {
    number: "01",
    title: "Book a Free Discovery Call",
    description:
      "Fill out a short intake form and schedule a complimentary 15-minute call to discuss your goals.",
  },
  {
    number: "02",
    title: "Receive Your Custom Plan",
    description:
      "Based on your consultation, receive a tailored nutrition plan within 48 hours.",
  },
  {
    number: "03",
    title: "Start & Track Progress",
    description:
      "Begin your journey with guided support, and review progress in regular check-in sessions.",
  },
];

const testimonials = [
  {
    name: "Aisha M.",
    role: "Lost 14 kg in 4 months",
    quote:
      "I finally have a plan that fits my busy schedule. The consultations felt genuinely personal — not one-size-fits-all.",
    avatar: "A",
  },
  {
    name: "James R.",
    role: "Marathon runner",
    quote:
      "My energy levels during long runs improved drastically after following the sports nutrition plan. Incredible results.",
    avatar: "J",
  },
  {
    name: "Priya K.",
    role: "Managing IBS",
    quote:
      "The gut health program changed my life. I can eat without fear now. Compassionate and science-based guidance.",
    avatar: "P",
  },
];

const faqs = [
  {
    question: "Do I need to be local to book a consultation?",
    answer:
      "Not at all. All consultations are conducted online via video call, so I can work with clients worldwide.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most clients notice meaningful changes within 3–4 weeks. Long-term transformation typically unfolds over 3–6 months.",
  },
  {
    question: "Are the meal plans flexible?",
    answer:
      "Absolutely. Plans account for dietary preferences, allergies, cultural foods, and lifestyle constraints.",
  },
  {
    question: "What qualifications do you hold?",
    answer:
      "I hold a degree in Nutritional Science, a registered dietitian certification, and 8+ years of clinical practice.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navIds: Record<string, string> = {
    Home: "hero",
    About: "about",
    Services: "services",
    "How It Works": "how-it-works",
    Contact: "contact",
  };

  return (
    <main className="bg-[#F8FAFC] text-gray-800 font-sans">
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#F8FAFC]/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-[#3B82F6]">
            Nutri<span className="text-[#06B6D4]">Consult</span>
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(navIds[link])}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book Free Call
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#F8FAFC] border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(navIds[link])}
                className="text-left text-gray-700 font-medium hover:text-[#3B82F6] transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 bg-[#3B82F6] text-white font-semibold py-2.5 rounded-full transition-colors"
            >
              Book Free Call
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14"
      >
        <div className="flex-1 space-y-7">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#06B6D4] bg-[#06B6D4]/10 px-3 py-1 rounded-full">
            Registered Dietitian & Nutritionist
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Eat Smarter.<br />
            <span className="text-[#3B82F6]">Live Better.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            Science-backed, fully personalized nutrition consultations designed around your body, your goals, and your life — not a generic template.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Book a Free Discovery Call
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="border border-gray-300 hover:border-[#3B82F6] text-gray-700 hover:text-[#3B82F6] font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Explore Services
            </button>
          </div>
          <div className="flex flex-wrap gap-8 pt-2">
            {[
              ["200+", "Clients Helped"],
              ["8+", "Years Experience"],
              ["98%", "Satisfaction Rate"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-gray-900">{stat}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration card */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 flex items-center justify-center">
            <span className="text-[110px] select-none">🥦</span>
            <div className="absolute -bottom-4 -right-4 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
              <p className="text-xs text-gray-500">Next available slot</p>
              <p className="text-sm font-semibold text-[#3B82F6]">Tomorrow, 10:00 AM</p>
            </div>
            <div className="absolute -top-4 -left-4 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
              <p className="text-xs text-gray-500">Avg. weight lost</p>
              <p className="text-sm font-semibold text-[#06B6D4]">8–12 kg / 3 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#3B82F6]/30 to-[#06B6D4]/30 flex items-center justify-center text-8xl select-none">
              👩‍⚕️
            </div>
          </div>
          <div className="flex-1 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              Hi, I'm Dr. Layla Hassan
            </h2>
            <p className="text-gray-500 leading-relaxed">
              I'm a Registered Dietitian with a BSc in Nutritional Science and over 8 years of clinical experience. My practice sits at the intersection of evidence-based nutrition and compassionate care.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I believe food should never feel like punishment. My goal is to help you build a sustainable, enjoyable relationship with food — one meal at a time.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["BSc Nutritional Science", "Registered Dietitian", "Gut Health Specialist", "Sports Nutrition"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium bg-[#3B82F6]/10 text-[#3B82F6] px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Services Tailored to You
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every service is built around your unique biology, preferences, and goals.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#3B82F6]/30 hover:shadow-sm transition-all group"
            >
              <span className="text-3xl block mb-4">{s.icon}</span>
              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#3B82F6] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Getting started is simple. Three steps to a healthier, more vibrant you.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center space-y-4">
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-8 left-[calc(50%+48px)] right-0 h-px bg-gray-200" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Real Results, Real People
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-7 space-y-5"
            >
              <p className="text-gray-600 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-[#06B6D4]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full flex justify-between items-center text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / BOOKING ── */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Book Your Free Discovery Call
            </h2>
            <p className="text-gray-500">
              Tell me a bit about yourself and your goals. I'll be in touch within 24 hours to schedule your complimentary 15-minute call.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <span className="text-6xl">🎉</span>
              <h3 className="text-xl font-bold text-gray-900">You're all set!</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                Thanks for reaching out. I'll review your message and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-gray-100 rounded-2xl p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/40 focus:border-[#3B82F6] transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/40 focus:border-[#3B82F6] transition"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700" htmlFor="goal">
                  Primary Goal
                </label>
                <select
                  id="goal"
                  required
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/40 focus:border-[#3B82F6] transition bg-white"
                >
                  <option value="" disabled>Select your main goal…</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Gut Health Improvement</option>
                  <option>Sports Performance</option>
                  <option>General Healthy Eating</option>
                  <option>Managing a Health Condition</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700" htmlFor="message">
                  Tell Me More (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share anything relevant — current diet, health history, challenges…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/40 focus:border-[#3B82F6] transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
              >
                Send My Request →
              </button>
              <p className="text-xs text-center text-gray-400">
                No spam. Your information is 100% private and secure.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-bold text-[#3B82F6] text-base">
            Nutri<span className="text-[#06B6D4]">Consult</span>
          </span>
          <p>© {new Date().getFullYear()} NutriConsult. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="hover:text-[#3B82F6] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
