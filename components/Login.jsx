import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  return (
    <main className="login-page">
      <section className="login-left">
        <div className="login-brand">
          <div className="login-logo">♥</div>

          <h1>
            BloodBridge <span>AI</span>
          </h1>

          <p>Smart blood donation platform</p>
        </div>

        <div className="login-message">
          <h2>Every drop can save a life.</h2>

          <p>
            Welcome to BloodBridge AI, an educational platform
            designed to encourage blood donation and provide
            helpful blood donation information.
          </p>
        </div>

        <p className="login-left-footer">
          Educational frontend prototype
        </p>
      </section>

      <section className="login-right">
        <div className="login-card">
          <p className="section-label">WELCOME BACK</p>

          <h2>Login to BloodBridge AI</h2>

          <p className="login-subtitle">
            Access your blood donation dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <p className="login-note">
            Demo login only. No real account is created.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;