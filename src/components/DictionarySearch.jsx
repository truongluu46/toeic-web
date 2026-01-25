import { useState } from "react";
import { fetchWord } from "../api/dictionaryApi";

function DictionarySearch() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!word.trim()) return;

    try {
      setError("");
      const data = await fetchWord(word);
      setResult(data[0]);
    } catch (err) {
      setResult(null);
      setError("Không tìm thấy từ này");
    }
  };

  return (
    <div className="dictionary">
      <h2>Tra cứu từ vựng</h2>

      <input
        type="text"
        placeholder="Nhập từ tiếng Anh..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearch}>Tra cứu</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div className="result">
          <h3>{result.word}</h3>
          <p><b>Phiên âm:</b> {result.phonetic}</p>

          {result.meanings.map((m, index) => (
            <div key={index}>
              <p><b>{m.partOfSpeech}</b></p>
              <ul>
                {m.definitions.map((d, i) => (
                  <li key={i}>{d.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DictionarySearch;
