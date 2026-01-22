import { useState } from "react";
import "../styles/Vocabulary.css";

// MOCK DATA
const VOCABULARY_LIST = [
  {
    id: 1,
    word: "contract",
    meaning: "An official written agreement between two parties.",
    level: "Intermediate",
    topics: ["Business", "Legal"],
  },
  {
    id: 2,
    word: "deadline",
    meaning: "The latest time by which something must be completed.",
    level: "Beginner",
    topics: ["Office", "Time"],
  },
  {
    id: 3,
    word: "negotiate",
    meaning: "To discuss formally in order to reach an agreement.",
    level: "Advanced",
    topics: ["Business", "Communication"],
  },
];

// MAIN COMPONENTS
export default function Vocabulary() {
  const [mode, setMode] = useState("list");
  const [search, setSearch] = useState("");

  const filteredList = VOCABULARY_LIST.filter((item) =>
    item.word.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vocab-wrapper">
      <Header />

      <Toolbar search={search} setSearch={setSearch} />

      <ModeSwitch mode={mode} setMode={setMode} />

      {mode === "list" && <VocabularyGrid list={filteredList} />}

      {mode === "flashcard" && <Flashcard />}
    </div>
  );
}

// Sub components
function Header() {
  return (
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
  );
}

function Toolbar({ search, setSearch }) {
  return (
    <div className="vocab-toolbar">
      <input
        type="text"
        placeholder="🔍 Search vocabulary..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
  );
}

function ModeSwitch({ mode, setMode }) {
  return (
    <div className="mode-switch">
      <button
        className={mode === "list" ? "active" : ""}
        onClick={() => setMode("list")}
      >
        📋 List
      </button>

      <button
        className={mode === "flashcard" ? "active" : ""}
        onClick={() => setMode("flashcard")}
      >
        🔄 Flashcard
      </button>
    </div>
  );
}

function VocabularyGrid({ list }) {
  return (
    <div className="vocab-grid">
      {list.map((item) => (
        <VocabularyCard key={item.id} data={item} />
      ))}
    </div>
  );
}

function VocabularyCard({ data }) {
  return (
    <div className="vocab-item">
      <div className="word-row">
        <h3>{data.word}</h3>
        <span className="level">{data.level}</span>
      </div>

      <p className="meaning">{data.meaning}</p>

      <div className="tags">
        {data.topics.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="actions">
        <button className="learn">Learn</button>
        <button className="save">☆ Save</button>
      </div>
    </div>
  );
}

function Flashcard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard-wrapper">
      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card front">
          <h2>contract</h2>
          <p>Business · Intermediate</p>
          <span>Click to flip</span>
        </div>

        <div className="card back">
          <h3>Meaning</h3>
          <p>An official written agreement between two parties.</p>
        </div>
      </div>
    </div>
  );
}
