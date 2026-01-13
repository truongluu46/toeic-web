import "../styles/Practice.css";

export default function Practice() {
  return (
    <div className="practice-page">
      <h1>📝 TOEIC Practice</h1>
      <p className="subtitle">
        Practice real TOEIC questions by part
      </p>

      {/* Part selection */}
      <div className="part-list">
        <button className="part-btn">Part 1</button>
        <button className="part-btn">Part 2</button>
        <button className="part-btn">Part 3</button>
        <button className="part-btn">Part 4</button>
        <button className="part-btn active">Part 5</button>
        <button className="part-btn">Part 6</button>
        <button className="part-btn">Part 7</button>
      </div>

      {/* Question card */}
      <div className="question-card">
        <h3>Question 1</h3>
        <p>
          The meeting has been postponed _____ next Monday.
        </p>

        <div className="answers">
          <button>A. at</button>
          <button>B. on</button>
          <button>C. in</button>
          <button>D. for</button>
        </div>
      </div>
    </div>
  );
}
