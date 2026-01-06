import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>TOEIC Practice Web</h1>
        <nav>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Học từ vựng</a></li>
            <li><a href="#">Thi thử</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero / Banner */}
      <section className="home-hero">
        <h2>Chinh phục TOEIC dễ dàng</h2>
        <p>Học từ vựng thông minh, thi thử chính xác, nâng band điểm nhanh chóng.</p>
        <button>Bắt đầu học</button>
      </section>

      {/* Features */}
      <section className="home-features">
        <div className="feature-card">
          <h3>Học từ vựng</h3>
          <p>Hệ thống từ vựng TOEIC theo cấp độ, giúp bạn ghi nhớ nhanh.</p>
        </div>
        <div className="feature-card">
          <h3>Thi thử TOEIC</h3>
          <p>Đề thi chuẩn format, chấm điểm tự động và có giải thích đáp án.</p>
        </div>
        <div className="feature-card">
          <h3>Thống kê tiến bộ</h3>
          <p>Theo dõi tiến bộ học tập và nâng cao band điểm một cách hiệu quả.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 TOEIC Practice Web. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
