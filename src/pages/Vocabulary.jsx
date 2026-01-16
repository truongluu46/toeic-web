import "../styles/Vocabulary.css";

export default function Vocabulary() {
  return (
    <div className="vocab-wrapper">
      {/* Header */}
      <div className="vocab-header">
        <div>
          <h1>TOEIC Vocabulary</h1>
          <p>Learn essential words for the TOEIC exam</p>
        </div>

        <div className="vocab-stats">
          <div>
            <strong>1200</strong>
            <span>Words</span>
          </div>
          <div>
            <strong>8</strong>
            <span>Topics</span>
          </div>
          <div>
            <strong>65%</strong>
            <span>Mastered</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="vocab-toolbar">
        <input
          type="text"
          placeholder="🔍 Search vocabulary..."
        />

        <select>
          <option>All Topics</option>
          <option>Business</option>
          <option>Office</option>
          <option>Travel</option>
          <option>Finance</option>
        </select>

        <select>
          <option>All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      {/* Vocabulary Grid */}
      <div className="vocab-grid">
        <div className="vocab-item">
          <div className="word-row">
            <h3>contract</h3>
            <span className="level">Intermediate</span>
          </div>

          <p className="meaning">
            An official written agreement between two parties.
          </p>

          <div className="tags">
            <span>Business</span>
            <span>Legal</span>
          </div>

          <div className="actions">
            <button className="learn">Learn</button>
            <button className="save">☆ Save</button>
          </div>
        </div>

        <div className="vocab-item">
          <div className="word-row">
            <h3>deadline</h3>
            <span className="level">Beginner</span>
          </div>

          <p className="meaning">
            The latest time by which something must be completed.
          </p>

          <div className="tags">
            <span>Office</span>
            <span>Time</span>
          </div>

          <div className="actions">
            <button className="learn">Learn</button>
            <button className="save">☆ Save</button>
          </div>
        </div>

        <div className="vocab-item">
          <div className="word-row">
            <h3>negotiate</h3>
            <span className="level">Advanced</span>
          </div>

          <p className="meaning">
            To discuss formally in order to reach an agreement.
          </p>

          <div className="tags">
            <span>Business</span>
            <span>Communication</span>
          </div>

          <div className="actions">
            <button className="learn">Learn</button>
            <button className="save">☆ Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
