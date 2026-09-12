function Navbar({ onLogout }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">♥</div>

          <div>
            <h1>
              BloodBridge <span>AI</span>
            </h1>

            <p>Smart blood donation platform</p>
          </div>
        </div>

        <nav className="navbar-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#nearby-donors">Nearby Donors</a>
          <a href="#guidance">Guidance</a>
        </nav>

        <div className="navbar-actions">
          <div className="demo-user">
            <span className="profile-dot"></span>
            Demo User
          </div>

          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;