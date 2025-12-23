import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const revealRefs = useRef([]);
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealRefs.current.forEach(el => el && observer.observe(el));
  return () => observer.disconnect();
}, []);


 useEffect(() => {
  const stepObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveStep(Number(entry.target.dataset.step));
        }
      });
    },
    {
      threshold: 0.55,
      rootMargin: "-20% 0px -20% 0px"
    }
  );

  stepRefs.current.forEach(el => el && stepObserver.observe(el));
  return () => stepObserver.disconnect();
}, []);


  return (
    <main className="pb-[400px]">
      {/* HERO */}
      <section className="hero">
        <div className="ambient-bg" />

        <div className="hero-content">
          <h1 ref={el => (revealRefs.current[0] = el)} className="reveal">
            Financial infrastructure for modern nonprofits
          </h1>

          <p
            ref={el => (revealRefs.current[1] = el)}
            className="reveal delay-1"
          >
            Accept donations, manage payouts, and scale your mission with
            confidence.
          </p>

          <button
            ref={el => (revealRefs.current[2] = el)}
            className="reveal delay-2"
          >
            Get started
          </button>
        </div>
      </section>

      {/* STICKY SECTION */}
      <section className="sticky-section">
        <div className="sticky-visual">
          <div className={`visual-card step-${activeStep}`}>
            Step {activeStep + 1}
          </div>
        </div>

        <div className="steps">
          {[
            {
              title: "Accept donations globally",
              text: "Secure, fast, and compliant donation processing."
            },
            {
              title: "Automate reporting",
              text: "Real-time insights for finance and compliance teams."
            },
            {
              title: "Scale without friction",
              text: "Infrastructure that grows with your mission."
            }
          ].map((step, i) => (
            <div
              key={i}
              ref={el => (stepRefs.current[i] = el)}
              data-step={i}
              className={`step ${activeStep === i ? "active" : ""}`}
            >
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
