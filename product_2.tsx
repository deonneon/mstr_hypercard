import React from "react";

const features = [
  {
    icon: "✨", // Replaced Sparkles icon
    title: "Instant Insights",
    description: "HyperCard delivers real-time analytics in an intuitive, card-based interface—no need to run reports or dashboards."
  },
  {
    icon: "🚀", // Replaced Rocket icon
    title: "Lightning-Fast Deployment",
    description: "Easily embed HyperCards into your apps, portals, or workflows without heavy lifting."
  },
  {
    icon: "⚡", // Replaced Zap icon
    title: "Low-Code Magic",
    description: "Create personalized cards with minimal code, and let business users configure them further."
  }
];

const testimonials = [
  {
    name: "Alex R.",
    role: "BI Manager, TechCorp",
    quote: "HyperCard has redefined the way our team interacts with data. It's fast, sleek, and incredibly easy to use."
  },
  {
    name: "Jasmine T.",
    role: "Director of Ops, FinServe",
    quote: "We were already invested in MicroStrategy, and HyperCard gave us an instant upgrade in how we deliver insights."
  }
];

const checklist = [
  "Ensure your environment is on MicroStrategy Cloud or version 2024+",
  "Access your Dossiers and identify key metrics",
  "Open HyperCard Designer from your Workstation or Library",
  "Drag, configure, and publish your first card!"
];

export default function HyperCardFeaturePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* Introduction */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-sky-100 to-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          HyperCard: Embedded Analytics for Every Workflow
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          Extend the value of your MicroStrategy platform by embedding cards that surface insights exactly where decisions are made.
        </p>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why HyperCard Stands Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="shadow-md hover:shadow-lg transition p-6 bg-white rounded-lg">
                <div className="flex justify-center text-sky-600 mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Real-World Applications</h2>
        <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold text-xl mb-2">CRM Integration</h3>
            <p>Empower sales teams by embedding KPIs inside Salesforce or HubSpot for data-driven action.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Operations Dashboards</h3>
            <p>Track uptime, SLAs, and workflows with lightweight cards that update in real time.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Support Portals</h3>
            <p>Deliver context-aware metrics right inside customer service tools for faster resolutions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Executive Apps</h3>
            <p>Serve C-level stakeholders with mobile-friendly cards tailored to decision-making moments.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-sky-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Teams Are Saying</h2>
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-lg italic text-gray-800">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-gray-700">- {t.name}, {t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Watch HyperCard in Action</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          A 3-minute walkthrough showing how to go from concept to deployment—all within MicroStrategy.
        </p>
        <div className="flex justify-center">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="HyperCard Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">How to Activate HyperCard</h2>
        <ul className="max-w-xl mx-auto text-left text-lg text-gray-700 space-y-4">
          {checklist.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-sky-600 font-bold">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-sky-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Deploy HyperCard?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          HyperCard is included with your MicroStrategy platform. Start building today and deliver insights exactly where they're needed.
        </p>
        <button className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white shadow-md px-6 py-3 text-lg font-semibold">
          Launch HyperCard Designer
        </button>
      </section>
    </div>
  );
}