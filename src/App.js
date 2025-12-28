import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CursorAnimation from "./components/CursorAnimation/CursorAnimation";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <CursorAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;