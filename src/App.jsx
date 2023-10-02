import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppHome from "./components/AppHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appHome" element={<AppHome />} />
      </Routes>
    </Router>
  );
}

export default App;
