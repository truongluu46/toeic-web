import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Practice from "./pages/Practice.jsx";
import Vocabulary from "./pages/Vocabulary.jsx";
import Tests from "./pages/tests.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
      <Route path="/Tests" element={<Tests />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
