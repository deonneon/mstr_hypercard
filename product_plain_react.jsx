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

const styles = `
  .container {
    min-height: 100vh;
    background-color: #ffffff;
    color: #1a202c;
    scroll-behavior: smooth;
  }

  .section {
    padding: 6rem 1.5rem;
    text-align: center;
  }

  .intro-section {
    background: linear-gradient(to bottom right, #e6f3ff, #ffffff);
  }

  .h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .h1-md {
    font-size: 4rem;
  }

  .p-large {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  .p-xl {
    font-size: 1.5rem;
  }

  .features-section {
    background-color: #ffffff;
  }

  .h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    .feature-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .feature-card {
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    border-radius: 0.5rem;
    transition: box-shadow 0.3s ease;
  }

  .feature-card:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
  }

  .icon {
    color: #0ea5e9;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .p {
    color: #4a5568;
  }

  .use-cases-section {
    background-color: #f7fafc;
    padding: 5rem 1.5rem;
  }

  .use-cases-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.125rem;
    color: #4a5568;
  }

  @media (min-width: 768px) {
    .use-cases-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .h3-use-case {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .testimonials-section {
    background-color: #e6f3ff;
    padding: 5rem 1.5rem;
  }

  .testimonial-card {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
  }

  .quote {
    font-style: italic;
    color: #2d3748;
    font-size: 1.125rem;
  }

  .author {
    margin-top: 1rem;
    font-weight: bold;
    color: #4a5568;
  }

  .video-section {
    background-color: #ffffff;
    padding: 5rem 1.5rem;
    text-align: center;
  }

  .iframe {
    width: 100%;
    max-width: 64rem;
    aspect-ratio: 16 / 9;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .getting-started-section {
    background-color: #f7fafc;
    padding: 5rem 1.5rem;
    text-align: center;
  }

  .checklist {
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 1.125rem;
    color: #4a5568;
    list-style-type: none;
    padding: 0;
  }

  .checklist li {
    display: flex;
    align-items: start;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .checklist-number {
    color: #0ea5e9;
    font-weight: bold;
  }

  .cta-section {
    background-color: #f0f8ff;
    padding: 6rem 1.5rem;
    text-align: center;
  }

  .button {
    background-color: #0ea5e9;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #0284c7;
  }
`;

export default function HyperCardFeaturePage() {
  return (
    <div className="container">
      <style>{styles}</style>

      {/* Introduction */}
      <section className="section intro-section">
        <h1 className="h1">
          HyperCard: Embedded Analytics for Every Workflow
        </h1>
        <p className="p-large">
          Extend the value of your MicroStrategy platform by embedding cards that surface insights exactly where decisions are made.
        </p>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div>
          <h2 className="h2">Why HyperCard Stands Out</h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="icon">{feature.icon}</div>
                <h3 className="h3">{feature.title}</h3>
                <p className="p">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section use-cases-section">
        <h2 className="h2">Real-World Applications</h2>
        <div className="use-cases-grid">
          <div>
            <h3 className="h3-use-case">CRM Integration</h3>
            <p>Empower sales teams by embedding KPIs inside Salesforce or HubSpot for data-driven action.</p>
          </div>
          <div>
            <h3 className="h3-use-case">Operations Dashboards</h3>
            <p>Track uptime, SLAs, and workflows with lightweight cards that update in real time.</p>
          </div>
          <div>
            <h3 className="h3-use-case">Support Portals</h3>
            <p>Deliver context-aware metrics right inside customer service tools for faster resolutions.</p>
          </div>
          <div>
            <h3 className="h3-use-case">Executive Apps</h3>
            <p>Serve C-level stakeholders with mobile-friendly cards tailored to decision-making moments.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <h2 className="h2">What Teams Are Saying</h2>
        <div>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="quote">“{t.quote}”</p>
              <p className="author">- {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demo */}
      <section className="section video-section">
        <h2 className="h2">Watch HyperCard in Action</h2>
        <p className="p-large">
          A 3-minute walkthrough showing how to go from concept to deployment—all within MicroStrategy.
        </p>
        <div>
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="HyperCard Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section getting-started-section">
        <h2 className="h2">How to Activate HyperCard</h2>
        <ul className="checklist">
          {checklist.map((step, index) => (
            <li key={index}>
              <span className="checklist-number">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <h2 className="h1 h1-md">
          Ready to Deploy HyperCard?
        </h2>
        <p className="p-large">
          HyperCard is included with your MicroStrategy platform. Start building today and deliver insights exactly where they're needed.
        </p>
        <button className="button">Launch HyperCard Designer</button>
      </section>
    </div>
  );
}