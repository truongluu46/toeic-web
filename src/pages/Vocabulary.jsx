import "../styles/Vocabulary.css";

export default function Vocabulary() {
  return (
    <div className="vocab-page">
      <h1>📘 TOEIC Vocabulary</h1>
      <p className="subtitle">
        Learn important TOEIC words by topic and level
      </p>

      {/* Filter */}
      <div className="vocab-filter">
        <input type="text" placeholder="Search word..." />

        <select>
          <option>All Topics</option>
          <option>Business</option>
          <option>Office</option>
          <option>Travel</option>
          <option>Finance</option>
        </select>
      </div>

      {/* Vocabulary list */}
      <div className="vocab-list">
        <div className="vocab-card">
          <h3>contract</h3>
          <span className="type">noun</span>
          <p>An official written agreement</p>
        </div>

        <div className="vocab-card">
          <h3>deadline</h3>
          <span className="type">noun</span>
          <p>The latest time something must be done</p>
        </div>

        <div className="vocab-card">
          <h3>negotiate</h3>
          <span className="type">verb</span>
          <p>To discuss in order to reach an agreement</p>
        </div>
      </div>
    </div>
  );
}
