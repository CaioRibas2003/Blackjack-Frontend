import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import BlackjackPage from "./pages/blackjack/BlackjackPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<BlackjackPage />} />
    </Routes>
  );
}

export default App;
