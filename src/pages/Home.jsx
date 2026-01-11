import "./Home.css";
import "../styles/animations.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Home() {
  useScrollAnimation();

  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar reveal active">
        <div className="logo">TOEIC Practice</div>
        <nav>
          <a href="/">Home</a>
          <a href="/vocabulary">Vocabulary</a>
          <a href="/practice">Practice</a>
          <a href="/test">Mock Test</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero reveal">
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
      <section className="features reveal delay-1">
        <h2>What you can do</h2>

        <div className="feature-list">
          <div className="feature-card reveal delay-1 scale">
            <h3>📘 Vocabulary</h3>
            <p>TOEIC vocabulary organized by topic.</p>
          </div>

          <div className="feature-card reveal delay-2 scale">
            <h3>📝 Practice</h3>
            <p>Real TOEIC questions with explanation.</p>
          </div>

          <div className="feature-card reveal delay-3 scale">
            <h3>📊 Progress</h3>
            <p>Track scores & improvement.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal delay-2">
        <h2>Ready to improve your TOEIC?</h2>
        <button className="btn primary">Get Started Now</button>
      </section>

      <footer className="footer reveal delay-3">
        © 2026 TOEIC Practice Web
      </footer>
    </div>
  );
}

export default Home;
