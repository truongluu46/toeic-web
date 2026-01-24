import { TESTS } from "../data/tests";
import "../styles/Tests.css";

export default function Tests() {
  return (
    <div className="tests-wrapper">
      <h1>📘 TOEIC Tests</h1>
      <p className="subtitle">
        Choose a test and start practicing like the real exam
      </p>

      <div className="tests-grid">
        {TESTS.map((test) => (
          <div key={test.id} className="test-card">
            <h3>{test.title}</h3>

            <ul>
              <li>📄 Parts: {test.parts}</li>
              <li>❓ Questions: {test.questions}</li>
              <li>⏱ Duration: {test.duration} min</li>
              <li>🎯 Level: {test.level}</li>
            </ul>

            <button className="start-btn">
              Start Test →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
