import "../styles/Practice.css";

export default function Practice() {
  return (
    <div className="practice-wrapper">
      {/* Header */}
      <div className="practice-header">
        <h1>TOEIC Practice</h1>
        <div className="practice-info">
          <span>Part 5</span>
          <span>Question 1 / 30</span>
          <span className="timer">⏱ 19:45</span>
        </div>
      </div>

      {/* Part selector */}
      <div className="part-selector">
        {["1","2","3","4","5","6","7"].map((p) => (
          <button
            key={p}
            className={`part-chip ${p === "5" ? "active" : ""}`}
          >
            Part {p}
          </button>
        ))}
      </div>

      {/* Question card */}
      <div className="question-card">
        <div className="question-title">
          Question 1
        </div>

        <p className="question-text">
          The meeting has been postponed _____ next Monday due to scheduling conflicts.
        </p>

        <div className="options">
          <label className="option">
            <input type="radio" name="q1" />
            <span>A. at</span>
          </label>

          <label className="option">
            <input type="radio" name="q1" />
            <span>B. on</span>
          </label>

          <label className="option">
            <input type="radio" name="q1" />
            <span>C. in</span>
          </label>

          <label className="option">
            <input type="radio" name="q1" />
            <span>D. for</span>
          </label>
        </div>

        {/* Actions */}
        <div className="question-actions">
          <button className="btn-outline">Previous</button>
          <button className="btn-primary">Next Question →</button>
        </div>
      </div>
    </div>
  );
}
