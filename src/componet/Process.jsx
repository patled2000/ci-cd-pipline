import React from "react";
import "../Style/process.css";

/**
 * Replace icon SVGs or images if you want custom art.
 * This component is self-contained and mobile-first.
 */

const steps = [
  {
    id: 1,
    title: "Select Raw Materials",
    desc: "We source premium natural ingredients — bamboo sticks, aromatic powders & essential oils.",
    icon: "leaf",
  },
  {
    id: 2,
    title: "Hand Blending",
    desc: "Expert artisans mix raw powders and oils to create consistent, long-lasting fragrances.",
    icon: "mix",
  },
  {
    id: 3,
    title: "Shaping & Drying",
    desc: "Sticks are formed and naturally dried under controlled conditions for perfect burn.",
    icon: "shape",
  },
  {
    id: 4,
    title: "Quality Check & Packaging",
    desc: "Each batch goes through fragrance, burn-time & packaging inspection before dispatch.",
    icon: "check",
  },
];

export default function Process() {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="process-inner">
        <h2 id="process-title" className="process-title">How We Make It</h2>
        <p className="process-sub">Traditional craft + modern quality control — step by step.</p>

        <div className="process-grid">
          {steps.map((s, i) => (
            <article key={s.id} className={`process-card ${s.id === 4 ? "highlight" : ""}`}>
              <div className="step-icon-wrapper">
                <div className="step-number">{s.id}</div>
                <div className="step-icon" aria-hidden>
                  {s.icon === "leaf" && (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 12s4-7 10-7c0 0-1 7-6 12C3 21 2 12 2 12z" /></svg>
                  )}
                  {s.icon === "mix" && (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12h18M7 6l10 12" /></svg>
                  )}
                  {s.icon === "shape" && (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                  )}
                  {s.icon === "check" && (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 6L9 17l-5-5" /></svg>
                  )}
                </div>
              </div>

              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>

                {s.id === 4 && (
                  <ul className="qc-list" aria-label="Quality checks">
                    <li><strong>Fragrance test</strong> — consistency & intensity</li>
                    <li><strong>Burn test</strong> — even burn & smoke level</li>
                    <li><strong>Packing check</strong> — seals & labeling</li>
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="process-cta">
          <a href="#contact" className="primary-btn">Order Bulk / Inquire</a>
          <a href="#gallery" className="ghost-btn">See Manufacturing Gallery</a>
        </div>
      </div>
    </section>
  );
}
