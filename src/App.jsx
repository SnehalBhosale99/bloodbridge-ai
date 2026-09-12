import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import DonorMatcher from "./components/DonorMatcher";
import AIChatbot from"./components/AIChatbot";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app">
      <Navbar onLogout={handleLogout} />

      <main className="dashboard-container">
        <section id="dashboard" className="welcome-section">
          <div className="welcome-content">
            <p className="section-label">WELCOME TO BLOODBRIDGE AI</p>

            <h1>
              Find help.
              <br />
              <span>Share hope.</span>
            </h1>

            <p className="welcome-description">
              Explore nearby fictional donor profiles, blood donation
              education, and intelligent frontend features in one place.
            </p>

            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("nearby-donors")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Nearby Donors →
            </button>
          </div>

          <div className="welcome-heart">
            <div className="heart-circle">♥</div>

            <div className="floating-stat stat-one">
              <strong>28</strong>
              <span>Demo Donors</span>
            </div>

            <div className="floating-stat stat-two">
              <strong>8</strong>
              <span>Blood Groups</span>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">♥</div>

            <div>
              <p>Demo Donors</p>
              <h2>28</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">◉</div>

            <div>
              <p>Blood Groups</p>
              <h2>8</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✦</div>

            <div>
              <p>AI Assistant</p>
              <h2>Ready</h2>
            </div>
          </div>
        </section>

        <section id="nearby-donors" className="matching-section">
          <DonorMatcher />
        </section>

        <section className="ai-section">
         <AIChatbot />
        </section>

        <section id="guidance" className="guidance-section">
          <div className="section-heading">
            <p className="section-label">SAFE EDUCATION</p>

            <h2>Blood Donation Guidance</h2>

            <p>
              This information is general education only. Donor eligibility
              and blood transfusion compatibility must always be confirmed by
              qualified medical professionals.
            </p>
          </div>

          <div className="guidance-grid">
            <article className="guidance-card">
              <div className="guidance-icon">01</div>

              <h3>Before donating</h3>

              <p>
                Follow the blood bank's instructions, stay hydrated, and share
                relevant health information with medical staff.
              </p>
            </article>

            <article className="guidance-card">
              <div className="guidance-icon">02</div>

              <h3>During donation</h3>

              <p>
                Follow the staff's instructions and report dizziness,
                discomfort, or unusual symptoms immediately.
              </p>
            </article>

            <article className="guidance-card">
              <div className="guidance-icon">03</div>

              <h3>After donation</h3>

              <p>
                Rest as advised, drink fluids, and follow the aftercare
                instructions provided by the blood bank.
              </p>
            </article>
          </div>
        </section>

        <section className="safety-notice">
          <h3>Important Safety Notice</h3>

          <p>
            BloodBridge AI is an educational frontend prototype. It uses
            fictional donor information and does not perform real donor
            matching, medical diagnosis, emergency triage, or transfusion
            decisions.
          </p>

          <p>
            For an actual blood requirement, contact a verified blood bank,
            hospital, or emergency medical service.
          </p>
        </section>

        <footer className="app-footer">
          <p>
            © 2026 BloodBridge AI — Smart technology for blood donation
            awareness.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;