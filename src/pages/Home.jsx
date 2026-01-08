import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">TOEIC Practice</div>
        <nav>
          <a href="/">Home</a>
          <a href="/vocabulary">Vocabulary</a>
          <a href="/practice">Practice</a>
          <a href="/test">Mock Test</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero animate-fade-up">
        <div className="hero-content">
          <h1>Boost Your TOEIC Score</h1>
          <p>
            Learn vocabulary effectively, practice with real TOEIC questions,
            and track your progress.
          </p>
          <div className="hero-actions">
            <button className="btn primary">Start Learning</button>
            <button className="btn outline">Take a Test</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features animate-fade-up delay-1">
        <h2>What you can do</h2>

        <div className="feature-list">
          <div className="feature-card">
            <h3>📘 Vocabulary</h3>
            <p>TOEIC vocabulary organized by topic and difficulty level.</p>
          </div>

          <div className="feature-card">
            <h3>📝 Practice</h3>
            <p>Practice listening & reading questions with explanations.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Progress</h3>
            <p>Track your learning progress and test results easily.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta animate-fade-up delay-2">
        <h2>Ready to improve your TOEIC?</h2>
        <button className="btn primary">Get Started Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 TOEIC Practice Web
      </footer>
    </div>
  );
}

export default Home;
