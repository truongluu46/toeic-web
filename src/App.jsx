import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Practice from "./pages/Practice.jsx";
import Vocabulary from "./pages/Vocabulary.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/practice" element={<Practice />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
